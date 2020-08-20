import React, { useEffect, useState } from "react";
import axios from "axios";

import PropertyCard from "./PropertyCard";
import Alert from "./Alert";

const Properties = () => {
  const [listings, setListings] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("http://localhost:4000/api/v1/PropertyListing")
        .then((response) => setListings(response.data))
        .catch((err) => setAlert({ message: `${err}` }));
    }
    fetchData();
  }, []);

  return (
    <div
      className="properties"
      style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
    >
      {listings.map((listing) => (
        <PropertyCard {...listing} key={listing.id} />
      ))}
      {alert.message && <Alert message={alert.message} />}
    </div>
  );
};

export default Properties;
