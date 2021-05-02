const jwt = require('jsonwebtoken');
require('dotenv').config();

// middleware functions have access to the req, res and next functions, when done will call next function with next() 
// this middleware 
const auth = (req, res, next) =>  {
    // Get token from the header 
    const token = req.header('x-auth-token'); 
    // check if no token 
    if (!token) {
        return res.status(401).json({msg: 'No token, authorization denied'})
    }
    // verify token 
    try {
        const decoded = jwt.verify(token, process.env.jwtSecret)
        req.user = decoded.user; 
        next(); 
    } catch(err) {
        res.status(401).json({msg: 'Token is not valid'})
    }
}
 
module.exports = auth; 