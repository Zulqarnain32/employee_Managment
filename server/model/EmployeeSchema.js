const mongoose = require('mongoose')
const EmployeeSchema = mongoose.Schema({
    name:{
        type:"String"
    },
    email:{
        type:"String"
    },
    address:{
        type:"String"
    },
    job:{
        type:"String"
    },
    sallary:{
        type:"String"
    }
})
const EmployeeModel = mongoose.model('EmployeeModel',EmployeeSchema)
module.exports = EmployeeModel