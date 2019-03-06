// THIS FILE HAS BEEN AUTO-GENERATED BY "graphql-cli-generate-fragments"
// DO NOT EDIT THIS FILE DIRECTLY

import gql from 'graphql-tag'

export const ApplicationNoNestingFragment = gql`
  fragment ApplicationNoNesting on Application {
    createdAt
    id
    updatedAt
    type
  }
`

export const DisqualificationInstanceNoNestingFragment = gql`
  fragment DisqualificationInstanceNoNesting on DisqualificationInstance {
    id
    createdAt
    updatedAt
    content
  }
`

export const DisqualificationNoNestingFragment = gql`
  fragment DisqualificationNoNesting on Disqualification {
    id
    createdAt
    updatedAt
    name
    description
  }
`

export const UserNoNestingFragment = gql`
  fragment UserNoNesting on User {
    id
    createdAt
    updatedAt
    settings
    firstName
    lastName
    email
    username
    lastLogin
    deletedAt
    position
  }
`

export const TaskNoNestingFragment = gql`
  fragment TaskNoNesting on Task {
    id
    createdAt
    updatedAt
    title
    description
    dueAt
  }
`

export const CandidateNoNestingFragment = gql`
  fragment CandidateNoNesting on Candidate {
    id
    createdAt
    updatedAt
    firstName
    lastName
    company
    headline
    position
  }
`

export const FileNoNestingFragment = gql`
  fragment FileNoNesting on File {
    id
    createdAt
    updatedAt
    size
    type
    name
    url
  }
`

export const TagNoNestingFragment = gql`
  fragment TagNoNesting on Tag {
    id
    createdAt
    updatedAt
    label
    description
  }
`

export const SourceNoNestingFragment = gql`
  fragment SourceNoNesting on Source {
    id
    createdAt
    updatedAt
    label
    description
  }
`

export const FieldInstanceNoNestingFragment = gql`
  fragment FieldInstanceNoNesting on FieldInstance {
    id
    createdAt
    updatedAt
    value
  }
`

export const FieldNoNestingFragment = gql`
  fragment FieldNoNesting on Field {
    id
    createdAt
    updatedAt
    type
    label
    description
  }
`

export const CommentNoNestingFragment = gql`
  fragment CommentNoNesting on Comment {
    id
    createdAt
    updatedAt
    content
  }
`

export const StageNoNestingFragment = gql`
  fragment StageNoNesting on Stage {
    id
    createdAt
    updatedAt
    name
    description
    type
  }
`

export const JobNoNestingFragment = gql`
  fragment JobNoNesting on Job {
    id
    createdAt
    updatedAt
    type
    department
    name
    excerpt
    companyDescription
    description
    requirements
  }
`

export const WorkspaceNoNestingFragment = gql`
  fragment WorkspaceNoNesting on Workspace {
    id
    createdAt
    updatedAt
    settings
    name
  }
`

export const WorkflowNoNestingFragment = gql`
  fragment WorkflowNoNesting on Workflow {
    id
    createdAt
    updatedAt
    name
    description
  }
`

export const InviteNoNestingFragment = gql`
  fragment InviteNoNesting on Invite {
    id
    createdAt
    updatedAt
    email
    expireAt
  }
`

export const LocationNoNestingFragment = gql`
  fragment LocationNoNesting on Location {
    id
    createdAt
    updatedAt
    country
    region
    city
    zip
  }
`

export const PageInfoNoNestingFragment = gql`
  fragment PageInfoNoNesting on PageInfo {
    hasNextPage
    hasPreviousPage
    startCursor
    endCursor
  }
`

export const ApplicationEdgeNoNestingFragment = gql`
  fragment ApplicationEdgeNoNesting on ApplicationEdge {
    cursor
  }
`

export const AggregateApplicationNoNestingFragment = gql`
  fragment AggregateApplicationNoNesting on AggregateApplication {
    count
  }
`

export const CandidateEdgeNoNestingFragment = gql`
  fragment CandidateEdgeNoNesting on CandidateEdge {
    cursor
  }
`

