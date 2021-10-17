import React from "react";
import "./mobile.css";

export default function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i class="fas fa-window-close"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option" onClick={() => setIsOpen(!isOpen)}>
          <a href="#projects">
            <i class="fas fa-tasks option-icon"></i>Projects
          </a>
        </div>
        <div className="mobile-option" onClick={() => setIsOpen(!isOpen)}>
          <a href="#skills">
            <i class="fas fa-laptop-code option-icon"></i> Skills
          </a>
        </div>
        {/* <div className="mobile-option">
          <a href="#work">
            <i class="fas fa-briefcase option-icon"></i>Work
          </a>
        </div> */}
        <div className="mobile-option" onClick={() => setIsOpen(!isOpen)}>
          <a href="#contact">
            <i class="fas fa-address-book option-icon"></i>Contact
          </a>
        </div>
      </div>
    </div>
  );
}
