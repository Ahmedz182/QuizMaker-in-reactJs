import React from "react";
import "./HeroSection.scss";
import bg from "../assets/img/quiz_1.png";
import Nav from "./navAndFooter/Nav";
import { Link } from "react-router-dom";
import About from "./About";
const HeroSection = () => {
  return (
    <>
      <Nav />
      <div className="contanier">
        <div>
          <span>Online Quiz Maker</span>
          <p>Create Play Able Quiz Online</p>
          <img src={bg} alt="imgs" />

          <Link to="/">
            <button>Add Quiz</button>
          </Link>
        </div>
      </div>
      <About />
    </>
  );
};

export default HeroSection;
