import React from "react";
import "./resume.css"
import Pdf from "../Resume/res.pdf"

function Resume() {

    return (
      <div id="resume">
        <div className="row">
          <div className="col-md">
            <a href={Pdf} target="_blank" className="underline" rel="noreferrer"><h3 className="res-link navbar-text">RESUME</h3></a>
          </div>
        </div>
      </div>
    );
}

export default Resume;