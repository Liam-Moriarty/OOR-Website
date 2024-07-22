import React from "react";
import "./albums.css";
import Hero from "../../sections/albumsSection/hero/Hero";
import Music from "../../sections/albumsSection/music/Music";
import Brands from "../../sections/albumsSection/brands/Brands";
import Footer from "../../components/footer/Footer";

const Albums = () => {
  return (
    <div className="main-wrapper">
      <Hero />
      <Music />
      <Brands />
      <Footer />
    </div>
  );
};

export default Albums;
