import React from "react";
import "./cards.css";

const Cards = ({ cardData, extended }) => {
  return (
    <div
      className={`${
        extended ? "about-card-wrapper-extended" : "about-card-wrapper"
      }`}
    >
      {cardData.map((card) => (
        <div key={card.id} className="card-image-wrapper">
          <img src={card.path} alt={card.alt} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
