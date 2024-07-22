import React from "react";
import "./artistsHero.css";
import PageTitle from "../../../components/pageTitle/PageTitle";
import Cards from "../../../components/cards/Cards";
import { featuredSlider } from "../../../constants/constants";

const ArtistsHero = () => {
  return (
    <div className="sectionContainer artistExtended">
      <PageTitle heading="ONE OK ROCK" subHeading="ARTISTS" />

      <div className="artists-wrapper">
        <h1>Featured Artists</h1>
        <Cards cardData={featuredSlider.artists} extended names />
      </div>
    </div>
  );
};

export default ArtistsHero;
