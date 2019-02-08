import { RouteComponentProps } from '@reach/router'
import React, { Suspense } from 'react'
import { JobHost } from '../components/job/host'
import { Job } from '../generated/queries'

export const JobContext: React.Context<Job> = React.createContext({} as any)

export interface IJobViewProps extends RouteComponentProps {}

export const JobView: React.FC<IJobViewProps> = path => {
  console.log(path)

  const id = ''

  return (
    <Suspense fallback={<p>Loading candidate profile</p>}>
      <JobHost initOptions={{ id }}>
        <p>Single job view</p>
      </JobHost>
    </Suspense>
  )
}
