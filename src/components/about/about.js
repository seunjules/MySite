import React from "react";
import constants from "../../constants";
import "./about.css"

const About = () => {
  return (
    <div className="about" id="about">
      <span className="header">About me:</span>
      <div className="aboutTextContainer">
        <p className="aboutText">{constants.about}</p>
      </div>
    </div>
  );
};

export default About;
