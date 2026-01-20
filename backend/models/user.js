const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        requried:true
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    }

},{timestamps:true})

const User = mongoose.model('User', Schema);

module.exports = User;