import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { useRef, useState } from "react";
import Footer from "./components/Footer";
import i18n from "./utils/i18n";

const App = () => {
  const scrollRef = useRef(null);
  const [navH, setNavH] = useState("9rem");
  const [active, setActive] = useState("");

  const scrollHandler = () => {
    //! Navbar height by scrolling
    if (scrollRef.current.scrollTop > 0) {
      setNavH("5rem");
    } else {
      setNavH("9rem");
    }

    //! Navbar active colors by scrolling
    if (scrollRef.current.scrollTop === 0) {
      setActive("");
    } else if (scrollRef.current.scrollTop > 13119) {
      setActive("donate");
    } else if (scrollRef.current.scrollTop > 12219) {
      setActive("involved");
    } else if (scrollRef.current.scrollTop > 11850) {
      setActive("team");
    } else if (scrollRef.current.scrollTop > 10950) {
      setActive("stories");
    } else if (scrollRef.current.scrollTop > 10048) {
      setActive("projects");
    } else if (scrollRef.current.scrollTop > 696) {
      setActive("about");
    } else if (scrollRef.current.scrollTop < 337) {
      setActive("");
    }
  };

  const iconClick = () => {
    console.log(scrollRef.current.scrollTop);
    scrollRef.current.scrollTo(0, 0);
  };

  return (
    <div
      ref={scrollRef}
      onScroll={scrollHandler}
      style={{ height: "100vh", overflow: "auto" }}
      onClick={() => console.log(scrollRef.current.scrollTop)}
    >
      <NavBar navH={navH} active={active} setActive={setActive} />
      <Routes>
        <Route
          path=""
          element={<Home iconClick={iconClick} active={active} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
