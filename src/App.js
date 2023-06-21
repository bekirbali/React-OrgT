import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { useRef, useState } from "react";
import Footer from "./components/Footer";

const App = () => {
  const scrollRef = useRef(null);
  const [navH, setNavH] = useState("7rem");
  const [active, setActive] = useState("");

  const scrollHandler = () => {
    //! Navbar height by scrolling
    if (scrollRef.current.scrollTop > 0) {
      setNavH("3rem");
    } else {
      setNavH("7rem");
    }

    //! Navbar active colors by scrolling
    if (scrollRef.current.scrollTop === 0) {
      setActive("");
      console.log(active);
    } else if (scrollRef.current.scrollTop > 5975) {
      setActive("team");
      console.log(active);
    } else if (scrollRef.current.scrollTop > 5125) {
      setActive("stories");
      console.log(active);
    } else if (scrollRef.current.scrollTop > 4225) {
      setActive("projects");
      console.log(active);
    } else if (scrollRef.current.scrollTop > 3326) {
      setActive("involved");
      console.log(active);
    } else if (scrollRef.current.scrollTop > 2475) {
      setActive("donate");
      console.log(active);
    } else if (scrollRef.current.scrollTop > 1575) {
      setActive("contact");
      console.log(active);
    } else if (scrollRef.current.scrollTop > 696) {
      setActive("about");
      console.log(active);
    } else if (scrollRef.current.scrollTop < 337) {
      setActive("");
      console.log(active);
    }
  };

  const handleClick = () => {
    // if (scrollRef.current.scrollTop === 0) {
    //   setActive("");
    // } else if (scrollRef.current.scrollTop > 477) {
    //   setActive("about");
    // } else if (scrollRef.current.scrollTop > 1043) {
    //   setActive("contact");
    // } else if (scrollRef.current.scrollTop > 1609) {
    //   setActive("donate");
    // } else if (scrollRef.current.scrollTop > 2175) {
    //   setActive("involved");
    // } else if (scrollRef.current.scrollTop > 2741) {
    //   setActive("projects");
    // } else if (scrollRef.current.scrollTop > 3307) {
    //   setActive("stories");
    // } else if (scrollRef.current.scrollTop > 3873) {
    //   setActive("team");
    // }
    console.log(scrollRef.current.scrollTop);
  };

  return (
    <div
      ref={scrollRef}
      onScroll={scrollHandler}
      style={{ height: "100vh", overflow: "auto" }}
      onClick={handleClick}
    >
      <NavBar navH={navH} active={active} setActive={setActive} />
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
