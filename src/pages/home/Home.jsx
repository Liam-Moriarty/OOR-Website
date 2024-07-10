import React from "react";
import "./home.css";
import Hero from "../../sections/homeSection/hero/Hero";
import About from "../../sections/homeSection/about/About";
import Account from "../../sections/homeSection/account/Account";

const Home = () => {
  return (
    <div className="home-wrapper">
      <Hero />
      <About />
      <Account />
    </div>
  );
};

export default Home;
