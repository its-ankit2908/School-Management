const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    
    street:{
        type:String,
    },
    village:{
        type:String,
    },
    city:{
        type:String,
    },
    state:{
        type:String,
    },
    phone:{
        type:Number
    },
    pinCode:{
        type:Number,
        required:true
    }

});


const userAddressSchema = new mongoose.Schema(
    {
        student: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "STUDENT",
        },
        address: [addressSchema],
    },
    { timestamps: true }
);

const address = mongoose.model("STUDENTADDRESS", userAddressSchema);
module.exports = address;