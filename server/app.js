const express = require("express");
const app =new express();

// ! env configuration
require("dotenv").config()



//! Database configuration
require("./db/conn");


//! PORT configuration
const port = process.env.PORT || 8000;

// !Routing configuaration
app.use(express.json());
app.use(require("./routers/user.router"));


// middleware example
const middleware = (req,res,next)=>{
    console.log("Middleware");
    next();
}

app.get("/",(req,res)=>{
    res.send("Hello World");
})




app.listen(port,()=>{
    console.log("Listening to port no. ",process.env.PORT);
})