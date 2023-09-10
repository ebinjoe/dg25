import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
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
            toast.success("login successful!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            navigate("/adminLogin");
          } else {
            toast.error("Error in login!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
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
        <h2>Guest Login</h2>

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