export const AggregateCandidateNoNestingFragment = gql`
  fragment AggregateCandidateNoNesting on AggregateCandidate {
    count
  }
`

export const JobEdgeNoNestingFragment = gql`
  fragment JobEdgeNoNesting on JobEdge {
    cursor
  }
`

export const AggregateJobNoNestingFragment = gql`
  fragment AggregateJobNoNesting on AggregateJob {
    count
  }
`

export const SourceEdgeNoNestingFragment = gql`
  fragment SourceEdgeNoNesting on SourceEdge {
    cursor
  }
`

export const AggregateSourceNoNestingFragment = gql`
  fragment AggregateSourceNoNesting on AggregateSource {
    count
  }
`

export const TagEdgeNoNestingFragment = gql`
  fragment TagEdgeNoNesting on TagEdge {
    cursor
  }
`

export const AggregateTagNoNestingFragment = gql`
  fragment AggregateTagNoNesting on AggregateTag {
    count
  }
`

export const TaskEdgeNoNestingFragment = gql`
  fragment TaskEdgeNoNesting on TaskEdge {
    cursor
  }
`

export const AggregateTaskNoNestingFragment = gql`
  fragment AggregateTaskNoNesting on AggregateTask {
    count
  }
`

export const UserEdgeNoNestingFragment = gql`
  fragment UserEdgeNoNesting on UserEdge {
    cursor
  }
`

export const AggregateUserNoNestingFragment = gql`
  fragment AggregateUserNoNesting on AggregateUser {
    count
  }
`

export const BatchPayloadNoNestingFragment = gql`
  fragment BatchPayloadNoNesting on BatchPayload {
    count
  }
`

export const AccessPayloadNoNestingFragment = gql`
  fragment AccessPayloadNoNesting on AccessPayload {
    token
  }
`

export const AuthPayloadNoNestingFragment = gql`
  fragment AuthPayloadNoNesting on AuthPayload {
    token
    refresh
  }
`

export const ApplicationFragment = gql`
  fragment Application on Application {
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

  ${DisqualificationInstanceNoNestingFragment}
  ${StageNoNestingFragment}
  ${JobNoNestingFragment}
  ${CandidateNoNestingFragment}
`

export const DisqualificationInstanceFragment = gql`
  fragment DisqualificationInstance on DisqualificationInstance {
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

  ${DisqualificationNoNestingFragment}
  ${UserNoNestingFragment}
`

export const DisqualificationFragment = gql`
  fragment Disqualification on Disqualification {
    id
    createdAt
    updatedAt
    name
    description
  }
`

export const UserFragment = gql`
  fragment User on User {
    id
    createdAt
    updatedAt
    settings
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

  ${TaskNoNestingFragment}
  ${FileNoNestingFragment}
`

export const TaskFragment = gql`
  fragment Task on Task {
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

  ${UserNoNestingFragment}
  ${CandidateNoNestingFragment}
`

export const CandidateFragment = gql`
  fragment Candidate on Candidate {
    id
    createdAt
    updatedAt
    firstName
    lastName
    avatar {
      ...FileNoNesting
    }
    company
    headline
    position
    resumesFile {
      ...FileNoNesting
    }
    coverLettersFile {
      ...FileNoNesting
    }
    tags {
      ...TagNoNesting
    }
    sources {
      ...SourceNoNesting
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

  ${FileNoNestingFragment}
  ${FileNoNestingFragment}
  ${FileNoNestingFragment}
  ${TagNoNestingFragment}
  ${SourceNoNestingFragment}
  ${FieldInstanceNoNestingFragment}
  ${TaskNoNestingFragment}
  ${ApplicationNoNestingFragment}
  ${CommentNoNestingFragment}
`

export const FileFragment = gql`
  fragment File on File {
    id
    createdAt
    updatedAt
    size
    type
    name
    url
  }
`

export const TagFragment = gql`
  fragment Tag on Tag {
    id
    createdAt
    updatedAt
    label
    description
  }
`

