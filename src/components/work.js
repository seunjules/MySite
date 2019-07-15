import React, { Component } from "react";
import siemens from "./siemens.jpg";
import tnt from "./tnt.jpg";
import cultivatr from "./cultivatr.png";
import "animate.css";

class Work extends Component {
  constructor() {
    super();
  }

  render() {
    const { handleView } = this.props;

    return (
      <div className="projectsContainer moved animated" id="work">
        <div className="project items-center end animated zoomIn">
          <div className="cardsWork">
            <img src={cultivatr} alt="cultivatr" />
            <div className="flex column leftText">
              <h1 className="close">CultivatR</h1>
              <h3 className="close">Full Stack Developer</h3>
              <ul>
                <li>
                  Designed, developed and implemented business functionality
                  into web based solutions.
                </li>
                <li>
                  Identified performance improvement areas for the client
                  presented recommendations and performed rapid mock ups that
                  could be translated into front-end code
                </li>
                <li>
                  Helped in quality testing, and resolving bugs in the code
                </li>
                <li>
                  Integrated of front end and back end aspects of the web
                  application while considering issues such as scalability and
                  security.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project items-center start animated zoomIn">
          <div className="cardsWork">
            <img src={siemens} alt="siemens" />
            <div className="flex column leftText">
              <h1 className="close">Siemens Canada</h1>
              <h3 className="close">Application Engineer</h3>

              <ul>
                <li>
                  Preparation of pricing and packaging of projects for tender to
                  the market. Reviewing and administering changes in terms and
                  conditions of projects, to meet client requirements.
                </li>
                <li>
                  Provide technical interpretation and clarification of
                  schematic drawings, blueprints, and specifications for
                  internal and external parties.
                </li>
                <li>
                  Guide investigations and analysis of complex field problems
                </li>
                <li>
                  Issuing RFQs to, and reviewing bids from Vendors and third
                  party suppliers.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project items-center end animated zoomIn">
          <div className="cardsWork">
            <img src={tnt} alt="tnt" />
            <div className="flex column leftText">
              <h1 className="close">TNT Engineering</h1>
              <h3 className="close">Project Engineer</h3>

              <ul>
                <li>
                  Prepared D56 letters, audit binders, and ERCB applications
                </li>
                <li>
                  Provided cost estimates, maintained weekly cost reports, and
                  procured equipment and service.
                </li>
                <li>
                  Developed process flow diagrams, process and instrumentation
                  diagrams, and other technical documents
                </li>
                <li>
                  Prepared and maintained project design basis memorandums.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
