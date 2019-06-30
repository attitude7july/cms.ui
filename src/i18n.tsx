import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        Title: "VFL",
        Introduction: "Your organization<br/>Licensed Medical Training",
        Footer: "Something here to give the footer a purpose!"
      }
    },

    fr: {
      translations: {
        Title: "VFL",
        Introduction: "Votre Organisme de <br/>  Formation Médicale Agréé",
        Footer: "Quelque chose ici pour donner un but au pied de page!"
      }
    }
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});
export default i18n;
