export type Maybe<T> = T | null;


export interface EventWhereInput {

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  type?: Maybe<EventType>;

  type_not?: Maybe<EventType>;

  type_in?: Maybe<EventType[]>;

  type_not_in?: Maybe<EventType[]>;

  actorType?: Maybe<EventActorType>;

  actorType_not?: Maybe<EventActorType>;

  actorType_in?: Maybe<EventActorType[]>;

  actorType_not_in?: Maybe<EventActorType[]>;

  actorUser?: Maybe<UserWhereInput>;

  actorCandidate?: Maybe<CandidateWhereInput>;

  targetType?: Maybe<EventTargetType>;

  targetType_not?: Maybe<EventTargetType>;

  targetType_in?: Maybe<EventTargetType[]>;

  targetType_not_in?: Maybe<EventTargetType[]>;

  targetCandidate?: Maybe<CandidateWhereInput>;

  targetJob?: Maybe<JobWhereInput>;

  targetTask?: Maybe<TaskWhereInput>;

  targetWorkspace?: Maybe<WorkspaceWhereInput>;

  AND?: Maybe<EventWhereInput[]>;

  OR?: Maybe<EventWhereInput[]>;

  NOT?: Maybe<EventWhereInput[]>;
}

export interface UserWhereInput {

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  workspace?: Maybe<WorkspaceWhereInput>;

  events?: Maybe<EventWhereInput>;

  notifications_every?: Maybe<NotificationWhereInput>;

  notifications_some?: Maybe<NotificationWhereInput>;

  notifications_none?: Maybe<NotificationWhereInput>;

  subscriptionJobs_every?: Maybe<JobWhereInput>;

  subscriptionJobs_some?: Maybe<JobWhereInput>;

  subscriptionJobs_none?: Maybe<JobWhereInput>;

  subscriptionCandidates_every?: Maybe<CandidateWhereInput>;

  subscriptionCandidates_some?: Maybe<CandidateWhereInput>;

  subscriptionCandidates_none?: Maybe<CandidateWhereInput>;

  subscriptionTasks_every?: Maybe<TaskWhereInput>;

  subscriptionTasks_some?: Maybe<TaskWhereInput>;

  subscriptionTasks_none?: Maybe<TaskWhereInput>;

  tasks_every?: Maybe<TaskWhereInput>;

  tasks_some?: Maybe<TaskWhereInput>;

  tasks_none?: Maybe<TaskWhereInput>;

  firstName?: Maybe<string>;

  firstName_not?: Maybe<string>;

  firstName_in?: Maybe<string[]>;

  firstName_not_in?: Maybe<string[]>;

  firstName_lt?: Maybe<string>;

  firstName_lte?: Maybe<string>;

  firstName_gt?: Maybe<string>;

  firstName_gte?: Maybe<string>;

  firstName_contains?: Maybe<string>;

  firstName_not_contains?: Maybe<string>;

  firstName_starts_with?: Maybe<string>;

  firstName_not_starts_with?: Maybe<string>;

  firstName_ends_with?: Maybe<string>;

  firstName_not_ends_with?: Maybe<string>;

  lastName?: Maybe<string>;

  lastName_not?: Maybe<string>;

  lastName_in?: Maybe<string[]>;

  lastName_not_in?: Maybe<string[]>;

  lastName_lt?: Maybe<string>;

  lastName_lte?: Maybe<string>;

  lastName_gt?: Maybe<string>;

  lastName_gte?: Maybe<string>;

  lastName_contains?: Maybe<string>;

  lastName_not_contains?: Maybe<string>;

  lastName_starts_with?: Maybe<string>;

  lastName_not_starts_with?: Maybe<string>;

  lastName_ends_with?: Maybe<string>;

  lastName_not_ends_with?: Maybe<string>;

  email?: Maybe<string>;

  email_not?: Maybe<string>;

  email_in?: Maybe<string[]>;

  email_not_in?: Maybe<string[]>;

  email_lt?: Maybe<string>;

  email_lte?: Maybe<string>;

  email_gt?: Maybe<string>;

  email_gte?: Maybe<string>;

  email_contains?: Maybe<string>;

  email_not_contains?: Maybe<string>;

  email_starts_with?: Maybe<string>;

  email_not_starts_with?: Maybe<string>;

  email_ends_with?: Maybe<string>;

  email_not_ends_with?: Maybe<string>;

  username?: Maybe<string>;

  username_not?: Maybe<string>;

  username_in?: Maybe<string[]>;

  username_not_in?: Maybe<string[]>;

  username_lt?: Maybe<string>;

  username_lte?: Maybe<string>;

  username_gt?: Maybe<string>;

  username_gte?: Maybe<string>;

  username_contains?: Maybe<string>;

  username_not_contains?: Maybe<string>;

  username_starts_with?: Maybe<string>;

  username_not_starts_with?: Maybe<string>;

  username_ends_with?: Maybe<string>;

  username_not_ends_with?: Maybe<string>;

  lastLogin?: Maybe<DateTime>;

  lastLogin_not?: Maybe<DateTime>;

  lastLogin_in?: Maybe<DateTime[]>;

  lastLogin_not_in?: Maybe<DateTime[]>;

  lastLogin_lt?: Maybe<DateTime>;

  lastLogin_lte?: Maybe<DateTime>;

  lastLogin_gt?: Maybe<DateTime>;

  lastLogin_gte?: Maybe<DateTime>;

  deletedAt?: Maybe<DateTime>;

  deletedAt_not?: Maybe<DateTime>;

  deletedAt_in?: Maybe<DateTime[]>;

  deletedAt_not_in?: Maybe<DateTime[]>;

  deletedAt_lt?: Maybe<DateTime>;

  deletedAt_lte?: Maybe<DateTime>;

  deletedAt_gt?: Maybe<DateTime>;

  deletedAt_gte?: Maybe<DateTime>;

  position?: Maybe<string>;

  position_not?: Maybe<string>;

  position_in?: Maybe<string[]>;

  position_not_in?: Maybe<string[]>;

  position_lt?: Maybe<string>;

  position_lte?: Maybe<string>;

  position_gt?: Maybe<string>;

  position_gte?: Maybe<string>;

  position_contains?: Maybe<string>;

  position_not_contains?: Maybe<string>;

  position_starts_with?: Maybe<string>;

  position_not_starts_with?: Maybe<string>;

  position_ends_with?: Maybe<string>;

  position_not_ends_with?: Maybe<string>;

  avatar?: Maybe<FileWhereInput>;

  AND?: Maybe<UserWhereInput[]>;

  OR?: Maybe<UserWhereInput[]>;

  NOT?: Maybe<UserWhereInput[]>;
}

export interface WorkspaceWhereInput {

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  events_every?: Maybe<EventWhereInput>;

  events_some?: Maybe<EventWhereInput>;

  events_none?: Maybe<EventWhereInput>;

  users_every?: Maybe<UserWhereInput>;

  users_some?: Maybe<UserWhereInput>;

  users_none?: Maybe<UserWhereInput>;

  jobs_every?: Maybe<JobWhereInput>;

  jobs_some?: Maybe<JobWhereInput>;

  jobs_none?: Maybe<JobWhereInput>;

  candidates_every?: Maybe<CandidateWhereInput>;

  candidates_some?: Maybe<CandidateWhereInput>;

  candidates_none?: Maybe<CandidateWhereInput>;

  workflows_every?: Maybe<WorkflowWhereInput>;

  workflows_some?: Maybe<WorkflowWhereInput>;

  workflows_none?: Maybe<WorkflowWhereInput>;

  workflowDefault?: Maybe<WorkflowWhereInput>;

  invites_every?: Maybe<InviteWhereInput>;

  invites_some?: Maybe<InviteWhereInput>;

  invites_none?: Maybe<InviteWhereInput>;

  tags_every?: Maybe<TagWhereInput>;

  tags_some?: Maybe<TagWhereInput>;

  tags_none?: Maybe<TagWhereInput>;

  name?: Maybe<string>;

  name_not?: Maybe<string>;

  name_in?: Maybe<string[]>;

  name_not_in?: Maybe<string[]>;

  name_lt?: Maybe<string>;

  name_lte?: Maybe<string>;

  name_gt?: Maybe<string>;

  name_gte?: Maybe<string>;

  name_contains?: Maybe<string>;

  name_not_contains?: Maybe<string>;

  name_starts_with?: Maybe<string>;

  name_not_starts_with?: Maybe<string>;

  name_ends_with?: Maybe<string>;

  name_not_ends_with?: Maybe<string>;

  AND?: Maybe<WorkspaceWhereInput[]>;

  OR?: Maybe<WorkspaceWhereInput[]>;

  NOT?: Maybe<WorkspaceWhereInput[]>;
}

export interface JobWhereInput {

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  workspace?: Maybe<WorkspaceWhereInput>;

  subscribers_every?: Maybe<UserWhereInput>;

  subscribers_some?: Maybe<UserWhereInput>;

  subscribers_none?: Maybe<UserWhereInput>;

  events_every?: Maybe<EventWhereInput>;

  events_some?: Maybe<EventWhereInput>;

  events_none?: Maybe<EventWhereInput>;

  applications_every?: Maybe<ApplicationWhereInput>;

  applications_some?: Maybe<ApplicationWhereInput>;

  applications_none?: Maybe<ApplicationWhereInput>;

  workflow?: Maybe<WorkflowWhereInput>;

  comments_every?: Maybe<CommentWhereInput>;

  comments_some?: Maybe<CommentWhereInput>;

  comments_none?: Maybe<CommentWhereInput>;

  type?: Maybe<JobType>;

  type_not?: Maybe<JobType>;

  type_in?: Maybe<JobType[]>;

  type_not_in?: Maybe<JobType[]>;

  department?: Maybe<string>;

  department_not?: Maybe<string>;

  department_in?: Maybe<string[]>;

  department_not_in?: Maybe<string[]>;

  department_lt?: Maybe<string>;

  department_lte?: Maybe<string>;

  department_gt?: Maybe<string>;

  department_gte?: Maybe<string>;

  department_contains?: Maybe<string>;

  department_not_contains?: Maybe<string>;

  department_starts_with?: Maybe<string>;

  department_not_starts_with?: Maybe<string>;

  department_ends_with?: Maybe<string>;

  department_not_ends_with?: Maybe<string>;

  locations_every?: Maybe<LocationWhereInput>;

  locations_some?: Maybe<LocationWhereInput>;

  locations_none?: Maybe<LocationWhereInput>;

  name?: Maybe<string>;

  name_not?: Maybe<string>;

  name_in?: Maybe<string[]>;

  name_not_in?: Maybe<string[]>;

  name_lt?: Maybe<string>;

  name_lte?: Maybe<string>;

  name_gt?: Maybe<string>;

  name_gte?: Maybe<string>;

  name_contains?: Maybe<string>;

  name_not_contains?: Maybe<string>;

  name_starts_with?: Maybe<string>;

  name_not_starts_with?: Maybe<string>;

  name_ends_with?: Maybe<string>;

  name_not_ends_with?: Maybe<string>;

  description?: Maybe<string>;

  description_not?: Maybe<string>;

  description_in?: Maybe<string[]>;

  description_not_in?: Maybe<string[]>;

  description_lt?: Maybe<string>;

  description_lte?: Maybe<string>;

  description_gt?: Maybe<string>;

  description_gte?: Maybe<string>;

  description_contains?: Maybe<string>;

  description_not_contains?: Maybe<string>;

  description_starts_with?: Maybe<string>;

  description_not_starts_with?: Maybe<string>;

  description_ends_with?: Maybe<string>;

  description_not_ends_with?: Maybe<string>;

  requirements?: Maybe<string>;

  requirements_not?: Maybe<string>;

  requirements_in?: Maybe<string[]>;

  requirements_not_in?: Maybe<string[]>;

  requirements_lt?: Maybe<string>;

  requirements_lte?: Maybe<string>;

  requirements_gt?: Maybe<string>;

  requirements_gte?: Maybe<string>;

  requirements_contains?: Maybe<string>;

  requirements_not_contains?: Maybe<string>;

  requirements_starts_with?: Maybe<string>;

  requirements_not_starts_with?: Maybe<string>;

  requirements_ends_with?: Maybe<string>;

  requirements_not_ends_with?: Maybe<string>;

  AND?: Maybe<JobWhereInput[]>;

  OR?: Maybe<JobWhereInput[]>;

  NOT?: Maybe<JobWhereInput[]>;
}

export interface ApplicationWhereInput {

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  type?: Maybe<ApplicationType>;

  type_not?: Maybe<ApplicationType>;

  type_in?: Maybe<ApplicationType[]>;

  type_not_in?: Maybe<ApplicationType[]>;

  disqualificationLink?: Maybe<DisqualificationLinkWhereInput>;

  stage?: Maybe<StageWhereInput>;

  job?: Maybe<JobWhereInput>;

  candidate?: Maybe<CandidateWhereInput>;

  AND?: Maybe<ApplicationWhereInput[]>;

  OR?: Maybe<ApplicationWhereInput[]>;

  NOT?: Maybe<ApplicationWhereInput[]>;
}

export interface DisqualificationLinkWhereInput {

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  disqualification?: Maybe<DisqualificationWhereInput>;

  createdBy?: Maybe<UserWhereInput>;

  justification?: Maybe<string>;

  justification_not?: Maybe<string>;

  justification_in?: Maybe<string[]>;

  justification_not_in?: Maybe<string[]>;

  justification_lt?: Maybe<string>;

  justification_lte?: Maybe<string>;

  justification_gt?: Maybe<string>;

  justification_gte?: Maybe<string>;

  justification_contains?: Maybe<string>;

  justification_not_contains?: Maybe<string>;

  justification_starts_with?: Maybe<string>;

  justification_not_starts_with?: Maybe<string>;

  justification_ends_with?: Maybe<string>;

  justification_not_ends_with?: Maybe<string>;

  AND?: Maybe<DisqualificationLinkWhereInput[]>;

  OR?: Maybe<DisqualificationLinkWhereInput[]>;

  NOT?: Maybe<DisqualificationLinkWhereInput[]>;
}

export interface DisqualificationWhereInput {

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  name?: Maybe<string>;

  name_not?: Maybe<string>;

  name_in?: Maybe<string[]>;

  name_not_in?: Maybe<string[]>;

  name_lt?: Maybe<string>;

  name_lte?: Maybe<string>;

  name_gt?: Maybe<string>;

  name_gte?: Maybe<string>;

  name_contains?: Maybe<string>;

  name_not_contains?: Maybe<string>;

  name_starts_with?: Maybe<string>;

  name_not_starts_with?: Maybe<string>;

  name_ends_with?: Maybe<string>;

  name_not_ends_with?: Maybe<string>;

  description?: Maybe<string>;

  description_not?: Maybe<string>;

  description_in?: Maybe<string[]>;

  description_not_in?: Maybe<string[]>;

  description_lt?: Maybe<string>;

  description_lte?: Maybe<string>;

  description_gt?: Maybe<string>;

  description_gte?: Maybe<string>;

  description_contains?: Maybe<string>;

  description_not_contains?: Maybe<string>;

  description_starts_with?: Maybe<string>;

  description_not_starts_with?: Maybe<string>;

  description_ends_with?: Maybe<string>;

  description_not_ends_with?: Maybe<string>;

  AND?: Maybe<DisqualificationWhereInput[]>;

  OR?: Maybe<DisqualificationWhereInput[]>;

  NOT?: Maybe<DisqualificationWhereInput[]>;
}

export interface StageWhereInput {

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  name?: Maybe<string>;

  name_not?: Maybe<string>;

  name_in?: Maybe<string[]>;

  name_not_in?: Maybe<string[]>;

  name_lt?: Maybe<string>;

  name_lte?: Maybe<string>;

  name_gt?: Maybe<string>;

  name_gte?: Maybe<string>;

  name_contains?: Maybe<string>;

  name_not_contains?: Maybe<string>;

  name_starts_with?: Maybe<string>;

  name_not_starts_with?: Maybe<string>;

  name_ends_with?: Maybe<string>;

  name_not_ends_with?: Maybe<string>;

  description?: Maybe<string>;

  description_not?: Maybe<string>;

  description_in?: Maybe<string[]>;

  description_not_in?: Maybe<string[]>;

  description_lt?: Maybe<string>;

  description_lte?: Maybe<string>;

  description_gt?: Maybe<string>;

  description_gte?: Maybe<string>;

  description_contains?: Maybe<string>;

  description_not_contains?: Maybe<string>;

  description_starts_with?: Maybe<string>;

  description_not_starts_with?: Maybe<string>;

  description_ends_with?: Maybe<string>;

  description_not_ends_with?: Maybe<string>;

  type?: Maybe<StageType>;

  type_not?: Maybe<StageType>;

  type_in?: Maybe<StageType[]>;

  type_not_in?: Maybe<StageType[]>;

  AND?: Maybe<StageWhereInput[]>;

  OR?: Maybe<StageWhereInput[]>;

  NOT?: Maybe<StageWhereInput[]>;
}

