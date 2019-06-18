import React, { Component } from "react";
import contact from "./contact.jpg";

class Contact extends Component {
  constructor() {
    super();
  }

  render() {
    const { handleView } = this.props;

    return (
      <div className="homeContainer animated" id="contact">
        <div className="flex column">
          <p>Want me on the team? Send me a message.</p>
          <div className=" flex justify-center messageForm items-center animated zoomIn">
            <img src={contact} alt="stockapp"/>
            <p>Give me a call at (403)-400-1438 or email me at seun.mejule@gmail.com</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
