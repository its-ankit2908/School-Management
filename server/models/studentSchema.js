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
    rollNo:{
        type:Number, 
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
    },
    feeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"FEE",
    },
    resultId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'RESULT',
    }
    

},{timestamps:true});

const student = mongoose.model('STUDENT',studentSchema);
module.exports = student;
