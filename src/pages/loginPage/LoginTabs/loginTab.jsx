import React from "react";

import { NavLink } from "react-router-dom";

export default function FullWidthTabs() {
  return (
    <>
      <div className="loginRight">
        <div className="loginBtn author">
          <NavLink to="/author/login">Continue as guest</NavLink>
        </div>

        <div className="loginBtn committee">
          <NavLink to="/committee/login">Continue as Student</NavLink>
        </div>

        <div className="loginBtn chairman">
          <NavLink to="/admin/login">Continue as admin</NavLink>
        </div>
      </div>
    </>
  );
}
