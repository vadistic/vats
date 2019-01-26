// THIS FILE HAS BEEN AUTO-GENERATED BY "graphql-cli-generate-fragments"
// DO NOT EDIT THIS FILE DIRECTLY

export const ApplicationFragment = `fragment Application on Application {
  createdAt
  id
  updatedAt
  type
  disqualification {
    ...DisqualificationInstanceNoNesting
  }
  stage {
    ...StageNoNesting
  }
  job {
    ...JobNoNesting
  }
  candidate {
    ...CandidateNoNesting
  }
}
`

export const DisqualificationInstanceFragment = `fragment DisqualificationInstance on DisqualificationInstance {
  id
  createdAt
  updatedAt
  disqualification {
    ...DisqualificationNoNesting
  }
  createdBy {
    ...UserNoNesting
  }
  content
}
`

export const DisqualificationFragment = `fragment Disqualification on Disqualification {
  id
  createdAt
  updatedAt
  name
  description
}
`

export const UserFragment = `fragment User on User {
  id
  createdAt
  updatedAt
  tasks {
    ...TaskNoNesting
  }
  firstName
  lastName
  email
  username
  lastLogin
  deletedAt
  position
  avatar {
    ...FileNoNesting
  }
}
`

export const TaskFragment = `fragment Task on Task {
  id
  createdAt
  updatedAt
  owners {
    ...UserNoNesting
  }
  candidate {
    ...CandidateNoNesting
  }
  title
  description
  dueAt
}
`

export const CandidateFragment = `fragment Candidate on Candidate {
  id
  createdAt
  updatedAt
  firstName
  lastName
  avatar {
    ...FileNoNesting
  }
  metaCompany
  metaHeadline
  metaPosition
  resumesFile {
    ...FileNoNesting
  }
  coverLettersFile {
    ...FileNoNesting
  }
  tags {
    ...TagNoNesting
  }
  fields {
    ...FieldInstanceNoNesting
  }
  tasks {
    ...TaskNoNesting
  }
  applications {
    ...ApplicationNoNesting
  }
  comments {
    ...CommentNoNesting
  }
}
`

export const FileFragment = `fragment File on File {
  id
  createdAt
  updatedAt
  size
  type
  name
  url
}
`

export const TagFragment = `fragment Tag on Tag {
  id
  createdAt
  updatedAt
  label
}
`

export const FieldInstanceFragment = `fragment FieldInstance on FieldInstance {
  id
  createdAt
  updatedAt
  field {
    ...FieldNoNesting
  }
  value
}
`

export const FieldFragment = `fragment Field on Field {
  id
  createdAt
  updatedAt
  type
  label
}
`

export const CommentFragment = `fragment Comment on Comment {
  id
  createdAt
  updatedAt
  createdBy {
    ...UserNoNesting
  }
  parent {
    ...CommentNoNesting
  }
  content
}
`

export const StageFragment = `fragment Stage on Stage {
  id
  createdAt
  updatedAt
  name
  description
  type
}
`

export const JobFragment = `fragment Job on Job {
  id
  createdAt
  updatedAt
  workspace {
    ...WorkspaceNoNesting
  }
  applications {
    ...ApplicationNoNesting
  }
  workflow {
    ...WorkflowNoNesting
  }
  comments {
    ...CommentNoNesting
  }
  type
  department
  locations {
    ...LocationNoNesting
  }
  name
  description
  requirements
}
`

export const WorkspaceFragment = `fragment Workspace on Workspace {
  id
  createdAt
  updatedAt
  users {
    ...UserNoNesting
  }
  jobs {
    ...JobNoNesting
  }
  candidates {
    ...CandidateNoNesting
  }
  workflows {
    ...WorkflowNoNesting
  }
  invites {
    ...InviteNoNesting
  }
  tags {
    ...TagNoNesting
  }
  name
}
`

export const WorkflowFragment = `fragment Workflow on Workflow {
  id
  createdAt
  updatedAt
  name
  description
  stages {
    ...StageNoNesting
  }
  disqualifications {
    ...DisqualificationNoNesting
  }
  fields {
    ...FieldNoNesting
  }
}
`

export const InviteFragment = `fragment Invite on Invite {
  id
  createdAt
  updatedAt
  email
  expireAt
  invitedBy {
    ...UserNoNesting
  }
}
`

