import React, { Component } from "react";
import cultivatr from "./cultivatr.png";
import giveyyc from "./giveyyc.png";
import stockapp from "./stockapp.png";

class Projects extends Component {
  constructor() {
    super();
  }

  render() {
    const { handleView } = this.props;

    return (
      <div className="flex row moved animated" id="projects">
        <p>Here is some of the stuff I've done.</p>
        <div className="projectsContainer">
          <div className="flex justify-center">
            <div className="project items-center start animated zoomIn">
              <div className="cards">
                <img src={cultivatr} alt="cultivatr" />
                <div className="flex column leftText">
                  <h1 className="close">Cultivatr</h1>
                  <h3 className="close">
                    Javascript, Node(Express), Knex, PostgresSQL
                  </h3>
                  <p className="ptext">
                    Cultivatr is an start up aiming to help locals buy food and
                    produce from local farmers. This project is the producer
                    facing application Here farmers can put up the livestock and
                    produce they have for sale. The admin is then able to make
                    logistic and business decesions based on the demand, price
                    and availability of an item. The goal of this project is to
                    ane day reduce a portion of the waste in the food industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="project items-center end animated zoomIn">
              <div className="cards">
                <img src={giveyyc} alt="giveyyc" />
                <div className="flex column leftText">
                  <h1 className="close">GiveYYC</h1>
                  <h3 className="close">
                    Javascript, Node(Express), Knex, PostgresSQL
                  </h3>

                  <p className="ptext">
                    GiveYYC is a small application I created as part of job
                    application. The app helps people in Calgary find volunteer
                    opportunities. The app searches Twitter for recently posted
                    tweets in the Calgary area, and displays it to the user. It
                    also allows users to register and post messages seeking
                    volunteer help.
                  </p>
                </div>
              </div>
            </div>
            <div className="project items-center start animated zoomIn">
              <div className="cards">
                <img src={stockapp} alt="stockapp" />
                <div className="flex column leftText">
                  <h1 className="close">Stock App</h1>
                  <h3 className="close">
                    Javascript, Node(Express), Knex, PostgresSQL
                  </h3>

                  <p className="ptext">
                    Stock App is in its infancy. This is a project to build a
                    web app that helps users make finiancial investments. At the
                    moment, the App receives an input string representing a
                    financial instrument. The App uses an API to get historical
                    data for the instrument. It then uses a web scrapper to
                    scrape messages from chart rooms, and relevant articles from
                    select news sources. All the information is stored in a
                    postgres database. The next phase will be to use the data
                    gathered to train a predictive model
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
