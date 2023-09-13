import React from "react";
import logo from "../../../images/NWMSU_logo.png";
import { NavLink, Outlet } from "react-router-dom";
const LogoutNavbar = () => {
  return (
    <div>
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
                {" "}
                <NavLink to="/">LOGOUT</NavLink>
              </li>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default LogoutNavbar;
