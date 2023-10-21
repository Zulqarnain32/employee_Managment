import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Employee = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/employee/allemployee")
      .then((result) => {
        console.log(result.data);
        setEmployee(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="add-employee-container">
        <div className="sub-title">
          <h2>Employee List</h2>
        </div>
        <div className="add-emp">
          <Link to="/createemployee">
            <button className="add-emp-link">Add Employee</button>
          </Link>
        </div>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Job</th>
                <th>Sallary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employee.map((emp,index) => (
                <tr key={index}>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.address}</td>
                  <td>{emp.job}</td>
                  <td>{emp.sallary}</td>
                  <td>
                    <button className="edit">
                      <Link to="/edit" className="edit-btn">
                        Edit
                      </Link>
                    </button>
                    <button className="delete">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Employee;
