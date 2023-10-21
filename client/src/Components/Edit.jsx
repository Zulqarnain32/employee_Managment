import React,{useState} from 'react'

const Edit = () => {

    const [ name,setName ]  = useState()
    const [ email, setEmail ] = useState()
    const [ address, setAddress ] = useState()
    const [ job, setJob ] = useState()
    const [ sallary, setSallary ] = useState()

    const handleSubmit = () => {

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
