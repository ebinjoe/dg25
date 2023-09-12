import React, { useState } from "react";
import axios from "axios";
import { API_ENDPOINT } from "../../../constant/constant";
import { NavLink } from "react-router-dom";

const StudentSignUpPage = () => {
  const [signUpStudentUserName, setSignUpStudentUserName] = useState("");
  const [signupStudentEmail, setSignUpStudentEmail] = useState("");
  const [signUpStudentPassword, setSignUpStudentPassword] = useState("");

  const [reivewerSignUpTost, setStudentSignUptoast] = useState(false);
  const [reivewerSignUpTost1, setStudentSignUptoast1] = useState(false);

  function StudentSignup() {
    axios
      .post(`${API_ENDPOINT}/students/signup`, {
        userName: signUpStudentUserName,
        password: signUpStudentPassword,
        email: signupStudentEmail,
        confirmPassword: signUpStudentPassword,
      })
      .then(
        (response) => {
          if (response.data.status === true) {
            setStudentSignUptoast(true);
          } else {
            setStudentSignUptoast1(true);
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

        <div className="login-input-con new">
          <input
            type="text"
            placeholder="User Name"
            onChange={(e) => setSignUpStudentUserName(e.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setSignUpStudentEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setSignUpStudentPassword(e.target.value)}
          />
          {reivewerSignUpTost ? (
            <strong style={{ color: "green" }}>Sign up Sucessfull</strong>
          ) : (
            ""
          )}
          {reivewerSignUpTost1 ? (
            <strong style={{ color: "red" }}>SignUP not Sucessfull</strong>
          ) : (
            ""
          )}
          <p>
            Already a Student{" "}
            <NavLink to="/committee/login">Login Here</NavLink>
          </p>
          <button onClick={StudentSignup}>Sign UP</button>
        </div>
      </div>
    </div>
  );
};

export default StudentSignUpPage;
