import React from "react";
import { Link } from "react-router-dom";

import StyledSideBar from "../styles/styled-sidebar";

const SideBar = () => {
  return (
    <StyledSideBar>
      <ul className="sidebar-links" style={{ padding: "0px" }}>
        <h4>Sort by City</h4>
        <li className="sidebar-links-item">
          <Link to={`/?query={"city": "Manchester"}`}>Manchester</Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={`/?query={"city": "Leeds"}`}>Leeds</Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={`/?query={"city": "Liverpool"}`}>Liverpool</Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={`?query={"city": "Sheffield"}`}>Sheffield</Link>
        </li>
      </ul>
    </StyledSideBar>
  );
};

export default SideBar;
