import React from "react";
import { Link } from "react-router-dom";
import Nav from "./navAndFooter/Nav";
import About from "./About";
import "./Welcome.scss";
const Welcome = () => {
  return (
    <>
      <Nav />
      <div className="containerWelcome">
        <span className="h1">
          Welcome to the <strong>Quiz Maker</strong>
        </span>
        <Link to="/SignIn" className="link">
          <span className="button">Create Quiz</span>
        </Link>
        <Link to="/Home" className="link">
          <span className="button">Play Quiz</span>
        </Link>
      </div>
      <About />
    </>
  );
};

export default Welcome;
