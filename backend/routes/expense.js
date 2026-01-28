const express = require('express');
const router = express.Router();
// const {handlesignup,handlesignin} = require("../controllers/user")
const {handleAddExpense,handlegetExpenses,handleDeleteExpense} = require("../controllers/expense")
// router.post("/signup",handlesignup);
// router.post("/signin",handlesignin);
router.post("/add",handleAddExpense);
router.get("/list",handlegetExpenses);
router.delete("/delete/:id",handleDeleteExpense);
module.exports = router;