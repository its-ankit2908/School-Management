const express = require('express');
const Classes = require('../models/classSchema');


const router = express.Router();

// todo: Add class 
router.post('/add-class',async (req,res)=>{

    try {
        
        const {name,classCapacity} = req.body;

        if(!name || !classCapacity){
            res.status(400).json({error:"Please fill all the fields"});
        }

        const standardClass = new Classes({name,classCapacity});
        console.log(standardClass);
        const classDetails = await standardClass.save();
        if(classDetails){
            res.status(201).json({message:"Class Added Successfully"});
        }else{
            res.status(400).json({error:"Something went wrong"});
        }


    } catch (error) {
        console.log("error:- ",error);
        res.status(500).json({error:"Something went wrong"})
    }
});

// todo: get classes
router.get('/get-class',async (req,res)=>{
    
    try {
        const classDetailsList = await Classes.find();
        if(classDetailsList.length > 0){
            res.status(201).json({classes:classDetailsList});
        }else{
            res.status(201).json({message:"No class Found"});
        }
        
    } catch (error) {
        res.status(500).json({error:"Something went wrong."});
    }
    
});

// todo: get class by id
router.get('/get-class/:id',async (req,res)=>{

    const classId = req.params.id;
    try {

        const classDetails = await Classes.findById(classId);
        if(classDetails.length > 0){
            
            res.status(201).json({class:classDetails});
        }else{
            res.status(201).json({message:"No class Found"});
        }
        
    } catch (error) {
        res.status(500).json({error:"Something went wrong."});
    }
    
});

// todo: update classes
router.put("/update-class/:id", async (req,res)=>{

    const classid = req.params.id;

    try {
        const data = await Classes.findById(classid); 
        console.log(data);
        if(data){

            const updatedClassDetails = await Classes.findByIdAndUpdate(classid,req.body);
            
            if(updatedClassDetails){
                res.status(201).json({message:"Class Updated successfully"});
            }else{
                res.status(500).json({error:"Class Not updated Try again sometime."});
            }

        }else{
            res.status(500).json({error:"Class may not exist"});
        }

        
    } catch (error) {

        res.status(500).json({error:"Something went wrong"});
    }


});

// todo: delete class
router.delete('/delete-class/:id',async (req,res)=>{
    
    const classId = req.params.id;

    try {

        const isExist = await Classes.findById(classId);

        if(isExist){
            const deletedClass = await Classes.findByIdAndDelete(classId);

            if(deletedClass){
                res.status(201).json({message:"Class deleted successfully"});
            }else{
                res.status(500).json({error:"Something went wrong"});
            }

        }else{
            res.status(201).json({error:"Class doesn't exist."})
        }


        
    } catch (error) {
        res.status(501).json({error:"Something went wrong"});
    }


});



module.exports = router;