const mongoose = require("mongoose");

const classSchema = mongoose.Schema({
    name:{
        type:String,
    },
    classTeacher:{
        type:String,
    },
    classCapacity:{
        type:Number,
    },
    studentsCount:{
        type:String,
    },
    students:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"STUDENT",
            required:true,
            
        },
    ]

},{timestamps:true});

const classes =  mongoose.model('CLASS',classSchema);

module.exports = classes;