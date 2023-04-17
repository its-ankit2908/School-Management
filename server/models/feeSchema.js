const mongoose = require('mongoose');

const feeSchema = mongoose.Schema({
    
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'STUDENT',
    },
    feeStatus:{
        type:Boolean
    },
    totalFee:{
        type:Number,
        required:true,
    },
    feePaid:{
        type:Number,
        required:true,
    },
    feeRemaining:{
        type:Number,
        required:true,
    },
    date:{
        type:date,
    }
},{timestamps:true});

const studentFeeSchema = mongoose.Schema({
    student:{
        type:mongoose.Types.ObjectId,
        ref:'STUDENT',
        required:true,
    },
    feeDetails:[feeSchema], 
})


const fees = mongoose.model('STUDENTFEE',feeSchema);
module.exports = fees;
