import React from "react";
import "./about.css";
import me from "../../Images/me.JPG";

function About() {
  return (
    <div>
      <div className="row">
        <div className="col-md pic-bg">
          <img className="me" src={me} alt="me"></img>
        </div>
        <div className="col-md">
          <h3 className="about">
            ABOUT
          </h3>
          <div className="row align-self-center about-info">
            <p className="bio">
              After studying design at the University of Houston, I've spent the past few years focussing on clothing apparel design. In need 
              of a career change, I have found so much happiness becoming a Full Stack Developer, being able to design and create web applications.
              I love designing and giving clients a product they can gladly show off. In everything I do, I aim to make "it" look more awesome.
            </p>
            <p className="skills">
              <span className="goodat">
              <span className="symbols">	&#9826;</span> Here's a few things I'm good at: <span className="symbols">	&#9826;</span>
              </span>
              <ul className=" skillList text-center">
                <li className="good">Communicating. Absoultely my best quality</li>
                <li className="good">People/Project Management</li>
                <li className="good">Photoshop and Illustrator</li>
                <li className="good">HTML and CSS</li>
                <li className="good">React</li>
                <li className="good">Express</li>
                <li className="good">Node</li>
                <li className="good">Sequelize</li>
              </ul>
            </p>
            <p className="future"> <span className="learnin">
            <span className="symbols">	&#9826;</span> Here's a few things im currently learning/workin on: <span className="symbols">	&#9826;</span>
              </span></p>
              <ul className=" skillList text-center">
                <li className="good">Continued Learning of Web Design</li>
                <li className="good">Adobe Experience Manager</li>
                <li className="good">Python</li>
                <li className="good">SCSS</li>
                <li className="good">Spanish</li>
                <li className="good">Personal Webstore</li>
                <li className="good">Freelancing Websites for Family and Friends (who all seem to be coming 
                out of the woodworks now)</li>
              </ul>
          </div>
      <br></br>
    <h6 className="caption"><span className="um">[</span> Pictured to the left is my beautiful girlfriend and myself. <span className="um">]</span></h6>
        </div>
      </div>
    </div>
  );
}

export default About;