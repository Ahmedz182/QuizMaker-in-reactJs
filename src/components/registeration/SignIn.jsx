import React from "react";
import Nav from "../navAndFooter/Nav";
import { Link } from "react-router-dom";
import "./Registration.scss";

const Login = () => {
  return (
    <>
      <Nav />

      <div className="containerRegistration">
        <h1>Login</h1>
        <form action="/login" method="post">
          <label htmlFor="UserName">Email Address :</label>
          <input
            type="email"
            placeholder="Email Address"
            required
            name="username"
          />
          <label htmlFor="UserName">Password :</label>
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
          />
          <div className="chk">
            <input type="checkbox" className="boxChk" name="chk" id="1" />
            <span className="rem" style={{ color: "black" }}>
              Remember me{" "}
            </span>
            <input type="button" value="Sumbit" />
          </div>
        </form>

        <div className="reg">
          <span className="regNot">Not Yet Regestered </span>
          <Link to="/SignUp" className="signup">
            <span>Create New Account</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
