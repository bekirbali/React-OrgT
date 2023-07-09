import { useEffect, useState } from "react";

import About from "./About";
import Donate from "./Donate";
import GetInvolved from "./GetInvolved";
import Projects from "./Projects";
import Stories from "./Stories";
import Team from "./Team";

import styles from "../styles/home.module.scss";
import { BsArrowUpCircleFill } from "react-icons/bs";

import { register } from "swiper/element/bundle";

const Home = ({ iconClick, active }) => {
  register();
  return (
    <>
      <div className={`${styles.landing}`}>
        <swiper-container
          slides-per-view="3"
          speed="500"
          loop="true"
          css-mode="true"
        >
          <swiper-slide>
            <img src="./about4.JPG" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src="./about5.JPG" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src="./about7.JPG" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src="./about8.JPG" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src="./about11.JPG" alt="" />
          </swiper-slide>
        </swiper-container>
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
