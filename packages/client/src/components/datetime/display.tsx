import React, { useState } from 'react'
import { Box } from '../box'
import { useDayjs } from './hook'

export interface DisplayDateTimeProps {
  relative?: boolean
  isoDate: string
}

export const DisplayDateTime: React.FC<DisplayDateTimeProps> = ({ isoDate, relative }) => {
  const { dayjs, shortDateFormat } = useDayjs(isoDate)

  const [isRelative, setRelative] = useState(relative)

  const date = isRelative ? dayjs.fromNow() : dayjs.format(shortDateFormat)
  const title = isRelative ? dayjs.format(shortDateFormat) : dayjs.fromNow()

  const toggleRelative = () => {
    setRelative(!isRelative)
  }

  return (
    <Box onClick={toggleRelative} css={{ cursor: 'pointer' }}>
      <span title={title}>{date}</span>
    </Box>
  )
}
