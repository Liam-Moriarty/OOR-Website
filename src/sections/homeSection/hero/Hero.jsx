import React from "react";
import "./hero.css";
import { imageSlider } from "../../../constants/constants";
import Button from "../../../components/button/Button";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import { FaPlay, FaSpotify } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="heroSwiper"
      >
        {imageSlider.map((img) => (
          <SwiperSlide key={img.id} className="heroSwiperSlider">
            <img src={img.path} alt="slider" />

            <div className="center-content">
              <div className="content-wrapper">
                {/* IMAGE */}
                <p className="released">
                  <span>OOR</span> - {img.released}
                </p>
                <div className="img-album-wrapper">
                  <img src={img.path} alt="slider" />
                </div>

                {/* TEXT */}
                <div className="song-text-wrapper">
                  <h2 className="transparent-text">{img.song}</h2>
                  <h3>{img.album}</h3>

                  <div className="song-buttons-container">
                    <Button children="View Release" iconRight={<FaPlay />} />
                    <Button
                      children="Listen on Spotify"
                      iconRight={<FaSpotify />}
                      outline
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
