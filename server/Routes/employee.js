const express = require('express')
const router = express.Router();
const EmployeeModel = require('../model/EmployeeSchema')

router.post('/employee', (req,res) => {
    const {name,email,address,job,sallary} = req.body;
    if(!name || !email){
        return res.json({message:"please fill fields"})
    }

})

module.exports = router;