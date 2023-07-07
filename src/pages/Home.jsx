import About from "./About";
import Donate from "./Donate";
import GetInvolved from "./GetInvolved";
import Projects from "./Projects";
import Stories from "./Stories";
import Team from "./Team";

import styles from "../styles/home.module.scss";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectFade, EffectCards, Controller } from "swiper/modules";
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
          className="text-center flex justify-center items-center"
          slidesPerView={2}
          modules={[Controller, EffectCards]}
          controller={{ control: controlledSwiper }}
          effect="cards"
          onSwiper={setControlledSwiper}
        >
          <SwiperSlide>
            {" "}
            <img src="./about/4.JPG" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src="./about/5.JPG" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src="./about/16.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src="./about/20170410_140511.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src="./about/DSC_01101.JPG" alt="" />
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
