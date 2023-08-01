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
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/free-mode";
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
          slidesPerView={1.25}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 3026,
            disableOnInteraction: false,
          }}
          className={styles["swiper_container"]}
        >
          <SwiperSlide className={styles.swiper_slide}>
            <img src="/about/4.JPG" alt="landing1" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>
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
          </SwiperSlide>

          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
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
