import React from 'react';
import '../../../styles/sidebar.css'; // Import the sidebar-specific CSS file
import { FaUser, FaChartBar, FaBook, FaUsers, FaCalendar, FaInbox, FaHistory, FaQuestionCircle } from 'react-icons/fa';

const Sidebar = () => {
  const sidebarItems = [
    { label: 'Account', icon: <FaUser className="icon" /> },
    { label: 'Dashboard', icon: <FaChartBar className="icon" /> },
    { label: 'Courses', icon: <FaBook className="icon" /> },
    { label: 'Group', icon: <FaUsers className="icon" /> },
    { label: 'Calendar', icon: <FaCalendar className="icon" /> },
    { label: 'Inbox', icon: <FaInbox className="icon" /> },
    { label: 'History', icon: <FaHistory className="icon" /> },
    { label: 'Help', icon: <FaQuestionCircle className="icon" /> },
  ];

  return (
    <div className="sidebar">
      {sidebarItems.map((item, index) => (
        <div className="box" key={index}>
          {item.icon}
          {/* <span className="label">{item.label}</span> */}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
