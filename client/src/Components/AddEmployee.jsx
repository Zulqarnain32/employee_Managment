import React from 'react'
import { Link } from "react-router-dom"

const AddEmployee = () => {
  return (
    <>
      <div className="add-employee-container">
       
           <div className='sub-title'>
              <h2>Employee List</h2>
           </div>
           <div className="add-emp">
            <Link to = "/createemployee">
               <button className='add-emp-link'>Add Employee</button>
            </Link>      
           </div>
           <div className='table-container'>
              <table className='table'>
                  <tr>              
                     <th>Name</th>
                     <th>Email</th>
                     <th>Address</th>
                     <th>Job</th>
                     <th>Sallary</th>
                     <th>Action</th>
                  </tr>
                  <tr>
                    <td>Zulqarnain</td>
                    <td>zulqarnain@gmail.com</td>
                    <td>Shahdara Lhr</td>
                    <td>Developer</td>
                    <td>$10000.00</td>
                    <td>
                       <button className='edit'>Edit</button>
                       <button className='delete'>Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Zulqarnain</td>
                    <td>zulqarnain@gmail.com</td>
                    <td>Shahdara Lhr</td>
                    <td>Developer</td>
                    <td>$10000.00</td>
                    <td>
                       <button className='edit'>Edit</button>
                       <button className='delete'>Delete</button>
                    </td>
                  </tr> <tr>
                    <td>Zulqarnain</td>
                    <td>zulqarnain@gmail.com</td>
                    <td>Shahdara Lhr</td>
                    <td>Developer</td>
                    <td>$10000.00</td>
                    <td>
                       <button className='edit'>Edit</button>
                       <button className='delete'>Delete</button>
                    </td>
                  </tr> <tr>
                    <td>Zulqarnain</td>
                    <td>zulqarnain@gmail.com</td>
                    <td>Shahdara Lhr</td>
                    <td>Developer</td>
                    <td>$10000.00</td>
                    <td>
                       <button className='edit'>Edit</button>
                       <button className='delete'>Delete</button>
                    </td>
                  </tr> <tr>
                    <td>Zulqarnain</td>
                    <td>zulqarnain@gmail.com</td>
                    <td>Shahdara Lhr</td>
                    <td>Developer</td>
                    <td>$10000.00</td>
                    <td>
                       <button className='edit'>Edit</button>
                       <button className='delete'>Delete</button>
                    </td>
                  </tr> <tr>
                    <td>Zulqarnain</td>
                    <td>zulqarnain@gmail.com</td>
                    <td>Shahdara Lhr</td>
                    <td>Developer</td>
                    <td>$10000.00</td>
                    <td>
                       <button className='edit'>Edit</button>
                       <button className='delete'>Delete</button>
                    </td>
                  </tr> <tr>
                    <td>Zulqarnain</td>
                    <td>zulqarnain@gmail.com</td>
                    <td>Shahdara Lhr</td>
                    <td>Developer</td>
                    <td>$10000.00</td>
                    <td>
                       <button className='edit'>Edit</button>
                       <button className='delete'>Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Zulqarnain</td>
                    <td>zulqarnain@gmail.com</td>
                    <td>Shahdara Lhr</td>
                    <td>Developer</td>
                    <td>$10000.00</td>
                    <td>
                       <button className='edit'>Edit</button>
                       <button className='delete'>Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Zulqarnain</td>
                    <td>zulqarnain@gmail.com</td>
                    <td>Shahdara Lhr</td>
                    <td>Developer</td>
                    <td>$10000.00</td>
                    <td>
                       <button className='edit'>Edit</button>
                       <button className='delete'>Delete</button>
                    </td>
                  </tr>
                 
                  
              </table>
           </div>

      </div>
    </>
  )
}

export default AddEmployee
