import React from "react";
import StyledFavouriteCard from "../styles/styled-favourite-card";

const FavouriteCard = ({ _id, title }) => {
  return (
    <StyledFavouriteCard key={_id}>
      <b>Title</b>: {title}
      <a href="#">
        <button className="delete-button" type="button">
          Delete
        </button>
      </a>
    </StyledFavouriteCard>
  );
};

export default FavouriteCard;
