import React from "react";
import "./projects.css";
import Pcompon from "../../Components/Projects/p-compon"

function Projects() {

    return (
        <div className="projects">
            <div className="row">
                <div className="col-md">
                    <h3 className="header">PROJECTS</h3>
                </div>
            </div>
            <div className="row">
                <Pcompon />
            </div>
        </div>
    )
}

export default Projects;