import { changeLanguage } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";

const Test = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const currentLanguage = i18n.language;
    currentLanguage === "en"
      ? i18n.changeLanguage("tr")
      : i18n.changeLanguage("en");
  };
  return (
    <div className="h-[250px] w-1/2 bg-red-400">
      <h1>{t("welcome")}</h1>
      <h1>{t("hello")}</h1>
      <button onClick={changeLanguage}>switch</button>
    </div>
  );
};

export default Test;
