import React from "react";
import "../../styles/landing.css";
import ieeelogo from "../../images/NWMSU_logo.png";
import maninbg from "../../images/nwmsubackground.jpg";

import {
  FaFacebookF,
  FaInstagramSquare,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaShareAlt,
} from "react-icons/fa";
import Sidebar from "./components/sidebar";

const Landing = () => {
  return (
    <div>
      <Sidebar/>
      <div className="wrapper-div">
        <div>
          <div className="flex content">
            <div className="flex">
              <img src={ieeelogo} alt="" />
            </div>

            <div>
              <div>
                <input
                  type="text"
                  placeholder="Search"
                  className="input-ieee"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="landing_section">
          {/* <div className="dummy-nav">yioqwyifcyhiepowqhfvyhwohfviohwioyhrshvihevhdsoicoih</div> */}
          <div className="landing-bg">
            <div className="bg-img">
              <img src={maninbg} alt="" />
            </div>
            <div className="content-obs">
              <h1>Discover New Opportunities</h1>
              <p>
                Explore the world of professional based learning and unlock your
                potential. find projects. resources and connection to enhance
                your skills
              </p>
              <button>Learn More</button>
            </div>
          </div>
          <div className="margin">
            <FaFacebookF className="ml2" />
            <FaInstagramSquare className="ml2" />
            <FaTwitter className="ml2" />
            <FaLinkedinIn className="ml2" />
            <FaYoutube className="ml2" />
            <FaShareAlt className="ml2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
