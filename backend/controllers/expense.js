const Expense = require("../models/expense");
async function handleAddExpense(req,res){
    const {category,planned,spent} = req.body;
    console.log("Add Expense Request Body:", req.body);
    console.log("User from req:", req.user);
    try{
        if(!category || !planned || !spent){
            return res.status(400).json({message:'All fields are required'});
        }
        await Expense.create({
            category:category,
            plannedAmount:planned,
            spentAmount:spent,
            createdBy:req.user.id,
        });
        // console.log("Expense created for user:", req.user.id);
        res.status(201).json({message:'Expense added successfully'});
    }catch(error){
        console.error("Error creating expense:", error);
        res.status(500).json({message:'Internal server error'});
    }
}
async function handlegetExpenses(req,res){
    try{
        const Expenses = await Expense.find({createdBy:req.user.id});
        res.status(200).json({expenses:Expenses});
    }catch(error){
        res.status(500).json({message:'Internal server error'});
    }
}
module.exports = {handleAddExpense, handlegetExpenses};