const mongoose = require('mongoose');


const teacherSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:50,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:50,
    },
    gender:{
        type:String,
    },
    salary:{
        type:Number,
    },
    dob:{
        type:Date,
        required:true 
    }
},{timestamps:true});

const Teacher = mongoose.model('TEACHER',teacherSchema);
module.exports = Teacher;
