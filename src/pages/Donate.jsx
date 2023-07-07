import React from "react";
import styles from "../styles/donate.module.scss";
import { useTranslation } from "react-i18next";

const Donate = () => {
  const { t } = useTranslation();
  return (
    <div id="donate" className={styles.donate}>
      <h1 className="uppercase font-bold text-3xl mb-2">{t("donate")}</h1>
      <form>
        <div className={styles.card}>
          <div className="flex flex-col">
            <label htmlFor="name">{t("name")}</label>
            <input type="text" name="name" placeholder={t("your name")} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="last-name">{t("last name")}</label>
            <input
              type="text"
              name="last-name"
              placeholder={t("your last name")}
            />
          </div>
        </div>
        <div className={styles.card}>
          <div className="flex flex-col">
            <label htmlFor="mail">{t("email")}</label>
            <input type="email" name="mail" placeholder={t("your email")} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone">{t("phone")}</label>
            <input type="number" name="phone" placeholder={t("your phone")} />
          </div>
        </div>
        <div className={styles.amount}>
          <label htmlFor="donate">{t("donation")}</label>
          <input
            type="number"
            name="donate"
            placeholder={t("donation amount")}
          />
        </div>
        <button>{t("donate")}</button>
      </form>
    </div>
  );
};

export default Donate;
