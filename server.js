const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config({path:'config/keys.env'})
const HTTP_PORT = process.env.PORT 
const userController = require('./controllers/UserController.js')
const propertyController = require('./controllers/PropertyController.js')


app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin",'*');
  next();
});
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