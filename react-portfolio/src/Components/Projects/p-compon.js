import React from "react";
import "./p-compon.css"
import img from "../../Images/pantry.png"
import img2 from "../../Images/book.png"


function Pcompon(){
  return (

<div className="row">
  <div className="card mb-5">
    <div className="card-body">
      <div className="row">
        <div className="col-md-3 my-auto">
          <img
            src={img}
            alt="Pantry Prepper"
            width="200px"
            className="card-img img-fluid logo p-img"
          />
        </div>
        <div className="col-md-9">
          <h4 className="p-name">	<span className="symbol">	&#9826;</span> Pantry Prepper <span className="symbol">&#9826;</span></h4>
          <div className="row info">
            <p className="p-body">Life can be a bit stale sometimes, we wanted to make a site that could deliver something new to the user.
               Being hungry for both food and knowledge, we decided to make a website that generates recipes that include the users desired ingredient of their choice.
               By levaraging two API's we were able to provide the user with an application where they can easily search a food item or ingerdient and then receive an array 
               of recipes including their searched ingredient. YUM!</p>
            <h5 className="techtitle">Technologies Used</h5>
            <ul className="tech-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>mealDB API</li>
              <li>Spoonacular API</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-sm text-center">
              <a href="https://github.com/kleylakb89/pantry-prepper" target="_blank" className="a-link" rel="noreferrer">
                <button type="button" className="siteBtn btn btn-warning ">
                <span className="btn-tex">Repo Link</span>                </button>
              </a>
            </div>
            <div className="col-sm text-center">
              <a  href="https://kleylakb89.github.io/pantry-prepper/" target="_blank" className="a-link" rel="noreferrer">
                <button type="button" className="btn btn-dark siteBtn">
                <span className="btn-text livebtn">Live Site</span>                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="card mb-5">
    <div className="card-body">
      <div className="row ">
        <div className="col-md-3 my-auto">
          <img
            src={img2}
            alt="Pantry Prepper"
            width="200px"
            className="card-img img-fluid p-img"
          />
        </div>
        <div className="col-md-9">
          <h4 className="p-name"><span className="symbol">	&#9826;</span> Book Nook  <span className="symbol">	&#9826;</span></h4>
          <div className="row info">
            <p className="p-body">Welcome to BookNook! As many people still have a liking for physical books, this application bridges the gap between phyical and digital worlds, allowing
              the user to keep track of all the books they have read or would like to read. BookNook is a digital library where a user can add books to their 
              library keeping a record of their readings, as well as having the ability to add them to a favorites list and mark them as read whenever they finish that book.</p>
              <h5 className="techtitle">Technologies Used</h5>
            <ul className="tech-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Open library API</li>
              <li>ISBNDB API</li>
              <li>NodeJS</li>
              <li>Sequelize</li>
              <li>Express</li>
              <li>Express Handlebars</li>
              <li>Axios</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-sm text-center">
              <a href="https://github.com/kleylakb89/book-nook" target="_blank" className="a-link" rel="noreferrer">
                <button type="button" className="btn btn-dark siteBtn">
                <span className="btn-text">Repo Link</span>
                </button>
              </a>
            </div>
            <div className="col-sm text-center">
              <a href="https://dry-bastion-57106.herokuapp.com/login" target="_blank" className="a-link" rel="noreferrer">
                <button type="button" className="btn btn-warning siteBtn plz">
                  <span className="btn-tex">Live Site</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Pcompon;