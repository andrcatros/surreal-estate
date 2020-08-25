import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import SideBar from "./SideBar";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";

const Properties = () => {
  const [listings, setListings] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  const { search } = useLocation();

  // render initial page
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("http://localhost:4000/api/v1/PropertyListing")
        .then((response) => setListings(response.data))
        .catch((err) => setAlert({ message: `${err}` }));
    }
    fetchData();
  }, []);

  // re-render page when a search is made
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`http://localhost:4000/api/v1/PropertyListing/${search}`)
        .then((response) => setListings(response.data))
        .catch((err) => setAlert({ message: `${err}` }));
    }
    fetchData();
  }, [search]);

  return (
    <div
      className="properties"
      style={{ display: "flex", flexDirection: "row" }}
    >
      <SideBar />
      <div
        className="properties-container"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: "60px",
          marginLeft: "220px",
          paddingLeft: "20px",
          backgroundColor: "#D0D0D0",
        }}
      >
        {listings.map((listing) => (
          <PropertyCard {...listing} key={listing._id} />
        ))}
        {alert.message && <Alert message={alert.message} />}
      </div>
    </div>
  );
};

export default Properties;
