const mongoose = require("mongoose");

console.log(process.env.DB_LINK);

mongoose.connect(process.env.DB_LINK).then(()=>{

    console.log("Connection successfull");


}).catch((err)=>{
    console.error("No Connection");
})
