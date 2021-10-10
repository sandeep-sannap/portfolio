import React from "react";
import Socials from "../../common/socials/Socials";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello there, I am
          <br /> <span className="info-name">Sandeep Sannap</span>,
          <br /> I love programming
        </div>
        <div className="about-photo">
          <img
            // webpack extra
            src={require("../../../asset/coding.png").default}
            alt="pic"
            className="picture"
          />
        </div>
      </div>
      <Socials />
    </div>
  );
}

export default About;
