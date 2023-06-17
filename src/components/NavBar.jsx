import { useState } from "react";
import styles from "../styles/navbar.module.scss";

const NavBar = ({ navH }) => {
  const [active, setActive] = useState("");

  const scrollHandler = () => {
    console.log(window.scrollY);
  };

  return (
    <div
      onClick={scrollHandler}
      className={styles.navbar}
      style={{ height: navH }}
    >
      <ul>
        <li>
          <a
            className={active === "about" ? styles.active : ""}
            onClick={() => setActive("about")}
            href="#about"
          >
            About
          </a>
        </li>
        <li>
          <a
            className={active === "contact" ? styles.active : ""}
            onClick={() => setActive("contact")}
            href="#contact"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            className={active === "donate" ? styles.active : ""}
            onClick={() => setActive("donate")}
            href="#donate"
          >
            Donate
          </a>
        </li>
        <li>
          <a
            className={active === "involved" ? styles.active : ""}
            onClick={() => setActive("involved")}
            href="#involved"
          >
            Get Involved
          </a>
        </li>
        <li>
          <a
            className={active === "projects" ? styles.active : ""}
            onClick={() => setActive("projects")}
            href="#projects"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className={active === "stories" ? styles.active : ""}
            onClick={() => setActive("stories")}
            href="#stories"
          >
            Stories
          </a>
        </li>
        <li>
          <a
            className={active === "team" ? styles.active : ""}
            onClick={() => setActive("team")}
            href="#team"
          >
            Team
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
