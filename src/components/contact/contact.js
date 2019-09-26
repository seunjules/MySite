import React from "react";
import "./contact.css";

const Contacts = () => {
  return (
    <div className="contact" id="contact">
      <span className="header3">
        <span className="magnifyText">
          Contact me:
          <br />
        </span>
        <span className="contactDetails">
          I am currently looking for work. Feel free to reach out to me for
          freelance work, employment opportunities, or just to say hi.
        </span>
        <br /> <br />
        <a
          className="link"
          href="https://www.linkedin.com/in/seun-mejule/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <br />
        <a className="link" href="https://github.com/seunjules" target="_blank" rel="noopener noreferrer">
          Github
        </a>
        <br />
        (403)400-1438
        <br />
        SEUN.MEJULE@GMAIL.COM
      </span>
    </div>
  );
};

export default Contacts;
