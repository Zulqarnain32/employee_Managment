import React from "react";

const CreateEmployee = () => {
  return (
    <>
      <div className="title">
        <h2>Employee Management System</h2>
      </div>
      <div className="create-employee">
        <form className="add-form">
            <h2>Create Employee</h2>
            <p>Name</p>
        <input
          type="text"
          className="inputField"
          placeholder="Name"
        />
          <p>Email</p>
        <input
          type="text"
          className="inputField"
          placeholder="Email"
        />
          <p>Address</p>
        <input
          type="text"
          className="inputField"
          placeholder="Address"
        />
          <p>Job</p>
        <input
          type="text"
          className="inputField"
          placeholder="Job"
        />
          <p>Sallary</p>
        <input
          type="text"
          className="inputField"
          placeholder="Sallary"
        />
        <button type="submit" className="button btn">Add Employee</button>
        </form>
      </div>
    </>
  );
};

export default CreateEmployee;
