import React, { Component } from "react";
import "./nav.css";

class Nav extends Component {
  constructor() {
    super();
  }

  render() {
    const { handleView } = this.props;

    return (
      <div className=" flex end">
        <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
          <nav className="f6 fw6 ttu tracked">
            <h2
              className="link dim white dib mr3"
              title="projects"
              name="projects"
              onClick={() => handleView("projects")}
            >
              Projects
            </h2>
            <h2
              className="link dim white dib mr3"
              title="work"
              name="work"
              onClick={() => handleView("work")}
            >
              Work
            </h2>
            <h2
              className="link dim white dib mr3"
              title="about"
              name="about"
              onClick={() => handleView("about")}
            >
              About
            </h2>
            <h2
              className="link dim white dib mr3"
              title="contact"
              name="contact"
              onClick={() => handleView("contact")}
            >
              Contact
            </h2>
            <h2
              className="link dim white dib mr3"
              title="home"
              name="home"
              onClick={() => handleView("home")}
            >
              Home
            </h2>
          </nav>
        </header>
      </div>
    );
  }
}

export default Nav;
