import React from "react";
import "./UserProfile.css"; // Import your CSS file here
import "./sidebarLayout.css";
import Sidebar from "./sidebar";
const UserProfile = () => {
  return (
    <div>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="children">
        <div className="profile-container">
          <div className="profile-grid">
            <div className="profile-image">
              {/* Add your profile image here */}
            </div>
            <div className="profile-details">
              <h3>Name: User Name</h3>
              <p>Bio: Your bio goes here.</p>
              <p>Email: your.email@example.com</p>
              <p>More Details: Additional details about you.</p>
              <p>About Me: Information about yourself.</p>
              <br/>
              <button>Signout</button>  <button>Setting</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserProfile;
