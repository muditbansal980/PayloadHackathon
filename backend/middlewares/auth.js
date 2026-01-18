const {verifytoken} = require("../services/auth");

async function authmiddleware(req,res,next){
    const token = req.cookies?.payloaduid;
    console.log("Middleware Token:", token);
    if(!token){
        return res.status(401).json({message:"Unauthorized"});
    }
    const user = verifytoken(token);
    if (!user) {
        return res.status(401).json({message:"Unauthorized"});
    }
    req.user = user;
    next();
}

module.exports = authmiddleware;