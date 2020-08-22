import React from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";

import StyledSideBar from "../styles/styled-sidebar";

const SideBar = () => {
  const search = useLocation();
  const buildQueryString = (operation, valueObj) => {
    const query = qs.parse(search, {
      ignoreQueryPrefix: true,
    });

    const newQuery = { ...query, [operation]: JSON.stringify(valueObj) };
    return qs.stringify(newQuery, { addQueryPrefix: true, encode: false });
  };
  return (
    <StyledSideBar>
      <ul className="sidebar-links" style={{ padding: "0px" }}>
        <h4>Sort by City</h4>
        <li className="sidebar-links-item">
          <Link to={buildQueryString("query", { city: "Manchester" })}>
            Manchester
          </Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={buildQueryString("query", { city: "Leeds" })}>Leeds</Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={buildQueryString("query", { city: "Liverpool" })}>
            Liverpool
          </Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={buildQueryString("query", { city: "Sheffield" })}>
            Sheffield
          </Link>
        </li>
        <h4>Sort by</h4>
        <li className="sidebar-links-item">
          <Link to={buildQueryString("sort", "+price")}>Price Ascending</Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={buildQueryString("sort", "-price")}>Price Descending</Link>
        </li>
      </ul>
    </StyledSideBar>
  );
};

export default SideBar;
