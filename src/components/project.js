import React, { Component } from "react";

class Project extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="project">
        <div className="tabletProject">
          <img
            src={this.props.tablet}
            alt="Tablet View"
            className="tabletView"
          ></img>
          <div className="tabletTextArea">
            <h2 className="projectTitle">{this.props.title}</h2>
            <p>{this.props.firstText}</p>
          </div>
        </div>
        <div className="webProject">
          <img src={this.props.web} alt="Web View" className="webView"></img>
        </div>
        <div className="mobileProject">
          <p className="mobileText">{this.props.secondText}</p>
          <img
            src={this.props.mobile}
            alt="Mobile View"
            className="mobileView"
          ></img>
        </div>
      </div>
    );
  }
}

export default Project;
