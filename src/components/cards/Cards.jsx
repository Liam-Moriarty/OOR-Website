import React from "react";
import "./cards.css";

const Cards = ({ cardData, extended, extendedImg, description, names }) => {
  return (
    <div
      className={`${
        extended ? "about-card-wrapper-extended" : "about-card-wrapper"
      } ${extendedImg && "extendedImg"} ${names && "artistImg"}`}
    >
      {cardData.map((card) => (
        <div
          key={card.id}
          className={`card-image-wrapper ${
            extendedImg && "card-image-wrapper-extended"
          } ${names && "card-artists-extended"}`}
        >
          {names && <p className="card-names">{card.artist}</p>}
          <img src={card.path} alt={card.alt} />
          {description && (
            <p className="card-description">{card.description}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Cards;
