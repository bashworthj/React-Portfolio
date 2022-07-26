import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div>
      <div className="row">
        <div className="">
          <h3 className="connect" id="contact">
            Lets Connect!
          </h3>
          <div className="row">
            <ul className="social">
            <li className="email inline">
              <a
                className="no-line"
                href="mailto:bashworthj@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                EMAIL
              </a>
            </li>
            <li className="email inline">
              <a
                className="no-line"
                href="https://github.com/bashworthj"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB
              </a>
            </li>
            <li className="email inline">
              <a
                className="no-line"
                href="https://github.com/bashworthj"
                target="_blank"
                rel="noreferrer"
              >
                LINKEDIN
              </a>
            </li>
            <li className="email inline">
              <a
                className="no-line"
                href="https://www.instagram.com/cowboynspace/"
                target="_blank"
                rel="noreferrer"
              >
                INSTAGRAM
              </a>
            </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
