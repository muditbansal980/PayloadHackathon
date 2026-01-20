const express = require('express');
const router = express.Router();
// const {handlesignup,handlesignin} = require("../controllers/user")
const {handleAddExpense,handlegetExpenses} = require("../controllers/expense")
// router.post("/signup",handlesignup);
// router.post("/signin",handlesignin);
router.post("/add",handleAddExpense);
router.get("/list",handlegetExpenses);
module.exports = router;