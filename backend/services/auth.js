const jwt = require("jsonwebtoken");
const SECRET_KEY = "PAYLOAD###POOKIECODERS";

function generateToken(user) {
    return (
        jwt.sign(
            {
                id: user._id,
                username: user.username,
                email: user.email
            },
         SECRET_KEY)
    )

}
function verifytoken(token) {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (err) {
        return null;
    }
}
module.exports = { generateToken, verifytoken };