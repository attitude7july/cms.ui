import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        Title: "VFL",
        Footer: "Something here to give the footer a purpose!",
        Introduction: "OUR CERTIFICATIONS",
        Description:
          "SAS VFL is authorized to provide Continuing Professional Development training for health professionals. VFL is registered with the ANDPC under number 5249. We are also authorized to provide continuing medical training and since 2017, SAS VFL is a datadocked training organization."
      }
    },

    fr: {
      translations: {
        Title: "VFL",
        Footer: "Quelque chose ici pour donner un but au pied de page!",
        Introduction: "NOS CERTIFICATIONS",
        Description:
          "La SAS VFL est habilitée à dispenser des formations de Développement Professionnel Continu auprès des professionnels de santé. VFL est enregistrée à l'ANDPC sous le n° 5249. Nous sommes également habilités à dispenser des formations médicales continues et depuis 2017, la SAS VFL est un organisme de formation datadocké."
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
