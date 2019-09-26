import React from "react";
import "./project.css";

const Project = ({ firstText, secondText, mobile, web, title, tablet }) => {
  return (
    <div className="project">
      <div className="tabletProject">
        <img src={tablet} alt="Tablet View" className="tabletView"></img>
        <div className="tabletTextArea">
          <h2 className="projectTitle">{title}</h2>
          <p>{firstText}</p>
        </div>
      </div>
      <div className="webProject">
        <img src={web} alt="Web View" className="webView"></img>
      </div>
      <div className="mobileProject">
        <p className="mobileText">{secondText}</p>
        <img src={mobile} alt="Mobile View" className="mobileView"></img>
      </div>
    </div>
  );
};

export default Project;
