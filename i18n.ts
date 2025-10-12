import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import eng from './components/assets/localization/en.json';
import rus from './components/assets/localization/ru.json';
import arm from './components/assets/localization/hy.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: eng,
      },  
      ru: {
        translation: rus,
      },
      hy: {
        translation: arm,
      },
    },
    fallbackLng: 'hy',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
