import React, { useState } from "react";
import axios from "axios"

const CreateEmployee = () => {
  
  const [ name,setName ]  = useState()
  const [ email, setEmail ] = useState()
  const [ address, setAddress ] = useState()
  const [ job, setJob ] = useState()
  const [ sallary, setSallary ] = useState()

  const [error,setError ] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/employee/employee', {name,email,address,job,sallary})
    .then(result => {
        console.log(result.data);
        if(result.data.message == "please fill fields"){
           setError("please fill all fields")
        }
    }).catch(err => console.log(err))
  }
  return (
    <>
    
      <div className="create-employee">
        <form className="add-form" onSubmit={handleSubmit}>
            <h2>Create Employee</h2>
            <p>Name</p>
        <input
          type="text"
          className="inputField"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
          <p>Email</p>
        <input
          type="text"
          className="inputField"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
          <p>Address</p>
        <input
          type="text"
          className="inputField"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
          <p>Job</p>
        <input
          type="text"
          className="inputField"
          placeholder="Position at Company"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
          <p>Sallary</p>
        <input
          type="text"
          className="inputField"
          placeholder="Sallary"
          value={sallary}
          onChange={(e) => setSallary(e.target.value)}
        />
        <p className="error">{error}</p>
        <button type="submit" className="button btn">Add Employee</button>
        </form>
      </div>
    </>
  );
};

export default CreateEmployee;
