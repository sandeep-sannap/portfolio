import React from "react";
import { SocialData } from "../../../data/socials";
import "./socials.css";

export default function Socials() {
  const data = SocialData;
  return (
    <div className="social-contact">
      {data.map((item) => {
        return (
          <a href={item.link}>
            <div className="social-icon-div">
              <img
                src={item.icon}
                alt={item.platform}
                className="social-icon-photo"
              />
            </div>
          </a>
        );
      })}
    </div>
  );
}
