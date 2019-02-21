import { translation } from './translations/en'

export interface ITranslationTypingConfig {
  single: string
  plural?: string
  interval?: string
}

export type TranslationTyping<T> = { [K in keyof T]: ITranslationTypingConfig | string } &
  { [K in string]: ITranslationTypingConfig | string }

export type TranslationKeys = keyof typeof translation
