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
              <div className="ml">IEEE.org</div>
              <div className="ml">IEEE xplore Digital library</div>
              <div className="ml">IEEE standards</div>
              <div className="ml">IEEE spectrum</div>
              <div className="ml">More sites</div>
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
