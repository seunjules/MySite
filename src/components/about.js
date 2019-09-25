import React, { Component } from "react";
import constants from "./constants";

class About extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="about" id = "about" >
        <span className="header">About me:</span>
        <div className="aboutTextContainer">
          <p className="aboutText">{constants.about}</p>
        </div>
      </div>
    );
  }
}

export default About;
