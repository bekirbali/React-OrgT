import styles from "../styles/navbar.module.scss";
import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";
import Flag from "react-flagkit";

const NavBar = ({ navH, active, setActive, changeRo, changeEn }) => {
  const scrollHandler = () => {
    console.log(window.scrollY);
  };

  const { t } = useTranslation();

  return (
    <nav
      className={`${styles.navbar} dark:bg-gray-900`}
      style={{ height: navH }}
    >
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" class="flex items-center">
          <img src={logo} className="h-8 mr-3" alt="Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            {t("change lives")}
          </span>
          <div className={styles.flags}>
            <Flag country="RO" onClick={changeRo} />
            <Flag country="US" onClick={changeEn} />
          </div>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#about"
                class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#stories"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Stories
              </a>
            </li>
            <li>
              <a
                href="#team"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#involved"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Get Involved
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

    //     {/* <li>
    //       <a
    //         className={active === "contact" ? styles.active : ""}
    //         onClick={() =>
    //           setTimeout(() => {
    //             setActive("contact");
    //           }, 500)
    //         }
    //         href="#contact"
    //       >
    //         Contact
    //       </a>
    //     </li> */}
    //   </ul>
    // </div>
  );
};

export default NavBar;
