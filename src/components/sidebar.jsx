import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./sidebar.css";
import {
  FaUser,
  FaChartBar,
  FaBook,
  FaUsers,
  FaCalendar,
  FaInbox,
  FaHistory,
  FaQuestionCircle,
} from "react-icons/fa";
const Sidebar = () => {
  const isAdmin = localStorage.getItem("userType")
  const sidebarAdmin = [
    {
      label: "Dashboard",
      icon: <FaChartBar className="icon" />,
      path: "/adminLogin",
    },
    {
      label: "Review Project",
      icon: <FaBook className="icon" />,
      path: "/ReviewProject",
    },
    {
      label: "Account",
      icon: <FaUser className="icon" />,
      path: "/account",
    },

    {
      label: "Calendar",
      icon: <FaCalendar className="icon" />,
      path: "/calendar",
    },
    {
      label: "Inbox",
      icon: <FaInbox className="icon" />,
      path: "/inbox",
    },
    {
      label: "History",
      icon: <FaHistory className="icon" />,
      path: "/history",
    },
    {
      label: "Help",
      icon: <FaQuestionCircle className="icon" />,
      path: "/help",
    },
  ];

  const sidebarItems = [
    {
      label: "Dashboard",
      icon: <FaChartBar className="icon" />,
      path: "/UserLogin",
    },
    {
      label: "Post project",
      icon: <FaBook className="icon" />,
      path: "/PostProject",
    },
    {
      label: "Account",
      icon: <FaUser className="icon" />,
      path: "/account",
    },
    {
      label: "Review Project",
      icon: <FaUsers className="icon" />,
      path: "/ReviewProject",
    },
    {
      label: "Calendar",
      icon: <FaCalendar className="icon" />,
      path: "/calendar",
    },
    {
      label: "Inbox",
      icon: <FaInbox className="icon" />,
      path: "/inbox",
    },
    {
      label: "History",
      icon: <FaHistory className="icon" />,
      path: "/history",
    },
    {
      label: "Help",
      icon: <FaQuestionCircle className="icon" />,
      path: "/help",
    },
  ];

  return (
    <div className="sidebar">
      {isAdmin == "Admin" ? (
        <>
          {sidebarAdmin.map((item, index) => (
            <Link to={item.path} key={index} className="box">
              {item.icon}
              <span className="label">{item.label}</span>
            </Link>
          ))}
        </>
      ) : (
        <>
          {" "}
          {sidebarItems.map((item, index) => (
            <Link to={item.path} key={index} className="box">
              {item.icon}
              <span className="label">{item.label}</span>
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default Sidebar;
