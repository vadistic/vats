import { makeBindingClass, Options } from 'graphql-binding'
import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import schema from  '../schema/schema'

export interface Query {
    applications: <T = Application[]>(args: { where?: ApplicationWhereInput, orderBy?: ApplicationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notifications: <T = Notification[]>(args: { where?: NotificationWhereInput, orderBy?: NotificationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    locations: <T = Location[]>(args: { where?: LocationWhereInput, orderBy?: LocationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    candidates: <T = Candidate[]>(args: { where?: CandidateWhereInput, orderBy?: CandidateOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    invites: <T = Invite[]>(args: { where?: InviteWhereInput, orderBy?: InviteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    events: <T = Event[]>(args: { where?: EventWhereInput, orderBy?: EventOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stages: <T = Stage[]>(args: { where?: StageWhereInput, orderBy?: StageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    workspaces: <T = Workspace[]>(args: { where?: WorkspaceWhereInput, orderBy?: WorkspaceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    jobs: <T = Job[]>(args: { where?: JobWhereInput, orderBy?: JobOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tasks: <T = Task[]>(args: { where?: TaskWhereInput, orderBy?: TaskOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tags: <T = Tag[]>(args: { where?: TagWhereInput, orderBy?: TagOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    fields: <T = Field[]>(args: { where?: FieldWhereInput, orderBy?: FieldOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    comments: <T = Comment[]>(args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    application: <T = Application | null>(args: { where: ApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notification: <T = Notification | null>(args: { where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    location: <T = Location | null>(args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    candidate: <T = Candidate | null>(args: { where: CandidateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    invite: <T = Invite | null>(args: { where: InviteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    event: <T = Event | null>(args: { where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stage: <T = Stage | null>(args: { where: StageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    workspace: <T = Workspace | null>(args: { where: WorkspaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    job: <T = Job | null>(args: { where: JobWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    task: <T = Task | null>(args: { where: TaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tag: <T = Tag | null>(args: { where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    field: <T = Field | null>(args: { where: FieldWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    comment: <T = Comment | null>(args: { where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    applicationsConnection: <T = ApplicationConnection>(args: { where?: ApplicationWhereInput, orderBy?: ApplicationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notificationsConnection: <T = NotificationConnection>(args: { where?: NotificationWhereInput, orderBy?: NotificationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    locationsConnection: <T = LocationConnection>(args: { where?: LocationWhereInput, orderBy?: LocationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    candidatesConnection: <T = CandidateConnection>(args: { where?: CandidateWhereInput, orderBy?: CandidateOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    invitesConnection: <T = InviteConnection>(args: { where?: InviteWhereInput, orderBy?: InviteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    eventsConnection: <T = EventConnection>(args: { where?: EventWhereInput, orderBy?: EventOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stagesConnection: <T = StageConnection>(args: { where?: StageWhereInput, orderBy?: StageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    workspacesConnection: <T = WorkspaceConnection>(args: { where?: WorkspaceWhereInput, orderBy?: WorkspaceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    jobsConnection: <T = JobConnection>(args: { where?: JobWhereInput, orderBy?: JobOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tasksConnection: <T = TaskConnection>(args: { where?: TaskWhereInput, orderBy?: TaskOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tagsConnection: <T = TagConnection>(args: { where?: TagWhereInput, orderBy?: TagOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    fieldsConnection: <T = FieldConnection>(args: { where?: FieldWhereInput, orderBy?: FieldOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    commentsConnection: <T = CommentConnection>(args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createApplication: <T = Application>(args: { data: ApplicationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createNotification: <T = Notification>(args: { data: NotificationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLocation: <T = Location>(args: { data: LocationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCandidate: <T = Candidate>(args: { data: CandidateCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createInvite: <T = Invite>(args: { data: InviteCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createEvent: <T = Event>(args: { data: EventCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createStage: <T = Stage>(args: { data: StageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createJob: <T = Job>(args: { data: JobCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTask: <T = Task>(args: { data: TaskCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTag: <T = Tag>(args: { data: TagCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createField: <T = Field>(args: { data: FieldCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createComment: <T = Comment>(args: { data: CommentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateApplication: <T = Application | null>(args: { data: ApplicationUpdateInput, where: ApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateNotification: <T = Notification | null>(args: { data: NotificationUpdateInput, where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLocation: <T = Location | null>(args: { data: LocationUpdateInput, where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCandidate: <T = Candidate | null>(args: { data: CandidateUpdateInput, where: CandidateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateInvite: <T = Invite | null>(args: { data: InviteUpdateInput, where: InviteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateEvent: <T = Event | null>(args: { data: EventUpdateInput, where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateStage: <T = Stage | null>(args: { data: StageUpdateInput, where: StageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateWorkspace: <T = Workspace | null>(args: { data: WorkspaceUpdateInput, where: WorkspaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateJob: <T = Job | null>(args: { data: JobUpdateInput, where: JobWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTask: <T = Task | null>(args: { data: TaskUpdateInput, where: TaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTag: <T = Tag | null>(args: { data: TagUpdateInput, where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateField: <T = Field | null>(args: { data: FieldUpdateInput, where: FieldWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateComment: <T = Comment | null>(args: { data: CommentUpdateInput, where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteApplication: <T = Application | null>(args: { where: ApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteNotification: <T = Notification | null>(args: { where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLocation: <T = Location | null>(args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCandidate: <T = Candidate | null>(args: { where: CandidateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteInvite: <T = Invite | null>(args: { where: InviteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteEvent: <T = Event | null>(args: { where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteStage: <T = Stage | null>(args: { where: StageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteWorkspace: <T = Workspace | null>(args: { where: WorkspaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteJob: <T = Job | null>(args: { where: JobWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteTask: <T = Task | null>(args: { where: TaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteTag: <T = Tag | null>(args: { where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteField: <T = Field | null>(args: { where: FieldWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteComment: <T = Comment | null>(args: { where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertApplication: <T = Application>(args: { where: ApplicationWhereUniqueInput, create: ApplicationCreateInput, update: ApplicationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertNotification: <T = Notification>(args: { where: NotificationWhereUniqueInput, create: NotificationCreateInput, update: NotificationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLocation: <T = Location>(args: { where: LocationWhereUniqueInput, create: LocationCreateInput, update: LocationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCandidate: <T = Candidate>(args: { where: CandidateWhereUniqueInput, create: CandidateCreateInput, update: CandidateUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertInvite: <T = Invite>(args: { where: InviteWhereUniqueInput, create: InviteCreateInput, update: InviteUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertEvent: <T = Event>(args: { where: EventWhereUniqueInput, create: EventCreateInput, update: EventUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertStage: <T = Stage>(args: { where: StageWhereUniqueInput, create: StageCreateInput, update: StageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertWorkspace: <T = Workspace>(args: { where: WorkspaceWhereUniqueInput, create: WorkspaceCreateInput, update: WorkspaceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertJob: <T = Job>(args: { where: JobWhereUniqueInput, create: JobCreateInput, update: JobUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTask: <T = Task>(args: { where: TaskWhereUniqueInput, create: TaskCreateInput, update: TaskUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTag: <T = Tag>(args: { where: TagWhereUniqueInput, create: TagCreateInput, update: TagUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertField: <T = Field>(args: { where: FieldWhereUniqueInput, create: FieldCreateInput, update: FieldUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertComment: <T = Comment>(args: { where: CommentWhereUniqueInput, create: CommentCreateInput, update: CommentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyApplications: <T = BatchPayload>(args: { data: ApplicationUpdateInput, where?: ApplicationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyNotifications: <T = BatchPayload>(args: { data: NotificationUpdateInput, where?: NotificationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLocations: <T = BatchPayload>(args: { data: LocationUpdateInput, where?: LocationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCandidates: <T = BatchPayload>(args: { data: CandidateUpdateInput, where?: CandidateWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyInvites: <T = BatchPayload>(args: { data: InviteUpdateInput, where?: InviteWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyEvents: <T = BatchPayload>(args: { data: EventUpdateInput, where?: EventWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyStages: <T = BatchPayload>(args: { data: StageUpdateInput, where?: StageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyWorkspaces: <T = BatchPayload>(args: { data: WorkspaceUpdateInput, where?: WorkspaceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyJobs: <T = BatchPayload>(args: { data: JobUpdateInput, where?: JobWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTasks: <T = BatchPayload>(args: { data: TaskUpdateInput, where?: TaskWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTags: <T = BatchPayload>(args: { data: TagUpdateInput, where?: TagWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFields: <T = BatchPayload>(args: { data: FieldUpdateInput, where?: FieldWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyComments: <T = BatchPayload>(args: { data: CommentUpdateInput, where?: CommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyApplications: <T = BatchPayload>(args: { where?: ApplicationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyNotifications: <T = BatchPayload>(args: { where?: NotificationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLocations: <T = BatchPayload>(args: { where?: LocationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCandidates: <T = BatchPayload>(args: { where?: CandidateWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyInvites: <T = BatchPayload>(args: { where?: InviteWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyEvents: <T = BatchPayload>(args: { where?: EventWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyStages: <T = BatchPayload>(args: { where?: StageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyWorkspaces: <T = BatchPayload>(args: { where?: WorkspaceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyJobs: <T = BatchPayload>(args: { where?: JobWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTasks: <T = BatchPayload>(args: { where?: TaskWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTags: <T = BatchPayload>(args: { where?: TagWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFields: <T = BatchPayload>(args: { where?: FieldWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyComments: <T = BatchPayload>(args: { where?: CommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    signup: <T = AuthPayload>(args: { data?: SignupInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    login: <T = AuthPayload>(args: { data?: LoginInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createWorkspace: <T = AuthPayload>(args: { data: WorkspaceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
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

export type JobType =   'DRAFT' |
  'PUBLISHED' |
  'ARCHIVED'

export type TaskTarget =   'NULL' |
  'JOB' |
  'CANIDATE'

export type CommentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'content_ASC' |
  'content_DESC'

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
  'position_DESC' |
  'type_ASC' |
  'type_DESC'

export type TaskOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'target_type_ASC' |
  'target_type_DESC' |
  'title_ASC' |
  'title_DESC' |
  'description_ASC' |
  'description_DESC' |
  'dueAt_ASC' |
  'dueAt_DESC'

export type StageType =   'NEW' |
  'QUALIFIED' |
  'DISQUALIFIED'

export type EventActorType =   'SYSTEM' |
  'USER' |
  'CANDIDATE'

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
  'deletedAt_DESC'

export type FieldOrderByInput =   'id_ASC' |
  'id_DESC' |
  'type_ASC' |
  'type_DESC' |
  'label_ASC' |
  'label_DESC' |
  'value_ASC' |
  'value_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type JobOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'status_ASC' |
  'status_DESC' |
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
  'lastName_DESC'

export type FieldType =   'INT' |
  'FLOAT' |
  'STRING' |
  'TEXT' |
  'BOOLEAN' |
  'DATE_TIME'

export type ApplicationOrderByInput =   'createdAt_ASC' |
  'createdAt_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'disqualifyReason_ASC' |
  'disqualifyReason_DESC'

export type EventOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'type_ASC' |
  'type_DESC' |
  'actor_type_ASC' |
  'actor_type_DESC' |
  'target_type_ASC' |
  'target_type_DESC'

export type NotificationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type WorkspaceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC'

export type TagOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'label_ASC' |
  'label_DESC'

export type EventTargetType =   'CANDIDATE' |
  'JOB' |
  'TASK' |
  'WORKSPACE'

export type EventType =   'DEFAULT' |
  'MESSAGE' |
  'COMMENT_CREATE' |
  'COMMENT_EDIT' |
  'COMMENT_DELETE'

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

export interface WorkspaceCreateWithoutEventsInput {
  name: String
  users?: UserCreateManyWithoutWorkspaceInput
  jobs?: JobCreateManyWithoutWorkspaceInput
  applications?: ApplicationCreateManyWithoutWorkspaceInput
  candidates?: CandidateCreateManyWithoutWorkspaceInput
  invites?: InviteCreateManyWithoutWorkspaceInput
  tags?: TagCreateManyInput
}

export interface UserManyConnect {
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface WorkspaceUpdateOneWithoutApplicationsInput {
  create?: WorkspaceCreateWithoutApplicationsInput
  connect?: WorkspaceWhereUniqueInput
  delete?: Boolean
  update?: WorkspaceUpdateWithoutApplicationsDataInput
  upsert?: WorkspaceUpsertWithoutApplicationsInput
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
  disqualifyReason?: String
  disqualifyReason_not?: String
  disqualifyReason_in?: String[] | String
  disqualifyReason_not_in?: String[] | String
  disqualifyReason_lt?: String
  disqualifyReason_lte?: String
  disqualifyReason_gt?: String
  disqualifyReason_gte?: String
  disqualifyReason_contains?: String
  disqualifyReason_not_contains?: String
  disqualifyReason_starts_with?: String
  disqualifyReason_not_starts_with?: String
  disqualifyReason_ends_with?: String
  disqualifyReason_not_ends_with?: String
  workspace?: WorkspaceWhereInput
  job?: JobWhereInput
  candidate?: CandidateWhereInput
  stage?: StageWhereInput
}

export interface WorkspaceUpdateWithoutApplicationsDataInput {
  name?: String
  events?: EventUpdateManyWithoutTarget_workspaceInput
  users?: UserUpdateManyWithoutWorkspaceInput
  jobs?: JobUpdateManyWithoutWorkspaceInput
  candidates?: CandidateUpdateManyWithoutWorkspaceInput
  invites?: InviteUpdateManyWithoutWorkspaceInput
  tags?: TagUpdateManyInput
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
  target_type?: TaskTarget
  target_type_not?: TaskTarget
  target_type_in?: TaskTarget[] | TaskTarget
  target_type_not_in?: TaskTarget[] | TaskTarget
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
  workspace?: WorkspaceWhereInput
  subscribers_every?: UserWhereInput
  subscribers_some?: UserWhereInput
  subscribers_none?: UserWhereInput
  owners_every?: UserWhereInput
  owners_some?: UserWhereInput
  owners_none?: UserWhereInput
  target_job?: JobWhereInput
  target_candidate?: CandidateWhereInput
}

export interface EventUpdateManyWithoutTarget_workspaceInput {
  create?: EventCreateWithoutTarget_workspaceInput[] | EventCreateWithoutTarget_workspaceInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  disconnect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  delete?: EventWhereUniqueInput[] | EventWhereUniqueInput
  update?: EventUpdateWithWhereUniqueWithoutTarget_workspaceInput[] | EventUpdateWithWhereUniqueWithoutTarget_workspaceInput
  upsert?: EventUpsertWithWhereUniqueWithoutTarget_workspaceInput[] | EventUpsertWithWhereUniqueWithoutTarget_workspaceInput
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
}

export interface EventUpdateWithWhereUniqueWithoutTarget_workspaceInput {
  where: EventWhereUniqueInput
  data: EventUpdateWithoutTarget_workspaceDataInput
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

export interface StageCreateInput {
  name: String
  description?: String
  position: Int
  type: StageType
}

export interface TaskUpsertWithWhereUniqueWithoutSubscribersInput {
  where: TaskWhereUniqueInput
  update: TaskUpdateWithoutSubscribersDataInput
  create: TaskCreateWithoutSubscribersInput
}

export interface CommentCreateManyInput {
  create?: CommentCreateInput[] | CommentCreateInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
}

export interface EventUpdateWithoutTarget_workspaceDataInput {
  type?: EventType
  actor_type?: EventActorType
  target_type?: EventTargetType
  workspace?: WorkspaceUpdateOneInput
  actor_user?: UserUpdateOneWithoutEventsInput
  actor_candidate?: CandidateUpdateOneInput
  target_candidate?: CandidateUpdateOneWithoutEventsInput
  target_job?: JobUpdateOneWithoutEventsInput
  target_task?: TaskUpdateOneInput
}

export interface CommentCreateInput {
  content: String
  createdBy: UserCreateOneInput
  parent?: CommentCreateOneInput
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

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
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

export interface UserCreateInput {
  firstName?: String
  lastName?: String
  email: String
  username: String
  password: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  workspace: WorkspaceCreateOneWithoutUsersInput
  events?: EventCreateOneWithoutActor_userInput
  notifications?: NotificationCreateManyWithoutUserInput
  subscriptions_jobs?: JobCreateManyWithoutSubscribersInput
  subscriptions_candidates?: CandidateCreateManyWithoutSubscribersInput
  subscriptions_tasks?: TaskCreateManyWithoutSubscribersInput
  tasks?: TaskCreateManyWithoutOwnersInput
}

export interface LoginInput {
  email: String
  password: String
}

export interface TaskCreateManyWithoutOwnersInput {
  create?: TaskCreateWithoutOwnersInput[] | TaskCreateWithoutOwnersInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
}

export interface SignupInput {
  password: String
  username: String
  inviteId: ID_Input
}

export interface TaskCreateWithoutOwnersInput {
  target_type?: TaskTarget
  title?: String
  description?: String
  dueAt?: DateTime
  workspace: WorkspaceCreateOneInput
  subscribers?: UserCreateManyWithoutSubscriptions_tasksInput
  target_job?: JobCreateOneInput
  target_candidate?: CandidateCreateOneWithoutTasksInput
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
  status?: JobType
  status_not?: JobType
  status_in?: JobType[] | JobType
  status_not_in?: JobType[] | JobType
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
  subscribers_every?: UserWhereInput
  subscribers_some?: UserWhereInput
  subscribers_none?: UserWhereInput
  events_every?: EventWhereInput
  events_some?: EventWhereInput
  events_none?: EventWhereInput
  applications_every?: ApplicationWhereInput
  applications_some?: ApplicationWhereInput
  applications_none?: ApplicationWhereInput
  stages_every?: StageWhereInput
  stages_some?: StageWhereInput
  stages_none?: StageWhereInput
  comments_every?: CommentWhereInput
  comments_some?: CommentWhereInput
  comments_none?: CommentWhereInput
  location?: LocationWhereInput
}

export interface CandidateCreateOneWithoutTasksInput {
  create?: CandidateCreateWithoutTasksInput
  connect?: CandidateWhereUniqueInput
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
  user?: UserWhereInput
  event?: EventWhereInput
}

export interface CandidateCreateWithoutTasksInput {
  firstName: String
  lastName: String
  emails?: CandidateCreateemailsInput
  phones?: CandidateCreatephonesInput
  links?: CandidateCreatelinksInput
  resume?: CandidateCreateresumeInput
  coverLetter?: CandidateCreatecoverLetterInput
  source?: CandidateCreatesourceInput
  workspace: WorkspaceCreateOneWithoutCandidatesInput
  events?: EventCreateManyWithoutTarget_candidateInput
  subscribers?: UserCreateManyWithoutSubscriptions_candidatesInput
  tags?: TagCreateManyInput
  fields?: FieldCreateManyInput
  applications?: ApplicationCreateManyWithoutCandidateInput
  comments?: CommentCreateManyInput
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
  lastLogin?: DateTime
  lastLogin_not?: DateTime
  lastLogin_in?: DateTime[] | DateTime
  lastLogin_not_in?: DateTime[] | DateTime
  lastLogin_lt?: DateTime
  lastLogin_lte?: DateTime
  lastLogin_gt?: DateTime
  lastLogin_gte?: DateTime
  deletedAt?: DateTime
  deletedAt_not?: DateTime
  deletedAt_in?: DateTime[] | DateTime
  deletedAt_not_in?: DateTime[] | DateTime
  deletedAt_lt?: DateTime
  deletedAt_lte?: DateTime
  deletedAt_gt?: DateTime
  deletedAt_gte?: DateTime
  workspace?: WorkspaceWhereInput
  events?: EventWhereInput
  notifications_every?: NotificationWhereInput
  notifications_some?: NotificationWhereInput
  notifications_none?: NotificationWhereInput
  subscriptions_jobs_every?: JobWhereInput
  subscriptions_jobs_some?: JobWhereInput
  subscriptions_jobs_none?: JobWhereInput
  subscriptions_candidates_every?: CandidateWhereInput
  subscriptions_candidates_some?: CandidateWhereInput
  subscriptions_candidates_none?: CandidateWhereInput
  subscriptions_tasks_every?: TaskWhereInput
  subscriptions_tasks_some?: TaskWhereInput
  subscriptions_tasks_none?: TaskWhereInput
  tasks_every?: TaskWhereInput
  tasks_some?: TaskWhereInput
  tasks_none?: TaskWhereInput
}

export interface ApplicationCreateManyWithoutCandidateInput {
  create?: ApplicationCreateWithoutCandidateInput[] | ApplicationCreateWithoutCandidateInput
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
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
  actor_type?: EventActorType
  actor_type_not?: EventActorType
  actor_type_in?: EventActorType[] | EventActorType
  actor_type_not_in?: EventActorType[] | EventActorType
  target_type?: EventTargetType
  target_type_not?: EventTargetType
  target_type_in?: EventTargetType[] | EventTargetType
  target_type_not_in?: EventTargetType[] | EventTargetType
  workspace?: WorkspaceWhereInput
  actor_user?: UserWhereInput
  actor_candidate?: CandidateWhereInput
  target_candidate?: CandidateWhereInput
  target_job?: JobWhereInput
  target_task?: TaskWhereInput
  target_workspace?: WorkspaceWhereInput
}

export interface ApplicationCreateWithoutCandidateInput {
  disqualifyReason?: String
  workspace: WorkspaceCreateOneWithoutApplicationsInput
  job: JobCreateOneWithoutApplicationsInput
  stage: StageCreateOneInput
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
  applications_every?: ApplicationWhereInput
  applications_some?: ApplicationWhereInput
  applications_none?: ApplicationWhereInput
  candidates_every?: CandidateWhereInput
  candidates_some?: CandidateWhereInput
  candidates_none?: CandidateWhereInput
  invites_every?: InviteWhereInput
  invites_some?: InviteWhereInput
  invites_none?: InviteWhereInput
  tags_every?: TagWhereInput
  tags_some?: TagWhereInput
  tags_none?: TagWhereInput
}

export interface StageCreateOneInput {
  create?: StageCreateInput
  connect?: StageWhereUniqueInput
}

export interface StageUpdateInput {
  name?: String
  description?: String
  position?: Int
  type?: StageType
}

export interface CommentCreateOneInput {
  create?: CommentCreateInput
  connect?: CommentWhereUniqueInput
}

export interface ApplicationWhereUniqueInput {
  id?: ID_Input
}

export interface LocationCreateOneInput {
  create?: LocationCreateInput
  connect?: LocationWhereUniqueInput
}

export interface LocationWhereUniqueInput {
  id?: ID_Input
}

export interface LocationCreateInput {
  country: String
  region: String
  city: String
  zip: String
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface WorkspaceCreateOneWithoutEventsInput {
  create?: WorkspaceCreateWithoutEventsInput
  connect?: WorkspaceWhereUniqueInput
}

export interface EventWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpsertWithWhereUniqueWithoutSubscriptions_tasksInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutSubscriptions_tasksDataInput
  create: UserCreateWithoutSubscriptions_tasksInput
}

export interface WorkspaceWhereUniqueInput {
  id?: ID_Input
}

export interface CandidateCreateManyWithoutWorkspaceInput {
  create?: CandidateCreateWithoutWorkspaceInput[] | CandidateCreateWithoutWorkspaceInput
  connect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
}

export interface TaskWhereUniqueInput {
  id?: ID_Input
}

export interface CandidateCreateWithoutWorkspaceInput {
  firstName: String
  lastName: String
  emails?: CandidateCreateemailsInput
  phones?: CandidateCreatephonesInput
  links?: CandidateCreatelinksInput
  resume?: CandidateCreateresumeInput
  coverLetter?: CandidateCreatecoverLetterInput
  source?: CandidateCreatesourceInput
  events?: EventCreateManyWithoutTarget_candidateInput
  subscribers?: UserCreateManyWithoutSubscriptions_candidatesInput
  tags?: TagCreateManyInput
  fields?: FieldCreateManyInput
  tasks?: TaskCreateManyWithoutTarget_candidateInput
  applications?: ApplicationCreateManyWithoutCandidateInput
  comments?: CommentCreateManyInput
}

export interface FieldWhereUniqueInput {
  id?: ID_Input
}

export interface InviteCreateManyWithoutWorkspaceInput {
  create?: InviteCreateWithoutWorkspaceInput[] | InviteCreateWithoutWorkspaceInput
  connect?: InviteWhereUniqueInput[] | InviteWhereUniqueInput
}

export interface WorkspaceUpsertWithoutInvitesInput {
  update: WorkspaceUpdateWithoutInvitesDataInput
  create: WorkspaceCreateWithoutInvitesInput
}

export interface InviteCreateWithoutWorkspaceInput {
  email: String
  expireAt: DateTime
  invitedBy: UserCreateOneInput
}

export interface WorkspaceUpdateOneWithoutInvitesInput {
  create?: WorkspaceCreateWithoutInvitesInput
  connect?: WorkspaceWhereUniqueInput
  delete?: Boolean
  update?: WorkspaceUpdateWithoutInvitesDataInput
  upsert?: WorkspaceUpsertWithoutInvitesInput
}

export interface NotificationCreateInput {
  user: UserCreateOneWithoutNotificationsInput
  event: EventCreateOneInput
}

export interface UserUpdateInput {
  firstName?: String
  lastName?: String
  email?: String
  username?: String
  password?: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  workspace?: WorkspaceUpdateOneWithoutUsersInput
  events?: EventUpdateOneWithoutActor_userInput
  notifications?: NotificationUpdateManyWithoutUserInput
  subscriptions_jobs?: JobUpdateManyWithoutSubscribersInput
  subscriptions_candidates?: CandidateUpdateManyWithoutSubscribersInput
  subscriptions_tasks?: TaskUpdateManyWithoutSubscribersInput
  tasks?: TaskUpdateManyWithoutOwnersInput
}

export interface UserCreateOneWithoutNotificationsInput {
  create?: UserCreateWithoutNotificationsInput
  connect?: UserWhereUniqueInput
}

export interface LocationUpdateInput {
  country?: String
  region?: String
  city?: String
  zip?: String
}

export interface UserCreateWithoutNotificationsInput {
  firstName?: String
  lastName?: String
  email: String
  username: String
  password: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  workspace: WorkspaceCreateOneWithoutUsersInput
  events?: EventCreateOneWithoutActor_userInput
  subscriptions_jobs?: JobCreateManyWithoutSubscribersInput
  subscriptions_candidates?: CandidateCreateManyWithoutSubscribersInput
  subscriptions_tasks?: TaskCreateManyWithoutSubscribersInput
  tasks?: TaskCreateManyWithoutOwnersInput
}

export interface UserUpdateWithoutNotificationsDataInput {
  firstName?: String
  lastName?: String
  email?: String
  username?: String
  password?: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  workspace?: WorkspaceUpdateOneWithoutUsersInput
  events?: EventUpdateOneWithoutActor_userInput
  subscriptions_jobs?: JobUpdateManyWithoutSubscribersInput
  subscriptions_candidates?: CandidateUpdateManyWithoutSubscribersInput
  subscriptions_tasks?: TaskUpdateManyWithoutSubscribersInput
  tasks?: TaskUpdateManyWithoutOwnersInput
}

export interface InviteCreateInput {
  email: String
  expireAt: DateTime
  workspace: WorkspaceCreateOneWithoutInvitesInput
  invitedBy: UserCreateOneInput
}

export interface NotificationUpdateInput {
  user?: UserUpdateOneWithoutNotificationsInput
  event?: EventUpdateOneInput
}

export interface WorkspaceCreateOneWithoutInvitesInput {
  create?: WorkspaceCreateWithoutInvitesInput
  connect?: WorkspaceWhereUniqueInput
}

export interface EventUpsertWithWhereUniqueWithoutTarget_workspaceInput {
  where: EventWhereUniqueInput
  update: EventUpdateWithoutTarget_workspaceDataInput
  create: EventCreateWithoutTarget_workspaceInput
}

export interface WorkspaceCreateWithoutInvitesInput {
  name: String
  events?: EventCreateManyWithoutTarget_workspaceInput
  users?: UserCreateManyWithoutWorkspaceInput
  jobs?: JobCreateManyWithoutWorkspaceInput
  applications?: ApplicationCreateManyWithoutWorkspaceInput
  candidates?: CandidateCreateManyWithoutWorkspaceInput
  tags?: TagCreateManyInput
}

export interface UserUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutWorkspaceDataInput
  create: UserCreateWithoutWorkspaceInput
}

export interface ApplicationUpdateInput {
  disqualifyReason?: String
  workspace?: WorkspaceUpdateOneWithoutApplicationsInput
  job?: JobUpdateOneWithoutApplicationsInput
  candidate?: CandidateUpdateOneWithoutApplicationsInput
  stage?: StageUpdateOneInput
}

export interface CandidateUpsertNestedInput {
  update: CandidateUpdateDataInput
  create: CandidateCreateInput
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
  workspace?: WorkspaceWhereInput
  invitedBy?: UserWhereInput
}

export interface JobUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: JobWhereUniqueInput
  update: JobUpdateWithoutWorkspaceDataInput
  create: JobCreateWithoutWorkspaceInput
}

export interface CandidateUpsertWithWhereUniqueWithoutSubscribersInput {
  where: CandidateWhereUniqueInput
  update: CandidateUpdateWithoutSubscribersDataInput
  create: CandidateCreateWithoutSubscribersInput
}

export interface WorkspaceUpsertWithoutUsersInput {
  update: WorkspaceUpdateWithoutUsersDataInput
  create: WorkspaceCreateWithoutUsersInput
}

export interface TaskUpsertWithWhereUniqueWithoutTarget_candidateInput {
  where: TaskWhereUniqueInput
  update: TaskUpdateWithoutTarget_candidateDataInput
  create: TaskCreateWithoutTarget_candidateInput
}

export interface JobUpsertWithoutApplicationsInput {
  update: JobUpdateWithoutApplicationsDataInput
  create: JobCreateWithoutApplicationsInput
}

export interface UserUpsertWithWhereUniqueWithoutTasksInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutTasksDataInput
  create: UserCreateWithoutTasksInput
}

export interface CandidateUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: CandidateWhereUniqueInput
  update: CandidateUpdateWithoutWorkspaceDataInput
  create: CandidateCreateWithoutWorkspaceInput
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
  tags_every?: TagWhereInput
  tags_some?: TagWhereInput
  tags_none?: TagWhereInput
  fields_every?: FieldWhereInput
  fields_some?: FieldWhereInput
  fields_none?: FieldWhereInput
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

export interface UserUpsertWithoutEventsInput {
  update: UserUpdateWithoutEventsDataInput
  create: UserCreateWithoutEventsInput
}

export interface WorkspaceUpdateOneInput {
  create?: WorkspaceCreateInput
  connect?: WorkspaceWhereUniqueInput
  delete?: Boolean
  update?: WorkspaceUpdateDataInput
  upsert?: WorkspaceUpsertNestedInput
}

export interface EventUpsertNestedInput {
  update: EventUpdateDataInput
  create: EventCreateInput
}

export interface WorkspaceUpdateDataInput {
  name?: String
  events?: EventUpdateManyWithoutTarget_workspaceInput
  users?: UserUpdateManyWithoutWorkspaceInput
  jobs?: JobUpdateManyWithoutWorkspaceInput
  applications?: ApplicationUpdateManyWithoutWorkspaceInput
  candidates?: CandidateUpdateManyWithoutWorkspaceInput
  invites?: InviteUpdateManyWithoutWorkspaceInput
  tags?: TagUpdateManyInput
}

export interface JobUpdateWithoutEventsDataInput {
  status?: JobType
  title?: String
  department?: String
  description?: String
  requirements?: String
  workspace?: WorkspaceUpdateOneWithoutJobsInput
  subscribers?: UserUpdateManyWithoutSubscriptions_jobsInput
  applications?: ApplicationUpdateManyWithoutJobInput
  stages?: StageUpdateManyInput
  comments?: CommentUpdateManyInput
  location?: LocationUpdateOneInput
}

export interface UserUpdateManyWithoutWorkspaceInput {
  create?: UserCreateWithoutWorkspaceInput[] | UserCreateWithoutWorkspaceInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutWorkspaceInput[] | UserUpdateWithWhereUniqueWithoutWorkspaceInput
  upsert?: UserUpsertWithWhereUniqueWithoutWorkspaceInput[] | UserUpsertWithWhereUniqueWithoutWorkspaceInput
}

export interface CandidateUpsertWithoutEventsInput {
  update: CandidateUpdateWithoutEventsDataInput
  create: CandidateCreateWithoutEventsInput
}

export interface UserUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutWorkspaceDataInput
}

export interface JobUpsertWithWhereUniqueWithoutSubscribersInput {
  where: JobWhereUniqueInput
  update: JobUpdateWithoutSubscribersDataInput
  create: JobCreateWithoutSubscribersInput
}

export interface UserUpdateWithoutWorkspaceDataInput {
  firstName?: String
  lastName?: String
  email?: String
  username?: String
  password?: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  events?: EventUpdateOneWithoutActor_userInput
  notifications?: NotificationUpdateManyWithoutUserInput
  subscriptions_jobs?: JobUpdateManyWithoutSubscribersInput
  subscriptions_candidates?: CandidateUpdateManyWithoutSubscribersInput
  subscriptions_tasks?: TaskUpdateManyWithoutSubscribersInput
  tasks?: TaskUpdateManyWithoutOwnersInput
}

export interface WorkspaceUpsertWithoutEventsInput {
  update: WorkspaceUpdateWithoutEventsDataInput
  create: WorkspaceCreateWithoutEventsInput
}

export interface EventUpdateOneWithoutActor_userInput {
  create?: EventCreateWithoutActor_userInput
  connect?: EventWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: EventUpdateWithoutActor_userDataInput
  upsert?: EventUpsertWithoutActor_userInput
}

export interface InviteUpdateWithoutWorkspaceDataInput {
  email?: String
  expireAt?: DateTime
  invitedBy?: UserUpdateOneInput
}

export interface EventUpdateWithoutActor_userDataInput {
  type?: EventType
  actor_type?: EventActorType
  target_type?: EventTargetType
  workspace?: WorkspaceUpdateOneInput
  actor_candidate?: CandidateUpdateOneInput
  target_candidate?: CandidateUpdateOneWithoutEventsInput
  target_job?: JobUpdateOneWithoutEventsInput
  target_task?: TaskUpdateOneInput
  target_workspace?: WorkspaceUpdateOneWithoutEventsInput
}

export interface InviteUpdateManyWithoutWorkspaceInput {
  create?: InviteCreateWithoutWorkspaceInput[] | InviteCreateWithoutWorkspaceInput
  connect?: InviteWhereUniqueInput[] | InviteWhereUniqueInput
  disconnect?: InviteWhereUniqueInput[] | InviteWhereUniqueInput
  delete?: InviteWhereUniqueInput[] | InviteWhereUniqueInput
  update?: InviteUpdateWithWhereUniqueWithoutWorkspaceInput[] | InviteUpdateWithWhereUniqueWithoutWorkspaceInput
  upsert?: InviteUpsertWithWhereUniqueWithoutWorkspaceInput[] | InviteUpsertWithWhereUniqueWithoutWorkspaceInput
}

export interface CandidateUpdateOneInput {
  create?: CandidateCreateInput
  connect?: CandidateWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CandidateUpdateDataInput
  upsert?: CandidateUpsertNestedInput
}

export interface WorkspaceUpdateOneWithoutEventsInput {
  create?: WorkspaceCreateWithoutEventsInput
  connect?: WorkspaceWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: WorkspaceUpdateWithoutEventsDataInput
  upsert?: WorkspaceUpsertWithoutEventsInput
}

export interface CandidateUpdateDataInput {
  firstName?: String
  lastName?: String
  emails?: CandidateUpdateemailsInput
  phones?: CandidateUpdatephonesInput
  links?: CandidateUpdatelinksInput
  resume?: CandidateUpdateresumeInput
  coverLetter?: CandidateUpdatecoverLetterInput
  source?: CandidateUpdatesourceInput
  workspace?: WorkspaceUpdateOneWithoutCandidatesInput
  events?: EventUpdateManyWithoutTarget_candidateInput
  subscribers?: UserUpdateManyWithoutSubscriptions_candidatesInput
  tags?: TagUpdateManyInput
  fields?: FieldUpdateManyInput
  tasks?: TaskUpdateManyWithoutTarget_candidateInput
  applications?: ApplicationUpdateManyWithoutCandidateInput
  comments?: CommentUpdateManyInput
}

export interface ApplicationCreateInput {
  disqualifyReason?: String
  workspace: WorkspaceCreateOneWithoutApplicationsInput
  job: JobCreateOneWithoutApplicationsInput
  candidate: CandidateCreateOneWithoutApplicationsInput
  stage: StageCreateOneInput
}

export interface CandidateUpdateemailsInput {
  set?: String[] | String
}

export interface WorkspaceCreateWithoutApplicationsInput {
  name: String
  events?: EventCreateManyWithoutTarget_workspaceInput
  users?: UserCreateManyWithoutWorkspaceInput
  jobs?: JobCreateManyWithoutWorkspaceInput
  candidates?: CandidateCreateManyWithoutWorkspaceInput
  invites?: InviteCreateManyWithoutWorkspaceInput
  tags?: TagCreateManyInput
}

export interface CandidateUpdatephonesInput {
  set?: String[] | String
}

export interface EventCreateWithoutTarget_workspaceInput {
  type: EventType
  actor_type: EventActorType
  target_type: EventTargetType
  workspace: WorkspaceCreateOneInput
  actor_user?: UserCreateOneWithoutEventsInput
  actor_candidate?: CandidateCreateOneInput
  target_candidate?: CandidateCreateOneWithoutEventsInput
  target_job?: JobCreateOneWithoutEventsInput
  target_task?: TaskCreateOneInput
}

export interface CandidateUpdatelinksInput {
  set?: String[] | String
}

export interface WorkspaceCreateInput {
  name: String
  firstName?: String
  lastName?: String
  email: String
  username: String
  password: String
}

export interface CandidateUpdateresumeInput {
  set?: String[] | String
}

export interface UserCreateWithoutEventsInput {
  firstName?: String
  lastName?: String
  email: String
  username: String
  password: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  workspace: WorkspaceCreateOneWithoutUsersInput
  notifications?: NotificationCreateManyWithoutUserInput
  subscriptions_jobs?: JobCreateManyWithoutSubscribersInput
  subscriptions_candidates?: CandidateCreateManyWithoutSubscribersInput
  subscriptions_tasks?: TaskCreateManyWithoutSubscribersInput
  tasks?: TaskCreateManyWithoutOwnersInput
}

export interface CandidateUpdatecoverLetterInput {
  set?: String[] | String
}

export interface WorkspaceCreateWithoutUsersInput {
  name: String
  events?: EventCreateManyWithoutTarget_workspaceInput
  jobs?: JobCreateManyWithoutWorkspaceInput
  applications?: ApplicationCreateManyWithoutWorkspaceInput
  candidates?: CandidateCreateManyWithoutWorkspaceInput
  invites?: InviteCreateManyWithoutWorkspaceInput
  tags?: TagCreateManyInput
}

export interface CandidateUpdatesourceInput {
  set?: String[] | String
}

export interface JobCreateWithoutWorkspaceInput {
  status: JobType
  title: String
  department?: String
  description?: String
  requirements?: String
  subscribers?: UserCreateManyWithoutSubscriptions_jobsInput
  events?: EventCreateManyWithoutTarget_jobInput
  applications?: ApplicationCreateManyWithoutJobInput
  stages?: StageCreateManyInput
  comments?: CommentCreateManyInput
  location?: LocationCreateOneInput
}

export interface WorkspaceUpdateOneWithoutCandidatesInput {
  create?: WorkspaceCreateWithoutCandidatesInput
  connect?: WorkspaceWhereUniqueInput
  delete?: Boolean
  update?: WorkspaceUpdateWithoutCandidatesDataInput
  upsert?: WorkspaceUpsertWithoutCandidatesInput
}

export interface UserCreateWithoutSubscriptions_jobsInput {
  firstName?: String
  lastName?: String
  email: String
  username: String
  password: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  workspace: WorkspaceCreateOneWithoutUsersInput
  events?: EventCreateOneWithoutActor_userInput
  notifications?: NotificationCreateManyWithoutUserInput
  subscriptions_candidates?: CandidateCreateManyWithoutSubscribersInput
  subscriptions_tasks?: TaskCreateManyWithoutSubscribersInput
  tasks?: TaskCreateManyWithoutOwnersInput
}

export interface WorkspaceUpdateWithoutCandidatesDataInput {
  name?: String
  events?: EventUpdateManyWithoutTarget_workspaceInput
  users?: UserUpdateManyWithoutWorkspaceInput
  jobs?: JobUpdateManyWithoutWorkspaceInput
  applications?: ApplicationUpdateManyWithoutWorkspaceInput
  invites?: InviteUpdateManyWithoutWorkspaceInput
  tags?: TagUpdateManyInput
}

export interface EventCreateWithoutActor_userInput {
  type: EventType
  actor_type: EventActorType
  target_type: EventTargetType
  workspace: WorkspaceCreateOneInput
  actor_candidate?: CandidateCreateOneInput
  target_candidate?: CandidateCreateOneWithoutEventsInput
  target_job?: JobCreateOneWithoutEventsInput
  target_task?: TaskCreateOneInput
  target_workspace?: WorkspaceCreateOneWithoutEventsInput
}

export interface JobUpdateManyWithoutWorkspaceInput {
  create?: JobCreateWithoutWorkspaceInput[] | JobCreateWithoutWorkspaceInput
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput
  disconnect?: JobWhereUniqueInput[] | JobWhereUniqueInput
  delete?: JobWhereUniqueInput[] | JobWhereUniqueInput
  update?: JobUpdateWithWhereUniqueWithoutWorkspaceInput[] | JobUpdateWithWhereUniqueWithoutWorkspaceInput
  upsert?: JobUpsertWithWhereUniqueWithoutWorkspaceInput[] | JobUpsertWithWhereUniqueWithoutWorkspaceInput
}

export interface CandidateCreateInput {
  firstName: String
  lastName: String
  emails?: CandidateCreateemailsInput
  phones?: CandidateCreatephonesInput
  links?: CandidateCreatelinksInput
  resume?: CandidateCreateresumeInput
  coverLetter?: CandidateCreatecoverLetterInput
  source?: CandidateCreatesourceInput
  workspace: WorkspaceCreateOneWithoutCandidatesInput
  events?: EventCreateManyWithoutTarget_candidateInput
  subscribers?: UserCreateManyWithoutSubscriptions_candidatesInput
  tags?: TagCreateManyInput
  fields?: FieldCreateManyInput
  tasks?: TaskCreateManyWithoutTarget_candidateInput
  applications?: ApplicationCreateManyWithoutCandidateInput
  comments?: CommentCreateManyInput
}

export interface JobUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: JobWhereUniqueInput
  data: JobUpdateWithoutWorkspaceDataInput
}

export interface CandidateCreatephonesInput {
  set?: String[] | String
}

export interface JobUpdateWithoutWorkspaceDataInput {
  status?: JobType
  title?: String
  department?: String
  description?: String
  requirements?: String
  subscribers?: UserUpdateManyWithoutSubscriptions_jobsInput
  events?: EventUpdateManyWithoutTarget_jobInput
  applications?: ApplicationUpdateManyWithoutJobInput
  stages?: StageUpdateManyInput
  comments?: CommentUpdateManyInput
  location?: LocationUpdateOneInput
}

export interface CandidateCreateresumeInput {
  set?: String[] | String
}

export interface UserUpdateManyWithoutSubscriptions_jobsInput {
  create?: UserCreateWithoutSubscriptions_jobsInput[] | UserCreateWithoutSubscriptions_jobsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutSubscriptions_jobsInput[] | UserUpdateWithWhereUniqueWithoutSubscriptions_jobsInput
  upsert?: UserUpsertWithWhereUniqueWithoutSubscriptions_jobsInput[] | UserUpsertWithWhereUniqueWithoutSubscriptions_jobsInput
}

export interface CandidateCreatesourceInput {
  set?: String[] | String
}

export interface UserUpdateWithWhereUniqueWithoutSubscriptions_jobsInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutSubscriptions_jobsDataInput
}

export interface WorkspaceCreateWithoutCandidatesInput {
  name: String
  events?: EventCreateManyWithoutTarget_workspaceInput
  users?: UserCreateManyWithoutWorkspaceInput
  jobs?: JobCreateManyWithoutWorkspaceInput
  applications?: ApplicationCreateManyWithoutWorkspaceInput
  invites?: InviteCreateManyWithoutWorkspaceInput
  tags?: TagCreateManyInput
}

export interface UserUpdateWithoutSubscriptions_jobsDataInput {
  firstName?: String
  lastName?: String
  email?: String
  username?: String
  password?: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  workspace?: WorkspaceUpdateOneWithoutUsersInput
  events?: EventUpdateOneWithoutActor_userInput
  notifications?: NotificationUpdateManyWithoutUserInput
  subscriptions_candidates?: CandidateUpdateManyWithoutSubscribersInput
  subscriptions_tasks?: TaskUpdateManyWithoutSubscribersInput
  tasks?: TaskUpdateManyWithoutOwnersInput
}

export interface UserCreateWithoutWorkspaceInput {
  firstName?: String
  lastName?: String
  email: String
  username: String
  password: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  events?: EventCreateOneWithoutActor_userInput
  notifications?: NotificationCreateManyWithoutUserInput
  subscriptions_jobs?: JobCreateManyWithoutSubscribersInput
  subscriptions_candidates?: CandidateCreateManyWithoutSubscribersInput
  subscriptions_tasks?: TaskCreateManyWithoutSubscribersInput
  tasks?: TaskCreateManyWithoutOwnersInput
}

export interface WorkspaceUpdateOneWithoutUsersInput {
  create?: WorkspaceCreateWithoutUsersInput
  connect?: WorkspaceWhereUniqueInput
  delete?: Boolean
  update?: WorkspaceUpdateWithoutUsersDataInput
  upsert?: WorkspaceUpsertWithoutUsersInput
}

export interface NotificationCreateWithoutUserInput {
  event: EventCreateOneInput
}

export interface WorkspaceUpdateWithoutUsersDataInput {
  name?: String
  events?: EventUpdateManyWithoutTarget_workspaceInput
  jobs?: JobUpdateManyWithoutWorkspaceInput
  applications?: ApplicationUpdateManyWithoutWorkspaceInput
  candidates?: CandidateUpdateManyWithoutWorkspaceInput
  invites?: InviteUpdateManyWithoutWorkspaceInput
  tags?: TagUpdateManyInput
}

export interface EventCreateInput {
  type: EventType
  actor_type: EventActorType
  target_type: EventTargetType
  workspace: WorkspaceCreateOneInput
  actor_user?: UserCreateOneWithoutEventsInput
  actor_candidate?: CandidateCreateOneInput
  target_candidate?: CandidateCreateOneWithoutEventsInput
  target_job?: JobCreateOneWithoutEventsInput
  target_task?: TaskCreateOneInput
  target_workspace?: WorkspaceCreateOneWithoutEventsInput
}

export interface ApplicationUpdateManyWithoutWorkspaceInput {
  create?: ApplicationCreateWithoutWorkspaceInput[] | ApplicationCreateWithoutWorkspaceInput
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  disconnect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  delete?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  update?: ApplicationUpdateWithWhereUniqueWithoutWorkspaceInput[] | ApplicationUpdateWithWhereUniqueWithoutWorkspaceInput
  upsert?: ApplicationUpsertWithWhereUniqueWithoutWorkspaceInput[] | ApplicationUpsertWithWhereUniqueWithoutWorkspaceInput
}

export interface CandidateCreateWithoutEventsInput {
  firstName: String
  lastName: String
  emails?: CandidateCreateemailsInput
  phones?: CandidateCreatephonesInput
  links?: CandidateCreatelinksInput
  resume?: CandidateCreateresumeInput
  coverLetter?: CandidateCreatecoverLetterInput
  source?: CandidateCreatesourceInput
  workspace: WorkspaceCreateOneWithoutCandidatesInput
  subscribers?: UserCreateManyWithoutSubscriptions_candidatesInput
  tags?: TagCreateManyInput
  fields?: FieldCreateManyInput
  tasks?: TaskCreateManyWithoutTarget_candidateInput
  applications?: ApplicationCreateManyWithoutCandidateInput
  comments?: CommentCreateManyInput
}

export interface ApplicationUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: ApplicationWhereUniqueInput
  data: ApplicationUpdateWithoutWorkspaceDataInput
}

export interface UserCreateWithoutSubscriptions_candidatesInput {
  firstName?: String
  lastName?: String
  email: String
  username: String
  password: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  workspace: WorkspaceCreateOneWithoutUsersInput
  events?: EventCreateOneWithoutActor_userInput
  notifications?: NotificationCreateManyWithoutUserInput
  subscriptions_jobs?: JobCreateManyWithoutSubscribersInput
  subscriptions_tasks?: TaskCreateManyWithoutSubscribersInput
  tasks?: TaskCreateManyWithoutOwnersInput
}

export interface ApplicationUpdateWithoutWorkspaceDataInput {
  disqualifyReason?: String
  job?: JobUpdateOneWithoutApplicationsInput
  candidate?: CandidateUpdateOneWithoutApplicationsInput
  stage?: StageUpdateOneInput
}

export interface JobCreateWithoutSubscribersInput {
  status: JobType
  title: String
  department?: String
  description?: String
  requirements?: String
  workspace: WorkspaceCreateOneWithoutJobsInput
  events?: EventCreateManyWithoutTarget_jobInput
  applications?: ApplicationCreateManyWithoutJobInput
  stages?: StageCreateManyInput
  comments?: CommentCreateManyInput
  location?: LocationCreateOneInput
}

export interface JobUpdateOneWithoutApplicationsInput {
  create?: JobCreateWithoutApplicationsInput
  connect?: JobWhereUniqueInput
  delete?: Boolean
  update?: JobUpdateWithoutApplicationsDataInput
  upsert?: JobUpsertWithoutApplicationsInput
}

export interface WorkspaceCreateWithoutJobsInput {
  name: String
  events?: EventCreateManyWithoutTarget_workspaceInput
  users?: UserCreateManyWithoutWorkspaceInput
  applications?: ApplicationCreateManyWithoutWorkspaceInput
  candidates?: CandidateCreateManyWithoutWorkspaceInput
  invites?: InviteCreateManyWithoutWorkspaceInput
  tags?: TagCreateManyInput
}

export interface JobUpdateWithoutApplicationsDataInput {
  status?: JobType
  title?: String
  department?: String
  description?: String
  requirements?: String
  workspace?: WorkspaceUpdateOneWithoutJobsInput
  subscribers?: UserUpdateManyWithoutSubscriptions_jobsInput
  events?: EventUpdateManyWithoutTarget_jobInput
  stages?: StageUpdateManyInput
  comments?: CommentUpdateManyInput
  location?: LocationUpdateOneInput
}

export interface ApplicationCreateWithoutWorkspaceInput {
  disqualifyReason?: String
  job: JobCreateOneWithoutApplicationsInput
  candidate: CandidateCreateOneWithoutApplicationsInput
  stage: StageCreateOneInput
}

export interface WorkspaceUpdateOneWithoutJobsInput {
  create?: WorkspaceCreateWithoutJobsInput
  connect?: WorkspaceWhereUniqueInput
  delete?: Boolean
  update?: WorkspaceUpdateWithoutJobsDataInput
  upsert?: WorkspaceUpsertWithoutJobsInput
}

export interface JobCreateWithoutApplicationsInput {
  status: JobType
  title: String
  department?: String
  description?: String
  requirements?: String
  workspace: WorkspaceCreateOneWithoutJobsInput
  subscribers?: UserCreateManyWithoutSubscriptions_jobsInput
  events?: EventCreateManyWithoutTarget_jobInput
  stages?: StageCreateManyInput
  comments?: CommentCreateManyInput
  location?: LocationCreateOneInput
}

export interface WorkspaceUpdateWithoutJobsDataInput {
  name?: String
  events?: EventUpdateManyWithoutTarget_workspaceInput
  users?: UserUpdateManyWithoutWorkspaceInput
  applications?: ApplicationUpdateManyWithoutWorkspaceInput
  candidates?: CandidateUpdateManyWithoutWorkspaceInput
  invites?: InviteUpdateManyWithoutWorkspaceInput
  tags?: TagUpdateManyInput
}

export interface EventCreateWithoutTarget_jobInput {
  type: EventType
  actor_type: EventActorType
  target_type: EventTargetType
  workspace: WorkspaceCreateOneInput
  actor_user?: UserCreateOneWithoutEventsInput
  actor_candidate?: CandidateCreateOneInput
  target_candidate?: CandidateCreateOneWithoutEventsInput
  target_task?: TaskCreateOneInput
  target_workspace?: WorkspaceCreateOneWithoutEventsInput
}

export interface CandidateUpdateManyWithoutWorkspaceInput {
  create?: CandidateCreateWithoutWorkspaceInput[] | CandidateCreateWithoutWorkspaceInput
  connect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
  disconnect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
  delete?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
  update?: CandidateUpdateWithWhereUniqueWithoutWorkspaceInput[] | CandidateUpdateWithWhereUniqueWithoutWorkspaceInput
  upsert?: CandidateUpsertWithWhereUniqueWithoutWorkspaceInput[] | CandidateUpsertWithWhereUniqueWithoutWorkspaceInput
}

export interface TaskCreateInput {
  target_type?: TaskTarget
  title?: String
  description?: String
  dueAt?: DateTime
  subscribers?: UserCreateManyWithoutSubscriptions_tasksInput
  owners?: UserCreateManyWithoutTasksInput
  target_job?: JobCreateOneInput
  target_candidate?: CandidateCreateOneWithoutTasksInput
}

export interface CandidateUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: CandidateWhereUniqueInput
  data: CandidateUpdateWithoutWorkspaceDataInput
}

export interface UserCreateWithoutSubscriptions_tasksInput {
  firstName?: String
  lastName?: String
  email: String
  username: String
  password: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  workspace: WorkspaceCreateOneWithoutUsersInput
  events?: EventCreateOneWithoutActor_userInput
  notifications?: NotificationCreateManyWithoutUserInput
  subscriptions_jobs?: JobCreateManyWithoutSubscribersInput
  subscriptions_candidates?: CandidateCreateManyWithoutSubscribersInput
  tasks?: TaskCreateManyWithoutOwnersInput
}

export interface CandidateUpdateWithoutWorkspaceDataInput {
  firstName?: String
  lastName?: String
  emails?: CandidateUpdateemailsInput
  phones?: CandidateUpdatephonesInput
  links?: CandidateUpdatelinksInput
  resume?: CandidateUpdateresumeInput
  coverLetter?: CandidateUpdatecoverLetterInput
  source?: CandidateUpdatesourceInput
  events?: EventUpdateManyWithoutTarget_candidateInput
  subscribers?: UserUpdateManyWithoutSubscriptions_candidatesInput
  tags?: TagUpdateManyInput
  fields?: FieldUpdateManyInput
  tasks?: TaskUpdateManyWithoutTarget_candidateInput
  applications?: ApplicationUpdateManyWithoutCandidateInput
  comments?: CommentUpdateManyInput
}

export interface CandidateCreateWithoutSubscribersInput {
  firstName: String
  lastName: String
  emails?: CandidateCreateemailsInput
  phones?: CandidateCreatephonesInput
  links?: CandidateCreatelinksInput
  resume?: CandidateCreateresumeInput
  coverLetter?: CandidateCreatecoverLetterInput
  source?: CandidateCreatesourceInput
  workspace: WorkspaceCreateOneWithoutCandidatesInput
  events?: EventCreateManyWithoutTarget_candidateInput
  tags?: TagCreateManyInput
  fields?: FieldCreateManyInput
  tasks?: TaskCreateManyWithoutTarget_candidateInput
  applications?: ApplicationCreateManyWithoutCandidateInput
  comments?: CommentCreateManyInput
}

export interface EventUpdateManyWithoutTarget_candidateInput {
  create?: EventCreateWithoutTarget_candidateInput[] | EventCreateWithoutTarget_candidateInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  disconnect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  delete?: EventWhereUniqueInput[] | EventWhereUniqueInput
  update?: EventUpdateWithWhereUniqueWithoutTarget_candidateInput[] | EventUpdateWithWhereUniqueWithoutTarget_candidateInput
  upsert?: EventUpsertWithWhereUniqueWithoutTarget_candidateInput[] | EventUpsertWithWhereUniqueWithoutTarget_candidateInput
}

export interface EventCreateWithoutTarget_candidateInput {
  type: EventType
  actor_type: EventActorType
  target_type: EventTargetType
  workspace: WorkspaceCreateOneInput
  actor_user?: UserCreateOneWithoutEventsInput
  actor_candidate?: CandidateCreateOneInput
  target_job?: JobCreateOneWithoutEventsInput
  target_task?: TaskCreateOneInput
  target_workspace?: WorkspaceCreateOneWithoutEventsInput
}

export interface EventUpdateWithWhereUniqueWithoutTarget_candidateInput {
  where: EventWhereUniqueInput
  data: EventUpdateWithoutTarget_candidateDataInput
}

export interface JobCreateWithoutEventsInput {
  status: JobType
  title: String
  department?: String
  description?: String
  requirements?: String
  workspace: WorkspaceCreateOneWithoutJobsInput
  subscribers?: UserCreateManyWithoutSubscriptions_jobsInput
  applications?: ApplicationCreateManyWithoutJobInput
  stages?: StageCreateManyInput
  comments?: CommentCreateManyInput
  location?: LocationCreateOneInput
}

export interface EventUpdateWithoutTarget_candidateDataInput {
  type?: EventType
  actor_type?: EventActorType
  target_type?: EventTargetType
  workspace?: WorkspaceUpdateOneInput
  actor_user?: UserUpdateOneWithoutEventsInput
  actor_candidate?: CandidateUpdateOneInput
  target_job?: JobUpdateOneWithoutEventsInput
  target_task?: TaskUpdateOneInput
  target_workspace?: WorkspaceUpdateOneWithoutEventsInput
}

export interface ApplicationCreateWithoutJobInput {
  disqualifyReason?: String
  workspace: WorkspaceCreateOneWithoutApplicationsInput
  candidate: CandidateCreateOneWithoutApplicationsInput
  stage: StageCreateOneInput
}

export interface UserUpdateOneWithoutEventsInput {
  create?: UserCreateWithoutEventsInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutEventsDataInput
  upsert?: UserUpsertWithoutEventsInput
}

export interface CandidateCreateWithoutApplicationsInput {
  firstName: String
  lastName: String
  emails?: CandidateCreateemailsInput
  phones?: CandidateCreatephonesInput
  links?: CandidateCreatelinksInput
  resume?: CandidateCreateresumeInput
  coverLetter?: CandidateCreatecoverLetterInput
  source?: CandidateCreatesourceInput
  workspace: WorkspaceCreateOneWithoutCandidatesInput
  events?: EventCreateManyWithoutTarget_candidateInput
  subscribers?: UserCreateManyWithoutSubscriptions_candidatesInput
  tags?: TagCreateManyInput
  fields?: FieldCreateManyInput
  tasks?: TaskCreateManyWithoutTarget_candidateInput
  comments?: CommentCreateManyInput
}

export interface UserUpdateWithoutEventsDataInput {
  firstName?: String
  lastName?: String
  email?: String
  username?: String
  password?: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  workspace?: WorkspaceUpdateOneWithoutUsersInput
  notifications?: NotificationUpdateManyWithoutUserInput
  subscriptions_jobs?: JobUpdateManyWithoutSubscribersInput
  subscriptions_candidates?: CandidateUpdateManyWithoutSubscribersInput
  subscriptions_tasks?: TaskUpdateManyWithoutSubscribersInput
  tasks?: TaskUpdateManyWithoutOwnersInput
}

export interface TagCreateInput {
  label: String
}

export interface NotificationUpdateManyWithoutUserInput {
  create?: NotificationCreateWithoutUserInput[] | NotificationCreateWithoutUserInput
  connect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  disconnect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  delete?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  update?: NotificationUpdateWithWhereUniqueWithoutUserInput[] | NotificationUpdateWithWhereUniqueWithoutUserInput
  upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput[] | NotificationUpsertWithWhereUniqueWithoutUserInput
}

export interface FieldCreateInput {
  type?: FieldType
  label: String
  value: String
}

export interface NotificationUpdateWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput
  data: NotificationUpdateWithoutUserDataInput
}

export interface TaskCreateWithoutTarget_candidateInput {
  target_type?: TaskTarget
  title?: String
  description?: String
  dueAt?: DateTime
  workspace: WorkspaceCreateOneInput
  subscribers?: UserCreateManyWithoutSubscriptions_tasksInput
  owners?: UserCreateManyWithoutTasksInput
  target_job?: JobCreateOneInput
}

export interface NotificationUpdateWithoutUserDataInput {
  event?: EventUpdateOneInput
}

export interface UserCreateWithoutTasksInput {
  firstName?: String
  lastName?: String
  email: String
  username: String
  password: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  workspace: WorkspaceCreateOneWithoutUsersInput
  events?: EventCreateOneWithoutActor_userInput
  notifications?: NotificationCreateManyWithoutUserInput
  subscriptions_jobs?: JobCreateManyWithoutSubscribersInput
  subscriptions_candidates?: CandidateCreateManyWithoutSubscribersInput
  subscriptions_tasks?: TaskCreateManyWithoutSubscribersInput
}

export interface EventUpdateOneInput {
  create?: EventCreateInput
  connect?: EventWhereUniqueInput
  delete?: Boolean
  update?: EventUpdateDataInput
  upsert?: EventUpsertNestedInput
}

export interface TaskCreateWithoutSubscribersInput {
  target_type?: TaskTarget
  title?: String
  description?: String
  dueAt?: DateTime
  workspace: WorkspaceCreateOneInput
  owners?: UserCreateManyWithoutTasksInput
  target_job?: JobCreateOneInput
  target_candidate?: CandidateCreateOneWithoutTasksInput
}

export interface EventUpdateDataInput {
  type?: EventType
  actor_type?: EventActorType
  target_type?: EventTargetType
  workspace?: WorkspaceUpdateOneInput
  actor_user?: UserUpdateOneWithoutEventsInput
  actor_candidate?: CandidateUpdateOneInput
  target_candidate?: CandidateUpdateOneWithoutEventsInput
  target_job?: JobUpdateOneWithoutEventsInput
  target_task?: TaskUpdateOneInput
  target_workspace?: WorkspaceUpdateOneWithoutEventsInput
}

export interface JobCreateInput {
  status: JobType
  title: String
  department?: String
  description?: String
  requirements?: String
  workspace: WorkspaceCreateOneWithoutJobsInput
  subscribers?: UserCreateManyWithoutSubscriptions_jobsInput
  events?: EventCreateManyWithoutTarget_jobInput
  applications?: ApplicationCreateManyWithoutJobInput
  stages?: StageCreateManyInput
  comments?: CommentCreateManyInput
  location?: LocationCreateOneInput
}

export interface CandidateUpdateOneWithoutEventsInput {
  create?: CandidateCreateWithoutEventsInput
  connect?: CandidateWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CandidateUpdateWithoutEventsDataInput
  upsert?: CandidateUpsertWithoutEventsInput
}

export interface UserConnect {
  connect?: UserWhereUniqueInput
}

export interface CandidateUpdateWithoutEventsDataInput {
  firstName?: String
  lastName?: String
  emails?: CandidateUpdateemailsInput
  phones?: CandidateUpdatephonesInput
  links?: CandidateUpdatelinksInput
  resume?: CandidateUpdateresumeInput
  coverLetter?: CandidateUpdatecoverLetterInput
  source?: CandidateUpdatesourceInput
  workspace?: WorkspaceUpdateOneWithoutCandidatesInput
  subscribers?: UserUpdateManyWithoutSubscriptions_candidatesInput
  tags?: TagUpdateManyInput
  fields?: FieldUpdateManyInput
  tasks?: TaskUpdateManyWithoutTarget_candidateInput
  applications?: ApplicationUpdateManyWithoutCandidateInput
  comments?: CommentUpdateManyInput
}

export interface CandidateConnect {
  connect?: CandidateWhereUniqueInput
}

export interface UserUpdateManyWithoutSubscriptions_candidatesInput {
  create?: UserCreateWithoutSubscriptions_candidatesInput[] | UserCreateWithoutSubscriptions_candidatesInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutSubscriptions_candidatesInput[] | UserUpdateWithWhereUniqueWithoutSubscriptions_candidatesInput
  upsert?: UserUpsertWithWhereUniqueWithoutSubscriptions_candidatesInput[] | UserUpsertWithWhereUniqueWithoutSubscriptions_candidatesInput
}

export interface CommentUpdateInput {
  content?: String
  createdBy?: UserUpdateOneInput
  parent?: CommentUpdateOneInput
}

export interface UserUpdateWithWhereUniqueWithoutSubscriptions_candidatesInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutSubscriptions_candidatesDataInput
}

export interface TagUpdateInput {
  label?: String
}

export interface UserUpdateWithoutSubscriptions_candidatesDataInput {
  firstName?: String
  lastName?: String
  email?: String
  username?: String
  password?: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  workspace?: WorkspaceUpdateOneWithoutUsersInput
  events?: EventUpdateOneWithoutActor_userInput
  notifications?: NotificationUpdateManyWithoutUserInput
  subscriptions_jobs?: JobUpdateManyWithoutSubscribersInput
  subscriptions_tasks?: TaskUpdateManyWithoutSubscribersInput
  tasks?: TaskUpdateManyWithoutOwnersInput
}

export interface JobUpdateInput {
  status?: JobType
  title?: String
  department?: String
  description?: String
  requirements?: String
  workspace?: WorkspaceUpdateOneWithoutJobsInput
  subscribers?: UserUpdateManyWithoutSubscriptions_jobsInput
  events?: EventUpdateManyWithoutTarget_jobInput
  applications?: ApplicationUpdateManyWithoutJobInput
  stages?: StageUpdateManyInput
  comments?: CommentUpdateManyInput
  location?: LocationUpdateOneInput
}

export interface JobUpdateManyWithoutSubscribersInput {
  create?: JobCreateWithoutSubscribersInput[] | JobCreateWithoutSubscribersInput
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput
  disconnect?: JobWhereUniqueInput[] | JobWhereUniqueInput
  delete?: JobWhereUniqueInput[] | JobWhereUniqueInput
  update?: JobUpdateWithWhereUniqueWithoutSubscribersInput[] | JobUpdateWithWhereUniqueWithoutSubscribersInput
  upsert?: JobUpsertWithWhereUniqueWithoutSubscribersInput[] | JobUpsertWithWhereUniqueWithoutSubscribersInput
}

export interface EventUpdateInput {
  type?: EventType
  actor_type?: EventActorType
  target_type?: EventTargetType
  workspace?: WorkspaceUpdateOneInput
  actor_user?: UserUpdateOneWithoutEventsInput
  actor_candidate?: CandidateUpdateOneInput
  target_candidate?: CandidateUpdateOneWithoutEventsInput
  target_job?: JobUpdateOneWithoutEventsInput
  target_task?: TaskUpdateOneInput
  target_workspace?: WorkspaceUpdateOneWithoutEventsInput
}

export interface JobUpdateWithWhereUniqueWithoutSubscribersInput {
  where: JobWhereUniqueInput
  data: JobUpdateWithoutSubscribersDataInput
}

export interface CandidateWhereUniqueInput {
  id?: ID_Input
}

export interface JobUpdateWithoutSubscribersDataInput {
  status?: JobType
  title?: String
  department?: String
  description?: String
  requirements?: String
  workspace?: WorkspaceUpdateOneWithoutJobsInput
  events?: EventUpdateManyWithoutTarget_jobInput
  applications?: ApplicationUpdateManyWithoutJobInput
  stages?: StageUpdateManyInput
  comments?: CommentUpdateManyInput
  location?: LocationUpdateOneInput
}

export interface StageWhereUniqueInput {
  id?: ID_Input
}

export interface EventUpdateManyWithoutTarget_jobInput {
  create?: EventCreateWithoutTarget_jobInput[] | EventCreateWithoutTarget_jobInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  disconnect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  delete?: EventWhereUniqueInput[] | EventWhereUniqueInput
  update?: EventUpdateWithWhereUniqueWithoutTarget_jobInput[] | EventUpdateWithWhereUniqueWithoutTarget_jobInput
  upsert?: EventUpsertWithWhereUniqueWithoutTarget_jobInput[] | EventUpsertWithWhereUniqueWithoutTarget_jobInput
}

export interface TagWhereUniqueInput {
  id?: ID_Input
}

export interface EventUpdateWithWhereUniqueWithoutTarget_jobInput {
  where: EventWhereUniqueInput
  data: EventUpdateWithoutTarget_jobDataInput
}

export interface WorkspaceUpdateWithoutInvitesDataInput {
  name?: String
  events?: EventUpdateManyWithoutTarget_workspaceInput
  users?: UserUpdateManyWithoutWorkspaceInput
  jobs?: JobUpdateManyWithoutWorkspaceInput
  applications?: ApplicationUpdateManyWithoutWorkspaceInput
  candidates?: CandidateUpdateManyWithoutWorkspaceInput
  tags?: TagUpdateManyInput
}

export interface EventUpdateWithoutTarget_jobDataInput {
  type?: EventType
  actor_type?: EventActorType
  target_type?: EventTargetType
  workspace?: WorkspaceUpdateOneInput
  actor_user?: UserUpdateOneWithoutEventsInput
  actor_candidate?: CandidateUpdateOneInput
  target_candidate?: CandidateUpdateOneWithoutEventsInput
  target_task?: TaskUpdateOneInput
  target_workspace?: WorkspaceUpdateOneWithoutEventsInput
}

export interface CandidateUpdateInput {
  firstName?: String
  lastName?: String
  emails?: CandidateUpdateemailsInput
  phones?: CandidateUpdatephonesInput
  links?: CandidateUpdatelinksInput
  resume?: CandidateUpdateresumeInput
  coverLetter?: CandidateUpdatecoverLetterInput
  source?: CandidateUpdatesourceInput
  workspace?: WorkspaceUpdateOneWithoutCandidatesInput
  events?: EventUpdateManyWithoutTarget_candidateInput
  subscribers?: UserUpdateManyWithoutSubscriptions_candidatesInput
  tags?: TagUpdateManyInput
  fields?: FieldUpdateManyInput
  tasks?: TaskUpdateManyWithoutTarget_candidateInput
  applications?: ApplicationUpdateManyWithoutCandidateInput
  comments?: CommentUpdateManyInput
}

export interface TaskUpdateOneInput {
  create?: TaskCreateInput
  connect?: TaskWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: TaskUpdateDataInput
  upsert?: TaskUpsertNestedInput
}

export interface UserUpdateOneWithoutNotificationsInput {
  create?: UserCreateWithoutNotificationsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutNotificationsDataInput
  upsert?: UserUpsertWithoutNotificationsInput
}

export interface TaskUpdateDataInput {
  target_type?: TaskTarget
  title?: String
  description?: String
  dueAt?: DateTime
  workspace?: WorkspaceUpdateOneInput
  subscribers?: UserUpdateManyWithoutSubscriptions_tasksInput
  owners?: UserUpdateManyWithoutTasksInput
  target_job?: JobUpdateOneInput
  target_candidate?: CandidateUpdateOneWithoutTasksInput
}

export interface WorkspaceUpsertNestedInput {
  update: WorkspaceUpdateDataInput
  create: WorkspaceCreateInput
}

export interface UserUpdateManyWithoutSubscriptions_tasksInput {
  create?: UserCreateWithoutSubscriptions_tasksInput[] | UserCreateWithoutSubscriptions_tasksInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutSubscriptions_tasksInput[] | UserUpdateWithWhereUniqueWithoutSubscriptions_tasksInput
  upsert?: UserUpsertWithWhereUniqueWithoutSubscriptions_tasksInput[] | UserUpsertWithWhereUniqueWithoutSubscriptions_tasksInput
}

export interface WorkspaceUpsertWithoutCandidatesInput {
  update: WorkspaceUpdateWithoutCandidatesDataInput
  create: WorkspaceCreateWithoutCandidatesInput
}

export interface UserUpdateWithWhereUniqueWithoutSubscriptions_tasksInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutSubscriptions_tasksDataInput
}

export interface ApplicationUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: ApplicationWhereUniqueInput
  update: ApplicationUpdateWithoutWorkspaceDataInput
  create: ApplicationCreateWithoutWorkspaceInput
}

export interface UserUpdateWithoutSubscriptions_tasksDataInput {
  firstName?: String
  lastName?: String
  email?: String
  username?: String
  password?: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  workspace?: WorkspaceUpdateOneWithoutUsersInput
  events?: EventUpdateOneWithoutActor_userInput
  notifications?: NotificationUpdateManyWithoutUserInput
  subscriptions_jobs?: JobUpdateManyWithoutSubscribersInput
  subscriptions_candidates?: CandidateUpdateManyWithoutSubscribersInput
  tasks?: TaskUpdateManyWithoutOwnersInput
}

export interface EventUpsertWithWhereUniqueWithoutTarget_candidateInput {
  where: EventWhereUniqueInput
  update: EventUpdateWithoutTarget_candidateDataInput
  create: EventCreateWithoutTarget_candidateInput
}

export interface CandidateUpdateManyWithoutSubscribersInput {
  create?: CandidateCreateWithoutSubscribersInput[] | CandidateCreateWithoutSubscribersInput
  connect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
  disconnect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
  delete?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
  update?: CandidateUpdateWithWhereUniqueWithoutSubscribersInput[] | CandidateUpdateWithWhereUniqueWithoutSubscribersInput
  upsert?: CandidateUpsertWithWhereUniqueWithoutSubscribersInput[] | CandidateUpsertWithWhereUniqueWithoutSubscribersInput
}

export interface JobUpsertWithoutEventsInput {
  update: JobUpdateWithoutEventsDataInput
  create: JobCreateWithoutEventsInput
}

export interface CandidateUpdateWithWhereUniqueWithoutSubscribersInput {
  where: CandidateWhereUniqueInput
  data: CandidateUpdateWithoutSubscribersDataInput
}

export interface UserUpsertWithWhereUniqueWithoutSubscriptions_candidatesInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutSubscriptions_candidatesDataInput
  create: UserCreateWithoutSubscriptions_candidatesInput
}

export interface CandidateUpdateWithoutSubscribersDataInput {
  firstName?: String
  lastName?: String
  emails?: CandidateUpdateemailsInput
  phones?: CandidateUpdatephonesInput
  links?: CandidateUpdatelinksInput
  resume?: CandidateUpdateresumeInput
  coverLetter?: CandidateUpdatecoverLetterInput
  source?: CandidateUpdatesourceInput
  workspace?: WorkspaceUpdateOneWithoutCandidatesInput
  events?: EventUpdateManyWithoutTarget_candidateInput
  tags?: TagUpdateManyInput
  fields?: FieldUpdateManyInput
  tasks?: TaskUpdateManyWithoutTarget_candidateInput
  applications?: ApplicationUpdateManyWithoutCandidateInput
  comments?: CommentUpdateManyInput
}

export interface InviteUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: InviteWhereUniqueInput
  update: InviteUpdateWithoutWorkspaceDataInput
  create: InviteCreateWithoutWorkspaceInput
}

export interface TagUpdateManyInput {
  create?: TagCreateInput[] | TagCreateInput
  connect?: TagWhereUniqueInput[] | TagWhereUniqueInput
  disconnect?: TagWhereUniqueInput[] | TagWhereUniqueInput
  delete?: TagWhereUniqueInput[] | TagWhereUniqueInput
  update?: TagUpdateWithWhereUniqueNestedInput[] | TagUpdateWithWhereUniqueNestedInput
  upsert?: TagUpsertWithWhereUniqueNestedInput[] | TagUpsertWithWhereUniqueNestedInput
}

export interface WorkspaceUpdateWithoutEventsDataInput {
  name?: String
  users?: UserUpdateManyWithoutWorkspaceInput
  jobs?: JobUpdateManyWithoutWorkspaceInput
  applications?: ApplicationUpdateManyWithoutWorkspaceInput
  candidates?: CandidateUpdateManyWithoutWorkspaceInput
  invites?: InviteUpdateManyWithoutWorkspaceInput
  tags?: TagUpdateManyInput
}

export interface TagUpdateWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput
  data: TagUpdateDataInput
}

export interface WorkspaceCreateOneWithoutApplicationsInput {
  create?: WorkspaceCreateWithoutApplicationsInput
  connect?: WorkspaceWhereUniqueInput
}

export interface TagUpdateDataInput {
  label?: String
}

export interface WorkspaceCreateOneInput {
  create?: WorkspaceCreateInput
  connect?: WorkspaceWhereUniqueInput
}

export interface TagUpsertWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput
  update: TagUpdateDataInput
  create: TagCreateInput
}

export interface WorkspaceCreateOneWithoutUsersInput {
  create?: WorkspaceCreateWithoutUsersInput
  connect?: WorkspaceWhereUniqueInput
}

export interface FieldUpdateManyInput {
  create?: FieldCreateInput[] | FieldCreateInput
  connect?: FieldWhereUniqueInput[] | FieldWhereUniqueInput
  disconnect?: FieldWhereUniqueInput[] | FieldWhereUniqueInput
  delete?: FieldWhereUniqueInput[] | FieldWhereUniqueInput
  update?: FieldUpdateWithWhereUniqueNestedInput[] | FieldUpdateWithWhereUniqueNestedInput
  upsert?: FieldUpsertWithWhereUniqueNestedInput[] | FieldUpsertWithWhereUniqueNestedInput
}

export interface UserCreateManyWithoutSubscriptions_jobsInput {
  create?: UserCreateWithoutSubscriptions_jobsInput[] | UserCreateWithoutSubscriptions_jobsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface FieldUpdateWithWhereUniqueNestedInput {
  where: FieldWhereUniqueInput
  data: FieldUpdateDataInput
}

export interface CandidateCreateOneInput {
  create?: CandidateCreateInput
  connect?: CandidateWhereUniqueInput
}

export interface FieldUpdateDataInput {
  type?: FieldType
  label?: String
  value?: String
}

export interface CandidateCreatelinksInput {
  set?: String[] | String
}

export interface FieldUpsertWithWhereUniqueNestedInput {
  where: FieldWhereUniqueInput
  update: FieldUpdateDataInput
  create: FieldCreateInput
}

export interface WorkspaceCreateOneWithoutCandidatesInput {
  create?: WorkspaceCreateWithoutCandidatesInput
  connect?: WorkspaceWhereUniqueInput
}

export interface TaskUpdateManyWithoutTarget_candidateInput {
  create?: TaskCreateWithoutTarget_candidateInput[] | TaskCreateWithoutTarget_candidateInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  disconnect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  delete?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  update?: TaskUpdateWithWhereUniqueWithoutTarget_candidateInput[] | TaskUpdateWithWhereUniqueWithoutTarget_candidateInput
  upsert?: TaskUpsertWithWhereUniqueWithoutTarget_candidateInput[] | TaskUpsertWithWhereUniqueWithoutTarget_candidateInput
}

export interface NotificationCreateManyWithoutUserInput {
  create?: NotificationCreateWithoutUserInput[] | NotificationCreateWithoutUserInput
  connect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
}

export interface TaskUpdateWithWhereUniqueWithoutTarget_candidateInput {
  where: TaskWhereUniqueInput
  data: TaskUpdateWithoutTarget_candidateDataInput
}

export interface CandidateCreateOneWithoutEventsInput {
  create?: CandidateCreateWithoutEventsInput
  connect?: CandidateWhereUniqueInput
}

export interface TaskUpdateWithoutTarget_candidateDataInput {
  target_type?: TaskTarget
  title?: String
  description?: String
  dueAt?: DateTime
  workspace?: WorkspaceUpdateOneInput
  subscribers?: UserUpdateManyWithoutSubscriptions_tasksInput
  owners?: UserUpdateManyWithoutTasksInput
  target_job?: JobUpdateOneInput
}

export interface JobCreateManyWithoutSubscribersInput {
  create?: JobCreateWithoutSubscribersInput[] | JobCreateWithoutSubscribersInput
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput
}

export interface UserUpdateManyWithoutTasksInput {
  create?: UserCreateWithoutTasksInput[] | UserCreateWithoutTasksInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutTasksInput[] | UserUpdateWithWhereUniqueWithoutTasksInput
  upsert?: UserUpsertWithWhereUniqueWithoutTasksInput[] | UserUpsertWithWhereUniqueWithoutTasksInput
}

export interface ApplicationCreateManyWithoutWorkspaceInput {
  create?: ApplicationCreateWithoutWorkspaceInput[] | ApplicationCreateWithoutWorkspaceInput
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
}

export interface UserUpdateWithWhereUniqueWithoutTasksInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutTasksDataInput
}

export interface EventCreateManyWithoutTarget_jobInput {
  create?: EventCreateWithoutTarget_jobInput[] | EventCreateWithoutTarget_jobInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
}

export interface UserUpdateWithoutTasksDataInput {
  firstName?: String
  lastName?: String
  email?: String
  username?: String
  password?: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  workspace?: WorkspaceUpdateOneWithoutUsersInput
  events?: EventUpdateOneWithoutActor_userInput
  notifications?: NotificationUpdateManyWithoutUserInput
  subscriptions_jobs?: JobUpdateManyWithoutSubscribersInput
  subscriptions_candidates?: CandidateUpdateManyWithoutSubscribersInput
  subscriptions_tasks?: TaskUpdateManyWithoutSubscribersInput
}

export interface UserCreateManyWithoutSubscriptions_tasksInput {
  create?: UserCreateWithoutSubscriptions_tasksInput[] | UserCreateWithoutSubscriptions_tasksInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface TaskUpdateManyWithoutSubscribersInput {
  create?: TaskCreateWithoutSubscribersInput[] | TaskCreateWithoutSubscribersInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  disconnect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  delete?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  update?: TaskUpdateWithWhereUniqueWithoutSubscribersInput[] | TaskUpdateWithWhereUniqueWithoutSubscribersInput
  upsert?: TaskUpsertWithWhereUniqueWithoutSubscribersInput[] | TaskUpsertWithWhereUniqueWithoutSubscribersInput
}

export interface EventCreateManyWithoutTarget_candidateInput {
  create?: EventCreateWithoutTarget_candidateInput[] | EventCreateWithoutTarget_candidateInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
}

export interface TaskUpdateWithWhereUniqueWithoutSubscribersInput {
  where: TaskWhereUniqueInput
  data: TaskUpdateWithoutSubscribersDataInput
}

export interface ApplicationCreateManyWithoutJobInput {
  create?: ApplicationCreateWithoutJobInput[] | ApplicationCreateWithoutJobInput
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
}

export interface TaskUpdateWithoutSubscribersDataInput {
  target_type?: TaskTarget
  title?: String
  description?: String
  dueAt?: DateTime
  workspace?: WorkspaceUpdateOneInput
  owners?: UserUpdateManyWithoutTasksInput
  target_job?: JobUpdateOneInput
  target_candidate?: CandidateUpdateOneWithoutTasksInput
}

export interface TagCreateManyInput {
  create?: TagCreateInput[] | TagCreateInput
  connect?: TagWhereUniqueInput[] | TagWhereUniqueInput
}

export interface JobUpdateOneInput {
  create?: JobCreateInput
  connect?: JobWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: JobUpdateDataInput
  upsert?: JobUpsertNestedInput
}

export interface TaskCreateManyWithoutTarget_candidateInput {
  create?: TaskCreateWithoutTarget_candidateInput[] | TaskCreateWithoutTarget_candidateInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
}

export interface JobUpdateDataInput {
  status?: JobType
  title?: String
  department?: String
  description?: String
  requirements?: String
  workspace?: WorkspaceUpdateOneWithoutJobsInput
  subscribers?: UserUpdateManyWithoutSubscriptions_jobsInput
  events?: EventUpdateManyWithoutTarget_jobInput
  applications?: ApplicationUpdateManyWithoutJobInput
  stages?: StageUpdateManyInput
  comments?: CommentUpdateManyInput
  location?: LocationUpdateOneInput
}

export interface TaskCreateManyWithoutSubscribersInput {
  create?: TaskCreateWithoutSubscribersInput[] | TaskCreateWithoutSubscribersInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
}

export interface ApplicationUpdateManyWithoutJobInput {
  create?: ApplicationCreateWithoutJobInput[] | ApplicationCreateWithoutJobInput
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  disconnect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  delete?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  update?: ApplicationUpdateWithWhereUniqueWithoutJobInput[] | ApplicationUpdateWithWhereUniqueWithoutJobInput
  upsert?: ApplicationUpsertWithWhereUniqueWithoutJobInput[] | ApplicationUpsertWithWhereUniqueWithoutJobInput
}

export interface StageCreateManyInput {
  create?: StageCreateInput[] | StageCreateInput
  connect?: StageWhereUniqueInput[] | StageWhereUniqueInput
}

export interface ApplicationUpdateWithWhereUniqueWithoutJobInput {
  where: ApplicationWhereUniqueInput
  data: ApplicationUpdateWithoutJobDataInput
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
  position?: Int
  position_not?: Int
  position_in?: Int[] | Int
  position_not_in?: Int[] | Int
  position_lt?: Int
  position_lte?: Int
  position_gt?: Int
  position_gte?: Int
  type?: StageType
  type_not?: StageType
  type_in?: StageType[] | StageType
  type_not_in?: StageType[] | StageType
}

export interface ApplicationUpdateWithoutJobDataInput {
  disqualifyReason?: String
  workspace?: WorkspaceUpdateOneWithoutApplicationsInput
  candidate?: CandidateUpdateOneWithoutApplicationsInput
  stage?: StageUpdateOneInput
}

export interface TaskUpdateInput {
  target_type?: TaskTarget
  title?: String
  description?: String
  dueAt?: DateTime
  workspace?: WorkspaceUpdateOneInput
  subscribers?: UserUpdateManyWithoutSubscriptions_tasksInput
  owners?: UserUpdateManyWithoutTasksInput
  target_job?: JobUpdateOneInput
  target_candidate?: CandidateUpdateOneWithoutTasksInput
}

export interface CandidateUpdateOneWithoutApplicationsInput {
  create?: CandidateCreateWithoutApplicationsInput
  connect?: CandidateWhereUniqueInput
  delete?: Boolean
  update?: CandidateUpdateWithoutApplicationsDataInput
  upsert?: CandidateUpsertWithoutApplicationsInput
}

export interface NotificationWhereUniqueInput {
  id?: ID_Input
}

export interface CandidateUpdateWithoutApplicationsDataInput {
  firstName?: String
  lastName?: String
  emails?: CandidateUpdateemailsInput
  phones?: CandidateUpdatephonesInput
  links?: CandidateUpdatelinksInput
  resume?: CandidateUpdateresumeInput
  coverLetter?: CandidateUpdatecoverLetterInput
  source?: CandidateUpdatesourceInput
  workspace?: WorkspaceUpdateOneWithoutCandidatesInput
  events?: EventUpdateManyWithoutTarget_candidateInput
  subscribers?: UserUpdateManyWithoutSubscriptions_candidatesInput
  tags?: TagUpdateManyInput
  fields?: FieldUpdateManyInput
  tasks?: TaskUpdateManyWithoutTarget_candidateInput
  comments?: CommentUpdateManyInput
}

export interface JobWhereUniqueInput {
  id?: ID_Input
}

export interface CommentUpdateManyInput {
  create?: CommentCreateInput[] | CommentCreateInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  disconnect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  delete?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  update?: CommentUpdateWithWhereUniqueNestedInput[] | CommentUpdateWithWhereUniqueNestedInput
  upsert?: CommentUpsertWithWhereUniqueNestedInput[] | CommentUpsertWithWhereUniqueNestedInput
}

export interface InviteUpdateInput {
  email?: String
  expireAt?: DateTime
  workspace?: WorkspaceUpdateOneWithoutInvitesInput
  invitedBy?: UserUpdateOneInput
}

export interface CommentUpdateWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput
  data: CommentUpdateDataInput
}

export interface WorkspaceUpsertWithoutApplicationsInput {
  update: WorkspaceUpdateWithoutApplicationsDataInput
  create: WorkspaceCreateWithoutApplicationsInput
}

export interface CommentUpdateDataInput {
  content?: String
  createdBy?: UserUpdateOneInput
  parent?: CommentUpdateOneInput
}

export interface UserUpsertWithWhereUniqueWithoutSubscriptions_jobsInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutSubscriptions_jobsDataInput
  create: UserCreateWithoutSubscriptions_jobsInput
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface NotificationUpsertWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput
  update: NotificationUpdateWithoutUserDataInput
  create: NotificationCreateWithoutUserInput
}

export interface UserUpdateDataInput {
  firstName?: String
  lastName?: String
  email?: String
  username?: String
  password?: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  workspace?: WorkspaceUpdateOneWithoutUsersInput
  events?: EventUpdateOneWithoutActor_userInput
  notifications?: NotificationUpdateManyWithoutUserInput
  subscriptions_jobs?: JobUpdateManyWithoutSubscribersInput
  subscriptions_candidates?: CandidateUpdateManyWithoutSubscribersInput
  subscriptions_tasks?: TaskUpdateManyWithoutSubscribersInput
  tasks?: TaskUpdateManyWithoutOwnersInput
}

export interface EventUpsertWithWhereUniqueWithoutTarget_jobInput {
  where: EventWhereUniqueInput
  update: EventUpdateWithoutTarget_jobDataInput
  create: EventCreateWithoutTarget_jobInput
}

export interface TaskUpdateManyWithoutOwnersInput {
  create?: TaskCreateWithoutOwnersInput[] | TaskCreateWithoutOwnersInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  disconnect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  delete?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  update?: TaskUpdateWithWhereUniqueWithoutOwnersInput[] | TaskUpdateWithWhereUniqueWithoutOwnersInput
  upsert?: TaskUpsertWithWhereUniqueWithoutOwnersInput[] | TaskUpsertWithWhereUniqueWithoutOwnersInput
}

export interface TaskUpsertNestedInput {
  update: TaskUpdateDataInput
  create: TaskCreateInput
}

export interface TaskUpdateWithWhereUniqueWithoutOwnersInput {
  where: TaskWhereUniqueInput
  data: TaskUpdateWithoutOwnersDataInput
}

export interface UserCreateOneWithoutEventsInput {
  create?: UserCreateWithoutEventsInput
  connect?: UserWhereUniqueInput
}

export interface TaskUpdateWithoutOwnersDataInput {
  target_type?: TaskTarget
  title?: String
  description?: String
  dueAt?: DateTime
  workspace?: WorkspaceUpdateOneInput
  subscribers?: UserUpdateManyWithoutSubscriptions_tasksInput
  target_job?: JobUpdateOneInput
  target_candidate?: CandidateUpdateOneWithoutTasksInput
}

export interface EventCreateOneWithoutActor_userInput {
  create?: EventCreateWithoutActor_userInput
  connect?: EventWhereUniqueInput
}

export interface CandidateUpdateOneWithoutTasksInput {
  create?: CandidateCreateWithoutTasksInput
  connect?: CandidateWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CandidateUpdateWithoutTasksDataInput
  upsert?: CandidateUpsertWithoutTasksInput
}

export interface CandidateCreatecoverLetterInput {
  set?: String[] | String
}

export interface CandidateUpdateWithoutTasksDataInput {
  firstName?: String
  lastName?: String
  emails?: CandidateUpdateemailsInput
  phones?: CandidateUpdatephonesInput
  links?: CandidateUpdatelinksInput
  resume?: CandidateUpdateresumeInput
  coverLetter?: CandidateUpdatecoverLetterInput
  source?: CandidateUpdatesourceInput
  workspace?: WorkspaceUpdateOneWithoutCandidatesInput
  events?: EventUpdateManyWithoutTarget_candidateInput
  subscribers?: UserUpdateManyWithoutSubscriptions_candidatesInput
  tags?: TagUpdateManyInput
  fields?: FieldUpdateManyInput
  applications?: ApplicationUpdateManyWithoutCandidateInput
  comments?: CommentUpdateManyInput
}

export interface EventCreateOneInput {
  create?: EventCreateInput
  connect?: EventWhereUniqueInput
}

export interface ApplicationUpdateManyWithoutCandidateInput {
  create?: ApplicationCreateWithoutCandidateInput[] | ApplicationCreateWithoutCandidateInput
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  disconnect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  delete?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  update?: ApplicationUpdateWithWhereUniqueWithoutCandidateInput[] | ApplicationUpdateWithWhereUniqueWithoutCandidateInput
  upsert?: ApplicationUpsertWithWhereUniqueWithoutCandidateInput[] | ApplicationUpsertWithWhereUniqueWithoutCandidateInput
}

export interface WorkspaceCreateOneWithoutJobsInput {
  create?: WorkspaceCreateWithoutJobsInput
  connect?: WorkspaceWhereUniqueInput
}

export interface ApplicationUpdateWithWhereUniqueWithoutCandidateInput {
  where: ApplicationWhereUniqueInput
  data: ApplicationUpdateWithoutCandidateDataInput
}

export interface TaskCreateOneInput {
  create?: TaskCreateInput
  connect?: TaskWhereUniqueInput
}

export interface ApplicationUpdateWithoutCandidateDataInput {
  disqualifyReason?: String
  workspace?: WorkspaceUpdateOneWithoutApplicationsInput
  job?: JobUpdateOneWithoutApplicationsInput
  stage?: StageUpdateOneInput
}

export interface JobCreateOneWithoutEventsInput {
  create?: JobCreateWithoutEventsInput
  connect?: JobWhereUniqueInput
}

export interface StageUpdateOneInput {
  create?: StageCreateInput
  connect?: StageWhereUniqueInput
  delete?: Boolean
  update?: StageUpdateDataInput
  upsert?: StageUpsertNestedInput
}

export interface FieldCreateManyInput {
  create?: FieldCreateInput[] | FieldCreateInput
  connect?: FieldWhereUniqueInput[] | FieldWhereUniqueInput
}

export interface StageUpdateDataInput {
  name?: String
  description?: String
  position?: Int
  type?: StageType
}

export interface JobCreateOneInput {
  create?: JobCreateInput
  connect?: JobWhereUniqueInput
}

export interface StageUpsertNestedInput {
  update: StageUpdateDataInput
  create: StageCreateInput
}

export interface FieldUpdateInput {
  type?: FieldType
  label?: String
  value?: String
}

export interface ApplicationUpsertWithWhereUniqueWithoutCandidateInput {
  where: ApplicationWhereUniqueInput
  update: ApplicationUpdateWithoutCandidateDataInput
  create: ApplicationCreateWithoutCandidateInput
}

export interface InviteWhereUniqueInput {
  id?: ID_Input
}

export interface CandidateUpsertWithoutTasksInput {
  update: CandidateUpdateWithoutTasksDataInput
  create: CandidateCreateWithoutTasksInput
}

export interface UserUpsertWithoutNotificationsInput {
  update: UserUpdateWithoutNotificationsDataInput
  create: UserCreateWithoutNotificationsInput
}

export interface TaskUpsertWithWhereUniqueWithoutOwnersInput {
  where: TaskWhereUniqueInput
  update: TaskUpdateWithoutOwnersDataInput
  create: TaskCreateWithoutOwnersInput
}

export interface WorkspaceUpsertWithoutJobsInput {
  update: WorkspaceUpdateWithoutJobsDataInput
  create: WorkspaceCreateWithoutJobsInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface InviteUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: InviteWhereUniqueInput
  data: InviteUpdateWithoutWorkspaceDataInput
}

export interface CommentUpdateOneInput {
  create?: CommentCreateInput
  connect?: CommentWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CommentUpdateDataInput
  upsert?: CommentUpsertNestedInput
}

export interface JobCreateManyWithoutWorkspaceInput {
  create?: JobCreateWithoutWorkspaceInput[] | JobCreateWithoutWorkspaceInput
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput
}

export interface CommentUpsertNestedInput {
  update: CommentUpdateDataInput
  create: CommentCreateInput
}

export interface UserCreateManyWithoutWorkspaceInput {
  create?: UserCreateWithoutWorkspaceInput[] | UserCreateWithoutWorkspaceInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface CommentUpsertWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput
  update: CommentUpdateDataInput
  create: CommentCreateInput
}

export interface JobCreateOneWithoutApplicationsInput {
  create?: JobCreateWithoutApplicationsInput
  connect?: JobWhereUniqueInput
}

export interface CandidateUpsertWithoutApplicationsInput {
  update: CandidateUpdateWithoutApplicationsDataInput
  create: CandidateCreateWithoutApplicationsInput
}

export interface CandidateCreateOneWithoutApplicationsInput {
  create?: CandidateCreateWithoutApplicationsInput
  connect?: CandidateWhereUniqueInput
}

export interface ApplicationUpsertWithWhereUniqueWithoutJobInput {
  where: ApplicationWhereUniqueInput
  update: ApplicationUpdateWithoutJobDataInput
  create: ApplicationCreateWithoutJobInput
}

export interface CandidateManyConnect {
  connect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
}

export interface StageUpdateManyInput {
  create?: StageCreateInput[] | StageCreateInput
  connect?: StageWhereUniqueInput[] | StageWhereUniqueInput
  disconnect?: StageWhereUniqueInput[] | StageWhereUniqueInput
  delete?: StageWhereUniqueInput[] | StageWhereUniqueInput
  update?: StageUpdateWithWhereUniqueNestedInput[] | StageUpdateWithWhereUniqueNestedInput
  upsert?: StageUpsertWithWhereUniqueNestedInput[] | StageUpsertWithWhereUniqueNestedInput
}

export interface CommentWhereUniqueInput {
  id?: ID_Input
}

export interface StageUpdateWithWhereUniqueNestedInput {
  where: StageWhereUniqueInput
  data: StageUpdateDataInput
}

export interface JobUpdateOneWithoutEventsInput {
  create?: JobCreateWithoutEventsInput
  connect?: JobWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: JobUpdateWithoutEventsDataInput
  upsert?: JobUpsertWithoutEventsInput
}

export interface StageUpsertWithWhereUniqueNestedInput {
  where: StageWhereUniqueInput
  update: StageUpdateDataInput
  create: StageCreateInput
}

export interface CandidateCreateemailsInput {
  set?: String[] | String
}

export interface CandidateCreateManyWithoutSubscribersInput {
  create?: CandidateCreateWithoutSubscribersInput[] | CandidateCreateWithoutSubscribersInput
  connect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
}

export interface JobUpsertNestedInput {
  update: JobUpdateDataInput
  create: JobCreateInput
}

export interface LocationUpsertNestedInput {
  update: LocationUpdateDataInput
  create: LocationCreateInput
}

export interface LocationUpdateDataInput {
  country?: String
  region?: String
  city?: String
  zip?: String
}

export interface LocationUpdateOneInput {
  create?: LocationCreateInput
  connect?: LocationWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: LocationUpdateDataInput
  upsert?: LocationUpsertNestedInput
}

export interface UserCreateManyWithoutTasksInput {
  create?: UserCreateWithoutTasksInput[] | UserCreateWithoutTasksInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface UserCreateManyWithoutSubscriptions_candidatesInput {
  create?: UserCreateWithoutSubscriptions_candidatesInput[] | UserCreateWithoutSubscriptions_candidatesInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface EventCreateManyWithoutTarget_workspaceInput {
  create?: EventCreateWithoutTarget_workspaceInput[] | EventCreateWithoutTarget_workspaceInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
}

export interface EventUpsertWithoutActor_userInput {
  update: EventUpdateWithoutActor_userDataInput
  create: EventCreateWithoutActor_userInput
}

export interface WorkspaceUpdateInput {
  name?: String
  events?: EventUpdateManyWithoutTarget_workspaceInput
  users?: UserUpdateManyWithoutWorkspaceInput
  jobs?: JobUpdateManyWithoutWorkspaceInput
  applications?: ApplicationUpdateManyWithoutWorkspaceInput
  candidates?: CandidateUpdateManyWithoutWorkspaceInput
  invites?: InviteUpdateManyWithoutWorkspaceInput
  tags?: TagUpdateManyInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface User extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  workspace: Workspace
  events?: Event
  notifications?: Notification[]
  subscriptions_jobs?: Job[]
  subscriptions_candidates?: Candidate[]
  subscriptions_tasks?: Task[]
  tasks?: Task[]
  firstName?: String
  lastName?: String
  email: String
  username: String
  lastLogin?: DateTime
  deletedAt?: DateTime
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface Event extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  workspace: Workspace
  type: EventType
  actor_type: EventActorType
  actor_user?: User
  actor_candidate?: Candidate
  target_type: EventTargetType
  target_candidate?: Candidate
  target_job?: Job
  target_task?: Task
  target_workspace?: Workspace
}

export interface AggregateCandidate {
  count: Int
}

export interface Application extends Node {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  workspace: Workspace
  disqualifyReason?: String
  job: Job
  candidate: Candidate
  stage: Stage
}

/*
 * An edge in a connection.

 */
export interface CandidateEdge {
  node: Candidate
  cursor: String
}

export interface AggregateComment {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface CandidateConnection {
  pageInfo: PageInfo
  edges: CandidateEdge[]
  aggregate: AggregateCandidate
}

/*
 * A connection to a list of items.

 */
export interface CommentConnection {
  pageInfo: PageInfo
  edges: CommentEdge[]
  aggregate: AggregateComment
}

export interface AggregateLocation {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface FieldEdge {
  node: Field
  cursor: String
}

/*
 * An edge in a connection.

 */
export interface LocationEdge {
  node: Location
  cursor: String
}

export interface AggregateTag {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface LocationConnection {
  pageInfo: PageInfo
  edges: LocationEdge[]
  aggregate: AggregateLocation
}

/*
 * A connection to a list of items.

 */
export interface TagConnection {
  pageInfo: PageInfo
  edges: TagEdge[]
  aggregate: AggregateTag
}

export interface AggregateNotification {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface TaskEdge {
  node: Task
  cursor: String
}

/*
 * An edge in a connection.

 */
export interface NotificationEdge {
  node: Notification
  cursor: String
}

export interface AggregateJob {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface NotificationConnection {
  pageInfo: PageInfo
  edges: NotificationEdge[]
  aggregate: AggregateNotification
}

/*
 * A connection to a list of items.

 */
export interface JobConnection {
  pageInfo: PageInfo
  edges: JobEdge[]
  aggregate: AggregateJob
}

export interface AggregateApplication {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface WorkspaceEdge {
  node: Workspace
  cursor: String
}

/*
 * An edge in a connection.

 */
export interface ApplicationEdge {
  node: Application
  cursor: String
}

export interface AggregateStage {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface StageConnection {
  pageInfo: PageInfo
  edges: StageEdge[]
  aggregate: AggregateStage
}

/*
 * An edge in a connection.

 */
export interface EventEdge {
  node: Event
  cursor: String
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface AggregateInvite {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface ApplicationConnection {
  pageInfo: PageInfo
  edges: ApplicationEdge[]
  aggregate: AggregateApplication
}

/*
 * A connection to a list of items.

 */
export interface InviteConnection {
  pageInfo: PageInfo
  edges: InviteEdge[]
  aggregate: AggregateInvite
}

/*
 * An edge in a connection.

 */
export interface InviteEdge {
  node: Invite
  cursor: String
}

export interface AuthPayload {
  token: String
  user: User
}

export interface AggregateUser {
  count: Int
}

export interface Workspace extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  events?: Event[]
  users?: User[]
  jobs?: Job[]
  applications?: Application[]
  candidates?: Candidate[]
  invites?: Invite[]
  tags?: Tag[]
  name: String
}

export interface Notification extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  user: User
  event: Event
}

export interface AggregateField {
  count: Int
}

export interface Job extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  workspace: Workspace
  subscribers?: User[]
  events?: Event[]
  applications?: Application[]
  stages?: Stage[]
  comments?: Comment[]
  status: JobType
  title: String
  department?: String
  location?: Location
  description?: String
  requirements?: String
}

/*
 * An edge in a connection.

 */
export interface TagEdge {
  node: Tag
  cursor: String
}

export interface Invite extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  workspace: Workspace
  email: String
  expireAt: DateTime
  invitedBy: User
}

/*
 * A connection to a list of items.

 */
export interface TaskConnection {
  pageInfo: PageInfo
  edges: TaskEdge[]
  aggregate: AggregateTask
}

export interface Task extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  workspace: Workspace
  subscribers?: User[]
  owners?: User[]
  target_type?: TaskTarget
  target_job?: Job
  target_candidate?: Candidate
  title?: String
  description?: String
  dueAt?: DateTime
}

export interface AggregateWorkspace {
  count: Int
}

export interface Field extends Node {
  id: ID_Output
  type?: FieldType
  label: String
  value: String
}

/*
 * An edge in a connection.

 */
export interface StageEdge {
  node: Stage
  cursor: String
}

export interface Tag extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  label: String
}

/*
 * A connection to a list of items.

 */
export interface EventConnection {
  pageInfo: PageInfo
  edges: EventEdge[]
  aggregate: AggregateEvent
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
  resume: String[]
  coverLetter: String[]
  tags?: Tag[]
  source: String[]
  fields?: Field[]
  tasks?: Task[]
  applications?: Application[]
  comments?: Comment[]
}

/*
 * A connection to a list of items.

 */
export interface FieldConnection {
  pageInfo: PageInfo
  edges: FieldEdge[]
  aggregate: AggregateField
}

/*
 * An edge in a connection.

 */
export interface JobEdge {
  node: Job
  cursor: String
}

export interface Comment extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  createdBy: User
  parent?: Comment
  content: String
}

export interface Stage extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description?: String
  position: Int
  type: StageType
}

export interface BatchPayload {
  count: Long
}

export interface Location extends Node {
  id: ID_Output
  country: String
  region: String
  city: String
  zip: String
}

/*
 * A connection to a list of items.

 */
export interface WorkspaceConnection {
  pageInfo: PageInfo
  edges: WorkspaceEdge[]
  aggregate: AggregateWorkspace
}

export interface AggregateTask {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface CommentEdge {
  node: Comment
  cursor: String
}

export interface AggregateEvent {
  count: Int
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string