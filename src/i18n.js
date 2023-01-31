import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { TRANSLATIONS_BR } from "../src/locales/br";
import { TRANSLATIONS_EN } from "../src/locales/en";
import { TRANSLATIONS_ES } from "../src/locales/es";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      br: {
        translation: TRANSLATIONS_BR,
      },
      es: {
        translation: TRANSLATIONS_ES,
      },
    },
  })
  

i18n.changeLanguage("es");

export { i18n };
