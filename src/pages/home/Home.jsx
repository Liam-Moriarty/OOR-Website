import React from "react";
import "./home.css";
import Hero from "../../sections/homeSection/hero/Hero";
import About from "../../sections/homeSection/about/About";
import Account from "../../sections/homeSection/account/Account";
import Events from "../../sections/homeSection/events/Events";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="home-wrapper">
      <Hero />
      <About />
      <Account />
      <Events />
      <Footer />
    </div>
  );
};

export default Home;
