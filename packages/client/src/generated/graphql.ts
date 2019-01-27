/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PersonaFixtureQuery
// ====================================================

export interface PersonaFixtureQuery_user_tasks {
  __typename: "Task";
  id: string;
  createdAt: any;
  updatedAt: any;
  title: string | null;
  description: string | null;
  dueAt: any | null;
}

export interface PersonaFixtureQuery_user_avatar {
  __typename: "File";
  id: string;
  createdAt: any;
  updatedAt: any;
  size: number;
  type: string;
  name: string;
  url: string;
}

export interface PersonaFixtureQuery_user {
  __typename: "User";
  id: string;
  createdAt: any;
  updatedAt: any;
  tasks: PersonaFixtureQuery_user_tasks[] | null;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  lastLogin: any | null;
  deletedAt: any | null;
  position: string | null;
  avatar: PersonaFixtureQuery_user_avatar | null;
}

export interface PersonaFixtureQuery {
  user: PersonaFixtureQuery_user | null;
}

export interface PersonaFixtureQueryVariables {
  id: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ApplicationNoNesting
// ====================================================

export interface ApplicationNoNesting {
  __typename: "Application";
  createdAt: any;
  id: string;
  updatedAt: any;
  type: ApplicationType;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: DisqualificationInstanceNoNesting
// ====================================================

export interface DisqualificationInstanceNoNesting {
  __typename: "DisqualificationInstance";
  id: string;
  createdAt: any;
  updatedAt: any;
  content: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: DisqualificationNoNesting
// ====================================================

export interface DisqualificationNoNesting {
  __typename: "Disqualification";
  id: string;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserNoNesting
// ====================================================

export interface UserNoNesting {
  __typename: "User";
  id: string;
  createdAt: any;
  updatedAt: any;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  lastLogin: any | null;
  deletedAt: any | null;
  position: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TaskNoNesting
// ====================================================

export interface TaskNoNesting {
  __typename: "Task";
  id: string;
  createdAt: any;
  updatedAt: any;
  title: string | null;
  description: string | null;
  dueAt: any | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CandidateNoNesting
// ====================================================

export interface CandidateNoNesting {
  __typename: "Candidate";
  id: string;
  createdAt: any;
  updatedAt: any;
  firstName: string;
  lastName: string;
  metaCompany: string | null;
  metaHeadline: string | null;
  metaPosition: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FileNoNesting
// ====================================================

export interface FileNoNesting {
  __typename: "File";
  id: string;
  createdAt: any;
  updatedAt: any;
  size: number;
  type: string;
  name: string;
  url: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TagNoNesting
// ====================================================

export interface TagNoNesting {
  __typename: "Tag";
  id: string;
  createdAt: any;
  updatedAt: any;
  label: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FieldInstanceNoNesting
// ====================================================

export interface FieldInstanceNoNesting {
  __typename: "FieldInstance";
  id: string;
  createdAt: any;
  updatedAt: any;
  value: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FieldNoNesting
// ====================================================

export interface FieldNoNesting {
  __typename: "Field";
  id: string;
  createdAt: any;
  updatedAt: any;
  type: FieldType;
  label: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CommentNoNesting
// ====================================================

export interface CommentNoNesting {
  __typename: "Comment";
  id: string;
  createdAt: any;
  updatedAt: any;
  content: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: StageNoNesting
// ====================================================

export interface StageNoNesting {
  __typename: "Stage";
  id: string;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  type: StageType;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: JobNoNesting
// ====================================================

export interface JobNoNesting {
  __typename: "Job";
  id: string;
  createdAt: any;
  updatedAt: any;
  type: JobType;
  department: string | null;
  name: string;
  description: string | null;
  requirements: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: WorkspaceNoNesting
// ====================================================

export interface WorkspaceNoNesting {
  __typename: "Workspace";
  id: string;
  createdAt: any;
  updatedAt: any;
  name: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: WorkflowNoNesting
// ====================================================

export interface WorkflowNoNesting {
  __typename: "Workflow";
  id: string;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: InviteNoNesting
// ====================================================

export interface InviteNoNesting {
  __typename: "Invite";
  id: string;
  createdAt: any;
  updatedAt: any;
  email: string;
  expireAt: any;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: LocationNoNesting
// ====================================================

export interface LocationNoNesting {
  __typename: "Location";
  id: string;
  country: string;
  region: string;
  city: string;
  zip: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AccessPayloadNoNesting
// ====================================================

export interface AccessPayloadNoNesting {
  __typename: "AccessPayload";
  token: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AuthPayloadNoNesting
// ====================================================

export interface AuthPayloadNoNesting {
  __typename: "AuthPayload";
  token: string;
  refresh: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Application
// ====================================================

export interface Application_disqualification {
  __typename: "DisqualificationInstance";
  id: string;
  createdAt: any;
  updatedAt: any;
  content: string | null;
}

export interface Application_stage {
  __typename: "Stage";
  id: string;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  type: StageType;
}

export interface Application_job {
  __typename: "Job";
  id: string;
  createdAt: any;
  updatedAt: any;
  type: JobType;
  department: string | null;
  name: string;
  description: string | null;
  requirements: string | null;
}

export interface Application_candidate {
  __typename: "Candidate";
  id: string;
  createdAt: any;
  updatedAt: any;
  firstName: string;
  lastName: string;
  metaCompany: string | null;
  metaHeadline: string | null;
  metaPosition: string | null;
}

export interface Application {
  __typename: "Application";
  createdAt: any;
  id: string;
  updatedAt: any;
  type: ApplicationType;
  disqualification: Application_disqualification | null;
  stage: Application_stage;
  job: Application_job;
  candidate: Application_candidate;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: DisqualificationInstance
// ====================================================

export interface DisqualificationInstance_disqualification {
  __typename: "Disqualification";
  id: string;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
}

export interface DisqualificationInstance_createdBy {
  __typename: "User";
  id: string;
  createdAt: any;
  updatedAt: any;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  lastLogin: any | null;
  deletedAt: any | null;
  position: string | null;
}

export interface DisqualificationInstance {
  __typename: "DisqualificationInstance";
  id: string;
  createdAt: any;
  updatedAt: any;
  disqualification: DisqualificationInstance_disqualification;
  createdBy: DisqualificationInstance_createdBy;
  content: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Disqualification
// ====================================================

export interface Disqualification {
  __typename: "Disqualification";
  id: string;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: User
// ====================================================

export interface User_tasks {
  __typename: "Task";
  id: string;
  createdAt: any;
  updatedAt: any;
  title: string | null;
  description: string | null;
  dueAt: any | null;
}

export interface User_avatar {
  __typename: "File";
  id: string;
  createdAt: any;
  updatedAt: any;
  size: number;
  type: string;
  name: string;
  url: string;
}

export interface User {
  __typename: "User";
  id: string;
  createdAt: any;
  updatedAt: any;
  tasks: User_tasks[] | null;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  lastLogin: any | null;
  deletedAt: any | null;
  position: string | null;
  avatar: User_avatar | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Task
// ====================================================

export interface Task_owners {
  __typename: "User";
  id: string;
  createdAt: any;
  updatedAt: any;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  lastLogin: any | null;
  deletedAt: any | null;
  position: string | null;
}

export interface Task_candidate {
  __typename: "Candidate";
  id: string;
  createdAt: any;
  updatedAt: any;
  firstName: string;
  lastName: string;
  metaCompany: string | null;
  metaHeadline: string | null;
  metaPosition: string | null;
}

export interface Task {
  __typename: "Task";
  id: string;
  createdAt: any;
  updatedAt: any;
  owners: Task_owners[] | null;
  candidate: Task_candidate | null;
  title: string | null;
  description: string | null;
  dueAt: any | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Candidate
// ====================================================

export interface Candidate_avatar {
  __typename: "File";
  id: string;
  createdAt: any;
  updatedAt: any;
  size: number;
  type: string;
  name: string;
  url: string;
}

export interface Candidate_resumesFile {
  __typename: "File";
  id: string;
  createdAt: any;
  updatedAt: any;
  size: number;
  type: string;
  name: string;
  url: string;
}

export interface Candidate_coverLettersFile {
  __typename: "File";
  id: string;
  createdAt: any;
  updatedAt: any;
  size: number;
  type: string;
  name: string;
  url: string;
}

export interface Candidate_tags {
  __typename: "Tag";
  id: string;
  createdAt: any;
  updatedAt: any;
  label: string;
}

export interface Candidate_fields {
  __typename: "FieldInstance";
  id: string;
  createdAt: any;
  updatedAt: any;
  value: string | null;
}

export interface Candidate_tasks {
  __typename: "Task";
  id: string;
  createdAt: any;
  updatedAt: any;
  title: string | null;
  description: string | null;
  dueAt: any | null;
}

export interface Candidate_applications {
  __typename: "Application";
  createdAt: any;
  id: string;
  updatedAt: any;
  type: ApplicationType;
}

export interface Candidate_comments {
  __typename: "Comment";
  id: string;
  createdAt: any;
  updatedAt: any;
  content: string;
}

export interface Candidate {
  __typename: "Candidate";
  id: string;
  createdAt: any;
  updatedAt: any;
  firstName: string;
  lastName: string;
  avatar: Candidate_avatar | null;
  metaCompany: string | null;
  metaHeadline: string | null;
  metaPosition: string | null;
  resumesFile: Candidate_resumesFile[] | null;
  coverLettersFile: Candidate_coverLettersFile[] | null;
  tags: Candidate_tags[] | null;
  fields: Candidate_fields[] | null;
  tasks: Candidate_tasks[] | null;
  applications: Candidate_applications[] | null;
  comments: Candidate_comments[] | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: File
// ====================================================

export interface File {
  __typename: "File";
  id: string;
  createdAt: any;
  updatedAt: any;
  size: number;
  type: string;
  name: string;
  url: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Tag
// ====================================================

export interface Tag {
  __typename: "Tag";
  id: string;
  createdAt: any;
  updatedAt: any;
  label: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FieldInstance
// ====================================================

export interface FieldInstance_field {
  __typename: "Field";
  id: string;
  createdAt: any;
  updatedAt: any;
  type: FieldType;
  label: string;
}

export interface FieldInstance {
  __typename: "FieldInstance";
  id: string;
  createdAt: any;
  updatedAt: any;
  field: FieldInstance_field;
  value: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Field
// ====================================================

export interface Field {
  __typename: "Field";
  id: string;
  createdAt: any;
  updatedAt: any;
  type: FieldType;
  label: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Comment
// ====================================================

export interface Comment_createdBy {
  __typename: "User";
  id: string;
  createdAt: any;
  updatedAt: any;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  lastLogin: any | null;
  deletedAt: any | null;
  position: string | null;
}

export interface Comment_parent {
  __typename: "Comment";
  id: string;
  createdAt: any;
  updatedAt: any;
  content: string;
}

export interface Comment {
  __typename: "Comment";
  id: string;
  createdAt: any;
  updatedAt: any;
  createdBy: Comment_createdBy;
  parent: Comment_parent | null;
  content: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Stage
// ====================================================

export interface Stage {
  __typename: "Stage";
  id: string;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  type: StageType;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Job
// ====================================================

export interface Job_workspace {
  __typename: "Workspace";
  id: string;
  createdAt: any;
  updatedAt: any;
  name: string;
}

export interface Job_applications {
  __typename: "Application";
  createdAt: any;
  id: string;
  updatedAt: any;
  type: ApplicationType;
}

export interface Job_workflow {
  __typename: "Workflow";
  id: string;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
}

export interface Job_comments {
  __typename: "Comment";
  id: string;
  createdAt: any;
  updatedAt: any;
  content: string;
}

export interface Job_locations {
  __typename: "Location";
  id: string;
  country: string;
  region: string;
  city: string;
  zip: string;
}

export interface Job {
  __typename: "Job";
  id: string;
  createdAt: any;
  updatedAt: any;
  workspace: Job_workspace;
  applications: Job_applications[] | null;
  workflow: Job_workflow;
  comments: Job_comments[] | null;
  type: JobType;
  department: string | null;
  locations: Job_locations[] | null;
  name: string;
  description: string | null;
  requirements: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Workspace
// ====================================================

export interface Workspace_users {
  __typename: "User";
  id: string;
  createdAt: any;
  updatedAt: any;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  lastLogin: any | null;
  deletedAt: any | null;
  position: string | null;
}

export interface Workspace_jobs {
  __typename: "Job";
  id: string;
  createdAt: any;
  updatedAt: any;
  type: JobType;
  department: string | null;
  name: string;
  description: string | null;
  requirements: string | null;
}

export interface Workspace_candidates {
  __typename: "Candidate";
  id: string;
  createdAt: any;
  updatedAt: any;
  firstName: string;
  lastName: string;
  metaCompany: string | null;
  metaHeadline: string | null;
  metaPosition: string | null;
}

export interface Workspace_workflows {
  __typename: "Workflow";
  id: string;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
}

export interface Workspace_invites {
  __typename: "Invite";
  id: string;
  createdAt: any;
  updatedAt: any;
  email: string;
  expireAt: any;
}

export interface Workspace_tags {
  __typename: "Tag";
  id: string;
  createdAt: any;
  updatedAt: any;
  label: string;
}

export interface Workspace {
  __typename: "Workspace";
  id: string;
  createdAt: any;
  updatedAt: any;
  users: Workspace_users[] | null;
  jobs: Workspace_jobs[] | null;
  candidates: Workspace_candidates[] | null;
  workflows: Workspace_workflows[] | null;
  invites: Workspace_invites[] | null;
  tags: Workspace_tags[] | null;
  name: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Workflow
// ====================================================

export interface Workflow_stages {
  __typename: "Stage";
  id: string;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  type: StageType;
}

export interface Workflow_disqualifications {
  __typename: "Disqualification";
  id: string;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
}

export interface Workflow_fields {
  __typename: "Field";
  id: string;
  createdAt: any;
  updatedAt: any;
  type: FieldType;
  label: string;
}

export interface Workflow {
  __typename: "Workflow";
  id: string;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  stages: Workflow_stages[] | null;
  disqualifications: Workflow_disqualifications[] | null;
  fields: Workflow_fields[] | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Invite
// ====================================================

export interface Invite_invitedBy {
  __typename: "User";
  id: string;
  createdAt: any;
  updatedAt: any;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  lastLogin: any | null;
  deletedAt: any | null;
  position: string | null;
}

export interface Invite {
  __typename: "Invite";
  id: string;
  createdAt: any;
  updatedAt: any;
  email: string;
  expireAt: any;
  invitedBy: Invite_invitedBy;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Location
// ====================================================

export interface Location {
  __typename: "Location";
  id: string;
  country: string;
  region: string;
  city: string;
  zip: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AccessPayload
// ====================================================

export interface AccessPayload {
  __typename: "AccessPayload";
  token: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AuthPayload
// ====================================================

export interface AuthPayload {
  __typename: "AuthPayload";
  token: string;
  refresh: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ApplicationType {
  Disqualified = "Disqualified",
  Qualified = "Qualified",
}

export enum FieldType {
  Boolean = "Boolean",
  DateTime = "DateTime",
  Float = "Float",
  Int = "Int",
  Paragraph = "Paragraph",
  String = "String",
  Text = "Text",
}

export enum JobType {
  Archived = "Archived",
  Draft = "Draft",
  Published = "Published",
}

export enum StageType {
  Final = "Final",
  New = "New",
  Pipeline = "Pipeline",
}

//==============================================================
// END Enums and Input Objects
//==============================================================