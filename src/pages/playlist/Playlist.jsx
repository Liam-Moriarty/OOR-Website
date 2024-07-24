import React from "react";
import PlaylistHero from "../../sections/playlistSection/playlistHero/PlaylistHero";
import PlaylistMusic from "../../sections/playlistSection/playlistMusic/PlaylistMusic";
import Footer from "../../components/footer/Footer";

const Playlist = () => {
  return (
    <div className="main-wrapper">
      <PlaylistHero />
      <PlaylistMusic />
      <Footer />
    </div>
  );
};

export default Playlist;
