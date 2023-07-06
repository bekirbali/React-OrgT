import React from "react";

import styles from "../styles/about.module.scss";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div id="about" className={styles.about}>
      <div className={styles.title}>
        <h1>{t("association")}</h1>
        <h3>{t("reintegration")}</h3>
      </div>
      <div
        className={`${styles["about-content"]} ${styles["about-content-left"]} flex items-center `}
      >
        <img src="./about/20170410_140511.jpg" alt="" className="w-1/2" />
        <p>{t("the program")}</p>
      </div>
      <div
        className={`${styles["about-content"]} ${styles["about-content-right"]} flex flex-row-reverse items-center`}
      >
        <img src="./about/truckTrailer.jpg" alt="" className="w-1/2" />
        <p>{t("the association")}</p>
      </div>
      <div
        className={`${styles["about-content"]} ${styles["about-content-left"]} flex items-center`}
      >
        <img src="./about/12.JPG" alt="" className="w-1/2" />
        <p>{t("in total")}</p>
      </div>
      <div
        className={`${styles["about-content"]} ${styles["about-content-right"]}  flex flex-row-reverse items-center`}
      >
        <img src="./about/11.JPG" alt="" className="w-1/2" />
        <p>{t("old boy")}</p>
      </div>
      <div
        className={`${styles["about-content"]} ${styles["about-content-left"]} flex items-center`}
      >
        <img src="./about/4.JPG" alt="" className="w-1/2" />
        <p>{t("old woman")}</p>
      </div>
      <div
        className={`${styles["about-content"]} ${styles["about-content-right"]} flex flex-row-reverse items-center`}
      >
        <img src="./about/DSC_0143.JPG" alt="" className="w-1/2" />
        <p>{t("one woman")}</p>
      </div>
      <div
        className={`${styles["about-content"]} ${styles["about-content-left"]} flex items-center`}
      >
        <img src="./about/house.jpg" alt="" className="w-1/2" />
        <p>{t("within this project")}</p>
      </div>
      <div
        className={`${styles["about-content"]} ${styles["about-content-right"]} flex flex-row-reverse items-center`}
      >
        <img src="./about/DSC_0817.JPG" alt="" className="w-1/2" />
        <ul>
          <p>
            <span>{t("we need")}</span>
            <li>- {t("to help")}</li>
            <li>- {t("gardening")}</li>
            <li>- {t("work")}</li>
            <li>- {t("actions")}</li>
            <li>- {t("creating")}</li>
            <li>- {t("to teach")}</li>
            <li>- {t("to take")}</li>
            <li>- {t("to create")}</li>
            <li>- {t("to teach english")}</li>
          </p>
        </ul>
      </div>
      <div
        className={`${styles["about-content"]} ${styles["about-content-left"]} flex items-center`}
      >
        <img src="./about/DSC_9181.JPG" alt="" className="w-1/2" />
        <p>{t("we also have")}</p>
      </div>
      <div
        className={`${styles["about-content"]} ${styles["about-content-right"]} flex flex-row-reverse items-center`}
      >
        <img src="./about/13.jpg" alt="" className="w-1/2" />
        <p>{t("since most of them")}</p>
      </div>
      <div
        className={`${styles["about-content"]} ${styles["about-content-left"]} flex items-center`}
      >
        <img src="./about/8.JPG" alt="" className="w-1/2" />
        <p>{t("so far we managed to reintegrate")}</p>
      </div>
      <div
        className={`${styles["about-content"]} ${styles["about-content-right"]} flex flex-row-reverse items-center`}
      >
        <img src="./about/DSC_01101.JPG" alt="" className="w-1/2" />
        <p>{t("another person we managed")}</p>
      </div>
      <div
        className={`${styles["about-content"]} ${styles["about-content-left"]} flex items-center`}
      >
        <img src="./about/15.JPG" alt="" className="w-1/2" />
        <p>{t("we succeeded for 2 families")}</p>
      </div>
    </div>
  );
};

export default About;
