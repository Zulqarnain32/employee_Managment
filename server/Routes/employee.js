const express = require('express')
const router = express.Router();
const EmployeeModel = require('../model/EmployeeSchema')

//second step is to read created data
router.get('/allemployee', async(req,res) => {
    EmployeeModel.find({})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

//first step to create data
router.post('/employee', async (req,res) => { 
    const {name,email,address,job,sallary} = req.body; 
    if(!name || !email || !address || !job || !sallary){
        return res.json({message:"fill form"})
    } 
    EmployeeModel.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
   
})



module.exports = router;