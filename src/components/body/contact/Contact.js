import React from "react";
import "./contact.css";
import Separator from "../../common/separator/Separator";
import SocialContact from "../../common/socials/Socials";

export default function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platform</p>
          <SocialContact />
        </div>
        <div className="download-button">
          <a
            download
            href={require("../../../asset/icons/facebook.png").default}
          >
            <i className="fi-rr-cloud-download download-icon" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
