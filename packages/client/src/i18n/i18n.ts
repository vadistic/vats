import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
// import { interpolation } from './interpolation'

import enTranslationJson from '../generated/translations/i18n-en.json'

// TODO: set global defaultVariables for interpolations using user data

export type ProcessKeys = 'uppercase' | 'lowercase' | 'sentencecase'

const formatUppercaseProcessor = {
  type: 'postProcessor',
  name: 'uppercase',
  process: (value: string, key: string, options: any, translator: any) => {
    return value.toLocaleUpperCase()
  },
}

const formatLowercaseProcessor = {
  type: 'postProcessor',
  name: 'lowercase',
  process: (value: string, key: string, options: any, translator: any) => {
    return value.toLocaleLowerCase()
  },
}

const formatSentencecaseProcessor = {
  type: 'postProcessor',
  name: 'sentencecase',
  process: (value: string, key: string, options: any, translator: any) => {
    return value
      .toLowerCase()
      .replace(/(^|\. *)([a-z])/g, (match, separator, char) => separator + char.toUpperCase())
  },
}

i18next
  .use(initReactI18next)
  .use(formatLowercaseProcessor)
  .use(formatUppercaseProcessor)
  .use(formatSentencecaseProcessor)
  .init({
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      // react escapes interpolations - false here to prevent double escaping
      escapeValue: false,
    },
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en: {
        translation: enTranslationJson,
      },
    },
  })

export { i18next }
