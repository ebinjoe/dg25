import React from "react";
import logo from "../../../images/welcome_log.jpg";
import { NavLink, Outlet } from "react-router-dom";
const navbar = () => {
  return (
    <div className="nav-constainer">
      <div className="nav-header nav">
        <div className="nav-set">
          <div className="logo-data">
            <div className="flex">
             <h1>Northwest Project Explorer</h1>
            </div>
          </div>

          <div className="lsit-set">
            <li>
              <NavLink to="/" className="nav-link">
                HOME
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/about">ABOUT</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/Login">LOGIN</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/">HELP</NavLink>
            </li>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default navbar;
