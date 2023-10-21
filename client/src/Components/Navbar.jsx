import React, { useState } from "react";
import { Link } from "react-router-dom"


const Navbar = () => {
  const [ showSidebar, setShowSidebar ] = useState(false)
  const handleMenu = () => {
    setShowSidebar(!showSidebar)
  } 

  return (
    <>
    <div className="menu-icon">
                <img src="/assets/hamburger.png" onClick={handleMenu}/>
            </div>
        <div>
      <div className={`sidebar ${showSidebar ? "istrue":"isfalse"}`}>
       
          <h2 className="name">
            Code
            <span className="with">With</span>
            <span className="me">Passion</span>
          </h2>
          <Link to = "/addemployee">
          <button className="one" onClick={() => setShowSidebar(false)}>
            <div>
              <img src="/assets/employees.png" className="sidebar-icons" />
            </div>
            <div>Employees</div>    
          </button>
          </Link>
          <button className="one" onClick={() => setShowSidebar(false)}>
            <div>
              <img src="/assets/dashboard.png" className="sidebar-icons" />
            </div>
            <div>Dashboard</div>
          </button>
          <button className="one" onClick={() => setShowSidebar(false)}>
            <div>
              <img src="/assets/user.png" className="sidebar-icons" />
            </div>
            <div>Profile</div>
          </button>   
          <Link to = "/register">
          <button className="one" onClick={() => setShowSidebar(false)}>
            <div>
            <img src="/assets/register.png" className="sidebar-icons" />

            </div>
            <div>Register</div>
          </button>
          </Link>
          <button className="one" onClick={() => setShowSidebar(false)}>
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
