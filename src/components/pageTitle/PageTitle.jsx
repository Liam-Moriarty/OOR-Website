import React from "react";
import "./pageTitle.css";

const PageTitle = ({ heading, subHeading }) => {
  return (
    <>
      <h1 className="album-title">
        <span className="transparent-text album-title-mobile">{heading}</span>
        <br /> {subHeading}
      </h1>
    </>
  );
};

export default PageTitle;
