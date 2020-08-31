import React from "react";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";

import StyledNavBar from "../styles/styled-navbar";
import logo from "../styles/logo.png";

const NavBar = () => {
  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <StyledNavBar>
      <img src={logo} alt="Purple castle logo" />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/">View Properties</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/add-property">Add Property</Link>
        </li>
      </ul>
      <FacebookLogin
        appId="2933242766961969"
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        textButton="Login with Facebook"
        alt="Login with Facebook"
      />
    </StyledNavBar>
  );
};

export default NavBar;
