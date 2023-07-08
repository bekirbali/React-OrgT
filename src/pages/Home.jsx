import About from "./About";
import Donate from "./Donate";
import GetInvolved from "./GetInvolved";
import Projects from "./Projects";
import Stories from "./Stories";
import Team from "./Team";

import styles from "../styles/home.module.scss";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import {
  EffectFade,
  EffectCards,
  Controller,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import { useEffect, useState } from "react";

const Home = ({ iconClick, active }) => {
  // const swiper = new Swiper(".swiper", {
  //   direction: "horizontal",
  //   loop: true,
  //   a11y: {
  //     prevSlideMessage: "Previous slide",
  //     nextSlideMessage: "Next slide",
  //   },
  //   autoplay: {
  //     delay: 500,
  //   },
  //   effect: "cards",
  // });
  const [controlledSwiper, setControlledSwiper] = useState(null);
  return (
    <>
      <div className={`${styles.landing}`}>
        {/* <div
          className={`${styles.opening} h-[calc(100vh-112px)] flex gap-[15rem] justify-center items-center`}
        >
          <div className={`${styles["romanian-text"]} text-center`}>
            <h1 className="font-[700] text-[3rem]">IMPREUNA</h1>
            <h2 className="font-[500] text-[2rem]">Putem Schimba Vieti!</h2>
          </div>
          <div className={`${styles["english-text"]} text-center`}>
            <h1 className="font-[700] text-[3rem]">TOGETHER</h1>
            <h2 className="font-[500] text-[2rem]">We Can Change Lives!</h2>
          </div>
        </div> */}
        <Swiper
          className="swiper_container"
          slidesPerView={"auto"}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          onSwiper={setControlledSwiper}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          pagination={{ el: "", clickable: true }}
        >
          <SwiperSlide>
            <img src="./about/4.JPG" alt="" style={{ width: "50px" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./about/5.JPG" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./about/16.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./about/20170410_140511.jpg" alt="" />
          </SwiperSlide>
          {/* <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img src="./about/4.JPG" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="./about/5.JPG" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="./about/7.JPG" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="./about/8.JPG" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="./about/11.JPG" alt="" />
              </div>
            </div>
          </div> */}
          <div className="slider-container">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline">asdg</ion-icon>
            </div>
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-forward-outline">asdg</ion-icon>
            </div>
          </div>
        </Swiper>
        {active && (
          <button className={styles.icon} onClick={iconClick}>
            <BsArrowUpCircleFill size={50} />
          </button>
        )}
      </div>
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
