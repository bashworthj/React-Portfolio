import React from "react";
import "./navigation.css";
import { Link } from "react-scroll";

function Nav() {
  return(
    <nav className="navbar navbar-expand-md">
       <div className="navbar-collapse justify-content-center">
        <ul className="navbar-nav">
          <li className="header-links navbar-text">
            <Link
            to="about"
            className="single-link"
            activeClass="active"
            spy={true}
            smooth={true}
          > About </Link>
          </li>
          <li className="header-links navbar-text">
            <Link
            to="projects"
            className="single-link"
            activeClass="active"
            spy={true}
            smooth={true}
          > Projects </Link>
          </li>
          <li className="header-links navbar-text">
            <Link
            to="resume"
            className="single-link"
            activeClass="active"
            spy={true}
            smooth={true}
          > Resume </Link>
          </li>
          <li className="header-links navbar-text">
          <Link
            to="contact"
            className="single-link"
            activeClass="active"
            spy={true}
            smooth={true}
          > Contact </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;