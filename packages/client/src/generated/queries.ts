/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ToastsQuery
// ====================================================

export interface ToastsQuery_toasts {
  __typename: 'Toast'
  id: string
  createdAt: any
  message: string
  type: ToastType
}

export interface ToastsQuery {
  toasts: ToastsQuery_toasts[]
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CandidateQuery
// ====================================================

export interface CandidateQuery_candidate_avatar {
  __typename: 'File'
  id: string
  createdAt: any
  updatedAt: any
  size: number
  type: string
  name: string
  url: string
}

export interface CandidateQuery_candidate_resumesFile {
  __typename: 'File'
  id: string
  createdAt: any
  updatedAt: any
  size: number
  type: string
  name: string
  url: string
}

export interface CandidateQuery_candidate_coverLettersFile {
  __typename: 'File'
  id: string
  createdAt: any
  updatedAt: any
  size: number
  type: string
  name: string
  url: string
}

export interface CandidateQuery_candidate_tags {
  __typename: 'Tag'
  id: string
  createdAt: any
  updatedAt: any
  label: string
  description: string | null
}

export interface CandidateQuery_candidate_sources {
  __typename: 'Source'
  id: string
  createdAt: any
  updatedAt: any
  label: string
  description: string | null
}

export interface CandidateQuery_candidate_fields {
  __typename: 'FieldInstance'
  id: string
  createdAt: any
  updatedAt: any
  value: string | null
}

export interface CandidateQuery_candidate_tasks {
  __typename: 'Task'
  id: string
  createdAt: any
  updatedAt: any
  title: string | null
  description: string | null
  dueAt: any | null
}

export interface CandidateQuery_candidate_applications {
  __typename: 'Application'
  createdAt: any
  id: string
  updatedAt: any
  type: ApplicationType
}

export interface CandidateQuery_candidate_comments {
  __typename: 'Comment'
  id: string
  createdAt: any
  updatedAt: any
  content: string
}

export interface CandidateQuery_candidate {
  __typename: 'Candidate'
  id: string
  createdAt: any
  updatedAt: any
  firstName: string
  lastName: string
  avatar: CandidateQuery_candidate_avatar | null
  company: string | null
  headline: string | null
  position: string | null
  resumesFile: CandidateQuery_candidate_resumesFile[] | null
  coverLettersFile: CandidateQuery_candidate_coverLettersFile[] | null
  tags: CandidateQuery_candidate_tags[] | null
  sources: CandidateQuery_candidate_sources[] | null
  fields: CandidateQuery_candidate_fields[] | null
  tasks: CandidateQuery_candidate_tasks[] | null
  applications: CandidateQuery_candidate_applications[] | null
  comments: CandidateQuery_candidate_comments[] | null
  phones: string[]
  emails: string[]
  links: string[]
}

export interface CandidateQuery {
  candidate: CandidateQuery_candidate | null
}

export interface CandidateQueryVariables {
  where: CandidateWhereUniqueInput
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CandidateUpdateMutation
// ====================================================

export interface CandidateUpdateMutation_updateCandidate_avatar {
  __typename: 'File'
  id: string
  createdAt: any
  updatedAt: any
  size: number
  type: string
  name: string
  url: string
}

export interface CandidateUpdateMutation_updateCandidate_resumesFile {
  __typename: 'File'
  id: string
  createdAt: any
  updatedAt: any
  size: number
  type: string
  name: string
  url: string
}

export interface CandidateUpdateMutation_updateCandidate_coverLettersFile {
  __typename: 'File'
  id: string
  createdAt: any
  updatedAt: any
  size: number
  type: string
  name: string
  url: string
}

export interface CandidateUpdateMutation_updateCandidate_tags {
  __typename: 'Tag'
  id: string
  createdAt: any
  updatedAt: any
  label: string
  description: string | null
}

export interface CandidateUpdateMutation_updateCandidate_sources {
  __typename: 'Source'
  id: string
  createdAt: any
  updatedAt: any
  label: string
  description: string | null
}

export interface CandidateUpdateMutation_updateCandidate_fields {
  __typename: 'FieldInstance'
  id: string
  createdAt: any
  updatedAt: any
  value: string | null
}

export interface CandidateUpdateMutation_updateCandidate_tasks {
  __typename: 'Task'
  id: string
  createdAt: any
  updatedAt: any
  title: string | null
  description: string | null
  dueAt: any | null
}

export interface CandidateUpdateMutation_updateCandidate_applications {
  __typename: 'Application'
  createdAt: any
  id: string
  updatedAt: any
  type: ApplicationType
}

export interface CandidateUpdateMutation_updateCandidate_comments {
  __typename: 'Comment'
  id: string
  createdAt: any
  updatedAt: any
  content: string
}

export interface CandidateUpdateMutation_updateCandidate {
  __typename: 'Candidate'
  id: string
  createdAt: any
  updatedAt: any
  firstName: string
  lastName: string
  avatar: CandidateUpdateMutation_updateCandidate_avatar | null
  company: string | null
  headline: string | null
  position: string | null
  resumesFile: CandidateUpdateMutation_updateCandidate_resumesFile[] | null
  coverLettersFile: CandidateUpdateMutation_updateCandidate_coverLettersFile[] | null
  tags: CandidateUpdateMutation_updateCandidate_tags[] | null
  sources: CandidateUpdateMutation_updateCandidate_sources[] | null
  fields: CandidateUpdateMutation_updateCandidate_fields[] | null
  tasks: CandidateUpdateMutation_updateCandidate_tasks[] | null
  applications: CandidateUpdateMutation_updateCandidate_applications[] | null
  comments: CandidateUpdateMutation_updateCandidate_comments[] | null
}

export interface CandidateUpdateMutation {
  updateCandidate: CandidateUpdateMutation_updateCandidate | null
}

export interface CandidateUpdateMutationVariables {
  data: CandidateUpdateInput
  where: CandidateWhereUniqueInput
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CandidatesQuery
// ====================================================

export interface CandidatesQuery_candidates_avatar {
  __typename: 'File'
  id: string
  createdAt: any
  updatedAt: any
  size: number
  type: string
  name: string
  url: string
}

export interface CandidatesQuery_candidates_resumesFile {
  __typename: 'File'
  id: string
  createdAt: any
  updatedAt: any
  size: number
  type: string
  name: string
  url: string
}

export interface CandidatesQuery_candidates_coverLettersFile {
  __typename: 'File'
  id: string
  createdAt: any
  updatedAt: any
  size: number
  type: string
  name: string
  url: string
}

export interface CandidatesQuery_candidates_tags {
  __typename: 'Tag'
  id: string
  createdAt: any
  updatedAt: any
  label: string
  description: string | null
}

export interface CandidatesQuery_candidates_sources {
  __typename: 'Source'
  id: string
  createdAt: any
  updatedAt: any
  label: string
  description: string | null
}

export interface CandidatesQuery_candidates_fields {
  __typename: 'FieldInstance'
  id: string
  createdAt: any
  updatedAt: any
  value: string | null
}

export interface CandidatesQuery_candidates_tasks {
  __typename: 'Task'
  id: string
  createdAt: any
  updatedAt: any
  title: string | null
  description: string | null
  dueAt: any | null
}

export interface CandidatesQuery_candidates_applications {
  __typename: 'Application'
  createdAt: any
  id: string
  updatedAt: any
  type: ApplicationType
}

export interface CandidatesQuery_candidates_comments {
  __typename: 'Comment'
  id: string
  createdAt: any
  updatedAt: any
  content: string
}

export interface CandidatesQuery_candidates {
  __typename: 'Candidate'
  id: string
  createdAt: any
  updatedAt: any
  firstName: string
  lastName: string
  avatar: CandidatesQuery_candidates_avatar | null
  company: string | null
  headline: string | null
  position: string | null
  resumesFile: CandidatesQuery_candidates_resumesFile[] | null
  coverLettersFile: CandidatesQuery_candidates_coverLettersFile[] | null
  tags: CandidatesQuery_candidates_tags[] | null
  sources: CandidatesQuery_candidates_sources[] | null
  fields: CandidatesQuery_candidates_fields[] | null
  tasks: CandidatesQuery_candidates_tasks[] | null
  applications: CandidatesQuery_candidates_applications[] | null
  comments: CandidatesQuery_candidates_comments[] | null
}

export interface CandidatesQuery {
  candidates: (CandidatesQuery_candidates | null)[]
}

export interface CandidatesQueryVariables {
  where?: CandidateWhereInput | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: JobQuery
// ====================================================

export interface JobQuery_job_workspace {
  __typename: 'Workspace'
  id: string
  createdAt: any
  updatedAt: any
  settings: any | null
  name: string
}

export interface JobQuery_job_applications {
  __typename: 'Application'
  createdAt: any
  id: string
  updatedAt: any
  type: ApplicationType
}

export interface JobQuery_job_workflow {
  __typename: 'Workflow'
  id: string
  createdAt: any
  updatedAt: any
  name: string
  description: string | null
}

export interface JobQuery_job_comments {
  __typename: 'Comment'
  id: string
  createdAt: any
  updatedAt: any
  content: string
}

export interface JobQuery_job_locations {
  __typename: 'Location'
  id: string
  createdAt: any
  updatedAt: any
  country: string
  region: string | null
  city: string
  zip: string | null
}

export interface JobQuery_job {
  __typename: 'Job'
  id: string
  createdAt: any
  updatedAt: any
  workspace: JobQuery_job_workspace
  applications: JobQuery_job_applications[] | null
  workflow: JobQuery_job_workflow
  comments: JobQuery_job_comments[] | null
  type: JobType
  department: string | null
  locations: JobQuery_job_locations[] | null
  name: string
  excerpt: string | null
  companyDescription: string | null
  description: string | null
  requirements: string | null
}

export interface JobQuery {
  job: JobQuery_job | null
}

export interface JobQueryVariables {
  where: JobWhereUniqueInput
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: JobsQuery
// ====================================================

export interface JobsQuery_jobs_workspace {
  __typename: 'Workspace'
  id: string
  createdAt: any
  updatedAt: any
  settings: any | null
  name: string
}

export interface JobsQuery_jobs_applications {
  __typename: 'Application'
  createdAt: any
  id: string
  updatedAt: any
  type: ApplicationType
}

export interface JobsQuery_jobs_workflow {
  __typename: 'Workflow'
  id: string
  createdAt: any
  updatedAt: any
  name: string
  description: string | null
}

export interface JobsQuery_jobs_comments {
  __typename: 'Comment'
  id: string
  createdAt: any
  updatedAt: any
  content: string
}

export interface JobsQuery_jobs_locations {
  __typename: 'Location'
  id: string
  createdAt: any
  updatedAt: any
  country: string
  region: string | null
  city: string
  zip: string | null
}

export interface JobsQuery_jobs {
  __typename: 'Job'
  id: string
  createdAt: any
  updatedAt: any
  workspace: JobsQuery_jobs_workspace
  applications: JobsQuery_jobs_applications[] | null
  workflow: JobsQuery_jobs_workflow
  comments: JobsQuery_jobs_comments[] | null
  type: JobType
  department: string | null
  locations: JobsQuery_jobs_locations[] | null
  name: string
  excerpt: string | null
  companyDescription: string | null
  description: string | null
  requirements: string | null
}

export interface JobsQuery {
  jobs: (JobsQuery_jobs | null)[]
}

export interface JobsQueryVariables {
  where?: JobWhereInput | null
  orderBy?: JobOrderByInput | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserPersonaFixtureIndexQuery
// ====================================================

export interface UserPersonaFixtureIndexQuery_users_tasks {
  __typename: 'Task'
  id: string
  createdAt: any
  updatedAt: any
  title: string | null
  description: string | null
  dueAt: any | null
}

export interface UserPersonaFixtureIndexQuery_users_avatar {
  __typename: 'File'
  id: string
  createdAt: any
  updatedAt: any
  size: number
  type: string
  name: string
  url: string
}

export interface UserPersonaFixtureIndexQuery_users {
  __typename: 'User'
  id: string
  createdAt: any
  updatedAt: any
  settings: any | null
  tasks: UserPersonaFixtureIndexQuery_users_tasks[] | null
  firstName: string
  lastName: string
  email: string
  username: string
  lastLogin: any | null
  deletedAt: any | null
  position: string | null
  avatar: UserPersonaFixtureIndexQuery_users_avatar | null
}

export interface UserPersonaFixtureIndexQuery {
  users: (UserPersonaFixtureIndexQuery_users | null)[]
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserPersonaFixtureQuery
// ====================================================

export interface UserPersonaFixtureQuery_user_tasks {
  __typename: 'Task'
  id: string
  createdAt: any
  updatedAt: any
  title: string | null
  description: string | null
  dueAt: any | null
}

export interface UserPersonaFixtureQuery_user_avatar {
  __typename: 'File'
  id: string
  createdAt: any
  updatedAt: any
  size: number
  type: string
  name: string
  url: string
}

export interface UserPersonaFixtureQuery_user {
  __typename: 'User'
  id: string
  createdAt: any
  updatedAt: any
  settings: any | null
  tasks: UserPersonaFixtureQuery_user_tasks[] | null
  firstName: string
  lastName: string
  email: string
  username: string
  lastLogin: any | null
  deletedAt: any | null
  position: string | null
  avatar: UserPersonaFixtureQuery_user_avatar | null
}

export interface UserPersonaFixtureQuery {
  user: UserPersonaFixtureQuery_user | null
}

export interface UserPersonaFixtureQueryVariables {
  where: UserWhereUniqueInput
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ToastHostFixtureMutation
// ====================================================

export interface ToastHostFixtureMutation_createToast {
  __typename: 'Toast'
  id: string
  createdAt: any
  message: string
  type: ToastType
}

export interface ToastHostFixtureMutation {
  createToast: ToastHostFixtureMutation_createToast
}

export interface ToastHostFixtureMutationVariables {
  data: ToastInput
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ToastHostQuery
// ====================================================

export interface ToastHostQuery_toasts {
  __typename: 'Toast'
  id: string
  createdAt: any
  message: string
  type: ToastType
}

export interface ToastHostQuery {
  toasts: ToastHostQuery_toasts[]
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ApplicationNoNesting
// ====================================================

export interface ApplicationNoNesting {
  __typename: 'Application'
  createdAt: any
  id: string
  updatedAt: any
  type: ApplicationType
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: DisqualificationInstanceNoNesting
// ====================================================

export interface DisqualificationInstanceNoNesting {
  __typename: 'DisqualificationInstance'
  id: string
  createdAt: any
  updatedAt: any
  content: string | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: DisqualificationNoNesting
// ====================================================

export interface DisqualificationNoNesting {
  __typename: 'Disqualification'
  id: string
  createdAt: any
  updatedAt: any
  name: string
  description: string | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserNoNesting
// ====================================================

export interface UserNoNesting {
  __typename: 'User'
  id: string
  createdAt: any
  updatedAt: any
  settings: any | null
  firstName: string
  lastName: string
  email: string
  username: string
  lastLogin: any | null
  deletedAt: any | null
  position: string | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TaskNoNesting
// ====================================================

export interface TaskNoNesting {
  __typename: 'Task'
  id: string
  createdAt: any
  updatedAt: any
  title: string | null
  description: string | null
  dueAt: any | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CandidateNoNesting
// ====================================================

export interface CandidateNoNesting {
  __typename: 'Candidate'
  id: string
  createdAt: any
  updatedAt: any
  firstName: string
  lastName: string
  company: string | null
  headline: string | null
  position: string | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FileNoNesting
// ====================================================

export interface FileNoNesting {
  __typename: 'File'
  id: string
  createdAt: any
  updatedAt: any
  size: number
  type: string
  name: string
  url: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TagNoNesting
// ====================================================

export interface TagNoNesting {
  __typename: 'Tag'
  id: string
  createdAt: any
  updatedAt: any
  label: string
  description: string | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SourceNoNesting
// ====================================================

export interface SourceNoNesting {
  __typename: 'Source'
  id: string
  createdAt: any
  updatedAt: any
  label: string
  description: string | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FieldInstanceNoNesting
// ====================================================

export interface FieldInstanceNoNesting {
  __typename: 'FieldInstance'
  id: string
  createdAt: any
  updatedAt: any
  value: string | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FieldNoNesting
// ====================================================

export interface FieldNoNesting {
  __typename: 'Field'
  id: string
  createdAt: any
  updatedAt: any
  type: FieldType
  label: string
  description: string | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CommentNoNesting
// ====================================================

export interface CommentNoNesting {
  __typename: 'Comment'
  id: string
  createdAt: any
  updatedAt: any
  content: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: StageNoNesting
// ====================================================

export interface StageNoNesting {
  __typename: 'Stage'
  id: string
  createdAt: any
  updatedAt: any
  name: string
  description: string | null
  type: StageType
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: JobNoNesting
// ====================================================

export interface JobNoNesting {
  __typename: 'Job'
  id: string
  createdAt: any
  updatedAt: any
  type: JobType
  department: string | null
  name: string
  excerpt: string | null
  companyDescription: string | null
  description: string | null
  requirements: string | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: WorkspaceNoNesting
// ====================================================

export interface WorkspaceNoNesting {
  __typename: 'Workspace'
  id: string
  createdAt: any
  updatedAt: any
  settings: any | null
  name: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: WorkflowNoNesting
// ====================================================

export interface WorkflowNoNesting {
  __typename: 'Workflow'
  id: string
  createdAt: any
  updatedAt: any
  name: string
  description: string | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: InviteNoNesting
// ====================================================

export interface InviteNoNesting {
  __typename: 'Invite'
  id: string
  createdAt: any
  updatedAt: any
  email: string
  expireAt: any
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: LocationNoNesting
// ====================================================

export interface LocationNoNesting {
  __typename: 'Location'
  id: string
  createdAt: any
  updatedAt: any
  country: string
  region: string | null
  city: string
  zip: string | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PageInfoNoNesting
// ====================================================

export interface PageInfoNoNesting {
  __typename: 'PageInfo'
  hasNextPage: boolean
  hasPreviousPage: boolean
  startCursor: string | null
  endCursor: string | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ApplicationEdgeNoNesting
// ====================================================

export interface ApplicationEdgeNoNesting {
  __typename: 'ApplicationEdge'
  cursor: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AggregateApplicationNoNesting
// ====================================================

export interface AggregateApplicationNoNesting {
  __typename: 'AggregateApplication'
  count: number
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CandidateEdgeNoNesting
// ====================================================

export interface CandidateEdgeNoNesting {
  __typename: 'CandidateEdge'
  cursor: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AggregateCandidateNoNesting
// ====================================================

export interface AggregateCandidateNoNesting {
  __typename: 'AggregateCandidate'
  count: number
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: JobEdgeNoNesting
// ====================================================

export interface JobEdgeNoNesting {
  __typename: 'JobEdge'
  cursor: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AggregateJobNoNesting
// ====================================================

export interface AggregateJobNoNesting {
  __typename: 'AggregateJob'
  count: number
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TagEdgeNoNesting
// ====================================================

export interface TagEdgeNoNesting {
  __typename: 'TagEdge'
  cursor: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AggregateTagNoNesting
// ====================================================

export interface AggregateTagNoNesting {
  __typename: 'AggregateTag'
  count: number
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TaskEdgeNoNesting
// ====================================================

export interface TaskEdgeNoNesting {
  __typename: 'TaskEdge'
  cursor: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AggregateTaskNoNesting
// ====================================================

export interface AggregateTaskNoNesting {
  __typename: 'AggregateTask'
  count: number
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserEdgeNoNesting
// ====================================================

export interface UserEdgeNoNesting {
  __typename: 'UserEdge'
  cursor: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AggregateUserNoNesting
// ====================================================

export interface AggregateUserNoNesting {
  __typename: 'AggregateUser'
  count: number
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AccessPayloadNoNesting
// ====================================================

export interface AccessPayloadNoNesting {
  __typename: 'AccessPayload'
  token: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AuthPayloadNoNesting
// ====================================================

export interface AuthPayloadNoNesting {
  __typename: 'AuthPayload'
  token: string
  refresh: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: LocalTypeNoNesting
// ====================================================

export interface LocalTypeNoNesting {
  __typename: 'LocalType'
  id: string
  name: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ToastNoNesting
// ====================================================

export interface ToastNoNesting {
  __typename: 'Toast'
  id: string
  createdAt: any
  message: string
  type: ToastType
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Application
// ====================================================

export interface Application_disqualification {
  __typename: 'DisqualificationInstance'
  id: string
  createdAt: any
  updatedAt: any
  content: string | null
}

export interface Application_stage {
  __typename: 'Stage'
  id: string
  createdAt: any
  updatedAt: any
  name: string
  description: string | null
  type: StageType
}

export interface Application_job {
  __typename: 'Job'
  id: string
  createdAt: any
  updatedAt: any
  type: JobType
  department: string | null
  name: string
  excerpt: string | null
  companyDescription: string | null
  description: string | null
  requirements: string | null
}

export interface Application_candidate {
  __typename: 'Candidate'
  id: string
  createdAt: any
  updatedAt: any
  firstName: string
  lastName: string
  company: string | null
  headline: string | null
  position: string | null
}

export interface Application {
  __typename: 'Application'
  createdAt: any
  id: string
  updatedAt: any
  type: ApplicationType
  disqualification: Application_disqualification | null
  stage: Application_stage
  job: Application_job
  candidate: Application_candidate
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: DisqualificationInstance
// ====================================================

export interface DisqualificationInstance_disqualification {
  __typename: 'Disqualification'
  id: string
  createdAt: any
  updatedAt: any
  name: string
  description: string | null
}

export interface DisqualificationInstance_createdBy {
  __typename: 'User'
  id: string
  createdAt: any
  updatedAt: any
  settings: any | null
  firstName: string
  lastName: string
  email: string
  username: string
  lastLogin: any | null
  deletedAt: any | null
  position: string | null
}

export interface DisqualificationInstance {
  __typename: 'DisqualificationInstance'
  id: string
  createdAt: any
  updatedAt: any
  disqualification: DisqualificationInstance_disqualification
  createdBy: DisqualificationInstance_createdBy
  content: string | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Disqualification
// ====================================================

export interface Disqualification {
  __typename: 'Disqualification'
  id: string
  createdAt: any
  updatedAt: any
  name: string
  description: string | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: User
// ====================================================

export interface User_tasks {
  __typename: 'Task'
  id: string
  createdAt: any
  updatedAt: any
  title: string | null
  description: string | null
  dueAt: any | null
}

export interface User_avatar {
  __typename: 'File'
  id: string
  createdAt: any
  updatedAt: any
  size: number
  type: string
  name: string
  url: string
}

export interface User {
  __typename: 'User'
  id: string
  createdAt: any
  updatedAt: any
  settings: any | null
  tasks: User_tasks[] | null
  firstName: string
  lastName: string
  email: string
  username: string
  lastLogin: any | null
  deletedAt: any | null
  position: string | null
  avatar: User_avatar | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Task
// ====================================================

export interface Task_owners {
  __typename: 'User'
  id: string
  createdAt: any
  updatedAt: any
  settings: any | null
  firstName: string
  lastName: string
  email: string
  username: string
  lastLogin: any | null
  deletedAt: any | null
  position: string | null
}

export interface Task_candidate {
  __typename: 'Candidate'
  id: string
  createdAt: any
  updatedAt: any
  firstName: string
  lastName: string
  company: string | null
  headline: string | null
  position: string | null
}

export interface Task {
  __typename: 'Task'
  id: string
  createdAt: any
  updatedAt: any
  owners: Task_owners[] | null
  candidate: Task_candidate | null
  title: string | null
  description: string | null
  dueAt: any | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Candidate
// ====================================================

export interface Candidate_avatar {
  __typename: 'File'
  id: string
  createdAt: any
  updatedAt: any
  size: number
  type: string
  name: string
  url: string
}

export interface Candidate_resumesFile {
  __typename: 'File'
  id: string
  createdAt: any
  updatedAt: any
  size: number
  type: string
  name: string
  url: string
}

export interface Candidate_coverLettersFile {
  __typename: 'File'
  id: string
  createdAt: any
  updatedAt: any
  size: number
  type: string
  name: string
  url: string
}

export interface Candidate_tags {
  __typename: 'Tag'
  id: string
  createdAt: any
  updatedAt: any
  label: string
  description: string | null
}

export interface Candidate_sources {
  __typename: 'Source'
  id: string
  createdAt: any
  updatedAt: any
  label: string
  description: string | null
}

export interface Candidate_fields {
  __typename: 'FieldInstance'
  id: string
  createdAt: any
  updatedAt: any
  value: string | null
}

export interface Candidate_tasks {
  __typename: 'Task'
  id: string
  createdAt: any
  updatedAt: any
  title: string | null
  description: string | null
  dueAt: any | null
}

export interface Candidate_applications {
  __typename: 'Application'
  createdAt: any
  id: string
  updatedAt: any
  type: ApplicationType
}

export interface Candidate_comments {
  __typename: 'Comment'
  id: string
  createdAt: any
  updatedAt: any
  content: string
}

export interface Candidate {
  __typename: 'Candidate'
  id: string
  createdAt: any
  updatedAt: any
  firstName: string
  lastName: string
  avatar: Candidate_avatar | null
  company: string | null
  headline: string | null
  position: string | null
  resumesFile: Candidate_resumesFile[] | null
  coverLettersFile: Candidate_coverLettersFile[] | null
  tags: Candidate_tags[] | null
  sources: Candidate_sources[] | null
  fields: Candidate_fields[] | null
  tasks: Candidate_tasks[] | null
  applications: Candidate_applications[] | null
  comments: Candidate_comments[] | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: File
// ====================================================

export interface File {
  __typename: 'File'
  id: string
  createdAt: any
  updatedAt: any
  size: number
  type: string
  name: string
  url: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Tag
// ====================================================

export interface Tag {
  __typename: 'Tag'
  id: string
  createdAt: any
  updatedAt: any
  label: string
  description: string | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Source
// ====================================================

export interface Source {
  __typename: 'Source'
  id: string
  createdAt: any
  updatedAt: any
  label: string
  description: string | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FieldInstance
// ====================================================

export interface FieldInstance_field {
  __typename: 'Field'
  id: string
  createdAt: any
  updatedAt: any
  type: FieldType
  label: string
  description: string | null
}

export interface FieldInstance {
  __typename: 'FieldInstance'
  id: string
  createdAt: any
  updatedAt: any
  field: FieldInstance_field
  value: string | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Field
// ====================================================

export interface Field {
  __typename: 'Field'
  id: string
  createdAt: any
  updatedAt: any
  type: FieldType
  label: string
  description: string | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Comment
// ====================================================

export interface Comment_createdBy {
  __typename: 'User'
  id: string
  createdAt: any
  updatedAt: any
  settings: any | null
  firstName: string
  lastName: string
  email: string
  username: string
  lastLogin: any | null
  deletedAt: any | null
  position: string | null
}

export interface Comment_parent {
  __typename: 'Comment'
  id: string
  createdAt: any
  updatedAt: any
  content: string
}

export interface Comment {
  __typename: 'Comment'
  id: string
  createdAt: any
  updatedAt: any
  createdBy: Comment_createdBy
  parent: Comment_parent | null
  content: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Stage
// ====================================================

export interface Stage {
  __typename: 'Stage'
  id: string
  createdAt: any
  updatedAt: any
  name: string
  description: string | null
  type: StageType
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Job
// ====================================================

export interface Job_workspace {
  __typename: 'Workspace'
  id: string
  createdAt: any
  updatedAt: any
  settings: any | null
  name: string
}

export interface Job_applications {
  __typename: 'Application'
  createdAt: any
  id: string
  updatedAt: any
  type: ApplicationType
}

export interface Job_workflow {
  __typename: 'Workflow'
  id: string
  createdAt: any
  updatedAt: any
  name: string
  description: string | null
}

export interface Job_comments {
  __typename: 'Comment'
  id: string
  createdAt: any
  updatedAt: any
  content: string
}

export interface Job_locations {
  __typename: 'Location'
  id: string
  createdAt: any
  updatedAt: any
  country: string
  region: string | null
  city: string
  zip: string | null
}

export interface Job {
  __typename: 'Job'
  id: string
  createdAt: any
  updatedAt: any
  workspace: Job_workspace
  applications: Job_applications[] | null
  workflow: Job_workflow
  comments: Job_comments[] | null
  type: JobType
  department: string | null
  locations: Job_locations[] | null
  name: string
  excerpt: string | null
  companyDescription: string | null
  description: string | null
  requirements: string | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Workspace
// ====================================================

export interface Workspace_users {
  __typename: 'User'
  id: string
  createdAt: any
  updatedAt: any
  settings: any | null
  firstName: string
  lastName: string
  email: string
  username: string
  lastLogin: any | null
  deletedAt: any | null
  position: string | null
}

export interface Workspace_jobs {
  __typename: 'Job'
  id: string
  createdAt: any
  updatedAt: any
  type: JobType
  department: string | null
  name: string
  excerpt: string | null
  companyDescription: string | null
  description: string | null
  requirements: string | null
}

export interface Workspace_candidates {
  __typename: 'Candidate'
  id: string
  createdAt: any
  updatedAt: any
  firstName: string
  lastName: string
  company: string | null
  headline: string | null
  position: string | null
}

export interface Workspace_workflows {
  __typename: 'Workflow'
  id: string
  createdAt: any
  updatedAt: any
  name: string
  description: string | null
}

export interface Workspace_invites {
  __typename: 'Invite'
  id: string
  createdAt: any
  updatedAt: any
  email: string
  expireAt: any
}

export interface Workspace {
  __typename: 'Workspace'
  id: string
  createdAt: any
  updatedAt: any
  users: Workspace_users[] | null
  jobs: Workspace_jobs[] | null
  candidates: Workspace_candidates[] | null
  settings: any | null
  workflows: Workspace_workflows[] | null
  invites: Workspace_invites[] | null
  name: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Workflow
// ====================================================

export interface Workflow_stages {
  __typename: 'Stage'
  id: string
  createdAt: any
  updatedAt: any
  name: string
  description: string | null
  type: StageType
}

export interface Workflow_disqualifications {
  __typename: 'Disqualification'
  id: string
  createdAt: any
  updatedAt: any
  name: string
  description: string | null
}

export interface Workflow_fields {
  __typename: 'Field'
  id: string
  createdAt: any
  updatedAt: any
  type: FieldType
  label: string
  description: string | null
}

export interface Workflow {
  __typename: 'Workflow'
  id: string
  createdAt: any
  updatedAt: any
  name: string
  description: string | null
  stages: Workflow_stages[] | null
  disqualifications: Workflow_disqualifications[] | null
  fields: Workflow_fields[] | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Invite
// ====================================================

export interface Invite_invitedBy {
  __typename: 'User'
  id: string
  createdAt: any
  updatedAt: any
  settings: any | null
  firstName: string
  lastName: string
  email: string
  username: string
  lastLogin: any | null
  deletedAt: any | null
  position: string | null
}

export interface Invite {
  __typename: 'Invite'
  id: string
  createdAt: any
  updatedAt: any
  email: string
  expireAt: any
  invitedBy: Invite_invitedBy
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Location
// ====================================================

export interface Location {
  __typename: 'Location'
  id: string
  createdAt: any
  updatedAt: any
  country: string
  region: string | null
  city: string
  zip: string | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ApplicationConnection
// ====================================================

export interface ApplicationConnection_pageInfo {
  __typename: 'PageInfo'
  hasNextPage: boolean
  hasPreviousPage: boolean
  startCursor: string | null
  endCursor: string | null
}

export interface ApplicationConnection_edges {
  __typename: 'ApplicationEdge'
  cursor: string
}

export interface ApplicationConnection_aggregate {
  __typename: 'AggregateApplication'
  count: number
}

export interface ApplicationConnection {
  __typename: 'ApplicationConnection'
  pageInfo: ApplicationConnection_pageInfo
  edges: (ApplicationConnection_edges | null)[]
  aggregate: ApplicationConnection_aggregate
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PageInfo
// ====================================================

export interface PageInfo {
  __typename: 'PageInfo'
  hasNextPage: boolean
  hasPreviousPage: boolean
  startCursor: string | null
  endCursor: string | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ApplicationEdge
// ====================================================

export interface ApplicationEdge_node {
  __typename: 'Application'
  createdAt: any
  id: string
  updatedAt: any
  type: ApplicationType
}

export interface ApplicationEdge {
  __typename: 'ApplicationEdge'
  node: ApplicationEdge_node
  cursor: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AggregateApplication
// ====================================================

export interface AggregateApplication {
  __typename: 'AggregateApplication'
  count: number
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CandidateConnection
// ====================================================

export interface CandidateConnection_pageInfo {
  __typename: 'PageInfo'
  hasNextPage: boolean
  hasPreviousPage: boolean
  startCursor: string | null
  endCursor: string | null
}

export interface CandidateConnection_edges {
  __typename: 'CandidateEdge'
  cursor: string
}

export interface CandidateConnection_aggregate {
  __typename: 'AggregateCandidate'
  count: number
}

export interface CandidateConnection {
  __typename: 'CandidateConnection'
  pageInfo: CandidateConnection_pageInfo
  edges: (CandidateConnection_edges | null)[]
  aggregate: CandidateConnection_aggregate
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CandidateEdge
// ====================================================

export interface CandidateEdge_node {
  __typename: 'Candidate'
  id: string
  createdAt: any
  updatedAt: any
  firstName: string
  lastName: string
  company: string | null
  headline: string | null
  position: string | null
}

export interface CandidateEdge {
  __typename: 'CandidateEdge'
  node: CandidateEdge_node
  cursor: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AggregateCandidate
// ====================================================

export interface AggregateCandidate {
  __typename: 'AggregateCandidate'
  count: number
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: JobConnection
// ====================================================

export interface JobConnection_pageInfo {
  __typename: 'PageInfo'
  hasNextPage: boolean
  hasPreviousPage: boolean
  startCursor: string | null
  endCursor: string | null
}

export interface JobConnection_edges {
  __typename: 'JobEdge'
  cursor: string
}

export interface JobConnection_aggregate {
  __typename: 'AggregateJob'
  count: number
}

export interface JobConnection {
  __typename: 'JobConnection'
  pageInfo: JobConnection_pageInfo
  edges: (JobConnection_edges | null)[]
  aggregate: JobConnection_aggregate
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: JobEdge
// ====================================================

export interface JobEdge_node {
  __typename: 'Job'
  id: string
  createdAt: any
  updatedAt: any
  type: JobType
  department: string | null
  name: string
  excerpt: string | null
  companyDescription: string | null
  description: string | null
  requirements: string | null
}

export interface JobEdge {
  __typename: 'JobEdge'
  node: JobEdge_node
  cursor: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AggregateJob
// ====================================================

export interface AggregateJob {
  __typename: 'AggregateJob'
  count: number
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TagConnection
// ====================================================

export interface TagConnection_pageInfo {
  __typename: 'PageInfo'
  hasNextPage: boolean
  hasPreviousPage: boolean
  startCursor: string | null
  endCursor: string | null
}

export interface TagConnection_edges {
  __typename: 'TagEdge'
  cursor: string
}

export interface TagConnection_aggregate {
  __typename: 'AggregateTag'
  count: number
}

export interface TagConnection {
  __typename: 'TagConnection'
  pageInfo: TagConnection_pageInfo
  edges: (TagConnection_edges | null)[]
  aggregate: TagConnection_aggregate
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TagEdge
// ====================================================

export interface TagEdge_node {
  __typename: 'Tag'
  id: string
  createdAt: any
  updatedAt: any
  label: string
  description: string | null
}

export interface TagEdge {
  __typename: 'TagEdge'
  node: TagEdge_node
  cursor: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AggregateTag
// ====================================================

export interface AggregateTag {
  __typename: 'AggregateTag'
  count: number
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TaskConnection
// ====================================================

export interface TaskConnection_pageInfo {
  __typename: 'PageInfo'
  hasNextPage: boolean
  hasPreviousPage: boolean
  startCursor: string | null
  endCursor: string | null
}

export interface TaskConnection_edges {
  __typename: 'TaskEdge'
  cursor: string
}

export interface TaskConnection_aggregate {
  __typename: 'AggregateTask'
  count: number
}

export interface TaskConnection {
  __typename: 'TaskConnection'
  pageInfo: TaskConnection_pageInfo
  edges: (TaskConnection_edges | null)[]
  aggregate: TaskConnection_aggregate
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TaskEdge
// ====================================================

export interface TaskEdge_node {
  __typename: 'Task'
  id: string
  createdAt: any
  updatedAt: any
  title: string | null
  description: string | null
  dueAt: any | null
}

export interface TaskEdge {
  __typename: 'TaskEdge'
  node: TaskEdge_node
  cursor: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AggregateTask
// ====================================================

export interface AggregateTask {
  __typename: 'AggregateTask'
  count: number
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserConnection
// ====================================================

export interface UserConnection_pageInfo {
  __typename: 'PageInfo'
  hasNextPage: boolean
  hasPreviousPage: boolean
  startCursor: string | null
  endCursor: string | null
}

export interface UserConnection_edges {
  __typename: 'UserEdge'
  cursor: string
}

export interface UserConnection_aggregate {
  __typename: 'AggregateUser'
  count: number
}

export interface UserConnection {
  __typename: 'UserConnection'
  pageInfo: UserConnection_pageInfo
  edges: (UserConnection_edges | null)[]
  aggregate: UserConnection_aggregate
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserEdge
// ====================================================

export interface UserEdge_node {
  __typename: 'User'
  id: string
  createdAt: any
  updatedAt: any
  settings: any | null
  firstName: string
  lastName: string
  email: string
  username: string
  lastLogin: any | null
  deletedAt: any | null
  position: string | null
}

export interface UserEdge {
  __typename: 'UserEdge'
  node: UserEdge_node
  cursor: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AggregateUser
// ====================================================

export interface AggregateUser {
  __typename: 'AggregateUser'
  count: number
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AccessPayload
// ====================================================

export interface AccessPayload {
  __typename: 'AccessPayload'
  token: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AuthPayload
// ====================================================

export interface AuthPayload {
  __typename: 'AuthPayload'
  token: string
  refresh: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: LocalType
// ====================================================

export interface LocalType {
  __typename: 'LocalType'
  id: string
  name: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Toast
// ====================================================

export interface Toast {
  __typename: 'Toast'
  id: string
  createdAt: any
  message: string
  type: ToastType
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ApplicationType {
  DISQUALIFIED = 'DISQUALIFIED',
  QUALIFIED = 'QUALIFIED',
}

export enum FieldType {
  BOOLEAN = 'BOOLEAN',
  DATETIME = 'DATETIME',
  FLOAT = 'FLOAT',
  INT = 'INT',
  PARAGRAPH = 'PARAGRAPH',
  TEXT = 'TEXT',
}

export enum JobOrderByInput {
  companyDescription_ASC = 'companyDescription_ASC',
  companyDescription_DESC = 'companyDescription_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  department_ASC = 'department_ASC',
  department_DESC = 'department_DESC',
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  excerpt_ASC = 'excerpt_ASC',
  excerpt_DESC = 'excerpt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  requirements_ASC = 'requirements_ASC',
  requirements_DESC = 'requirements_DESC',
  type_ASC = 'type_ASC',
  type_DESC = 'type_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
}

export enum JobType {
  ARCHIVED = 'ARCHIVED',
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
}

export enum StageType {
  FINAL = 'FINAL',
  NEW = 'NEW',
  PIPELINE = 'PIPELINE',
}

export enum ToastType {
  BLOCKED = 'BLOCKED',
  ERROR = 'ERROR',
  INFO = 'INFO',
  SEVERE_WARNING = 'SEVERE_WARNING',
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
}

export interface ApplicationCreateManyWithoutCandidateInput {
  create?: ApplicationCreateWithoutCandidateInput[] | null
  connect?: ApplicationWhereUniqueInput[] | null
}

export interface ApplicationCreateWithoutCandidateInput {
  type: ApplicationType
  disqualification?: DisqualificationInstanceCreateOneInput | null
  stage: StageCreateOneInput
  job: JobCreateOneWithoutApplicationsInput
}

export interface ApplicationScalarWhereInput {
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  type?: ApplicationType | null
  type_not?: ApplicationType | null
  type_in?: ApplicationType[] | null
  type_not_in?: ApplicationType[] | null
  AND?: ApplicationScalarWhereInput[] | null
  OR?: ApplicationScalarWhereInput[] | null
  NOT?: ApplicationScalarWhereInput[] | null
}

export interface ApplicationUpdateManyDataInput {
  type?: ApplicationType | null
}

export interface ApplicationUpdateManyWithWhereNestedInput {
  where: ApplicationScalarWhereInput
  data: ApplicationUpdateManyDataInput
}

export interface ApplicationUpdateManyWithoutCandidateInput {
  create?: ApplicationCreateWithoutCandidateInput[] | null
  delete?: ApplicationWhereUniqueInput[] | null
  connect?: ApplicationWhereUniqueInput[] | null
  disconnect?: ApplicationWhereUniqueInput[] | null
  update?: ApplicationUpdateWithWhereUniqueWithoutCandidateInput[] | null
  upsert?: ApplicationUpsertWithWhereUniqueWithoutCandidateInput[] | null
  deleteMany?: ApplicationScalarWhereInput[] | null
  updateMany?: ApplicationUpdateManyWithWhereNestedInput[] | null
}

export interface ApplicationUpdateWithWhereUniqueWithoutCandidateInput {
  where: ApplicationWhereUniqueInput
  data: ApplicationUpdateWithoutCandidateDataInput
}

export interface ApplicationUpdateWithoutCandidateDataInput {
  type?: ApplicationType | null
  disqualification?: DisqualificationInstanceUpdateOneInput | null
  stage?: StageUpdateOneRequiredInput | null
  job?: JobUpdateOneRequiredWithoutApplicationsInput | null
}

export interface ApplicationUpsertWithWhereUniqueWithoutCandidateInput {
  where: ApplicationWhereUniqueInput
  update: ApplicationUpdateWithoutCandidateDataInput
  create: ApplicationCreateWithoutCandidateInput
}

export interface ApplicationWhereInput {
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  type?: ApplicationType | null
  type_not?: ApplicationType | null
  type_in?: ApplicationType[] | null
  type_not_in?: ApplicationType[] | null
  disqualification?: DisqualificationInstanceWhereInput | null
  stage?: StageWhereInput | null
  job?: JobWhereInput | null
  candidate?: CandidateWhereInput | null
  AND?: ApplicationWhereInput[] | null
  OR?: ApplicationWhereInput[] | null
  NOT?: ApplicationWhereInput[] | null
}

export interface ApplicationWhereUniqueInput {
  id?: string | null
}

export interface CandidateCreateInput {
  firstName: string
  lastName: string
  emails?: CandidateCreateemailsInput | null
  phones?: CandidateCreatephonesInput | null
  links?: CandidateCreatelinksInput | null
  avatar?: FileCreateOneInput | null
  company?: string | null
  headline?: string | null
  position?: string | null
  resumesString?: CandidateCreateresumesStringInput | null
  resumesFile?: FileCreateManyInput | null
  coverLettersString?: CandidateCreatecoverLettersStringInput | null
  coverLettersFile?: FileCreateManyInput | null
  tags?: TagCreateManyInput | null
  sources?: SourceCreateManyInput | null
  fields?: FieldInstanceCreateManyInput | null
  tasks?: TaskCreateManyWithoutCandidateInput | null
  applications?: ApplicationCreateManyWithoutCandidateInput | null
  comments?: CommentCreateManyInput | null
}

export interface CandidateCreateManyInput {
  create?: CandidateCreateInput[] | null
  connect?: CandidateWhereUniqueInput[] | null
}

export interface CandidateCreateOneWithoutTasksInput {
  create?: CandidateCreateWithoutTasksInput | null
  connect?: CandidateWhereUniqueInput | null
}

export interface CandidateCreateWithoutTasksInput {
  firstName: string
  lastName: string
  emails?: CandidateCreateemailsInput | null
  phones?: CandidateCreatephonesInput | null
  links?: CandidateCreatelinksInput | null
  avatar?: FileCreateOneInput | null
  company?: string | null
  headline?: string | null
  position?: string | null
  resumesString?: CandidateCreateresumesStringInput | null
  resumesFile?: FileCreateManyInput | null
  coverLettersString?: CandidateCreatecoverLettersStringInput | null
  coverLettersFile?: FileCreateManyInput | null
  tags?: TagCreateManyInput | null
  sources?: SourceCreateManyInput | null
  fields?: FieldInstanceCreateManyInput | null
  applications?: ApplicationCreateManyWithoutCandidateInput | null
  comments?: CommentCreateManyInput | null
}

export interface CandidateCreatecoverLettersStringInput {
  set?: string[] | null
}

export interface CandidateCreateemailsInput {
  set?: string[] | null
}

export interface CandidateCreatelinksInput {
  set?: string[] | null
}

export interface CandidateCreatephonesInput {
  set?: string[] | null
}

export interface CandidateCreateresumesStringInput {
  set?: string[] | null
}

export interface CandidateScalarWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  firstName?: string | null
  firstName_not?: string | null
  firstName_in?: string[] | null
  firstName_not_in?: string[] | null
  firstName_lt?: string | null
  firstName_lte?: string | null
  firstName_gt?: string | null
  firstName_gte?: string | null
  firstName_contains?: string | null
  firstName_not_contains?: string | null
  firstName_starts_with?: string | null
  firstName_not_starts_with?: string | null
  firstName_ends_with?: string | null
  firstName_not_ends_with?: string | null
  lastName?: string | null
  lastName_not?: string | null
  lastName_in?: string[] | null
  lastName_not_in?: string[] | null
  lastName_lt?: string | null
  lastName_lte?: string | null
  lastName_gt?: string | null
  lastName_gte?: string | null
  lastName_contains?: string | null
  lastName_not_contains?: string | null
  lastName_starts_with?: string | null
  lastName_not_starts_with?: string | null
  lastName_ends_with?: string | null
  lastName_not_ends_with?: string | null
  company?: string | null
  company_not?: string | null
  company_in?: string[] | null
  company_not_in?: string[] | null
  company_lt?: string | null
  company_lte?: string | null
  company_gt?: string | null
  company_gte?: string | null
  company_contains?: string | null
  company_not_contains?: string | null
  company_starts_with?: string | null
  company_not_starts_with?: string | null
  company_ends_with?: string | null
  company_not_ends_with?: string | null
  headline?: string | null
  headline_not?: string | null
  headline_in?: string[] | null
  headline_not_in?: string[] | null
  headline_lt?: string | null
  headline_lte?: string | null
  headline_gt?: string | null
  headline_gte?: string | null
  headline_contains?: string | null
  headline_not_contains?: string | null
  headline_starts_with?: string | null
  headline_not_starts_with?: string | null
  headline_ends_with?: string | null
  headline_not_ends_with?: string | null
  position?: string | null
  position_not?: string | null
  position_in?: string[] | null
  position_not_in?: string[] | null
  position_lt?: string | null
  position_lte?: string | null
  position_gt?: string | null
  position_gte?: string | null
  position_contains?: string | null
  position_not_contains?: string | null
  position_starts_with?: string | null
  position_not_starts_with?: string | null
  position_ends_with?: string | null
  position_not_ends_with?: string | null
  AND?: CandidateScalarWhereInput[] | null
  OR?: CandidateScalarWhereInput[] | null
  NOT?: CandidateScalarWhereInput[] | null
}

export interface CandidateUpdateDataInput {
  firstName?: string | null
  lastName?: string | null
  emails?: CandidateUpdateemailsInput | null
  phones?: CandidateUpdatephonesInput | null
  links?: CandidateUpdatelinksInput | null
  avatar?: FileUpdateOneInput | null
  company?: string | null
  headline?: string | null
  position?: string | null
  resumesString?: CandidateUpdateresumesStringInput | null
  resumesFile?: FileUpdateManyInput | null
  coverLettersString?: CandidateUpdatecoverLettersStringInput | null
  coverLettersFile?: FileUpdateManyInput | null
  tags?: TagUpdateManyInput | null
  sources?: SourceUpdateManyInput | null
  fields?: FieldInstanceUpdateManyInput | null
  tasks?: TaskUpdateManyWithoutCandidateInput | null
  applications?: ApplicationUpdateManyWithoutCandidateInput | null
  comments?: CommentUpdateManyInput | null
}

export interface CandidateUpdateInput {
  firstName?: string | null
  lastName?: string | null
  emails?: CandidateUpdateemailsInput | null
  phones?: CandidateUpdatephonesInput | null
  links?: CandidateUpdatelinksInput | null
  avatar?: FileUpdateOneInput | null
  company?: string | null
  headline?: string | null
  position?: string | null
  resumesString?: CandidateUpdateresumesStringInput | null
  resumesFile?: FileUpdateManyInput | null
  coverLettersString?: CandidateUpdatecoverLettersStringInput | null
  coverLettersFile?: FileUpdateManyInput | null
  tags?: TagUpdateManyInput | null
  sources?: SourceUpdateManyInput | null
  fields?: FieldInstanceUpdateManyInput | null
  tasks?: TaskUpdateManyWithoutCandidateInput | null
  applications?: ApplicationUpdateManyWithoutCandidateInput | null
  comments?: CommentUpdateManyInput | null
}

export interface CandidateUpdateManyDataInput {
  firstName?: string | null
  lastName?: string | null
  emails?: CandidateUpdateemailsInput | null
  phones?: CandidateUpdatephonesInput | null
  links?: CandidateUpdatelinksInput | null
  company?: string | null
  headline?: string | null
  position?: string | null
  resumesString?: CandidateUpdateresumesStringInput | null
  coverLettersString?: CandidateUpdatecoverLettersStringInput | null
}

export interface CandidateUpdateManyInput {
  create?: CandidateCreateInput[] | null
  update?: CandidateUpdateWithWhereUniqueNestedInput[] | null
  upsert?: CandidateUpsertWithWhereUniqueNestedInput[] | null
  delete?: CandidateWhereUniqueInput[] | null
  connect?: CandidateWhereUniqueInput[] | null
  disconnect?: CandidateWhereUniqueInput[] | null
  deleteMany?: CandidateScalarWhereInput[] | null
  updateMany?: CandidateUpdateManyWithWhereNestedInput[] | null
}

export interface CandidateUpdateManyWithWhereNestedInput {
  where: CandidateScalarWhereInput
  data: CandidateUpdateManyDataInput
}

export interface CandidateUpdateOneWithoutTasksInput {
  create?: CandidateCreateWithoutTasksInput | null
  update?: CandidateUpdateWithoutTasksDataInput | null
  upsert?: CandidateUpsertWithoutTasksInput | null
  delete?: boolean | null
  disconnect?: boolean | null
  connect?: CandidateWhereUniqueInput | null
}

export interface CandidateUpdateWithWhereUniqueNestedInput {
  where: CandidateWhereUniqueInput
  data: CandidateUpdateDataInput
}

export interface CandidateUpdateWithoutTasksDataInput {
  firstName?: string | null
  lastName?: string | null
  emails?: CandidateUpdateemailsInput | null
  phones?: CandidateUpdatephonesInput | null
  links?: CandidateUpdatelinksInput | null
  avatar?: FileUpdateOneInput | null
  company?: string | null
  headline?: string | null
  position?: string | null
  resumesString?: CandidateUpdateresumesStringInput | null
  resumesFile?: FileUpdateManyInput | null
  coverLettersString?: CandidateUpdatecoverLettersStringInput | null
  coverLettersFile?: FileUpdateManyInput | null
  tags?: TagUpdateManyInput | null
  sources?: SourceUpdateManyInput | null
  fields?: FieldInstanceUpdateManyInput | null
  applications?: ApplicationUpdateManyWithoutCandidateInput | null
  comments?: CommentUpdateManyInput | null
}

export interface CandidateUpdatecoverLettersStringInput {
  set?: string[] | null
}

export interface CandidateUpdateemailsInput {
  set?: string[] | null
}

export interface CandidateUpdatelinksInput {
  set?: string[] | null
}

export interface CandidateUpdatephonesInput {
  set?: string[] | null
}

export interface CandidateUpdateresumesStringInput {
  set?: string[] | null
}

export interface CandidateUpsertWithWhereUniqueNestedInput {
  where: CandidateWhereUniqueInput
  update: CandidateUpdateDataInput
  create: CandidateCreateInput
}

export interface CandidateUpsertWithoutTasksInput {
  update: CandidateUpdateWithoutTasksDataInput
  create: CandidateCreateWithoutTasksInput
}

export interface CandidateWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  firstName?: string | null
  firstName_not?: string | null
  firstName_in?: string[] | null
  firstName_not_in?: string[] | null
  firstName_lt?: string | null
  firstName_lte?: string | null
  firstName_gt?: string | null
  firstName_gte?: string | null
  firstName_contains?: string | null
  firstName_not_contains?: string | null
  firstName_starts_with?: string | null
  firstName_not_starts_with?: string | null
  firstName_ends_with?: string | null
  firstName_not_ends_with?: string | null
  lastName?: string | null
  lastName_not?: string | null
  lastName_in?: string[] | null
  lastName_not_in?: string[] | null
  lastName_lt?: string | null
  lastName_lte?: string | null
  lastName_gt?: string | null
  lastName_gte?: string | null
  lastName_contains?: string | null
  lastName_not_contains?: string | null
  lastName_starts_with?: string | null
  lastName_not_starts_with?: string | null
  lastName_ends_with?: string | null
  lastName_not_ends_with?: string | null
  avatar?: FileWhereInput | null
  company?: string | null
  company_not?: string | null
  company_in?: string[] | null
  company_not_in?: string[] | null
  company_lt?: string | null
  company_lte?: string | null
  company_gt?: string | null
  company_gte?: string | null
  company_contains?: string | null
  company_not_contains?: string | null
  company_starts_with?: string | null
  company_not_starts_with?: string | null
  company_ends_with?: string | null
  company_not_ends_with?: string | null
  headline?: string | null
  headline_not?: string | null
  headline_in?: string[] | null
  headline_not_in?: string[] | null
  headline_lt?: string | null
  headline_lte?: string | null
  headline_gt?: string | null
  headline_gte?: string | null
  headline_contains?: string | null
  headline_not_contains?: string | null
  headline_starts_with?: string | null
  headline_not_starts_with?: string | null
  headline_ends_with?: string | null
  headline_not_ends_with?: string | null
  position?: string | null
  position_not?: string | null
  position_in?: string[] | null
  position_not_in?: string[] | null
  position_lt?: string | null
  position_lte?: string | null
  position_gt?: string | null
  position_gte?: string | null
  position_contains?: string | null
  position_not_contains?: string | null
  position_starts_with?: string | null
  position_not_starts_with?: string | null
  position_ends_with?: string | null
  position_not_ends_with?: string | null
  resumesFile_every?: FileWhereInput | null
  resumesFile_some?: FileWhereInput | null
  resumesFile_none?: FileWhereInput | null
  coverLettersFile_every?: FileWhereInput | null
  coverLettersFile_some?: FileWhereInput | null
  coverLettersFile_none?: FileWhereInput | null
  tags_every?: TagWhereInput | null
  tags_some?: TagWhereInput | null
  tags_none?: TagWhereInput | null
  sources_every?: SourceWhereInput | null
  sources_some?: SourceWhereInput | null
  sources_none?: SourceWhereInput | null
  fields_every?: FieldInstanceWhereInput | null
  fields_some?: FieldInstanceWhereInput | null
  fields_none?: FieldInstanceWhereInput | null
  tasks_every?: TaskWhereInput | null
  tasks_some?: TaskWhereInput | null
  tasks_none?: TaskWhereInput | null
  applications_every?: ApplicationWhereInput | null
  applications_some?: ApplicationWhereInput | null
  applications_none?: ApplicationWhereInput | null
  comments_every?: CommentWhereInput | null
  comments_some?: CommentWhereInput | null
  comments_none?: CommentWhereInput | null
  AND?: CandidateWhereInput[] | null
  OR?: CandidateWhereInput[] | null
  NOT?: CandidateWhereInput[] | null
}

export interface CandidateWhereUniqueInput {
  id?: string | null
}

export interface CommentCreateInput {
  createdBy: UserCreateOneInput
  parent?: CommentCreateOneInput | null
  content: string
}

export interface CommentCreateManyInput {
  create?: CommentCreateInput[] | null
  connect?: CommentWhereUniqueInput[] | null
}

export interface CommentCreateOneInput {
  create?: CommentCreateInput | null
  connect?: CommentWhereUniqueInput | null
}

export interface CommentScalarWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  content?: string | null
  content_not?: string | null
  content_in?: string[] | null
  content_not_in?: string[] | null
  content_lt?: string | null
  content_lte?: string | null
  content_gt?: string | null
  content_gte?: string | null
  content_contains?: string | null
  content_not_contains?: string | null
  content_starts_with?: string | null
  content_not_starts_with?: string | null
  content_ends_with?: string | null
  content_not_ends_with?: string | null
  AND?: CommentScalarWhereInput[] | null
  OR?: CommentScalarWhereInput[] | null
  NOT?: CommentScalarWhereInput[] | null
}

export interface CommentUpdateDataInput {
  createdBy?: UserUpdateOneRequiredInput | null
  parent?: CommentUpdateOneInput | null
  content?: string | null
}

export interface CommentUpdateManyDataInput {
  content?: string | null
}

export interface CommentUpdateManyInput {
  create?: CommentCreateInput[] | null
  update?: CommentUpdateWithWhereUniqueNestedInput[] | null
  upsert?: CommentUpsertWithWhereUniqueNestedInput[] | null
  delete?: CommentWhereUniqueInput[] | null
  connect?: CommentWhereUniqueInput[] | null
  disconnect?: CommentWhereUniqueInput[] | null
  deleteMany?: CommentScalarWhereInput[] | null
  updateMany?: CommentUpdateManyWithWhereNestedInput[] | null
}

export interface CommentUpdateManyWithWhereNestedInput {
  where: CommentScalarWhereInput
  data: CommentUpdateManyDataInput
}

export interface CommentUpdateOneInput {
  create?: CommentCreateInput | null
  update?: CommentUpdateDataInput | null
  upsert?: CommentUpsertNestedInput | null
  delete?: boolean | null
  disconnect?: boolean | null
  connect?: CommentWhereUniqueInput | null
}

export interface CommentUpdateWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput
  data: CommentUpdateDataInput
}

export interface CommentUpsertNestedInput {
  update: CommentUpdateDataInput
  create: CommentCreateInput
}

export interface CommentUpsertWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput
  update: CommentUpdateDataInput
  create: CommentCreateInput
}

export interface CommentWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  createdBy?: UserWhereInput | null
  parent?: CommentWhereInput | null
  content?: string | null
  content_not?: string | null
  content_in?: string[] | null
  content_not_in?: string[] | null
  content_lt?: string | null
  content_lte?: string | null
  content_gt?: string | null
  content_gte?: string | null
  content_contains?: string | null
  content_not_contains?: string | null
  content_starts_with?: string | null
  content_not_starts_with?: string | null
  content_ends_with?: string | null
  content_not_ends_with?: string | null
  AND?: CommentWhereInput[] | null
  OR?: CommentWhereInput[] | null
  NOT?: CommentWhereInput[] | null
}

export interface CommentWhereUniqueInput {
  id?: string | null
}

export interface DisqualificationCreateInput {
  name: string
  description?: string | null
}

export interface DisqualificationCreateManyInput {
  create?: DisqualificationCreateInput[] | null
  connect?: DisqualificationWhereUniqueInput[] | null
}

export interface DisqualificationCreateOneInput {
  create?: DisqualificationCreateInput | null
  connect?: DisqualificationWhereUniqueInput | null
}

export interface DisqualificationInstanceCreateInput {
  disqualification: DisqualificationCreateOneInput
  createdBy: UserCreateOneInput
  content?: string | null
}

export interface DisqualificationInstanceCreateOneInput {
  create?: DisqualificationInstanceCreateInput | null
  connect?: DisqualificationInstanceWhereUniqueInput | null
}

export interface DisqualificationInstanceUpdateDataInput {
  disqualification?: DisqualificationUpdateOneRequiredInput | null
  createdBy?: UserUpdateOneRequiredInput | null
  content?: string | null
}

export interface DisqualificationInstanceUpdateOneInput {
  create?: DisqualificationInstanceCreateInput | null
  update?: DisqualificationInstanceUpdateDataInput | null
  upsert?: DisqualificationInstanceUpsertNestedInput | null
  delete?: boolean | null
  disconnect?: boolean | null
  connect?: DisqualificationInstanceWhereUniqueInput | null
}

export interface DisqualificationInstanceUpsertNestedInput {
  update: DisqualificationInstanceUpdateDataInput
  create: DisqualificationInstanceCreateInput
}

export interface DisqualificationInstanceWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  disqualification?: DisqualificationWhereInput | null
  createdBy?: UserWhereInput | null
  content?: string | null
  content_not?: string | null
  content_in?: string[] | null
  content_not_in?: string[] | null
  content_lt?: string | null
  content_lte?: string | null
  content_gt?: string | null
  content_gte?: string | null
  content_contains?: string | null
  content_not_contains?: string | null
  content_starts_with?: string | null
  content_not_starts_with?: string | null
  content_ends_with?: string | null
  content_not_ends_with?: string | null
  AND?: DisqualificationInstanceWhereInput[] | null
  OR?: DisqualificationInstanceWhereInput[] | null
  NOT?: DisqualificationInstanceWhereInput[] | null
}

export interface DisqualificationInstanceWhereUniqueInput {
  id?: string | null
}

export interface DisqualificationScalarWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  name?: string | null
  name_not?: string | null
  name_in?: string[] | null
  name_not_in?: string[] | null
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  AND?: DisqualificationScalarWhereInput[] | null
  OR?: DisqualificationScalarWhereInput[] | null
  NOT?: DisqualificationScalarWhereInput[] | null
}

export interface DisqualificationUpdateDataInput {
  name?: string | null
  description?: string | null
}

export interface DisqualificationUpdateManyDataInput {
  name?: string | null
  description?: string | null
}

export interface DisqualificationUpdateManyInput {
  create?: DisqualificationCreateInput[] | null
  update?: DisqualificationUpdateWithWhereUniqueNestedInput[] | null
  upsert?: DisqualificationUpsertWithWhereUniqueNestedInput[] | null
  delete?: DisqualificationWhereUniqueInput[] | null
  connect?: DisqualificationWhereUniqueInput[] | null
  disconnect?: DisqualificationWhereUniqueInput[] | null
  deleteMany?: DisqualificationScalarWhereInput[] | null
  updateMany?: DisqualificationUpdateManyWithWhereNestedInput[] | null
}

export interface DisqualificationUpdateManyWithWhereNestedInput {
  where: DisqualificationScalarWhereInput
  data: DisqualificationUpdateManyDataInput
}

export interface DisqualificationUpdateOneRequiredInput {
  create?: DisqualificationCreateInput | null
  update?: DisqualificationUpdateDataInput | null
  upsert?: DisqualificationUpsertNestedInput | null
  connect?: DisqualificationWhereUniqueInput | null
}

export interface DisqualificationUpdateWithWhereUniqueNestedInput {
  where: DisqualificationWhereUniqueInput
  data: DisqualificationUpdateDataInput
}

export interface DisqualificationUpsertNestedInput {
  update: DisqualificationUpdateDataInput
  create: DisqualificationCreateInput
}

export interface DisqualificationUpsertWithWhereUniqueNestedInput {
  where: DisqualificationWhereUniqueInput
  update: DisqualificationUpdateDataInput
  create: DisqualificationCreateInput
}

export interface DisqualificationWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  name?: string | null
  name_not?: string | null
  name_in?: string[] | null
  name_not_in?: string[] | null
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  AND?: DisqualificationWhereInput[] | null
  OR?: DisqualificationWhereInput[] | null
  NOT?: DisqualificationWhereInput[] | null
}

export interface DisqualificationWhereUniqueInput {
  id?: string | null
}

export interface FieldCreateInput {
  type: FieldType
  label: string
  description?: string | null
}

export interface FieldCreateManyInput {
  create?: FieldCreateInput[] | null
  connect?: FieldWhereUniqueInput[] | null
}

export interface FieldCreateOneInput {
  create?: FieldCreateInput | null
  connect?: FieldWhereUniqueInput | null
}

export interface FieldInstanceCreateInput {
  field: FieldCreateOneInput
  value?: string | null
}

export interface FieldInstanceCreateManyInput {
  create?: FieldInstanceCreateInput[] | null
  connect?: FieldInstanceWhereUniqueInput[] | null
}

export interface FieldInstanceScalarWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  value?: string | null
  value_not?: string | null
  value_in?: string[] | null
  value_not_in?: string[] | null
  value_lt?: string | null
  value_lte?: string | null
  value_gt?: string | null
  value_gte?: string | null
  value_contains?: string | null
  value_not_contains?: string | null
  value_starts_with?: string | null
  value_not_starts_with?: string | null
  value_ends_with?: string | null
  value_not_ends_with?: string | null
  AND?: FieldInstanceScalarWhereInput[] | null
  OR?: FieldInstanceScalarWhereInput[] | null
  NOT?: FieldInstanceScalarWhereInput[] | null
}

export interface FieldInstanceUpdateDataInput {
  field?: FieldUpdateOneRequiredInput | null
  value?: string | null
}

export interface FieldInstanceUpdateManyDataInput {
  value?: string | null
}

export interface FieldInstanceUpdateManyInput {
  create?: FieldInstanceCreateInput[] | null
  update?: FieldInstanceUpdateWithWhereUniqueNestedInput[] | null
  upsert?: FieldInstanceUpsertWithWhereUniqueNestedInput[] | null
  delete?: FieldInstanceWhereUniqueInput[] | null
  connect?: FieldInstanceWhereUniqueInput[] | null
  disconnect?: FieldInstanceWhereUniqueInput[] | null
  deleteMany?: FieldInstanceScalarWhereInput[] | null
  updateMany?: FieldInstanceUpdateManyWithWhereNestedInput[] | null
}

export interface FieldInstanceUpdateManyWithWhereNestedInput {
  where: FieldInstanceScalarWhereInput
  data: FieldInstanceUpdateManyDataInput
}

export interface FieldInstanceUpdateWithWhereUniqueNestedInput {
  where: FieldInstanceWhereUniqueInput
  data: FieldInstanceUpdateDataInput
}

export interface FieldInstanceUpsertWithWhereUniqueNestedInput {
  where: FieldInstanceWhereUniqueInput
  update: FieldInstanceUpdateDataInput
  create: FieldInstanceCreateInput
}

export interface FieldInstanceWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  field?: FieldWhereInput | null
  value?: string | null
  value_not?: string | null
  value_in?: string[] | null
  value_not_in?: string[] | null
  value_lt?: string | null
  value_lte?: string | null
  value_gt?: string | null
  value_gte?: string | null
  value_contains?: string | null
  value_not_contains?: string | null
  value_starts_with?: string | null
  value_not_starts_with?: string | null
  value_ends_with?: string | null
  value_not_ends_with?: string | null
  AND?: FieldInstanceWhereInput[] | null
  OR?: FieldInstanceWhereInput[] | null
  NOT?: FieldInstanceWhereInput[] | null
}

export interface FieldInstanceWhereUniqueInput {
  id?: string | null
}

export interface FieldScalarWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  type?: FieldType | null
  type_not?: FieldType | null
  type_in?: FieldType[] | null
  type_not_in?: FieldType[] | null
  label?: string | null
  label_not?: string | null
  label_in?: string[] | null
  label_not_in?: string[] | null
  label_lt?: string | null
  label_lte?: string | null
  label_gt?: string | null
  label_gte?: string | null
  label_contains?: string | null
  label_not_contains?: string | null
  label_starts_with?: string | null
  label_not_starts_with?: string | null
  label_ends_with?: string | null
  label_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  AND?: FieldScalarWhereInput[] | null
  OR?: FieldScalarWhereInput[] | null
  NOT?: FieldScalarWhereInput[] | null
}

export interface FieldUpdateDataInput {
  type?: FieldType | null
  label?: string | null
  description?: string | null
}

export interface FieldUpdateManyDataInput {
  type?: FieldType | null
  label?: string | null
  description?: string | null
}

export interface FieldUpdateManyInput {
  create?: FieldCreateInput[] | null
  update?: FieldUpdateWithWhereUniqueNestedInput[] | null
  upsert?: FieldUpsertWithWhereUniqueNestedInput[] | null
  delete?: FieldWhereUniqueInput[] | null
  connect?: FieldWhereUniqueInput[] | null
  disconnect?: FieldWhereUniqueInput[] | null
  deleteMany?: FieldScalarWhereInput[] | null
  updateMany?: FieldUpdateManyWithWhereNestedInput[] | null
}

export interface FieldUpdateManyWithWhereNestedInput {
  where: FieldScalarWhereInput
  data: FieldUpdateManyDataInput
}

export interface FieldUpdateOneRequiredInput {
  create?: FieldCreateInput | null
  update?: FieldUpdateDataInput | null
  upsert?: FieldUpsertNestedInput | null
  connect?: FieldWhereUniqueInput | null
}

export interface FieldUpdateWithWhereUniqueNestedInput {
  where: FieldWhereUniqueInput
  data: FieldUpdateDataInput
}

export interface FieldUpsertNestedInput {
  update: FieldUpdateDataInput
  create: FieldCreateInput
}

export interface FieldUpsertWithWhereUniqueNestedInput {
  where: FieldWhereUniqueInput
  update: FieldUpdateDataInput
  create: FieldCreateInput
}

export interface FieldWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  type?: FieldType | null
  type_not?: FieldType | null
  type_in?: FieldType[] | null
  type_not_in?: FieldType[] | null
  label?: string | null
  label_not?: string | null
  label_in?: string[] | null
  label_not_in?: string[] | null
  label_lt?: string | null
  label_lte?: string | null
  label_gt?: string | null
  label_gte?: string | null
  label_contains?: string | null
  label_not_contains?: string | null
  label_starts_with?: string | null
  label_not_starts_with?: string | null
  label_ends_with?: string | null
  label_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  AND?: FieldWhereInput[] | null
  OR?: FieldWhereInput[] | null
  NOT?: FieldWhereInput[] | null
}

export interface FieldWhereUniqueInput {
  id?: string | null
}

export interface FileCreateInput {
  size: number
  type: string
  name: string
  url: string
}

export interface FileCreateManyInput {
  create?: FileCreateInput[] | null
  connect?: FileWhereUniqueInput[] | null
}

export interface FileCreateOneInput {
  create?: FileCreateInput | null
  connect?: FileWhereUniqueInput | null
}

export interface FileScalarWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  size?: number | null
  size_not?: number | null
  size_in?: number[] | null
  size_not_in?: number[] | null
  size_lt?: number | null
  size_lte?: number | null
  size_gt?: number | null
  size_gte?: number | null
  type?: string | null
  type_not?: string | null
  type_in?: string[] | null
  type_not_in?: string[] | null
  type_lt?: string | null
  type_lte?: string | null
  type_gt?: string | null
  type_gte?: string | null
  type_contains?: string | null
  type_not_contains?: string | null
  type_starts_with?: string | null
  type_not_starts_with?: string | null
  type_ends_with?: string | null
  type_not_ends_with?: string | null
  name?: string | null
  name_not?: string | null
  name_in?: string[] | null
  name_not_in?: string[] | null
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  url?: string | null
  url_not?: string | null
  url_in?: string[] | null
  url_not_in?: string[] | null
  url_lt?: string | null
  url_lte?: string | null
  url_gt?: string | null
  url_gte?: string | null
  url_contains?: string | null
  url_not_contains?: string | null
  url_starts_with?: string | null
  url_not_starts_with?: string | null
  url_ends_with?: string | null
  url_not_ends_with?: string | null
  AND?: FileScalarWhereInput[] | null
  OR?: FileScalarWhereInput[] | null
  NOT?: FileScalarWhereInput[] | null
}

export interface FileUpdateDataInput {
  size?: number | null
  type?: string | null
  name?: string | null
  url?: string | null
}

export interface FileUpdateManyDataInput {
  size?: number | null
  type?: string | null
  name?: string | null
  url?: string | null
}

export interface FileUpdateManyInput {
  create?: FileCreateInput[] | null
  update?: FileUpdateWithWhereUniqueNestedInput[] | null
  upsert?: FileUpsertWithWhereUniqueNestedInput[] | null
  delete?: FileWhereUniqueInput[] | null
  connect?: FileWhereUniqueInput[] | null
  disconnect?: FileWhereUniqueInput[] | null
  deleteMany?: FileScalarWhereInput[] | null
  updateMany?: FileUpdateManyWithWhereNestedInput[] | null
}

export interface FileUpdateManyWithWhereNestedInput {
  where: FileScalarWhereInput
  data: FileUpdateManyDataInput
}

export interface FileUpdateOneInput {
  create?: FileCreateInput | null
  update?: FileUpdateDataInput | null
  upsert?: FileUpsertNestedInput | null
  delete?: boolean | null
  disconnect?: boolean | null
  connect?: FileWhereUniqueInput | null
}

export interface FileUpdateWithWhereUniqueNestedInput {
  where: FileWhereUniqueInput
  data: FileUpdateDataInput
}

export interface FileUpsertNestedInput {
  update: FileUpdateDataInput
  create: FileCreateInput
}

export interface FileUpsertWithWhereUniqueNestedInput {
  where: FileWhereUniqueInput
  update: FileUpdateDataInput
  create: FileCreateInput
}

export interface FileWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  size?: number | null
  size_not?: number | null
  size_in?: number[] | null
  size_not_in?: number[] | null
  size_lt?: number | null
  size_lte?: number | null
  size_gt?: number | null
  size_gte?: number | null
  type?: string | null
  type_not?: string | null
  type_in?: string[] | null
  type_not_in?: string[] | null
  type_lt?: string | null
  type_lte?: string | null
  type_gt?: string | null
  type_gte?: string | null
  type_contains?: string | null
  type_not_contains?: string | null
  type_starts_with?: string | null
  type_not_starts_with?: string | null
  type_ends_with?: string | null
  type_not_ends_with?: string | null
  name?: string | null
  name_not?: string | null
  name_in?: string[] | null
  name_not_in?: string[] | null
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  url?: string | null
  url_not?: string | null
  url_in?: string[] | null
  url_not_in?: string[] | null
  url_lt?: string | null
  url_lte?: string | null
  url_gt?: string | null
  url_gte?: string | null
  url_contains?: string | null
  url_not_contains?: string | null
  url_starts_with?: string | null
  url_not_starts_with?: string | null
  url_ends_with?: string | null
  url_not_ends_with?: string | null
  AND?: FileWhereInput[] | null
  OR?: FileWhereInput[] | null
  NOT?: FileWhereInput[] | null
}

export interface FileWhereUniqueInput {
  id?: string | null
  url?: string | null
}

export interface InviteCreateInput {
  email: string
}

export interface InviteCreateManyInput {
  create?: InviteCreateInput[] | null
  connect?: InviteWhereUniqueInput[] | null
}

export interface InviteScalarWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  email?: string | null
  email_not?: string | null
  email_in?: string[] | null
  email_not_in?: string[] | null
  email_lt?: string | null
  email_lte?: string | null
  email_gt?: string | null
  email_gte?: string | null
  email_contains?: string | null
  email_not_contains?: string | null
  email_starts_with?: string | null
  email_not_starts_with?: string | null
  email_ends_with?: string | null
  email_not_ends_with?: string | null
  expireAt?: any | null
  expireAt_not?: any | null
  expireAt_in?: any[] | null
  expireAt_not_in?: any[] | null
  expireAt_lt?: any | null
  expireAt_lte?: any | null
  expireAt_gt?: any | null
  expireAt_gte?: any | null
  AND?: InviteScalarWhereInput[] | null
  OR?: InviteScalarWhereInput[] | null
  NOT?: InviteScalarWhereInput[] | null
}

export interface InviteUpdateDataInput {
  email?: string | null
  expireAt?: any | null
  invitedBy?: UserUpdateOneRequiredInput | null
}

export interface InviteUpdateManyDataInput {
  email?: string | null
  expireAt?: any | null
}

export interface InviteUpdateManyInput {
  create?: InviteCreateInput[] | null
  update?: InviteUpdateWithWhereUniqueNestedInput[] | null
  upsert?: InviteUpsertWithWhereUniqueNestedInput[] | null
  delete?: InviteWhereUniqueInput[] | null
  connect?: InviteWhereUniqueInput[] | null
  disconnect?: InviteWhereUniqueInput[] | null
  deleteMany?: InviteScalarWhereInput[] | null
  updateMany?: InviteUpdateManyWithWhereNestedInput[] | null
}

export interface InviteUpdateManyWithWhereNestedInput {
  where: InviteScalarWhereInput
  data: InviteUpdateManyDataInput
}

export interface InviteUpdateWithWhereUniqueNestedInput {
  where: InviteWhereUniqueInput
  data: InviteUpdateDataInput
}

export interface InviteUpsertWithWhereUniqueNestedInput {
  where: InviteWhereUniqueInput
  update: InviteUpdateDataInput
  create: InviteCreateInput
}

export interface InviteWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  email?: string | null
  email_not?: string | null
  email_in?: string[] | null
  email_not_in?: string[] | null
  email_lt?: string | null
  email_lte?: string | null
  email_gt?: string | null
  email_gte?: string | null
  email_contains?: string | null
  email_not_contains?: string | null
  email_starts_with?: string | null
  email_not_starts_with?: string | null
  email_ends_with?: string | null
  email_not_ends_with?: string | null
  expireAt?: any | null
  expireAt_not?: any | null
  expireAt_in?: any[] | null
  expireAt_not_in?: any[] | null
  expireAt_lt?: any | null
  expireAt_lte?: any | null
  expireAt_gt?: any | null
  expireAt_gte?: any | null
  invitedBy?: UserWhereInput | null
  AND?: InviteWhereInput[] | null
  OR?: InviteWhereInput[] | null
  NOT?: InviteWhereInput[] | null
}

export interface InviteWhereUniqueInput {
  id?: string | null
}

export interface JobCreateOneWithoutApplicationsInput {
  create?: JobCreateWithoutApplicationsInput | null
  connect?: JobWhereUniqueInput | null
}

export interface JobCreateWithoutApplicationsInput {
  workspace: WorkspaceCreateOneWithoutJobsInput
  workflow: WorkflowCreateOneInput
  comments?: CommentCreateManyInput | null
  type: JobType
  department?: string | null
  locations?: LocationCreateManyInput | null
  name: string
  excerpt?: string | null
  companyDescription?: string | null
  description?: string | null
  requirements?: string | null
}

export interface JobUpdateOneRequiredWithoutApplicationsInput {
  create?: JobCreateWithoutApplicationsInput | null
  update?: JobUpdateWithoutApplicationsDataInput | null
  upsert?: JobUpsertWithoutApplicationsInput | null
  connect?: JobWhereUniqueInput | null
}

export interface JobUpdateWithoutApplicationsDataInput {
  workspace?: WorkspaceUpdateOneRequiredWithoutJobsInput | null
  workflow?: WorkflowUpdateOneRequiredInput | null
  comments?: CommentUpdateManyInput | null
  type?: JobType | null
  department?: string | null
  locations?: LocationUpdateManyInput | null
  name?: string | null
  excerpt?: string | null
  companyDescription?: string | null
  description?: string | null
  requirements?: string | null
}

export interface JobUpsertWithoutApplicationsInput {
  update: JobUpdateWithoutApplicationsDataInput
  create: JobCreateWithoutApplicationsInput
}

export interface JobWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  workspace?: WorkspaceWhereInput | null
  applications_every?: ApplicationWhereInput | null
  applications_some?: ApplicationWhereInput | null
  applications_none?: ApplicationWhereInput | null
  workflow?: WorkflowWhereInput | null
  comments_every?: CommentWhereInput | null
  comments_some?: CommentWhereInput | null
  comments_none?: CommentWhereInput | null
  type?: JobType | null
  type_not?: JobType | null
  type_in?: JobType[] | null
  type_not_in?: JobType[] | null
  department?: string | null
  department_not?: string | null
  department_in?: string[] | null
  department_not_in?: string[] | null
  department_lt?: string | null
  department_lte?: string | null
  department_gt?: string | null
  department_gte?: string | null
  department_contains?: string | null
  department_not_contains?: string | null
  department_starts_with?: string | null
  department_not_starts_with?: string | null
  department_ends_with?: string | null
  department_not_ends_with?: string | null
  locations_every?: LocationWhereInput | null
  locations_some?: LocationWhereInput | null
  locations_none?: LocationWhereInput | null
  name?: string | null
  name_not?: string | null
  name_in?: string[] | null
  name_not_in?: string[] | null
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  excerpt?: string | null
  excerpt_not?: string | null
  excerpt_in?: string[] | null
  excerpt_not_in?: string[] | null
  excerpt_lt?: string | null
  excerpt_lte?: string | null
  excerpt_gt?: string | null
  excerpt_gte?: string | null
  excerpt_contains?: string | null
  excerpt_not_contains?: string | null
  excerpt_starts_with?: string | null
  excerpt_not_starts_with?: string | null
  excerpt_ends_with?: string | null
  excerpt_not_ends_with?: string | null
  companyDescription?: string | null
  companyDescription_not?: string | null
  companyDescription_in?: string[] | null
  companyDescription_not_in?: string[] | null
  companyDescription_lt?: string | null
  companyDescription_lte?: string | null
  companyDescription_gt?: string | null
  companyDescription_gte?: string | null
  companyDescription_contains?: string | null
  companyDescription_not_contains?: string | null
  companyDescription_starts_with?: string | null
  companyDescription_not_starts_with?: string | null
  companyDescription_ends_with?: string | null
  companyDescription_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  requirements?: string | null
  requirements_not?: string | null
  requirements_in?: string[] | null
  requirements_not_in?: string[] | null
  requirements_lt?: string | null
  requirements_lte?: string | null
  requirements_gt?: string | null
  requirements_gte?: string | null
  requirements_contains?: string | null
  requirements_not_contains?: string | null
  requirements_starts_with?: string | null
  requirements_not_starts_with?: string | null
  requirements_ends_with?: string | null
  requirements_not_ends_with?: string | null
  AND?: JobWhereInput[] | null
  OR?: JobWhereInput[] | null
  NOT?: JobWhereInput[] | null
}

export interface JobWhereUniqueInput {
  id?: string | null
}

export interface LocationCreateInput {
  country: string
  region?: string | null
  city: string
  zip?: string | null
}

export interface LocationCreateManyInput {
  create?: LocationCreateInput[] | null
  connect?: LocationWhereUniqueInput[] | null
}

export interface LocationScalarWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  country?: string | null
  country_not?: string | null
  country_in?: string[] | null
  country_not_in?: string[] | null
  country_lt?: string | null
  country_lte?: string | null
  country_gt?: string | null
  country_gte?: string | null
  country_contains?: string | null
  country_not_contains?: string | null
  country_starts_with?: string | null
  country_not_starts_with?: string | null
  country_ends_with?: string | null
  country_not_ends_with?: string | null
  region?: string | null
  region_not?: string | null
  region_in?: string[] | null
  region_not_in?: string[] | null
  region_lt?: string | null
  region_lte?: string | null
  region_gt?: string | null
  region_gte?: string | null
  region_contains?: string | null
  region_not_contains?: string | null
  region_starts_with?: string | null
  region_not_starts_with?: string | null
  region_ends_with?: string | null
  region_not_ends_with?: string | null
  city?: string | null
  city_not?: string | null
  city_in?: string[] | null
  city_not_in?: string[] | null
  city_lt?: string | null
  city_lte?: string | null
  city_gt?: string | null
  city_gte?: string | null
  city_contains?: string | null
  city_not_contains?: string | null
  city_starts_with?: string | null
  city_not_starts_with?: string | null
  city_ends_with?: string | null
  city_not_ends_with?: string | null
  zip?: string | null
  zip_not?: string | null
  zip_in?: string[] | null
  zip_not_in?: string[] | null
  zip_lt?: string | null
  zip_lte?: string | null
  zip_gt?: string | null
  zip_gte?: string | null
  zip_contains?: string | null
  zip_not_contains?: string | null
  zip_starts_with?: string | null
  zip_not_starts_with?: string | null
  zip_ends_with?: string | null
  zip_not_ends_with?: string | null
  AND?: LocationScalarWhereInput[] | null
  OR?: LocationScalarWhereInput[] | null
  NOT?: LocationScalarWhereInput[] | null
}

export interface LocationUpdateDataInput {
  country?: string | null
  region?: string | null
  city?: string | null
  zip?: string | null
}

export interface LocationUpdateManyDataInput {
  country?: string | null
  region?: string | null
  city?: string | null
  zip?: string | null
}

export interface LocationUpdateManyInput {
  create?: LocationCreateInput[] | null
  update?: LocationUpdateWithWhereUniqueNestedInput[] | null
  upsert?: LocationUpsertWithWhereUniqueNestedInput[] | null
  delete?: LocationWhereUniqueInput[] | null
  connect?: LocationWhereUniqueInput[] | null
  disconnect?: LocationWhereUniqueInput[] | null
  deleteMany?: LocationScalarWhereInput[] | null
  updateMany?: LocationUpdateManyWithWhereNestedInput[] | null
}

export interface LocationUpdateManyWithWhereNestedInput {
  where: LocationScalarWhereInput
  data: LocationUpdateManyDataInput
}

export interface LocationUpdateWithWhereUniqueNestedInput {
  where: LocationWhereUniqueInput
  data: LocationUpdateDataInput
}

export interface LocationUpsertWithWhereUniqueNestedInput {
  where: LocationWhereUniqueInput
  update: LocationUpdateDataInput
  create: LocationCreateInput
}

export interface LocationWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  country?: string | null
  country_not?: string | null
  country_in?: string[] | null
  country_not_in?: string[] | null
  country_lt?: string | null
  country_lte?: string | null
  country_gt?: string | null
  country_gte?: string | null
  country_contains?: string | null
  country_not_contains?: string | null
  country_starts_with?: string | null
  country_not_starts_with?: string | null
  country_ends_with?: string | null
  country_not_ends_with?: string | null
  region?: string | null
  region_not?: string | null
  region_in?: string[] | null
  region_not_in?: string[] | null
  region_lt?: string | null
  region_lte?: string | null
  region_gt?: string | null
  region_gte?: string | null
  region_contains?: string | null
  region_not_contains?: string | null
  region_starts_with?: string | null
  region_not_starts_with?: string | null
  region_ends_with?: string | null
  region_not_ends_with?: string | null
  city?: string | null
  city_not?: string | null
  city_in?: string[] | null
  city_not_in?: string[] | null
  city_lt?: string | null
  city_lte?: string | null
  city_gt?: string | null
  city_gte?: string | null
  city_contains?: string | null
  city_not_contains?: string | null
  city_starts_with?: string | null
  city_not_starts_with?: string | null
  city_ends_with?: string | null
  city_not_ends_with?: string | null
  zip?: string | null
  zip_not?: string | null
  zip_in?: string[] | null
  zip_not_in?: string[] | null
  zip_lt?: string | null
  zip_lte?: string | null
  zip_gt?: string | null
  zip_gte?: string | null
  zip_contains?: string | null
  zip_not_contains?: string | null
  zip_starts_with?: string | null
  zip_not_starts_with?: string | null
  zip_ends_with?: string | null
  zip_not_ends_with?: string | null
  AND?: LocationWhereInput[] | null
  OR?: LocationWhereInput[] | null
  NOT?: LocationWhereInput[] | null
}

export interface LocationWhereUniqueInput {
  id?: string | null
}

export interface SourceCreateInput {
  label: string
  description?: string | null
}

export interface SourceCreateManyInput {
  create?: SourceCreateInput[] | null
  connect?: SourceWhereUniqueInput[] | null
}

export interface SourceScalarWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  label?: string | null
  label_not?: string | null
  label_in?: string[] | null
  label_not_in?: string[] | null
  label_lt?: string | null
  label_lte?: string | null
  label_gt?: string | null
  label_gte?: string | null
  label_contains?: string | null
  label_not_contains?: string | null
  label_starts_with?: string | null
  label_not_starts_with?: string | null
  label_ends_with?: string | null
  label_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  AND?: SourceScalarWhereInput[] | null
  OR?: SourceScalarWhereInput[] | null
  NOT?: SourceScalarWhereInput[] | null
}

export interface SourceUpdateDataInput {
  label?: string | null
  description?: string | null
}

export interface SourceUpdateManyDataInput {
  label?: string | null
  description?: string | null
}

export interface SourceUpdateManyInput {
  create?: SourceCreateInput[] | null
  update?: SourceUpdateWithWhereUniqueNestedInput[] | null
  upsert?: SourceUpsertWithWhereUniqueNestedInput[] | null
  delete?: SourceWhereUniqueInput[] | null
  connect?: SourceWhereUniqueInput[] | null
  disconnect?: SourceWhereUniqueInput[] | null
  deleteMany?: SourceScalarWhereInput[] | null
  updateMany?: SourceUpdateManyWithWhereNestedInput[] | null
}

export interface SourceUpdateManyWithWhereNestedInput {
  where: SourceScalarWhereInput
  data: SourceUpdateManyDataInput
}

export interface SourceUpdateWithWhereUniqueNestedInput {
  where: SourceWhereUniqueInput
  data: SourceUpdateDataInput
}

export interface SourceUpsertWithWhereUniqueNestedInput {
  where: SourceWhereUniqueInput
  update: SourceUpdateDataInput
  create: SourceCreateInput
}

export interface SourceWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  label?: string | null
  label_not?: string | null
  label_in?: string[] | null
  label_not_in?: string[] | null
  label_lt?: string | null
  label_lte?: string | null
  label_gt?: string | null
  label_gte?: string | null
  label_contains?: string | null
  label_not_contains?: string | null
  label_starts_with?: string | null
  label_not_starts_with?: string | null
  label_ends_with?: string | null
  label_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  AND?: SourceWhereInput[] | null
  OR?: SourceWhereInput[] | null
  NOT?: SourceWhereInput[] | null
}

export interface SourceWhereUniqueInput {
  id?: string | null
}

export interface StageCreateInput {
  name: string
  description?: string | null
  type: StageType
}

export interface StageCreateManyInput {
  create?: StageCreateInput[] | null
  connect?: StageWhereUniqueInput[] | null
}

export interface StageCreateOneInput {
  create?: StageCreateInput | null
  connect?: StageWhereUniqueInput | null
}

export interface StageScalarWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  name?: string | null
  name_not?: string | null
  name_in?: string[] | null
  name_not_in?: string[] | null
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  type?: StageType | null
  type_not?: StageType | null
  type_in?: StageType[] | null
  type_not_in?: StageType[] | null
  AND?: StageScalarWhereInput[] | null
  OR?: StageScalarWhereInput[] | null
  NOT?: StageScalarWhereInput[] | null
}

export interface StageUpdateDataInput {
  name?: string | null
  description?: string | null
  type?: StageType | null
}

export interface StageUpdateManyDataInput {
  name?: string | null
  description?: string | null
  type?: StageType | null
}

export interface StageUpdateManyInput {
  create?: StageCreateInput[] | null
  update?: StageUpdateWithWhereUniqueNestedInput[] | null
  upsert?: StageUpsertWithWhereUniqueNestedInput[] | null
  delete?: StageWhereUniqueInput[] | null
  connect?: StageWhereUniqueInput[] | null
  disconnect?: StageWhereUniqueInput[] | null
  deleteMany?: StageScalarWhereInput[] | null
  updateMany?: StageUpdateManyWithWhereNestedInput[] | null
}

export interface StageUpdateManyWithWhereNestedInput {
  where: StageScalarWhereInput
  data: StageUpdateManyDataInput
}

export interface StageUpdateOneRequiredInput {
  create?: StageCreateInput | null
  update?: StageUpdateDataInput | null
  upsert?: StageUpsertNestedInput | null
  connect?: StageWhereUniqueInput | null
}

export interface StageUpdateWithWhereUniqueNestedInput {
  where: StageWhereUniqueInput
  data: StageUpdateDataInput
}

export interface StageUpsertNestedInput {
  update: StageUpdateDataInput
  create: StageCreateInput
}

export interface StageUpsertWithWhereUniqueNestedInput {
  where: StageWhereUniqueInput
  update: StageUpdateDataInput
  create: StageCreateInput
}

export interface StageWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  name?: string | null
  name_not?: string | null
  name_in?: string[] | null
  name_not_in?: string[] | null
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  type?: StageType | null
  type_not?: StageType | null
  type_in?: StageType[] | null
  type_not_in?: StageType[] | null
  AND?: StageWhereInput[] | null
  OR?: StageWhereInput[] | null
  NOT?: StageWhereInput[] | null
}

export interface StageWhereUniqueInput {
  id?: string | null
}

export interface TagCreateInput {
  label: string
  description?: string | null
}

export interface TagCreateManyInput {
  create?: TagCreateInput[] | null
  connect?: TagWhereUniqueInput[] | null
}

export interface TagScalarWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  label?: string | null
  label_not?: string | null
  label_in?: string[] | null
  label_not_in?: string[] | null
  label_lt?: string | null
  label_lte?: string | null
  label_gt?: string | null
  label_gte?: string | null
  label_contains?: string | null
  label_not_contains?: string | null
  label_starts_with?: string | null
  label_not_starts_with?: string | null
  label_ends_with?: string | null
  label_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  AND?: TagScalarWhereInput[] | null
  OR?: TagScalarWhereInput[] | null
  NOT?: TagScalarWhereInput[] | null
}

export interface TagUpdateDataInput {
  label?: string | null
  description?: string | null
}

export interface TagUpdateManyDataInput {
  label?: string | null
  description?: string | null
}

export interface TagUpdateManyInput {
  create?: TagCreateInput[] | null
  update?: TagUpdateWithWhereUniqueNestedInput[] | null
  upsert?: TagUpsertWithWhereUniqueNestedInput[] | null
  delete?: TagWhereUniqueInput[] | null
  connect?: TagWhereUniqueInput[] | null
  disconnect?: TagWhereUniqueInput[] | null
  deleteMany?: TagScalarWhereInput[] | null
  updateMany?: TagUpdateManyWithWhereNestedInput[] | null
}

export interface TagUpdateManyWithWhereNestedInput {
  where: TagScalarWhereInput
  data: TagUpdateManyDataInput
}

export interface TagUpdateWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput
  data: TagUpdateDataInput
}

export interface TagUpsertWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput
  update: TagUpdateDataInput
  create: TagCreateInput
}

export interface TagWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  label?: string | null
  label_not?: string | null
  label_in?: string[] | null
  label_not_in?: string[] | null
  label_lt?: string | null
  label_lte?: string | null
  label_gt?: string | null
  label_gte?: string | null
  label_contains?: string | null
  label_not_contains?: string | null
  label_starts_with?: string | null
  label_not_starts_with?: string | null
  label_ends_with?: string | null
  label_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  AND?: TagWhereInput[] | null
  OR?: TagWhereInput[] | null
  NOT?: TagWhereInput[] | null
}

export interface TagWhereUniqueInput {
  id?: string | null
}

export interface TaskCreateManyWithoutCandidateInput {
  create?: TaskCreateWithoutCandidateInput[] | null
  connect?: TaskWhereUniqueInput[] | null
}

export interface TaskCreateManyWithoutOwnersInput {
  create?: TaskCreateWithoutOwnersInput[] | null
  connect?: TaskWhereUniqueInput[] | null
}

export interface TaskCreateWithoutCandidateInput {
  owners?: UserCreateManyWithoutTasksInput | null
  title?: string | null
  description?: string | null
  dueAt?: any | null
}

export interface TaskCreateWithoutOwnersInput {
  candidate?: CandidateCreateOneWithoutTasksInput | null
  title?: string | null
  description?: string | null
  dueAt?: any | null
}

export interface TaskScalarWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  title?: string | null
  title_not?: string | null
  title_in?: string[] | null
  title_not_in?: string[] | null
  title_lt?: string | null
  title_lte?: string | null
  title_gt?: string | null
  title_gte?: string | null
  title_contains?: string | null
  title_not_contains?: string | null
  title_starts_with?: string | null
  title_not_starts_with?: string | null
  title_ends_with?: string | null
  title_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  dueAt?: any | null
  dueAt_not?: any | null
  dueAt_in?: any[] | null
  dueAt_not_in?: any[] | null
  dueAt_lt?: any | null
  dueAt_lte?: any | null
  dueAt_gt?: any | null
  dueAt_gte?: any | null
  AND?: TaskScalarWhereInput[] | null
  OR?: TaskScalarWhereInput[] | null
  NOT?: TaskScalarWhereInput[] | null
}

export interface TaskUpdateManyDataInput {
  title?: string | null
  description?: string | null
  dueAt?: any | null
}

export interface TaskUpdateManyWithWhereNestedInput {
  where: TaskScalarWhereInput
  data: TaskUpdateManyDataInput
}

export interface TaskUpdateManyWithoutCandidateInput {
  create?: TaskCreateWithoutCandidateInput[] | null
  delete?: TaskWhereUniqueInput[] | null
  connect?: TaskWhereUniqueInput[] | null
  disconnect?: TaskWhereUniqueInput[] | null
  update?: TaskUpdateWithWhereUniqueWithoutCandidateInput[] | null
  upsert?: TaskUpsertWithWhereUniqueWithoutCandidateInput[] | null
  deleteMany?: TaskScalarWhereInput[] | null
  updateMany?: TaskUpdateManyWithWhereNestedInput[] | null
}

export interface TaskUpdateManyWithoutOwnersInput {
  create?: TaskCreateWithoutOwnersInput[] | null
  delete?: TaskWhereUniqueInput[] | null
  connect?: TaskWhereUniqueInput[] | null
  disconnect?: TaskWhereUniqueInput[] | null
  update?: TaskUpdateWithWhereUniqueWithoutOwnersInput[] | null
  upsert?: TaskUpsertWithWhereUniqueWithoutOwnersInput[] | null
  deleteMany?: TaskScalarWhereInput[] | null
  updateMany?: TaskUpdateManyWithWhereNestedInput[] | null
}

export interface TaskUpdateWithWhereUniqueWithoutCandidateInput {
  where: TaskWhereUniqueInput
  data: TaskUpdateWithoutCandidateDataInput
}

export interface TaskUpdateWithWhereUniqueWithoutOwnersInput {
  where: TaskWhereUniqueInput
  data: TaskUpdateWithoutOwnersDataInput
}

export interface TaskUpdateWithoutCandidateDataInput {
  owners?: UserUpdateManyWithoutTasksInput | null
  title?: string | null
  description?: string | null
  dueAt?: any | null
}

export interface TaskUpdateWithoutOwnersDataInput {
  candidate?: CandidateUpdateOneWithoutTasksInput | null
  title?: string | null
  description?: string | null
  dueAt?: any | null
}

export interface TaskUpsertWithWhereUniqueWithoutCandidateInput {
  where: TaskWhereUniqueInput
  update: TaskUpdateWithoutCandidateDataInput
  create: TaskCreateWithoutCandidateInput
}

export interface TaskUpsertWithWhereUniqueWithoutOwnersInput {
  where: TaskWhereUniqueInput
  update: TaskUpdateWithoutOwnersDataInput
  create: TaskCreateWithoutOwnersInput
}

export interface TaskWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  owners_every?: UserWhereInput | null
  owners_some?: UserWhereInput | null
  owners_none?: UserWhereInput | null
  candidate?: CandidateWhereInput | null
  title?: string | null
  title_not?: string | null
  title_in?: string[] | null
  title_not_in?: string[] | null
  title_lt?: string | null
  title_lte?: string | null
  title_gt?: string | null
  title_gte?: string | null
  title_contains?: string | null
  title_not_contains?: string | null
  title_starts_with?: string | null
  title_not_starts_with?: string | null
  title_ends_with?: string | null
  title_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  dueAt?: any | null
  dueAt_not?: any | null
  dueAt_in?: any[] | null
  dueAt_not_in?: any[] | null
  dueAt_lt?: any | null
  dueAt_lte?: any | null
  dueAt_gt?: any | null
  dueAt_gte?: any | null
  AND?: TaskWhereInput[] | null
  OR?: TaskWhereInput[] | null
  NOT?: TaskWhereInput[] | null
}

export interface TaskWhereUniqueInput {
  id?: string | null
}

export interface ToastInput {
  message: string
  type: ToastType
}

export interface UserCreateInput {
  settings?: any | null
  tasks?: TaskCreateManyWithoutOwnersInput | null
  firstName: string
  lastName: string
  email: string
  username: string
  lastLogin?: any | null
  deletedAt?: any | null
  position?: string | null
  avatar?: FileCreateOneInput | null
}

export interface UserCreateManyInput {
  create?: UserCreateInput[] | null
  connect?: UserWhereUniqueInput[] | null
}

export interface UserCreateManyWithoutTasksInput {
  create?: UserCreateWithoutTasksInput[] | null
  connect?: UserWhereUniqueInput[] | null
}

export interface UserCreateOneInput {
  create?: UserCreateInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutTasksInput {
  settings?: any | null
  firstName: string
  lastName: string
  email: string
  username: string
  lastLogin?: any | null
  deletedAt?: any | null
  position?: string | null
  avatar?: FileCreateOneInput | null
}

export interface UserScalarWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  firstName?: string | null
  firstName_not?: string | null
  firstName_in?: string[] | null
  firstName_not_in?: string[] | null
  firstName_lt?: string | null
  firstName_lte?: string | null
  firstName_gt?: string | null
  firstName_gte?: string | null
  firstName_contains?: string | null
  firstName_not_contains?: string | null
  firstName_starts_with?: string | null
  firstName_not_starts_with?: string | null
  firstName_ends_with?: string | null
  firstName_not_ends_with?: string | null
  lastName?: string | null
  lastName_not?: string | null
  lastName_in?: string[] | null
  lastName_not_in?: string[] | null
  lastName_lt?: string | null
  lastName_lte?: string | null
  lastName_gt?: string | null
  lastName_gte?: string | null
  lastName_contains?: string | null
  lastName_not_contains?: string | null
  lastName_starts_with?: string | null
  lastName_not_starts_with?: string | null
  lastName_ends_with?: string | null
  lastName_not_ends_with?: string | null
  email?: string | null
  email_not?: string | null
  email_in?: string[] | null
  email_not_in?: string[] | null
  email_lt?: string | null
  email_lte?: string | null
  email_gt?: string | null
  email_gte?: string | null
  email_contains?: string | null
  email_not_contains?: string | null
  email_starts_with?: string | null
  email_not_starts_with?: string | null
  email_ends_with?: string | null
  email_not_ends_with?: string | null
  username?: string | null
  username_not?: string | null
  username_in?: string[] | null
  username_not_in?: string[] | null
  username_lt?: string | null
  username_lte?: string | null
  username_gt?: string | null
  username_gte?: string | null
  username_contains?: string | null
  username_not_contains?: string | null
  username_starts_with?: string | null
  username_not_starts_with?: string | null
  username_ends_with?: string | null
  username_not_ends_with?: string | null
  lastLogin?: any | null
  lastLogin_not?: any | null
  lastLogin_in?: any[] | null
  lastLogin_not_in?: any[] | null
  lastLogin_lt?: any | null
  lastLogin_lte?: any | null
  lastLogin_gt?: any | null
  lastLogin_gte?: any | null
  deletedAt?: any | null
  deletedAt_not?: any | null
  deletedAt_in?: any[] | null
  deletedAt_not_in?: any[] | null
  deletedAt_lt?: any | null
  deletedAt_lte?: any | null
  deletedAt_gt?: any | null
  deletedAt_gte?: any | null
  position?: string | null
  position_not?: string | null
  position_in?: string[] | null
  position_not_in?: string[] | null
  position_lt?: string | null
  position_lte?: string | null
  position_gt?: string | null
  position_gte?: string | null
  position_contains?: string | null
  position_not_contains?: string | null
  position_starts_with?: string | null
  position_not_starts_with?: string | null
  position_ends_with?: string | null
  position_not_ends_with?: string | null
  AND?: UserScalarWhereInput[] | null
  OR?: UserScalarWhereInput[] | null
  NOT?: UserScalarWhereInput[] | null
}

export interface UserUpdateDataInput {
  settings?: any | null
  tasks?: TaskUpdateManyWithoutOwnersInput | null
  firstName?: string | null
  lastName?: string | null
  email?: string | null
  username?: string | null
  lastLogin?: any | null
  deletedAt?: any | null
  position?: string | null
  avatar?: FileUpdateOneInput | null
}

export interface UserUpdateManyDataInput {
  settings?: any | null
  firstName?: string | null
  lastName?: string | null
  email?: string | null
  username?: string | null
  lastLogin?: any | null
  deletedAt?: any | null
  position?: string | null
}

export interface UserUpdateManyInput {
  create?: UserCreateInput[] | null
  update?: UserUpdateWithWhereUniqueNestedInput[] | null
  upsert?: UserUpsertWithWhereUniqueNestedInput[] | null
  delete?: UserWhereUniqueInput[] | null
  connect?: UserWhereUniqueInput[] | null
  disconnect?: UserWhereUniqueInput[] | null
  deleteMany?: UserScalarWhereInput[] | null
  updateMany?: UserUpdateManyWithWhereNestedInput[] | null
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput
  data: UserUpdateManyDataInput
}

export interface UserUpdateManyWithoutTasksInput {
  create?: UserCreateWithoutTasksInput[] | null
  delete?: UserWhereUniqueInput[] | null
  connect?: UserWhereUniqueInput[] | null
  disconnect?: UserWhereUniqueInput[] | null
  update?: UserUpdateWithWhereUniqueWithoutTasksInput[] | null
  upsert?: UserUpsertWithWhereUniqueWithoutTasksInput[] | null
  deleteMany?: UserScalarWhereInput[] | null
  updateMany?: UserUpdateManyWithWhereNestedInput[] | null
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput | null
  update?: UserUpdateDataInput | null
  upsert?: UserUpsertNestedInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput
  data: UserUpdateDataInput
}

export interface UserUpdateWithWhereUniqueWithoutTasksInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutTasksDataInput
}

export interface UserUpdateWithoutTasksDataInput {
  settings?: any | null
  firstName?: string | null
  lastName?: string | null
  email?: string | null
  username?: string | null
  lastLogin?: any | null
  deletedAt?: any | null
  position?: string | null
  avatar?: FileUpdateOneInput | null
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserUpsertWithWhereUniqueWithoutTasksInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutTasksDataInput
  create: UserCreateWithoutTasksInput
}

export interface UserWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  tasks_every?: TaskWhereInput | null
  tasks_some?: TaskWhereInput | null
  tasks_none?: TaskWhereInput | null
  firstName?: string | null
  firstName_not?: string | null
  firstName_in?: string[] | null
  firstName_not_in?: string[] | null
  firstName_lt?: string | null
  firstName_lte?: string | null
  firstName_gt?: string | null
  firstName_gte?: string | null
  firstName_contains?: string | null
  firstName_not_contains?: string | null
  firstName_starts_with?: string | null
  firstName_not_starts_with?: string | null
  firstName_ends_with?: string | null
  firstName_not_ends_with?: string | null
  lastName?: string | null
  lastName_not?: string | null
  lastName_in?: string[] | null
  lastName_not_in?: string[] | null
  lastName_lt?: string | null
  lastName_lte?: string | null
  lastName_gt?: string | null
  lastName_gte?: string | null
  lastName_contains?: string | null
  lastName_not_contains?: string | null
  lastName_starts_with?: string | null
  lastName_not_starts_with?: string | null
  lastName_ends_with?: string | null
  lastName_not_ends_with?: string | null
  email?: string | null
  email_not?: string | null
  email_in?: string[] | null
  email_not_in?: string[] | null
  email_lt?: string | null
  email_lte?: string | null
  email_gt?: string | null
  email_gte?: string | null
  email_contains?: string | null
  email_not_contains?: string | null
  email_starts_with?: string | null
  email_not_starts_with?: string | null
  email_ends_with?: string | null
  email_not_ends_with?: string | null
  username?: string | null
  username_not?: string | null
  username_in?: string[] | null
  username_not_in?: string[] | null
  username_lt?: string | null
  username_lte?: string | null
  username_gt?: string | null
  username_gte?: string | null
  username_contains?: string | null
  username_not_contains?: string | null
  username_starts_with?: string | null
  username_not_starts_with?: string | null
  username_ends_with?: string | null
  username_not_ends_with?: string | null
  lastLogin?: any | null
  lastLogin_not?: any | null
  lastLogin_in?: any[] | null
  lastLogin_not_in?: any[] | null
  lastLogin_lt?: any | null
  lastLogin_lte?: any | null
  lastLogin_gt?: any | null
  lastLogin_gte?: any | null
  deletedAt?: any | null
  deletedAt_not?: any | null
  deletedAt_in?: any[] | null
  deletedAt_not_in?: any[] | null
  deletedAt_lt?: any | null
  deletedAt_lte?: any | null
  deletedAt_gt?: any | null
  deletedAt_gte?: any | null
  position?: string | null
  position_not?: string | null
  position_in?: string[] | null
  position_not_in?: string[] | null
  position_lt?: string | null
  position_lte?: string | null
  position_gt?: string | null
  position_gte?: string | null
  position_contains?: string | null
  position_not_contains?: string | null
  position_starts_with?: string | null
  position_not_starts_with?: string | null
  position_ends_with?: string | null
  position_not_ends_with?: string | null
  avatar?: FileWhereInput | null
  AND?: UserWhereInput[] | null
  OR?: UserWhereInput[] | null
  NOT?: UserWhereInput[] | null
}

export interface UserWhereUniqueInput {
  id?: string | null
  email?: string | null
}

export interface WorkflowCreateInput {
  name: string
  description?: string | null
  stages?: StageCreateManyInput | null
  disqualifications?: DisqualificationCreateManyInput | null
  fields?: FieldCreateManyInput | null
}

export interface WorkflowCreateManyInput {
  create?: WorkflowCreateInput[] | null
  connect?: WorkflowWhereUniqueInput[] | null
}

export interface WorkflowCreateOneInput {
  create?: WorkflowCreateInput | null
  connect?: WorkflowWhereUniqueInput | null
}

export interface WorkflowScalarWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  name?: string | null
  name_not?: string | null
  name_in?: string[] | null
  name_not_in?: string[] | null
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  AND?: WorkflowScalarWhereInput[] | null
  OR?: WorkflowScalarWhereInput[] | null
  NOT?: WorkflowScalarWhereInput[] | null
}

export interface WorkflowUpdateDataInput {
  name?: string | null
  description?: string | null
  stages?: StageUpdateManyInput | null
  disqualifications?: DisqualificationUpdateManyInput | null
  fields?: FieldUpdateManyInput | null
}

export interface WorkflowUpdateManyDataInput {
  name?: string | null
  description?: string | null
}

export interface WorkflowUpdateManyInput {
  create?: WorkflowCreateInput[] | null
  update?: WorkflowUpdateWithWhereUniqueNestedInput[] | null
  upsert?: WorkflowUpsertWithWhereUniqueNestedInput[] | null
  delete?: WorkflowWhereUniqueInput[] | null
  connect?: WorkflowWhereUniqueInput[] | null
  disconnect?: WorkflowWhereUniqueInput[] | null
  deleteMany?: WorkflowScalarWhereInput[] | null
  updateMany?: WorkflowUpdateManyWithWhereNestedInput[] | null
}

export interface WorkflowUpdateManyWithWhereNestedInput {
  where: WorkflowScalarWhereInput
  data: WorkflowUpdateManyDataInput
}

export interface WorkflowUpdateOneRequiredInput {
  create?: WorkflowCreateInput | null
  update?: WorkflowUpdateDataInput | null
  upsert?: WorkflowUpsertNestedInput | null
  connect?: WorkflowWhereUniqueInput | null
}

export interface WorkflowUpdateWithWhereUniqueNestedInput {
  where: WorkflowWhereUniqueInput
  data: WorkflowUpdateDataInput
}

export interface WorkflowUpsertNestedInput {
  update: WorkflowUpdateDataInput
  create: WorkflowCreateInput
}

export interface WorkflowUpsertWithWhereUniqueNestedInput {
  where: WorkflowWhereUniqueInput
  update: WorkflowUpdateDataInput
  create: WorkflowCreateInput
}

export interface WorkflowWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  name?: string | null
  name_not?: string | null
  name_in?: string[] | null
  name_not_in?: string[] | null
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  stages_every?: StageWhereInput | null
  stages_some?: StageWhereInput | null
  stages_none?: StageWhereInput | null
  disqualifications_every?: DisqualificationWhereInput | null
  disqualifications_some?: DisqualificationWhereInput | null
  disqualifications_none?: DisqualificationWhereInput | null
  fields_every?: FieldWhereInput | null
  fields_some?: FieldWhereInput | null
  fields_none?: FieldWhereInput | null
  AND?: WorkflowWhereInput[] | null
  OR?: WorkflowWhereInput[] | null
  NOT?: WorkflowWhereInput[] | null
}

export interface WorkflowWhereUniqueInput {
  id?: string | null
}

export interface WorkspaceCreateOneWithoutJobsInput {
  create?: WorkspaceCreateWithoutJobsInput | null
  connect?: WorkspaceWhereUniqueInput | null
}

export interface WorkspaceCreateWithoutJobsInput {
  users?: UserCreateManyInput | null
  candidates?: CandidateCreateManyInput | null
  settings?: any | null
  workflows?: WorkflowCreateManyInput | null
  invites?: InviteCreateManyInput | null
  name: string
}

export interface WorkspaceUpdateOneRequiredWithoutJobsInput {
  create?: WorkspaceCreateWithoutJobsInput | null
  update?: WorkspaceUpdateWithoutJobsDataInput | null
  upsert?: WorkspaceUpsertWithoutJobsInput | null
  connect?: WorkspaceWhereUniqueInput | null
}

export interface WorkspaceUpdateWithoutJobsDataInput {
  users?: UserUpdateManyInput | null
  candidates?: CandidateUpdateManyInput | null
  settings?: any | null
  workflows?: WorkflowUpdateManyInput | null
  invites?: InviteUpdateManyInput | null
  name?: string | null
}

export interface WorkspaceUpsertWithoutJobsInput {
  update: WorkspaceUpdateWithoutJobsDataInput
  create: WorkspaceCreateWithoutJobsInput
}

export interface WorkspaceWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  users_every?: UserWhereInput | null
  users_some?: UserWhereInput | null
  users_none?: UserWhereInput | null
  jobs_every?: JobWhereInput | null
  jobs_some?: JobWhereInput | null
  jobs_none?: JobWhereInput | null
  candidates_every?: CandidateWhereInput | null
  candidates_some?: CandidateWhereInput | null
  candidates_none?: CandidateWhereInput | null
  workflows_every?: WorkflowWhereInput | null
  workflows_some?: WorkflowWhereInput | null
  workflows_none?: WorkflowWhereInput | null
  invites_every?: InviteWhereInput | null
  invites_some?: InviteWhereInput | null
  invites_none?: InviteWhereInput | null
  name?: string | null
  name_not?: string | null
  name_in?: string[] | null
  name_not_in?: string[] | null
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  AND?: WorkspaceWhereInput[] | null
  OR?: WorkspaceWhereInput[] | null
  NOT?: WorkspaceWhereInput[] | null
}

export interface WorkspaceWhereUniqueInput {
  id?: string | null
}

//==============================================================
// END Enums and Input Objects
//==============================================================
