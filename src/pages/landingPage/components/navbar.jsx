import React from "react";
import logo from "../../../images/welcome_log.jpg";
import { NavLink, Outlet } from "react-router-dom";
const navbar = () => {
  return (
    <div className="nav-constainer">
      <div className="nav-header">
        <div className="nav-set">
          <div className="logo-data">
            <div className="logo-data-img">
              <img src={logo} alt="logo" />
            </div>
            <h1>Welcome</h1>
          </div>

          <div className="lsit-set">
            <li>
              <NavLink to="/" className="nav-link">
                HOME
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/Login">LOGIN</NavLink>
            </li>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default navbar;
