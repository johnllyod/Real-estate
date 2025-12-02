import React from "react";
import "./topnav.css";

function TopNav() {
  return (
    <header className="App-header" id="TopNav">
      <a href="/" className="App-link">
        Logo
      </a>
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
    </header>
  );
}

export default TopNav;
