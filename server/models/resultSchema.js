const mongoose = require('mongoose');


const resultSchema = mongoose.Schema({
    classId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"CLASS",
    },
    percentage:{
        type:Number,
        required:true,
    },
    totalMarks:{
        type:Number,
        required:true,
    },
    rank:{
        type:Number,
    },
    marksObtained:{
        type:Number,
    }
},{timestamps:true});



const studentResultSchema = mongoose.Schema({
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"STUDENT"
    },
    results:[resultSchema]
});

const result = mongoose.model("RESULT",studentResultSchema);
module.exports = result;