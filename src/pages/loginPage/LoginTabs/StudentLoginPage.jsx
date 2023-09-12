import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { API_ENDPOINT } from "../../../constant/constant";
import { useNavigate } from "react-router-dom";
const ReviewLoginPage = () => {
  const [StudentloginEmail, setStudentloginUpEmail] = useState("");
  const [StudentloginPassword, setStudentloginPassword] = useState("");
  const [login1alert, setlogin1alert] = useState(false);
  const navigate = useNavigate();

  function Studentlogin() {
    axios
      .post(`${API_ENDPOINT}/students/login`, {
        email: StudentloginEmail,
        password: StudentloginPassword,
      })
      .then(
        (response) => {
          if (response.data.status === true) {
            toast.success("login successful!");
            localStorage.setItem("Student-email", StudentloginEmail);
            localStorage.setItem("Studenttoken", response.data.token);

            navigate("/StudentLogin", {
              state: {
                StudentEmail: StudentloginEmail,
              },
            });
          } else {
            toast.error("Error in login!");
            setlogin1alert(true);
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
        <h2>Student Login</h2>

        <div className="login-input-con new">
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setStudentloginUpEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setStudentloginPassword(e.target.value)}
          />
          <button onClick={Studentlogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewLoginPage;
