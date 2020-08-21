import React from "react";
import { Link } from "react-router-dom";

import StyledSideBar from "../styles/styled-sidebar";

const SideBar = () => {
  return (
    <StyledSideBar>
      <ul className="sidebar-links" style={{ padding: "0px" }}>
        <h4>Sort by City</h4>
        <li className="sidebar-links-item">
          <Link to="/">Manchester</Link>
        </li>
        <li className="sidebar-links-item">
          <Link to="/">Leeds</Link>
        </li>
        <li className="sidebar-links-item">
          <Link to="/">Liverpool</Link>
        </li>
        <li className="sidebar-links-item">
          <Link to="/">Sheffield</Link>
        </li>
      </ul>
    </StyledSideBar>
  );
};

export default SideBar;
