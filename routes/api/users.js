const express = require('express'); 
const router = express.Router(); 
const {check, validationResult} = require('express-validator');
const gravatar = require('gravatar'); 
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');
const config = require('config'); 
const User = require('../../models/User');


// @route POST api/users
// @ desc Register user
// @ access Public 
router.post('/',

    // validation 
    [
        // name must not be empty, .not() is a jquery selector  
        check('name', 'Name is required').not().isEmpty(),
        // email must be a valid email 
        check('email', 'A valid email is required').isEmail(),
        // password must have 6 or more characters 
        check('password', 'The password must have 6 or more characters').isLength({min: 6})
    ],
    async (req, res) => {
        // validation errors 
        const errors = validationResult(req); 
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }
        const {name, email, password} = req.body; 

        try {
            // see if user exists in mongoDB database, will return null if none found  
            let user = await User.findOne({email});
            // if user already exists 
            if(user) {
                return res.status(400).json({errors: [{msg: 'User already exists'}]})
            }
            // returns url with specified options object
            // www.gravatar.com/avatar/caa6b2fdbf289863955ef0b381bdb709?s=200&r=pg&d=mm
            const avatar = gravatar.url(email, {
                s:'200',
                r: 'pg',
                d: 'mm' 
                // d: 'robohash'
            })

            // if no user create a new one and save to mongoDB 
            user = new User({
                name, 
                email, 
                avatar, 
                password
            }); 
            // encrypt password
            const salt = await bcrypt.genSalt(10); 
            user.password = await bcrypt.hash(password, salt);
            // save user to database 
            await user.save(); 

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
            // logs to stderr: blocking synchronous writable stream intended for error messages
            console.error(err.message); 
            res.status(500).send('Server error'); 
        }
});

module.exports = router; 