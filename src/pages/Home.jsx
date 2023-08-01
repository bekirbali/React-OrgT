import About from "./About";
import Donate from "./Donate";
import GetInvolved from "./GetInvolved";
import Projects from "./Projects";
import Stories from "./Stories";
import Team from "./Team";

import styles from "../styles/home.module.scss";
import { BsArrowUpCircleFill } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = ({ iconClick, active }) => {
  return (
    <>
      <div className={`${styles.landing}`} id="home">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={5}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className={styles["swiper_container"]}
        >
          <SwiperSlide className={styles.swiper_slide}>
            <img src="/about/4.JPG" alt="landing1" />
          </SwiperSlide>
          {/* <SwiperSlide className={styles.swiper_slide}>
            <img src="/about/5.JPG" alt="landing2" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>
            <img src="/about/7.JPG" alt="landing3" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>
            <img src="/about/8.JPG" alt="landing4" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>
            <img src="/about/13.jpg" alt="landing5" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>
            <img src="/about/15.JPG" alt="landing5" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>
            <img src="/about/16.JPG" alt="landing5" />
          </SwiperSlide> */}

          <div className={styles["slider-controller"]}>
            <div
              className={`${styles["swiper-button-prev"]} ${styles["slider-arrow"]}`}
            >
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div
              className={`${styles["swiper-button-next"]}${styles["slider-arrow"]} `}
            >
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className={styles["swiper-pagination"]}></div>
          </div>
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
