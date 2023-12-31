import React from "react";
import styles from "../styles/footer.module.scss";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <div id="contact" className={`${styles.footer}`}>
        <h1 className="text-center font-[700] text-[3rem] ">
          {t("contact us")}
        </h1>
        <div className="flex justify-center gap-24  mt-6">
          <div className={`${styles.email} flex flex-col items-center`}>
            <h2>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
                height="3rem"
                width="3rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              {t("phone")}
            </h2>
            <h3>
              <a href="tel:+90 (541) 270 3026">+90 (541) 270 3026</a>
            </h3>
          </div>
          <div className={`${styles.email} flex flex-col items-center`}>
            <h2>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
                height="3rem"
                width="3rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>{" "}
              {t("email")}
            </h2>
            <h3>
              <a href="mailto:bfbali43@gmail.com">
                {" "}
                togetherwestrong@gmail.com
              </a>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
