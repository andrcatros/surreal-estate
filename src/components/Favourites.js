import React, { useState, useEffect } from "react";
import axios from "axios";
import Alert from "./Alert";
import FavouriteCard from "./FavouriteCard";

const Favourites = ({ userID }) => {
  const [favourites, setFavourites] = useState([]);
  const [alert, setAlert] = useState("Please login to access your Favourites");

  // render initial page
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("http://localhost:4000/api/v1/Favourite?populate=propertyListing")
        .then((response) => setFavourites(response.data))
        .catch((err) => setAlert({ message: `${err}` }));
    }
    fetchData();
  }, []);

  const filteredFavourites = favourites.filter(
    (fav) => fav.fbUserId === userID
  );

  if (!userID) {
    return (
      <div className="Favourites" style={{ marginTop: "60px" }}>
        <Alert message={alert} />
      </div>
    );
  }

  if (!filteredFavourites.length) {
    return (
      <div className="Favourites" style={{ marginTop: "60px" }}>
        <Alert message="Save some properties to add them to Favourites." />
      </div>
    );
  }

  return (
    <div
      className="Favourites"
      style={{
        marginTop: "80px",
      }}
    >
      {favourites.map((favourite) => {
        const listing = favourite.propertyListing;
        return <FavouriteCard {...listing} />;
      })}
    </div>
  );
};

export default Favourites;
