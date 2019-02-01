import React from 'react'
import { CandidateProfile } from '../candidate-profile'

import { anyTypename } from '../../../utils'
import { CandidateContext } from '../../../views'
import response from './response.json'

export const CandidateProfileBasicFixture: React.FC = () => (
  <CandidateContext.Provider value={anyTypename(response.data.candidate) as any}>
    <CandidateProfile />
  </CandidateContext.Provider>
)

export default <CandidateProfileBasicFixture />
