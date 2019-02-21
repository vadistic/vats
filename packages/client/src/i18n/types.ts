import { translation } from './translations/en'

export interface ITranslationTypingConfig {
  single: string
  plural?: string
  interval?: string
}

export interface ITranslationTyping {
  [index: string]: ITranslationTypingConfig | string
}

export type TranslationKeys = keyof typeof translation
