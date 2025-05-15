const mongoose = require("mongoose");

const user = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    skills:{
        type:[String],
        required:true
    },
    address:{
        type:String,
        required:true,
        trim:true
    },
    about:{
        type:String,
        required:true,
        trim:true
    },
    Contact:{
        type:Number,
        required:true
    },
    avatar:{
        type:String,
        required:true
    }
})

const UserDetails = mongoose.model('UserDetails',user);
module.exports = UserDetails;