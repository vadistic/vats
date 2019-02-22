import { Omit } from '../utils'
import { i18next, ProcessKeys } from './i18n'
import translation from './translations/en'

export interface ITranslationTypingConfig {
  single: string
  plural?: string
  interval?: string
}

export interface ITranslationTyping {
  [index: string]: ITranslationTypingConfig | string
}

export type Translation = typeof translation

export type TranslationOptions = Omit<i18next.TOptions<i18next.StringMap>, 'postProcess'> & {
  postProcess?: ProcessKeys
}

export type TranslationFunction = <
  TResult extends string | object | Array<string | object> | undefined = string,
  TKeys extends string | TemplateStringsArray = string
>(
  key: TKeys | TKeys[],
  options?: TranslationOptions | string,
) => TResult
