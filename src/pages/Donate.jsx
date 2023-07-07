import React from "react";
import styles from "../styles/donate.module.scss";
import { useTranslation } from "react-i18next";

const Donate = () => {
  const { t } = useTranslation();
  return (
    <div id="donate" className={styles.donate}>
      <h1 className="uppercase">{t("donate")}</h1>
      <form>
        <div className={styles.card}>
          <input type="text" placeholder={t("your name")} />
          <input type="text" placeholder={t("your last name")} />
        </div>
        <div className={styles.card}>
          <input type="email" placeholder={t("your email")} />
          <input type="number" placeholder={t("your phone")} />
        </div>
        <div className={styles.amount}>
          <input type="number" placeholder={t("donation amount")} />
        </div>
        <button>{t("donate")}</button>
      </form>
    </div>
  );
};

export default Donate;
