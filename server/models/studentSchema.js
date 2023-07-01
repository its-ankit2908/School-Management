const mongoose = require('mongoose');


const studentSchema = mongoose.Schema({

    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    dob:{
        type:String,
    },
    rollNo:{
        type:Number, 
        unique:true,
        required:true,
    },
    gender:{
        type:String,
    },
    addressId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ADDRESS"
    },
    classId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"CLASS",
        required:true,
    },
    feeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"FEE",
    },
    resultId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'RESULT',
    },
    imgUrl:{
        type:String,
    }

},{timestamps:true});

const student = mongoose.model('STUDENT',studentSchema);
module.exports = student;
