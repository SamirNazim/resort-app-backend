const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type: String, required:true},
    password:{type:String, required:true}, 
    phoneNumbers:{type:Array},
    dateCreated:{type: Date,default: Date.now()},
});

const User = mongoose.model('User', userSchema);

module.exports = User