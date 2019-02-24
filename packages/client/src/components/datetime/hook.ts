import { DateTime as LuxonDateTime, Duration, Interval, Settings, ToRelativeOptions } from 'luxon'
import React from 'react'

// TODO: get locale from i18n

Settings.defaultLocale = 'en'

export const useDateTime = (fromISO?: string) => {
  const DateTime = fromISO ? LuxonDateTime.fromISO(fromISO) : LuxonDateTime.local()

  const localeFormat: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'short',
    year: DateTime.diffNow().years > 0.5 ? '2-ditit' : undefined,
  }
  const relativeFormat: ToRelativeOptions = {}

  const localeString = DateTime.toLocaleString(localeFormat)

  const relativeString = DateTime.toRelative(relativeFormat) || localeString

  return {
    DateTime,
    Interval,
    Duration,
    localeFormat,
    relativeFormat,
    relativeString,
    localeString,
  }
}
