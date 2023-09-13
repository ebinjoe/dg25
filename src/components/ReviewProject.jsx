import React from "react";
import "./sidebarLayout.css";
import "./WelcomeUserPage.css";
import Sidebar from "./sidebar";
import AdminLoginPageTab from "./adminLoginTab";
const ReviewProject = () => {
  return (
    <div>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="children">
        <AdminLoginPageTab />
      </div>
    </div>
  );
};

export default ReviewProject;
