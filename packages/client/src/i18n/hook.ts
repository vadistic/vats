import { useTranslation as useOriginalTranslation } from 'react-i18next'
import { CheckPath } from '../utils'
import { i18next } from './i18n'
import { translation } from './translations/en'
import { ITranslationTypingConfig } from './types'

type Translation = typeof translation

// TODO: Customise string map
type TOptions = i18next.TOptions<i18next.StringMap> | string

export type TranslationProxyFunction = (options?: TOptions) => string

export type TranslationProxy<S> = S extends (ITranslationTypingConfig | string)
  ? TranslationProxyFunction
  : { [K in keyof S]: TranslationProxy<S[K]> }

export const useTranslation = () => {
  const { t, i18n } = useOriginalTranslation()

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

  /**
   * @depreciated use proxy^^
   */
  const intl = <K extends keyof Translation, P extends string[]>(
    opts: i18next.TOptions | string | number | null | undefined,
    root: K,
    ...paths: P
  ) => {
    const path = [root, ...paths].join('.')

    // allow passing short random stuff for options in standard translations
    // later maybe  some presets like 'plural' and count from number?
    const normalisedOptions =
      typeof opts === 'string' || typeof opts === 'number' || opts === null ? undefined : opts

    return t(path, normalisedOptions) as CheckPath<Translation[K], P>
  }

  return { i18n, intl, t, tp: translationProxy }
}
