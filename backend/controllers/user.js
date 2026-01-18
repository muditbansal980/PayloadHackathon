const User = require("../models/user");
const {generateToken}= require("../services/auth");
async function handlesignup(req, res) {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ $or: [{ username: username }, { email: email }] });
    try {
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        if (existingUser) {
            return res.status(409).json({ message: 'Username or email already exists' });
        }
        await User.create({
            username: username,
            email: email,
            password: password
        });
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}
async function handlesignin(req, res) {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        else if (!email|| !password) {
            return res.status(400).send("All fields are required");
        }
        const token = generateToken(user);
        res.cookie("payloaduid", token, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax'
        });
        res.status(200).json({ message: 'Signin successful'});
    }catch (error) {
        res.status(500).json({ message: 'Internal server error' }); 
    }
}
module.exports = { handlesignup, handlesignin };