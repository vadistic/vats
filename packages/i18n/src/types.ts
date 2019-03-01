import { Omit } from '@vats/utils'
import { i18next, ProcessKeys } from './i18n'
import translation from './translations/en'

export interface TranslationTypingConfig {
  single: string
  plural?: string
  interval?: string
}

export interface TranslationTyping {
  [index: string]: TranslationTypingConfig | string
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