export interface CandidateWhereInput {

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  workspace?: Maybe<WorkspaceWhereInput>;

  events_every?: Maybe<EventWhereInput>;

  events_some?: Maybe<EventWhereInput>;

  events_none?: Maybe<EventWhereInput>;

  subscribers_every?: Maybe<UserWhereInput>;

  subscribers_some?: Maybe<UserWhereInput>;

  subscribers_none?: Maybe<UserWhereInput>;

  firstName?: Maybe<string>;

  firstName_not?: Maybe<string>;

  firstName_in?: Maybe<string[]>;

  firstName_not_in?: Maybe<string[]>;

  firstName_lt?: Maybe<string>;

  firstName_lte?: Maybe<string>;

  firstName_gt?: Maybe<string>;

  firstName_gte?: Maybe<string>;

  firstName_contains?: Maybe<string>;

  firstName_not_contains?: Maybe<string>;

  firstName_starts_with?: Maybe<string>;

  firstName_not_starts_with?: Maybe<string>;

  firstName_ends_with?: Maybe<string>;

  firstName_not_ends_with?: Maybe<string>;

  lastName?: Maybe<string>;

  lastName_not?: Maybe<string>;

  lastName_in?: Maybe<string[]>;

  lastName_not_in?: Maybe<string[]>;

  lastName_lt?: Maybe<string>;

  lastName_lte?: Maybe<string>;

  lastName_gt?: Maybe<string>;

  lastName_gte?: Maybe<string>;

  lastName_contains?: Maybe<string>;

  lastName_not_contains?: Maybe<string>;

  lastName_starts_with?: Maybe<string>;

  lastName_not_starts_with?: Maybe<string>;

  lastName_ends_with?: Maybe<string>;

  lastName_not_ends_with?: Maybe<string>;

  avatar?: Maybe<FileWhereInput>;

  metaCompany?: Maybe<string>;

  metaCompany_not?: Maybe<string>;

  metaCompany_in?: Maybe<string[]>;

  metaCompany_not_in?: Maybe<string[]>;

  metaCompany_lt?: Maybe<string>;

  metaCompany_lte?: Maybe<string>;

  metaCompany_gt?: Maybe<string>;

  metaCompany_gte?: Maybe<string>;

  metaCompany_contains?: Maybe<string>;

  metaCompany_not_contains?: Maybe<string>;

  metaCompany_starts_with?: Maybe<string>;

  metaCompany_not_starts_with?: Maybe<string>;

  metaCompany_ends_with?: Maybe<string>;

  metaCompany_not_ends_with?: Maybe<string>;

  metaHeadline?: Maybe<string>;

  metaHeadline_not?: Maybe<string>;

  metaHeadline_in?: Maybe<string[]>;

  metaHeadline_not_in?: Maybe<string[]>;

  metaHeadline_lt?: Maybe<string>;

  metaHeadline_lte?: Maybe<string>;

  metaHeadline_gt?: Maybe<string>;

  metaHeadline_gte?: Maybe<string>;

  metaHeadline_contains?: Maybe<string>;

  metaHeadline_not_contains?: Maybe<string>;

  metaHeadline_starts_with?: Maybe<string>;

  metaHeadline_not_starts_with?: Maybe<string>;

  metaHeadline_ends_with?: Maybe<string>;

  metaHeadline_not_ends_with?: Maybe<string>;

  metaPosition?: Maybe<string>;

  metaPosition_not?: Maybe<string>;

  metaPosition_in?: Maybe<string[]>;

  metaPosition_not_in?: Maybe<string[]>;

  metaPosition_lt?: Maybe<string>;

  metaPosition_lte?: Maybe<string>;

  metaPosition_gt?: Maybe<string>;

  metaPosition_gte?: Maybe<string>;

  metaPosition_contains?: Maybe<string>;

  metaPosition_not_contains?: Maybe<string>;

  metaPosition_starts_with?: Maybe<string>;

  metaPosition_not_starts_with?: Maybe<string>;

  metaPosition_ends_with?: Maybe<string>;

  metaPosition_not_ends_with?: Maybe<string>;

  resumesFile_every?: Maybe<FileWhereInput>;

  resumesFile_some?: Maybe<FileWhereInput>;

  resumesFile_none?: Maybe<FileWhereInput>;

  coverLettersFile_every?: Maybe<FileWhereInput>;

  coverLettersFile_some?: Maybe<FileWhereInput>;

  coverLettersFile_none?: Maybe<FileWhereInput>;

  tags_every?: Maybe<TagWhereInput>;

  tags_some?: Maybe<TagWhereInput>;

  tags_none?: Maybe<TagWhereInput>;

  fields_every?: Maybe<FieldLinkWhereInput>;

  fields_some?: Maybe<FieldLinkWhereInput>;

  fields_none?: Maybe<FieldLinkWhereInput>;

  tasks_every?: Maybe<TaskWhereInput>;

  tasks_some?: Maybe<TaskWhereInput>;

  tasks_none?: Maybe<TaskWhereInput>;

  applications_every?: Maybe<ApplicationWhereInput>;

  applications_some?: Maybe<ApplicationWhereInput>;

  applications_none?: Maybe<ApplicationWhereInput>;

  comments_every?: Maybe<CommentWhereInput>;

  comments_some?: Maybe<CommentWhereInput>;

  comments_none?: Maybe<CommentWhereInput>;

  AND?: Maybe<CandidateWhereInput[]>;

  OR?: Maybe<CandidateWhereInput[]>;

  NOT?: Maybe<CandidateWhereInput[]>;
}

export interface FileWhereInput {

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  size?: Maybe<number>;

  size_not?: Maybe<number>;

  size_in?: Maybe<number[]>;

  size_not_in?: Maybe<number[]>;

  size_lt?: Maybe<number>;

  size_lte?: Maybe<number>;

  size_gt?: Maybe<number>;

  size_gte?: Maybe<number>;

  type?: Maybe<string>;

  type_not?: Maybe<string>;

  type_in?: Maybe<string[]>;

  type_not_in?: Maybe<string[]>;

  type_lt?: Maybe<string>;

  type_lte?: Maybe<string>;

  type_gt?: Maybe<string>;

  type_gte?: Maybe<string>;

  type_contains?: Maybe<string>;

  type_not_contains?: Maybe<string>;

  type_starts_with?: Maybe<string>;

  type_not_starts_with?: Maybe<string>;

  type_ends_with?: Maybe<string>;

  type_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;

  name_not?: Maybe<string>;

  name_in?: Maybe<string[]>;

  name_not_in?: Maybe<string[]>;

  name_lt?: Maybe<string>;

  name_lte?: Maybe<string>;

  name_gt?: Maybe<string>;

  name_gte?: Maybe<string>;

  name_contains?: Maybe<string>;

  name_not_contains?: Maybe<string>;

  name_starts_with?: Maybe<string>;

  name_not_starts_with?: Maybe<string>;

  name_ends_with?: Maybe<string>;

  name_not_ends_with?: Maybe<string>;

  url?: Maybe<string>;

  url_not?: Maybe<string>;

  url_in?: Maybe<string[]>;

  url_not_in?: Maybe<string[]>;

  url_lt?: Maybe<string>;

  url_lte?: Maybe<string>;

  url_gt?: Maybe<string>;

  url_gte?: Maybe<string>;

  url_contains?: Maybe<string>;

  url_not_contains?: Maybe<string>;

  url_starts_with?: Maybe<string>;

  url_not_starts_with?: Maybe<string>;

  url_ends_with?: Maybe<string>;

  url_not_ends_with?: Maybe<string>;

  AND?: Maybe<FileWhereInput[]>;

  OR?: Maybe<FileWhereInput[]>;

  NOT?: Maybe<FileWhereInput[]>;
}

export interface TagWhereInput {

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  label?: Maybe<string>;

  label_not?: Maybe<string>;

  label_in?: Maybe<string[]>;

  label_not_in?: Maybe<string[]>;

  label_lt?: Maybe<string>;

  label_lte?: Maybe<string>;

  label_gt?: Maybe<string>;

  label_gte?: Maybe<string>;

  label_contains?: Maybe<string>;

  label_not_contains?: Maybe<string>;

  label_starts_with?: Maybe<string>;

  label_not_starts_with?: Maybe<string>;

  label_ends_with?: Maybe<string>;

  label_not_ends_with?: Maybe<string>;

  AND?: Maybe<TagWhereInput[]>;

  OR?: Maybe<TagWhereInput[]>;

  NOT?: Maybe<TagWhereInput[]>;
}

export interface FieldLinkWhereInput {

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  field?: Maybe<FieldWhereInput>;

  value?: Maybe<string>;

  value_not?: Maybe<string>;

  value_in?: Maybe<string[]>;

  value_not_in?: Maybe<string[]>;

  value_lt?: Maybe<string>;

  value_lte?: Maybe<string>;

  value_gt?: Maybe<string>;

  value_gte?: Maybe<string>;

  value_contains?: Maybe<string>;

  value_not_contains?: Maybe<string>;

  value_starts_with?: Maybe<string>;

  value_not_starts_with?: Maybe<string>;

  value_ends_with?: Maybe<string>;

  value_not_ends_with?: Maybe<string>;

  AND?: Maybe<FieldLinkWhereInput[]>;

  OR?: Maybe<FieldLinkWhereInput[]>;

  NOT?: Maybe<FieldLinkWhereInput[]>;
}

export interface FieldWhereInput {

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  type?: Maybe<FieldType>;

  type_not?: Maybe<FieldType>;

  type_in?: Maybe<FieldType[]>;

  type_not_in?: Maybe<FieldType[]>;

  label?: Maybe<string>;

  label_not?: Maybe<string>;

  label_in?: Maybe<string[]>;

  label_not_in?: Maybe<string[]>;

  label_lt?: Maybe<string>;

  label_lte?: Maybe<string>;

  label_gt?: Maybe<string>;

  label_gte?: Maybe<string>;

  label_contains?: Maybe<string>;

  label_not_contains?: Maybe<string>;

  label_starts_with?: Maybe<string>;

  label_not_starts_with?: Maybe<string>;

  label_ends_with?: Maybe<string>;

  label_not_ends_with?: Maybe<string>;

  AND?: Maybe<FieldWhereInput[]>;

  OR?: Maybe<FieldWhereInput[]>;

  NOT?: Maybe<FieldWhereInput[]>;
}

export interface TaskWhereInput {

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  subscribers_every?: Maybe<UserWhereInput>;

  subscribers_some?: Maybe<UserWhereInput>;

  subscribers_none?: Maybe<UserWhereInput>;

  owners_every?: Maybe<UserWhereInput>;

  owners_some?: Maybe<UserWhereInput>;

  owners_none?: Maybe<UserWhereInput>;

  candidate?: Maybe<CandidateWhereInput>;

  title?: Maybe<string>;

  title_not?: Maybe<string>;

  title_in?: Maybe<string[]>;

  title_not_in?: Maybe<string[]>;

  title_lt?: Maybe<string>;

  title_lte?: Maybe<string>;

  title_gt?: Maybe<string>;

  title_gte?: Maybe<string>;

  title_contains?: Maybe<string>;

  title_not_contains?: Maybe<string>;

  title_starts_with?: Maybe<string>;

  title_not_starts_with?: Maybe<string>;

  title_ends_with?: Maybe<string>;

  title_not_ends_with?: Maybe<string>;

  description?: Maybe<string>;

  description_not?: Maybe<string>;

  description_in?: Maybe<string[]>;

  description_not_in?: Maybe<string[]>;

  description_lt?: Maybe<string>;

  description_lte?: Maybe<string>;

  description_gt?: Maybe<string>;

  description_gte?: Maybe<string>;

  description_contains?: Maybe<string>;

  description_not_contains?: Maybe<string>;

  description_starts_with?: Maybe<string>;

  description_not_starts_with?: Maybe<string>;

  description_ends_with?: Maybe<string>;

  description_not_ends_with?: Maybe<string>;

  dueAt?: Maybe<DateTime>;

  dueAt_not?: Maybe<DateTime>;

  dueAt_in?: Maybe<DateTime[]>;

  dueAt_not_in?: Maybe<DateTime[]>;

  dueAt_lt?: Maybe<DateTime>;

  dueAt_lte?: Maybe<DateTime>;

  dueAt_gt?: Maybe<DateTime>;

  dueAt_gte?: Maybe<DateTime>;

  AND?: Maybe<TaskWhereInput[]>;

  OR?: Maybe<TaskWhereInput[]>;

  NOT?: Maybe<TaskWhereInput[]>;
}

export interface CommentWhereInput {

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  createdBy?: Maybe<UserWhereInput>;

  parent?: Maybe<CommentWhereInput>;

  content?: Maybe<string>;

  content_not?: Maybe<string>;

  content_in?: Maybe<string[]>;

  content_not_in?: Maybe<string[]>;

  content_lt?: Maybe<string>;

  content_lte?: Maybe<string>;

  content_gt?: Maybe<string>;

  content_gte?: Maybe<string>;

  content_contains?: Maybe<string>;

  content_not_contains?: Maybe<string>;

  content_starts_with?: Maybe<string>;

  content_not_starts_with?: Maybe<string>;

  content_ends_with?: Maybe<string>;

  content_not_ends_with?: Maybe<string>;

  AND?: Maybe<CommentWhereInput[]>;

  OR?: Maybe<CommentWhereInput[]>;

  NOT?: Maybe<CommentWhereInput[]>;
}

export interface WorkflowWhereInput {

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  name?: Maybe<string>;

  name_not?: Maybe<string>;

  name_in?: Maybe<string[]>;

  name_not_in?: Maybe<string[]>;

  name_lt?: Maybe<string>;

  name_lte?: Maybe<string>;

  name_gt?: Maybe<string>;

  name_gte?: Maybe<string>;

  name_contains?: Maybe<string>;

  name_not_contains?: Maybe<string>;

  name_starts_with?: Maybe<string>;

  name_not_starts_with?: Maybe<string>;

  name_ends_with?: Maybe<string>;

  name_not_ends_with?: Maybe<string>;

  description?: Maybe<string>;

  description_not?: Maybe<string>;

  description_in?: Maybe<string[]>;

  description_not_in?: Maybe<string[]>;

  description_lt?: Maybe<string>;

  description_lte?: Maybe<string>;

  description_gt?: Maybe<string>;

  description_gte?: Maybe<string>;

  description_contains?: Maybe<string>;

  description_not_contains?: Maybe<string>;

  description_starts_with?: Maybe<string>;

  description_not_starts_with?: Maybe<string>;

  description_ends_with?: Maybe<string>;

  description_not_ends_with?: Maybe<string>;

  stages_every?: Maybe<StageWhereInput>;

  stages_some?: Maybe<StageWhereInput>;

  stages_none?: Maybe<StageWhereInput>;

  disqualifications_every?: Maybe<DisqualificationWhereInput>;

  disqualifications_some?: Maybe<DisqualificationWhereInput>;

  disqualifications_none?: Maybe<DisqualificationWhereInput>;

  fields_every?: Maybe<FieldWhereInput>;

  fields_some?: Maybe<FieldWhereInput>;

  fields_none?: Maybe<FieldWhereInput>;

  AND?: Maybe<WorkflowWhereInput[]>;

  OR?: Maybe<WorkflowWhereInput[]>;

  NOT?: Maybe<WorkflowWhereInput[]>;
}

export interface LocationWhereInput {

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  country?: Maybe<string>;

  country_not?: Maybe<string>;

  country_in?: Maybe<string[]>;

  country_not_in?: Maybe<string[]>;

  country_lt?: Maybe<string>;

  country_lte?: Maybe<string>;

  country_gt?: Maybe<string>;

  country_gte?: Maybe<string>;

  country_contains?: Maybe<string>;

  country_not_contains?: Maybe<string>;

  country_starts_with?: Maybe<string>;

  country_not_starts_with?: Maybe<string>;

  country_ends_with?: Maybe<string>;

  country_not_ends_with?: Maybe<string>;

  region?: Maybe<string>;

  region_not?: Maybe<string>;

  region_in?: Maybe<string[]>;

  region_not_in?: Maybe<string[]>;

  region_lt?: Maybe<string>;

  region_lte?: Maybe<string>;

  region_gt?: Maybe<string>;

  region_gte?: Maybe<string>;

  region_contains?: Maybe<string>;

  region_not_contains?: Maybe<string>;

  region_starts_with?: Maybe<string>;

  region_not_starts_with?: Maybe<string>;

  region_ends_with?: Maybe<string>;

  region_not_ends_with?: Maybe<string>;

  city?: Maybe<string>;

  city_not?: Maybe<string>;

  city_in?: Maybe<string[]>;

  city_not_in?: Maybe<string[]>;

  city_lt?: Maybe<string>;

  city_lte?: Maybe<string>;

  city_gt?: Maybe<string>;

  city_gte?: Maybe<string>;

  city_contains?: Maybe<string>;

  city_not_contains?: Maybe<string>;

  city_starts_with?: Maybe<string>;

