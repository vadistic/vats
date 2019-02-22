const shared = {
  // system
  id: { single: 'Id', plural: 'Ids' },
  createdAt: { single: 'Add date' },
  updatedAt: { single: 'Update date' },
  // comments
  comment: { single: 'Comment', plural: 'Comments' },
  reply: { single: 'Reply', plural: 'Replies' },
  // candidate <=> job
  applications: { single: 'Application', plural: 'Applications' },
}

const candidate = {
  ...shared,
  // Graphql type
  label: {
    single: 'Candidate',
    plural: 'Candidates',
  },
  firstName: 'First name',
  lastName: 'Last name',
  email: { single: 'Email', plural: 'Emails' },
  phone: { single: 'Phone number', plural: 'Phone numbers' },
  link: { single: 'Link', plural: 'Links' },
  avatar: { single: 'Avatar', plural: 'Avatars' },
  company: { single: 'Company', plural: 'companies' },
  position: { single: 'Position', plural: 'Positions' },
  headline: { single: 'Headline', plural: 'Headlines' },
  resume: {
    single: 'Resume',
    plural: 'Resumes',
  },
  coverLetter: {
    single: 'Cover letter text',
    plural: 'Text cover letters',
  },
  tag: { single: 'Tag', plural: 'Tags' },
  source: { single: 'Source', plural: 'Sources' },
  customField: { single: 'Custom field', plural: 'Custom fields' },
  task: { single: 'Task', plural: 'Tasks' },
  // views
  info: 'Info',
  overview: 'Overview',
  review: {
    single: 'Review',
    plural: 'Reviews',
  },
}

const job = {
  ...shared,
  label: {
    single: 'Job',
    plural: 'Jobs',
  },
  name: { single: 'Name', plural: 'Names' },
  workspace: { single: 'Worskpace', plural: 'Workspaces' },
  workflow: { single: 'Workflow', plural: 'Workflows' },
  location: { single: 'Location', plural: 'Locations' },
  department: { single: 'Department', plural: 'Departments' },
  type: 'Status',
  excerpt: 'Intro',
  companyDescription: 'Company description',
  description: 'Description',
  requirements: 'Requirements',
}

const common = {
  error: 'Error',
  content: 'Content',
  empty: 'Empty',
  noResult: 'No results found',
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
  common,
  action,
  candidate,
  job,
}

export default translation
