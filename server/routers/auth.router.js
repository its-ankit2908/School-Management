const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const User = require("../models/userSchema");

const router = express.Router();

// todo: Login to the system
router.post("/login",async (req,res)=>{
    try {
        let token;
        const {email,password,role} = req.body;

        if(!email || !password){
            res.status(406).json({"error":"Please fill all the fields"});
        }
        const userExist = await User.findOne({email});
        
        if(userExist){
            
            const isMatch = await bcrypt.compare(password,userExist.password);
            
            if(!isMatch){

                res.status(502).json({"error":"Invalid Credentials"})

            }else{

                token = await userExist.generateAuthToken();
                res.cookie("jwttoken",token,{
                    expires:new Date(Date.now() + 25892000000),
                    httpOnly:true
                });

                // login user data
                const userData = await User.findOne({email});
                if(userData){
                    res.status(200).json({user:userData});
                }

            }

        }else{

            res.status(502).json({"error":"Invalid Credentials"})

        }



        
    } catch (error) {
        console.log(error);
        res.status(401).json({"error":"UnAuthorized"})
    }
})




//todo: register users to the system
router.post("/register",async (req,res)=>{
    
    const {name,email,phone,gender,password,role,cpassword} = req.body;

    if(!name || !email || !phone || !gender || !password || !role || !cpassword){
        res.status(422).json({"error":"Please fill all the fields"})
    }

    if(password != cpassword){
        res.status(422).json({"error":"Passwords are not matching"});
    }

    const userExist = await User.findOne({email});
    
    if(!userExist){
        const user = new User(req.body);
        if(user){
            await user.save();
            res.status(201).json({"message":"User Registered Successfully"});

        }else{
            res.status(501).json({"error":"Something went wrong"})
        
        }
        
    }else{
        res.status(422).json({"error":"User already exists"});
    }

})



router.get("/logout",(req,res)=>{
    res.send("logout")
})

module.exports = router;