  city_not_starts_with?: Maybe<string>;

  city_ends_with?: Maybe<string>;

  city_not_ends_with?: Maybe<string>;

  zip?: Maybe<string>;

  zip_not?: Maybe<string>;

  zip_in?: Maybe<string[]>;

  zip_not_in?: Maybe<string[]>;

  zip_lt?: Maybe<string>;

  zip_lte?: Maybe<string>;

  zip_gt?: Maybe<string>;

  zip_gte?: Maybe<string>;

  zip_contains?: Maybe<string>;

  zip_not_contains?: Maybe<string>;

  zip_starts_with?: Maybe<string>;

  zip_not_starts_with?: Maybe<string>;

  zip_ends_with?: Maybe<string>;

  zip_not_ends_with?: Maybe<string>;

  AND?: Maybe<LocationWhereInput[]>;

  OR?: Maybe<LocationWhereInput[]>;

  NOT?: Maybe<LocationWhereInput[]>;
}

export interface InviteWhereInput {

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  email?: Maybe<string>;

  email_not?: Maybe<string>;

  email_in?: Maybe<string[]>;

  email_not_in?: Maybe<string[]>;

  email_lt?: Maybe<string>;

  email_lte?: Maybe<string>;

  email_gt?: Maybe<string>;

  email_gte?: Maybe<string>;

  email_contains?: Maybe<string>;

  email_not_contains?: Maybe<string>;

  email_starts_with?: Maybe<string>;

  email_not_starts_with?: Maybe<string>;

  email_ends_with?: Maybe<string>;

  email_not_ends_with?: Maybe<string>;

  expireAt?: Maybe<DateTime>;

  expireAt_not?: Maybe<DateTime>;

  expireAt_in?: Maybe<DateTime[]>;

  expireAt_not_in?: Maybe<DateTime[]>;

  expireAt_lt?: Maybe<DateTime>;

  expireAt_lte?: Maybe<DateTime>;

  expireAt_gt?: Maybe<DateTime>;

  expireAt_gte?: Maybe<DateTime>;

  invitedBy?: Maybe<UserWhereInput>;

  AND?: Maybe<InviteWhereInput[]>;

  OR?: Maybe<InviteWhereInput[]>;

  NOT?: Maybe<InviteWhereInput[]>;
}

export interface NotificationWhereInput {

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  type?: Maybe<NotificationType>;

  type_not?: Maybe<NotificationType>;

  type_in?: Maybe<NotificationType[]>;

  type_not_in?: Maybe<NotificationType[]>;

  user?: Maybe<UserWhereInput>;

  event?: Maybe<EventWhereInput>;

  AND?: Maybe<NotificationWhereInput[]>;

  OR?: Maybe<NotificationWhereInput[]>;

  NOT?: Maybe<NotificationWhereInput[]>;
}

export interface UserWhereUniqueInput {

  id?: Maybe<string>;

  email?: Maybe<string>;
}

export interface ApplicationCreateInput {

  type: ApplicationType;

  disqualificationLink?: Maybe<DisqualificationLinkCreateOneInput>;

  stage: StageCreateOneInput;

  job: JobCreateOneWithoutApplicationsInput;

  candidate: CandidateCreateOneWithoutApplicationsInput;
}

export interface DisqualificationLinkCreateOneInput {

  create?: Maybe<DisqualificationLinkCreateInput>;

  connect?: Maybe<DisqualificationLinkWhereUniqueInput>;
}

export interface DisqualificationLinkCreateInput {

  disqualification: DisqualificationCreateOneInput;

  createdBy: UserCreateOneInput;

  justification?: Maybe<string>;
}

export interface DisqualificationCreateOneInput {

  create?: Maybe<DisqualificationCreateInput>;

  connect?: Maybe<DisqualificationWhereUniqueInput>;
}

export interface DisqualificationCreateInput {

  name: string;

  description?: Maybe<string>;
}

export interface DisqualificationWhereUniqueInput {

  id?: Maybe<string>;
}

export interface UserCreateOneInput {

  create?: Maybe<UserCreateInput>;

  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateInput {

  workspace: WorkspaceCreateOneWithoutUsersInput;

  events?: Maybe<EventCreateOneWithoutActorUserInput>;

  notifications?: Maybe<NotificationCreateManyWithoutUserInput>;

  subscriptionJobs?: Maybe<JobCreateManyWithoutSubscribersInput>;

  subscriptionCandidates?: Maybe<CandidateCreateManyWithoutSubscribersInput>;

  subscriptionTasks?: Maybe<TaskCreateManyWithoutSubscribersInput>;

  tasks?: Maybe<TaskCreateManyWithoutOwnersInput>;

  firstName: string;

  lastName: string;

  email: string;

  username: string;

  lastLogin?: Maybe<DateTime>;

  deletedAt?: Maybe<DateTime>;

  position?: Maybe<string>;

  avatar?: Maybe<FileCreateOneInput>;
}

export interface WorkspaceCreateOneWithoutUsersInput {

  create?: Maybe<WorkspaceCreateWithoutUsersInput>;

  connect?: Maybe<WorkspaceWhereUniqueInput>;
}

export interface WorkspaceCreateWithoutUsersInput {

  events?: Maybe<EventCreateManyWithoutTargetWorkspaceInput>;

  jobs?: Maybe<JobCreateManyWithoutWorkspaceInput>;

  candidates?: Maybe<CandidateCreateManyWithoutWorkspaceInput>;

  workflows?: Maybe<WorkflowCreateManyInput>;

  workflowDefault?: Maybe<WorkflowCreateOneInput>;

  invites?: Maybe<InviteCreateManyInput>;

  tags?: Maybe<TagCreateManyInput>;

  name: string;
}

export interface EventCreateManyWithoutTargetWorkspaceInput {

  create?: Maybe<EventCreateWithoutTargetWorkspaceInput[]>;

  connect?: Maybe<EventWhereUniqueInput[]>;
}

export interface EventCreateWithoutTargetWorkspaceInput {

  type: EventType;

  actorType: EventActorType;

  actorUser?: Maybe<UserCreateOneWithoutEventsInput>;

  actorCandidate?: Maybe<CandidateCreateOneInput>;

  targetType: EventTargetType;

  targetCandidate?: Maybe<CandidateCreateOneWithoutEventsInput>;

  targetJob?: Maybe<JobCreateOneWithoutEventsInput>;

  targetTask?: Maybe<TaskCreateOneInput>;
}

export interface UserCreateOneWithoutEventsInput {

  create?: Maybe<UserCreateWithoutEventsInput>;

  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateWithoutEventsInput {

  workspace: WorkspaceCreateOneWithoutUsersInput;

  notifications?: Maybe<NotificationCreateManyWithoutUserInput>;

  subscriptionJobs?: Maybe<JobCreateManyWithoutSubscribersInput>;

  subscriptionCandidates?: Maybe<CandidateCreateManyWithoutSubscribersInput>;

  subscriptionTasks?: Maybe<TaskCreateManyWithoutSubscribersInput>;

  tasks?: Maybe<TaskCreateManyWithoutOwnersInput>;

  firstName: string;

  lastName: string;

  email: string;

  username: string;

  lastLogin?: Maybe<DateTime>;

  deletedAt?: Maybe<DateTime>;

  position?: Maybe<string>;

  avatar?: Maybe<FileCreateOneInput>;
}

export interface NotificationCreateManyWithoutUserInput {

  create?: Maybe<NotificationCreateWithoutUserInput[]>;

  connect?: Maybe<NotificationWhereUniqueInput[]>;
}

export interface NotificationCreateWithoutUserInput {

  type: NotificationType;

  event: EventCreateOneInput;
}

export interface EventCreateOneInput {

  create?: Maybe<EventCreateInput>;

  connect?: Maybe<EventWhereUniqueInput>;
}

export interface EventCreateInput {

  type: EventType;

  actorType: EventActorType;

  actorUser?: Maybe<UserCreateOneWithoutEventsInput>;

  actorCandidate?: Maybe<CandidateCreateOneInput>;

  targetType: EventTargetType;

  targetCandidate?: Maybe<CandidateCreateOneWithoutEventsInput>;

  targetJob?: Maybe<JobCreateOneWithoutEventsInput>;

  targetTask?: Maybe<TaskCreateOneInput>;

  targetWorkspace?: Maybe<WorkspaceCreateOneWithoutEventsInput>;
}

export interface CandidateCreateOneInput {

  create?: Maybe<CandidateCreateInput>;

  connect?: Maybe<CandidateWhereUniqueInput>;
}

export interface CandidateCreateInput {

  workspace: WorkspaceCreateOneWithoutCandidatesInput;

  events?: Maybe<EventCreateManyWithoutTargetCandidateInput>;

  subscribers?: Maybe<UserCreateManyWithoutSubscriptionCandidatesInput>;

  firstName: string;

  lastName: string;

  emails?: Maybe<CandidateCreateemailsInput>;

  phones?: Maybe<CandidateCreatephonesInput>;

  links?: Maybe<CandidateCreatelinksInput>;

  avatar?: Maybe<FileCreateOneInput>;

  metaCompany?: Maybe<string>;

  metaHeadline?: Maybe<string>;

  metaPosition?: Maybe<string>;

  resumesString?: Maybe<CandidateCreateresumesStringInput>;

  resumesFile?: Maybe<FileCreateManyInput>;

  coverLettersString?: Maybe<CandidateCreatecoverLettersStringInput>;

  coverLettersFile?: Maybe<FileCreateManyInput>;

  tags?: Maybe<TagCreateManyInput>;

  source?: Maybe<CandidateCreatesourceInput>;

  fields?: Maybe<FieldLinkCreateManyInput>;

  tasks?: Maybe<TaskCreateManyWithoutCandidateInput>;

  applications?: Maybe<ApplicationCreateManyWithoutCandidateInput>;

  comments?: Maybe<CommentCreateManyInput>;
}

export interface WorkspaceCreateOneWithoutCandidatesInput {

  create?: Maybe<WorkspaceCreateWithoutCandidatesInput>;

  connect?: Maybe<WorkspaceWhereUniqueInput>;
}

export interface WorkspaceCreateWithoutCandidatesInput {

  events?: Maybe<EventCreateManyWithoutTargetWorkspaceInput>;

  users?: Maybe<UserCreateManyWithoutWorkspaceInput>;

  jobs?: Maybe<JobCreateManyWithoutWorkspaceInput>;

  workflows?: Maybe<WorkflowCreateManyInput>;

  workflowDefault?: Maybe<WorkflowCreateOneInput>;

  invites?: Maybe<InviteCreateManyInput>;

  tags?: Maybe<TagCreateManyInput>;

  name: string;
}

export interface UserCreateManyWithoutWorkspaceInput {

  create?: Maybe<UserCreateWithoutWorkspaceInput[]>;

  connect?: Maybe<UserWhereUniqueInput[]>;
}

export interface UserCreateWithoutWorkspaceInput {

  events?: Maybe<EventCreateOneWithoutActorUserInput>;

  notifications?: Maybe<NotificationCreateManyWithoutUserInput>;

  subscriptionJobs?: Maybe<JobCreateManyWithoutSubscribersInput>;

  subscriptionCandidates?: Maybe<CandidateCreateManyWithoutSubscribersInput>;

  subscriptionTasks?: Maybe<TaskCreateManyWithoutSubscribersInput>;

  tasks?: Maybe<TaskCreateManyWithoutOwnersInput>;

  firstName: string;

  lastName: string;

  email: string;

  username: string;

  lastLogin?: Maybe<DateTime>;

  deletedAt?: Maybe<DateTime>;

  position?: Maybe<string>;

  avatar?: Maybe<FileCreateOneInput>;
}

export interface EventCreateOneWithoutActorUserInput {

  create?: Maybe<EventCreateWithoutActorUserInput>;

  connect?: Maybe<EventWhereUniqueInput>;
}

export interface EventCreateWithoutActorUserInput {

  type: EventType;

  actorType: EventActorType;

  actorCandidate?: Maybe<CandidateCreateOneInput>;

  targetType: EventTargetType;

  targetCandidate?: Maybe<CandidateCreateOneWithoutEventsInput>;

  targetJob?: Maybe<JobCreateOneWithoutEventsInput>;

  targetTask?: Maybe<TaskCreateOneInput>;

  targetWorkspace?: Maybe<WorkspaceCreateOneWithoutEventsInput>;
}

export interface CandidateCreateOneWithoutEventsInput {

  create?: Maybe<CandidateCreateWithoutEventsInput>;

  connect?: Maybe<CandidateWhereUniqueInput>;
}

export interface CandidateCreateWithoutEventsInput {

  workspace: WorkspaceCreateOneWithoutCandidatesInput;

  subscribers?: Maybe<UserCreateManyWithoutSubscriptionCandidatesInput>;

  firstName: string;

  lastName: string;

  emails?: Maybe<CandidateCreateemailsInput>;

  phones?: Maybe<CandidateCreatephonesInput>;

  links?: Maybe<CandidateCreatelinksInput>;

  avatar?: Maybe<FileCreateOneInput>;

  metaCompany?: Maybe<string>;

  metaHeadline?: Maybe<string>;

  metaPosition?: Maybe<string>;

  resumesString?: Maybe<CandidateCreateresumesStringInput>;

  resumesFile?: Maybe<FileCreateManyInput>;

  coverLettersString?: Maybe<CandidateCreatecoverLettersStringInput>;

  coverLettersFile?: Maybe<FileCreateManyInput>;

  tags?: Maybe<TagCreateManyInput>;

  source?: Maybe<CandidateCreatesourceInput>;

  fields?: Maybe<FieldLinkCreateManyInput>;

  tasks?: Maybe<TaskCreateManyWithoutCandidateInput>;

  applications?: Maybe<ApplicationCreateManyWithoutCandidateInput>;

  comments?: Maybe<CommentCreateManyInput>;
}

export interface UserCreateManyWithoutSubscriptionCandidatesInput {

  create?: Maybe<UserCreateWithoutSubscriptionCandidatesInput[]>;

  connect?: Maybe<UserWhereUniqueInput[]>;
}

export interface UserCreateWithoutSubscriptionCandidatesInput {

  workspace: WorkspaceCreateOneWithoutUsersInput;

  events?: Maybe<EventCreateOneWithoutActorUserInput>;

  notifications?: Maybe<NotificationCreateManyWithoutUserInput>;

  subscriptionJobs?: Maybe<JobCreateManyWithoutSubscribersInput>;

  subscriptionTasks?: Maybe<TaskCreateManyWithoutSubscribersInput>;

  tasks?: Maybe<TaskCreateManyWithoutOwnersInput>;

  firstName: string;

  lastName: string;

  email: string;

  username: string;

  lastLogin?: Maybe<DateTime>;

  deletedAt?: Maybe<DateTime>;

  position?: Maybe<string>;

  avatar?: Maybe<FileCreateOneInput>;
}

export interface JobCreateManyWithoutSubscribersInput {

  create?: Maybe<JobCreateWithoutSubscribersInput[]>;

  connect?: Maybe<JobWhereUniqueInput[]>;
}

export interface JobCreateWithoutSubscribersInput {

  workspace: WorkspaceCreateOneWithoutJobsInput;

  events?: Maybe<EventCreateManyWithoutTargetJobInput>;

  applications?: Maybe<ApplicationCreateManyWithoutJobInput>;

  workflow: WorkflowCreateOneInput;

  comments?: Maybe<CommentCreateManyInput>;

  type: JobType;

  department?: Maybe<string>;

  locations?: Maybe<LocationCreateManyInput>;

  name: string;

  description?: Maybe<string>;

  requirements?: Maybe<string>;
}

export interface WorkspaceCreateOneWithoutJobsInput {

  create?: Maybe<WorkspaceCreateWithoutJobsInput>;

  connect?: Maybe<WorkspaceWhereUniqueInput>;
}

export interface WorkspaceCreateWithoutJobsInput {

  events?: Maybe<EventCreateManyWithoutTargetWorkspaceInput>;

  users?: Maybe<UserCreateManyWithoutWorkspaceInput>;

  candidates?: Maybe<CandidateCreateManyWithoutWorkspaceInput>;

  workflows?: Maybe<WorkflowCreateManyInput>;

  workflowDefault?: Maybe<WorkflowCreateOneInput>;

  invites?: Maybe<InviteCreateManyInput>;

  tags?: Maybe<TagCreateManyInput>;

  name: string;
}

export interface CandidateCreateManyWithoutWorkspaceInput {

  create?: Maybe<CandidateCreateWithoutWorkspaceInput[]>;

  connect?: Maybe<CandidateWhereUniqueInput[]>;
}

export interface CandidateCreateWithoutWorkspaceInput {

  events?: Maybe<EventCreateManyWithoutTargetCandidateInput>;

  subscribers?: Maybe<UserCreateManyWithoutSubscriptionCandidatesInput>;

  firstName: string;

  lastName: string;

  emails?: Maybe<CandidateCreateemailsInput>;

  phones?: Maybe<CandidateCreatephonesInput>;

