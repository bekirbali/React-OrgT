import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { useRef, useState } from "react";
import Footer from "./components/Footer";

const App = () => {
  const scrollRef = useRef(null);
  const [navH, setNavH] = useState("7rem");

  const scrollHandler = () => {
    if (scrollRef.current.scrollTop > 0) {
      setNavH("3rem");
      console.log(navH);
    } else {
      setNavH("7rem");
      console.log(navH);
    }
  };

  return (
    <div
      ref={scrollRef}
      onScroll={scrollHandler}
      style={{ height: "100vh", overflow: "auto" }}
    >
      <NavBar navH={navH} />
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
