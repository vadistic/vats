import { makeBindingClass, Options } from 'graphql-binding'
import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import schema from  '../schema/schema'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createApplication: <T = Application>(args: { data: ApplicationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCandidate: <T = Candidate>(args: { data: CandidateCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createJob: <T = Job>(args: { data: JobCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTask: <T = Task>(args: { data: TaskCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {}

export interface Binding {
  query: Query
  mutation: Mutation
  subscription: Subscription
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
      [key: string]: any;
  }, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
  delegateSubscription(fieldName: string, args?: {
      [key: string]: any;
  }, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
  getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(...args): T
}

export const Binding = makeBindingClass<BindingConstructor<Binding>>({ schema })

/**
 * Types
*/

export type FieldOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'type_ASC' |
  'type_DESC' |
  'label_ASC' |
  'label_DESC'

export type JobType =   'Draft' |
  'Published' |
  'Archived'

export type DisqualificationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC'

export type NotificationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'type_ASC' |
  'type_DESC'

export type StageOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'type_ASC' |
  'type_DESC'

export type InviteOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'email_ASC' |
  'email_DESC' |
  'expireAt_ASC' |
  'expireAt_DESC'

export type ApplicationOrderByInput =   'createdAt_ASC' |
  'createdAt_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'type_ASC' |
  'type_DESC'

export type CandidateOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'firstName_ASC' |
  'firstName_DESC' |
  'lastName_ASC' |
  'lastName_DESC'

export type FieldType =   'Int' |
  'Float' |
  'String' |
  'Text' |
  'Boolean' |
  'DateTime'

export type LocationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'country_ASC' |
  'country_DESC' |
  'region_ASC' |
  'region_DESC' |
  'city_ASC' |
  'city_DESC' |
  'zip_ASC' |
  'zip_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type TaskOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'title_ASC' |
  'title_DESC' |
  'description_ASC' |
  'description_DESC' |
  'dueAt_ASC' |
  'dueAt_DESC'

export type EventActorType =   'System' |
  'User' |
  'Candidate'

export type FieldLinkOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'value_ASC' |
  'value_DESC'

export type CommentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'content_ASC' |
  'content_DESC'

export type ApplicationType =   'Qualified' |
  'Disqualified'

export type NotificationType =   'Unread' |
  'Read'

export type StageType =   'New' |
  'Pipeline' |
  'Final'

export type EventOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'type_ASC' |
  'type_DESC' |
  'actorType_ASC' |
  'actorType_DESC' |
  'targetType_ASC' |
  'targetType_DESC'

export type FileOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'size_ASC' |
  'size_DESC' |
  'type_ASC' |
  'type_DESC' |
  'name_ASC' |
  'name_DESC' |
  'url_ASC' |
  'url_DESC'

export type TagOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'label_ASC' |
  'label_DESC'

export type WorkflowOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'firstName_ASC' |
  'firstName_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'email_ASC' |
  'email_DESC' |
  'username_ASC' |
  'username_DESC' |
  'lastLogin_ASC' |
  'lastLogin_DESC' |
  'deletedAt_ASC' |
  'deletedAt_DESC' |
  'position_ASC' |
  'position_DESC'

export type EventTargetType =   'Candidate' |
  'Job' |
  'Task' |
  'Workspace'

export type EventType =   'Default' |
  'Message' |
  'CommentCreate' |
  'CommentEdit' |
  'CommentDelete'

export type JobOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'type_ASC' |
  'type_DESC' |
  'department_ASC' |
  'department_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'requirements_ASC' |
  'requirements_DESC'

export interface EventCreateOneWithoutActorUserInput {
  create?: EventCreateWithoutActorUserInput
  connect?: EventWhereUniqueInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  firstName_contains?: String
  lastName_contains?: String
  email_contains?: String
}

export interface EventCreateWithoutTargetCandidateInput {
  type: EventType
  actorType: EventActorType
  targetType: EventTargetType
  actorUser?: UserCreateOneWithoutEventsInput
  actorCandidate?: CandidateCreateOneInput
  targetJob?: JobCreateOneWithoutEventsInput
  targetTask?: TaskCreateOneInput
  targetWorkspace?: WorkspaceCreateOneWithoutEventsInput
}

export interface JobWhereInput {
  AND?: JobWhereInput[] | JobWhereInput
  OR?: JobWhereInput[] | JobWhereInput
  NOT?: JobWhereInput[] | JobWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  type?: JobType
  type_not?: JobType
  type_in?: JobType[] | JobType
  type_not_in?: JobType[] | JobType
  department?: String
  department_not?: String
  department_in?: String[] | String
  department_not_in?: String[] | String
  department_lt?: String
  department_lte?: String
  department_gt?: String
  department_gte?: String
  department_contains?: String
  department_not_contains?: String
  department_starts_with?: String
  department_not_starts_with?: String
  department_ends_with?: String
  department_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  requirements?: String
  requirements_not?: String
  requirements_in?: String[] | String
  requirements_not_in?: String[] | String
  requirements_lt?: String
  requirements_lte?: String
  requirements_gt?: String
  requirements_gte?: String
  requirements_contains?: String
  requirements_not_contains?: String
  requirements_starts_with?: String
  requirements_not_starts_with?: String
  requirements_ends_with?: String
  requirements_not_ends_with?: String
  workspace?: WorkspaceWhereInput
  subscribers_every?: UserWhereInput
  subscribers_some?: UserWhereInput
  subscribers_none?: UserWhereInput
  events_every?: EventWhereInput
  events_some?: EventWhereInput
  events_none?: EventWhereInput
  applications_every?: ApplicationWhereInput
  applications_some?: ApplicationWhereInput
  applications_none?: ApplicationWhereInput
  workflow?: WorkflowWhereInput
  comments_every?: CommentWhereInput
  comments_some?: CommentWhereInput
  comments_none?: CommentWhereInput
  locations_every?: LocationWhereInput
  locations_some?: LocationWhereInput
  locations_none?: LocationWhereInput
}

export interface JobCreateOneWithoutEventsInput {
  create?: JobCreateWithoutEventsInput
  connect?: JobWhereUniqueInput
}

export interface CommentWhereInput {
  AND?: CommentWhereInput[] | CommentWhereInput
  OR?: CommentWhereInput[] | CommentWhereInput
  NOT?: CommentWhereInput[] | CommentWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  content?: String
  content_not?: String
  content_in?: String[] | String
  content_not_in?: String[] | String
  content_lt?: String
  content_lte?: String
  content_gt?: String
  content_gte?: String
  content_contains?: String
  content_not_contains?: String
  content_starts_with?: String
  content_not_starts_with?: String
  content_ends_with?: String
  content_not_ends_with?: String
  createdBy?: UserWhereInput
  parent?: CommentWhereInput
}

export interface JobCreateWithoutEventsInput {
  type: JobType
  department?: String
  name: String
  description?: String
  requirements?: String
  workspace: WorkspaceCreateOneWithoutJobsInput
  subscribers?: UserCreateManyWithoutSubscriptionJobsInput
  applications?: ApplicationCreateManyWithoutJobInput
  workflow: WorkflowCreateOneInput
  comments?: CommentCreateManyInput
  locations?: LocationCreateManyInput
}

export interface InviteWhereInput {
  AND?: InviteWhereInput[] | InviteWhereInput
  OR?: InviteWhereInput[] | InviteWhereInput
  NOT?: InviteWhereInput[] | InviteWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  expireAt?: DateTime
  expireAt_not?: DateTime
  expireAt_in?: DateTime[] | DateTime
  expireAt_not_in?: DateTime[] | DateTime
  expireAt_lt?: DateTime
  expireAt_lte?: DateTime
  expireAt_gt?: DateTime
  expireAt_gte?: DateTime
  invitedBy?: UserWhereInput
}

export interface UserCreateManyWithoutSubscriptionJobsInput {
  create?: UserCreateWithoutSubscriptionJobsInput[] | UserCreateWithoutSubscriptionJobsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface StageWhereInput {
  AND?: StageWhereInput[] | StageWhereInput
  OR?: StageWhereInput[] | StageWhereInput
  NOT?: StageWhereInput[] | StageWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  type?: StageType
  type_not?: StageType
  type_in?: StageType[] | StageType
  type_not_in?: StageType[] | StageType
}

export interface UserCreateWithoutSubscriptionCandidatesInput {
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  position?: String
  workspace: WorkspaceCreateOneWithoutUsersInput
  events?: EventCreateOneWithoutActorUserInput
  notifications?: NotificationCreateManyWithoutUserInput
  subscriptionJobs?: JobCreateManyWithoutSubscribersInput
  subscriptionTasks?: TaskCreateManyWithoutSubscribersInput
  tasks?: TaskCreateManyWithoutOwnersInput
  avatar?: FileCreateOneInput
}

export interface WorkflowCreateOneInput {
  create?: WorkflowCreateInput
  connect?: WorkflowWhereUniqueInput
}

export interface JobCreateManyWithoutSubscribersInput {
  create?: JobCreateWithoutSubscribersInput[] | JobCreateWithoutSubscribersInput
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput
}

export interface UserCreateWithoutSubscriptionJobsInput {
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  position?: String
  workspace: WorkspaceCreateOneWithoutUsersInput
  events?: EventCreateOneWithoutActorUserInput
  notifications?: NotificationCreateManyWithoutUserInput
  subscriptionCandidates?: CandidateCreateManyWithoutSubscribersInput
  subscriptionTasks?: TaskCreateManyWithoutSubscribersInput
  tasks?: TaskCreateManyWithoutOwnersInput
  avatar?: FileCreateOneInput
}

export interface JobCreateWithoutSubscribersInput {
  type: JobType
  department?: String
  name: String
  description?: String
  requirements?: String
  workspace: WorkspaceCreateOneWithoutJobsInput
  events?: EventCreateManyWithoutTargetJobInput
  applications?: ApplicationCreateManyWithoutJobInput
  workflow: WorkflowCreateOneInput
  comments?: CommentCreateManyInput
  locations?: LocationCreateManyInput
}

export interface DisqualificationLinkWhereInput {
  AND?: DisqualificationLinkWhereInput[] | DisqualificationLinkWhereInput
  OR?: DisqualificationLinkWhereInput[] | DisqualificationLinkWhereInput
  NOT?: DisqualificationLinkWhereInput[] | DisqualificationLinkWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  justification?: String
  justification_not?: String
  justification_in?: String[] | String
  justification_not_in?: String[] | String
  justification_lt?: String
  justification_lte?: String
  justification_gt?: String
  justification_gte?: String
  justification_contains?: String
  justification_not_contains?: String
  justification_starts_with?: String
  justification_not_starts_with?: String
  justification_ends_with?: String
  justification_not_ends_with?: String
  disqualification?: DisqualificationWhereInput
  createdBy?: UserWhereInput
}

export interface WorkspaceCreateOneWithoutJobsInput {
  create?: WorkspaceCreateWithoutJobsInput
  connect?: WorkspaceWhereUniqueInput
}

export interface ApplicationWhereInput {
  AND?: ApplicationWhereInput[] | ApplicationWhereInput
  OR?: ApplicationWhereInput[] | ApplicationWhereInput
  NOT?: ApplicationWhereInput[] | ApplicationWhereInput
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  type?: ApplicationType
  type_not?: ApplicationType
  type_in?: ApplicationType[] | ApplicationType
  type_not_in?: ApplicationType[] | ApplicationType
  disqualificationLink?: DisqualificationLinkWhereInput
  stage?: StageWhereInput
  job?: JobWhereInput
  candidate?: CandidateWhereInput
}

export interface WorkspaceCreateWithoutJobsInput {
  name: String
  events?: EventCreateManyWithoutTargetWorkspaceInput
  users?: UserCreateManyWithoutWorkspaceInput
  candidates?: CandidateCreateManyWithoutWorkspaceInput
  workflows?: WorkflowCreateManyInput
  workflowDefault?: WorkflowCreateOneInput
  invites?: InviteCreateManyInput
  tags?: TagCreateManyInput
}

export interface SignupInput {
  password: String
  username: String
  inviteId: ID_Input
}

export interface CandidateCreateManyWithoutWorkspaceInput {
  create?: CandidateCreateWithoutWorkspaceInput[] | CandidateCreateWithoutWorkspaceInput
  connect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
}

export interface WorkspaceCreateInput {
  name: String
  firstName?: String
  lastName?: String
  email: String
  username: String
  password: String
}

export interface CandidateCreateWithoutWorkspaceInput {
  firstName: String
  lastName: String
  emails?: CandidateCreateemailsInput
  phones?: CandidateCreatephonesInput
  links?: CandidateCreatelinksInput
  resumesString?: CandidateCreateresumesStringInput
  coverLettersString?: CandidateCreatecoverLettersStringInput
  source?: CandidateCreatesourceInput
  events?: EventCreateManyWithoutTargetCandidateInput
  subscribers?: UserCreateManyWithoutSubscriptionCandidatesInput
  avatar?: FileCreateOneInput
  resumesFile?: FileCreateManyInput
  coverLettersFile?: FileCreateManyInput
  tags?: TagCreateManyInput
  fields?: FieldLinkCreateManyInput
  tasks?: TaskCreateManyWithoutCandidateInput
  applications?: ApplicationCreateManyWithoutCandidateInput
  comments?: CommentCreateManyInput
}

export interface JobCreateInput {
  type: JobType
  department?: String
  name: String
  description?: String
  requirements?: String
  workspace: WorkspaceCreateOneWithoutJobsInput
  subscribers?: UserCreateManyWithoutSubscriptionJobsInput
  events?: EventCreateManyWithoutTargetJobInput
  applications?: ApplicationCreateManyWithoutJobInput
  workflow: WorkflowCreateOneInput
  comments?: CommentCreateManyInput
  locations?: LocationCreateManyInput
}

export interface EventCreateManyWithoutTargetCandidateInput {
  create?: EventCreateWithoutTargetCandidateInput[] | EventCreateWithoutTargetCandidateInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
}

export interface NotificationWhereUniqueInput {
  id?: ID_Input
}

export interface WorkflowWhereInput {
  AND?: WorkflowWhereInput[] | WorkflowWhereInput
  OR?: WorkflowWhereInput[] | WorkflowWhereInput
  NOT?: WorkflowWhereInput[] | WorkflowWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  stages_every?: StageWhereInput
  stages_some?: StageWhereInput
  stages_none?: StageWhereInput
  disqualifications_every?: DisqualificationWhereInput
  disqualifications_some?: DisqualificationWhereInput
  disqualifications_none?: DisqualificationWhereInput
  fields_every?: FieldWhereInput
  fields_some?: FieldWhereInput
  fields_none?: FieldWhereInput
}

export interface WorkspaceWhereUniqueInput {
  id?: ID_Input
}

export interface LocationWhereInput {
  AND?: LocationWhereInput[] | LocationWhereInput
  OR?: LocationWhereInput[] | LocationWhereInput
  NOT?: LocationWhereInput[] | LocationWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  country?: String
  country_not?: String
  country_in?: String[] | String
  country_not_in?: String[] | String
  country_lt?: String
  country_lte?: String
  country_gt?: String
  country_gte?: String
  country_contains?: String
  country_not_contains?: String
  country_starts_with?: String
  country_not_starts_with?: String
  country_ends_with?: String
  country_not_ends_with?: String
  region?: String
  region_not?: String
  region_in?: String[] | String
  region_not_in?: String[] | String
  region_lt?: String
  region_lte?: String
  region_gt?: String
  region_gte?: String
  region_contains?: String
  region_not_contains?: String
  region_starts_with?: String
  region_not_starts_with?: String
  region_ends_with?: String
  region_not_ends_with?: String
  city?: String
  city_not?: String
  city_in?: String[] | String
  city_not_in?: String[] | String
  city_lt?: String
  city_lte?: String
  city_gt?: String
  city_gte?: String
  city_contains?: String
  city_not_contains?: String
  city_starts_with?: String
  city_not_starts_with?: String
  city_ends_with?: String
  city_not_ends_with?: String
  zip?: String
  zip_not?: String
  zip_in?: String[] | String
  zip_not_in?: String[] | String
  zip_lt?: String
  zip_lte?: String
  zip_gt?: String
  zip_gte?: String
  zip_contains?: String
  zip_not_contains?: String
  zip_starts_with?: String
  zip_not_starts_with?: String
  zip_ends_with?: String
  zip_not_ends_with?: String
}

export interface FieldLinkWhereInput {
  AND?: FieldLinkWhereInput[] | FieldLinkWhereInput
  OR?: FieldLinkWhereInput[] | FieldLinkWhereInput
  NOT?: FieldLinkWhereInput[] | FieldLinkWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  value?: String
  value_not?: String
  value_in?: String[] | String
  value_not_in?: String[] | String
  value_lt?: String
  value_lte?: String
  value_gt?: String
  value_gte?: String
  value_contains?: String
  value_not_contains?: String
  value_starts_with?: String
  value_not_starts_with?: String
  value_ends_with?: String
  value_not_ends_with?: String
  field?: FieldWhereInput
}

export interface DisqualificationCreateManyInput {
  create?: DisqualificationCreateInput[] | DisqualificationCreateInput
  connect?: DisqualificationWhereUniqueInput[] | DisqualificationWhereUniqueInput
}

export interface FileWhereInput {
  AND?: FileWhereInput[] | FileWhereInput
  OR?: FileWhereInput[] | FileWhereInput
  NOT?: FileWhereInput[] | FileWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  size?: Int
  size_not?: Int
  size_in?: Int[] | Int
  size_not_in?: Int[] | Int
  size_lt?: Int
  size_lte?: Int
  size_gt?: Int
  size_gte?: Int
  type?: String
  type_not?: String
  type_in?: String[] | String
  type_not_in?: String[] | String
  type_lt?: String
  type_lte?: String
  type_gt?: String
  type_gte?: String
  type_contains?: String
  type_not_contains?: String
  type_starts_with?: String
  type_not_starts_with?: String
  type_ends_with?: String
  type_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
}

export interface StageCreateManyInput {
  create?: StageCreateInput[] | StageCreateInput
  connect?: StageWhereUniqueInput[] | StageWhereUniqueInput
}

export interface InviteCreateInput {
  email: String
}

export interface WorkflowCreateInput {
  name: String
  description?: String
  stages?: StageCreateManyInput
  disqualifications?: DisqualificationCreateManyInput
  fields?: FieldCreateManyInput
}

export interface InviteCreateManyInput {
  create?: InviteCreateInput[] | InviteCreateInput
  connect?: InviteWhereUniqueInput[] | InviteWhereUniqueInput
}

export interface CandidateCreateManyWithoutSubscribersInput {
  create?: CandidateCreateWithoutSubscribersInput[] | CandidateCreateWithoutSubscribersInput
  connect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
}

export interface WorkflowCreateManyInput {
  create?: WorkflowCreateInput[] | WorkflowCreateInput
  connect?: WorkflowWhereUniqueInput[] | WorkflowWhereUniqueInput
}

export interface CandidateCreateWithoutSubscribersInput {
  firstName: String
  lastName: String
  emails?: CandidateCreateemailsInput
  phones?: CandidateCreatephonesInput
  links?: CandidateCreatelinksInput
  resumesString?: CandidateCreateresumesStringInput
  coverLettersString?: CandidateCreatecoverLettersStringInput
  source?: CandidateCreatesourceInput
  workspace: WorkspaceCreateOneWithoutCandidatesInput
  events?: EventCreateManyWithoutTargetCandidateInput
  avatar?: FileCreateOneInput
  resumesFile?: FileCreateManyInput
  coverLettersFile?: FileCreateManyInput
  tags?: TagCreateManyInput
  fields?: FieldLinkCreateManyInput
  tasks?: TaskCreateManyWithoutCandidateInput
  applications?: ApplicationCreateManyWithoutCandidateInput
  comments?: CommentCreateManyInput
}

export interface NotificationWhereInput {
  AND?: NotificationWhereInput[] | NotificationWhereInput
  OR?: NotificationWhereInput[] | NotificationWhereInput
  NOT?: NotificationWhereInput[] | NotificationWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  type?: NotificationType
  type_not?: NotificationType
  type_in?: NotificationType[] | NotificationType
  type_not_in?: NotificationType[] | NotificationType
  user?: UserWhereInput
  event?: EventWhereInput
}

export interface FileCreateOneInput {
  create?: FileCreateInput
  connect?: FileWhereUniqueInput
}

export interface LocationCreateManyInput {
  create?: LocationCreateInput[] | LocationCreateInput
  connect?: LocationWhereUniqueInput[] | LocationWhereUniqueInput
}

export interface FileCreateInput {
  size: Int
  type: String
  name: String
  url: String
}

export interface ApplicationCreateInput {
  type: ApplicationType
  disqualificationLink?: DisqualificationLinkCreateOneInput
  stage: StageCreateOneInput
  job: JobCreateOneWithoutApplicationsInput
  candidate: CandidateCreateOneWithoutApplicationsInput
}

export interface FileWhereUniqueInput {
  id?: ID_Input
  url?: String
}

export interface DisqualificationLinkCreateInput {
  justification?: String
  disqualification: DisqualificationCreateOneInput
  createdBy: UserCreateOneInput
}

export interface FileCreateManyInput {
  create?: FileCreateInput[] | FileCreateInput
  connect?: FileWhereUniqueInput[] | FileWhereUniqueInput
}

export interface DisqualificationCreateInput {
  name: String
  description?: String
}

export interface TagCreateManyInput {
  create?: TagCreateInput[] | TagCreateInput
  connect?: TagWhereUniqueInput[] | TagWhereUniqueInput
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface TagCreateInput {
  label: String
}

export interface WorkspaceCreateOneWithoutUsersInput {
  create?: WorkspaceCreateWithoutUsersInput
  connect?: WorkspaceWhereUniqueInput
}

export interface TagWhereUniqueInput {
  id?: ID_Input
}

export interface EventCreateManyWithoutTargetWorkspaceInput {
  create?: EventCreateWithoutTargetWorkspaceInput[] | EventCreateWithoutTargetWorkspaceInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
}

export interface FieldLinkCreateManyInput {
  create?: FieldLinkCreateInput[] | FieldLinkCreateInput
  connect?: FieldLinkWhereUniqueInput[] | FieldLinkWhereUniqueInput
}

export interface UserCreateOneWithoutEventsInput {
  create?: UserCreateWithoutEventsInput
  connect?: UserWhereUniqueInput
}

export interface FieldLinkCreateInput {
  value?: String
  field: FieldCreateOneInput
}

export interface NotificationCreateManyWithoutUserInput {
  create?: NotificationCreateWithoutUserInput[] | NotificationCreateWithoutUserInput
  connect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
}

export interface FieldCreateOneInput {
  create?: FieldCreateInput
  connect?: FieldWhereUniqueInput
}

export interface EventCreateOneInput {
  create?: EventCreateInput
  connect?: EventWhereUniqueInput
}

export interface FieldCreateInput {
  type: FieldType
  label: String
}

export interface CandidateCreateOneInput {
  create?: CandidateCreateInput
  connect?: CandidateWhereUniqueInput
}

export interface FieldWhereUniqueInput {
  id?: ID_Input
}

export interface CandidateCreateemailsInput {
  set?: String[] | String
}

export interface FieldLinkWhereUniqueInput {
  id?: ID_Input
}

export interface CandidateCreatelinksInput {
  set?: String[] | String
}

export interface TaskCreateManyWithoutCandidateInput {
  create?: TaskCreateWithoutCandidateInput[] | TaskCreateWithoutCandidateInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
}

export interface CandidateCreatecoverLettersStringInput {
  set?: String[] | String
}

export interface TaskCreateWithoutCandidateInput {
  title?: String
  description?: String
  dueAt?: DateTime
  subscribers?: UserCreateManyWithoutSubscriptionTasksInput
  owners?: UserCreateManyWithoutTasksInput
}

export interface WorkspaceCreateOneWithoutCandidatesInput {
  create?: WorkspaceCreateWithoutCandidatesInput
  connect?: WorkspaceWhereUniqueInput
}

export interface UserCreateManyWithoutSubscriptionTasksInput {
  create?: UserCreateWithoutSubscriptionTasksInput[] | UserCreateWithoutSubscriptionTasksInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface UserCreateManyWithoutWorkspaceInput {
  create?: UserCreateWithoutWorkspaceInput[] | UserCreateWithoutWorkspaceInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface UserCreateWithoutSubscriptionTasksInput {
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  position?: String
  workspace: WorkspaceCreateOneWithoutUsersInput
  events?: EventCreateOneWithoutActorUserInput
  notifications?: NotificationCreateManyWithoutUserInput
  subscriptionJobs?: JobCreateManyWithoutSubscribersInput
  subscriptionCandidates?: CandidateCreateManyWithoutSubscribersInput
  tasks?: TaskCreateManyWithoutOwnersInput
  avatar?: FileCreateOneInput
}

export interface FieldCreateManyInput {
  create?: FieldCreateInput[] | FieldCreateInput
  connect?: FieldWhereUniqueInput[] | FieldWhereUniqueInput
}

export interface TaskCreateManyWithoutOwnersInput {
  create?: TaskCreateWithoutOwnersInput[] | TaskCreateWithoutOwnersInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
}

export interface CandidateCreateOneWithoutEventsInput {
  create?: CandidateCreateWithoutEventsInput
  connect?: CandidateWhereUniqueInput
}

export interface TaskCreateWithoutOwnersInput {
  title?: String
  description?: String
  dueAt?: DateTime
  subscribers?: UserCreateManyWithoutSubscriptionTasksInput
  candidate?: CandidateCreateOneWithoutTasksInput
}

export interface UserCreateManyWithoutSubscriptionCandidatesInput {
  create?: UserCreateWithoutSubscriptionCandidatesInput[] | UserCreateWithoutSubscriptionCandidatesInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface CandidateCreateOneWithoutTasksInput {
  create?: CandidateCreateWithoutTasksInput
  connect?: CandidateWhereUniqueInput
}

export interface RefreshInput {
  token: String
}

export interface CandidateCreateWithoutTasksInput {
  firstName: String
  lastName: String
  emails?: CandidateCreateemailsInput
  phones?: CandidateCreatephonesInput
  links?: CandidateCreatelinksInput
  resumesString?: CandidateCreateresumesStringInput
  coverLettersString?: CandidateCreatecoverLettersStringInput
  source?: CandidateCreatesourceInput
  workspace: WorkspaceCreateOneWithoutCandidatesInput
  events?: EventCreateManyWithoutTargetCandidateInput
  subscribers?: UserCreateManyWithoutSubscriptionCandidatesInput
  avatar?: FileCreateOneInput
  resumesFile?: FileCreateManyInput
  coverLettersFile?: FileCreateManyInput
  tags?: TagCreateManyInput
  fields?: FieldLinkCreateManyInput
  applications?: ApplicationCreateManyWithoutCandidateInput
  comments?: CommentCreateManyInput
}

export interface TaskWhereInput {
  AND?: TaskWhereInput[] | TaskWhereInput
  OR?: TaskWhereInput[] | TaskWhereInput
  NOT?: TaskWhereInput[] | TaskWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  dueAt?: DateTime
  dueAt_not?: DateTime
  dueAt_in?: DateTime[] | DateTime
  dueAt_not_in?: DateTime[] | DateTime
  dueAt_lt?: DateTime
  dueAt_lte?: DateTime
  dueAt_gt?: DateTime
  dueAt_gte?: DateTime
  subscribers_every?: UserWhereInput
  subscribers_some?: UserWhereInput
  subscribers_none?: UserWhereInput
  owners_every?: UserWhereInput
  owners_some?: UserWhereInput
  owners_none?: UserWhereInput
  candidate?: CandidateWhereInput
}

export interface ApplicationCreateManyWithoutCandidateInput {
  create?: ApplicationCreateWithoutCandidateInput[] | ApplicationCreateWithoutCandidateInput
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
}

export interface DisqualificationLinkWhereUniqueInput {
  id?: ID_Input
}

export interface ApplicationCreateWithoutCandidateInput {
  type: ApplicationType
  disqualificationLink?: DisqualificationLinkCreateOneInput
  stage: StageCreateOneInput
  job: JobCreateOneWithoutApplicationsInput
}

export interface InviteWhereUniqueInput {
  id?: ID_Input
}

export interface StageCreateOneInput {
  create?: StageCreateInput
  connect?: StageWhereUniqueInput
}

export interface CandidateWhereInput {
  AND?: CandidateWhereInput[] | CandidateWhereInput
  OR?: CandidateWhereInput[] | CandidateWhereInput
  NOT?: CandidateWhereInput[] | CandidateWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  firstName?: String
  firstName_not?: String
  firstName_in?: String[] | String
  firstName_not_in?: String[] | String
  firstName_lt?: String
  firstName_lte?: String
  firstName_gt?: String
  firstName_gte?: String
  firstName_contains?: String
  firstName_not_contains?: String
  firstName_starts_with?: String
  firstName_not_starts_with?: String
  firstName_ends_with?: String
  firstName_not_ends_with?: String
  lastName?: String
  lastName_not?: String
  lastName_in?: String[] | String
  lastName_not_in?: String[] | String
  lastName_lt?: String
  lastName_lte?: String
  lastName_gt?: String
  lastName_gte?: String
  lastName_contains?: String
  lastName_not_contains?: String
  lastName_starts_with?: String
  lastName_not_starts_with?: String
  lastName_ends_with?: String
  lastName_not_ends_with?: String
  workspace?: WorkspaceWhereInput
  events_every?: EventWhereInput
  events_some?: EventWhereInput
  events_none?: EventWhereInput
  subscribers_every?: UserWhereInput
  subscribers_some?: UserWhereInput
  subscribers_none?: UserWhereInput
  avatar?: FileWhereInput
  resumesFile_every?: FileWhereInput
  resumesFile_some?: FileWhereInput
  resumesFile_none?: FileWhereInput
  coverLettersFile_every?: FileWhereInput
  coverLettersFile_some?: FileWhereInput
  coverLettersFile_none?: FileWhereInput
  tags_every?: TagWhereInput
  tags_some?: TagWhereInput
  tags_none?: TagWhereInput
  fields_every?: FieldLinkWhereInput
  fields_some?: FieldLinkWhereInput
  fields_none?: FieldLinkWhereInput
  tasks_every?: TaskWhereInput
  tasks_some?: TaskWhereInput
  tasks_none?: TaskWhereInput
  applications_every?: ApplicationWhereInput
  applications_some?: ApplicationWhereInput
  applications_none?: ApplicationWhereInput
  comments_every?: CommentWhereInput
  comments_some?: CommentWhereInput
  comments_none?: CommentWhereInput
}

export interface StageCreateInput {
  name: String
  description?: String
  type: StageType
}

export interface WorkspaceWhereInput {
  AND?: WorkspaceWhereInput[] | WorkspaceWhereInput
  OR?: WorkspaceWhereInput[] | WorkspaceWhereInput
  NOT?: WorkspaceWhereInput[] | WorkspaceWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  events_every?: EventWhereInput
  events_some?: EventWhereInput
  events_none?: EventWhereInput
  users_every?: UserWhereInput
  users_some?: UserWhereInput
  users_none?: UserWhereInput
  jobs_every?: JobWhereInput
  jobs_some?: JobWhereInput
  jobs_none?: JobWhereInput
  candidates_every?: CandidateWhereInput
  candidates_some?: CandidateWhereInput
  candidates_none?: CandidateWhereInput
  workflows_every?: WorkflowWhereInput
  workflows_some?: WorkflowWhereInput
  workflows_none?: WorkflowWhereInput
  workflowDefault?: WorkflowWhereInput
  invites_every?: InviteWhereInput
  invites_some?: InviteWhereInput
  invites_none?: InviteWhereInput
  tags_every?: TagWhereInput
  tags_some?: TagWhereInput
  tags_none?: TagWhereInput
}

export interface StageWhereUniqueInput {
  id?: ID_Input
}

export interface LocationWhereUniqueInput {
  id?: ID_Input
}

export interface JobCreateOneWithoutApplicationsInput {
  create?: JobCreateWithoutApplicationsInput
  connect?: JobWhereUniqueInput
}

export interface WorkflowWhereUniqueInput {
  id?: ID_Input
}

export interface JobCreateWithoutApplicationsInput {
  type: JobType
  department?: String
  name: String
  description?: String
  requirements?: String
  workspace: WorkspaceCreateOneWithoutJobsInput
  subscribers?: UserCreateManyWithoutSubscriptionJobsInput
  events?: EventCreateManyWithoutTargetJobInput
  workflow: WorkflowCreateOneInput
  comments?: CommentCreateManyInput
  locations?: LocationCreateManyInput
}

export interface DisqualificationCreateOneInput {
  create?: DisqualificationCreateInput
  connect?: DisqualificationWhereUniqueInput
}

export interface EventCreateManyWithoutTargetJobInput {
  create?: EventCreateWithoutTargetJobInput[] | EventCreateWithoutTargetJobInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
}

export interface UserCreateInput {
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  position?: String
  workspace: WorkspaceCreateOneWithoutUsersInput
  events?: EventCreateOneWithoutActorUserInput
  notifications?: NotificationCreateManyWithoutUserInput
  subscriptionJobs?: JobCreateManyWithoutSubscribersInput
  subscriptionCandidates?: CandidateCreateManyWithoutSubscribersInput
  subscriptionTasks?: TaskCreateManyWithoutSubscribersInput
  tasks?: TaskCreateManyWithoutOwnersInput
  avatar?: FileCreateOneInput
}

export interface EventCreateWithoutTargetJobInput {
  type: EventType
  actorType: EventActorType
  targetType: EventTargetType
  actorUser?: UserCreateOneWithoutEventsInput
  actorCandidate?: CandidateCreateOneInput
  targetCandidate?: CandidateCreateOneWithoutEventsInput
  targetTask?: TaskCreateOneInput
  targetWorkspace?: WorkspaceCreateOneWithoutEventsInput
}

export interface EventCreateWithoutTargetWorkspaceInput {
  type: EventType
  actorType: EventActorType
  targetType: EventTargetType
  actorUser?: UserCreateOneWithoutEventsInput
  actorCandidate?: CandidateCreateOneInput
  targetCandidate?: CandidateCreateOneWithoutEventsInput
  targetJob?: JobCreateOneWithoutEventsInput
  targetTask?: TaskCreateOneInput
}

export interface TaskCreateOneInput {
  create?: TaskCreateInput
  connect?: TaskWhereUniqueInput
}

export interface NotificationCreateWithoutUserInput {
  type: NotificationType
  event: EventCreateOneInput
}

export interface TaskCreateInput {
  title?: String
  description?: String
  dueAt?: DateTime
  subscribers?: UserCreateManyWithoutSubscriptionTasksInput
  owners?: UserCreateManyWithoutTasksInput
  candidate?: CandidateCreateOneWithoutTasksInput
}

export interface CandidateCreateInput {
  firstName: String
  lastName: String
  emails?: CandidateCreateemailsInput
  phones?: CandidateCreatephonesInput
  links?: CandidateCreatelinksInput
  resumesString?: CandidateCreateresumesStringInput
  coverLettersString?: CandidateCreatecoverLettersStringInput
  source?: CandidateCreatesourceInput
  workspace: WorkspaceCreateOneWithoutCandidatesInput
  events?: EventCreateManyWithoutTargetCandidateInput
  subscribers?: UserCreateManyWithoutSubscriptionCandidatesInput
  avatar?: FileCreateOneInput
  resumesFile?: FileCreateManyInput
  coverLettersFile?: FileCreateManyInput
  tags?: TagCreateManyInput
  fields?: FieldLinkCreateManyInput
  tasks?: TaskCreateManyWithoutCandidateInput
  applications?: ApplicationCreateManyWithoutCandidateInput
  comments?: CommentCreateManyInput
}

export interface UserCreateManyWithoutTasksInput {
  create?: UserCreateWithoutTasksInput[] | UserCreateWithoutTasksInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface CandidateCreateresumesStringInput {
  set?: String[] | String
}

export interface UserCreateWithoutTasksInput {
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  position?: String
  workspace: WorkspaceCreateOneWithoutUsersInput
  events?: EventCreateOneWithoutActorUserInput
  notifications?: NotificationCreateManyWithoutUserInput
  subscriptionJobs?: JobCreateManyWithoutSubscribersInput
  subscriptionCandidates?: CandidateCreateManyWithoutSubscribersInput
  subscriptionTasks?: TaskCreateManyWithoutSubscribersInput
  avatar?: FileCreateOneInput
}

export interface WorkspaceCreateWithoutCandidatesInput {
  name: String
  events?: EventCreateManyWithoutTargetWorkspaceInput
  users?: UserCreateManyWithoutWorkspaceInput
  jobs?: JobCreateManyWithoutWorkspaceInput
  workflows?: WorkflowCreateManyInput
  workflowDefault?: WorkflowCreateOneInput
  invites?: InviteCreateManyInput
  tags?: TagCreateManyInput
}

export interface TaskCreateManyWithoutSubscribersInput {
  create?: TaskCreateWithoutSubscribersInput[] | TaskCreateWithoutSubscribersInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
}

export interface EventCreateWithoutActorUserInput {
  type: EventType
  actorType: EventActorType
  targetType: EventTargetType
  actorCandidate?: CandidateCreateOneInput
  targetCandidate?: CandidateCreateOneWithoutEventsInput
  targetJob?: JobCreateOneWithoutEventsInput
  targetTask?: TaskCreateOneInput
  targetWorkspace?: WorkspaceCreateOneWithoutEventsInput
}

export interface TaskCreateWithoutSubscribersInput {
  title?: String
  description?: String
  dueAt?: DateTime
  owners?: UserCreateManyWithoutTasksInput
  candidate?: CandidateCreateOneWithoutTasksInput
}

export interface DisqualificationWhereInput {
  AND?: DisqualificationWhereInput[] | DisqualificationWhereInput
  OR?: DisqualificationWhereInput[] | DisqualificationWhereInput
  NOT?: DisqualificationWhereInput[] | DisqualificationWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
}

export interface TaskWhereUniqueInput {
  id?: ID_Input
}

export interface FieldWhereInput {
  AND?: FieldWhereInput[] | FieldWhereInput
  OR?: FieldWhereInput[] | FieldWhereInput
  NOT?: FieldWhereInput[] | FieldWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  type?: FieldType
  type_not?: FieldType
  type_in?: FieldType[] | FieldType
  type_not_in?: FieldType[] | FieldType
  label?: String
  label_not?: String
  label_in?: String[] | String
  label_not_in?: String[] | String
  label_lt?: String
  label_lte?: String
  label_gt?: String
  label_gte?: String
  label_contains?: String
  label_not_contains?: String
  label_starts_with?: String
  label_not_starts_with?: String
  label_ends_with?: String
  label_not_ends_with?: String
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface TagWhereInput {
  AND?: TagWhereInput[] | TagWhereInput
  OR?: TagWhereInput[] | TagWhereInput
  NOT?: TagWhereInput[] | TagWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  label?: String
  label_not?: String
  label_in?: String[] | String
  label_not_in?: String[] | String
  label_lt?: String
  label_lte?: String
  label_gt?: String
  label_gte?: String
  label_contains?: String
  label_not_contains?: String
  label_starts_with?: String
  label_not_starts_with?: String
  label_ends_with?: String
  label_not_ends_with?: String
}

export interface WorkspaceCreateOneWithoutEventsInput {
  create?: WorkspaceCreateWithoutEventsInput
  connect?: WorkspaceWhereUniqueInput
}

export interface JobWhereUniqueInput {
  id?: ID_Input
}

export interface WorkspaceCreateWithoutEventsInput {
  name: String
  users?: UserCreateManyWithoutWorkspaceInput
  jobs?: JobCreateManyWithoutWorkspaceInput
  candidates?: CandidateCreateManyWithoutWorkspaceInput
  workflows?: WorkflowCreateManyInput
  workflowDefault?: WorkflowCreateOneInput
  invites?: InviteCreateManyInput
  tags?: TagCreateManyInput
}

export interface DisqualificationLinkCreateOneInput {
  create?: DisqualificationLinkCreateInput
  connect?: DisqualificationLinkWhereUniqueInput
}

export interface JobCreateManyWithoutWorkspaceInput {
  create?: JobCreateWithoutWorkspaceInput[] | JobCreateWithoutWorkspaceInput
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput
}

export interface WorkspaceCreateWithoutUsersInput {
  name: String
  events?: EventCreateManyWithoutTargetWorkspaceInput
  jobs?: JobCreateManyWithoutWorkspaceInput
  candidates?: CandidateCreateManyWithoutWorkspaceInput
  workflows?: WorkflowCreateManyInput
  workflowDefault?: WorkflowCreateOneInput
  invites?: InviteCreateManyInput
  tags?: TagCreateManyInput
}

export interface JobCreateWithoutWorkspaceInput {
  type: JobType
  department?: String
  name: String
  description?: String
  requirements?: String
  subscribers?: UserCreateManyWithoutSubscriptionJobsInput
  events?: EventCreateManyWithoutTargetJobInput
  applications?: ApplicationCreateManyWithoutJobInput
  workflow: WorkflowCreateOneInput
  comments?: CommentCreateManyInput
  locations?: LocationCreateManyInput
}

export interface EventCreateInput {
  type: EventType
  actorType: EventActorType
  targetType: EventTargetType
  actorUser?: UserCreateOneWithoutEventsInput
  actorCandidate?: CandidateCreateOneInput
  targetCandidate?: CandidateCreateOneWithoutEventsInput
  targetJob?: JobCreateOneWithoutEventsInput
  targetTask?: TaskCreateOneInput
  targetWorkspace?: WorkspaceCreateOneWithoutEventsInput
}

export interface ApplicationCreateManyWithoutJobInput {
  create?: ApplicationCreateWithoutJobInput[] | ApplicationCreateWithoutJobInput
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
}

export interface CandidateCreatesourceInput {
  set?: String[] | String
}

export interface ApplicationCreateWithoutJobInput {
  type: ApplicationType
  disqualificationLink?: DisqualificationLinkCreateOneInput
  stage: StageCreateOneInput
  candidate: CandidateCreateOneWithoutApplicationsInput
}

export interface CandidateCreateWithoutEventsInput {
  firstName: String
  lastName: String
  emails?: CandidateCreateemailsInput
  phones?: CandidateCreatephonesInput
  links?: CandidateCreatelinksInput
  resumesString?: CandidateCreateresumesStringInput
  coverLettersString?: CandidateCreatecoverLettersStringInput
  source?: CandidateCreatesourceInput
  workspace: WorkspaceCreateOneWithoutCandidatesInput
  subscribers?: UserCreateManyWithoutSubscriptionCandidatesInput
  avatar?: FileCreateOneInput
  resumesFile?: FileCreateManyInput
  coverLettersFile?: FileCreateManyInput
  tags?: TagCreateManyInput
  fields?: FieldLinkCreateManyInput
  tasks?: TaskCreateManyWithoutCandidateInput
  applications?: ApplicationCreateManyWithoutCandidateInput
  comments?: CommentCreateManyInput
}

export interface CandidateCreateOneWithoutApplicationsInput {
  create?: CandidateCreateWithoutApplicationsInput
  connect?: CandidateWhereUniqueInput
}

export interface EventWhereUniqueInput {
  id?: ID_Input
}

export interface CandidateCreateWithoutApplicationsInput {
  firstName: String
  lastName: String
  emails?: CandidateCreateemailsInput
  phones?: CandidateCreatephonesInput
  links?: CandidateCreatelinksInput
  resumesString?: CandidateCreateresumesStringInput
  coverLettersString?: CandidateCreatecoverLettersStringInput
  source?: CandidateCreatesourceInput
  workspace: WorkspaceCreateOneWithoutCandidatesInput
  events?: EventCreateManyWithoutTargetCandidateInput
  subscribers?: UserCreateManyWithoutSubscriptionCandidatesInput
  avatar?: FileCreateOneInput
  resumesFile?: FileCreateManyInput
  coverLettersFile?: FileCreateManyInput
  tags?: TagCreateManyInput
  fields?: FieldLinkCreateManyInput
  tasks?: TaskCreateManyWithoutCandidateInput
  comments?: CommentCreateManyInput
}

export interface LocationCreateInput {
  country: String
  region: String
  city: String
  zip: String
}

export interface CommentCreateManyInput {
  create?: CommentCreateInput[] | CommentCreateInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
}

export interface UserCreateWithoutEventsInput {
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  position?: String
  workspace: WorkspaceCreateOneWithoutUsersInput
  notifications?: NotificationCreateManyWithoutUserInput
  subscriptionJobs?: JobCreateManyWithoutSubscribersInput
  subscriptionCandidates?: CandidateCreateManyWithoutSubscribersInput
  subscriptionTasks?: TaskCreateManyWithoutSubscribersInput
  tasks?: TaskCreateManyWithoutOwnersInput
  avatar?: FileCreateOneInput
}

export interface CommentCreateInput {
  content: String
  createdBy: UserCreateOneInput
  parent?: CommentCreateOneInput
}

export interface UserCreateWithoutWorkspaceInput {
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  position?: String
  events?: EventCreateOneWithoutActorUserInput
  notifications?: NotificationCreateManyWithoutUserInput
  subscriptionJobs?: JobCreateManyWithoutSubscribersInput
  subscriptionCandidates?: CandidateCreateManyWithoutSubscribersInput
  subscriptionTasks?: TaskCreateManyWithoutSubscribersInput
  tasks?: TaskCreateManyWithoutOwnersInput
  avatar?: FileCreateOneInput
}

export interface ApplicationWhereUniqueInput {
  id?: ID_Input
}

export interface CandidateWhereUniqueInput {
  id?: ID_Input
}

export interface CommentWhereUniqueInput {
  id?: ID_Input
}

export interface CommentCreateOneInput {
  create?: CommentCreateInput
  connect?: CommentWhereUniqueInput
}

export interface LoginInput {
  email: String
  password: String
}

export interface CandidateCreatephonesInput {
  set?: String[] | String
}

export interface DisqualificationWhereUniqueInput {
  id?: ID_Input
}

export interface EventWhereInput {
  AND?: EventWhereInput[] | EventWhereInput
  OR?: EventWhereInput[] | EventWhereInput
  NOT?: EventWhereInput[] | EventWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  type?: EventType
  type_not?: EventType
  type_in?: EventType[] | EventType
  type_not_in?: EventType[] | EventType
  actorType?: EventActorType
  actorType_not?: EventActorType
  actorType_in?: EventActorType[] | EventActorType
  actorType_not_in?: EventActorType[] | EventActorType
  targetType?: EventTargetType
  targetType_not?: EventTargetType
  targetType_in?: EventTargetType[] | EventTargetType
  targetType_not_in?: EventTargetType[] | EventTargetType
  actorUser?: UserWhereInput
  actorCandidate?: CandidateWhereInput
  targetCandidate?: CandidateWhereInput
  targetJob?: JobWhereInput
  targetTask?: TaskWhereInput
  targetWorkspace?: WorkspaceWhereInput
}

export interface Node {
  id: ID_Output
}

export interface AccessPayload {
  token: String
}

export interface Workflow extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description?: String
  stages?: Stage[]
  disqualifications?: Disqualification[]
  fields?: Field[]
}

export interface Candidate extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  workspace: Workspace
  events?: Event[]
  subscribers?: User[]
  firstName: String
  lastName: String
  emails: String[]
  phones: String[]
  links: String[]
  avatar?: File
  resumesString: String[]
  resumesFile?: File[]
  coverLettersString: String[]
  coverLettersFile?: File[]
  tags?: Tag[]
  source: String[]
  fields?: FieldLink[]
  tasks?: Task[]
  applications?: Application[]
  comments?: Comment[]
}

export interface Job extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  workspace: Workspace
  subscribers?: User[]
  events?: Event[]
  applications?: Application[]
  workflow: Workflow
  comments?: Comment[]
  type: JobType
  department?: String
  locations?: Location[]
  name: String
  description?: String
  requirements?: String
}

export interface File extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  size: Int
  type: String
  name: String
  url: String
}

export interface Stage extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description?: String
  type: StageType
}

export interface Workspace extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  events?: Event[]
  users?: User[]
  jobs?: Job[]
  candidates?: Candidate[]
  workflows?: Workflow[]
  workflowDefault?: Workflow
  invites?: Invite[]
  tags?: Tag[]
  name: String
}

export interface Disqualification extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description?: String
}

export interface Notification extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  type: NotificationType
  user: User
  event: Event
}

export interface DisqualificationLink extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  disqualification: Disqualification
  createdBy: User
  justification?: String
}

export interface User extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  workspace: Workspace
  events?: Event
  notifications?: Notification[]
  subscriptionJobs?: Job[]
  subscriptionCandidates?: Candidate[]
  subscriptionTasks?: Task[]
  tasks?: Task[]
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  position?: String
  avatar?: File
}

export interface Application extends Node {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  type: ApplicationType
  disqualificationLink?: DisqualificationLink
  stage: Stage
  job: Job
  candidate: Candidate
}

export interface Location extends Node {
  id: ID_Output
  country: String
  region: String
  city: String
  zip: String
}

export interface Field extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  type: FieldType
  label: String
}

export interface Task extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  subscribers?: User[]
  owners?: User[]
  candidate?: Candidate
  title?: String
  description?: String
  dueAt?: DateTime
}

export interface FieldLink extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  field: Field
  value?: String
}

export interface Comment extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  createdBy: User
  parent?: Comment
  content: String
}

export interface Tag extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  label: String
}

export interface Invite extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  email: String
  expireAt: DateTime
  invitedBy: User
}

export interface AuthPayload {
  token: String
  refresh: String
}

export interface Event extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  type: EventType
  actorType: EventActorType
  actorUser?: User
  actorCandidate?: Candidate
  targetType: EventTargetType
  targetCandidate?: Candidate
  targetJob?: Job
  targetTask?: Task
  targetWorkspace?: Workspace
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

export type DateTime = Date | string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string