const express = require('express');
const router = express.Router();
const validator = require('validator');
const Teacher = require('../models/teacherSchema');

// todo: add teacher
router.post("/add-teacher",async (req,res)=>{

    const {firstName,lastName,email,dob,gender,salary} = req.body;

    try {
        
        if(!validator.isEmail(email)){
            res.status(500).json({error:"Email format invalid"});
            return;
        }

        if(firstName.length < 3 || lastName.length < 3){
            res.status(422).json({"error":"Firstname or lastname contains at least 3 characters"});
            return;
        }

        const isExist = await Teacher.findOne({email});
        
        if(!isExist){

            const dateOfBirth = new Date(dob);
            const teacher = new Teacher({firstName,lastName,email,dob:dateOfBirth,gender,salary});
            if(teacher){

                const teacherData = await teacher.save();
                if(teacherData){
                    return res.status(201).json({message:"Teacher Added Successfully"});
                }else{
                    return res.status(500).json({error:"Something went wrong"});
                }
                                
            }else{
                return res.status(500).json({error:"Something went wrong"});
            }

        }else{

            return res.status(200).json({error:"Teacher Already exists"});
        }


    } catch (error) {
        console.log(error);
        res.status(501).json({error});
    }


});




module.exports = router;