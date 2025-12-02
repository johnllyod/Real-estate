import React from "react";
import "./about.css";

function About() {
  return (
    <div className="App-about" id="About">
      <h1>About</h1>
      <h2 style={{ textAlign: "left" }}>Heading 1</h2>
      <div className="About-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          architecto praesentium beatae ratione. Perferendis cupiditate, ipsam
          quam magni odio at fugiat a! Quam, magni nemo. Optio distinctio quam
          dolor corrupti.
        </p>
        <img src="./images/Buildings.jpg" alt="Company Buildings" />
      </div>
      <h2 style={{ textAlign: "left" }}>Heading 2</h2>
      <div className="About-content Reverse-order">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          architecto praesentium beatae ratione. Perferendis cupiditate, ipsam
          quam magni odio at fugiat a! Quam, magni nemo. Optio distinctio quam
          dolor corrupti.
        </p>
        <img src="./images/House_1.jpg" alt="Company Buildings" />
      </div>
    </div>
  );
}

export default About;
