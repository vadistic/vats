import { makeBindingClass, Options } from 'graphql-binding'
import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import schema from  '..\schema\schema'

export interface Query {
    application: <T = Application | null>(args: { where: ApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    applications: <T = Application[]>(args: { where?: ApplicationWhereInput, orderBy?: ApplicationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    candidate: <T = Candidate | null>(args: { where: CandidateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    candidates: <T = Candidate[]>(args: { where?: CandidateWhereInput, orderBy?: CandidateOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    invite: <T = Invite | null>(args: { where: InviteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    invites: <T = Invite[]>(args: { where?: InviteWhereInput, orderBy?: InviteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    offer: <T = Offer | null>(args: { where: OfferWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    offers: <T = Offer[]>(args: { where?: OfferWhereInput, orderBy?: OfferOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    task: <T = Task | null>(args: { where: TaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tasks: <T = Task[]>(args: { where?: TaskWhereInput, orderBy?: TaskOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    workspace: <T = Workspace | null>(args: { where: WorkspaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createApplication: <T = Application>(args: { data: ApplicationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateApplication: <T = Application | null>(args: { data: ApplicationUpdateInput, where: ApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteApplication: <T = Application | null>(args: { where: ApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    signup: <T = AuthPayload>(args: { data?: SignupInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    login: <T = AuthPayload>(args: { data?: LoginInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCandidate: <T = Candidate>(args: { data: CandidateCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCandidate: <T = Candidate | null>(args: { data: CandidateUpdateInput, where: CandidateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCandidate: <T = Candidate | null>(args: { where: CandidateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createComment: <T = Comment>(args: { data: CommentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateComment: <T = Comment | null>(args: { data: CommentUpdateInput, where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteComment: <T = Comment | null>(args: { where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createInvite: <T = Invite>(args: { data?: InviteCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateInvite: <T = Invite>(args: { where?: InviteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteInvite: <T = Invite>(args: { where?: InviteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createOffer: <T = Offer>(args: { data: OfferCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateOffer: <T = Offer | null>(args: { data: OfferUpdateInput, where: OfferWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteOffer: <T = Offer | null>(args: { where: OfferWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createStage: <T = Stage>(args: { data: StageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateStage: <T = Stage | null>(args: { data: StageUpdateInput, where: StageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteStage: <T = Stage | null>(args: { where: StageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTask: <T = Task>(args: { data: TaskCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTask: <T = Task | null>(args: { data: TaskUpdateInput, where: TaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteTask: <T = Task | null>(args: { where: TaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createWorkspace: <T = AuthPayload>(args: { data?: WorkspaceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteWorkspace: <T = Workspace>(args: { where?: WorkspaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
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

export type ApplicationOrderByInput =   'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

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
  'position_ASC' |
  'position_DESC'

export type CommentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'content_ASC' |
  'content_DESC'

export type TaskOrderByInput =   'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'title_ASC' |
  'title_DESC' |
  'dueAt_ASC' |
  'dueAt_DESC'

export type UserOrderByInput =   'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'lastLogin_ASC' |
  'lastLogin_DESC' |
  'deletedAt_ASC' |
  'deletedAt_DESC' |
  'email_ASC' |
  'email_DESC' |
  'username_ASC' |
  'username_DESC' |
  'firstName_ASC' |
  'firstName_DESC' |
  'lastName_ASC' |
  'lastName_DESC'

export type CandidateOrderByInput =   'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'firstName_ASC' |
  'firstName_DESC' |
  'lastName_ASC' |
  'lastName_DESC'

export type InviteOrderByInput =   'email_ASC' |
  'email_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'expireAt_ASC' |
  'expireAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type OfferOrderByInput =   'title_ASC' |
  'title_DESC' |
  'department_ASC' |
  'department_DESC'

export interface InviteCreateManyWithoutWorkspaceInput {
  create?: InviteCreateWithoutWorkspaceInput[] | InviteCreateWithoutWorkspaceInput
  connect?: InviteWhereUniqueInput[] | InviteWhereUniqueInput
}

export interface ApplicationWhereUniqueInput {
  id?: ID_Input
}

export interface WorkspaceUpdateOneWithoutUsersInput {
  create?: WorkspaceCreateWithoutUsersInput
  connect?: WorkspaceWhereUniqueInput
  delete?: Boolean
  update?: WorkspaceUpdateWithoutUsersDataInput
  upsert?: WorkspaceUpsertWithoutUsersInput
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
  users_every?: UserWhereInput
  users_some?: UserWhereInput
  users_none?: UserWhereInput
  invites_every?: InviteWhereInput
  invites_some?: InviteWhereInput
  invites_none?: InviteWhereInput
}

export interface WorkspaceUpdateWithoutUsersDataInput {
  name?: String
  invites?: InviteUpdateManyWithoutWorkspaceInput
}

export interface TaskWhereInput {
  AND?: TaskWhereInput[] | TaskWhereInput
  OR?: TaskWhereInput[] | TaskWhereInput
  NOT?: TaskWhereInput[] | TaskWhereInput
  id?: ID_Input
  title?: String
  title_contains?: String
  description?: String
  description_contains?: String
  owners_every?: UserWhereInput
  owners_some?: UserWhereInput
  owners_none?: UserWhereInput
}

export interface WorkspaceUpsertWithoutUsersInput {
  update: WorkspaceUpdateWithoutUsersDataInput
  create: WorkspaceCreateWithoutUsersInput
}

export interface StageWhereInput {
  AND?: StageWhereInput[] | StageWhereInput
  OR?: StageWhereInput[] | StageWhereInput
  NOT?: StageWhereInput[] | StageWhereInput
  id?: ID_Input
  name?: String
  position?: Int
}

export interface StageUpsertNestedInput {
  update: StageUpdateDataInput
  create: StageCreateInput
}

export interface TaskUpsertWithWhereUniqueNestedInput {
  where: TaskWhereUniqueInput
  update: TaskUpdateDataInput
  create: TaskCreateInput
}

export interface InviteUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: InviteWhereUniqueInput
  data: InviteUpdateWithoutWorkspaceDataInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface InviteUpdateWithoutWorkspaceDataInput {
  email?: String
  expireAt?: DateTime
  invitedBy?: UserUpdateOneInput
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
  workspace?: WorkspaceWhereInput
  createdBy?: UserWhereInput
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface UserUpdateInput {
  lastLogin?: DateTime
  deletedAt?: DateTime
  email?: String
  username?: String
  password?: String
  firstName?: String
  lastName?: String
  workspace?: WorkspaceUpdateOneWithoutUsersInput
  tasksOwner?: TaskUpdateManyWithoutOwnersInput
}

export interface UserUpdateDataInput {
  lastLogin?: DateTime
  deletedAt?: DateTime
  email?: String
  username?: String
  password?: String
  firstName?: String
  lastName?: String
  workspace?: WorkspaceUpdateOneWithoutUsersInput
  tasksOwner?: TaskUpdateManyWithoutOwnersInput
}

export interface ApplicationWhereInput {
  AND?: ApplicationWhereInput[] | ApplicationWhereInput
  OR?: ApplicationWhereInput[] | ApplicationWhereInput
  NOT?: ApplicationWhereInput[] | ApplicationWhereInput
  id?: ID_Input
  createdAt?: DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  offer?: OfferWhereInput
  candidate?: CandidateWhereInput
  stage?: StageWhereInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  email?: String
  email_contains?: String
  username?: String
  username_contains?: String
  firstName?: String
  firstName_contains?: String
  lastName?: String
  lastName_contains?: String
  tasksOwner_every?: TaskWhereInput
  tasksOwner_some?: TaskWhereInput
  tasksOwner_none?: TaskWhereInput
}

export interface OfferUpdateInput {
  title?: String
  department?: String
  description?: String
  requirements?: String
  location?: LocationUpdateOneInput
  stages?: StageUpdateManyInput
}

export interface InviteWhereInput {
  AND?: InviteWhereInput[] | InviteWhereInput
  OR?: InviteWhereInput[] | InviteWhereInput
  NOT?: InviteWhereInput[] | InviteWhereInput
  id?: ID_Input
  email?: String
  invitedBy?: UserWhereInput
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

export interface StageUpdateOneInput {
  create?: StageCreateInput
  connect?: StageWhereUniqueInput
  delete?: Boolean
  update?: StageUpdateDataInput
  upsert?: StageUpsertNestedInput
}

export interface CommentUpdateInput {
  content?: String
  workspace?: WorkspaceUpdateOneInput
  createdBy?: UserUpdateOneInput
}

export interface CandidateUpsertWithoutApplicationsInput {
  update: CandidateUpdateWithoutApplicationsDataInput
  create: CandidateCreateWithoutApplicationsInput
}

export interface CandidateWhereUniqueInput {
  id?: ID_Input
}

export interface InviteUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: InviteWhereUniqueInput
  update: InviteUpdateWithoutWorkspaceDataInput
  create: InviteCreateWithoutWorkspaceInput
}

export interface InviteWhereUniqueInput {
  id: ID_Input
}

export interface WorkspaceUpsertNestedInput {
  update: WorkspaceUpdateDataInput
  create: WorkspaceCreateInput
}

export interface OfferWhereUniqueInput {
  id?: ID_Input
}

export interface OfferUpdateOneWithoutApplicationsInput {
  create?: OfferCreateWithoutApplicationsInput
  connect?: OfferWhereUniqueInput
  delete?: Boolean
  update?: OfferUpdateWithoutApplicationsDataInput
  upsert?: OfferUpsertWithoutApplicationsInput
}

export interface TaskWhereUniqueInput {
  id?: ID_Input
}

export interface OfferCreateWithoutApplicationsInput {
  title: String
  department?: String
  description?: String
  requirements?: String
  workspace: WorkspaceCreateOneInput
  location?: LocationCreateOneInput
  stages?: StageCreateManyInput
}

export interface WorkspaceWhereUniqueInput {
  id?: ID_Input
}

export interface LocationCreateOneInput {
  create?: LocationCreateInput
  connect?: LocationWhereUniqueInput
}

export interface OfferCreateOneWithoutApplicationsInput {
  connect?: OfferWhereUniqueInput
}

export interface LocationCreateInput {
  country: String
  region: String
  city: String
  zip: String
}

export interface StageCreateOneInput {
  connect?: StageWhereUniqueInput
}

export interface LocationWhereUniqueInput {
  id?: ID_Input
}

export interface ApplicationUpdateInput {
  workspace?: WorkspaceUpdateOneInput
  offer?: OfferUpdateOneWithoutApplicationsInput
  candidate?: CandidateUpdateOneWithoutApplicationsInput
  stage?: StageUpdateOneInput
}

export interface StageCreateManyInput {
  create?: StageCreateInput[] | StageCreateInput
}

export interface WorkspaceCreateInput {
  name: String
  firstName?: String
  lastName?: String
  email: String
  username: String
  password: String
}

export interface StageCreateInput {
  name: String
  description?: String
  position: Int
}

export interface WorkspaceUpdateDataInput {
  name?: String
  users?: UserUpdateManyWithoutWorkspaceInput
  invites?: InviteUpdateManyWithoutWorkspaceInput
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

export interface UserCreateWithoutWorkspaceInput {
  lastLogin?: DateTime
  deletedAt?: DateTime
  email: String
  username: String
  password: String
  firstName?: String
  lastName?: String
  tasksOwner?: TaskCreateManyWithoutOwnersInput
}

export interface LocationUpdateOneInput {
  create?: LocationCreateInput
  connect?: LocationWhereUniqueInput
  disconnect?: Boolean
}

export interface TaskCreateWithoutOwnersInput {
  title: String
  description?: String
  dueAt?: DateTime
  workspace: WorkspaceCreateOneInput
}

export interface StageUpdateManyInput {
  create?: StageCreateInput[] | StageCreateInput
  delete?: StageWhereUniqueInput[] | StageWhereUniqueInput
  update?: StageUpdateWithWhereUniqueNestedInput[] | StageUpdateWithWhereUniqueNestedInput
}

export interface UserUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutWorkspaceDataInput
}

export interface StageUpdateWithWhereUniqueNestedInput {
  where: StageWhereUniqueInput
  data: StageUpdateDataInput
}

export interface TaskUpdateManyWithoutOwnersInput {
  create?: TaskCreateWithoutOwnersInput[] | TaskCreateWithoutOwnersInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  disconnect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  delete?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  update?: TaskUpdateWithWhereUniqueWithoutOwnersInput[] | TaskUpdateWithWhereUniqueWithoutOwnersInput
  upsert?: TaskUpsertWithWhereUniqueWithoutOwnersInput[] | TaskUpsertWithWhereUniqueWithoutOwnersInput
}

export interface StageUpdateDataInput {
  name?: String
  description?: String
  position?: Int
}

export interface TaskUpdateWithoutOwnersDataInput {
  title?: String
  description?: String
  dueAt?: DateTime
  workspace?: WorkspaceUpdateOneInput
}

export interface OfferUpsertWithoutApplicationsInput {
  update: OfferUpdateWithoutApplicationsDataInput
  create: OfferCreateWithoutApplicationsInput
}

export interface UserUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutWorkspaceDataInput
  create: UserCreateWithoutWorkspaceInput
}

export interface CandidateUpdateOneWithoutApplicationsInput {
  create?: CandidateCreateWithoutApplicationsInput
  connect?: CandidateWhereUniqueInput
  delete?: Boolean
  update?: CandidateUpdateWithoutApplicationsDataInput
  upsert?: CandidateUpsertWithoutApplicationsInput
}

export interface InviteCreateWithoutWorkspaceInput {
  email: String
  expireAt: DateTime
  invitedBy: UserCreateOneInput
}

export interface CandidateCreateWithoutApplicationsInput {
  firstName: String
  lastName: String
  tags?: CandidateCreatetagsInput
  emails?: CandidateCreateemailsInput
  phones?: CandidateCreatephonesInput
  links?: CandidateCreatelinksInput
  source?: CandidateCreatesourceInput
  workspace: WorkspaceCreateOneInput
  comments?: CommentCreateManyInput
  tasks?: TaskCreateManyInput
}

export interface UserCreateInput {
  lastLogin?: DateTime
  deletedAt?: DateTime
  email: String
  username: String
  password: String
  firstName?: String
  lastName?: String
  workspace: WorkspaceCreateOneWithoutUsersInput
  tasksOwner?: TaskCreateManyWithoutOwnersInput
}

export interface CandidateCreatetagsInput {
  set?: String[] | String
}

export interface WorkspaceCreateWithoutUsersInput {
  name: String
  invites?: InviteCreateManyWithoutWorkspaceInput
}

export interface CandidateCreateemailsInput {
  set?: String[] | String
}

export interface CandidateWhereInput {
  AND?: CandidateWhereInput[] | CandidateWhereInput
  OR?: CandidateWhereInput[] | CandidateWhereInput
  NOT?: CandidateWhereInput[] | CandidateWhereInput
  id?: ID_Input
  createdAt?: DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  firstName?: String
  firstName_contains?: String
  lastName?: String
  lastName_contains?: String
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

export interface CandidateCreatephonesInput {
  set?: String[] | String
}

export interface StageUpdateInput {
  name?: String
  description?: String
  position?: Int
}

export interface CandidateCreatelinksInput {
  set?: String[] | String
}

export interface InviteCreateInput {
  email: String
}

export interface CandidateCreatesourceInput {
  set?: String[] | String
}

export interface OfferWhereInput {
  AND?: OfferWhereInput[] | OfferWhereInput
  OR?: OfferWhereInput[] | OfferWhereInput
  NOT?: OfferWhereInput[] | OfferWhereInput
  id?: ID_Input
  title?: String
  title_contains?: String
  department?: String
  department_contains?: String
  description?: String
  description_contains?: String
  requirements?: String
  requirements_contains?: String
  location?: LocationWhereInput
  applications_every?: ApplicationWhereInput
  applications_some?: ApplicationWhereInput
  applications_none?: ApplicationWhereInput
  stages_every?: StageWhereInput
  stages_some?: StageWhereInput
  stages_none?: StageWhereInput
}

export interface CommentCreateManyInput {
  create?: CommentCreateInput[] | CommentCreateInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
}

export interface LoginInput {
  email: String
  password: String
}

export interface CommentCreateInput {
  content: String
  workspace: WorkspaceCreateOneInput
  createdBy: UserCreateOneInput
}

export interface ApplicationCreateInput {
  offer: OfferCreateOneWithoutApplicationsInput
  candidate: CandidateCreateOneWithoutApplicationsInput
  stage: StageCreateOneInput
}

export interface CommentWhereUniqueInput {
  id?: ID_Input
}

export interface StageWhereUniqueInput {
  id?: ID_Input
}

export interface TaskCreateManyInput {
  create?: TaskCreateInput[] | TaskCreateInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
}

export interface SignupInput {
  password: String
  username: String
  inviteId: ID_Input
}

export interface TaskCreateInput {
  title: String
  description?: String
  dueAt?: DateTime
  owners?: UserCreateManyWithoutTasksOwnerInput
}

export interface TaskCreateManyWithoutOwnersInput {
  create?: TaskCreateWithoutOwnersInput[] | TaskCreateWithoutOwnersInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
}

export interface UserCreateManyWithoutTasksOwnerInput {
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface UserUpdateWithoutWorkspaceDataInput {
  lastLogin?: DateTime
  deletedAt?: DateTime
  email?: String
  username?: String
  password?: String
  firstName?: String
  lastName?: String
  tasksOwner?: TaskUpdateManyWithoutOwnersInput
}

export interface CandidateUpdateWithoutApplicationsDataInput {
  firstName?: String
  lastName?: String
  tags?: CandidateUpdatetagsInput
  emails?: CandidateUpdateemailsInput
  phones?: CandidateUpdatephonesInput
  links?: CandidateUpdatelinksInput
  source?: CandidateUpdatesourceInput
  workspace?: WorkspaceUpdateOneInput
  comments?: CommentUpdateManyInput
  tasks?: TaskUpdateManyInput
}

export interface TaskUpsertWithWhereUniqueWithoutOwnersInput {
  where: TaskWhereUniqueInput
  update: TaskUpdateWithoutOwnersDataInput
  create: TaskCreateWithoutOwnersInput
}

export interface CandidateUpdatetagsInput {
  set?: String[] | String
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface CandidateUpdateemailsInput {
  set?: String[] | String
}

export interface OfferCreateInput {
  title: String
  department?: String
  description?: String
  requirements?: String
  location?: LocationCreateOneInput
  stages?: StageCreateManyInput
}

export interface CandidateUpdatephonesInput {
  set?: String[] | String
}

export interface CandidateCreateInput {
  firstName: String
  lastName: String
  tags?: CandidateCreatetagsInput
  emails?: CandidateCreateemailsInput
  phones?: CandidateCreatephonesInput
  links?: CandidateCreatelinksInput
  source?: CandidateCreatesourceInput
}

export interface CandidateUpdatelinksInput {
  set?: String[] | String
}

export interface CandidateCreateOneWithoutApplicationsInput {
  connect?: CandidateWhereUniqueInput
}

export interface CandidateUpdatesourceInput {
  set?: String[] | String
}

export interface UserUpdateManyWithoutWorkspaceInput {
  create?: UserCreateWithoutWorkspaceInput[] | UserCreateWithoutWorkspaceInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutWorkspaceInput[] | UserUpdateWithWhereUniqueWithoutWorkspaceInput
  upsert?: UserUpsertWithWhereUniqueWithoutWorkspaceInput[] | UserUpsertWithWhereUniqueWithoutWorkspaceInput
}

export interface CommentUpdateManyInput {
  create?: CommentCreateInput[] | CommentCreateInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  disconnect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  delete?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  update?: CommentUpdateWithWhereUniqueNestedInput[] | CommentUpdateWithWhereUniqueNestedInput
  upsert?: CommentUpsertWithWhereUniqueNestedInput[] | CommentUpsertWithWhereUniqueNestedInput
}

export interface TaskUpdateWithWhereUniqueWithoutOwnersInput {
  where: TaskWhereUniqueInput
  data: TaskUpdateWithoutOwnersDataInput
}

export interface CommentUpdateWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput
  data: CommentUpdateDataInput
}

export interface WorkspaceCreateOneWithoutUsersInput {
  create?: WorkspaceCreateWithoutUsersInput
  connect?: WorkspaceWhereUniqueInput
}

export interface CommentUpdateDataInput {
  content?: String
  workspace?: WorkspaceUpdateOneInput
  createdBy?: UserUpdateOneInput
}

export interface CandidateUpdateInput {
  firstName?: String
  lastName?: String
  tags?: CandidateUpdatetagsInput
  emails?: CandidateUpdateemailsInput
  phones?: CandidateUpdatephonesInput
  links?: CandidateUpdatelinksInput
  source?: CandidateUpdatesourceInput
}

export interface CommentUpsertWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput
  update: CommentUpdateDataInput
  create: CommentCreateInput
}

export interface WorkspaceUpdateOneInput {
  create?: WorkspaceCreateInput
  connect?: WorkspaceWhereUniqueInput
  delete?: Boolean
  update?: WorkspaceUpdateDataInput
  upsert?: WorkspaceUpsertNestedInput
}

export interface UserUpdateManyWithoutTasksOwnerInput {
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface TaskUpdateDataInput {
  title?: String
  description?: String
  dueAt?: DateTime
  workspace?: WorkspaceUpdateOneInput
  owners?: UserUpdateManyWithoutTasksOwnerInput
}

export interface TaskUpdateWithWhereUniqueNestedInput {
  where: TaskWhereUniqueInput
  data: TaskUpdateDataInput
}

export interface TaskUpdateManyInput {
  create?: TaskCreateInput[] | TaskCreateInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  disconnect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  delete?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  update?: TaskUpdateWithWhereUniqueNestedInput[] | TaskUpdateWithWhereUniqueNestedInput
  upsert?: TaskUpsertWithWhereUniqueNestedInput[] | TaskUpsertWithWhereUniqueNestedInput
}

export interface WorkspaceCreateOneInput {
  create?: WorkspaceCreateInput
  connect?: WorkspaceWhereUniqueInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
}

export interface TaskUpdateInput {
  title?: String
  description?: String
  dueAt?: DateTime
  owners?: UserUpdateManyWithoutTasksOwnerInput
}

export interface InviteUpdateManyWithoutWorkspaceInput {
  create?: InviteCreateWithoutWorkspaceInput[] | InviteCreateWithoutWorkspaceInput
  connect?: InviteWhereUniqueInput[] | InviteWhereUniqueInput
  disconnect?: InviteWhereUniqueInput[] | InviteWhereUniqueInput
  delete?: InviteWhereUniqueInput[] | InviteWhereUniqueInput
  update?: InviteUpdateWithWhereUniqueWithoutWorkspaceInput[] | InviteUpdateWithWhereUniqueWithoutWorkspaceInput
  upsert?: InviteUpsertWithWhereUniqueWithoutWorkspaceInput[] | InviteUpsertWithWhereUniqueWithoutWorkspaceInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface Action extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  workspace: Workspace
}

export interface Offer {
  id: ID_Output
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

export interface Location extends Node {
  id: ID_Output
  country: String
  region: String
  city: String
  zip: String
}

export interface Workspace {
  id: ID_Output
  users: User[]
  name: String
  invites: Invite[]
}

export interface User {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  tasksOwner?: Task[]
  lastLogin?: DateTime
  deletedAt?: DateTime
  email: String
  username: String
  firstName?: String
  lastName?: String
}

export interface Comment extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  workspace: Workspace
  createdBy: User
  content: String
}

export interface Candidate {
  id: ID_Output
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
  source: String[]
}

export interface Invite {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  email: String
  expireAt: DateTime
  invitedBy: User
}

export interface Stage extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description?: String
  position: Int
}

export interface Application {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  offer: Offer
  candidate: Candidate
  stage: Stage
}

export interface AuthPayload {
  token: String
  user: User
}

export interface Task {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  owners?: User[]
  content: String
  dueAt: DateTime
}

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

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean