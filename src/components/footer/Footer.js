import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="App-footer" id="Footer">
      <div className="Company-detail">
        <a href="/">Logo</a>
        <p>Company address</p>
        <p>Company contact number</p>
      </div>
      <div className="Footer-Nav">
        <a href="#Services" className="App-link">
          Services
        </a>
        <a href="#SearchNav" className="App-link">
          Houses
        </a>
        <a href="#About" className="App-link">
          About
        </a>
        <a href="#ContactUs" className="App-link">
          Contact Us
        </a>
      </div>
      <div className="Company-socials">
        <a>
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a>
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a>
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a>
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a>
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
