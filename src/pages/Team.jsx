import React from "react";
import styles from "../styles/team.module.scss";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t } = useTranslation();
  return (
    <div id="team" className={styles.team}>
      <div className={`${styles.volunteers} ${styles.card}`}>
        <h2>{t("our volunteers")}</h2>
        <ul>
          <li>James</li>
          <li>Michael</li>
          <li>David</li>
          <li>Emma</li>
          <li>Olivia</li>
          <li>Sophia</li>
          <li>Daniel</li>
          <li>Isabella</li>
          <li>Daniel</li>
          <li>Harper</li>
        </ul>
      </div>
      <div className={`${styles.directors} ${styles.card}`}>
        <h2>{t("board of directors")}</h2>
        <ul>
          <li>Christopher</li>
          <li>Andrew</li>
          <li>Charlotte</li>
        </ul>
      </div>
      <div className={`${styles.benefactors} ${styles.card}`}>
        <h2>{t("our benefactors")}</h2>
        <ul>
          <li>James</li>
          <li>Michael</li>
          <li>David</li>
          <li>Emma</li>
          <li>Olivia</li>
          <li>Sophia</li>
        </ul>
      </div>
    </div>
  );
};

export default Team;
