import React, { useState } from "react";
import "./navbar.css";
import { FaBars } from "react-icons/fa6";
import { socialLinks } from "../../constants/constants.jsx";
import logo from "../../images/oorlogo.png";
import Sidebar from "./sidebar/Sidebar.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-wrapper">
      {/* Left Side */}

      <div className="navbar-img-wrapper">
        <img src={logo} alt="logo" />
      </div>

      {/* Middle Side */}
      {/* prettier-ignore */}
      <ul className="social-links-wrapper">
        {socialLinks.map((link, key) => (
          <li key={key}><a href={link.path}>{link.icons}</a></li>
        ))}
      </ul>

      {/* Right Side */}
      <div className="hamburger-wrapper">
        {/* prettier-ignore */}
        <button onClick={() => setIsOpen(!isOpen)}><FaBars /></button>
      </div>

      {/* Show When Click */}
      {isOpen && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
    </nav>
  );
};

export default Navbar;
