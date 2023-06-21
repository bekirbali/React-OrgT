import React, { useRef, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Donate from "./Donate";
import GetInvolved from "./GetInvolved";
import Projects from "./Projects";
import Stories from "./Stories";
import Team from "./Team";

const Home = () => {
  return (
    <div>
      <div className="opening h-[calc(100vh-112px)] bg-blue-600 flex justify-between items-center px-[26rem]">
        <div className="romanian text-center">
          <h1 className="font-[700] text-[3rem]">IMPREUNA</h1>
          <h2 className="font-[500] text-[2rem]">Putem Schimba Vieti!</h2>
        </div>
        <div className="english text-center">
          <h1 className="font-[700] text-[3rem]">TOGETHER</h1>
          <h2 className="font-[500] text-[2rem]">We Can Change Lives!</h2>
        </div>
      </div>
      <About />
      <Contact />
      <Donate />
      <GetInvolved />
      <Projects />
      <Stories />
      <Team />
    </div>
  );
};

export default Home;
