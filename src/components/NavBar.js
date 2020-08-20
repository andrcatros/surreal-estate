import React from "react";
import { Link } from "react-router-dom";

import StyledNavBar from "../styles/styled-navbar";
import logo from "../styles/logo.png";

const NavBar = () => {
  return (
    <StyledNavBar>
      <img src={logo} alt="Purple castle logo" />
      <ul className="navbar-links" style={{ padding: "0px" }}>
        <li className="navbar-links-item">
          <Link to="/">View Properties</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/add-property">Add Property</Link>
        </li>
      </ul>
    </StyledNavBar>
  );
};

export default NavBar;
