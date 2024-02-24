import React from "react";
import "./Navbar.scss";

type NavbarProps = {
  activeSection: string;
};

/**
 * 
 * @param e mouse click event from an anchor element
 */
const onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  e.preventDefault();
  // Set the hash
  const targetHash = e.target as HTMLAnchorElement;
  window.location.hash = targetHash.hash;

  const targetSection: HTMLElement | null = document.querySelector(
    `${targetHash.hash}`
  );
  if (targetSection) {
    window.scrollTo({top: targetSection.offsetTop - 70});
  }
};

function Navbar({ activeSection }: NavbarProps) {
  return (
    <div
      className={`${
        activeSection === "about" ? "nav-wrapper nav-top" : "nav-wrapper"
      }`}
    >
      <div className="container">
        <div className="nav-flex">
          <div className="logo">
            <svg width="50" height="50" viewBox="0 0 70 70" fill="#00ac93">
              <circle cx="35" cy="35" r="35" fill="#00AC93"></circle>
              <path
                d="M22.3066 24.6719L27.4336 32.8457L32.5605 24.6719H35.8564L29.1182 35.2334L36.0176 46H32.6924L27.4336 37.665L22.1748 46H18.8496L25.749 35.2334L19.0107 24.6719H22.3066ZM52.2188 43.7002V46H41.5547V43.7002H52.2188ZM42.1113 24.6719V46H39.2842V24.6719H42.1113Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <div className="menu-items">
            <ul>
              <li>
                <a
                  href="#about"
                  onClick={onClick}
                  className={`${activeSection === "about" ? "active" : ""}`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={onClick}
                  className={`${activeSection === "skills" ? "active" : ""}`}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={onClick}
                  className={`${
                    activeSection === "experience" ? "active" : ""
                  }`}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={onClick}
                  className={`${activeSection === "projects" ? "active" : ""}`}
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
