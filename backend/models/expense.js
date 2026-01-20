const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    category:{
        type:String,
        required:true,
    },
    plannedAmount:{
        type:String,
        required:true,
    },
    spentAmount:{
        type:String,
        required:true,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        // required:true,
    }
},{timestamps:true})

const Expense = mongoose.model('Expense', Schema);

module.exports = Expense;