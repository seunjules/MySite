import React, { Component } from "react";
import "./App.css";
import Home from "./components/home";
import Work from "./components/work";
import About from "./components/about";
import Nav from "./nav";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Particles from "react-particles-js";
import "animate.css";

const particleOptions = {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentDisplay: "home"
    };
  }

  handleView = event => {
    this.removeComp(this.state.currentDisplay);
    const { name } = event.target;
    setTimeout(() => this.setState({ currentDisplay: name }), 500);
  };

  navView = name => {
    if (name === this.state.currentDisplay) {
      return;
    }
    this.removeComp(this.state.currentDisplay);

    setTimeout(() => this.setState({ currentDisplay: name }), 500);
  };

  removeComp = arg => {
    document.getElementById(arg).className += " fadeOutUp";
  };

  render() {
    const { currentDisplay } = this.state;

    return (
      <body>
        <div className="App">
          <Particles className="particles" params={particleOptions} />
          <div className="">
            {currentDisplay !== "home" ? (
              <Nav className="nav" handleView={this.navView} />
            ) : null}
          </div>
          {currentDisplay === "home" ? (
            <Home handleView={this.handleView} />
          ) : null}
          {currentDisplay === "projects" ? (
            <Projects handleView={this.handleView} />
          ) : null}
          {currentDisplay === "about" ? (
            <About handleView={this.handleView} />
          ) : null}
          {currentDisplay === "contact" ? (
            <Contact handleView={this.handleView} />
          ) : null}
          {currentDisplay === "work" ? (
            <Work handleView={this.handleView} />
          ) : null}
        </div>
      </body>
    );
  }
}

export default App;
