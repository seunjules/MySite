import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <span className="navItems link">
        <a className="navText" title="About" name="About" href="#about">
          About
        </a>
      </span>
      <span className="navItems link">
        <a
          className="navText"
          title="Projects"
          name="Projects"
          href="#projects"
        >
          Projects
        </a>
      </span>
      <span className="navItems link">
        <a className="navText" title="Contact" name="Contact" href="#contact">
          Contact
        </a>
      </span>
    </nav>
  );
};

export default Nav;
