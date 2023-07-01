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
    email:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
    },
    salary:{
        type:Number,
    },
    dob:{
        // data should be in yyyy-mm-dd format
        type:Date,
        required:true 
    },
    imgUrl:{
        type:String,
    }
},{timestamps:true});

const Teacher = mongoose.model('TEACHER',teacherSchema);
module.exports = Teacher;
