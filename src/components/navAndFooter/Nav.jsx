import React from "react";
import "./NavAndFooter.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="navbar container navbar-expand-lg fixed-top">
        <Link to="/" className="link">
          <span>Quiz Maker</span>
        </Link>
        <div>
          <Link to="/" className="link">
            <li>Home</li>
          </Link>
          <Link to="/" className="link">
            <li>What We are</li>
          </Link>
          <Link to="/" className="link">
            <li>About</li>
          </Link>
          <Link to="/" className="link">
            <li>Contact Us</li>
          </Link>
          <Link to="/SignIn" className="link">
            <li>Login</li>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
