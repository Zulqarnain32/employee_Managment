import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const Edit = () => {

    const { id } = useParams()
    const [ name,setName ]  = useState("")
    const [ email, setEmail ] = useState("")
    const [ address, setAddress ] = useState("")
    const [ job, setJob ] = useState("")
    const [ sallary, setSallary ] = useState("")
    const [em,serEm] = useState("")
    const navigate = useNavigate()
    console.log("This is his id " + id);

    useEffect(() => {
      axios.get('http://localhost:5000/employee/getUser/' + id)
      .then(result => {
        console.log(result);
        setName(result.data.name)
        setEmail(result.data.email)
        setAddress(result.data.address)
        setJob(result.data.job)
        setSallary(result.data.sallary)
       
      }).catch(err => console.log(err))

    }, [])


    const handleSubmit = (e) => {
      e.preventDefault();
      axios.put('http://localhost:5000/employee/editUser/' + id, { name,email,address,job,sallary })
        .then(result => {
          console.log(result);
          navigate('/addemployee')
      })
    }
  return (
    <>
       <div className="create-employee">
        <form className="add-form" onSubmit={handleSubmit}>
            <h2>Edit Employee</h2>
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
        <button type="submit" className="button btn">Edit Employee</button>
        </form>
      </div> 
    </>
  )
}

export default Edit
