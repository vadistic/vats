import React from 'react'
import { UserPersona } from '..'
import { StrictId } from '../../../utils'
import response from './response.json'

export const UserPersonaBasicFixture: React.FC = () => (
  <UserPersona user={response.data.user as StrictId<'User', typeof response.data.user>} />
)

export default <UserPersonaBasicFixture />
