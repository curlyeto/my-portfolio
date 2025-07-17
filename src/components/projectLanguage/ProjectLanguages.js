import React from "react";
import "./ProjectLanguages.css";

export default function ProjectLanguages({ logos, className }) {
  return (
    <div className={`languages-container ${className}`}>
      <div className="software-skills-main-div">
        <ul className="dev-icons languages-list">
          {logos.map((logo, index) => (
            <li
              key={index}
              className="software-skill-inline languages-inline"
              name={logo.name}
            >
              <span
                className="iconify language-icon"
                data-icon={logo.iconifyClass}
                data-inline="false"
              ></span>
              <p className="language-name">{logo.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