export const LocationFragment = `fragment Location on Location {
  id
  country
  region
  city
  zip
}
`

export const AccessPayloadFragment = `fragment AccessPayload on AccessPayload {
  token
}
`

export const AuthPayloadFragment = `fragment AuthPayload on AuthPayload {
  token
  refresh
}
`


export const ApplicationNoNestingFragment = `fragment ApplicationNoNesting on Application {
  createdAt
  id
  updatedAt
  type
}
`

export const DisqualificationInstanceNoNestingFragment = `fragment DisqualificationInstanceNoNesting on DisqualificationInstance {
  id
  createdAt
  updatedAt
  content
}
`

export const DisqualificationNoNestingFragment = `fragment DisqualificationNoNesting on Disqualification {
  id
  createdAt
  updatedAt
  name
  description
}
`

export const UserNoNestingFragment = `fragment UserNoNesting on User {
  id
  createdAt
  updatedAt
  firstName
  lastName
  email
  username
  lastLogin
  deletedAt
  position
}
`

export const TaskNoNestingFragment = `fragment TaskNoNesting on Task {
  id
  createdAt
  updatedAt
  title
  description
  dueAt
}
`

export const CandidateNoNestingFragment = `fragment CandidateNoNesting on Candidate {
  id
  createdAt
  updatedAt
  firstName
  lastName
  metaCompany
  metaHeadline
  metaPosition
}
`

export const FileNoNestingFragment = `fragment FileNoNesting on File {
  id
  createdAt
  updatedAt
  size
  type
  name
  url
}
`

export const TagNoNestingFragment = `fragment TagNoNesting on Tag {
  id
  createdAt
  updatedAt
  label
}
`

export const FieldInstanceNoNestingFragment = `fragment FieldInstanceNoNesting on FieldInstance {
  id
  createdAt
  updatedAt
  value
}
`

export const FieldNoNestingFragment = `fragment FieldNoNesting on Field {
  id
  createdAt
  updatedAt
  type
  label
}
`

export const CommentNoNestingFragment = `fragment CommentNoNesting on Comment {
  id
  createdAt
  updatedAt
  content
}
`

export const StageNoNestingFragment = `fragment StageNoNesting on Stage {
  id
  createdAt
  updatedAt
  name
  description
  type
}
`

export const JobNoNestingFragment = `fragment JobNoNesting on Job {
  id
  createdAt
  updatedAt
  type
  department
  name
  description
  requirements
}
`

export const WorkspaceNoNestingFragment = `fragment WorkspaceNoNesting on Workspace {
  id
  createdAt
  updatedAt
  name
}
`

export const WorkflowNoNestingFragment = `fragment WorkflowNoNesting on Workflow {
  id
  createdAt
  updatedAt
  name
  description
}
`

export const InviteNoNestingFragment = `fragment InviteNoNesting on Invite {
  id
  createdAt
  updatedAt
  email
  expireAt
}
`

export const LocationNoNestingFragment = `fragment LocationNoNesting on Location {
  id
  country
  region
  city
  zip
}
`

export const AccessPayloadNoNestingFragment = `fragment AccessPayloadNoNesting on AccessPayload {
  token
}
`

export const AuthPayloadNoNestingFragment = `fragment AuthPayloadNoNesting on AuthPayload {
  token
  refresh
}
`


export const ApplicationDeepNestingFragment = `fragment ApplicationDeepNesting on Application {
  createdAt
  id
  updatedAt
  type
  disqualification {
    ...DisqualificationInstanceDeepNesting
  }
  stage {
    ...StageDeepNesting
  }
  job {
    ...JobDeepNesting
  }
  candidate {
    ...CandidateDeepNesting
  }
}
`

export const DisqualificationInstanceDeepNestingFragment = `fragment DisqualificationInstanceDeepNesting on DisqualificationInstance {
  id
  createdAt
  updatedAt
  disqualification {
    ...DisqualificationDeepNesting
  }
  createdBy {
    ...UserDeepNesting
  }
  content
}
`

export const DisqualificationDeepNestingFragment = `fragment DisqualificationDeepNesting on Disqualification {
  id
  createdAt
  updatedAt
  name
  description
}
`

