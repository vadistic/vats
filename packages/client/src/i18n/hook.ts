import { useTranslation } from 'react-i18next'
import { CheckPath } from '../utils'
import { translation } from './en'
import { i18next } from './i18n'

/**
 * validate path and transform to lodash.style including 2 arg as parent(for translations)
 */
// TODO: type chackeck with keyof translation?

type Translation = typeof translation

export const useIntl = () => {
  const { i18n, t } = useTranslation()

  const intl = <K extends keyof Translation, P extends string[]>(
    opts: i18next.TOptions | undefined,
    root: K,
    ...paths: P
  ) => {
    const path = [root, ...paths].join('.')

    return t(path, opts) as CheckPath<Translation[K], P>
  }

  return { i18n, intl }
}
