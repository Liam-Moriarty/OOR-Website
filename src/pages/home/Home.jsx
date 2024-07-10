import React from "react";
import "./home.css";
import Hero from "../../sections/homeSection/hero/Hero";
import About from "../../sections/homeSection/about/About";

const Home = () => {
  return (
    <div className="home-wrapper">
      <Hero />
      <About />
    </div>
  );
};

export default Home;