export const UserDeepNestingFragment = `fragment UserDeepNesting on User {
  id
  createdAt
  updatedAt
  tasks {
    ...TaskDeepNesting
  }
  firstName
  lastName
  email
  username
  lastLogin
  deletedAt
  position
  avatar {
    ...FileDeepNesting
  }
}
`

export const TaskDeepNestingFragment = `fragment TaskDeepNesting on Task {
  id
  createdAt
  updatedAt
  owners {
    ...UserDeepNesting
  }
  candidate {
    ...CandidateDeepNesting
  }
  title
  description
  dueAt
}
`

export const CandidateDeepNestingFragment = `fragment CandidateDeepNesting on Candidate {
  id
  createdAt
  updatedAt
  firstName
  lastName
  avatar {
    ...FileDeepNesting
  }
  metaCompany
  metaHeadline
  metaPosition
  resumesFile {
    ...FileDeepNesting
  }
  coverLettersFile {
    ...FileDeepNesting
  }
  tags {
    ...TagDeepNesting
  }
  fields {
    ...FieldInstanceDeepNesting
  }
  tasks {
    ...TaskDeepNesting
  }
  applications {
    ...ApplicationDeepNesting
  }
  comments {
    ...CommentDeepNesting
  }
}
`

export const FileDeepNestingFragment = `fragment FileDeepNesting on File {
  id
  createdAt
  updatedAt
  size
  type
  name
  url
}
`

export const TagDeepNestingFragment = `fragment TagDeepNesting on Tag {
  id
  createdAt
  updatedAt
  label
}
`

export const FieldInstanceDeepNestingFragment = `fragment FieldInstanceDeepNesting on FieldInstance {
  id
  createdAt
  updatedAt
  field {
    ...FieldDeepNesting
  }
  value
}
`

export const FieldDeepNestingFragment = `fragment FieldDeepNesting on Field {
  id
  createdAt
  updatedAt
  type
  label
}
`

export const CommentDeepNestingFragment = `fragment CommentDeepNesting on Comment {
  id
  createdAt
  updatedAt
  createdBy {
    ...UserDeepNesting
  }
  parent {
    ...CommentDeepNesting
  }
  content
}
`

export const StageDeepNestingFragment = `fragment StageDeepNesting on Stage {
  id
  createdAt
  updatedAt
  name
  description
  type
}
`

export const JobDeepNestingFragment = `fragment JobDeepNesting on Job {
  id
  createdAt
  updatedAt
  workspace {
    ...WorkspaceDeepNesting
  }
  applications {
    ...ApplicationDeepNesting
  }
  workflow {
    ...WorkflowDeepNesting
  }
  comments {
    ...CommentDeepNesting
  }
  type
  department
  locations {
    ...LocationDeepNesting
  }
  name
  description
  requirements
}
`

export const WorkspaceDeepNestingFragment = `fragment WorkspaceDeepNesting on Workspace {
  id
  createdAt
  updatedAt
  users {
    ...UserDeepNesting
  }
  jobs {
    ...JobDeepNesting
  }
  candidates {
    ...CandidateDeepNesting
  }
  workflows {
    ...WorkflowDeepNesting
  }
  invites {
    ...InviteDeepNesting
  }
  tags {
    ...TagDeepNesting
  }
  name
}
`

export const WorkflowDeepNestingFragment = `fragment WorkflowDeepNesting on Workflow {
  id
  createdAt
  updatedAt
  name
  description
  stages {
    ...StageDeepNesting
  }
  disqualifications {
    ...DisqualificationDeepNesting
  }
  fields {
    ...FieldDeepNesting
  }
}
`

export const InviteDeepNestingFragment = `fragment InviteDeepNesting on Invite {
  id
  createdAt
  updatedAt
  email
  expireAt
  invitedBy {
    ...UserDeepNesting
  }
}
`

export const LocationDeepNestingFragment = `fragment LocationDeepNesting on Location {
  id
  country
  region
  city
  zip
}
`

export const AccessPayloadDeepNestingFragment = `fragment AccessPayloadDeepNesting on AccessPayload {
  token
}
`

export const AuthPayloadDeepNestingFragment = `fragment AuthPayloadDeepNesting on AuthPayload {
  token
  refresh
}
`

