import React from "react";
import "./artistsBio.css";
import Button from "../../../components/button/Button";
import { artistBio } from "../../../constants/constants";

const ArtistsBio = () => {
  return (
    <div className="sectionContainer artistsBioExtended">
      <h1 className="artists-about">Artists About</h1>

      <div className="artists-about-wrapper">
        {artistBio.map((data, index) => (
          <div
            key={data.id}
            /* The className={artists-about-item ${index % 2 === 0 ? "" : "reverse"}} expression dynamically assigns the reverse class to every second item (those with odd indexes) while keeping the default artists-about-item class for the rest. This allows you to style every second item differently (e.g., by reversing the order of image and text) without manually applying classes. */
            className={`artists-about-item ${index % 2 === 0 ? "" : "reverse"}`}
          >
            <div className="artists-img-wrapper">
              <img src={data.path} alt="images" />
            </div>

            <div className="artists-text-wrapper">
              <div className="text-btn-container">
                <h1>{data.name}</h1>
                <p>{data.about}</p>
              </div>
              <div className="artists-btn-container">
                <Button children="View More" outline />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistsBio;
