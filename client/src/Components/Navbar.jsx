import React, { useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const Navbar = () => {
  const handleLogout = () => {
    console.log("Logout route reached");
    window.localStorage.clear();
    axios
      .get("http://localhost:5000/logout")
      .then((result) => {
        console.log(result);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <nav>
        <div className="logo-side"></div>
        <div className="links-side">
          <Link className="nav-links" to="/">
            HOME
          </Link>
          <Link className="nav-links" to="/secret">
            FOODS
          </Link>

          {window.localStorage.length > 0 ? (
            <Link className="nav-links" to="/">
              <button className="common-btn" onClick={handleLogout}>
                LOGOUT
              </button>
            </Link>
          ) : (
            <Link className="nav-links" to="/login">
              <button className="common-btn">LOGIN</button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
