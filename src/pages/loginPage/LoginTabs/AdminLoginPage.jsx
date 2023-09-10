import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_ENDPOINT } from "../../../constant/constant";
import { useNavigate } from "react-router-dom";
const AdminLoginPage = () => {
  const [adminloginEmail, setadminloginUpEmail] = useState("");
  const [adminloginPassword, setadminloginPassword] = useState("");
  const [login2alert, setlogin2alert] = useState(false);
  const navigate = useNavigate();
  function adminLogin() {
    axios
      .post(`${API_ENDPOINT}/admin/login`, {
        email: adminloginEmail,
        password: adminloginPassword,
      })
      .then(
        (response) => {
          localStorage.setItem("Admintoken", response.data.token);
          if (response.data.status === true) {
            toast.success("Login successful!");
            navigate("/adminLogin");
          } else {
            toast.error("Error in login!");
            setlogin2alert(true);
          }
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  return (
    <div className="login-page-container">
      <div className="login-con">
        <h2>admin Login</h2>

        <div className="login-input-con new">
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setadminloginUpEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setadminloginPassword(e.target.value)}
          />

          {login2alert ? (
            <strong style={{ color: "red" }}>Wrong Details</strong>
          ) : (
            ""
          )}
          <button onClick={adminLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
