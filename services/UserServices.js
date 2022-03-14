const userModel = require("../model/User.js")
var bcrypt = require('bcryptjs')

// allow a user to register
exports.addUser = (req,res) =>{

    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(req.body.password, salt);
    //console.log(hash)
    req.body.password = hash
    const user = new userModel(req.body)

    user.save()   
    .then((newUser) =>{
        res.json({
            message: "User was created.",
            data: newUser
        })
    })
    
    .catch(err =>{
        res.status(500).json({
            message: err
        })
    })
}

// retrieves a specific customer by id
exports.retrieveUserById = (req,res) =>{
    if(req.params.id.length < 24 || req.params.id.length > 24){
        res.json({
            message: `ID must be 24 characters long, you entered ${req.params.id.length}`
        })
    } else {

    userModel.findById(req.params.id)
    .then((user)=>{
    if(user){
        res.json({
            message: `User with ID ${req.params.id} was found!`,
            data: user
        })
    } else { 
        res.status(404).json({
            message: `No ${req.params.id} hero found`,  
        })
    }
    })
    .catch(err =>{
        res.status(500).json({
            message: err
        })
    })
}
}