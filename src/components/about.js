import React, { Component } from "react";
import InfoComp from "./infoComp";
import banner from "./banner.png";
import myPic from "./myPic.jpg"

class About extends Component {
  constructor() {
    super();
  }

  render() {
   
    return (
      <div className="projectsContainer" id="about">
        <img src={banner} alt="banner" className="banner" loading = "eager" />
        <div className="container">
          <div className="leftSection">
            <div className="infoCard">
              <div className="infoHeading">SKILLS</div>
              <div className="infoContent">
                <ul>
                  <li>
                    Experience with industry practices like the Agile method,
                    and SaaS models
                  </li>
                  <li>
                    Familiarity with programming principles (e.g  SOLID, DRY,
                    and KISS principles)
                  </li>
                  <li>
                    Team oriented and adaptable personality; enthusiastic about
                    work culture, and community activities
                  </li>
                  <li>
                    Knowledge of back-end and front-end architecture, frameworks
                    and technologies
                  </li>
                  <li>
                    Developing, deploying, and supporting RESTful API services
                  </li>
                  <li>Familiarity with distributed version control programs</li>
                </ul>
              </div>
            </div>
            <div className="infoCard">
              <div className="infoHeading">TECHNOLOGY</div>
              <div className="infoContent">
                <ul>
                  <li>
                    Distributed version control systems (GIT), Docker, Material
                    UI
                  </li>
                  <li>
                    CSS, Sass, HTML, JavaScript, React, React Native, Vue,
                    Redux, AdobeXD, Jest
                  </li>
                  <li>Node, Express., Python, Flask, GraphQL</li>
                  <li>SQL, SQL Alchemy, Knex</li>
                </ul>
              </div>
            </div>
            <div className="infoCard">
              <div className="infoHeading">REFERENCES</div>
              <div className="infoContent">
                <p>Greg Freson Project Manager: Mindfuel <br/> 
                phone: (587) 223-4441 <br/> 
                email: greg.freson@gmail.com <br/> 
                <br/>
                Byron Daniels Web Developer: CultivatR  <br/>
                phone: (403) 819-5865 <br/>
                email: byrondaniels@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="righSection">
            <div className="infoCard">
              <div className="infoHeading">WORK HISTORY</div>
              <div className="infoContent">
               <p><span className = "bolder">CultivatR</span> <br/>
               <span className ="bold"> Full Stack Developer, March 2019 - Present</span>
               </p>
                <ul>
                  <li>
                    Designed, developed and implemented business functionality
                    into web based solutions
                  </li>
                  <li>
                    Identified performance improvement areas for clients,
                    presented recommendations and performed rapid mock ups that
                    could be translated into front-end code
                  </li>
                  <li>
                    Integrated of front end and back end aspects of the web
                    application while considering issues such as scalability and
                    security.
                  </li>
                </ul>
                <p><span className = "bolder">Wonderville: MindFuel Contract</span> <br/>
               <span className = "bold"> Full Stack Developer, June 2019 - Present</span>
               </p>
                <ul>
                  <li>Work with stakeholders to define requirements</li>
                  <li>
                    Design and implement product features in HTML, CSS,
                    Javascript
                  </li>
                  <li>
                    Collaborating with other engineers across the entire stack.
                  </li>
                </ul>
                <p><span className = "bolder">Siemens Canada</span> <br/>
               <span className = "bold"> Application Engineer, February 2013 - October 2014</span>
               </p>
              </div>
            </div>
            <div className="infoCard">
              <div className="infoHeading">EDUCATION</div>
              <div className="infoContent">
               <p> <span className = "bolder">University of Calgary</span><br/> 
               <span className = "bold"> Bachelor of Science Electrical Engineering</span></p>
                <ul>
                  <li>Computer Organisation</li>
                  <li>Fundamentals of Object Oriented Programming</li>
                  <li>Programming Fundamentals for Software and Computer</li>
                  <li>Best Capstone Project, 2011.</li>
                </ul>
               <p> <span className = "bolder">EvolveU</span> <br/>
               <span className = "bold">Full Stack Developer Program</span> </p>
                <ul>
                  <li>
                    Best practices in; Responsive Design, DevOps, Test Driven
                    Development (TDD), Application Architecture and Agile
                  </li>
                  <li>Value of workplace culture and how it works</li>
                  <li>
                    Skills for effectively working in high performing teams.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div>
          <a href = "https://github.com/seunjules?tab=repositories" target="_blank" rel="noopener noreferrer">  <i className="fa fa-github-square fa-3x"></i> Github{" "}</a>
          </div>
          <div>
            {" "}
            <a href = "https://www.linkedin.com/in/seun-mejule/" target="_blank" rel="noopener noreferrer"> <i className="fa fa-linkedin fa-3x"></i> Linkedin{" "}</a>
          </div>
          <div>
            <i className="fa fa-phone-square fa-3x"></i> (403) 400-1438{" "}
          </div>
          <div>
            {" "}
           <a href = "mailto: seun.mejule@gmail.com ?"> <i className="fa fa-envelope fa-3x"></i> seun.mejule@gmail.com{" "}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
