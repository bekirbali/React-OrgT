import { useState } from "react";

import About from "./About";
import Donate from "./Donate";
import GetInvolved from "./GetInvolved";
import Projects from "./Projects";
import Stories from "./Stories";
import Team from "./Team";

import styles from "../styles/home.module.scss";
import { BsArrowUpCircleFill } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = ({ iconClick, active }) => {
  return (
    <>
      <div className={`${styles.landing}`}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={5}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="/about/4.JPG"
              alt="landing1"
              style={{ width: "720px", height: "520px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/about/5.JPG"
              alt="landing2"
              style={{ width: "720px", height: "520px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/about/7.JPG"
              alt="landing3"
              style={{ width: "720px", height: "520px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/about/8.JPG"
              alt="landing4"
              style={{ width: "720px", height: "520px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/about/11.JPG"
              alt="landing5"
              style={{ width: "720px", height: "520px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/about/12.JPG"
              alt="landing5"
              style={{ width: "720px", height: "520px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/about/15.JPG"
              alt="landing5"
              style={{ width: "720px", height: "520px" }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {active && (
        <button className={styles.icon} onClick={iconClick}>
          <BsArrowUpCircleFill size={50} />
        </button>
      )}

      <About />
      <Projects />
      <Stories />
      <Team />
      <GetInvolved />
      <Donate />
    </>
  );
};

export default Home;
