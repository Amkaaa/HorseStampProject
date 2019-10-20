var express = require('express')
var multer = require('multer')
var router = express.Router()
//const path = require('path')
const Task = require('../model/Task')
const tamga = require('../model/tamga')
const app = express()
const cors = require('cors')
//const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './uploads/')
  },
  filename: function(req, file, cb){
    cb(null, Date.now() + file.originalname)
  }
})
const fileFilter = (res, file, cb)=>{
  // reject file
  if(file.mimetype == 'image/jpeg' || file.mimetype == 'image/png'){
    cb(null, true)
  }else{
    cb(null, false)
  }
}
const path = (res, file, cb)=>{
  if(file.path!=NULL){
    cb(null, true)
  }
}
const upload = multer({
  storage: storage, 
  limits: {
    fileSize: 1024*1024*5
  },
  fileFilter: fileFilter,
  path: path
})
app.use(cors())


process.env.SECRET_KEY = 'secret'
// Get All Tasks
router.get('/tasks', (req, res, next) => {
  Task.findAll()
    .then(tasks => {
      res.json(tasks)
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})
router.get('/stamps', (req, res, next) => {
  tamga.findAll()
    .then(stamps => {
      res.json(stamps)
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})
router.post('/task', upload.single('stampImage'),(req, res, next) => {
  //res.json(req.file);
  const userData = {
    firstname : req.body.firstname,
    lastname :  req.body.lastname,
    location :  req.body.location,
    password :  req.body.password,
    stamp_name :  req.body.stamp_name,
    define :  req.body.define,
    stampImage : req.file.path,
    mail : req.body.mail,
    aimag : req.body.aimag
  }

  Task.findOne({
    where: {
      mail: req.body.mail
    }
  })
    .then(tasks => {
      if(!tasks){
          Task.create(userData)
          .then(tasks =>{
            res.json({ status: tasks.mail + 'registered'})
          })
          .catch(err => {
            res.send('error: ' + err)
          })
      }else{
        res.json({error: 'User already exists'})
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})
router.post('/login',(req, res) => {
  Task.findOne({
    where: {
      mail: req.body.mail,
      password: req.body.password
    }
  })
  .then(tasks => {
    if(tasks) {
      //res.send(req.body.password)
      let token = jwt.sign(tasks.dataValues, process.env.SECRET_KEY,{
        expiresIn: 1440
      })
      res.send(token)
    }else{
      res.status(400).json({error: "User does not exits"})
    }
  })
  .catch(err => {
    res.status(400).json({error: err})
  })
})
router.post('/tamga', (req, res, next) => {
  const tamgaData = {
    stampname :  req.body.stampname,
    define :  req.body.define,
    photo : req.body.photo,
    userid : req.body.photo
  }
  if (!tamgaData) {
    res.status(400)
    res.json({
      error: 'Bad Data'
    })
  } else {
    tamga.create(tamgaData)
      .then(() => {
        res.send('Task Added!'+req.body.stampname)
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  }
})

router.delete('/task/:id', (req, res, next) => {
  Task.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => {
      res.send('Task deleted!')
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})
router.delete('/tamga/:id', (req, res, next) => {
  tamga.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => {
      res.send('Task deleted!')
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

// Update Task
router.put('/task/:id', (req, res, next) => {
  if (!req.body.lastname) {
    res.status(400)
    res.json({
      error: 'Bad Data'
    })
  } else {
    Task.update(
      { lastname: req.body.lastname,
       firstname: req.body.firstname,
       stamp_name: req.body.stamp_name,
       mail: req.body.mail,
       password: req.body.password,
       location: req.body.location,
       date: req.body.date,
       define: req.body.define},
      { where: { id: req.params.id } }
    )
      .then(() => {
        res.send('Task Updated!')
      })
      .error(err => handleError(err))
  }
})
router.put('/tamga/:id', (req, res, next) => {
  if (!req.body.lastname) {
    res.status(400)
    res.json({
      error: 'Bad Data'
    })
  } else {
    tamga.update(
      { stamp_name: req.body.stamp_name},
      { location: req.body.location},
      { define: req.body.define},
      { userid: req.body.userid},
      { where: { id: req.params.id } }
    )
      .then(() => {
        res.send('Task Updated!')
      })
      .error(err => handleError(err))
  }
})
module.exports = router