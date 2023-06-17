import React, { useState } from "react";

const About = () => {
  const [over, setOver] = useState(false);
  const overHandler = () => {
    setOver(true);
  };
  const leaveHandler = () => {
    setOver(false);
  };
  return (
    <div
      onMouseOver={overHandler}
      onMouseLeave={leaveHandler}
      id="about"
      className={"h-[calc(100vh-24px)] bg-yellow-400"}
      style={{ backgroundColor: over ? "red" : "yellow" }}
    >
      About
    </div>
  );
};

export default About;