export const SourceFragment = gql`
  fragment Source on Source {
    id
    createdAt
    updatedAt
    label
    description
  }
`

export const FieldInstanceFragment = gql`
  fragment FieldInstance on FieldInstance {
    id
    createdAt
    updatedAt
    field {
      ...FieldNoNesting
    }
    value
  }

  ${FieldNoNestingFragment}
`

export const FieldFragment = gql`
  fragment Field on Field {
    id
    createdAt
    updatedAt
    type
    label
    description
  }
`

export const CommentFragment = gql`
  fragment Comment on Comment {
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

  ${UserNoNestingFragment}
  ${CommentNoNestingFragment}
`

export const StageFragment = gql`
  fragment Stage on Stage {
    id
    createdAt
    updatedAt
    name
    description
    type
  }
`

export const JobFragment = gql`
  fragment Job on Job {
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
    excerpt
    companyDescription
    description
    requirements
  }

  ${WorkspaceNoNestingFragment}
  ${ApplicationNoNestingFragment}
  ${WorkflowNoNestingFragment}
  ${CommentNoNestingFragment}
  ${LocationNoNestingFragment}
`

export const WorkspaceFragment = gql`
  fragment Workspace on Workspace {
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
    settings
    workflows {
      ...WorkflowNoNesting
    }
    invites {
      ...InviteNoNesting
    }
    name
  }

  ${UserNoNestingFragment}
  ${JobNoNestingFragment}
  ${CandidateNoNestingFragment}
  ${WorkflowNoNestingFragment}
  ${InviteNoNestingFragment}
`

export const WorkflowFragment = gql`
  fragment Workflow on Workflow {
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

  ${StageNoNestingFragment}
  ${DisqualificationNoNestingFragment}
  ${FieldNoNestingFragment}
`

export const InviteFragment = gql`
  fragment Invite on Invite {
    id
    createdAt
    updatedAt
    email
    expireAt
    invitedBy {
      ...UserNoNesting
    }
  }

  ${UserNoNestingFragment}
`

export const LocationFragment = gql`
  fragment Location on Location {
    id
    createdAt
    updatedAt
    country
    region
    city
    zip
  }
`

export const ApplicationConnectionFragment = gql`
  fragment ApplicationConnection on ApplicationConnection {
    pageInfo {
      ...PageInfoNoNesting
    }
    edges {
      ...ApplicationEdgeNoNesting
    }
    aggregate {
      ...AggregateApplicationNoNesting
    }
  }

  ${PageInfoNoNestingFragment}
  ${ApplicationEdgeNoNestingFragment}
  ${AggregateApplicationNoNestingFragment}
`

export const PageInfoFragment = gql`
  fragment PageInfo on PageInfo {
    hasNextPage
    hasPreviousPage
    startCursor
    endCursor
  }
`

export const ApplicationEdgeFragment = gql`
  fragment ApplicationEdge on ApplicationEdge {
    node {
      ...ApplicationNoNesting
    }
    cursor
  }

  ${ApplicationNoNestingFragment}
`

export const AggregateApplicationFragment = gql`
  fragment AggregateApplication on AggregateApplication {
    count
  }
`

export const CandidateConnectionFragment = gql`
  fragment CandidateConnection on CandidateConnection {
    pageInfo {
      ...PageInfoNoNesting
    }
    edges {
      ...CandidateEdgeNoNesting
    }
    aggregate {
      ...AggregateCandidateNoNesting
    }
  }

  ${PageInfoNoNestingFragment}
  ${CandidateEdgeNoNestingFragment}
  ${AggregateCandidateNoNestingFragment}
`

export const CandidateEdgeFragment = gql`
  fragment CandidateEdge on CandidateEdge {
    node {
      ...CandidateNoNesting
    }
    cursor
  }

  ${CandidateNoNestingFragment}
`

export const AggregateCandidateFragment = gql`
  fragment AggregateCandidate on AggregateCandidate {
    count
  }
`

