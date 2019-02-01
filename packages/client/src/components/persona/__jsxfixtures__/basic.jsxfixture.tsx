import React from 'react'
import { UserPersona } from '..'
import { anyTypename } from '../../../utils'
import response from './response.json'

export const UserPersonaBasicFixture: React.FC = () => (
  <UserPersona user={anyTypename(response.data.user) as any} />
)

export default <UserPersonaBasicFixture />
