import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import { translation } from './en'

i18next.use(initReactI18next).init({
  debug: true,

  interpolation: {
    escapeValue: false,
  },
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translation,
    },
  },
})

export { i18next }
