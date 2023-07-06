import About from "./About";
import Contact from "./Contact";
import Donate from "./Donate";
import GetInvolved from "./GetInvolved";
import Projects from "./Projects";
import Stories from "./Stories";
import Team from "./Team";

import styles from "../styles/home.module.scss";

const Home = () => {
  return (
    <>
      <div className={`${styles.landing}`}>
        <div
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
        </div>
      </div>
      <About />
      <Contact />
      <Donate />
      <GetInvolved />
      <Projects />
      <Stories />
      <Team />
    </>
  );
};

export default Home;
