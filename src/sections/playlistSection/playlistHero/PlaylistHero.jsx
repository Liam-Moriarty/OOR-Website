import React from "react";
import "./playlistHero.css";
import dummyImg from "../../../images/oor1.jpg";
import Button from "../../../components/button/Button";
import { FaPlay } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";

const PlaylistHero = () => {
  return (
    <div className="playlist-hero-wrapper">
      <div className="playlist-content-wrapper">
        <div className="main-content">
          <div className="playlist-img">
            <img src={dummyImg} alt="playlistImage" />
            <p className="playlist-released">
              <span>OOR</span> - January 1, 2024
            </p>
          </div>

          <div className="playlist-text">
            <div className="playlist-hero-title">
              <h1 className="transparent-text">LUXURY DISEASES</h1>
              <h1 className="playlist-subheading">ONE OK ROCK</h1>
            </div>

            <div className="playlist-btn">
              <Button children="Listen Now" iconRight={<FaPlay />} />
              <Button children="Share" iconRight={<FaShareAlt />} outline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistHero;
