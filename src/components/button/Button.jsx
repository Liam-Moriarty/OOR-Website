import React from "react";
import "./button.css";

const button = ({ iconRight, iconLeft, children, onClick, outline }) => {
  return (
    <div className={`${outline ? "outline" : "nonOutline"}`}>
      {iconRight && iconRight}
      {children}
      {iconLeft && iconLeft}
    </div>
  );
};

export default button;
