const express = require('express');
const router = express.Router();
const {handlesignup,handlesignin} = require("../controllers/user")
router.post("/signup",handlesignup);
router.post("/signin",handlesignin);
module.exports = router;