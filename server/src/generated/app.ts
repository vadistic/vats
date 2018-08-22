import { makeBindingClass, Options } from 'graphql-binding'
import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import schema from  '..\schema\schema'

export interface Query {
    invite: <T = Invite | null>(args: { where: InviteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    invites: <T = Invite[]>(args: { where?: InviteWhereInput, orderBy?: InviteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    workspace: <T = Workspace | null>(args: { where: WorkspaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    workspaces: <T = Workspace[]>(args: { where?: WorkspaceWhereInput, orderBy?: WorkspaceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    offer: <T = Offer | null>(args: { where: OfferWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    offers: <T = Offer[]>(args: { where?: OfferWhereInput, orderBy?: OfferOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stage: <T = Stage | null>(args: { where: StageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stages: <T = Stage[]>(args: { where?: StageWhereInput, orderBy?: StageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    application: <T = Application | null>(args: { where: ApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    applications: <T = Application[]>(args: { where?: ApplicationWhereInput, orderBy?: ApplicationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    candidate: <T = Candidate | null>(args: { where: CandidateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    candidates: <T = Candidate[]>(args: { where?: CandidateWhereInput, orderBy?: CandidateOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    comment: <T = Comment | null>(args: { where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    comments: <T = Comment[]>(args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    task: <T = Task | null>(args: { where: TaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tasks: <T = Task[]>(args: { where?: TaskWhereInput, orderBy?: TaskOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    signup: <T = AuthPayload | null>(args: { password: String, username: String, inviteId: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    login: <T = AuthPayload>(args: { email: String, password: String }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    invite: <T = Invite>(args: { email: String }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createInvite: <T = Invite>(args: { data: InviteCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateInvite: <T = Invite | null>(args: { data: InviteUpdateInput, where: InviteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteInvite: <T = Invite | null>(args: { where: InviteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createWorkspace: <T = Workspace>(args: { data: WorkspaceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateWorkspace: <T = Workspace | null>(args: { data: WorkspaceUpdateInput, where: WorkspaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteWorkspace: <T = Workspace | null>(args: { where: WorkspaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createOffer: <T = Offer>(args: { data: OfferCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateOffer: <T = Offer | null>(args: { data: OfferUpdateInput, where: OfferWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteOffer: <T = Offer | null>(args: { where: OfferWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createStage: <T = Stage>(args: { data: StageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateStage: <T = Stage | null>(args: { data: StageUpdateInput, where: StageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteStage: <T = Stage | null>(args: { where: StageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createApplication: <T = Application>(args: { data: ApplicationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateApplication: <T = Application | null>(args: { data: ApplicationUpdateInput, where: ApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteApplication: <T = Application | null>(args: { where: ApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCandidate: <T = Candidate>(args: { data: CandidateCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCandidate: <T = Candidate | null>(args: { data: CandidateUpdateInput, where: CandidateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCandidate: <T = Candidate | null>(args: { where: CandidateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createComment: <T = Comment>(args: { data: CommentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateComment: <T = Comment | null>(args: { data: CommentUpdateInput, where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteComment: <T = Comment | null>(args: { where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTask: <T = Task>(args: { data: TaskCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTask: <T = Task | null>(args: { data: TaskUpdateInput, where: TaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteTask: <T = Task | null>(args: { where: TaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
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

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'username_ASC' |
  'username_DESC' |
  'password_ASC' |
  'password_DESC' |
  'firstName_ASC' |
  'firstName_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'lastLogin_ASC' |
  'lastLogin_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'deletedAt_ASC' |
  'deletedAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type InviteOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'expireAt_ASC' |
  'expireAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type WorkspaceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ApplicationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type CommentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type TaskOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'dueAt_ASC' |
  'dueAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type StageOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'position_ASC' |
  'position_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type OfferOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'title_ASC' |
  'title_DESC' |
  'department_ASC' |
  'department_DESC' |
  'description_ASC' |
  'description_DESC' |
  'requirements_ASC' |
  'requirements_DESC'

export type CandidateOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'firstName_ASC' |
  'firstName_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'source_ASC' |
  'source_DESC'

export interface WorkspaceUpdateInput {
  name?: String
  users?: UserUpdateManyWithoutWorkspaceInput
  invites?: InviteUpdateManyWithoutWorkspaceInput
}

export interface TaskUpdateInput {
  dueAt?: DateTime
  owners?: UserUpdateManyInput
}

export interface LocationWhereUniqueInput {
  id?: ID_Input
}

export interface InviteWhereUniqueInput {
  id?: ID_Input
}

export interface ApplicationUpdateInput {
  offer?: OfferUpdateOneWithoutApplicationsInput
  candidate?: CandidateUpdateOneWithoutApplicationsInput
  stage?: StageUpdateOneInput
}

export interface OfferCreateOneWithoutApplicationsInput {
  create?: OfferCreateWithoutApplicationsInput
  connect?: OfferWhereUniqueInput
}

export interface UserUpdateInput {
  email?: String
  username?: String
  password?: String
  firstName?: String
  lastName?: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  workspace?: WorkspaceUpdateOneWithoutUsersInput
}

export interface ApplicationCreateManyWithoutOfferInput {
  create?: ApplicationCreateWithoutOfferInput[] | ApplicationCreateWithoutOfferInput
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
}

export interface OfferCreateInput {
  title: String
  department?: String
  description?: String
  requirements?: String
  workspace?: WorkspaceCreateOneInput
  location?: LocationCreateOneInput
  applications?: ApplicationCreateManyWithoutOfferInput
  stages?: StageCreateManyInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface WorkspaceCreateOneInput {
  create?: WorkspaceCreateInput
  connect?: WorkspaceWhereUniqueInput
}

export interface CommentUpdateInput {
  content?: UserUpdateOneInput
}

export interface LocationCreateOneInput {
  create?: LocationCreateInput
  connect?: LocationWhereUniqueInput
}

export interface ApplicationUpsertWithWhereUniqueWithoutCandidateInput {
  where: ApplicationWhereUniqueInput
  update: ApplicationUpdateWithoutCandidateDataInput
  create: ApplicationCreateWithoutCandidateInput
}

export interface LocationCreateInput {
  country: String
  region: String
  city: String
  zip: String
}

export interface OfferWhereInput {
  AND?: OfferWhereInput[] | OfferWhereInput
  OR?: OfferWhereInput[] | OfferWhereInput
  NOT?: OfferWhereInput[] | OfferWhereInput
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
  location?: LocationWhereInput
  applications_every?: ApplicationWhereInput
  applications_some?: ApplicationWhereInput
  applications_none?: ApplicationWhereInput
  stages_every?: StageWhereInput
  stages_some?: StageWhereInput
  stages_none?: StageWhereInput
}

export interface OfferCreateWithoutApplicationsInput {
  title: String
  department?: String
  description?: String
  requirements?: String
  workspace?: WorkspaceCreateOneInput
  location?: LocationCreateOneInput
  stages?: StageCreateManyInput
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
  source?: String
  source_not?: String
  source_in?: String[] | String
  source_not_in?: String[] | String
  source_lt?: String
  source_lte?: String
  source_gt?: String
  source_gte?: String
  source_contains?: String
  source_not_contains?: String
  source_starts_with?: String
  source_not_starts_with?: String
  source_ends_with?: String
  source_not_ends_with?: String
  workspace?: WorkspaceWhereInput
  applications_every?: ApplicationWhereInput
  applications_some?: ApplicationWhereInput
  applications_none?: ApplicationWhereInput
  comments_every?: CommentWhereInput
  comments_some?: CommentWhereInput
  comments_none?: CommentWhereInput
  tasks_every?: TaskWhereInput
  tasks_some?: TaskWhereInput
  tasks_none?: TaskWhereInput
}

export interface WorkspaceWhereUniqueInput {
  id?: ID_Input
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
  dueAt?: DateTime
  dueAt_not?: DateTime
  dueAt_in?: DateTime[] | DateTime
  dueAt_not_in?: DateTime[] | DateTime
  dueAt_lt?: DateTime
  dueAt_lte?: DateTime
  dueAt_gt?: DateTime
  dueAt_gte?: DateTime
  owners_every?: UserWhereInput
  owners_some?: UserWhereInput
  owners_none?: UserWhereInput
}

export interface ApplicationCreateWithoutOfferInput {
  candidate: CandidateCreateOneWithoutApplicationsInput
  stage: StageCreateOneInput
}

export interface ApplicationUpdateWithWhereUniqueWithoutCandidateInput {
  where: ApplicationWhereUniqueInput
  data: ApplicationUpdateWithoutCandidateDataInput
}

export interface CandidateCreateOneWithoutApplicationsInput {
  create?: CandidateCreateWithoutApplicationsInput
  connect?: CandidateWhereUniqueInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
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
  username?: String
  username_not?: String
  username_in?: String[] | String
  username_not_in?: String[] | String
  username_lt?: String
  username_lte?: String
  username_gt?: String
  username_gte?: String
  username_contains?: String
  username_not_contains?: String
  username_starts_with?: String
  username_not_starts_with?: String
  username_ends_with?: String
  username_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
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
  lastLogin?: DateTime
  lastLogin_not?: DateTime
  lastLogin_in?: DateTime[] | DateTime
  lastLogin_not_in?: DateTime[] | DateTime
  lastLogin_lt?: DateTime
  lastLogin_lte?: DateTime
  lastLogin_gt?: DateTime
  lastLogin_gte?: DateTime
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  deletedAt?: DateTime
  deletedAt_not?: DateTime
  deletedAt_in?: DateTime[] | DateTime
  deletedAt_not_in?: DateTime[] | DateTime
  deletedAt_lt?: DateTime
  deletedAt_lte?: DateTime
  deletedAt_gt?: DateTime
  deletedAt_gte?: DateTime
  workspace?: WorkspaceWhereInput
}

export interface CandidateCreateWithoutApplicationsInput {
  firstName: String
  lastName: String
  source: String
  tags?: CandidateCreatetagsInput
  emails?: CandidateCreateemailsInput
  phones?: CandidateCreatephonesInput
  links?: CandidateCreatelinksInput
  workspace?: WorkspaceCreateOneInput
  comments?: CommentCreateManyInput
  tasks?: TaskCreateManyInput
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
  users_every?: UserWhereInput
  users_some?: UserWhereInput
  users_none?: UserWhereInput
  invites_every?: InviteWhereInput
  invites_some?: InviteWhereInput
  invites_none?: InviteWhereInput
}

export interface CandidateCreatetagsInput {
  set?: String[] | String
}

export interface ApplicationCreateManyWithoutCandidateInput {
  create?: ApplicationCreateWithoutCandidateInput[] | ApplicationCreateWithoutCandidateInput
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
}

export interface CandidateCreateemailsInput {
  set?: String[] | String
}

export interface ApplicationWhereUniqueInput {
  id?: ID_Input
}

export interface CandidateCreatephonesInput {
  set?: String[] | String
}

export interface OfferUpsertWithoutApplicationsInput {
  update: OfferUpdateWithoutApplicationsDataInput
  create: OfferCreateWithoutApplicationsInput
}

export interface CandidateCreatelinksInput {
  set?: String[] | String
}

export interface TaskWhereUniqueInput {
  id?: ID_Input
}

export interface CommentCreateManyInput {
  create?: CommentCreateInput[] | CommentCreateInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
}

export interface InviteCreateInput {
  email: String
  expireAt: DateTime
  workspace: WorkspaceCreateOneWithoutInvitesInput
  invitedBy: UserCreateOneInput
}

export interface CommentCreateInput {
  content: UserCreateOneInput
}

export interface WorkspaceCreateWithoutInvitesInput {
  name: String
  users?: UserCreateManyWithoutWorkspaceInput
}

export interface TaskCreateManyInput {
  create?: TaskCreateInput[] | TaskCreateInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
}

export interface UserCreateWithoutWorkspaceInput {
  email: String
  username: String
  password: String
  firstName?: String
  lastName?: String
  lastLogin?: DateTime
  deletedAt?: DateTime
}

export interface TaskCreateInput {
  dueAt: DateTime
  owners?: UserCreateManyInput
}

export interface UserCreateInput {
  email: String
  username: String
  password: String
  firstName?: String
  lastName?: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  workspace: WorkspaceCreateOneWithoutUsersInput
}

export interface UserCreateManyInput {
  create?: UserCreateInput[] | UserCreateInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface WorkspaceCreateWithoutUsersInput {
  name: String
  invites?: InviteCreateManyWithoutWorkspaceInput
}

export interface StageCreateOneInput {
  create?: StageCreateInput
  connect?: StageWhereUniqueInput
}

export interface InviteCreateWithoutWorkspaceInput {
  email: String
  expireAt: DateTime
  invitedBy: UserCreateOneInput
}

export interface StageCreateInput {
  name: String
  description?: String
  position: Int
}

export interface WorkspaceUpdateOneWithoutInvitesInput {
  create?: WorkspaceCreateWithoutInvitesInput
  connect?: WorkspaceWhereUniqueInput
  delete?: Boolean
  update?: WorkspaceUpdateWithoutInvitesDataInput
  upsert?: WorkspaceUpsertWithoutInvitesInput
}

export interface StageCreateManyInput {
  create?: StageCreateInput[] | StageCreateInput
  connect?: StageWhereUniqueInput[] | StageWhereUniqueInput
}

export interface WorkspaceUpdateWithoutInvitesDataInput {
  name?: String
  users?: UserUpdateManyWithoutWorkspaceInput
}

export interface OfferUpdateInput {
  title?: String
  department?: String
  description?: String
  requirements?: String
  workspace?: WorkspaceUpdateOneInput
  location?: LocationUpdateOneInput
  applications?: ApplicationUpdateManyWithoutOfferInput
  stages?: StageUpdateManyInput
}

export interface UserUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutWorkspaceDataInput
}

export interface WorkspaceUpdateOneInput {
  create?: WorkspaceCreateInput
  connect?: WorkspaceWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: WorkspaceUpdateDataInput
  upsert?: WorkspaceUpsertNestedInput
}

export interface UserUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutWorkspaceDataInput
  create: UserCreateWithoutWorkspaceInput
}

export interface WorkspaceUpdateDataInput {
  name?: String
  users?: UserUpdateManyWithoutWorkspaceInput
  invites?: InviteUpdateManyWithoutWorkspaceInput
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface WorkspaceUpsertNestedInput {
  update: WorkspaceUpdateDataInput
  create: WorkspaceCreateInput
}

export interface WorkspaceUpdateOneWithoutUsersInput {
  create?: WorkspaceCreateWithoutUsersInput
  connect?: WorkspaceWhereUniqueInput
  delete?: Boolean
  update?: WorkspaceUpdateWithoutUsersDataInput
  upsert?: WorkspaceUpsertWithoutUsersInput
}

export interface LocationUpdateOneInput {
  create?: LocationCreateInput
  connect?: LocationWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: LocationUpdateDataInput
  upsert?: LocationUpsertNestedInput
}

export interface InviteUpdateManyWithoutWorkspaceInput {
  create?: InviteCreateWithoutWorkspaceInput[] | InviteCreateWithoutWorkspaceInput
  connect?: InviteWhereUniqueInput[] | InviteWhereUniqueInput
  disconnect?: InviteWhereUniqueInput[] | InviteWhereUniqueInput
  delete?: InviteWhereUniqueInput[] | InviteWhereUniqueInput
  update?: InviteUpdateWithWhereUniqueWithoutWorkspaceInput[] | InviteUpdateWithWhereUniqueWithoutWorkspaceInput
  upsert?: InviteUpsertWithWhereUniqueWithoutWorkspaceInput[] | InviteUpsertWithWhereUniqueWithoutWorkspaceInput
}

export interface LocationUpdateDataInput {
  country?: String
  region?: String
  city?: String
  zip?: String
}

export interface InviteUpdateWithoutWorkspaceDataInput {
  email?: String
  expireAt?: DateTime
  invitedBy?: UserUpdateOneInput
}

export interface LocationUpsertNestedInput {
  update: LocationUpdateDataInput
  create: LocationCreateInput
}

export interface WorkspaceUpsertWithoutUsersInput {
  update: WorkspaceUpdateWithoutUsersDataInput
  create: WorkspaceCreateWithoutUsersInput
}

export interface ApplicationUpdateManyWithoutOfferInput {
  create?: ApplicationCreateWithoutOfferInput[] | ApplicationCreateWithoutOfferInput
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  disconnect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  delete?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  update?: ApplicationUpdateWithWhereUniqueWithoutOfferInput[] | ApplicationUpdateWithWhereUniqueWithoutOfferInput
  upsert?: ApplicationUpsertWithWhereUniqueWithoutOfferInput[] | ApplicationUpsertWithWhereUniqueWithoutOfferInput
}

export interface WorkspaceCreateInput {
  name: String
  users?: UserCreateManyWithoutWorkspaceInput
  invites?: InviteCreateManyWithoutWorkspaceInput
}

export interface ApplicationUpdateWithWhereUniqueWithoutOfferInput {
  where: ApplicationWhereUniqueInput
  data: ApplicationUpdateWithoutOfferDataInput
}

export interface OfferWhereUniqueInput {
  id?: ID_Input
}

export interface ApplicationUpdateWithoutOfferDataInput {
  candidate?: CandidateUpdateOneWithoutApplicationsInput
  stage?: StageUpdateOneInput
}

export interface ApplicationWhereInput {
  AND?: ApplicationWhereInput[] | ApplicationWhereInput
  OR?: ApplicationWhereInput[] | ApplicationWhereInput
  NOT?: ApplicationWhereInput[] | ApplicationWhereInput
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
  offer?: OfferWhereInput
  candidate?: CandidateWhereInput
  stage?: StageWhereInput
}

export interface CandidateUpdateOneWithoutApplicationsInput {
  create?: CandidateCreateWithoutApplicationsInput
  connect?: CandidateWhereUniqueInput
  delete?: Boolean
  update?: CandidateUpdateWithoutApplicationsDataInput
  upsert?: CandidateUpsertWithoutApplicationsInput
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
  content?: UserWhereInput
}

export interface CandidateUpdateWithoutApplicationsDataInput {
  firstName?: String
  lastName?: String
  source?: String
  tags?: CandidateUpdatetagsInput
  emails?: CandidateUpdateemailsInput
  phones?: CandidateUpdatephonesInput
  links?: CandidateUpdatelinksInput
  workspace?: WorkspaceUpdateOneInput
  comments?: CommentUpdateManyInput
  tasks?: TaskUpdateManyInput
}

export interface ApplicationUpdateManyWithoutCandidateInput {
  create?: ApplicationCreateWithoutCandidateInput[] | ApplicationCreateWithoutCandidateInput
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  disconnect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  delete?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  update?: ApplicationUpdateWithWhereUniqueWithoutCandidateInput[] | ApplicationUpdateWithWhereUniqueWithoutCandidateInput
  upsert?: ApplicationUpsertWithWhereUniqueWithoutCandidateInput[] | ApplicationUpsertWithWhereUniqueWithoutCandidateInput
}

export interface CandidateUpdatetagsInput {
  set?: String[] | String
}

export interface ApplicationCreateWithoutCandidateInput {
  offer: OfferCreateOneWithoutApplicationsInput
  stage: StageCreateOneInput
}

export interface CandidateUpdateemailsInput {
  set?: String[] | String
}

export interface StageWhereUniqueInput {
  id?: ID_Input
}

export interface CandidateUpdatephonesInput {
  set?: String[] | String
}

export interface CommentWhereUniqueInput {
  id?: ID_Input
}

export interface CandidateUpdatelinksInput {
  set?: String[] | String
}

export interface WorkspaceCreateOneWithoutInvitesInput {
  create?: WorkspaceCreateWithoutInvitesInput
  connect?: WorkspaceWhereUniqueInput
}

export interface CommentUpdateManyInput {
  create?: CommentCreateInput[] | CommentCreateInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  disconnect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  delete?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  update?: CommentUpdateWithWhereUniqueNestedInput[] | CommentUpdateWithWhereUniqueNestedInput
  upsert?: CommentUpsertWithWhereUniqueNestedInput[] | CommentUpsertWithWhereUniqueNestedInput
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface CommentUpdateWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput
  data: CommentUpdateDataInput
}

export interface InviteCreateManyWithoutWorkspaceInput {
  create?: InviteCreateWithoutWorkspaceInput[] | InviteCreateWithoutWorkspaceInput
  connect?: InviteWhereUniqueInput[] | InviteWhereUniqueInput
}

export interface CommentUpdateDataInput {
  content?: UserUpdateOneInput
}

export interface OfferUpdateOneWithoutApplicationsInput {
  create?: OfferCreateWithoutApplicationsInput
  connect?: OfferWhereUniqueInput
  delete?: Boolean
  update?: OfferUpdateWithoutApplicationsDataInput
  upsert?: OfferUpsertWithoutApplicationsInput
}

export interface CommentUpsertWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput
  update: CommentUpdateDataInput
  create: CommentCreateInput
}

export interface UserUpdateWithoutWorkspaceDataInput {
  email?: String
  username?: String
  password?: String
  firstName?: String
  lastName?: String
  lastLogin?: DateTime
  deletedAt?: DateTime
}

export interface TaskUpdateManyInput {
  create?: TaskCreateInput[] | TaskCreateInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  disconnect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  delete?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  update?: TaskUpdateWithWhereUniqueNestedInput[] | TaskUpdateWithWhereUniqueNestedInput
  upsert?: TaskUpsertWithWhereUniqueNestedInput[] | TaskUpsertWithWhereUniqueNestedInput
}

export interface UserUpdateDataInput {
  email?: String
  username?: String
  password?: String
  firstName?: String
  lastName?: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  workspace?: WorkspaceUpdateOneWithoutUsersInput
}

export interface TaskUpdateWithWhereUniqueNestedInput {
  where: TaskWhereUniqueInput
  data: TaskUpdateDataInput
}

export interface InviteUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: InviteWhereUniqueInput
  data: InviteUpdateWithoutWorkspaceDataInput
}

export interface TaskUpdateDataInput {
  dueAt?: DateTime
  owners?: UserUpdateManyInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserUpdateManyInput {
  create?: UserCreateInput[] | UserCreateInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueNestedInput[] | UserUpdateWithWhereUniqueNestedInput
  upsert?: UserUpsertWithWhereUniqueNestedInput[] | UserUpsertWithWhereUniqueNestedInput
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

export interface UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput
  data: UserUpdateDataInput
}

export interface ApplicationUpdateWithoutCandidateDataInput {
  offer?: OfferUpdateOneWithoutApplicationsInput
  stage?: StageUpdateOneInput
}

export interface UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface CandidateCreateInput {
  firstName: String
  lastName: String
  source: String
  tags?: CandidateCreatetagsInput
  emails?: CandidateCreateemailsInput
  phones?: CandidateCreatephonesInput
  links?: CandidateCreatelinksInput
  workspace?: WorkspaceCreateOneInput
  applications?: ApplicationCreateManyWithoutCandidateInput
  comments?: CommentCreateManyInput
  tasks?: TaskCreateManyInput
}

export interface TaskUpsertWithWhereUniqueNestedInput {
  where: TaskWhereUniqueInput
  update: TaskUpdateDataInput
  create: TaskCreateInput
}

export interface OfferUpdateWithoutApplicationsDataInput {
  title?: String
  department?: String
  description?: String
  requirements?: String
  workspace?: WorkspaceUpdateOneInput
  location?: LocationUpdateOneInput
  stages?: StageUpdateManyInput
}

export interface CandidateUpsertWithoutApplicationsInput {
  update: CandidateUpdateWithoutApplicationsDataInput
  create: CandidateCreateWithoutApplicationsInput
}

export interface WorkspaceCreateOneWithoutUsersInput {
  create?: WorkspaceCreateWithoutUsersInput
  connect?: WorkspaceWhereUniqueInput
}

export interface StageUpdateOneInput {
  create?: StageCreateInput
  connect?: StageWhereUniqueInput
  delete?: Boolean
  update?: StageUpdateDataInput
  upsert?: StageUpsertNestedInput
}

export interface UserUpdateManyWithoutWorkspaceInput {
  create?: UserCreateWithoutWorkspaceInput[] | UserCreateWithoutWorkspaceInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutWorkspaceInput[] | UserUpdateWithWhereUniqueWithoutWorkspaceInput
  upsert?: UserUpsertWithWhereUniqueWithoutWorkspaceInput[] | UserUpsertWithWhereUniqueWithoutWorkspaceInput
}

export interface StageUpdateDataInput {
  name?: String
  description?: String
  position?: Int
}

export interface WorkspaceUpdateWithoutUsersDataInput {
  name?: String
  invites?: InviteUpdateManyWithoutWorkspaceInput
}

export interface StageUpsertNestedInput {
  update: StageUpdateDataInput
  create: StageCreateInput
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
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  expireAt?: DateTime
  expireAt_not?: DateTime
  expireAt_in?: DateTime[] | DateTime
  expireAt_not_in?: DateTime[] | DateTime
  expireAt_lt?: DateTime
  expireAt_lte?: DateTime
  expireAt_gt?: DateTime
  expireAt_gte?: DateTime
  workspace?: WorkspaceWhereInput
  invitedBy?: UserWhereInput
}

export interface ApplicationUpsertWithWhereUniqueWithoutOfferInput {
  where: ApplicationWhereUniqueInput
  update: ApplicationUpdateWithoutOfferDataInput
  create: ApplicationCreateWithoutOfferInput
}

export interface CandidateUpdateInput {
  firstName?: String
  lastName?: String
  source?: String
  tags?: CandidateUpdatetagsInput
  emails?: CandidateUpdateemailsInput
  phones?: CandidateUpdatephonesInput
  links?: CandidateUpdatelinksInput
  workspace?: WorkspaceUpdateOneInput
  applications?: ApplicationUpdateManyWithoutCandidateInput
  comments?: CommentUpdateManyInput
  tasks?: TaskUpdateManyInput
}

export interface StageUpdateManyInput {
  create?: StageCreateInput[] | StageCreateInput
  connect?: StageWhereUniqueInput[] | StageWhereUniqueInput
  disconnect?: StageWhereUniqueInput[] | StageWhereUniqueInput
  delete?: StageWhereUniqueInput[] | StageWhereUniqueInput
  update?: StageUpdateWithWhereUniqueNestedInput[] | StageUpdateWithWhereUniqueNestedInput
  upsert?: StageUpsertWithWhereUniqueNestedInput[] | StageUpsertWithWhereUniqueNestedInput
}

export interface UserCreateManyWithoutWorkspaceInput {
  create?: UserCreateWithoutWorkspaceInput[] | UserCreateWithoutWorkspaceInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface ApplicationCreateInput {
  offer: OfferCreateOneWithoutApplicationsInput
  candidate: CandidateCreateOneWithoutApplicationsInput
  stage: StageCreateOneInput
}

export interface StageUpdateInput {
  name?: String
  description?: String
  position?: Int
}

export interface StageUpsertWithWhereUniqueNestedInput {
  where: StageWhereUniqueInput
  update: StageUpdateDataInput
  create: StageCreateInput
}

export interface StageUpdateWithWhereUniqueNestedInput {
  where: StageWhereUniqueInput
  data: StageUpdateDataInput
}

export interface InviteUpdateInput {
  email?: String
  expireAt?: DateTime
  workspace?: WorkspaceUpdateOneWithoutInvitesInput
  invitedBy?: UserUpdateOneInput
}

export interface CandidateWhereUniqueInput {
  id?: ID_Input
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
  position?: Int
  position_not?: Int
  position_in?: Int[] | Int
  position_not_in?: Int[] | Int
  position_lt?: Int
  position_lte?: Int
  position_gt?: Int
  position_gte?: Int
}

export interface InviteUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: InviteWhereUniqueInput
  update: InviteUpdateWithoutWorkspaceDataInput
  create: InviteCreateWithoutWorkspaceInput
}

export interface WorkspaceUpsertWithoutInvitesInput {
  update: WorkspaceUpdateWithoutInvitesDataInput
  create: WorkspaceCreateWithoutInvitesInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface Workspace extends Node {
  id: ID_Output
  users?: User[]
  name: String
  invites?: Invite[]
}

export interface Task extends Node {
  id: ID_Output
  createdAt: DateTime
  dueAt: DateTime
  owners?: User[]
}

export interface User {
  id: ID_Output
  workspace: Workspace
  email: String
  username: String
  firstName?: String
  lastName?: String
  lastLogin?: DateTime
  createdAt: DateTime
  deletedAt?: DateTime
}

export interface Application extends Node {
  id: ID_Output
  offer: Offer
  candidate: Candidate
  stage: Stage
}

export interface Candidate extends Node {
  id: ID_Output
  workspace?: Workspace
  createdAt: DateTime
  updatedAt: DateTime
  tags: String[]
  applications?: Application[]
  comments?: Comment[]
  tasks?: Task[]
  firstName: String
  lastName: String
  emails: String[]
  phones: String[]
  links: String[]
  source: String
}

export interface AuthPayload {
  token: String
  user: User
}

export interface Location extends Node {
  id: ID_Output
  country: String
  region: String
  city: String
  zip: String
}

export interface Stage extends Node {
  id: ID_Output
  name: String
  description?: String
  position: Int
}

export interface Offer extends Node {
  id: ID_Output
  workspace?: Workspace
  createdAt: DateTime
  updatedAt: DateTime
  title: String
  department?: String
  location?: Location
  description?: String
  requirements?: String
  applications?: Application[]
  stages?: Stage[]
}

export interface Invite extends Node {
  id: ID_Output
  email: String
  workspace: Workspace
  createdAt: DateTime
  expireAt: DateTime
  invitedBy: User
}

export interface Comment extends Node {
  id: ID_Output
  content: User
  createdAt: DateTime
  updatedAt: DateTime
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

export type DateTime = Date | string