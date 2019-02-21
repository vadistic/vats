import { ToRelativeOptions } from 'luxon'
import React, { useState } from 'react'
import { Box } from '../box'
import { useDateTime } from './hook'

export interface IDisplayDateTimeProps {
  relative?: boolean
  relativeOptions?: ToRelativeOptions
  isoDate: string
  formatOptions?: Intl.DateTimeFormatOptions
}

export const DisplayDateTime: React.FC<IDisplayDateTimeProps> = ({
  isoDate,
  relative,
  relativeOptions = {},
  formatOptions = {},
}) => {
  const { DateTime, relativeFormat, defaultFormat } = useDateTime(isoDate)

  const [isRelative, setRelative] = useState(relative)

  const relativeDate = DateTime.toRelative({ ...relativeFormat, ...relativeOptions }) || 'now'
  const localeDate = DateTime.toLocaleString({ ...defaultFormat, ...formatOptions })

  const date = isRelative ? relativeDate : localeDate
  const title = isRelative ? localeDate : relativeDate

  const toggleRelative = () => {
    setRelative(!isRelative)
  }

  return (
    <Box onClick={toggleRelative} css={{ cursor: 'pointer' }}>
      <span title={title}>{date}</span>
    </Box>
  )
}
