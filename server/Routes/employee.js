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
    const employee = await EmployeeModel.findOne({email})
    if(employee){
        return res.json({message:"email already exist"})
    }
    EmployeeModel.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
   
})


// update or edit employee || third step
//first get user
router.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    console.log("id hai " + id); 
    EmployeeModel.findById({_id: id})
        .then(result => {
            console.log(result); 
            res.json(result);
        })
        .catch(err => {
            console.log(err); 
            res.json(err);
        });
})

//second updata uder
router.put('/editUser/:id', (req,res) => {
    const id = req.params.id;
    EmployeeModel.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        email:req.body.email,
        address:req.body.address,
        job:req.body.job,
        sallary:req.body.sallary
    })
    
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

// final step  
//deleting the user
router.delete('/deleteUser/:id', (req,res) => {
    const id = req.params.id;
    EmployeeModel.findByIdAndDelete({_id:id})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})


module.exports = router;