import { useMemo } from 'react'
import { useTranslation as useOriginalTranslation } from 'react-i18next'
import { i18next } from './i18n'
import { Translation, TranslationOptions, TranslationTypingConfig } from './types'

export type TranslationProxyFunction = (options?: TranslationOptions) => string

export type TranslationProxy<S> = S extends (TranslationTypingConfig | string)
  ? TranslationProxyFunction
  : { [K in keyof S]: TranslationProxy<S[K]> }

const getTranslationProxy = (t: i18next.TFunction) => {
  const translationProxy = (new Proxy(t, {
    get(target: i18next.TFunction, key: any) {
      return _translationProxy(key)
    },
    apply(target: i18next.TFunction, thisArg, args) {
      return t(args[0], args[1])
    },
  }) as unknown) as TranslationProxy<Translation>

  const _translationProxy = (path: string): any =>
    new Proxy(t, {
      get(target: i18next.TFunction, key: any) {
        return _translationProxy(path + '.' + key)
      },
      apply(target: i18next.TFunction, thisArg, args) {
        return t(path, args[0])
      },
    })

  return translationProxy
}

export const useTranslation = () => {
  const { t, i18n } = useOriginalTranslation()

  // ! put i18n.language to deps if memo freeze t function on language change
  const tp = useMemo(() => getTranslationProxy(t), [])

  return { i18n, t, tp }
}
