import React from "react";

const FavouriteCard = ({ _id, title }) => {
  return (
    <div className="favourite-card" key={_id}>
      Title: {title}
    </div>
  );
};

export default FavouriteCard;
