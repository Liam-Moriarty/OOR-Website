import React from "react";
import "./about.css";
import Button from "../../../components/button/Button";
import Cards from "../../../components/cards/Cards";
import {
  albumCards,
  playlists,
  featuredSlider,
} from "../../../constants/constants";
import { FaChevronRight } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";

const About = () => {
  return (
    <section className="sectionContainer about-extended">
      {/* First Subsection*/}
      <div className="about-wrapper">
        <h2>LEADING THE MOVEMENT TOWARDS ARTIST SUSTAINABILITY</h2>
        <p>
          At Monstercat, we strive to create artist sustainability through novel
          partnerships, career flexibility and a global commuinity
        </p>
        <Button children="Learn More" outline iconLeft={<FaChevronRight />} />
      </div>

      {/* Second Subsection*/}
      <div className="about-cards">
        <h2 className="aboutSubTitle">OUR ALBUMS</h2>
        <Cards cardData={albumCards} />
      </div>

      {/* First Subsection*/}
      <div className="about-featured">
        <div className="latest-released-wrapper">
          <Swiper
            cssMode={true}
            navigation={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Mousewheel, Keyboard]}
            className="featuredSwiper"
          >
            {featuredSlider.released.map((released) => (
              <SwiperSlide key={released.id} className="featuredSwiperSlider">
                <h2 className="aboutSubTitle">Featured</h2>
                <img src={released.path} alt="slider" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="latest-released-wrapper">
          <Swiper
            cssMode={true}
            navigation={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Mousewheel, Keyboard]}
            className="featuredSwiper"
          >
            {featuredSlider.artists.map((artist) => (
              <SwiperSlide key={artist.id} className="featuredSwiperSlider">
                <h2 className="aboutSubTitle">{artist.artist}</h2>
                <img src={artist.path} alt="slider" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="latest-released-wrapper">
          <Swiper
            cssMode={true}
            navigation={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Mousewheel, Keyboard]}
            className="featuredSwiper"
          >
            {featuredSlider.news.map((n) => (
              <SwiperSlide key={n.id} className="featuredSwiperSlider">
                <h2 className="aboutSubTitle">news</h2>
                <img src={n.path} alt="slider" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* First Subsection*/}
      <div className="about-cards">
        <div className="playlist-title-wrapper">
          <h2 className="aboutSubTitle">PLAYLISTS</h2>
          <p>
            Listen on One Ok Rock <FaChevronRight />
          </p>
        </div>
        <Cards cardData={playlists} extended />
      </div>
    </section>
  );
};

export default About;
