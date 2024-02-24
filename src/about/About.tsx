import React, { RefObject, useState } from "react";
import { ReactComponent as MyPhoto } from "../resources/assets/my-photo.svg";
import { ReactComponent as EmailIcon } from "../resources/assets/email.svg";
import { ReactComponent as GithubIcon } from "../resources/assets/github.svg";
import { ReactComponent as LinkedinIcon } from "../resources/assets/linkedin.svg";
import "./About.scss";

type AboutProps = {
  id: string;
  innerRef: RefObject<HTMLElement>
}

function About({ id, innerRef }: AboutProps) {
  const [isEmailHovered, setIsEmailHovered] = useState(false);

  return (
    <div className="about-overlay" id={id} ref={innerRef as RefObject<HTMLDivElement>}>
      <img src={require("../resources/assets/bg-img.jpg")} alt="Cover" />
      <div className="about-content">
        <div className="about-title">
          <span className="about-header">Hello, my name is</span>
          <h1 className="about-name">Xinhao Liang</h1>
        </div>
        <div className="about-description">
          <p>
            Software Engineer at Raytheon. Specialized in modern full-stack
            technologies (React, Angular, Spring Boot, OGSI). Cares about code
            quality and UI aesthetics. Loves travel and soccer.
          </p>
          <div className="about-links">
            <div className="svg-wrapper tooltip-wrapper">
              <EmailIcon
                className="svg-icon"
                onMouseEnter={() => setIsEmailHovered(true)}
                onMouseLeave={() => setIsEmailHovered(false)}
              />
              {isEmailHovered && (
                <div className="email-tooltip">
                  xinhao128 AT hotmail DOT com
                </div>
              )}
            </div>
            <a
              className="svg-wrapper"
              href="https://github.com/xinhao128"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon className="svg-icon" />
            </a>
            <a
              className="svg-wrapper"
              href="https://www.linkedin.com/in/xinhao-liang/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon className="svg-icon" />
            </a>
          </div>
        </div>
        <div className="about-photo">
          <MyPhoto className="image" />
        </div>
      </div>
    </div>
  );
}

export default About;
