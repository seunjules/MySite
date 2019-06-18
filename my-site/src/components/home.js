import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    const { handleView } = this.props;

    return (
      <div className="homeContainer animated" id="home">
        <div className="flex column">
          <p className="animated fadeIn slower ">
            Hello, I'm Seun Mejule. I'm a Full Stack Developer
          </p>
          <div className="mainLinks animated ">
            <div className="button animated slideInLeft">
              <button
                name="projects"
                onClick={handleView}
                className="f5 no-underline grey bg-animate hover-bg-white hover-black inline-flex items-center pa4 ba border-box bgb ma6 bold"
              >
                PROJECTS
              </button>
            </div>
            <div className="button animated slideInUp">
              <button
                name="work"
                onClick={handleView}
                className="f5 no-underline grey bg-animate hover-bg-white hover-black inline-flex items-center pa4 ba border-box bgb ma6 bold"
              >
                WORK
              </button>
            </div>
            <div className="button animated slideInDown">
              <button
                name="about"
                onClick={handleView}
                className="f5 no-underline grey bg-animate hover-bg-white hover-black inline-flex items-center pa4 ba border-box bgb ma6 bold"
              >
                ABOUT
              </button>
            </div>
            <div className="button animated slideInRight">
              <button
                name="contact"
                onClick={handleView}
                className="f5 no-underline grey bg-animate hover-bg-white hover-black inline-flex items-center pa4 ba border-box bgb ma6 bold"
              >
                CONTACT
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
