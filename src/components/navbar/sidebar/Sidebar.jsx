import React from "react";
import "./sidebar.css";
import { FaXmark } from "react-icons/fa6";
import { pageLinks, socialLinks } from "../../../constants/constants";
import logo from "../../../images/oorlogo.png";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`sidebar-wrapper ${isOpen ? "open" : "closed"}`}>
      {/* Left Side */}
      <div className="sidebar-header">
        <div className="sidebar-img-wrapper">
          <img src={logo} alt="logo" />
          <h1>One Ok Rock</h1>
        </div>

        <div className="sidebar-close-wrapper">
          <button onClick={() => setIsOpen(!isOpen)}>
            <FaXmark />
          </button>
        </div>
      </div>

      {/* Middle Side */}
      <div className="sidebar-page-links-wrapper">
        <ul>
          {pageLinks.map((link, key) => (
            <li key={key}>
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side */}
      <div className="sidebar-social-links-wrapper">
        <ul>
          {socialLinks.map((link, key) => (
            <li key={key}>
              <a href={link.path}>{link.icons}</a>
            </li>
          ))}
        </ul>

        <div className="sidebar-button-wrapper">
          <button className="sidebar-sign-in">Sign In</button>
          <p>OR</p>
          <button className="sidebar-sign-out">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
