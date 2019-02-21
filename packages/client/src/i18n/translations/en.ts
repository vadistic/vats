import { CandidateValue } from '../../components/candidate/host'
import { JobValue } from '../../components/job/host'
import { ITranslationTyping } from '../types'

const shared = {
  id: { single: 'Id', plural: 'Ids' },
  createdAt: { single: 'Add date' },
  updatedAt: { single: 'Update date' },
  comments: { single: 'Comment', plural: 'Comments' },
  replies: { single: 'Reply', plural: 'Replies' },
  applications: { single: 'Application', plural: 'Applications' },
}

const candidate = {
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

const candidateHelper = {
  resumes: {
    single: 'Resume',
    plural: 'Resumes',
  },
  info: 'Info',
  overview: 'Overview',
  reviews: {
    single: 'Review',
    plural: 'Reviews',
  },
}

const job = {
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
  noResults: 'No results found',
}

const action = {
  add: 'Add',
  added: 'Added',
  create: 'Create',
  created: 'Created',
  remove: 'Remove',
  removed: 'Removed',
  edit: 'Edit',
  edited: 'Edited',
  update: 'Update',
  updated: 'Updated',
  sort: 'Sort',
  sorted: 'Sorted',
  show: 'Show',
  showed: 'Showed',
  hide: 'Hide',
  hid: 'Were hidden',
  write: 'Write',
  wrote: 'Wrote',
  reply: 'Reply',
  replied: 'Replied',
  comment: 'Comment',
  commented: 'Commented',
}

export const translation = {
  helper,
  action,
  candidate: {
    ...candidate,
    ...candidateHelper,
  },
  job,
}

export default translation
