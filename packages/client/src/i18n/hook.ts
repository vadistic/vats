import { useTranslation } from 'react-i18next'
import { CheckPath } from '../utils'
import { i18next } from './i18n'
import { translation } from './translations/en'

/**
 * validate path and transform to lodash.style including 2 arg as parent(for translations)
 */
type Translation = typeof translation

export const useIntl = () => {
  const { i18n, t } = useTranslation()

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

  return { i18n, intl }
}
