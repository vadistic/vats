import React from 'react'
import { Candidate } from '../../generated/queries'

export interface ICandidateProfileProps {
  candidate: Candidate
}

export const CandidateProfile: React.FC<ICandidateProfileProps> = () => {
  return <p>TODO: Candidate profile</p>
}
