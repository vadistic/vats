import React from 'react'
import { CandidateProfile } from '../candidate-profile'

import { StrictId as SetId } from '../../../utils'
import response from './response.json'

export const CandidateProfileBasicFixture: React.FC = () => (
  <CandidateProfile
    candidate={response.candidate as SetId<'Candidate', typeof response.candidate>}
  />
)

export default <CandidateProfileBasicFixture />
