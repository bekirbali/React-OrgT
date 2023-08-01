import styles from "../styles/navbar.module.scss";
import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";
import Flag from "react-flagkit";

const NavBar = ({ navH, active, setActive, changeRo, changeEn }) => {
  const scrollHandler = () => {
    console.log(window.scrollY, active);
  };

  const { t } = useTranslation();

  return (
    <nav
      className={`${styles.navbar} min-w-full`}
      style={{ height: navH }}
      onClick={scrollHandler}
    >
      <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center gap-3">
          <a href="#home" class="flex items-center">
            <img src={logo} className="h-8 mr-3" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              {t("change lives")}
            </span>
          </a>
          <div className={styles.flags}>
            <Flag country="RO" onClick={changeRo} />
            <Flag country="US" onClick={changeEn} />
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 bg-[#f4fffbe3] border-gray-100 rounded-lg lg:bg-transparent md:flex-row md:space-x-8 md:mt-0 ">
            <li>
              <a
                href="#about"
                className={active === "about" ? styles.active : ""}
                onClick={() =>
                  setTimeout(() => {
                    setActive("about");
                  }, 500)
                }
              >
                {t("about")}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={active === "projects" ? styles.active : ""}
                onClick={() =>
                  setTimeout(() => {
                    setActive("projects");
                  }, 500)
                }
              >
                {t("projects")}
              </a>
            </li>
            <li>
              <a
                href="#stories"
                className={active === "stories" ? styles.active : ""}
                onClick={() =>
                  setTimeout(() => {
                    setActive("stories");
                  }, 500)
                }
              >
                {t("stories")}
              </a>
            </li>
            <li>
              <a
                href="#team"
                className={active === "team" ? styles.active : ""}
                onClick={() =>
                  setTimeout(() => {
                    setActive("team");
                  }, 500)
                }
              >
                {t("team")}
              </a>
            </li>
            <li>
              <a
                href="#involved"
                className={active === "involved" ? styles.active : ""}
                onClick={() =>
                  setTimeout(() => {
                    setActive("involved");
                  }, 500)
                }
              >
                {t("get involved")}
              </a>
            </li>
            <li>
              <a
                // className={active === "donate" ? styles.active : ""}
                className={styles.donate}
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
          </ul>
        </div>
      </div>
    </nav>

    // <div
    //   onClick={scrollHandler}
    //   className={styles.navbar}
    //   style={{ height: navH }}
    // >
    //   <div className={styles.logo}>
    //     <img src={logo} alt="logo" className="ml-16 w-[50px]" />
    //     <div className="flex flex-col items-center justify-center">
    //       <h2>{t("change lives")}</h2>
    //       <div className={styles.flags}>
    //         <Flag country="RO" onClick={changeRo} />
    //         <Flag country="US" onClick={changeEn} />
    //       </div>
    //     </div>
    //   </div>
    //   <ul>
    //     <li>
    //       <a
    //         className={active === "about" ? styles.active : ""}
    //         onClick={() =>
    //           setTimeout(() => {
    //             setActive("about");
    //           }, 500)
    //         }
    //         href="#about"
    //       >
    //         {t("about")}
    //       </a>
    //     </li>

    //     <li>
    //       <a
    //         className={active === "projects" ? styles.active : ""}
    //         onClick={() =>
    //           setTimeout(() => {
    //             setActive("projects");
    //           }, 500)
    //         }
    //         href="#projects"
    //       >
    //         {t("projects")}
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         className={active === "stories" ? styles.active : ""}
    //         onClick={() =>
    //           setTimeout(() => {
    //             setActive("stories");
    //           }, 500)
    //         }
    //         href="#stories"
    //       >
    //         {t("stories")}
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         className={active === "team" ? styles.active : ""}
    //         onClick={() =>
    //           setTimeout(() => {
    //             setActive("team");
    //           }, 500)
    //         }
    //         href="#team"
    //       >
    //         {t("team")}
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         className={active === "involved" ? styles.active : ""}
    //         onClick={() =>
    //           setTimeout(() => {
    //             setActive("involved");
    //           }, 500)
    //         }
    //         href="#involved"
    //       >
    //         {t("get involved")}
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         // className={active === "donate" ? styles.active : ""}
    //         className={styles.donate}
    //         onClick={() =>
    //           setTimeout(() => {
    //             setActive("donate");
    //           }, 500)
    //         }
    //         href="#donate"
    //       >
    //         {t("donate")}
    //       </a>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default NavBar;
