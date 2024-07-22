import React from "react";
import "./artists.css";
import ArtistsHero from "../../sections/artistsSection/artists/ArtistsHero";
import ArtistsBio from "../../sections/artistsSection/artistsBio/ArtistsBio";
import Footer from "../../components/footer/Footer";

const Artists = () => {
  return (
    <div className="main-wrapper">
      <ArtistsHero />
      <ArtistsBio />
      <Footer />
    </div>
  );
};

export default Artists;
