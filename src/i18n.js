import i18n from "i18next"; // main library
import Backend from "i18next-http-backend"; // translation backend can load from remote server with this library
import LanguageDetector from "i18next-browser-languagedetector"; // langauge detector
import { initReactI18next } from "react-i18next"; //main react library

i18n //more like yup . use
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    detection: {
      order: ["queryString", "cookie"],
      cache: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
