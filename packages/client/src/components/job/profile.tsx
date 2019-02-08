import React, { useContext } from 'react'
import { JobContext } from './context'

export const JobProfile: React.FC = () => {
  const { job } = useContext(JobContext)
  return (
    <div>
      <h2>{job.name}</h2>

      <h4>Company Description</h4>
      <p>{job.companyDescription}</p>

      <h4>Description</h4>
      <p>{job.description}</p>

      <h4>Requirements</h4>
      <p>{job.requirements}</p>
    </div>
  )
}
