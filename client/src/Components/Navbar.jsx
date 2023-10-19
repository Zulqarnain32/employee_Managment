import React from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <div className="sidebar">
        <div>
          <h2 className="name">
            Code
            <span className="with">With</span>
            <span className="me">Passion</span>
          </h2>
          <button className="one">
            <div>
              <img src="/assets/employees.png" className="sidebar-icons" />
            </div>
            <div>Employees</div>    
          </button>
          <button className="one">
            <div>
              <img src="/assets/dashboard.png" className="sidebar-icons" />
            </div>
            <div>Dashboard</div>
          </button>
          <button className="one">
            <div>
              <img src="/assets/user.png" className="sidebar-icons" />
            </div>
            <div>Profile</div>
          </button>   
          <Link to = "/register">
          <button className="one">
            <div>
            <img src="/assets/register.png" className="sidebar-icons" />

            </div>
            <div>Register</div>
          </button>
          </Link>
          <button className="one">
            <div>
            <img src="/assets/logout.png" className="sidebar-icons" />

            </div>
            <div>Logout</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
