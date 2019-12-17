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
    cb(null, '../frontend/src/assets/tamga/')
  },
  filename: function(req, file, cb){
    // console.log(file);
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
const upload = multer({
  storage: storage, 
  limits: {
    fileSize: 1024*1024*5
  },
  fileFilter: fileFilter,
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
router.get('/user', (req, res, next) => {
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
router.post('/photo',upload.single('stampImage'),(req, res, next) =>{
  if(req.file){
    //console.log(req.file);
    req.body.photo = req.file.filename;
    res.send(req.file.filename);
  }
})
router.post('/task',(req, res, next) => {
  //res.json(req.file);
  const userData = {
    firstname : req.body.firstname,
    lastname :  req.body.lastname,
    location :  req.body.location,
    password :  req.body.password,
    mail : req.body.mail,
    aimag : req.body.aimag,
    phone : req.body.phone
  }
   Task.findOne({
     where: {
       mail: req.body.mail
     }
   })
    .then(tasks => {
      if(!tasks){
        console.log("yeee");
          Task.create(userData)
          .then(tasks =>{
            res.send("1")
            res.json({ status: tasks.mail + 'registered'})
          })
          .catch(err => {
            res.send('error: ' + err)
          })
      }else{
        res.send("0")
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
      res.send(req.body.mail)
    }else{
      res.status(400).json({error: "User does not exits"})
    }
  })
  .catch(err => {
    res.status(400).json({error: err})
  })
})
router.post('/logout',(req, res) => {
  tamga.findAll()
  .then(res => {
    res.send('1')
  })
  .catch(err => {
    res.send('1')
  })
})
router.post('/tamga', (req, res, next) => {
  const tamgaData = {
    stampname :  req.body.stampname,
    define :  req.body.define,
    stampImage : req.body.stampImage,
    userid : req.body.userid,
    typeStamp: req.body.type,
    uy: req.body.uy,
    bilgedel: req.body.bilgedel,
    location: req.body.location
  }
  if (!tamgaData) {
    res.status(400)
    res.json({
      error: 'Bad Data'
    })
  } else {
    tamga.create(tamgaData)
      .then(() => {
        res.send('Tamga Added!'+req.body.stampname)
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
//get one row value
router.get('/tamgas/:id',(req,res,next)=>{
  tamga.findAll({
    where: {
      userid: req.params.id
    }
  })
  .then(tamga=>{
    res.json(tamga)
  })
  .catch(err => {
    res.send('error: '+err)
  })
})

router.get('/user/:mail',(req,res,next)=>{
  Task.findOne({
    where: {
      mail: req.params.mail
    }
  })
  .then(tamga=>{
    res.json(tamga)
  })
  .catch(err => {
    res.send('error: '+err)
  })
})
router.get('/usera/:id',(req,res,next)=>{
  Task.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(tamga=>{
    res.json(tamga)
  })
  .catch(err => {
    res.send('error: '+err)
  })
})

router.get('/tamga/:id',(req,res,next)=>{
  tamga.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(tamga=>{
    res.json(tamga)
  })
  .catch(err => {
    res.send('error: '+err)
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
  if (!req.body.stampname) {
    res.status(400)
    res.json({
      error: 'Bad Data'
    })
  } else {
    tamga.update(
      { stampname: req.body.stampname,
      location: req.body.aimag,
      define: req.body.define,
      userid: req.body.userid,
      stampImage : req.body.stampImage,
      typeStamp: req.body.type,
      uy: req.body.uy,
      bilgedel: req.body.bilgedel},
      {where: { id: req.params.id } }
    )
      .then(() => {
        res.send('Task Updated!')
      })
      .error(err => handleError(err))
  }
})
module.exports = router