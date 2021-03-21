const express = require('express'); 
const router = express.Router(); 
const bcrypt = require('bcryptjs');
const auth  = require('../../middleware/auth');
const User = require('../../models/User');
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config'); 

// @route    GET api/auth
// @desc     Get user by token
// @access   Private
// auth makes this route protected 
router.get('/', auth, async(req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password'); 
        res.json(user); 

    } catch(err) {
        console.error(err.message); 
        res.status(500).send('Server error')
    }
}); 


// @route POST api/auth
// @ desc Authenticate user & get token 
// @ access Public 
router.post('/',
    // validation 
    [ 
        // email must be a valid email 
        check('email', 'Please include a valid email').isEmail(),
        // password must match existing password 
        check('password', 'Password is required').exists()
    ],
    async (req, res) => {
        // validation errors 
        const errors = validationResult(req); 
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }
        const {email, password} = req.body; 
        try {
            // see if user exists in mongoDB database, will return null if none found  
            let user = await User.findOne({email});
            // if user doesn't exist 
            if(!user) {
                return res.status(400).json({errors: [{msg: 'Invalid credentials'}]})
            }
            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) {
                return res
                .status(400)
                .json({errors: [{msg: 'Invalid credentials'}]})
            }
            // return jsonwebtoken 
            const payload = {
                user: {
                    id: user.id
                }
            }
            // returns a token with a jwt header, payload and signature that authenticates user requests 
            jwt.sign(
                payload, 
                config.get('jwtSecret'),
                // change to 3600(1 hour) in production
                {expiresIn: 360000}, 
                (err, token) => {
                    if(err) throw err;
                    res.json({token})
                }
            )
        } catch(err) {
            console.error(err.message); 
            res.status(500).send('Server error'); 
        }
});
module.exports = router; 

