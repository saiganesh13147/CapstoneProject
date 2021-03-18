import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import JWT_SECRET from '../utility/utility.js';
import User from '../models/userModel.js';

const router = express.Router();


// @route   POST api/auth
// @desc    Auth user
// @access  Public

router.post('/', (req, res) => {
    const { email, password } = req.body;
//simple validation
    if(!email || !password){
        return res.status(400).json({msg: 'Please enter all fields'});
    }

    //check for existing user
    User.findOne({ email })
    .then(user => {
        if(!user) return res.status(400).json({ msg: 'User Doesnot exists' });


        //validate password
        bcrypt.compare(password, user.password)
        .then(isMatch => {
            if(!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

            jwt.sign(
                { id: user.id },
                 JWT_SECRET,
                 { expiresIn: 3600 },
                 (err, token) => {
                     if(err) throw err;
                     res.json({
                        token,
                        User: {
                            id: user.id,
                            name: user.name,
                            email: user.email
                        }
                    });
                 }
            )
        })
    })
  });


export default router;