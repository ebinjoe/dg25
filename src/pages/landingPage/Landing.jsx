import React from "react";
import "../../styles/landing.css";
import ieeelogo from "../../images/iee.gif";

import {
  FaFacebookF,
  FaInstagramSquare,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaShareAlt,
} from "react-icons/fa";

const Landing = () => {
  return (
    <div>
      <div>
        <div className="flex content">
          <div className="flex">
            <img src={ieeelogo} alt="" />
            <p className="blue">
              The professional home for the engineering and <br /> technology
              community worldwide
            </p>
          </div>

          <div>
            <div>
              <input
                type="text"
                placeholder="Search all IEEE websites"
                className="input-ieee"
              />
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
    </div>
  );
};

export default Landing;
