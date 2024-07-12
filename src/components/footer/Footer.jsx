import React from "react";
import "./footer.css";
import { footerLinks } from "../../constants/constants";

const Footer = () => {
  return (
    <footer className="sectionContainer footerExtended">
      <div className="links-wrapper">
        {/* Left Side */}
        <div className="about-links">
          {footerLinks.links.map((link) => (
            <li>
              <a href="#">{link.links}</a>
            </li>
          ))}
        </div>

        {/* Middle Side */}
        <div className="about-links">
          {footerLinks.terms.map((link) => (
            <li>
              <a href="#">{link.links}</a>
            </li>
          ))}
        </div>

        {/* Right Side */}
        <div className="about-links">
          <h2>One Ok Rock News</h2>
          <p>
            Don't miss a thing, stay up to date with the latest news from One Ok
            Rock.
          </p>
          <div className="input-wrapper">
            <input type="text" placeholder="Enter Email" />
          </div>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="socialLinks-wrapper">
        {/* Left Side */}
        <p>2011 - 2024 © One Ok Rock, All Rights Reserved</p>

        {/* Right Side */}
        <div className="social-links">
          {footerLinks.socialLinks.map((link) => (
            <li>
              <a href="#">{link.icons}</a>
            </li>
          ))}
        </div>
      </div>

      <p className="acknowledgement">
        We acknowledge with gratitude the traditional, ancestral and unceded
        land of the Coast Salish peoples, including the territories of the
        Sḵwx̱wú7mesh (Squamish), Stó:lō and Səl̓ílwətaʔ/Selilwitulh
        (Tsleil-Waututh) and xʷməθkʷəy̓əm (Musqueam) Nations, on which One Ok
        Rock's Vancouver HQ stands.
        <span>
          We acknowledge the unceded and ancestral territories of the
          Gabrielino/Tongva peoples on which our LA team live and work.
        </span>
      </p>
    </footer>
  );
};

export default Footer;
