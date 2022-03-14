const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config({path:'config/keys.env'})
const HTTP_PORT = process.env.PORT 
const userController = require('./controllers/UserController.js')
const propertyController = require('./controllers/PropertyController.js')



// cors
const allowlist = ['http://localhost:3000', 'https://serene-mcnulty-69a424.netlify.app/']
const corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.use(cors(corsOptionsDelegate))
//middleware
app.use(express.json())

// USERS
app.use("/", userController)

// PROPERTIES
app.use("/", propertyController) 

app.listen(HTTP_PORT, ()=>{
    console.log(`Port is successful ${HTTP_PORT}`)
    mongoose.connect(process.env.MONGODB_QUERY_STRING)
    .then(()=>{
        console.log(`Mongoose has successfully connected.`) 
    })
    .catch(err =>{
        console.log(`Mongoose has failed to connected. ERROR MSG: ${err}`)
    })

})