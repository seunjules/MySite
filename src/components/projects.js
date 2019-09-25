import React, { Component } from "react";
import Project from "./project";
import onlineMarket from "../onlineMarket.png";
import onlineMarket2 from "../onlineMarketTablet.png";
import onlineMarket3 from "../onlineMarketMobile.png";
import cultivatr1 from "../cultivatr1.png";
import cultivatr2 from "../cultivatr2.png";
import cultivatr3 from "../cultivatr3.png";
import constants from "./constants"

class Projects extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="projects">
        <span className="header2">Projects:</span>
        <div className="projectContainer">
          <Project
            mobile={onlineMarket3}
            tablet={onlineMarket2}
            web={onlineMarket}
            title={"Jules Market"}
            firstText={constants.julesMarketBlurb}
            secondText = {constants.julesMarketTech}
          />
          <Project
            mobile={cultivatr3}
            tablet={cultivatr2}
            web={cultivatr1}
            title={"CultivatR"}
            firstText={constants.cultivatrBlurb}
            secondText = {constants.cultivatrTech}
          />
        </div>
      </div>
    );
  }
}

export default Projects;
