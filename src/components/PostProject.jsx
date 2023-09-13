import React from "react";
import "./sidebarLayout.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import "./projectForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchApi } from "../Utils/Request";
// import * as XLSX from "xlsx";
import axios from "axios";
import { API_ENDPOINT } from "../constant/constant";
import Sidebar from "./sidebar";
const formDetails = {
  projectTitle: "",
  projectDescription: "",
  startDate: "",
  endDate: "",
  contactNumber: "",
  projectSummary: "",
  document: "",
};

const PostProject = () => {
  const [formData, setFormData] = useState({ ...formDetails });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);
  const [items, setItems] = useState([]);
  const [pdfFile, setPdfFile] = useState("");
  const [studentHeader] = useState({
    headers: {
      token: localStorage.getItem("Studenttoken"),
    },
  });
  const [guestHeader] = useState({
    headers: {
      token: localStorage.getItem("Usertoken"),
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "projectType" ? value === "true" : value,
    }));
  };

  const uploadImage = async (e) => {
    setLoading(true);
    let formData = new FormData();
    formData.append("image", e.target.files[0]);
    let u = await axios.post(
      `http://localhost:8090/api/upload/image`,
      formData
    );
    if (u.data.status) {
      setPdfFile(u.data.secureUrl);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    console.log(`handle submit`);
    e.preventDefault();
    if (formData.projectTitle == "") {
      notify1("projectTitle is Required");
      setErrors(true);
    }
    if (formData.projectDescription == "") {
      notify1("projectDescription is Required");
      setErrors(true);
    }
    if (formData.contactNumber == "") {
      notify1("contactNumber is Required");
      setErrors(true);
    }
    let userType = localStorage.getItem("userType");
    console.log(userType);
    let payload = { ...formData };
    payload.document = pdfFile;
    console.log(payload);
    console.log(userType);
    if (userType == "guestUser") {
      console.log(payload);
      let response = await axios.post(
        `${API_ENDPOINT}/add/project`,
        payload,
        guestHeader
      );

      if (response.data.status === true) {
        notify(response.data.message);
      } else {
        notify1(response.data.message);
      }
    } else if (userType == "student") {
      let response = await axios.post(
        `${API_ENDPOINT}/students/add/project`,
        payload,
        studentHeader
      );
      console.log(response);
      if (response.data.status === true) {
        notify(response.data.message);
      } else {
        notify1(response.data.message);
      }
    }
  };
  const notify = (msg) => {
    toast.success(msg);
  };

  const notify1 = (msg) => {
    toast.error(msg);
  };

  return (
    <div>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="children">
        <div className="projectFormDiv1">
          <div className="div2">
            <div className="div3">
              <h1>Post a New Project</h1>
              <form onSubmit={handleSubmit} className="projectform">
                <div className="form-outline1">
                  <label className="form-label " htmlFor="form2Example1">
                    Project Title:
                  </label>
                  <input
                    type="text"
                    id="form2Example1"
                    className="form-control"
                    placeholder="Enter Project Title"
                    value={formData.projectTitle}
                    name="projectTitle"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>
                <div className="form-outline1">
                  <label className="form-label" htmlFor="form2Example2">
                    Project Description:
                  </label>
                  <input
                    type="text"
                    id="form2Example2"
                    className="form-control"
                    name="projectDescription"
                    value={formData.projectDescription}
                    placeholder="Describe your project"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>
                <div className="form-outline1">
                  <label>Start Date</label>
                  <input
                    type="date"
                    id="form2Example2"
                    className="form-control"
                    name="startDate"
                    value={formData.startDate}
                    placeholder="Describe your project"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>
                <div className="form-outline1">
                  <label>End Date</label>

                  <input
                    type="date"
                    id="form2Example2"
                    className="form-control"
                    name="endDate"
                    value={formData.endDate}
                    placeholder="Describe your project"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>
                <div className="form-outline1">
                  <label className="form-label" htmlFor="form2Example2">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    id="form2Example2"
                    className="form-control"
                    name="contactNumber"
                    value={formData.contactNumber}
                    placeholder="Enter Your Contact Number"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>
                <div className="form-outline1">
                  <label className="form-label" htmlFor="form2Example2">
                    Project Summary
                  </label>
                  <input
                    type="text"
                    id="form2Example2"
                    className="form-control"
                    name="projectSummary"
                    value={formData.projectSummary}
                    placeholder="Summarize Your Project"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>

                <div className="form-outline1">
                  <label>Upload File</label>
                  <br />
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => uploadImage(e)}
                  />
                  <label>
                    {" "}
                    <h4 style={{ color: "red" }}>{loading ? "loading" : ""}</h4>
                  </label>
                </div>
                <ToastContainer icon={false} />
                <button type="submit" className="btn btn-primary " id="LogIn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostProject;
