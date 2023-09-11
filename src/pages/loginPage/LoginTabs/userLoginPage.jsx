import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { API_ENDPOINT } from "../../../constant/constant";
import { useNavigate, NavLink } from "react-router-dom";
const UserLoginPage = () => {
  function userlogin() {
    axios
      .post(`${API_ENDPOINT}/login`, {
        email: loginEmail,
        password: loginPassword,
      })
      .then(
        (response) => {
          localStorage.setItem("Usertoken", response.data.token);
          if (response.data.status === true) {
            toast.success("login successful!");
            navigate("/UserLogin");
          } else {
            toast.error("Error in login!");
            setloginalert(true);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  const [loginEmail, setloginUpEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const [loginalert, setloginalert] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="login-page-container">
      <div className="login-con">
        <h2>guest Login</h2>

        <div className="login-input-con">
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setloginUpEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setloginPassword(e.target.value)}
          />
          <span>
            Already a User <NavLink to="/author/register">Sign Up</NavLink>
          </span>
          <button onClick={userlogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default UserLoginPage;
