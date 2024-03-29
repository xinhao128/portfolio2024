import { useState } from "react";
import "./Navbar.scss";
import { ReactComponent as MenuIcon } from "../resources/assets/hamburger-menu.svg";
import { ReactComponent as CloseIcon } from "../resources/assets/close-icon.svg";
import { Link } from "react-router-dom";

type NavbarProps = {
  activeSection: string;
};

function Navbar({ activeSection }: NavbarProps) {
  const [showMenu, setShowMenu] = useState(false);

  const handleIconClick = () => {
    setShowMenu(!showMenu);
  };

  /**
   *
   * @param e mouse click event from an anchor element
   */
  const onClick = () => {
    setShowMenu(false);
  };

  return (
    <div
      className={`${
        activeSection === "about" ? "nav-wrapper nav-top" : "nav-wrapper"
      }`}
    >
      <div className="container nav-container">
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
          <ul className={showMenu ? "menu menu-active" : "menu"}>
            <li>
              <Link
                to="#about"
                onClick={onClick}
                className={`${activeSection === "about" ? "active" : ""}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="#skills"
                onClick={onClick}
                className={`${activeSection === "skills" ? "active" : ""}`}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="#experience"
                onClick={onClick}
                className={`${activeSection === "experience" ? "active" : ""}`}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="#projects"
                onClick={onClick}
                className={`${activeSection === "projects" ? "active" : ""}`}
              >
                Projects
              </Link>
            </li>
          </ul>
          <div className="menu-icon-wrapper" onClick={() => handleIconClick()}>
            {showMenu ? (
              <CloseIcon className="svg-icon" />
            ) : (
              <MenuIcon className="svg-icon" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
