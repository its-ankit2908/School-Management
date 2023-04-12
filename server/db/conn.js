const mongoose = require("mongoose");


mongoose.connect(process.env.DB_LINK).then(()=>{

    console.log("Connection successfull");


}).catch((err)=>{
    console.error("No Connection");
})
