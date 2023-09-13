import React from "react";
import "../../../styles/userlogin.css";
import "../../../components/sidebarLayout.css";
import "../../../components/WelcomeUserPage.css";
import Sidebar from "../../../components/sidebar";

const reviewerLogin = () => {
  return (
    <div>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="children">
        <div className="hero">
          <div className="hero-content">
            <h1 className="hero-heading">Welcome, Reviewer!</h1>
            <p className="hero-text">Get ready for an exciting adventure.</p>
            <button className="hero-button">Start Exploring</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default reviewerLogin;
