import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Trans, useTranslation } from "react-i18next";

function App() {
  //so either with key or the useTranslation hook to choose the langauge
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="App">
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("de")}>DE</button>
      <hr />
      <Trans i18nKey="description.part1"></Trans>
      <div>{t("description.part2")}</div>
    </div>
  );
}

export default App;
