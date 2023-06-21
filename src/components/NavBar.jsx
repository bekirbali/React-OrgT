import { useState } from "react";
import styles from "../styles/navbar.module.scss";

const NavBar = ({ navH, active, setActive }) => {
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
            onClick={() =>
              setTimeout(() => {
                setActive("about");
              }, 500)
            }
            href="#about"
          >
            About
          </a>
        </li>
        <li>
          <a
            className={active === "contact" ? styles.active : ""}
            onClick={() =>
              setTimeout(() => {
                setActive("contact");
              }, 500)
            }
            href="#contact"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            className={active === "donate" ? styles.active : ""}
            onClick={() =>
              setTimeout(() => {
                setActive("donate");
              }, 500)
            }
            href="#donate"
          >
            Donate
          </a>
        </li>
        <li>
          <a
            className={active === "involved" ? styles.active : ""}
            onClick={() =>
              setTimeout(() => {
                setActive("involved");
              }, 500)
            }
            href="#involved"
          >
            Get Involved
          </a>
        </li>
        <li>
          <a
            className={active === "projects" ? styles.active : ""}
            onClick={() =>
              setTimeout(() => {
                setActive("projects");
              }, 500)
            }
            href="#projects"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className={active === "stories" ? styles.active : ""}
            onClick={() =>
              setTimeout(() => {
                setActive("stories");
              }, 500)
            }
            href="#stories"
          >
            Stories
          </a>
        </li>
        <li>
          <a
            className={active === "team" ? styles.active : ""}
            onClick={() =>
              setTimeout(() => {
                setActive("team");
              }, 500)
            }
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
