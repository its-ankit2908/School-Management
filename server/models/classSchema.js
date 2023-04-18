const mongoose = require("mongoose");

const classSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    // classTeacher:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'TEACHER'
    // },
    classCapacity:{
        type:Number,
        max:60,
        min:1,
    },
    studentsCount:{
        type:String,
    },
    students:[
        {
            studentId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"STUDENT",
            }
            
        },
    ]

},{timestamps:true});

const Classes =  mongoose.model('CLASS',classSchema);

module.exports = Classes;