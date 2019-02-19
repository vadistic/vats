import { CandidateValue } from '../../components/candidate/host'
import { JobValue } from '../../components/job/host'
import { TranslationTyping } from '../types'

const shared = {
  id: { single: 'Id', plural: 'Ids' },
  createdAt: { single: 'Add date' },
  updatedAt: { single: 'Update date' },
  comments: { single: 'Comment', plural: 'Comments' },
  applications: { single: 'Application', plural: 'Applications' },
}

const candidate: TranslationTyping<CandidateValue> = {
  ...shared,
  __typename: 'Candidate',
  firstName: 'First name',
  lastName: 'Last name',
  emails: { single: 'Email', plural: 'Emails' },
  phones: { single: 'Phone number', plural: 'Phone numbers' },
  links: { single: 'Link', plural: 'Links' },
  avatar: 'Avatar',
  company: 'Company',
  position: 'Position',
  headline: 'Headline',
  resumesString: { single: 'Resume text', plural: 'Text resumes' },
  resumesFile: { single: 'Resume file', plural: 'File resumes' },
  coverLettersString: { single: 'Cover letter text', plural: 'Text cover letters' },
  coverLettersFile: { single: 'Cover letter file', plural: 'File cover letters' },
  tags: { single: 'Tag', plural: 'Tags' },
  sources: { single: 'Source', plural: 'Sources' },
  fields: { single: 'Custom field', plural: 'Custom fields' },
  tasks: { single: 'Task', plural: 'Tasks' },
}

const job: TranslationTyping<JobValue> = {
  ...shared,
  __typename: 'Job',
  workspace: 'Worskpace',
  workflow: 'Workflows',
  locations: 'Location',
  type: 'Status',
  name: { single: 'Name', plural: 'Names' },
  department: { single: 'Department', plural: 'Departments' },
  excerpt: 'Intro',
  companyDescription: 'Company description',
  description: 'Description',
  requirements: 'Requirements',
}

const helper = {
  error: 'Error',
  content: 'Content',
  empty: 'Empty',
  add: 'Add',
  create: 'Create',
  remove: 'Remove',
  noResults: 'No results found',
}

export const translation = {
  helper,
  candidate,
  job,
  shared,
}

export default translation
