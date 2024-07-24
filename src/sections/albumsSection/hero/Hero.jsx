import React from "react";
import "./hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import { albumSlider } from "../../../constants/constants";
import Button from "../../../components/button/Button";
import PageTitle from "../../../components/pageTitle/PageTitle";

const Hero = () => {
  return (
    <div className="sectionContainer albumHeroExtended">
      <PageTitle heading="ONE OK ROCK" subHeading="music" />

      <section className="setionContainer">
        <h2 className="release-title">FEATURED RELEASE</h2>
        <div className="album-feature-slider">
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
            className="albumSwiper"
          >
            {albumSlider.map((slider) => (
              <SwiperSlide key={slider.id} className="albumSwiperSlider">
                <img
                  src={slider.path}
                  alt="image"
                  className="album-slide-img"
                />

                <div className="album-content">
                  <div className="album-content-wrapper">
                    <div className="album-img-content">
                      <img
                        src={slider.path}
                        alt="image"
                        className="album-img"
                      />
                      <p className="album-released">
                        <span>OOR</span> - {slider.released}
                      </p>
                    </div>

                    <div className="album-title-content">
                      <h1 className="featured-title">
                        <span className="transparent-text album-featured-title-mobile">
                          {slider.song}
                        </span>
                        <br /> {slider.album}
                      </h1>
                      <img
                        src={slider.artistsImg}
                        alt="artist image"
                        className="album-artists"
                      />
                      <Button children="view release" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Hero;
