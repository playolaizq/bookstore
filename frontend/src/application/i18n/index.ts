import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en.json';
import translationES from './locales/es.json';

export const locale = {
  EN: 'en',
  ES: 'es',
};

export function configureI18n() {
  i18n.use(initReactI18next).init({
    resources: {
      [locale.EN]: { translation: translationEN },
      [locale.ES]: { translation: translationES },
    },
    lng: locale.EN,
    fallbackLng: locale.EN,
    interpolation: {
      escapeValue: false, // https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
}
