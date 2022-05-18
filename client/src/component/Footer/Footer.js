import React from "react";

import "./Footer.css";

const Footer = () => (
  <>
    <div className="footer-block"></div>
    <div className="footer">
      <div className="footer-container">
        <p>
          View this project on{" "}
          <a
            className="profile"
            href="https://github.com/Aravinth1207/E-Voting"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
        <p>
          Done by{" "}
          <a
            className="profile"
            href="https://github.com/Aravinth1207"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aravinth kumar
          </a>
          .
        </p>
      </div>
    </div>
  </>
);

export default Footer;
