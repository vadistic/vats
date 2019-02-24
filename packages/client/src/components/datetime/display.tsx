import { ToRelativeOptions } from 'luxon'
import React, { useState } from 'react'
import { Box } from '../box'
import { useDateTime } from './hook'

export interface IDisplayDateTimeProps {
  relative?: boolean
  relativeOptions?: ToRelativeOptions
  localeOptions?: Intl.DateTimeFormatOptions
  isoDate: string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
}

export const DisplayDateTime: React.FC<IDisplayDateTimeProps> = ({
  isoDate,
  relative,
  relativeOptions = {},
  localeOptions = {},
  prefix,
  suffix,
}) => {
  const { DateTime, relativeFormat, localeFormat } = useDateTime(isoDate)

  const [isRelative, setRelative] = useState(relative)

  const relativeDate = DateTime.toRelative({ ...relativeFormat, ...relativeOptions }) || 'now'
  const localeDate = DateTime.toLocaleString({ ...localeFormat, ...localeOptions })

  const date = isRelative ? relativeDate : localeDate
  const title = isRelative ? localeDate : relativeDate

  const toggleRelative = () => {
    setRelative(!isRelative)
  }

  return (
    <Box onClick={toggleRelative} css={{ cursor: 'pointer' }}>
      {prefix}
      {prefix && ' '}
      <span title={title}>{date}</span>
      {suffix && ' '}
      {suffix}
    </Box>
  )
}
