import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/getInvolved.module.scss";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import gif from "../assets/loading.gif";
import thankYou from "../assets/thankyou.png";

const GetInvolved = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formPage, setFormPage] = useState(true);
  const [thanks, setThanks] = useState(false);
  const auth = localStorage.getItem("volunteer");
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setFormPage(false);
    emailjs
      .sendForm(
        "service_5w9chid",
        "template_5d4zt7l",
        form.current,
        "yOr8mSokPd85HuVmG"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setThanks(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    localStorage.setItem("volunteer", true);
  };

  useEffect(() => {
    if (auth) {
      setTimeout(() => {
        setFormPage(false);
        setThanks(true);
      }, 1000);
    }
  }, [auth]);

  return (
    <div id="involved" className={styles.involved}>
      {/* {loading ? (
        <div>
          <img src={gif} alt="" />{" "}
        </div>
      ) : (
        <h1>{t("join this great community")}</h1>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">{t("name")}</label>
          <input type="text" name="name" placeholder={t("your name")} />
          <label htmlFor="mail">{t("email")}</label>
          <input type="email" name="mail" placeholder={t("your email")} />
          <label htmlFor="phone">{t("phone")}</label>
          <input type="number" name="phone" placeholder={t("your phone")} />
          <label htmlFor="age">{t("age")}</label>
          <input type="number" name="age" placeholder={t("your age")} />
          <button type="submit">{t("get involved")}</button>
        </form>
      )} */}
      {loading && (
        <div>
          <img src={gif} alt="" />{" "}
        </div>
      )}
      {formPage && (
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">{t("name")}</label>
          <input type="text" name="name" placeholder={t("your name")} />
          <label htmlFor="mail">{t("email")}</label>
          <input type="email" name="mail" placeholder={t("your email")} />
          <label htmlFor="phone">{t("phone")}</label>
          <input type="number" name="phone" placeholder={t("your phone")} />
          <label htmlFor="age">{t("age")}</label>
          <input type="number" name="age" placeholder={t("your age")} />
          <button type="submit">{t("get involved")}</button>
        </form>
      )}
      {thanks && (
        <div className={styles.thanks}>
          <p className="text-[4rem]">{t("you have joined")}</p>
          <p className="text-[8rem]">{t("thank you")}</p>
        </div>
      )}
    </div>
  );
};

export default GetInvolved;
