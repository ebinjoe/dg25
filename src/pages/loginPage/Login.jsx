import React from "react";
import Collage from "../../images/nwmsubackground.jpg";
import LoginTab from "./LoginTabs/loginTab";

const Login = () => {
  return (
    <div>
      <div className="login-page-container">
        <div className="login-card">
          <div className="login-img">
            <img src={Collage} alt="" />
          </div>
          <div className="login-content">
            <LoginTab />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
