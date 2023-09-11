import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { API_ENDPOINT } from "../../../constant/constant";
import { useNavigate, NavLink } from "react-router-dom";

const UserSignUpPage = () => {
  const [signUpFirstName, setSignUpFirstName] = useState("");
  const [signUpLastName, setSignUpLastName] = useState("");
  const [signupEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  function usersignup() {
    if (signUpPassword !== confirmPassword) {
      toast.error("Password and Confirm Password do not match");
      return;
    }
    axios
      .post(`${API_ENDPOINT}/signup`, {
        firstName: signUpFirstName,
        lastName: signUpLastName,
        password: signUpPassword,
        email: signupEmail,
        confirmPassword: signUpPassword,
      })
      .then(
        (response) => {
          if (response.data.status === true) {
            toast.success("signup successful!!");
            navigate("/author/login");
          } else {
            toast.error("Error in signup");
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  return (
    <div className="login-page-container">
      <div className="login-con">
        <h2>Sign UP</h2>

        <div className="login-input-con">
          <input
            type="text"
            placeholder="First-Name"
            onChange={(e) => setSignUpFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last-Name"
            onChange={(e) => setSignUpLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setSignUpEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setSignUpPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p>
            Already a User <NavLink to="/author/login">Login Here</NavLink>
          </p>
          <button onClick={usersignup}>Sign UP</button>
        </div>
      </div>
    </div>
  );
};

export default UserSignUpPage;
