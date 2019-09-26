import React from "react";
import "./App.css";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Projects from "./containers/projects/projects";
import Contact from "./components/contact/contact";
import Landing from "./components/landing/landing"
import "animate.css";

const App = () => {
  return (
      <div className="App">
       <Landing />
        <Nav />
        <div className="parallax"></div>
        <About />
        <div className="parallax2"></div>
        <Projects />
        <div className="parallax3"></div>
        <Contact />
      </div>
  );
};

export default App;
