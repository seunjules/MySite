import React, { Component } from "react";
import "./nav.css";

class Nav extends Component {
  constructor() {
    super();
  }

  render() {
    const { handleView } = this.props;

    return (
      <div className="nav">
      
          <nav className="navText">
        <span className="navItems link">  <i className="fa fa-angle-double-right fa-2x Arrow"></i> <a
              className=""
              title="About"
              name="About"
              onClick={() => handleView("projects")}
            >
              About
            </a></span>
            <span className="navItems link">  <i className="fa fa-angle-double-right fa-2x Arrow"></i>  <a
              className=""
              title="Projects"
              name="Projects"
              onClick={() => handleView("work")}
            >
              Projects
            </a></span>
            <span className="navItems link">  <i className="fa fa-angle-double-right fa-2x Arrow"></i>  <a
              className=""
              title="Contact"
              name="Contact"
              onClick={() => handleView("about")}
            >
              Contact
            </a></span>
          </nav>
      </div>
    );
  }
}

export default Nav;
