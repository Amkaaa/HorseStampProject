var express = require('express')
var multer = require('multer')
var router = express.Router()
const path = require('path')
const Task = require('../model/Task')
const app = express()
const cors = require('cors')
app.use(cors())

//init upload 
const upload = multer({
  
});

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

router.post('/task', (req, res, next) => {
  const userData = {
    firstname : req.body.firstname,
    lastname :  req.body.lastname,
    location :  req.body.location,
    password :  req.body.password,
    stamp_name :  req.body.stamp_name,
    define :  req.body.define,
    photo : req.body.photo,
    mail : req.body.mail,
    aimag : req.body.aimag
  }
  if (!userData) {
    res.status(400)
    res.json({
      error: 'Bad Data'
    })
  } else {
    Task.create(userData)
      .then(() => {
        res.send('Task Added!'+req.body.firstname)
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

// Update Task
router.put('/task/:id', (req, res, next) => {
  if (!req.body.lastname) {
    res.status(400)
    res.json({
      error: 'Bad Data'
    })
  } else {
    Task.update(
      { lastname: req.body.lastname },
      { firstname: req.body.firstname},
      { stamp_name: req.body.stamp_name},
      { mail: req.body.mail},
      { password: req.body.password},
      { location: req.body.location},
      { date: req.body.date},
      { define: req.body.define},
      { where: { id: req.params.id } }
    )
      .then(() => {
        res.send('Task Updated!')
      })
      .error(err => handleError(err))
  }
})

module.exports = router