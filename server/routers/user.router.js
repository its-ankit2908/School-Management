const express = require("express");

const router = express.Router();


router.get("/signin",(req,res)=>{
    res.send("Sign in api");
})


router.get("/signup",(req,res)=>{
    res.send("Sign up page");
})

module.exports = router;