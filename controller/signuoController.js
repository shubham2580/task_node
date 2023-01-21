const { User } = require("../model");
const bcrypt = require("bcrypt");
//const mongoose = require('mongoose')


const userSignUp = async (req, res) => {
    try {
        const { firstName, lastName, emailid, password, mobile } = req.body;
        // generate salt to hash password
        const salt = await bcrypt.genSalt(10);
        // now we set user password to hashed password
        let encryptedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            firstName,
            lastName,
            emailid,
            password: encryptedPassword,
            mobile
        });

        res.json({
            success: true,
            message: "Registered successfully!",
            data: {
                _id: user._id,
                emailid: user.emailid,
                firstName: user.firstName,
                lastName: user.lastName,
                mobile: user.mobile
                //token: generateToken(user._id)
            }
        });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "User already exist!" });
    }
};


const userLogin = async (req, res) => {
    if(req.body.emailid != null){
        const { emailid, password } = req.body;
        const user = await User.findOne({ emailid });
        console.log(user,"-------------------///");
    
        if (user) {
            // check user password with hashed password stored in the database
            const validPassword = await bcrypt.compare(password, user.password);
    
            if (validPassword) {
                res.json({
                    success: true,
                    message: "Loggedin successfully!",
                    data: {
                        _id: user._id,
                        emailid: user.emailid,
                        firstName: user.firstName,
                        mobile: user.mobile,
                        lastName: user.lastName,
                        //token: generateToken(user._id)
                    }
                });
            } else {
                res.json({ success: false, message: "Invalid Password" });
            }
        } else {
            res.json({ success: false, message: "User not found!" });
        }

    } else{
        const { mobile, password } = req.body;
        const user = await User.findOne({ mobile });
        console.log(user,"-------------------");
        if (user) {
            // check user password with hashed password stored in the database
            const validPassword = await bcrypt.compare(password, user.password);
    
            if (validPassword) {
                res.json({
                    success: true,
                    message: "Loggedin successfully!",
                    data: {
                        _id: user._id,
                        emailid: user.emailid,
                        firstName: user.firstName,
                        mobile: user.mobile,
                        lastName: user.lastName,
                        //token: generateToken(user._id)
                    }
                });
            } else {
                res.json({ success: false, message: "Invalid Password" });
            }
        } else {
            res.json({ success: false, message: "User not found!" });
        }
    }
   
};

module.exports = {
    userSignUp,
    userLogin
};