export const JobConnectionFragment = gql`
  fragment JobConnection on JobConnection {
    pageInfo {
      ...PageInfoNoNesting
    }
    edges {
      ...JobEdgeNoNesting
    }
    aggregate {
      ...AggregateJobNoNesting
    }
  }

  ${PageInfoNoNestingFragment}
  ${JobEdgeNoNestingFragment}
  ${AggregateJobNoNestingFragment}
`

export const JobEdgeFragment = gql`
  fragment JobEdge on JobEdge {
    node {
      ...JobNoNesting
    }
    cursor
  }

  ${JobNoNestingFragment}
`

export const AggregateJobFragment = gql`
  fragment AggregateJob on AggregateJob {
    count
  }
`

export const SourceConnectionFragment = gql`
  fragment SourceConnection on SourceConnection {
    pageInfo {
      ...PageInfoNoNesting
    }
    edges {
      ...SourceEdgeNoNesting
    }
    aggregate {
      ...AggregateSourceNoNesting
    }
  }

  ${PageInfoNoNestingFragment}
  ${SourceEdgeNoNestingFragment}
  ${AggregateSourceNoNestingFragment}
`

export const SourceEdgeFragment = gql`
  fragment SourceEdge on SourceEdge {
    node {
      ...SourceNoNesting
    }
    cursor
  }

  ${SourceNoNestingFragment}
`

export const AggregateSourceFragment = gql`
  fragment AggregateSource on AggregateSource {
    count
  }
`

export const TagConnectionFragment = gql`
  fragment TagConnection on TagConnection {
    pageInfo {
      ...PageInfoNoNesting
    }
    edges {
      ...TagEdgeNoNesting
    }
    aggregate {
      ...AggregateTagNoNesting
    }
  }

  ${PageInfoNoNestingFragment}
  ${TagEdgeNoNestingFragment}
  ${AggregateTagNoNestingFragment}
`

export const TagEdgeFragment = gql`
  fragment TagEdge on TagEdge {
    node {
      ...TagNoNesting
    }
    cursor
  }

  ${TagNoNestingFragment}
`

export const AggregateTagFragment = gql`
  fragment AggregateTag on AggregateTag {
    count
  }
`

export const TaskConnectionFragment = gql`
  fragment TaskConnection on TaskConnection {
    pageInfo {
      ...PageInfoNoNesting
    }
    edges {
      ...TaskEdgeNoNesting
    }
    aggregate {
      ...AggregateTaskNoNesting
    }
  }

  ${PageInfoNoNestingFragment}
  ${TaskEdgeNoNestingFragment}
  ${AggregateTaskNoNestingFragment}
`

export const TaskEdgeFragment = gql`
  fragment TaskEdge on TaskEdge {
    node {
      ...TaskNoNesting
    }
    cursor
  }

  ${TaskNoNestingFragment}
`

export const AggregateTaskFragment = gql`
  fragment AggregateTask on AggregateTask {
    count
  }
`

export const UserConnectionFragment = gql`
  fragment UserConnection on UserConnection {
    pageInfo {
      ...PageInfoNoNesting
    }
    edges {
      ...UserEdgeNoNesting
    }
    aggregate {
      ...AggregateUserNoNesting
    }
  }

  ${PageInfoNoNestingFragment}
  ${UserEdgeNoNestingFragment}
  ${AggregateUserNoNestingFragment}
`

export const UserEdgeFragment = gql`
  fragment UserEdge on UserEdge {
    node {
      ...UserNoNesting
    }
    cursor
  }

  ${UserNoNestingFragment}
`

export const AggregateUserFragment = gql`
  fragment AggregateUser on AggregateUser {
    count
  }
`

export const BatchPayloadFragment = gql`
  fragment BatchPayload on BatchPayload {
    count
  }
`

export const AccessPayloadFragment = gql`
  fragment AccessPayload on AccessPayload {
    token
  }
`

export const AuthPayloadFragment = gql`
  fragment AuthPayload on AuthPayload {
    token
    refresh
  }
`