  links?: Maybe<CandidateCreatelinksInput>;

  avatar?: Maybe<FileCreateOneInput>;

  metaCompany?: Maybe<string>;

  metaHeadline?: Maybe<string>;

  metaPosition?: Maybe<string>;

  resumesString?: Maybe<CandidateCreateresumesStringInput>;

  resumesFile?: Maybe<FileCreateManyInput>;

  coverLettersString?: Maybe<CandidateCreatecoverLettersStringInput>;

  coverLettersFile?: Maybe<FileCreateManyInput>;

  tags?: Maybe<TagCreateManyInput>;

  source?: Maybe<CandidateCreatesourceInput>;

  fields?: Maybe<FieldLinkCreateManyInput>;

  tasks?: Maybe<TaskCreateManyWithoutCandidateInput>;

  applications?: Maybe<ApplicationCreateManyWithoutCandidateInput>;

  comments?: Maybe<CommentCreateManyInput>;
}

export interface EventCreateManyWithoutTargetCandidateInput {

  create?: Maybe<EventCreateWithoutTargetCandidateInput[]>;

  connect?: Maybe<EventWhereUniqueInput[]>;
}

export interface EventCreateWithoutTargetCandidateInput {

  type: EventType;

  actorType: EventActorType;

  actorUser?: Maybe<UserCreateOneWithoutEventsInput>;

  actorCandidate?: Maybe<CandidateCreateOneInput>;

  targetType: EventTargetType;

  targetJob?: Maybe<JobCreateOneWithoutEventsInput>;

  targetTask?: Maybe<TaskCreateOneInput>;

  targetWorkspace?: Maybe<WorkspaceCreateOneWithoutEventsInput>;
}

export interface JobCreateOneWithoutEventsInput {

  create?: Maybe<JobCreateWithoutEventsInput>;

  connect?: Maybe<JobWhereUniqueInput>;
}

export interface JobCreateWithoutEventsInput {

  workspace: WorkspaceCreateOneWithoutJobsInput;

  subscribers?: Maybe<UserCreateManyWithoutSubscriptionJobsInput>;

  applications?: Maybe<ApplicationCreateManyWithoutJobInput>;

  workflow: WorkflowCreateOneInput;

  comments?: Maybe<CommentCreateManyInput>;

  type: JobType;

  department?: Maybe<string>;

  locations?: Maybe<LocationCreateManyInput>;

  name: string;

  description?: Maybe<string>;

  requirements?: Maybe<string>;
}

export interface UserCreateManyWithoutSubscriptionJobsInput {

  create?: Maybe<UserCreateWithoutSubscriptionJobsInput[]>;

  connect?: Maybe<UserWhereUniqueInput[]>;
}

export interface UserCreateWithoutSubscriptionJobsInput {

  workspace: WorkspaceCreateOneWithoutUsersInput;

  events?: Maybe<EventCreateOneWithoutActorUserInput>;

  notifications?: Maybe<NotificationCreateManyWithoutUserInput>;

  subscriptionCandidates?: Maybe<CandidateCreateManyWithoutSubscribersInput>;

  subscriptionTasks?: Maybe<TaskCreateManyWithoutSubscribersInput>;

  tasks?: Maybe<TaskCreateManyWithoutOwnersInput>;

  firstName: string;

  lastName: string;

  email: string;

  username: string;

  lastLogin?: Maybe<DateTime>;

  deletedAt?: Maybe<DateTime>;

  position?: Maybe<string>;

  avatar?: Maybe<FileCreateOneInput>;
}

export interface CandidateCreateManyWithoutSubscribersInput {

  create?: Maybe<CandidateCreateWithoutSubscribersInput[]>;

  connect?: Maybe<CandidateWhereUniqueInput[]>;
}

export interface CandidateCreateWithoutSubscribersInput {

  workspace: WorkspaceCreateOneWithoutCandidatesInput;

  events?: Maybe<EventCreateManyWithoutTargetCandidateInput>;

  firstName: string;

  lastName: string;

  emails?: Maybe<CandidateCreateemailsInput>;

  phones?: Maybe<CandidateCreatephonesInput>;

  links?: Maybe<CandidateCreatelinksInput>;

  avatar?: Maybe<FileCreateOneInput>;

  metaCompany?: Maybe<string>;

  metaHeadline?: Maybe<string>;

  metaPosition?: Maybe<string>;

  resumesString?: Maybe<CandidateCreateresumesStringInput>;

  resumesFile?: Maybe<FileCreateManyInput>;

  coverLettersString?: Maybe<CandidateCreatecoverLettersStringInput>;

  coverLettersFile?: Maybe<FileCreateManyInput>;

  tags?: Maybe<TagCreateManyInput>;

  source?: Maybe<CandidateCreatesourceInput>;

  fields?: Maybe<FieldLinkCreateManyInput>;

  tasks?: Maybe<TaskCreateManyWithoutCandidateInput>;

  applications?: Maybe<ApplicationCreateManyWithoutCandidateInput>;

  comments?: Maybe<CommentCreateManyInput>;
}

export interface CandidateCreateemailsInput {

  set?: Maybe<string[]>;
}

export interface CandidateCreatephonesInput {

  set?: Maybe<string[]>;
}

export interface CandidateCreatelinksInput {

  set?: Maybe<string[]>;
}

export interface FileCreateOneInput {

  create?: Maybe<FileCreateInput>;

  connect?: Maybe<FileWhereUniqueInput>;
}

export interface FileCreateInput {

  size: number;

  type: string;

  name: string;

  url: string;
}

export interface FileWhereUniqueInput {

  id?: Maybe<string>;

  url?: Maybe<string>;
}

export interface CandidateCreateresumesStringInput {

  set?: Maybe<string[]>;
}

export interface FileCreateManyInput {

  create?: Maybe<FileCreateInput[]>;

  connect?: Maybe<FileWhereUniqueInput[]>;
}

export interface CandidateCreatecoverLettersStringInput {

  set?: Maybe<string[]>;
}

export interface TagCreateManyInput {

  create?: Maybe<TagCreateInput[]>;

  connect?: Maybe<TagWhereUniqueInput[]>;
}

export interface TagCreateInput {

  label: string;
}

export interface TagWhereUniqueInput {

  id?: Maybe<string>;
}

export interface CandidateCreatesourceInput {

  set?: Maybe<string[]>;
}

export interface FieldLinkCreateManyInput {

  create?: Maybe<FieldLinkCreateInput[]>;

  connect?: Maybe<FieldLinkWhereUniqueInput[]>;
}

export interface FieldLinkCreateInput {

  field: FieldCreateOneInput;

  value?: Maybe<string>;
}

export interface FieldCreateOneInput {

  create?: Maybe<FieldCreateInput>;

  connect?: Maybe<FieldWhereUniqueInput>;
}

export interface FieldCreateInput {

  type: FieldType;

  label: string;
}

export interface FieldWhereUniqueInput {

  id?: Maybe<string>;
}

export interface FieldLinkWhereUniqueInput {

  id?: Maybe<string>;
}

export interface TaskCreateManyWithoutCandidateInput {

  create?: Maybe<TaskCreateWithoutCandidateInput[]>;

  connect?: Maybe<TaskWhereUniqueInput[]>;
}

export interface TaskCreateWithoutCandidateInput {

  subscribers?: Maybe<UserCreateManyWithoutSubscriptionTasksInput>;

  owners?: Maybe<UserCreateManyWithoutTasksInput>;

  title?: Maybe<string>;

  description?: Maybe<string>;

  dueAt?: Maybe<DateTime>;
}

export interface UserCreateManyWithoutSubscriptionTasksInput {

  create?: Maybe<UserCreateWithoutSubscriptionTasksInput[]>;

  connect?: Maybe<UserWhereUniqueInput[]>;
}

export interface UserCreateWithoutSubscriptionTasksInput {

  workspace: WorkspaceCreateOneWithoutUsersInput;

  events?: Maybe<EventCreateOneWithoutActorUserInput>;

  notifications?: Maybe<NotificationCreateManyWithoutUserInput>;

  subscriptionJobs?: Maybe<JobCreateManyWithoutSubscribersInput>;

  subscriptionCandidates?: Maybe<CandidateCreateManyWithoutSubscribersInput>;

  tasks?: Maybe<TaskCreateManyWithoutOwnersInput>;

  firstName: string;

  lastName: string;

  email: string;

  username: string;

  lastLogin?: Maybe<DateTime>;

  deletedAt?: Maybe<DateTime>;

  position?: Maybe<string>;

  avatar?: Maybe<FileCreateOneInput>;
}

export interface TaskCreateManyWithoutOwnersInput {

  create?: Maybe<TaskCreateWithoutOwnersInput[]>;

  connect?: Maybe<TaskWhereUniqueInput[]>;
}

export interface TaskCreateWithoutOwnersInput {

  subscribers?: Maybe<UserCreateManyWithoutSubscriptionTasksInput>;

  candidate?: Maybe<CandidateCreateOneWithoutTasksInput>;

  title?: Maybe<string>;

  description?: Maybe<string>;

  dueAt?: Maybe<DateTime>;
}

export interface CandidateCreateOneWithoutTasksInput {

  create?: Maybe<CandidateCreateWithoutTasksInput>;

  connect?: Maybe<CandidateWhereUniqueInput>;
}

export interface CandidateCreateWithoutTasksInput {

  workspace: WorkspaceCreateOneWithoutCandidatesInput;

  events?: Maybe<EventCreateManyWithoutTargetCandidateInput>;

  subscribers?: Maybe<UserCreateManyWithoutSubscriptionCandidatesInput>;

  firstName: string;

  lastName: string;

  emails?: Maybe<CandidateCreateemailsInput>;

  phones?: Maybe<CandidateCreatephonesInput>;

  links?: Maybe<CandidateCreatelinksInput>;

  avatar?: Maybe<FileCreateOneInput>;

  metaCompany?: Maybe<string>;

  metaHeadline?: Maybe<string>;

  metaPosition?: Maybe<string>;

  resumesString?: Maybe<CandidateCreateresumesStringInput>;

  resumesFile?: Maybe<FileCreateManyInput>;

  coverLettersString?: Maybe<CandidateCreatecoverLettersStringInput>;

  coverLettersFile?: Maybe<FileCreateManyInput>;

  tags?: Maybe<TagCreateManyInput>;

  source?: Maybe<CandidateCreatesourceInput>;

  fields?: Maybe<FieldLinkCreateManyInput>;

  applications?: Maybe<ApplicationCreateManyWithoutCandidateInput>;

  comments?: Maybe<CommentCreateManyInput>;
}

export interface ApplicationCreateManyWithoutCandidateInput {

  create?: Maybe<ApplicationCreateWithoutCandidateInput[]>;

  connect?: Maybe<ApplicationWhereUniqueInput[]>;
}

export interface ApplicationCreateWithoutCandidateInput {

  type: ApplicationType;

  disqualificationLink?: Maybe<DisqualificationLinkCreateOneInput>;

  stage: StageCreateOneInput;

  job: JobCreateOneWithoutApplicationsInput;
}

export interface StageCreateOneInput {

  create?: Maybe<StageCreateInput>;

  connect?: Maybe<StageWhereUniqueInput>;
}

export interface StageCreateInput {

  name: string;

  description?: Maybe<string>;

  type: StageType;
}

export interface StageWhereUniqueInput {

  id?: Maybe<string>;
}

export interface JobCreateOneWithoutApplicationsInput {

  create?: Maybe<JobCreateWithoutApplicationsInput>;

  connect?: Maybe<JobWhereUniqueInput>;
}

export interface JobCreateWithoutApplicationsInput {

  workspace: WorkspaceCreateOneWithoutJobsInput;

  subscribers?: Maybe<UserCreateManyWithoutSubscriptionJobsInput>;

  events?: Maybe<EventCreateManyWithoutTargetJobInput>;

  workflow: WorkflowCreateOneInput;

  comments?: Maybe<CommentCreateManyInput>;

  type: JobType;

  department?: Maybe<string>;

  locations?: Maybe<LocationCreateManyInput>;

  name: string;

  description?: Maybe<string>;

  requirements?: Maybe<string>;
}

export interface EventCreateManyWithoutTargetJobInput {

  create?: Maybe<EventCreateWithoutTargetJobInput[]>;

  connect?: Maybe<EventWhereUniqueInput[]>;
}

export interface EventCreateWithoutTargetJobInput {

  type: EventType;

  actorType: EventActorType;

  actorUser?: Maybe<UserCreateOneWithoutEventsInput>;

  actorCandidate?: Maybe<CandidateCreateOneInput>;

  targetType: EventTargetType;

  targetCandidate?: Maybe<CandidateCreateOneWithoutEventsInput>;

  targetTask?: Maybe<TaskCreateOneInput>;

  targetWorkspace?: Maybe<WorkspaceCreateOneWithoutEventsInput>;
}

export interface TaskCreateOneInput {

  create?: Maybe<TaskCreateInput>;

  connect?: Maybe<TaskWhereUniqueInput>;
}

export interface TaskCreateInput {

  subscribers?: Maybe<UserCreateManyWithoutSubscriptionTasksInput>;

  owners?: Maybe<UserCreateManyWithoutTasksInput>;

  candidate?: Maybe<CandidateCreateOneWithoutTasksInput>;

  title?: Maybe<string>;

  description?: Maybe<string>;

  dueAt?: Maybe<DateTime>;
}

export interface UserCreateManyWithoutTasksInput {

  create?: Maybe<UserCreateWithoutTasksInput[]>;

  connect?: Maybe<UserWhereUniqueInput[]>;
}

export interface UserCreateWithoutTasksInput {

  workspace: WorkspaceCreateOneWithoutUsersInput;

  events?: Maybe<EventCreateOneWithoutActorUserInput>;

  notifications?: Maybe<NotificationCreateManyWithoutUserInput>;

  subscriptionJobs?: Maybe<JobCreateManyWithoutSubscribersInput>;

  subscriptionCandidates?: Maybe<CandidateCreateManyWithoutSubscribersInput>;

  subscriptionTasks?: Maybe<TaskCreateManyWithoutSubscribersInput>;

  firstName: string;

  lastName: string;

  email: string;

  username: string;

  lastLogin?: Maybe<DateTime>;

  deletedAt?: Maybe<DateTime>;

  position?: Maybe<string>;

  avatar?: Maybe<FileCreateOneInput>;
}

export interface TaskCreateManyWithoutSubscribersInput {

  create?: Maybe<TaskCreateWithoutSubscribersInput[]>;

  connect?: Maybe<TaskWhereUniqueInput[]>;
}

export interface TaskCreateWithoutSubscribersInput {

  owners?: Maybe<UserCreateManyWithoutTasksInput>;

  candidate?: Maybe<CandidateCreateOneWithoutTasksInput>;

  title?: Maybe<string>;

  description?: Maybe<string>;

  dueAt?: Maybe<DateTime>;
}

export interface TaskWhereUniqueInput {

  id?: Maybe<string>;
}

export interface WorkspaceCreateOneWithoutEventsInput {

  create?: Maybe<WorkspaceCreateWithoutEventsInput>;

  connect?: Maybe<WorkspaceWhereUniqueInput>;
}

export interface WorkspaceCreateWithoutEventsInput {

  users?: Maybe<UserCreateManyWithoutWorkspaceInput>;

  jobs?: Maybe<JobCreateManyWithoutWorkspaceInput>;

  candidates?: Maybe<CandidateCreateManyWithoutWorkspaceInput>;

  workflows?: Maybe<WorkflowCreateManyInput>;

  workflowDefault?: Maybe<WorkflowCreateOneInput>;

  invites?: Maybe<InviteCreateManyInput>;

  tags?: Maybe<TagCreateManyInput>;

  name: string;
}

export interface JobCreateManyWithoutWorkspaceInput {

  create?: Maybe<JobCreateWithoutWorkspaceInput[]>;

  connect?: Maybe<JobWhereUniqueInput[]>;
}

export interface JobCreateWithoutWorkspaceInput {

  subscribers?: Maybe<UserCreateManyWithoutSubscriptionJobsInput>;

  events?: Maybe<EventCreateManyWithoutTargetJobInput>;

  applications?: Maybe<ApplicationCreateManyWithoutJobInput>;

  workflow: WorkflowCreateOneInput;

  comments?: Maybe<CommentCreateManyInput>;

  type: JobType;

  department?: Maybe<string>;

  locations?: Maybe<LocationCreateManyInput>;

  name: string;

  description?: Maybe<string>;

  requirements?: Maybe<string>;
}

export interface ApplicationCreateManyWithoutJobInput {

  create?: Maybe<ApplicationCreateWithoutJobInput[]>;

  connect?: Maybe<ApplicationWhereUniqueInput[]>;
}

export interface ApplicationCreateWithoutJobInput {

  type: ApplicationType;

  disqualificationLink?: Maybe<DisqualificationLinkCreateOneInput>;

  stage: StageCreateOneInput;

