import React, { Component } from "react";
import "./App.css";
import "./nav.css"
import Nav from "./nav";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Tilt from "react-tilt";
import "animate.css";

class App extends Component {
  render() {
    return (
      <body>
        <div className="App">
          <div className="landingPage">
            <span className="titleText">Hi, <br /> I am
            SEUN MEJULE.<br />
            FULL STACK<br />
            WEB DEVELOPER<br /></span>
            <i className="fa fa-angle-double-down fa-5x downArrow animated bounce infinite navText delay-2s slow"></i>
          </div>
          <Nav />
          <div className = "parallax"></div>
          <About />
          <div className = "parallax2"></div>
          <Projects />
          <div className = "parallax3"></div>
          <Contact />
        </div>
      </body>
    );
  }
}

export default App;
