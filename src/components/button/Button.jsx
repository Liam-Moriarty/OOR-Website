import React from "react";
import "./button.css";

const Button = ({ iconRight, iconLeft, children, onClick, outline }) => {
  return (
    <div className={`basicStyles ${outline ? "outline" : "nonOutline"}`}>
      {iconRight && iconRight}
      {children}
      {iconLeft && iconLeft}
    </div>
  );
};

export default Button;