  candidate: CandidateCreateOneWithoutApplicationsInput;
}

export interface CandidateCreateOneWithoutApplicationsInput {

  create?: Maybe<CandidateCreateWithoutApplicationsInput>;

  connect?: Maybe<CandidateWhereUniqueInput>;
}

export interface CandidateCreateWithoutApplicationsInput {

  workspace: WorkspaceCreateOneWithoutCandidatesInput;

  events?: Maybe<EventCreateManyWithoutTargetCandidateInput>;

  subscribers?: Maybe<UserCreateManyWithoutSubscriptionCandidatesInput>;

  firstName: string;

  lastName: string;

  emails?: Maybe<CandidateCreateemailsInput>;

  phones?: Maybe<CandidateCreatephonesInput>;

  links?: Maybe<CandidateCreatelinksInput>;

  avatar?: Maybe<FileCreateOneInput>;

  metaCompany?: Maybe<string>;

  metaHeadline?: Maybe<string>;

  metaPosition?: Maybe<string>;

  resumesString?: Maybe<CandidateCreateresumesStringInput>;

  resumesFile?: Maybe<FileCreateManyInput>;

  coverLettersString?: Maybe<CandidateCreatecoverLettersStringInput>;

  coverLettersFile?: Maybe<FileCreateManyInput>;

  tags?: Maybe<TagCreateManyInput>;

  source?: Maybe<CandidateCreatesourceInput>;

  fields?: Maybe<FieldLinkCreateManyInput>;

  tasks?: Maybe<TaskCreateManyWithoutCandidateInput>;

  comments?: Maybe<CommentCreateManyInput>;
}

export interface CommentCreateManyInput {

  create?: Maybe<CommentCreateInput[]>;

  connect?: Maybe<CommentWhereUniqueInput[]>;
}

export interface CommentCreateInput {

  createdBy: UserCreateOneInput;

  parent?: Maybe<CommentCreateOneInput>;

  content: string;
}

export interface CommentCreateOneInput {

  create?: Maybe<CommentCreateInput>;

  connect?: Maybe<CommentWhereUniqueInput>;
}

export interface CommentWhereUniqueInput {

  id?: Maybe<string>;
}

export interface CandidateWhereUniqueInput {

  id?: Maybe<string>;
}

export interface ApplicationWhereUniqueInput {

  id?: Maybe<string>;
}

export interface WorkflowCreateOneInput {

  create?: Maybe<WorkflowCreateInput>;

  connect?: Maybe<WorkflowWhereUniqueInput>;
}

export interface WorkflowCreateInput {

  name: string;

  description?: Maybe<string>;

  stages?: Maybe<StageCreateManyInput>;

  disqualifications?: Maybe<DisqualificationCreateManyInput>;

  fields?: Maybe<FieldCreateManyInput>;
}

export interface StageCreateManyInput {

  create?: Maybe<StageCreateInput[]>;

  connect?: Maybe<StageWhereUniqueInput[]>;
}

export interface DisqualificationCreateManyInput {

  create?: Maybe<DisqualificationCreateInput[]>;

  connect?: Maybe<DisqualificationWhereUniqueInput[]>;
}

export interface FieldCreateManyInput {

  create?: Maybe<FieldCreateInput[]>;

  connect?: Maybe<FieldWhereUniqueInput[]>;
}

export interface WorkflowWhereUniqueInput {

  id?: Maybe<string>;
}

export interface LocationCreateManyInput {

  create?: Maybe<LocationCreateInput[]>;

  connect?: Maybe<LocationWhereUniqueInput[]>;
}

export interface LocationCreateInput {

  country: string;

  region: string;

  city: string;

  zip: string;
}

export interface LocationWhereUniqueInput {

  id?: Maybe<string>;
}

export interface JobWhereUniqueInput {

  id?: Maybe<string>;
}

export interface WorkflowCreateManyInput {

  create?: Maybe<WorkflowCreateInput[]>;

  connect?: Maybe<WorkflowWhereUniqueInput[]>;
}

export interface InviteCreateManyInput {

  create?: Maybe<InviteCreateInput[]>;

  connect?: Maybe<InviteWhereUniqueInput[]>;
}

export interface InviteCreateInput {

  email: string;
}

export interface InviteWhereUniqueInput {

  id?: Maybe<string>;
}

export interface WorkspaceWhereUniqueInput {

  id?: Maybe<string>;
}

export interface EventWhereUniqueInput {

  id?: Maybe<string>;
}

export interface NotificationWhereUniqueInput {

  id?: Maybe<string>;
}

export interface DisqualificationLinkWhereUniqueInput {

  id?: Maybe<string>;
}

export interface JobCreateInput {

  workspace: WorkspaceCreateOneWithoutJobsInput;

  subscribers?: Maybe<UserCreateManyWithoutSubscriptionJobsInput>;

  events?: Maybe<EventCreateManyWithoutTargetJobInput>;

  applications?: Maybe<ApplicationCreateManyWithoutJobInput>;

  workflow: WorkflowCreateOneInput;

  comments?: Maybe<CommentCreateManyInput>;

  type: JobType;

  department?: Maybe<string>;

  locations?: Maybe<LocationCreateManyInput>;

  name: string;

  description?: Maybe<string>;

  requirements?: Maybe<string>;
}

export interface LoginInput {

  email: string;

  password: string;
}

export interface RefreshInput {

  token: string;
}

export interface SignupInput {

  password: string;

  username: string;

  inviteId: string;
}

export interface WorkspaceCreateInput {

  name: string;

  firstName?: Maybe<string>;

  lastName?: Maybe<string>;

  email: string;

  username: string;

  password: string;
}

  export enum EventType {
    Default = "Default",
    Message = "Message",
    CommentCreate = "CommentCreate",
    CommentEdit = "CommentEdit",
    CommentDelete = "CommentDelete",
  }

  export enum EventActorType {
    System = "System",
    User = "User",
    Candidate = "Candidate",
  }

  export enum ApplicationType {
    Qualified = "Qualified",
    Disqualified = "Disqualified",
  }

  export enum StageType {
    New = "New",
    Pipeline = "Pipeline",
    Final = "Final",
  }

  export enum FieldType {
    Int = "Int",
    Float = "Float",
    String = "String",
    Text = "Text",
    Boolean = "Boolean",
    DateTime = "DateTime",
  }

  export enum JobType {
    Draft = "Draft",
    Published = "Published",
    Archived = "Archived",
  }

  export enum NotificationType {
    Unread = "Unread",
    Read = "Read",
  }

  export enum EventTargetType {
    Candidate = "Candidate",
    Job = "Job",
    Task = "Task",
    Workspace = "Workspace",
  }

  export enum EventOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    TypeAsc = "type_ASC",
    TypeDesc = "type_DESC",
    ActorTypeAsc = "actorType_ASC",
    ActorTypeDesc = "actorType_DESC",
    TargetTypeAsc = "targetType_ASC",
    TargetTypeDesc = "targetType_DESC",
  }

  export enum UserOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    FirstNameAsc = "firstName_ASC",
    FirstNameDesc = "firstName_DESC",
    LastNameAsc = "lastName_ASC",
    LastNameDesc = "lastName_DESC",
    EmailAsc = "email_ASC",
    EmailDesc = "email_DESC",
    UsernameAsc = "username_ASC",
    UsernameDesc = "username_DESC",
    LastLoginAsc = "lastLogin_ASC",
    LastLoginDesc = "lastLogin_DESC",
    DeletedAtAsc = "deletedAt_ASC",
    DeletedAtDesc = "deletedAt_DESC",
    PositionAsc = "position_ASC",
    PositionDesc = "position_DESC",
  }

  export enum FileOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    SizeAsc = "size_ASC",
    SizeDesc = "size_DESC",
    TypeAsc = "type_ASC",
    TypeDesc = "type_DESC",
    NameAsc = "name_ASC",
    NameDesc = "name_DESC",
    UrlAsc = "url_ASC",
    UrlDesc = "url_DESC",
  }

  export enum TagOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    LabelAsc = "label_ASC",
    LabelDesc = "label_DESC",
  }

  export enum FieldLinkOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    ValueAsc = "value_ASC",
    ValueDesc = "value_DESC",
  }

  export enum TaskOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    TitleAsc = "title_ASC",
    TitleDesc = "title_DESC",
    DescriptionAsc = "description_ASC",
    DescriptionDesc = "description_DESC",
    DueAtAsc = "dueAt_ASC",
    DueAtDesc = "dueAt_DESC",
  }

  export enum ApplicationOrderByInput {
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    TypeAsc = "type_ASC",
    TypeDesc = "type_DESC",
  }

  export enum StageOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    NameAsc = "name_ASC",
    NameDesc = "name_DESC",
    DescriptionAsc = "description_ASC",
    DescriptionDesc = "description_DESC",
    TypeAsc = "type_ASC",
    TypeDesc = "type_DESC",
  }

  export enum DisqualificationOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    NameAsc = "name_ASC",
    NameDesc = "name_DESC",
    DescriptionAsc = "description_ASC",
    DescriptionDesc = "description_DESC",
  }

  export enum FieldOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    TypeAsc = "type_ASC",
    TypeDesc = "type_DESC",
    LabelAsc = "label_ASC",
    LabelDesc = "label_DESC",
  }

  export enum CommentOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    ContentAsc = "content_ASC",
    ContentDesc = "content_DESC",
  }

  export enum LocationOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CountryAsc = "country_ASC",
    CountryDesc = "country_DESC",
    RegionAsc = "region_ASC",
    RegionDesc = "region_DESC",
    CityAsc = "city_ASC",
    CityDesc = "city_DESC",
    ZipAsc = "zip_ASC",
    ZipDesc = "zip_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
  }

  export enum JobOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    TypeAsc = "type_ASC",
    TypeDesc = "type_DESC",
    DepartmentAsc = "department_ASC",
    DepartmentDesc = "department_DESC",
    NameAsc = "name_ASC",
    NameDesc = "name_DESC",
    DescriptionAsc = "description_ASC",
    DescriptionDesc = "description_DESC",
    RequirementsAsc = "requirements_ASC",
    RequirementsDesc = "requirements_DESC",
  }

  export enum CandidateOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    FirstNameAsc = "firstName_ASC",
    FirstNameDesc = "firstName_DESC",
    LastNameAsc = "lastName_ASC",
    LastNameDesc = "lastName_DESC",
    MetaCompanyAsc = "metaCompany_ASC",
    MetaCompanyDesc = "metaCompany_DESC",
    MetaHeadlineAsc = "metaHeadline_ASC",
    MetaHeadlineDesc = "metaHeadline_DESC",
    MetaPositionAsc = "metaPosition_ASC",
    MetaPositionDesc = "metaPosition_DESC",
  }

  export enum WorkflowOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    NameAsc = "name_ASC",
    NameDesc = "name_DESC",
    DescriptionAsc = "description_ASC",
    DescriptionDesc = "description_DESC",
  }

  export enum InviteOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    EmailAsc = "email_ASC",
    EmailDesc = "email_DESC",
    ExpireAtAsc = "expireAt_ASC",
    ExpireAtDesc = "expireAt_DESC",
  }

  export enum NotificationOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    TypeAsc = "type_ASC",
    TypeDesc = "type_DESC",
  }


export type DateTime = any;



// ====================================================
// Scalars
// ====================================================





// ====================================================
// Interfaces
// ====================================================



export interface Node {

  id: string;
}




// ====================================================
// Types
// ====================================================



export interface Query {

  users: User;

  user?: Maybe<User>;
}


export interface User {

  id: string;

  createdAt: DateTime;

  updatedAt: DateTime;

  workspace: Workspace;

  events?: Maybe<Event>;

  notifications?: Maybe<Notification[]>;

  subscriptionJobs?: Maybe<Job[]>;

  subscriptionCandidates?: Maybe<Candidate[]>;

  subscriptionTasks?: Maybe<Task[]>;

  tasks?: Maybe<Task[]>;

  firstName: string;

  lastName: string;

  email: string;

  username: string;

  lastLogin?: Maybe<DateTime>;

  deletedAt?: Maybe<DateTime>;

  position?: Maybe<string>;

  avatar?: Maybe<File>;
}


export interface Workspace {

  id: string;

  createdAt: DateTime;

  updatedAt: DateTime;

  events?: Maybe<Event[]>;

  users?: Maybe<User[]>;

  jobs?: Maybe<Job[]>;

  candidates?: Maybe<Candidate[]>;

  workflows?: Maybe<Workflow[]>;

  workflowDefault?: Maybe<Workflow>;

  invites?: Maybe<Invite[]>;

  tags?: Maybe<Tag[]>;

  name: string;
}


export interface Event {

  id: string;

  createdAt: DateTime;

  updatedAt: DateTime;

  type: EventType;

  actorType: EventActorType;

  actorUser?: Maybe<User>;

  actorCandidate?: Maybe<Candidate>;

  targetType: EventTargetType;

  targetCandidate?: Maybe<Candidate>;

  targetJob?: Maybe<Job>;

  targetTask?: Maybe<Task>;

  targetWorkspace?: Maybe<Workspace>;
}


export interface Candidate {

  id: string;

  createdAt: DateTime;

  updatedAt: DateTime;

  workspace: Workspace;

  events?: Maybe<Event[]>;

  subscribers?: Maybe<User[]>;

  firstName: string;

  lastName: string;

  emails: string[];

  phones: string[];

  links: string[];

  avatar?: Maybe<File>;

  metaCompany?: Maybe<string>;

  metaHeadline?: Maybe<string>;

  metaPosition?: Maybe<string>;

  resumesString: string[];

  resumesFile?: Maybe<File[]>;

  coverLettersString: string[];

  coverLettersFile?: Maybe<File[]>;

  tags?: Maybe<Tag[]>;

  source: string[];

  fields?: Maybe<FieldLink[]>;

  tasks?: Maybe<Task[]>;

  applications?: Maybe<Application[]>;

  comments?: Maybe<Comment[]>;
}


export interface File {

  id: string;

  createdAt: DateTime;

  updatedAt: DateTime;

  size: number;

  type: string;

  name: string;

  url: string;
}


export interface Tag {

  id: string;

  createdAt: DateTime;

  updatedAt: DateTime;

  label: string;
}


export interface FieldLink {

  id: string;

  createdAt: DateTime;

  updatedAt: DateTime;

  field: Field;

  value?: Maybe<string>;
}


export interface Field {

  id: string;

  createdAt: DateTime;

  updatedAt: DateTime;

  type: FieldType;

  label: string;
}


export interface Task {

  id: string;

  createdAt: DateTime;

  updatedAt: DateTime;

  subscribers?: Maybe<User[]>;

  owners?: Maybe<User[]>;

  candidate?: Maybe<Candidate>;

  title?: Maybe<string>;

  description?: Maybe<string>;

  dueAt?: Maybe<DateTime>;
}


export interface Application {

  createdAt: DateTime;

  id: string;

  updatedAt: DateTime;

  type: ApplicationType;

  disqualificationLink?: Maybe<DisqualificationLink>;

  stage: Stage;

  job: Job;

  candidate: Candidate;
}


export interface DisqualificationLink {

  id: string;

  createdAt: DateTime;

  updatedAt: DateTime;

  disqualification: Disqualification;

  createdBy: User;

  justification?: Maybe<string>;
}


export interface Disqualification {

  id: string;

  createdAt: DateTime;

  updatedAt: DateTime;

  name: string;

  description?: Maybe<string>;
}


export interface Stage {

  id: string;

  createdAt: DateTime;

  updatedAt: DateTime;

  name: string;

  description?: Maybe<string>;

  type: StageType;
}


export interface Job {

  id: string;

  createdAt: DateTime;

  updatedAt: DateTime;

  workspace: Workspace;

  subscribers?: Maybe<User[]>;

  events?: Maybe<Event[]>;

  applications?: Maybe<Application[]>;

  workflow: Workflow;

  comments?: Maybe<Comment[]>;

  type: JobType;

  department?: Maybe<string>;

  locations?: Maybe<Location[]>;

  name: string;

  description?: Maybe<string>;

  requirements?: Maybe<string>;
}


export interface Workflow {

  id: string;

  createdAt: DateTime;

  updatedAt: DateTime;

  name: string;

  description?: Maybe<string>;

  stages?: Maybe<Stage[]>;

  disqualifications?: Maybe<Disqualification[]>;

  fields?: Maybe<Field[]>;
}


export interface Comment {

  id: string;

  createdAt: DateTime;

  updatedAt: DateTime;

  createdBy: User;

  parent?: Maybe<Comment>;

  content: string;
}


export interface Location {

  id: string;

  country: string;

  region: string;

  city: string;

  zip: string;
}


export interface Invite {

  id: string;

  createdAt: DateTime;

  updatedAt: DateTime;

  email: string;

  expireAt: DateTime;

  invitedBy: User;
}


export interface Notification {

  id: string;

  createdAt: DateTime;

  updatedAt: DateTime;

  type: NotificationType;

  user: User;

  event: Event;
}


export interface Mutation {

  createApplication: Application;

