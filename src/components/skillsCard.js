import React, { Component } from "react";
import "../App.css";
class SkillsCard extends Component {
  constructor() {
    super();
  }

  render() {
    const { handleView } = this.props;

    return (
      <div className="skillCard">
      <span className = "cardHeader">Skills</span>
      <span className = "cardEntry">Front End Development</span>
      <span className = "cardEntry">UI/UX Design</span>
      <span className = "cardEntry">Back End Development</span>
      <span className = "cardEntry">Database Administration</span>
      
      </div>
    );
  }
}

export default SkillsCard;
