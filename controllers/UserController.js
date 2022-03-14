const express = require('express')
const userServices = require("../services/UserServices.js")
const router = express.Router()
const { validateNewUser } = require ("../middleware/validation.js")


let x = 2;
// add a new user
router.post("/users", validateNewUser, userServices.addUser)

// get user by idherok
router.get("/user/:id", userServices.retrieveUserById)
    


module.exports = router