  createCandidate: Candidate;

  createJob: Job;

  createTask: Task;
}


export interface AccessPayload {

  token: string;
}


export interface AuthPayload {

  token: string;

  refresh: string;
}



// ====================================================
// Arguments
// ====================================================

export interface UserQueryArgs {

  where: UserWhereUniqueInput;
}
export interface NotificationsUserArgs {

  where?: Maybe<NotificationWhereInput>;

  orderBy?: Maybe<NotificationOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface SubscriptionJobsUserArgs {

  where?: Maybe<JobWhereInput>;

  orderBy?: Maybe<JobOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface SubscriptionCandidatesUserArgs {

  where?: Maybe<CandidateWhereInput>;

  orderBy?: Maybe<CandidateOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface SubscriptionTasksUserArgs {

  where?: Maybe<TaskWhereInput>;

  orderBy?: Maybe<TaskOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface TasksUserArgs {

  where?: Maybe<TaskWhereInput>;

  orderBy?: Maybe<TaskOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface EventsWorkspaceArgs {

  where?: Maybe<EventWhereInput>;

  orderBy?: Maybe<EventOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface UsersWorkspaceArgs {

  where?: Maybe<UserWhereInput>;

  orderBy?: Maybe<UserOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface JobsWorkspaceArgs {

  where?: Maybe<JobWhereInput>;

  orderBy?: Maybe<JobOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface CandidatesWorkspaceArgs {

  where?: Maybe<CandidateWhereInput>;

  orderBy?: Maybe<CandidateOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface WorkflowsWorkspaceArgs {

  where?: Maybe<WorkflowWhereInput>;

  orderBy?: Maybe<WorkflowOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface InvitesWorkspaceArgs {

  where?: Maybe<InviteWhereInput>;

  orderBy?: Maybe<InviteOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface TagsWorkspaceArgs {

  where?: Maybe<TagWhereInput>;

  orderBy?: Maybe<TagOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface EventsCandidateArgs {

  where?: Maybe<EventWhereInput>;

  orderBy?: Maybe<EventOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface SubscribersCandidateArgs {

  where?: Maybe<UserWhereInput>;

  orderBy?: Maybe<UserOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface ResumesFileCandidateArgs {

  where?: Maybe<FileWhereInput>;

  orderBy?: Maybe<FileOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface CoverLettersFileCandidateArgs {

  where?: Maybe<FileWhereInput>;

  orderBy?: Maybe<FileOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface TagsCandidateArgs {

  where?: Maybe<TagWhereInput>;

  orderBy?: Maybe<TagOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface FieldsCandidateArgs {

  where?: Maybe<FieldLinkWhereInput>;

  orderBy?: Maybe<FieldLinkOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface TasksCandidateArgs {

  where?: Maybe<TaskWhereInput>;

  orderBy?: Maybe<TaskOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface ApplicationsCandidateArgs {

  where?: Maybe<ApplicationWhereInput>;

  orderBy?: Maybe<ApplicationOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface CommentsCandidateArgs {

  where?: Maybe<CommentWhereInput>;

  orderBy?: Maybe<CommentOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface SubscribersTaskArgs {

  where?: Maybe<UserWhereInput>;

  orderBy?: Maybe<UserOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface OwnersTaskArgs {

  where?: Maybe<UserWhereInput>;

  orderBy?: Maybe<UserOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface SubscribersJobArgs {

  where?: Maybe<UserWhereInput>;

  orderBy?: Maybe<UserOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface EventsJobArgs {

  where?: Maybe<EventWhereInput>;

  orderBy?: Maybe<EventOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface ApplicationsJobArgs {

  where?: Maybe<ApplicationWhereInput>;

  orderBy?: Maybe<ApplicationOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface CommentsJobArgs {

  where?: Maybe<CommentWhereInput>;

  orderBy?: Maybe<CommentOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface LocationsJobArgs {

  where?: Maybe<LocationWhereInput>;

  orderBy?: Maybe<LocationOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface StagesWorkflowArgs {

  where?: Maybe<StageWhereInput>;

  orderBy?: Maybe<StageOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface DisqualificationsWorkflowArgs {

  where?: Maybe<DisqualificationWhereInput>;

  orderBy?: Maybe<DisqualificationOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface FieldsWorkflowArgs {

  where?: Maybe<FieldWhereInput>;

  orderBy?: Maybe<FieldOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface CreateApplicationMutationArgs {

  data: ApplicationCreateInput;
}
export interface CreateCandidateMutationArgs {

  data: CandidateCreateInput;
}
export interface CreateJobMutationArgs {

  data: JobCreateInput;
}
export interface CreateTaskMutationArgs {

  data: TaskCreateInput;
}


import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';





export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<Result, Parent = {}, Context = {}, Args = {}> =
  | ((...args: any[]) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

export type TypeResolveFn<Types, Parent = {}, Context = {}> = (
  parent: Parent,
  context: Context,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;


export namespace QueryResolvers {
  export interface Resolvers<Context = {}, TypeParent = {}> {

    users?: UsersResolver<User, TypeParent, Context>;

    user?: UserResolver<Maybe<User>, TypeParent, Context>;
  }


  export type UsersResolver<R = User, Parent = {}, Context = {}> = Resolver<R, Parent, Context>;
  export type UserResolver<R = Maybe<User>, Parent = {}, Context = {}> = Resolver<R, Parent, Context, UserArgs>;
  export interface UserArgs {

    where: UserWhereUniqueInput;
  }


}

export namespace UserResolvers {
  export interface Resolvers<Context = {}, TypeParent = User> {

    id?: IdResolver<string, TypeParent, Context>;

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>;

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>;

    workspace?: WorkspaceResolver<Workspace, TypeParent, Context>;

    events?: EventsResolver<Maybe<Event>, TypeParent, Context>;

    notifications?: NotificationsResolver<Maybe<Notification[]>, TypeParent, Context>;

    subscriptionJobs?: SubscriptionJobsResolver<Maybe<Job[]>, TypeParent, Context>;

    subscriptionCandidates?: SubscriptionCandidatesResolver<Maybe<Candidate[]>, TypeParent, Context>;

    subscriptionTasks?: SubscriptionTasksResolver<Maybe<Task[]>, TypeParent, Context>;

    tasks?: TasksResolver<Maybe<Task[]>, TypeParent, Context>;

    firstName?: FirstNameResolver<string, TypeParent, Context>;

    lastName?: LastNameResolver<string, TypeParent, Context>;

    email?: EmailResolver<string, TypeParent, Context>;

    username?: UsernameResolver<string, TypeParent, Context>;

    lastLogin?: LastLoginResolver<Maybe<DateTime>, TypeParent, Context>;

    deletedAt?: DeletedAtResolver<Maybe<DateTime>, TypeParent, Context>;

    position?: PositionResolver<Maybe<string>, TypeParent, Context>;

    avatar?: AvatarResolver<Maybe<File>, TypeParent, Context>;
  }


  export type IdResolver<R = string, Parent = User, Context = {}> = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<R = DateTime, Parent = User, Context = {}> = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<R = DateTime, Parent = User, Context = {}> = Resolver<R, Parent, Context>;
  export type WorkspaceResolver<R = Workspace, Parent = User, Context = {}> = Resolver<R, Parent, Context>;
  export type EventsResolver<R = Maybe<Event>, Parent = User, Context = {}> = Resolver<R, Parent, Context>;
  export type NotificationsResolver<R = Maybe<Notification[]>, Parent = User, Context = {}> = Resolver<R, Parent, Context, NotificationsArgs>;
  export interface NotificationsArgs {

    where?: Maybe<NotificationWhereInput>;

    orderBy?: Maybe<NotificationOrderByInput>;

    skip?: Maybe<number>;

    after?: Maybe<string>;

    before?: Maybe<string>;

    first?: Maybe<number>;

    last?: Maybe<number>;
  }


  export type SubscriptionJobsResolver<R = Maybe<Job[]>, Parent = User, Context = {}> = Resolver<R, Parent, Context, SubscriptionJobsArgs>;
  export interface SubscriptionJobsArgs {

    where?: Maybe<JobWhereInput>;

    orderBy?: Maybe<JobOrderByInput>;

    skip?: Maybe<number>;

    after?: Maybe<string>;

    before?: Maybe<string>;

    first?: Maybe<number>;

    last?: Maybe<number>;
  }


  export type SubscriptionCandidatesResolver<R = Maybe<Candidate[]>, Parent = User, Context = {}> = Resolver<R, Parent, Context, SubscriptionCandidatesArgs>;
  export interface SubscriptionCandidatesArgs {

    where?: Maybe<CandidateWhereInput>;

    orderBy?: Maybe<CandidateOrderByInput>;

    skip?: Maybe<number>;

    after?: Maybe<string>;

    before?: Maybe<string>;

    first?: Maybe<number>;

    last?: Maybe<number>;
  }


  export type SubscriptionTasksResolver<R = Maybe<Task[]>, Parent = User, Context = {}> = Resolver<R, Parent, Context, SubscriptionTasksArgs>;
  export interface SubscriptionTasksArgs {

    where?: Maybe<TaskWhereInput>;

    orderBy?: Maybe<TaskOrderByInput>;

    skip?: Maybe<number>;

    after?: Maybe<string>;

    before?: Maybe<string>;

    first?: Maybe<number>;

    last?: Maybe<number>;
  }


  export type TasksResolver<R = Maybe<Task[]>, Parent = User, Context = {}> = Resolver<R, Parent, Context, TasksArgs>;
  export interface TasksArgs {

    where?: Maybe<TaskWhereInput>;

    orderBy?: Maybe<TaskOrderByInput>;

    skip?: Maybe<number>;

    after?: Maybe<string>;

    before?: Maybe<string>;

    first?: Maybe<number>;

    last?: Maybe<number>;
  }


  export type FirstNameResolver<R = string, Parent = User, Context = {}> = Resolver<R, Parent, Context>;
  export type LastNameResolver<R = string, Parent = User, Context = {}> = Resolver<R, Parent, Context>;
  export type EmailResolver<R = string, Parent = User, Context = {}> = Resolver<R, Parent, Context>;
  export type UsernameResolver<R = string, Parent = User, Context = {}> = Resolver<R, Parent, Context>;
  export type LastLoginResolver<R = Maybe<DateTime>, Parent = User, Context = {}> = Resolver<R, Parent, Context>;
  export type DeletedAtResolver<R = Maybe<DateTime>, Parent = User, Context = {}> = Resolver<R, Parent, Context>;
  export type PositionResolver<R = Maybe<string>, Parent = User, Context = {}> = Resolver<R, Parent, Context>;
  export type AvatarResolver<R = Maybe<File>, Parent = User, Context = {}> = Resolver<R, Parent, Context>;
}

export namespace WorkspaceResolvers {
  export interface Resolvers<Context = {}, TypeParent = Workspace> {

    id?: IdResolver<string, TypeParent, Context>;

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>;

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>;

    events?: EventsResolver<Maybe<Event[]>, TypeParent, Context>;

    users?: UsersResolver<Maybe<User[]>, TypeParent, Context>;

    jobs?: JobsResolver<Maybe<Job[]>, TypeParent, Context>;

    candidates?: CandidatesResolver<Maybe<Candidate[]>, TypeParent, Context>;

    workflows?: WorkflowsResolver<Maybe<Workflow[]>, TypeParent, Context>;

    workflowDefault?: WorkflowDefaultResolver<Maybe<Workflow>, TypeParent, Context>;

    invites?: InvitesResolver<Maybe<Invite[]>, TypeParent, Context>;

    tags?: TagsResolver<Maybe<Tag[]>, TypeParent, Context>;

    name?: NameResolver<string, TypeParent, Context>;
  }


  export type IdResolver<R = string, Parent = Workspace, Context = {}> = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<R = DateTime, Parent = Workspace, Context = {}> = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<R = DateTime, Parent = Workspace, Context = {}> = Resolver<R, Parent, Context>;
  export type EventsResolver<R = Maybe<Event[]>, Parent = Workspace, Context = {}> = Resolver<R, Parent, Context, EventsArgs>;
  export interface EventsArgs {

    where?: Maybe<EventWhereInput>;

    orderBy?: Maybe<EventOrderByInput>;

    skip?: Maybe<number>;

    after?: Maybe<string>;

    before?: Maybe<string>;

    first?: Maybe<number>;

    last?: Maybe<number>;
  }


  export type UsersResolver<R = Maybe<User[]>, Parent = Workspace, Context = {}> = Resolver<R, Parent, Context, UsersArgs>;
  export interface UsersArgs {

    where?: Maybe<UserWhereInput>;

    orderBy?: Maybe<UserOrderByInput>;

    skip?: Maybe<number>;

    after?: Maybe<string>;

    before?: Maybe<string>;

    first?: Maybe<number>;

    last?: Maybe<number>;
  }


  export type JobsResolver<R = Maybe<Job[]>, Parent = Workspace, Context = {}> = Resolver<R, Parent, Context, JobsArgs>;
  export interface JobsArgs {

    where?: Maybe<JobWhereInput>;

    orderBy?: Maybe<JobOrderByInput>;

    skip?: Maybe<number>;

    after?: Maybe<string>;

    before?: Maybe<string>;

    first?: Maybe<number>;

    last?: Maybe<number>;
  }


  export type CandidatesResolver<R = Maybe<Candidate[]>, Parent = Workspace, Context = {}> = Resolver<R, Parent, Context, CandidatesArgs>;
  export interface CandidatesArgs {

    where?: Maybe<CandidateWhereInput>;

    orderBy?: Maybe<CandidateOrderByInput>;

    skip?: Maybe<number>;

    after?: Maybe<string>;

    before?: Maybe<string>;

    first?: Maybe<number>;

    last?: Maybe<number>;
  }


  export type WorkflowsResolver<R = Maybe<Workflow[]>, Parent = Workspace, Context = {}> = Resolver<R, Parent, Context, WorkflowsArgs>;
  export interface WorkflowsArgs {

    where?: Maybe<WorkflowWhereInput>;

    orderBy?: Maybe<WorkflowOrderByInput>;

    skip?: Maybe<number>;

    after?: Maybe<string>;

    before?: Maybe<string>;

    first?: Maybe<number>;

    last?: Maybe<number>;
  }


  export type WorkflowDefaultResolver<R = Maybe<Workflow>, Parent = Workspace, Context = {}> = Resolver<R, Parent, Context>;
  export type InvitesResolver<R = Maybe<Invite[]>, Parent = Workspace, Context = {}> = Resolver<R, Parent, Context, InvitesArgs>;
  export interface InvitesArgs {

    where?: Maybe<InviteWhereInput>;

    orderBy?: Maybe<InviteOrderByInput>;

    skip?: Maybe<number>;

    after?: Maybe<string>;

    before?: Maybe<string>;

    first?: Maybe<number>;

    last?: Maybe<number>;
  }


  export type TagsResolver<R = Maybe<Tag[]>, Parent = Workspace, Context = {}> = Resolver<R, Parent, Context, TagsArgs>;
  export interface TagsArgs {

    where?: Maybe<TagWhereInput>;

    orderBy?: Maybe<TagOrderByInput>;

    skip?: Maybe<number>;

    after?: Maybe<string>;

    before?: Maybe<string>;

    first?: Maybe<number>;

    last?: Maybe<number>;
  }


  export type NameResolver<R = string, Parent = Workspace, Context = {}> = Resolver<R, Parent, Context>;
}

export namespace EventResolvers {
  export interface Resolvers<Context = {}, TypeParent = Event> {

    id?: IdResolver<string, TypeParent, Context>;

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>;

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>;

    type?: TypeResolver<EventType, TypeParent, Context>;

    actorType?: ActorTypeResolver<EventActorType, TypeParent, Context>;

    actorUser?: ActorUserResolver<Maybe<User>, TypeParent, Context>;

    actorCandidate?: ActorCandidateResolver<Maybe<Candidate>, TypeParent, Context>;

    targetType?: TargetTypeResolver<EventTargetType, TypeParent, Context>;

    targetCandidate?: TargetCandidateResolver<Maybe<Candidate>, TypeParent, Context>;

    targetJob?: TargetJobResolver<Maybe<Job>, TypeParent, Context>;

    targetTask?: TargetTaskResolver<Maybe<Task>, TypeParent, Context>;

    targetWorkspace?: TargetWorkspaceResolver<Maybe<Workspace>, TypeParent, Context>;
  }


  export type IdResolver<R = string, Parent = Event, Context = {}> = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<R = DateTime, Parent = Event, Context = {}> = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<R = DateTime, Parent = Event, Context = {}> = Resolver<R, Parent, Context>;
  export type TypeResolver<R = EventType, Parent = Event, Context = {}> = Resolver<R, Parent, Context>;
  export type ActorTypeResolver<R = EventActorType, Parent = Event, Context = {}> = Resolver<R, Parent, Context>;
  export type ActorUserResolver<R = Maybe<User>, Parent = Event, Context = {}> = Resolver<R, Parent, Context>;
  export type ActorCandidateResolver<R = Maybe<Candidate>, Parent = Event, Context = {}> = Resolver<R, Parent, Context>;
  export type TargetTypeResolver<R = EventTargetType, Parent = Event, Context = {}> = Resolver<R, Parent, Context>;
  export type TargetCandidateResolver<R = Maybe<Candidate>, Parent = Event, Context = {}> = Resolver<R, Parent, Context>;
  export type TargetJobResolver<R = Maybe<Job>, Parent = Event, Context = {}> = Resolver<R, Parent, Context>;
  export type TargetTaskResolver<R = Maybe<Task>, Parent = Event, Context = {}> = Resolver<R, Parent, Context>;
  export type TargetWorkspaceResolver<R = Maybe<Workspace>, Parent = Event, Context = {}> = Resolver<R, Parent, Context>;
}

export namespace CandidateResolvers {
  export interface Resolvers<Context = {}, TypeParent = Candidate> {

    id?: IdResolver<string, TypeParent, Context>;

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>;

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>;

    workspace?: WorkspaceResolver<Workspace, TypeParent, Context>;

    events?: EventsResolver<Maybe<Event[]>, TypeParent, Context>;

    subscribers?: SubscribersResolver<Maybe<User[]>, TypeParent, Context>;

    firstName?: FirstNameResolver<string, TypeParent, Context>;

    lastName?: LastNameResolver<string, TypeParent, Context>;

    emails?: EmailsResolver<string[], TypeParent, Context>;

    phones?: PhonesResolver<string[], TypeParent, Context>;

    links?: LinksResolver<string[], TypeParent, Context>;

    avatar?: AvatarResolver<Maybe<File>, TypeParent, Context>;

    metaCompany?: MetaCompanyResolver<Maybe<string>, TypeParent, Context>;

    metaHeadline?: MetaHeadlineResolver<Maybe<string>, TypeParent, Context>;

    metaPosition?: MetaPositionResolver<Maybe<string>, TypeParent, Context>;

    resumesString?: ResumesStringResolver<string[], TypeParent, Context>;

    resumesFile?: ResumesFileResolver<Maybe<File[]>, TypeParent, Context>;

    coverLettersString?: CoverLettersStringResolver<string[], TypeParent, Context>;

    coverLettersFile?: CoverLettersFileResolver<Maybe<File[]>, TypeParent, Context>;

    tags?: TagsResolver<Maybe<Tag[]>, TypeParent, Context>;

    source?: SourceResolver<string[], TypeParent, Context>;

    fields?: FieldsResolver<Maybe<FieldLink[]>, TypeParent, Context>;

    tasks?: TasksResolver<Maybe<Task[]>, TypeParent, Context>;

    applications?: ApplicationsResolver<Maybe<Application[]>, TypeParent, Context>;

    comments?: CommentsResolver<Maybe<Comment[]>, TypeParent, Context>;
  }


  export type IdResolver<R = string, Parent = Candidate, Context = {}> = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<R = DateTime, Parent = Candidate, Context = {}> = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<R = DateTime, Parent = Candidate, Context = {}> = Resolver<R, Parent, Context>;
  export type WorkspaceResolver<R = Workspace, Parent = Candidate, Context = {}> = Resolver<R, Parent, Context>;
  export type EventsResolver<R = Maybe<Event[]>, Parent = Candidate, Context = {}> = Resolver<R, Parent, Context, EventsArgs>;
  export interface EventsArgs {

    where?: Maybe<EventWhereInput>;

    orderBy?: Maybe<EventOrderByInput>;

    skip?: Maybe<number>;

    after?: Maybe<string>;

    before?: Maybe<string>;

    first?: Maybe<number>;

    last?: Maybe<number>;
  }


  export type SubscribersResolver<R = Maybe<User[]>, Parent = Candidate, Context = {}> = Resolver<R, Parent, Context, SubscribersArgs>;
  export interface SubscribersArgs {

    where?: Maybe<UserWhereInput>;

    orderBy?: Maybe<UserOrderByInput>;

    skip?: Maybe<number>;

    after?: Maybe<string>;

    before?: Maybe<string>;

    first?: Maybe<number>;

    last?: Maybe<number>;
  }


  export type FirstNameResolver<R = string, Parent = Candidate, Context = {}> = Resolver<R, Parent, Context>;
  export type LastNameResolver<R = string, Parent = Candidate, Context = {}> = Resolver<R, Parent, Context>;
  export type EmailsResolver<R = string[], Parent = Candidate, Context = {}> = Resolver<R, Parent, Context>;
  export type PhonesResolver<R = string[], Parent = Candidate, Context = {}> = Resolver<R, Parent, Context>;
  export type LinksResolver<R = string[], Parent = Candidate, Context = {}> = Resolver<R, Parent, Context>;
  export type AvatarResolver<R = Maybe<File>, Parent = Candidate, Context = {}> = Resolver<R, Parent, Context>;
  export type MetaCompanyResolver<R = Maybe<string>, Parent = Candidate, Context = {}> = Resolver<R, Parent, Context>;
  export type MetaHeadlineResolver<R = Maybe<string>, Parent = Candidate, Context = {}> = Resolver<R, Parent, Context>;
  export type MetaPositionResolver<R = Maybe<string>, Parent = Candidate, Context = {}> = Resolver<R, Parent, Context>;
  export type ResumesStringResolver<R = string[], Parent = Candidate, Context = {}> = Resolver<R, Parent, Context>;
  export type ResumesFileResolver<R = Maybe<File[]>, Parent = Candidate, Context = {}> = Resolver<R, Parent, Context, ResumesFileArgs>;
  export interface ResumesFileArgs {

    where?: Maybe<FileWhereInput>;

    orderBy?: Maybe<FileOrderByInput>;

    skip?: Maybe<number>;

    after?: Maybe<string>;

    before?: Maybe<string>;

    first?: Maybe<number>;

    last?: Maybe<number>;
  }


  export type CoverLettersStringResolver<R = string[], Parent = Candidate, Context = {}> = Resolver<R, Parent, Context>;
  export type CoverLettersFileResolver<R = Maybe<File[]>, Parent = Candidate, Context = {}> = Resolver<R, Parent, Context, CoverLettersFileArgs>;
  export interface CoverLettersFileArgs {

    where?: Maybe<FileWhereInput>;

    orderBy?: Maybe<FileOrderByInput>;

    skip?: Maybe<number>;

    after?: Maybe<string>;

    before?: Maybe<string>;

    first?: Maybe<number>;

    last?: Maybe<number>;
  }


  export type TagsResolver<R = Maybe<Tag[]>, Parent = Candidate, Context = {}> = Resolver<R, Parent, Context, TagsArgs>;
  export interface TagsArgs {

    where?: Maybe<TagWhereInput>;

    orderBy?: Maybe<TagOrderByInput>;

    skip?: Maybe<number>;

    after?: Maybe<string>;

    before?: Maybe<string>;

    first?: Maybe<number>;

    last?: Maybe<number>;
  }


  export type SourceResolver<R = string[], Parent = Candidate, Context = {}> = Resolver<R, Parent, Context>;
  export type FieldsResolver<R = Maybe<FieldLink[]>, Parent = Candidate, Context = {}> = Resolver<R, Parent, Context, FieldsArgs>;
  export interface FieldsArgs {

    where?: Maybe<FieldLinkWhereInput>;

    orderBy?: Maybe<FieldLinkOrderByInput>;

    skip?: Maybe<number>;

    after?: Maybe<string>;

    before?: Maybe<string>;

    first?: Maybe<number>;

    last?: Maybe<number>;
  }


  export type TasksResolver<R = Maybe<Task[]>, Parent = Candidate, Context = {}> = Resolver<R, Parent, Context, TasksArgs>;
  export interface TasksArgs {

    where?: Maybe<TaskWhereInput>;

    orderBy?: Maybe<TaskOrderByInput>;

    skip?: Maybe<number>;

    after?: Maybe<string>;

    before?: Maybe<string>;

    first?: Maybe<number>;

    last?: Maybe<number>;
  }


  export type ApplicationsResolver<R = Maybe<Application[]>, Parent = Candidate, Context = {}> = Resolver<R, Parent, Context, ApplicationsArgs>;
  export interface ApplicationsArgs {

    where?: Maybe<ApplicationWhereInput>;

    orderBy?: Maybe<ApplicationOrderByInput>;

    skip?: Maybe<number>;

    after?: Maybe<string>;

    before?: Maybe<string>;

    first?: Maybe<number>;

    last?: Maybe<number>;
  }


  export type CommentsResolver<R = Maybe<Comment[]>, Parent = Candidate, Context = {}> = Resolver<R, Parent, Context, CommentsArgs>;
  export interface CommentsArgs {

    where?: Maybe<CommentWhereInput>;

    orderBy?: Maybe<CommentOrderByInput>;

    skip?: Maybe<number>;

    after?: Maybe<string>;

    before?: Maybe<string>;

    first?: Maybe<number>;

    last?: Maybe<number>;
  }


}

export namespace FileResolvers {
  export interface Resolvers<Context = {}, TypeParent = File> {

    id?: IdResolver<string, TypeParent, Context>;

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>;

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>;

    size?: SizeResolver<number, TypeParent, Context>;

    type?: TypeResolver<string, TypeParent, Context>;

    name?: NameResolver<string, TypeParent, Context>;

    url?: UrlResolver<string, TypeParent, Context>;
  }


  export type IdResolver<R = string, Parent = File, Context = {}> = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<R = DateTime, Parent = File, Context = {}> = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<R = DateTime, Parent = File, Context = {}> = Resolver<R, Parent, Context>;
  export type SizeResolver<R = number, Parent = File, Context = {}> = Resolver<R, Parent, Context>;
  export type TypeResolver<R = string, Parent = File, Context = {}> = Resolver<R, Parent, Context>;
  export type NameResolver<R = string, Parent = File, Context = {}> = Resolver<R, Parent, Context>;
  export type UrlResolver<R = string, Parent = File, Context = {}> = Resolver<R, Parent, Context>;
}

export namespace TagResolvers {
  export interface Resolvers<Context = {}, TypeParent = Tag> {

    id?: IdResolver<string, TypeParent, Context>;

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>;

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>;

    label?: LabelResolver<string, TypeParent, Context>;
  }


  export type IdResolver<R = string, Parent = Tag, Context = {}> = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<R = DateTime, Parent = Tag, Context = {}> = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<R = DateTime, Parent = Tag, Context = {}> = Resolver<R, Parent, Context>;
  export type LabelResolver<R = string, Parent = Tag, Context = {}> = Resolver<R, Parent, Context>;
}

export namespace FieldLinkResolvers {
  export interface Resolvers<Context = {}, TypeParent = FieldLink> {

    id?: IdResolver<string, TypeParent, Context>;

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>;

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>;

    field?: FieldResolver<Field, TypeParent, Context>;

    value?: ValueResolver<Maybe<string>, TypeParent, Context>;
  }


  export type IdResolver<R = string, Parent = FieldLink, Context = {}> = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<R = DateTime, Parent = FieldLink, Context = {}> = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<R = DateTime, Parent = FieldLink, Context = {}> = Resolver<R, Parent, Context>;
  export type FieldResolver<R = Field, Parent = FieldLink, Context = {}> = Resolver<R, Parent, Context>;
  export type ValueResolver<R = Maybe<string>, Parent = FieldLink, Context = {}> = Resolver<R, Parent, Context>;
}

export namespace FieldResolvers {
  export interface Resolvers<Context = {}, TypeParent = Field> {

    id?: IdResolver<string, TypeParent, Context>;

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>;

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>;

    type?: TypeResolver<FieldType, TypeParent, Context>;

    label?: LabelResolver<string, TypeParent, Context>;
  }


  export type IdResolver<R = string, Parent = Field, Context = {}> = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<R = DateTime, Parent = Field, Context = {}> = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<R = DateTime, Parent = Field, Context = {}> = Resolver<R, Parent, Context>;
  export type TypeResolver<R = FieldType, Parent = Field, Context = {}> = Resolver<R, Parent, Context>;
  export type LabelResolver<R = string, Parent = Field, Context = {}> = Resolver<R, Parent, Context>;
}

export namespace TaskResolvers {
  export interface Resolvers<Context = {}, TypeParent = Task> {

    id?: IdResolver<string, TypeParent, Context>;

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>;

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>;

    subscribers?: SubscribersResolver<Maybe<User[]>, TypeParent, Context>;

    owners?: OwnersResolver<Maybe<User[]>, TypeParent, Context>;

    candidate?: CandidateResolver<Maybe<Candidate>, TypeParent, Context>;

    title?: TitleResolver<Maybe<string>, TypeParent, Context>;

    description?: DescriptionResolver<Maybe<string>, TypeParent, Context>;

    dueAt?: DueAtResolver<Maybe<DateTime>, TypeParent, Context>;
  }


  export type IdResolver<R = string, Parent = Task, Context = {}> = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<R = DateTime, Parent = Task, Context = {}> = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<R = DateTime, Parent = Task, Context = {}> = Resolver<R, Parent, Context>;
  export type SubscribersResolver<R = Maybe<User[]>, Parent = Task, Context = {}> = Resolver<R, Parent, Context, SubscribersArgs>;
  export interface SubscribersArgs {

    where?: Maybe<UserWhereInput>;

    orderBy?: Maybe<UserOrderByInput>;

    skip?: Maybe<number>;

    after?: Maybe<string>;

    before?: Maybe<string>;

    first?: Maybe<number>;

    last?: Maybe<number>;
  }


  export type OwnersResolver<R = Maybe<User[]>, Parent = Task, Context = {}> = Resolver<R, Parent, Context, OwnersArgs>;
  export interface OwnersArgs {

    where?: Maybe<UserWhereInput>;

    orderBy?: Maybe<UserOrderByInput>;

    skip?: Maybe<number>;

    after?: Maybe<string>;

    before?: Maybe<string>;

    first?: Maybe<number>;

    last?: Maybe<number>;
  }


  export type CandidateResolver<R = Maybe<Candidate>, Parent = Task, Context = {}> = Resolver<R, Parent, Context>;
  export type TitleResolver<R = Maybe<string>, Parent = Task, Context = {}> = Resolver<R, Parent, Context>;
  export type DescriptionResolver<R = Maybe<string>, Parent = Task, Context = {}> = Resolver<R, Parent, Context>;
  export type DueAtResolver<R = Maybe<DateTime>, Parent = Task, Context = {}> = Resolver<R, Parent, Context>;
}

export namespace ApplicationResolvers {
  export interface Resolvers<Context = {}, TypeParent = Application> {

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>;

    id?: IdResolver<string, TypeParent, Context>;

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>;

    type?: TypeResolver<ApplicationType, TypeParent, Context>;

    disqualificationLink?: DisqualificationLinkResolver<Maybe<DisqualificationLink>, TypeParent, Context>;

    stage?: StageResolver<Stage, TypeParent, Context>;

    job?: JobResolver<Job, TypeParent, Context>;

    candidate?: CandidateResolver<Candidate, TypeParent, Context>;
  }


  export type CreatedAtResolver<R = DateTime, Parent = Application, Context = {}> = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = Application, Context = {}> = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<R = DateTime, Parent = Application, Context = {}> = Resolver<R, Parent, Context>;
  export type TypeResolver<R = ApplicationType, Parent = Application, Context = {}> = Resolver<R, Parent, Context>;
  export type DisqualificationLinkResolver<R = Maybe<DisqualificationLink>, Parent = Application, Context = {}> = Resolver<R, Parent, Context>;
  export type StageResolver<R = Stage, Parent = Application, Context = {}> = Resolver<R, Parent, Context>;
  export type JobResolver<R = Job, Parent = Application, Context = {}> = Resolver<R, Parent, Context>;
  export type CandidateResolver<R = Candidate, Parent = Application, Context = {}> = Resolver<R, Parent, Context>;
}

export namespace DisqualificationLinkResolvers {
  export interface Resolvers<Context = {}, TypeParent = DisqualificationLink> {

    id?: IdResolver<string, TypeParent, Context>;

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>;

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>;

    disqualification?: DisqualificationResolver<Disqualification, TypeParent, Context>;

    createdBy?: CreatedByResolver<User, TypeParent, Context>;

    justification?: JustificationResolver<Maybe<string>, TypeParent, Context>;
  }


  export type IdResolver<R = string, Parent = DisqualificationLink, Context = {}> = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<R = DateTime, Parent = DisqualificationLink, Context = {}> = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<R = DateTime, Parent = DisqualificationLink, Context = {}> = Resolver<R, Parent, Context>;
  export type DisqualificationResolver<R = Disqualification, Parent = DisqualificationLink, Context = {}> = Resolver<R, Parent, Context>;
  export type CreatedByResolver<R = User, Parent = DisqualificationLink, Context = {}> = Resolver<R, Parent, Context>;
  export type JustificationResolver<R = Maybe<string>, Parent = DisqualificationLink, Context = {}> = Resolver<R, Parent, Context>;
}

export namespace DisqualificationResolvers {
  export interface Resolvers<Context = {}, TypeParent = Disqualification> {

    id?: IdResolver<string, TypeParent, Context>;

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>;

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>;

    name?: NameResolver<string, TypeParent, Context>;

    description?: DescriptionResolver<Maybe<string>, TypeParent, Context>;
  }


  export type IdResolver<R = string, Parent = Disqualification, Context = {}> = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<R = DateTime, Parent = Disqualification, Context = {}> = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<R = DateTime, Parent = Disqualification, Context = {}> = Resolver<R, Parent, Context>;
  export type NameResolver<R = string, Parent = Disqualification, Context = {}> = Resolver<R, Parent, Context>;
  export type DescriptionResolver<R = Maybe<string>, Parent = Disqualification, Context = {}> = Resolver<R, Parent, Context>;
}

export namespace StageResolvers {
  export interface Resolvers<Context = {}, TypeParent = Stage> {

    id?: IdResolver<string, TypeParent, Context>;

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>;

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>;

    name?: NameResolver<string, TypeParent, Context>;

    description?: DescriptionResolver<Maybe<string>, TypeParent, Context>;

    type?: TypeResolver<StageType, TypeParent, Context>;
  }


  export type IdResolver<R = string, Parent = Stage, Context = {}> = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<R = DateTime, Parent = Stage, Context = {}> = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<R = DateTime, Parent = Stage, Context = {}> = Resolver<R, Parent, Context>;
  export type NameResolver<R = string, Parent = Stage, Context = {}> = Resolver<R, Parent, Context>;
  export type DescriptionResolver<R = Maybe<string>, Parent = Stage, Context = {}> = Resolver<R, Parent, Context>;
  export type TypeResolver<R = StageType, Parent = Stage, Context = {}> = Resolver<R, Parent, Context>;
}

export namespace JobResolvers {
  export interface Resolvers<Context = {}, TypeParent = Job> {

    id?: IdResolver<string, TypeParent, Context>;

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>;

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>;

    workspace?: WorkspaceResolver<Workspace, TypeParent, Context>;

    subscribers?: SubscribersResolver<Maybe<User[]>, TypeParent, Context>;

    events?: EventsResolver<Maybe<Event[]>, TypeParent, Context>;

    applications?: ApplicationsResolver<Maybe<Application[]>, TypeParent, Context>;

    workflow?: WorkflowResolver<Workflow, TypeParent, Context>;

    comments?: CommentsResolver<Maybe<Comment[]>, TypeParent, Context>;

    type?: TypeResolver<JobType, TypeParent, Context>;

    department?: DepartmentResolver<Maybe<string>, TypeParent, Context>;

    locations?: LocationsResolver<Maybe<Location[]>, TypeParent, Context>;

    name?: NameResolver<string, TypeParent, Context>;

    description?: DescriptionResolver<Maybe<string>, TypeParent, Context>;

    requirements?: RequirementsResolver<Maybe<string>, TypeParent, Context>;
  }


  export type IdResolver<R = string, Parent = Job, Context = {}> = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<R = DateTime, Parent = Job, Context = {}> = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<R = DateTime, Parent = Job, Context = {}> = Resolver<R, Parent, Context>;
  export type WorkspaceResolver<R = Workspace, Parent = Job, Context = {}> = Resolver<R, Parent, Context>;
  export type SubscribersResolver<R = Maybe<User[]>, Parent = Job, Context = {}> = Resolver<R, Parent, Context, SubscribersArgs>;
  export interface SubscribersArgs {

    where?: Maybe<UserWhereInput>;

    orderBy?: Maybe<UserOrderByInput>;

    skip?: Maybe<number>;

    after?: Maybe<string>;

    before?: Maybe<string>;

    first?: Maybe<number>;

    last?: Maybe<number>;
  }


  export type EventsResolver<R = Maybe<Event[]>, Parent = Job, Context = {}> = Resolver<R, Parent, Context, EventsArgs>;
  export interface EventsArgs {

    where?: Maybe<EventWhereInput>;

    orderBy?: Maybe<EventOrderByInput>;

    skip?: Maybe<number>;

    after?: Maybe<string>;

    before?: Maybe<string>;

    first?: Maybe<number>;

    last?: Maybe<number>;
  }


  export type ApplicationsResolver<R = Maybe<Application[]>, Parent = Job, Context = {}> = Resolver<R, Parent, Context, ApplicationsArgs>;
  export interface ApplicationsArgs {

    where?: Maybe<ApplicationWhereInput>;

    orderBy?: Maybe<ApplicationOrderByInput>;

    skip?: Maybe<number>;

    after?: Maybe<string>;

    before?: Maybe<string>;

    first?: Maybe<number>;

    last?: Maybe<number>;
  }


  export type WorkflowResolver<R = Workflow, Parent = Job, Context = {}> = Resolver<R, Parent, Context>;
  export type CommentsResolver<R = Maybe<Comment[]>, Parent = Job, Context = {}> = Resolver<R, Parent, Context, CommentsArgs>;
  export interface CommentsArgs {

    where?: Maybe<CommentWhereInput>;

    orderBy?: Maybe<CommentOrderByInput>;

    skip?: Maybe<number>;

    after?: Maybe<string>;

    before?: Maybe<string>;

    first?: Maybe<number>;

    last?: Maybe<number>;
  }


  export type TypeResolver<R = JobType, Parent = Job, Context = {}> = Resolver<R, Parent, Context>;
  export type DepartmentResolver<R = Maybe<string>, Parent = Job, Context = {}> = Resolver<R, Parent, Context>;
  export type LocationsResolver<R = Maybe<Location[]>, Parent = Job, Context = {}> = Resolver<R, Parent, Context, LocationsArgs>;
  export interface LocationsArgs {

    where?: Maybe<LocationWhereInput>;

    orderBy?: Maybe<LocationOrderByInput>;

    skip?: Maybe<number>;

    after?: Maybe<string>;

    before?: Maybe<string>;

    first?: Maybe<number>;

    last?: Maybe<number>;
  }


  export type NameResolver<R = string, Parent = Job, Context = {}> = Resolver<R, Parent, Context>;
  export type DescriptionResolver<R = Maybe<string>, Parent = Job, Context = {}> = Resolver<R, Parent, Context>;
  export type RequirementsResolver<R = Maybe<string>, Parent = Job, Context = {}> = Resolver<R, Parent, Context>;
}

export namespace WorkflowResolvers {
  export interface Resolvers<Context = {}, TypeParent = Workflow> {

    id?: IdResolver<string, TypeParent, Context>;

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>;

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>;

    name?: NameResolver<string, TypeParent, Context>;

    description?: DescriptionResolver<Maybe<string>, TypeParent, Context>;

    stages?: StagesResolver<Maybe<Stage[]>, TypeParent, Context>;

    disqualifications?: DisqualificationsResolver<Maybe<Disqualification[]>, TypeParent, Context>;

    fields?: FieldsResolver<Maybe<Field[]>, TypeParent, Context>;
  }


  export type IdResolver<R = string, Parent = Workflow, Context = {}> = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<R = DateTime, Parent = Workflow, Context = {}> = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<R = DateTime, Parent = Workflow, Context = {}> = Resolver<R, Parent, Context>;
  export type NameResolver<R = string, Parent = Workflow, Context = {}> = Resolver<R, Parent, Context>;
  export type DescriptionResolver<R = Maybe<string>, Parent = Workflow, Context = {}> = Resolver<R, Parent, Context>;
  export type StagesResolver<R = Maybe<Stage[]>, Parent = Workflow, Context = {}> = Resolver<R, Parent, Context, StagesArgs>;
  export interface StagesArgs {

    where?: Maybe<StageWhereInput>;

    orderBy?: Maybe<StageOrderByInput>;

    skip?: Maybe<number>;

    after?: Maybe<string>;

    before?: Maybe<string>;

    first?: Maybe<number>;

    last?: Maybe<number>;
  }


  export type DisqualificationsResolver<R = Maybe<Disqualification[]>, Parent = Workflow, Context = {}> = Resolver<R, Parent, Context, DisqualificationsArgs>;
  export interface DisqualificationsArgs {

    where?: Maybe<DisqualificationWhereInput>;

    orderBy?: Maybe<DisqualificationOrderByInput>;

    skip?: Maybe<number>;

    after?: Maybe<string>;

    before?: Maybe<string>;

    first?: Maybe<number>;

    last?: Maybe<number>;
  }


  export type FieldsResolver<R = Maybe<Field[]>, Parent = Workflow, Context = {}> = Resolver<R, Parent, Context, FieldsArgs>;
  export interface FieldsArgs {

    where?: Maybe<FieldWhereInput>;

    orderBy?: Maybe<FieldOrderByInput>;

    skip?: Maybe<number>;

    after?: Maybe<string>;

    before?: Maybe<string>;

    first?: Maybe<number>;

    last?: Maybe<number>;
  }


}

export namespace CommentResolvers {
  export interface Resolvers<Context = {}, TypeParent = Comment> {

    id?: IdResolver<string, TypeParent, Context>;

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>;

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>;

    createdBy?: CreatedByResolver<User, TypeParent, Context>;

    parent?: ParentResolver<Maybe<Comment>, TypeParent, Context>;

    content?: ContentResolver<string, TypeParent, Context>;
  }


  export type IdResolver<R = string, Parent = Comment, Context = {}> = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<R = DateTime, Parent = Comment, Context = {}> = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<R = DateTime, Parent = Comment, Context = {}> = Resolver<R, Parent, Context>;
  export type CreatedByResolver<R = User, Parent = Comment, Context = {}> = Resolver<R, Parent, Context>;
  export type ParentResolver<R = Maybe<Comment>, Parent = Comment, Context = {}> = Resolver<R, Parent, Context>;
  export type ContentResolver<R = string, Parent = Comment, Context = {}> = Resolver<R, Parent, Context>;
}

export namespace LocationResolvers {
  export interface Resolvers<Context = {}, TypeParent = Location> {

    id?: IdResolver<string, TypeParent, Context>;

    country?: CountryResolver<string, TypeParent, Context>;

    region?: RegionResolver<string, TypeParent, Context>;

    city?: CityResolver<string, TypeParent, Context>;

    zip?: ZipResolver<string, TypeParent, Context>;
  }


  export type IdResolver<R = string, Parent = Location, Context = {}> = Resolver<R, Parent, Context>;
  export type CountryResolver<R = string, Parent = Location, Context = {}> = Resolver<R, Parent, Context>;
  export type RegionResolver<R = string, Parent = Location, Context = {}> = Resolver<R, Parent, Context>;
  export type CityResolver<R = string, Parent = Location, Context = {}> = Resolver<R, Parent, Context>;
  export type ZipResolver<R = string, Parent = Location, Context = {}> = Resolver<R, Parent, Context>;
}

export namespace InviteResolvers {
  export interface Resolvers<Context = {}, TypeParent = Invite> {

    id?: IdResolver<string, TypeParent, Context>;

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>;

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>;

    email?: EmailResolver<string, TypeParent, Context>;

    expireAt?: ExpireAtResolver<DateTime, TypeParent, Context>;

    invitedBy?: InvitedByResolver<User, TypeParent, Context>;
  }


  export type IdResolver<R = string, Parent = Invite, Context = {}> = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<R = DateTime, Parent = Invite, Context = {}> = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<R = DateTime, Parent = Invite, Context = {}> = Resolver<R, Parent, Context>;
  export type EmailResolver<R = string, Parent = Invite, Context = {}> = Resolver<R, Parent, Context>;
  export type ExpireAtResolver<R = DateTime, Parent = Invite, Context = {}> = Resolver<R, Parent, Context>;
  export type InvitedByResolver<R = User, Parent = Invite, Context = {}> = Resolver<R, Parent, Context>;
}

export namespace NotificationResolvers {
  export interface Resolvers<Context = {}, TypeParent = Notification> {

    id?: IdResolver<string, TypeParent, Context>;

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>;

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>;

    type?: TypeResolver<NotificationType, TypeParent, Context>;

    user?: UserResolver<User, TypeParent, Context>;

    event?: EventResolver<Event, TypeParent, Context>;
  }


  export type IdResolver<R = string, Parent = Notification, Context = {}> = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<R = DateTime, Parent = Notification, Context = {}> = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<R = DateTime, Parent = Notification, Context = {}> = Resolver<R, Parent, Context>;
  export type TypeResolver<R = NotificationType, Parent = Notification, Context = {}> = Resolver<R, Parent, Context>;
  export type UserResolver<R = User, Parent = Notification, Context = {}> = Resolver<R, Parent, Context>;
  export type EventResolver<R = Event, Parent = Notification, Context = {}> = Resolver<R, Parent, Context>;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = {}, TypeParent = {}> {

    createApplication?: CreateApplicationResolver<Application, TypeParent, Context>;

    createCandidate?: CreateCandidateResolver<Candidate, TypeParent, Context>;

    createJob?: CreateJobResolver<Job, TypeParent, Context>;

    createTask?: CreateTaskResolver<Task, TypeParent, Context>;
  }


  export type CreateApplicationResolver<R = Application, Parent = {}, Context = {}> = Resolver<R, Parent, Context, CreateApplicationArgs>;
  export interface CreateApplicationArgs {

    data: ApplicationCreateInput;
  }


  export type CreateCandidateResolver<R = Candidate, Parent = {}, Context = {}> = Resolver<R, Parent, Context, CreateCandidateArgs>;
  export interface CreateCandidateArgs {

    data: CandidateCreateInput;
  }


  export type CreateJobResolver<R = Job, Parent = {}, Context = {}> = Resolver<R, Parent, Context, CreateJobArgs>;
  export interface CreateJobArgs {

    data: JobCreateInput;
  }


  export type CreateTaskResolver<R = Task, Parent = {}, Context = {}> = Resolver<R, Parent, Context, CreateTaskArgs>;
  export interface CreateTaskArgs {

    data: TaskCreateInput;
  }


}

export namespace AccessPayloadResolvers {
  export interface Resolvers<Context = {}, TypeParent = AccessPayload> {

    token?: TokenResolver<string, TypeParent, Context>;
  }


  export type TokenResolver<R = string, Parent = AccessPayload, Context = {}> = Resolver<R, Parent, Context>;
}

export namespace AuthPayloadResolvers {
  export interface Resolvers<Context = {}, TypeParent = AuthPayload> {

    token?: TokenResolver<string, TypeParent, Context>;

    refresh?: RefreshResolver<string, TypeParent, Context>;
  }


  export type TokenResolver<R = string, Parent = AuthPayload, Context = {}> = Resolver<R, Parent, Context>;
  export type RefreshResolver<R = string, Parent = AuthPayload, Context = {}> = Resolver<R, Parent, Context>;
}


export namespace NodeResolvers {
  export interface Resolvers {
    __resolveType: ResolveType;
  }
  export type ResolveType<R = {}, Parent = {}, Context = {}> = TypeResolveFn<R, Parent, Context>;

}


/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<Result, SkipDirectiveArgs, {}>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<Result, IncludeDirectiveArgs, {}>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<Result, DeprecatedDirectiveArgs, {}>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}


export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<DateTime, any> {
  name: 'DateTime'
}

export interface IResolvers<Context = {}> {
    Query?: QueryResolvers.Resolvers<Context>;
    User?: UserResolvers.Resolvers<Context>;
    Workspace?: WorkspaceResolvers.Resolvers<Context>;
    Event?: EventResolvers.Resolvers<Context>;
    Candidate?: CandidateResolvers.Resolvers<Context>;
    File?: FileResolvers.Resolvers<Context>;
    Tag?: TagResolvers.Resolvers<Context>;
    FieldLink?: FieldLinkResolvers.Resolvers<Context>;
    Field?: FieldResolvers.Resolvers<Context>;
    Task?: TaskResolvers.Resolvers<Context>;
    Application?: ApplicationResolvers.Resolvers<Context>;
    DisqualificationLink?: DisqualificationLinkResolvers.Resolvers<Context>;
    Disqualification?: DisqualificationResolvers.Resolvers<Context>;
    Stage?: StageResolvers.Resolvers<Context>;
    Job?: JobResolvers.Resolvers<Context>;
    Workflow?: WorkflowResolvers.Resolvers<Context>;
    Comment?: CommentResolvers.Resolvers<Context>;
    Location?: LocationResolvers.Resolvers<Context>;
    Invite?: InviteResolvers.Resolvers<Context>;
    Notification?: NotificationResolvers.Resolvers<Context>;
    Mutation?: MutationResolvers.Resolvers<Context>;
    AccessPayload?: AccessPayloadResolvers.Resolvers<Context>;
    AuthPayload?: AuthPayloadResolvers.Resolvers<Context>;
    Node?: NodeResolvers.Resolvers;
    DateTime?: GraphQLScalarType;
}

export interface IDirectiveResolvers<Result> {
    skip?: SkipDirectiveResolver<Result>;
    include?: IncludeDirectiveResolver<Result>;
    deprecated?: DeprecatedDirectiveResolver<Result>;
}
