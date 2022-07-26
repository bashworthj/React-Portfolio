import React from "react";
import Nav from "../../Components/Header/navigation";
import { Link } from "react-scroll";
import "./home.css";

function HomeView() {
  return (
    <div className="row">
      <Nav />

      <div className="col-md">
        <div className="container">
          <h2 className="name">Ben Ashworth</h2>
          <br></br>
          <h3 className="pencil">Ideas that are <span className="lighter">penciled</span> in, should've been wrote down in <span className="bigger">pen</span>.</h3>
          <br></br>
          <br></br>
          <Link to="about" activeClass="active" spy={true} smooth={true}>
            <button type="button" className="explore">
              Explore
            </button>
          </Link>
        </div>
      </div>
      <div className="col-md">
        <div className="main-img"></div>
      </div>
    </div>
  );
}

export default HomeView;
