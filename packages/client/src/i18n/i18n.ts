import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import enJson from '../generated/translations/i18n-en.json'

i18next.use(initReactI18next).init({
  debug: process.env.NODE_ENV === 'development',
  interpolation: {
    escapeValue: false,
  },
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translation: enJson,
    },
  },
})

export { i18next }
