import React from "react";
import { Link } from "react-router-dom";
import StyledFavouriteCard from "../styles/styled-favourite-card";

const FavouriteCard = ({ _id, title }) => {
  return (
    <StyledFavouriteCard key={_id}>
      <Link to={`/${_id}`}>
        <b>Title</b>: {title}
      </Link>
      <Link to={`/${_id}`}>
        <button className="delete-button" type="button">
          Delete
        </button>
      </Link>
    </StyledFavouriteCard>
  );
};

export default FavouriteCard;
