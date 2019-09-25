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
      
          <nav className="">
        <span className="navItems link">  <i className="fa fa-angle-double-right fa-2x Arrow"></i> <a
              className="navText"
              title="About"
              name="About"
              href="#about"
            >
              About
            </a></span>
            <span className="navItems link">  <i className="fa fa-angle-double-right fa-2x Arrow"></i>  <a
              className="navText"
              title="Projects"
              name="Projects"
              href="#projects"
            >
              Projects
            </a></span>
            <span className="navItems link">  <i className="fa fa-angle-double-right fa-2x Arrow"></i>  <a
              className="navText"
              title="Contact"
              name="Contact"
              href="#contact"
            >
              Contact
            </a></span>
          </nav>
      </div>
    );
  }
}

export default Nav;
