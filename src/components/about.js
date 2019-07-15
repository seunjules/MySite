import React, { Component } from "react";
import seun from "./seun.jpg";
import coding from "./coding.png";
import interest from "./interests.png";

class About extends Component {
  constructor() {
    super();
  }

  render() {
    const { handleView } = this.props;

    return (
      <div className="projectsContainer moved animated" id="about">
        <div className="project items-center start animated zoomIn">
          <div className="cardsWork">
            <p className="ptext">
              Hello, I am a technology enthusiast with a background in
              Electrical Engineering. Over the last couple of months, I have
              been sharpening my technical skills at EvolveU. EvolveU also
              exposes its students to industry practices such as the agile
              method. I enjoyed programming in University, but I've been
              surprised by just how much I am enjoying it now. I am currently
              seeking employment from a company that believes in developing
              talent, and shares my passion for technology,
            </p>
          </div>
        </div>
        <div className="project items-center end animated zoomIn">
          <div className="cardsWork">
            <img src={coding} alt="Laptop" />
            <div className="flex column leftText">
              <p className = "close">I have experience with:</p>
              <ul>
                <li>JavaScript, HTML, and CSS</li>
                <li>Python, FLASK, Node.js, Express</li>
                <li>SQL, Knex, SQLAlchemy, </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project items-center start animated zoomIn">
          <div className="cardsWork">
            <img src={interest} alt="Baloons" />
            <div className="flex column leftText">
              <p className= "close">Here are some of my interests:</p>
              <ul>
                <li>
                  Reading, Listening, Learning: I spend a lot of time reading
                  books, or listening to podcasts/audio books on a wide range of
                  topics
                </li>
                <li>
                  Machine learning and Artificial Intelligence; I am fascinated my neural networks. I am
                  currently attempting to build one to forecast stock prices
                </li>
                <li>
                  Sports: I love sports. Sports have been my best teacher of
                  team work and co-operation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
