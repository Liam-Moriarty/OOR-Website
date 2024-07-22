import React from "react";
import "./brands.css";
import Cards from "../../../components/cards/Cards";
import { brands } from "../../../constants/constants";

const Brands = () => {
  return (
    <div className="sectionContainer brandsExtended">
      <h1 className="brand-title">Collaboration Movies</h1>

      {/* CARDS */}

      <Cards cardData={brands} extendedImg description />
    </div>
  );
};

export default Brands;
