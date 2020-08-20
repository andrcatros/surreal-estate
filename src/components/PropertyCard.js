import React from "react";

const PropertyCard = ({ listing }) => {
  const { id, title, type, bathrooms, bedrooms, price, city, email } = listing;
  return (
    <div className="property-card" key={id}>
      <div className="listing-title">{title}</div>
      <div className="listing-type">{type}</div>
      <div className="listing-bathrooms">{bathrooms}</div>
      <div className="listing-bedrooms">{bedrooms}</div>
      <div className="listing-price">{price}</div>
      <div className="listing-city">{city}</div>
      <div className="listing-email">{email}</div>
    </div>
  );
};

export default PropertyCard;
