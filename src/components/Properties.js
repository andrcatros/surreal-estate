import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import SideBar from "./SideBar";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";

const Properties = ({ userID }) => {
  const [listings, setListings] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  const { search } = useLocation();

  // render initial page
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://stormy-depths-48903.herokuapp.com/api/v2/PropertyListing")
        .then((response) => setListings(response.data))
        .catch((err) => setAlert({ message: `${err}` }));
    }
    fetchData();
  }, []);

  // re-render page when a search is made
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(
          `https://stormy-depths-48903.herokuapp.com/api/v2/PropertyListing/${search}`
        )
        .then((response) => setListings(response.data))
        .catch((err) => setAlert({ message: `${err}` }));
    }
    fetchData();
  }, [search]);

  // handle saving properties to favourites
  const handleSaveProperty = async (propertyID) => {
    const param = { propertyListing: propertyID, fbUserId: userID };
    await axios
      .post("https://stormy-depths-48903.herokuapp.com/api/v2/Favourite", param)
      .catch((err) => setAlert({ message: "Favourite could not be saved." }));
  };

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
          <PropertyCard
            {...listing}
            key={listing._id}
            userID={userID}
            onSave={handleSaveProperty}
          />
        ))}
        {alert.message && <Alert message={alert.message} />}
      </div>
    </div>
  );
};

export default Properties;
