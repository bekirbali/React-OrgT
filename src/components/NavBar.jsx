import styles from "../styles/navbar.module.scss";
import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";
import roFlag from "../assets/roFlag.png";
import enFlag from "../assets/usaFlag.png";
import Flag from "react-flagkit";

const NavBar = ({ navH, active, setActive }) => {
  const scrollHandler = () => {
    console.log(window.scrollY);
  };

  const { t, i18n } = useTranslation();

  return (
    <div
      onClick={scrollHandler}
      className={styles.navbar}
      style={{ height: navH }}
    >
      <div className={styles.logo}>
        <img src={logo} alt="logo" className="ml-16 w-[50px]" />
        <div className="flex flex-col items-center justify-center">
          <h2>{t("change lives")}</h2>
          <div className={styles.flags}>
            <Flag country="RO" onClick={() => i18n.changeLanguage("ro")} />
            <Flag country="US" onClick={() => i18n.changeLanguage("en")} />
          </div>
        </div>
      </div>
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
            {t("about")}
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
            {t("projects")}
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
            {t("stories")}
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
            {t("team")}
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
            {t("get involved")}
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
            {t("donate")}
          </a>
        </li>

        {/* <li>
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
        </li> */}
      </ul>
    </div>
  );
};

export default NavBar;
