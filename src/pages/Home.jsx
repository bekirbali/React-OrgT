import About from "./About";
import Donate from "./Donate";
import GetInvolved from "./GetInvolved";
import Projects from "./Projects";
import Stories from "./Stories";
import Team from "./Team";

import styles from "../styles/home.module.scss";
import "../styles/swiper.css";
import { BsArrowUpCircleFill } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = ({ iconClick, active }) => {
  return (
    <>
      <div className="swiper-container" id="home">
        <Swiper
          autoplay={{
            delay: 3026,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          effect={"fade"}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/about/4.JPG" alt="landing1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/about/5.JPG" alt="landing2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/about/7.JPG" alt="landing3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/about/8.JPG" alt="landing4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/about/13.jpg" alt="landing5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/about/15.JPG" alt="landing6" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/about/16.jpg" alt="landing7" />
          </SwiperSlide>
        </Swiper>
      </div>
      {active && (
        <button className={styles.icon} onClick={iconClick}>
          <BsArrowUpCircleFill size={50} />
        </button>
      )}

      <About />
      {/* <Projects />
      <Stories /> */}
      <Team />
      <GetInvolved />
      <Donate />
    </>
  );
};

export default Home;
