import React from 'react'
import { CandidateProfile } from '../candidate-profile'

import { StrictId as SetID } from '../../../utils'
import response from './response.json'

export const CandidateProfileBasicFixture: React.FC = () => (
  <CandidateProfile
    candidate={response.data.candidate as SetID<'Candidate', typeof response.data.candidate>}
  />
)

export default <CandidateProfileBasicFixture />
