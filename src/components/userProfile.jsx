import React , { useEffect , useState}from "react";
import "./UserProfile.css"; // Import your CSS file here
import "./sidebarLayout.css";
import Sidebar from "./sidebar";
import axios from "axios";
import { API_ENDPOINT } from "../constant/constant";
const UserProfile = () => {

  let userType = localStorage.getItem("userType");

  console.log(userType , "userType")
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

const [userProfile , setuserProfile] = useState("")


let userDetail = userProfile?.data?.data?.user

  useEffect(() => {
if(userType=="student"){
  axios
  .get(`${API_ENDPOINT}/students/get/details`, studentHeader)
  .then((response) => setuserProfile(response));
}
else if(userType=="guestUser"){
  axios
.get(`${API_ENDPOINT}/get/details`, guestHeader)
.then((response) => setuserProfile(response));
}
else{
  setuserProfile("")
}

  }, []);
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
              <h3>Name: {userDetail?.firstName} {userDetail?.lastName}</h3>
              <p>Email: {userDetail?.email}</p>
           
              <br/>
              {/* <button>Signout</button>  <button>Setting</button> */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserProfile;
