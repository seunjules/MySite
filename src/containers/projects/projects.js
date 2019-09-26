import React from "react";
import Project from "../../components/project/project";
import onlineMarket from "../../assets/onlineMarket.png";
import onlineMarket2 from "../../assets/onlineMarketTablet.png";
import onlineMarket3 from "../../assets/onlineMarketMobile.png";
import cultivatr1 from "../../assets/cultivatr1.png";
import cultivatr2 from "../../assets/cultivatr2.png";
import cultivatr3 from "../../assets/cultivatr3.png";
import constants from "../../constants";
import "./projects.css"

const Projects = () => {

    return (
      <div className="projects" id = "projects">
        <span className="header2">Projects:</span>
        <div className="projectContainer">
          <Project
            mobile={onlineMarket3}
            tablet={onlineMarket2}
            web={onlineMarket}
            title={"Jules Market"}
            firstText={constants.julesMarketBlurb}
            secondText={constants.julesMarketTech}
          />
          <Project
            mobile={cultivatr3}
            tablet={cultivatr2}
            web={cultivatr1}
            title={"CultivatR"}
            firstText={constants.cultivatrBlurb}
            secondText={constants.cultivatrTech}
          />
        </div>
      </div>
    );
  }


export default Projects;
