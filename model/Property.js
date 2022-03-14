const mongoose = require('mongoose')
const { Schema } = mongoose;

const propertySchema = new Schema({
    title:{type:String, required:true},
    pricePerNight:{type:Number, required:true},
    description:{type: String},
    type:{type:String, required:true},
    rules:{type:Array},
    amenities:{type:Array, required:true},
    location:{type:String, required:true},
    bestseller:{type:Boolean, required:true},
    photoURL:{type:String},
    dateCreated:{type: Date,default: Date.now()},
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property