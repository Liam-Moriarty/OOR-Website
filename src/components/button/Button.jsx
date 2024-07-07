import React from "react";
import "./button.css";

const button = ({ icon, children, onClick, outline }) => {
  return (
    <div className={`${outline ? "outline" : "nonOutline"}`}>
      {icon}
      {children}
    </div>
  );
};

export default button;
