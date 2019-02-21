import React from 'react'
import { pathProxy } from '../../../utils'
import { Box } from '../../box'
import { DisplayTextField } from '../../display'
import { CandidateValue } from '../host'
import { UserAvatar } from '../widgets'

export const TopSection: React.FC = () => {
  const p = pathProxy<CandidateValue>()

  return (
    <Box direction="row">
      <Box css={{ justifyContent: 'center' }}>
        <DisplayTextField fontSize="xxLarge" name={p.firstName.PATH} />
        <DisplayTextField fontSize="xxLarge" name={p.lastName.PATH} />
        <DisplayTextField fontSize="large" name={p.comments.PATH} />
        <DisplayTextField fontSize="large" name={p.position.PATH} />
        <DisplayTextField fontSize="large" name={p.headline.PATH} />
      </Box>
      <Box>
        <UserAvatar />
      </Box>
    </Box>
  )
}
