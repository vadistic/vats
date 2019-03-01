import dayjs from 'dayjs'
// tslint:disable-next-line: no-submodule-imports
import advancedFormat from 'dayjs/plugin/advancedFormat'
// tslint:disable-next-line: no-submodule-imports
import relativeTime from 'dayjs/plugin/relativeTime'

export const useDayjs = (fromISO?: string) => {
  // TODO: get locale from i18n
  const defaultLocale = 'en'

  const longDateFormat = `MMMM Do, YY`
  const shortDateFormat = `D/MM/YY`

  const timeFormat = `h:mm:ss A`

  dayjs.locale(defaultLocale)
  dayjs.extend(relativeTime)
  dayjs.extend(advancedFormat)

  return {
    dayjs: dayjs(fromISO),
    longDateFormat,
    shortDateFormat,
    timeFormat,
  }
}
