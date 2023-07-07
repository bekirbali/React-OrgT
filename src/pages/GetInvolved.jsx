import React from "react";
import styles from "../styles/getInvolved.module.scss";
import { useTranslation } from "react-i18next";

const GetInvolved = () => {
  const { t } = useTranslation();
  return (
    <div id="involved" className={styles.involved}>
      <h1>{t("join this great community")}</h1>
      <form>
        <input type="text" placeholder={t("your name")} />
        <input type="email" placeholder={t("your email")} />
        <input type="number" placeholder={t("your phone")} />
        <input type="number" placeholder={t("your age")} />
        <button>{t("get involved")}</button>
      </form>
    </div>
  );
};

export default GetInvolved;
