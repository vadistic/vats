import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    applications: <T = Application[]>(args: { where?: ApplicationWhereInput, orderBy?: ApplicationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    invites: <T = Invite[]>(args: { where?: InviteWhereInput, orderBy?: InviteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notifications: <T = Notification[]>(args: { where?: NotificationWhereInput, orderBy?: NotificationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    locations: <T = Location[]>(args: { where?: LocationWhereInput, orderBy?: LocationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    candidates: <T = Candidate[]>(args: { where?: CandidateWhereInput, orderBy?: CandidateOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    events: <T = Event[]>(args: { where?: EventWhereInput, orderBy?: EventOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stages: <T = Stage[]>(args: { where?: StageWhereInput, orderBy?: StageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    workspaces: <T = Workspace[]>(args: { where?: WorkspaceWhereInput, orderBy?: WorkspaceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    jobs: <T = Job[]>(args: { where?: JobWhereInput, orderBy?: JobOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tasks: <T = Task[]>(args: { where?: TaskWhereInput, orderBy?: TaskOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tags: <T = Tag[]>(args: { where?: TagWhereInput, orderBy?: TagOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    fields: <T = Field[]>(args: { where?: FieldWhereInput, orderBy?: FieldOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    comments: <T = Comment[]>(args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    application: <T = Application | null>(args: { where: ApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    invite: <T = Invite | null>(args: { where: InviteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notification: <T = Notification | null>(args: { where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    location: <T = Location | null>(args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    candidate: <T = Candidate | null>(args: { where: CandidateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    event: <T = Event | null>(args: { where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stage: <T = Stage | null>(args: { where: StageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    workspace: <T = Workspace | null>(args: { where: WorkspaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    job: <T = Job | null>(args: { where: JobWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    task: <T = Task | null>(args: { where: TaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tag: <T = Tag | null>(args: { where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    field: <T = Field | null>(args: { where: FieldWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    comment: <T = Comment | null>(args: { where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    applicationsConnection: <T = ApplicationConnection>(args: { where?: ApplicationWhereInput, orderBy?: ApplicationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    invitesConnection: <T = InviteConnection>(args: { where?: InviteWhereInput, orderBy?: InviteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notificationsConnection: <T = NotificationConnection>(args: { where?: NotificationWhereInput, orderBy?: NotificationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    locationsConnection: <T = LocationConnection>(args: { where?: LocationWhereInput, orderBy?: LocationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    candidatesConnection: <T = CandidateConnection>(args: { where?: CandidateWhereInput, orderBy?: CandidateOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    eventsConnection: <T = EventConnection>(args: { where?: EventWhereInput, orderBy?: EventOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stagesConnection: <T = StageConnection>(args: { where?: StageWhereInput, orderBy?: StageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    workspacesConnection: <T = WorkspaceConnection>(args: { where?: WorkspaceWhereInput, orderBy?: WorkspaceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    jobsConnection: <T = JobConnection>(args: { where?: JobWhereInput, orderBy?: JobOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tasksConnection: <T = TaskConnection>(args: { where?: TaskWhereInput, orderBy?: TaskOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tagsConnection: <T = TagConnection>(args: { where?: TagWhereInput, orderBy?: TagOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    fieldsConnection: <T = FieldConnection>(args: { where?: FieldWhereInput, orderBy?: FieldOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    commentsConnection: <T = CommentConnection>(args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createApplication: <T = Application>(args: { data: ApplicationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createInvite: <T = Invite>(args: { data: InviteCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createNotification: <T = Notification>(args: { data: NotificationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLocation: <T = Location>(args: { data: LocationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCandidate: <T = Candidate>(args: { data: CandidateCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createEvent: <T = Event>(args: { data: EventCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createStage: <T = Stage>(args: { data: StageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createWorkspace: <T = Workspace>(args: { data: WorkspaceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createJob: <T = Job>(args: { data: JobCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTask: <T = Task>(args: { data: TaskCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTag: <T = Tag>(args: { data: TagCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createField: <T = Field>(args: { data: FieldCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createComment: <T = Comment>(args: { data: CommentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateApplication: <T = Application | null>(args: { data: ApplicationUpdateInput, where: ApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateInvite: <T = Invite | null>(args: { data: InviteUpdateInput, where: InviteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateNotification: <T = Notification | null>(args: { data: NotificationUpdateInput, where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLocation: <T = Location | null>(args: { data: LocationUpdateInput, where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCandidate: <T = Candidate | null>(args: { data: CandidateUpdateInput, where: CandidateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateEvent: <T = Event | null>(args: { data: EventUpdateInput, where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateStage: <T = Stage | null>(args: { data: StageUpdateInput, where: StageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateWorkspace: <T = Workspace | null>(args: { data: WorkspaceUpdateInput, where: WorkspaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateJob: <T = Job | null>(args: { data: JobUpdateInput, where: JobWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTask: <T = Task | null>(args: { data: TaskUpdateInput, where: TaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTag: <T = Tag | null>(args: { data: TagUpdateInput, where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateField: <T = Field | null>(args: { data: FieldUpdateInput, where: FieldWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateComment: <T = Comment | null>(args: { data: CommentUpdateInput, where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteApplication: <T = Application | null>(args: { where: ApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteInvite: <T = Invite | null>(args: { where: InviteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteNotification: <T = Notification | null>(args: { where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLocation: <T = Location | null>(args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCandidate: <T = Candidate | null>(args: { where: CandidateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteEvent: <T = Event | null>(args: { where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteStage: <T = Stage | null>(args: { where: StageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteWorkspace: <T = Workspace | null>(args: { where: WorkspaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteJob: <T = Job | null>(args: { where: JobWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteTask: <T = Task | null>(args: { where: TaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteTag: <T = Tag | null>(args: { where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteField: <T = Field | null>(args: { where: FieldWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteComment: <T = Comment | null>(args: { where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertApplication: <T = Application>(args: { where: ApplicationWhereUniqueInput, create: ApplicationCreateInput, update: ApplicationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertInvite: <T = Invite>(args: { where: InviteWhereUniqueInput, create: InviteCreateInput, update: InviteUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertNotification: <T = Notification>(args: { where: NotificationWhereUniqueInput, create: NotificationCreateInput, update: NotificationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLocation: <T = Location>(args: { where: LocationWhereUniqueInput, create: LocationCreateInput, update: LocationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCandidate: <T = Candidate>(args: { where: CandidateWhereUniqueInput, create: CandidateCreateInput, update: CandidateUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertEvent: <T = Event>(args: { where: EventWhereUniqueInput, create: EventCreateInput, update: EventUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertStage: <T = Stage>(args: { where: StageWhereUniqueInput, create: StageCreateInput, update: StageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertWorkspace: <T = Workspace>(args: { where: WorkspaceWhereUniqueInput, create: WorkspaceCreateInput, update: WorkspaceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertJob: <T = Job>(args: { where: JobWhereUniqueInput, create: JobCreateInput, update: JobUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTask: <T = Task>(args: { where: TaskWhereUniqueInput, create: TaskCreateInput, update: TaskUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTag: <T = Tag>(args: { where: TagWhereUniqueInput, create: TagCreateInput, update: TagUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertField: <T = Field>(args: { where: FieldWhereUniqueInput, create: FieldCreateInput, update: FieldUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertComment: <T = Comment>(args: { where: CommentWhereUniqueInput, create: CommentCreateInput, update: CommentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyApplications: <T = BatchPayload>(args: { data: ApplicationUpdateInput, where?: ApplicationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyInvites: <T = BatchPayload>(args: { data: InviteUpdateInput, where?: InviteWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyNotifications: <T = BatchPayload>(args: { data: NotificationUpdateInput, where?: NotificationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLocations: <T = BatchPayload>(args: { data: LocationUpdateInput, where?: LocationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCandidates: <T = BatchPayload>(args: { data: CandidateUpdateInput, where?: CandidateWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyEvents: <T = BatchPayload>(args: { data: EventUpdateInput, where?: EventWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyStages: <T = BatchPayload>(args: { data: StageUpdateInput, where?: StageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyWorkspaces: <T = BatchPayload>(args: { data: WorkspaceUpdateInput, where?: WorkspaceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyJobs: <T = BatchPayload>(args: { data: JobUpdateInput, where?: JobWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTasks: <T = BatchPayload>(args: { data: TaskUpdateInput, where?: TaskWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTags: <T = BatchPayload>(args: { data: TagUpdateInput, where?: TagWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFields: <T = BatchPayload>(args: { data: FieldUpdateInput, where?: FieldWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyComments: <T = BatchPayload>(args: { data: CommentUpdateInput, where?: CommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyApplications: <T = BatchPayload>(args: { where?: ApplicationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyInvites: <T = BatchPayload>(args: { where?: InviteWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyNotifications: <T = BatchPayload>(args: { where?: NotificationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLocations: <T = BatchPayload>(args: { where?: LocationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCandidates: <T = BatchPayload>(args: { where?: CandidateWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyEvents: <T = BatchPayload>(args: { where?: EventWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyStages: <T = BatchPayload>(args: { where?: StageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyWorkspaces: <T = BatchPayload>(args: { where?: WorkspaceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyJobs: <T = BatchPayload>(args: { where?: JobWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTasks: <T = BatchPayload>(args: { where?: TaskWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTags: <T = BatchPayload>(args: { where?: TagWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFields: <T = BatchPayload>(args: { where?: FieldWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyComments: <T = BatchPayload>(args: { where?: CommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    application: <T = ApplicationSubscriptionPayload | null>(args: { where?: ApplicationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    invite: <T = InviteSubscriptionPayload | null>(args: { where?: InviteSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    notification: <T = NotificationSubscriptionPayload | null>(args: { where?: NotificationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    location: <T = LocationSubscriptionPayload | null>(args: { where?: LocationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    candidate: <T = CandidateSubscriptionPayload | null>(args: { where?: CandidateSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    event: <T = EventSubscriptionPayload | null>(args: { where?: EventSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    stage: <T = StageSubscriptionPayload | null>(args: { where?: StageSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    workspace: <T = WorkspaceSubscriptionPayload | null>(args: { where?: WorkspaceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    job: <T = JobSubscriptionPayload | null>(args: { where?: JobSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    task: <T = TaskSubscriptionPayload | null>(args: { where?: TaskSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    tag: <T = TagSubscriptionPayload | null>(args: { where?: TagSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    field: <T = FieldSubscriptionPayload | null>(args: { where?: FieldSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    comment: <T = CommentSubscriptionPayload | null>(args: { where?: CommentSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Application: (where?: ApplicationWhereInput) => Promise<boolean>
  Invite: (where?: InviteWhereInput) => Promise<boolean>
  Notification: (where?: NotificationWhereInput) => Promise<boolean>
  Location: (where?: LocationWhereInput) => Promise<boolean>
  Candidate: (where?: CandidateWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  Event: (where?: EventWhereInput) => Promise<boolean>
  Stage: (where?: StageWhereInput) => Promise<boolean>
  Workspace: (where?: WorkspaceWhereInput) => Promise<boolean>
  Job: (where?: JobWhereInput) => Promise<boolean>
  Task: (where?: TaskWhereInput) => Promise<boolean>
  Tag: (where?: TagWhereInput) => Promise<boolean>
  Field: (where?: FieldWhereInput) => Promise<boolean>
  Comment: (where?: CommentWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
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
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateApplication {
  count: Int!
}

type AggregateCandidate {
  count: Int!
}

type AggregateComment {
  count: Int!
}

type AggregateEvent {
  count: Int!
}

type AggregateField {
  count: Int!
}

type AggregateInvite {
  count: Int!
}

type AggregateJob {
  count: Int!
}

type AggregateLocation {
  count: Int!
}

type AggregateNotification {
  count: Int!
}

type AggregateStage {
  count: Int!
}

type AggregateTag {
  count: Int!
}

type AggregateTask {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateWorkspace {
  count: Int!
}

type Application implements Node {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  workspace(where: WorkspaceWhereInput): Workspace!
  disqualifyReason: String
  job(where: JobWhereInput): Job!
  candidate(where: CandidateWhereInput): Candidate!
  stage(where: StageWhereInput): Stage!
}

"""A connection to a list of items."""
type ApplicationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ApplicationEdge]!
  aggregate: AggregateApplication!
}

input ApplicationCreateInput {
  disqualifyReason: String
  workspace: WorkspaceCreateOneWithoutApplicationsInput!
  job: JobCreateOneWithoutApplicationsInput!
  candidate: CandidateCreateOneWithoutApplicationsInput!
  stage: StageCreateOneInput!
}

input ApplicationCreateManyWithoutCandidateInput {
  create: [ApplicationCreateWithoutCandidateInput!]
  connect: [ApplicationWhereUniqueInput!]
}

input ApplicationCreateManyWithoutJobInput {
  create: [ApplicationCreateWithoutJobInput!]
  connect: [ApplicationWhereUniqueInput!]
}

input ApplicationCreateManyWithoutWorkspaceInput {
  create: [ApplicationCreateWithoutWorkspaceInput!]
  connect: [ApplicationWhereUniqueInput!]
}

input ApplicationCreateWithoutCandidateInput {
  disqualifyReason: String
  workspace: WorkspaceCreateOneWithoutApplicationsInput!
  job: JobCreateOneWithoutApplicationsInput!
  stage: StageCreateOneInput!
}

input ApplicationCreateWithoutJobInput {
  disqualifyReason: String
  workspace: WorkspaceCreateOneWithoutApplicationsInput!
  candidate: CandidateCreateOneWithoutApplicationsInput!
  stage: StageCreateOneInput!
}

input ApplicationCreateWithoutWorkspaceInput {
  disqualifyReason: String
  job: JobCreateOneWithoutApplicationsInput!
  candidate: CandidateCreateOneWithoutApplicationsInput!
  stage: StageCreateOneInput!
}

"""An edge in a connection."""
type ApplicationEdge {
  """The item at the end of the edge."""
  node: Application!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ApplicationOrderByInput {
  createdAt_ASC
  createdAt_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  disqualifyReason_ASC
  disqualifyReason_DESC
}

type ApplicationPreviousValues {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  disqualifyReason: String
}

type ApplicationSubscriptionPayload {
  mutation: MutationType!
  node: Application
  updatedFields: [String!]
  previousValues: ApplicationPreviousValues
}

input ApplicationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ApplicationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ApplicationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ApplicationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ApplicationWhereInput
}

input ApplicationUpdateInput {
  disqualifyReason: String
  workspace: WorkspaceUpdateOneWithoutApplicationsInput
  job: JobUpdateOneWithoutApplicationsInput
  candidate: CandidateUpdateOneWithoutApplicationsInput
  stage: StageUpdateOneInput
}

input ApplicationUpdateManyWithoutCandidateInput {
  create: [ApplicationCreateWithoutCandidateInput!]
  connect: [ApplicationWhereUniqueInput!]
  disconnect: [ApplicationWhereUniqueInput!]
  delete: [ApplicationWhereUniqueInput!]
  update: [ApplicationUpdateWithWhereUniqueWithoutCandidateInput!]
  upsert: [ApplicationUpsertWithWhereUniqueWithoutCandidateInput!]
}

input ApplicationUpdateManyWithoutJobInput {
  create: [ApplicationCreateWithoutJobInput!]
  connect: [ApplicationWhereUniqueInput!]
  disconnect: [ApplicationWhereUniqueInput!]
  delete: [ApplicationWhereUniqueInput!]
  update: [ApplicationUpdateWithWhereUniqueWithoutJobInput!]
  upsert: [ApplicationUpsertWithWhereUniqueWithoutJobInput!]
}

input ApplicationUpdateManyWithoutWorkspaceInput {
  create: [ApplicationCreateWithoutWorkspaceInput!]
  connect: [ApplicationWhereUniqueInput!]
  disconnect: [ApplicationWhereUniqueInput!]
  delete: [ApplicationWhereUniqueInput!]
  update: [ApplicationUpdateWithWhereUniqueWithoutWorkspaceInput!]
  upsert: [ApplicationUpsertWithWhereUniqueWithoutWorkspaceInput!]
}

input ApplicationUpdateWithoutCandidateDataInput {
  disqualifyReason: String
  workspace: WorkspaceUpdateOneWithoutApplicationsInput
  job: JobUpdateOneWithoutApplicationsInput
  stage: StageUpdateOneInput
}

input ApplicationUpdateWithoutJobDataInput {
  disqualifyReason: String
  workspace: WorkspaceUpdateOneWithoutApplicationsInput
  candidate: CandidateUpdateOneWithoutApplicationsInput
  stage: StageUpdateOneInput
}

input ApplicationUpdateWithoutWorkspaceDataInput {
  disqualifyReason: String
  job: JobUpdateOneWithoutApplicationsInput
  candidate: CandidateUpdateOneWithoutApplicationsInput
  stage: StageUpdateOneInput
}

input ApplicationUpdateWithWhereUniqueWithoutCandidateInput {
  where: ApplicationWhereUniqueInput!
  data: ApplicationUpdateWithoutCandidateDataInput!
}

input ApplicationUpdateWithWhereUniqueWithoutJobInput {
  where: ApplicationWhereUniqueInput!
  data: ApplicationUpdateWithoutJobDataInput!
}

input ApplicationUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: ApplicationWhereUniqueInput!
  data: ApplicationUpdateWithoutWorkspaceDataInput!
}

input ApplicationUpsertWithWhereUniqueWithoutCandidateInput {
  where: ApplicationWhereUniqueInput!
  update: ApplicationUpdateWithoutCandidateDataInput!
  create: ApplicationCreateWithoutCandidateInput!
}

input ApplicationUpsertWithWhereUniqueWithoutJobInput {
  where: ApplicationWhereUniqueInput!
  update: ApplicationUpdateWithoutJobDataInput!
  create: ApplicationCreateWithoutJobInput!
}

input ApplicationUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: ApplicationWhereUniqueInput!
  update: ApplicationUpdateWithoutWorkspaceDataInput!
  create: ApplicationCreateWithoutWorkspaceInput!
}

input ApplicationWhereInput {
  """Logical AND on all given filters."""
  AND: [ApplicationWhereInput!]

  """Logical OR on all given filters."""
  OR: [ApplicationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ApplicationWhereInput!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  disqualifyReason: String

  """All values that are not equal to given value."""
  disqualifyReason_not: String

  """All values that are contained in given list."""
  disqualifyReason_in: [String!]

  """All values that are not contained in given list."""
  disqualifyReason_not_in: [String!]

  """All values less than the given value."""
  disqualifyReason_lt: String

  """All values less than or equal the given value."""
  disqualifyReason_lte: String

  """All values greater than the given value."""
  disqualifyReason_gt: String

  """All values greater than or equal the given value."""
  disqualifyReason_gte: String

  """All values containing the given string."""
  disqualifyReason_contains: String

  """All values not containing the given string."""
  disqualifyReason_not_contains: String

  """All values starting with the given string."""
  disqualifyReason_starts_with: String

  """All values not starting with the given string."""
  disqualifyReason_not_starts_with: String

  """All values ending with the given string."""
  disqualifyReason_ends_with: String

  """All values not ending with the given string."""
  disqualifyReason_not_ends_with: String
  workspace: WorkspaceWhereInput
  job: JobWhereInput
  candidate: CandidateWhereInput
  stage: StageWhereInput
}

input ApplicationWhereUniqueInput {
  id: ID
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Candidate implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  workspace(where: WorkspaceWhereInput): Workspace!
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
  subscribers(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  firstName: String!
  lastName: String!
  emails: [String!]!
  phones: [String!]!
  links: [String!]!
  resume: [String!]!
  coverLetter: [String!]!
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
  source: [String!]!
  fields(where: FieldWhereInput, orderBy: FieldOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Field!]
  tasks(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Task!]
  applications(where: ApplicationWhereInput, orderBy: ApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Application!]
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
}

"""A connection to a list of items."""
type CandidateConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CandidateEdge]!
  aggregate: AggregateCandidate!
}

input CandidateCreatecoverLetterInput {
  set: [String!]
}

input CandidateCreateemailsInput {
  set: [String!]
}

input CandidateCreateInput {
  firstName: String!
  lastName: String!
  emails: CandidateCreateemailsInput
  phones: CandidateCreatephonesInput
  links: CandidateCreatelinksInput
  resume: CandidateCreateresumeInput
  coverLetter: CandidateCreatecoverLetterInput
  source: CandidateCreatesourceInput
  workspace: WorkspaceCreateOneWithoutCandidatesInput!
  events: EventCreateManyWithoutTargetCandidateInput
  subscribers: UserCreateManyWithoutSubscriptionCandidatesInput
  tags: TagCreateManyInput
  fields: FieldCreateManyInput
  tasks: TaskCreateManyWithoutCandidateInput
  applications: ApplicationCreateManyWithoutCandidateInput
  comments: CommentCreateManyInput
}

input CandidateCreatelinksInput {
  set: [String!]
}

input CandidateCreateManyWithoutSubscribersInput {
  create: [CandidateCreateWithoutSubscribersInput!]
  connect: [CandidateWhereUniqueInput!]
}

input CandidateCreateManyWithoutWorkspaceInput {
  create: [CandidateCreateWithoutWorkspaceInput!]
  connect: [CandidateWhereUniqueInput!]
}

input CandidateCreateOneInput {
  create: CandidateCreateInput
  connect: CandidateWhereUniqueInput
}

input CandidateCreateOneWithoutApplicationsInput {
  create: CandidateCreateWithoutApplicationsInput
  connect: CandidateWhereUniqueInput
}

input CandidateCreateOneWithoutEventsInput {
  create: CandidateCreateWithoutEventsInput
  connect: CandidateWhereUniqueInput
}

input CandidateCreateOneWithoutTasksInput {
  create: CandidateCreateWithoutTasksInput
  connect: CandidateWhereUniqueInput
}

input CandidateCreatephonesInput {
  set: [String!]
}

input CandidateCreateresumeInput {
  set: [String!]
}

input CandidateCreatesourceInput {
  set: [String!]
}

input CandidateCreateWithoutApplicationsInput {
  firstName: String!
  lastName: String!
  emails: CandidateCreateemailsInput
  phones: CandidateCreatephonesInput
  links: CandidateCreatelinksInput
  resume: CandidateCreateresumeInput
  coverLetter: CandidateCreatecoverLetterInput
  source: CandidateCreatesourceInput
  workspace: WorkspaceCreateOneWithoutCandidatesInput!
  events: EventCreateManyWithoutTargetCandidateInput
  subscribers: UserCreateManyWithoutSubscriptionCandidatesInput
  tags: TagCreateManyInput
  fields: FieldCreateManyInput
  tasks: TaskCreateManyWithoutCandidateInput
  comments: CommentCreateManyInput
}

input CandidateCreateWithoutEventsInput {
  firstName: String!
  lastName: String!
  emails: CandidateCreateemailsInput
  phones: CandidateCreatephonesInput
  links: CandidateCreatelinksInput
  resume: CandidateCreateresumeInput
  coverLetter: CandidateCreatecoverLetterInput
  source: CandidateCreatesourceInput
  workspace: WorkspaceCreateOneWithoutCandidatesInput!
  subscribers: UserCreateManyWithoutSubscriptionCandidatesInput
  tags: TagCreateManyInput
  fields: FieldCreateManyInput
  tasks: TaskCreateManyWithoutCandidateInput
  applications: ApplicationCreateManyWithoutCandidateInput
  comments: CommentCreateManyInput
}

input CandidateCreateWithoutSubscribersInput {
  firstName: String!
  lastName: String!
  emails: CandidateCreateemailsInput
  phones: CandidateCreatephonesInput
  links: CandidateCreatelinksInput
  resume: CandidateCreateresumeInput
  coverLetter: CandidateCreatecoverLetterInput
  source: CandidateCreatesourceInput
  workspace: WorkspaceCreateOneWithoutCandidatesInput!
  events: EventCreateManyWithoutTargetCandidateInput
  tags: TagCreateManyInput
  fields: FieldCreateManyInput
  tasks: TaskCreateManyWithoutCandidateInput
  applications: ApplicationCreateManyWithoutCandidateInput
  comments: CommentCreateManyInput
}

input CandidateCreateWithoutTasksInput {
  firstName: String!
  lastName: String!
  emails: CandidateCreateemailsInput
  phones: CandidateCreatephonesInput
  links: CandidateCreatelinksInput
  resume: CandidateCreateresumeInput
  coverLetter: CandidateCreatecoverLetterInput
  source: CandidateCreatesourceInput
  workspace: WorkspaceCreateOneWithoutCandidatesInput!
  events: EventCreateManyWithoutTargetCandidateInput
  subscribers: UserCreateManyWithoutSubscriptionCandidatesInput
  tags: TagCreateManyInput
  fields: FieldCreateManyInput
  applications: ApplicationCreateManyWithoutCandidateInput
  comments: CommentCreateManyInput
}

input CandidateCreateWithoutWorkspaceInput {
  firstName: String!
  lastName: String!
  emails: CandidateCreateemailsInput
  phones: CandidateCreatephonesInput
  links: CandidateCreatelinksInput
  resume: CandidateCreateresumeInput
  coverLetter: CandidateCreatecoverLetterInput
  source: CandidateCreatesourceInput
  events: EventCreateManyWithoutTargetCandidateInput
  subscribers: UserCreateManyWithoutSubscriptionCandidatesInput
  tags: TagCreateManyInput
  fields: FieldCreateManyInput
  tasks: TaskCreateManyWithoutCandidateInput
  applications: ApplicationCreateManyWithoutCandidateInput
  comments: CommentCreateManyInput
}

"""An edge in a connection."""
type CandidateEdge {
  """The item at the end of the edge."""
  node: Candidate!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CandidateOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
}

type CandidatePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  firstName: String!
  lastName: String!
  emails: [String!]!
  phones: [String!]!
  links: [String!]!
  resume: [String!]!
  coverLetter: [String!]!
  source: [String!]!
}

type CandidateSubscriptionPayload {
  mutation: MutationType!
  node: Candidate
  updatedFields: [String!]
  previousValues: CandidatePreviousValues
}

input CandidateSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CandidateSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CandidateSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CandidateSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CandidateWhereInput
}

input CandidateUpdatecoverLetterInput {
  set: [String!]
}

input CandidateUpdateDataInput {
  firstName: String
  lastName: String
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  resume: CandidateUpdateresumeInput
  coverLetter: CandidateUpdatecoverLetterInput
  source: CandidateUpdatesourceInput
  workspace: WorkspaceUpdateOneWithoutCandidatesInput
  events: EventUpdateManyWithoutTargetCandidateInput
  subscribers: UserUpdateManyWithoutSubscriptionCandidatesInput
  tags: TagUpdateManyInput
  fields: FieldUpdateManyInput
  tasks: TaskUpdateManyWithoutCandidateInput
  applications: ApplicationUpdateManyWithoutCandidateInput
  comments: CommentUpdateManyInput
}

input CandidateUpdateemailsInput {
  set: [String!]
}

input CandidateUpdateInput {
  firstName: String
  lastName: String
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  resume: CandidateUpdateresumeInput
  coverLetter: CandidateUpdatecoverLetterInput
  source: CandidateUpdatesourceInput
  workspace: WorkspaceUpdateOneWithoutCandidatesInput
  events: EventUpdateManyWithoutTargetCandidateInput
  subscribers: UserUpdateManyWithoutSubscriptionCandidatesInput
  tags: TagUpdateManyInput
  fields: FieldUpdateManyInput
  tasks: TaskUpdateManyWithoutCandidateInput
  applications: ApplicationUpdateManyWithoutCandidateInput
  comments: CommentUpdateManyInput
}

input CandidateUpdatelinksInput {
  set: [String!]
}

input CandidateUpdateManyWithoutSubscribersInput {
  create: [CandidateCreateWithoutSubscribersInput!]
  connect: [CandidateWhereUniqueInput!]
  disconnect: [CandidateWhereUniqueInput!]
  delete: [CandidateWhereUniqueInput!]
  update: [CandidateUpdateWithWhereUniqueWithoutSubscribersInput!]
  upsert: [CandidateUpsertWithWhereUniqueWithoutSubscribersInput!]
}

input CandidateUpdateManyWithoutWorkspaceInput {
  create: [CandidateCreateWithoutWorkspaceInput!]
  connect: [CandidateWhereUniqueInput!]
  disconnect: [CandidateWhereUniqueInput!]
  delete: [CandidateWhereUniqueInput!]
  update: [CandidateUpdateWithWhereUniqueWithoutWorkspaceInput!]
  upsert: [CandidateUpsertWithWhereUniqueWithoutWorkspaceInput!]
}

input CandidateUpdateOneInput {
  create: CandidateCreateInput
  connect: CandidateWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CandidateUpdateDataInput
  upsert: CandidateUpsertNestedInput
}

input CandidateUpdateOneWithoutApplicationsInput {
  create: CandidateCreateWithoutApplicationsInput
  connect: CandidateWhereUniqueInput
  delete: Boolean
  update: CandidateUpdateWithoutApplicationsDataInput
  upsert: CandidateUpsertWithoutApplicationsInput
}

input CandidateUpdateOneWithoutEventsInput {
  create: CandidateCreateWithoutEventsInput
  connect: CandidateWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CandidateUpdateWithoutEventsDataInput
  upsert: CandidateUpsertWithoutEventsInput
}

input CandidateUpdateOneWithoutTasksInput {
  create: CandidateCreateWithoutTasksInput
  connect: CandidateWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CandidateUpdateWithoutTasksDataInput
  upsert: CandidateUpsertWithoutTasksInput
}

input CandidateUpdatephonesInput {
  set: [String!]
}

input CandidateUpdateresumeInput {
  set: [String!]
}

input CandidateUpdatesourceInput {
  set: [String!]
}

input CandidateUpdateWithoutApplicationsDataInput {
  firstName: String
  lastName: String
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  resume: CandidateUpdateresumeInput
  coverLetter: CandidateUpdatecoverLetterInput
  source: CandidateUpdatesourceInput
  workspace: WorkspaceUpdateOneWithoutCandidatesInput
  events: EventUpdateManyWithoutTargetCandidateInput
  subscribers: UserUpdateManyWithoutSubscriptionCandidatesInput
  tags: TagUpdateManyInput
  fields: FieldUpdateManyInput
  tasks: TaskUpdateManyWithoutCandidateInput
  comments: CommentUpdateManyInput
}

input CandidateUpdateWithoutEventsDataInput {
  firstName: String
  lastName: String
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  resume: CandidateUpdateresumeInput
  coverLetter: CandidateUpdatecoverLetterInput
  source: CandidateUpdatesourceInput
  workspace: WorkspaceUpdateOneWithoutCandidatesInput
  subscribers: UserUpdateManyWithoutSubscriptionCandidatesInput
  tags: TagUpdateManyInput
  fields: FieldUpdateManyInput
  tasks: TaskUpdateManyWithoutCandidateInput
  applications: ApplicationUpdateManyWithoutCandidateInput
  comments: CommentUpdateManyInput
}

input CandidateUpdateWithoutSubscribersDataInput {
  firstName: String
  lastName: String
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  resume: CandidateUpdateresumeInput
  coverLetter: CandidateUpdatecoverLetterInput
  source: CandidateUpdatesourceInput
  workspace: WorkspaceUpdateOneWithoutCandidatesInput
  events: EventUpdateManyWithoutTargetCandidateInput
  tags: TagUpdateManyInput
  fields: FieldUpdateManyInput
  tasks: TaskUpdateManyWithoutCandidateInput
  applications: ApplicationUpdateManyWithoutCandidateInput
  comments: CommentUpdateManyInput
}

input CandidateUpdateWithoutTasksDataInput {
  firstName: String
  lastName: String
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  resume: CandidateUpdateresumeInput
  coverLetter: CandidateUpdatecoverLetterInput
  source: CandidateUpdatesourceInput
  workspace: WorkspaceUpdateOneWithoutCandidatesInput
  events: EventUpdateManyWithoutTargetCandidateInput
  subscribers: UserUpdateManyWithoutSubscriptionCandidatesInput
  tags: TagUpdateManyInput
  fields: FieldUpdateManyInput
  applications: ApplicationUpdateManyWithoutCandidateInput
  comments: CommentUpdateManyInput
}

input CandidateUpdateWithoutWorkspaceDataInput {
  firstName: String
  lastName: String
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  resume: CandidateUpdateresumeInput
  coverLetter: CandidateUpdatecoverLetterInput
  source: CandidateUpdatesourceInput
  events: EventUpdateManyWithoutTargetCandidateInput
  subscribers: UserUpdateManyWithoutSubscriptionCandidatesInput
  tags: TagUpdateManyInput
  fields: FieldUpdateManyInput
  tasks: TaskUpdateManyWithoutCandidateInput
  applications: ApplicationUpdateManyWithoutCandidateInput
  comments: CommentUpdateManyInput
}

input CandidateUpdateWithWhereUniqueWithoutSubscribersInput {
  where: CandidateWhereUniqueInput!
  data: CandidateUpdateWithoutSubscribersDataInput!
}

input CandidateUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: CandidateWhereUniqueInput!
  data: CandidateUpdateWithoutWorkspaceDataInput!
}

input CandidateUpsertNestedInput {
  update: CandidateUpdateDataInput!
  create: CandidateCreateInput!
}

input CandidateUpsertWithoutApplicationsInput {
  update: CandidateUpdateWithoutApplicationsDataInput!
  create: CandidateCreateWithoutApplicationsInput!
}

input CandidateUpsertWithoutEventsInput {
  update: CandidateUpdateWithoutEventsDataInput!
  create: CandidateCreateWithoutEventsInput!
}

input CandidateUpsertWithoutTasksInput {
  update: CandidateUpdateWithoutTasksDataInput!
  create: CandidateCreateWithoutTasksInput!
}

input CandidateUpsertWithWhereUniqueWithoutSubscribersInput {
  where: CandidateWhereUniqueInput!
  update: CandidateUpdateWithoutSubscribersDataInput!
  create: CandidateCreateWithoutSubscribersInput!
}

input CandidateUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: CandidateWhereUniqueInput!
  update: CandidateUpdateWithoutWorkspaceDataInput!
  create: CandidateCreateWithoutWorkspaceInput!
}

input CandidateWhereInput {
  """Logical AND on all given filters."""
  AND: [CandidateWhereInput!]

  """Logical OR on all given filters."""
  OR: [CandidateWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CandidateWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  firstName: String

  """All values that are not equal to given value."""
  firstName_not: String

  """All values that are contained in given list."""
  firstName_in: [String!]

  """All values that are not contained in given list."""
  firstName_not_in: [String!]

  """All values less than the given value."""
  firstName_lt: String

  """All values less than or equal the given value."""
  firstName_lte: String

  """All values greater than the given value."""
  firstName_gt: String

  """All values greater than or equal the given value."""
  firstName_gte: String

  """All values containing the given string."""
  firstName_contains: String

  """All values not containing the given string."""
  firstName_not_contains: String

  """All values starting with the given string."""
  firstName_starts_with: String

  """All values not starting with the given string."""
  firstName_not_starts_with: String

  """All values ending with the given string."""
  firstName_ends_with: String

  """All values not ending with the given string."""
  firstName_not_ends_with: String
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values less than the given value."""
  lastName_lt: String

  """All values less than or equal the given value."""
  lastName_lte: String

  """All values greater than the given value."""
  lastName_gt: String

  """All values greater than or equal the given value."""
  lastName_gte: String

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string."""
  lastName_not_ends_with: String
  workspace: WorkspaceWhereInput
  events_every: EventWhereInput
  events_some: EventWhereInput
  events_none: EventWhereInput
  subscribers_every: UserWhereInput
  subscribers_some: UserWhereInput
  subscribers_none: UserWhereInput
  tags_every: TagWhereInput
  tags_some: TagWhereInput
  tags_none: TagWhereInput
  fields_every: FieldWhereInput
  fields_some: FieldWhereInput
  fields_none: FieldWhereInput
  tasks_every: TaskWhereInput
  tasks_some: TaskWhereInput
  tasks_none: TaskWhereInput
  applications_every: ApplicationWhereInput
  applications_some: ApplicationWhereInput
  applications_none: ApplicationWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
}

input CandidateWhereUniqueInput {
  id: ID
}

type Comment implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  createdBy(where: UserWhereInput): User!
  parent(where: CommentWhereInput): Comment
  content: String!
}

"""A connection to a list of items."""
type CommentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  content: String!
  createdBy: UserCreateOneInput!
  parent: CommentCreateOneInput
}

input CommentCreateManyInput {
  create: [CommentCreateInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateOneInput {
  create: CommentCreateInput
  connect: CommentWhereUniqueInput
}

"""An edge in a connection."""
type CommentEdge {
  """The item at the end of the edge."""
  node: Comment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CommentOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  content_ASC
  content_DESC
}

type CommentPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  content: String!
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CommentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CommentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CommentSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CommentWhereInput
}

input CommentUpdateDataInput {
  content: String
  createdBy: UserUpdateOneInput
  parent: CommentUpdateOneInput
}

input CommentUpdateInput {
  content: String
  createdBy: UserUpdateOneInput
  parent: CommentUpdateOneInput
}

input CommentUpdateManyInput {
  create: [CommentCreateInput!]
  connect: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  delete: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueNestedInput!]
  upsert: [CommentUpsertWithWhereUniqueNestedInput!]
}

input CommentUpdateOneInput {
  create: CommentCreateInput
  connect: CommentWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CommentUpdateDataInput
  upsert: CommentUpsertNestedInput
}

input CommentUpdateWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateDataInput!
}

input CommentUpsertNestedInput {
  update: CommentUpdateDataInput!
  create: CommentCreateInput!
}

input CommentUpsertWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateDataInput!
  create: CommentCreateInput!
}

input CommentWhereInput {
  """Logical AND on all given filters."""
  AND: [CommentWhereInput!]

  """Logical OR on all given filters."""
  OR: [CommentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CommentWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  content: String

  """All values that are not equal to given value."""
  content_not: String

  """All values that are contained in given list."""
  content_in: [String!]

  """All values that are not contained in given list."""
  content_not_in: [String!]

  """All values less than the given value."""
  content_lt: String

  """All values less than or equal the given value."""
  content_lte: String

  """All values greater than the given value."""
  content_gt: String

  """All values greater than or equal the given value."""
  content_gte: String

  """All values containing the given string."""
  content_contains: String

  """All values not containing the given string."""
  content_not_contains: String

  """All values starting with the given string."""
  content_starts_with: String

  """All values not starting with the given string."""
  content_not_starts_with: String

  """All values ending with the given string."""
  content_ends_with: String

  """All values not ending with the given string."""
  content_not_ends_with: String
  createdBy: UserWhereInput
  parent: CommentWhereInput
}

input CommentWhereUniqueInput {
  id: ID
}

scalar DateTime

type Event implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  workspace(where: WorkspaceWhereInput): Workspace!
  type: EventTypeEnum!
  actorType: EventActorTypeEnum!
  actorUser(where: UserWhereInput): User
  actorCandidate(where: CandidateWhereInput): Candidate
  targetType: EventTargetTypeEnum!
  targetCandidate(where: CandidateWhereInput): Candidate
  targetJob(where: JobWhereInput): Job
  targetTask(where: TaskWhereInput): Task
  targetWorkspace(where: WorkspaceWhereInput): Workspace
}

enum EventActorTypeEnum {
  SYSTEM
  USER
  CANDIDATE
}

"""A connection to a list of items."""
type EventConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [EventEdge]!
  aggregate: AggregateEvent!
}

input EventCreateInput {
  type: EventTypeEnum!
  actorType: EventActorTypeEnum!
  targetType: EventTargetTypeEnum!
  workspace: WorkspaceCreateOneInput!
  actorUser: UserCreateOneWithoutEventsInput
  actorCandidate: CandidateCreateOneInput
  targetCandidate: CandidateCreateOneWithoutEventsInput
  targetJob: JobCreateOneWithoutEventsInput
  targetTask: TaskCreateOneInput
  targetWorkspace: WorkspaceCreateOneWithoutEventsInput
}

input EventCreateManyWithoutTargetCandidateInput {
  create: [EventCreateWithoutTargetCandidateInput!]
  connect: [EventWhereUniqueInput!]
}

input EventCreateManyWithoutTargetJobInput {
  create: [EventCreateWithoutTargetJobInput!]
  connect: [EventWhereUniqueInput!]
}

input EventCreateManyWithoutTargetWorkspaceInput {
  create: [EventCreateWithoutTargetWorkspaceInput!]
  connect: [EventWhereUniqueInput!]
}

input EventCreateOneInput {
  create: EventCreateInput
  connect: EventWhereUniqueInput
}

input EventCreateOneWithoutActorUserInput {
  create: EventCreateWithoutActorUserInput
  connect: EventWhereUniqueInput
}

input EventCreateWithoutActorUserInput {
  type: EventTypeEnum!
  actorType: EventActorTypeEnum!
  targetType: EventTargetTypeEnum!
  workspace: WorkspaceCreateOneInput!
  actorCandidate: CandidateCreateOneInput
  targetCandidate: CandidateCreateOneWithoutEventsInput
  targetJob: JobCreateOneWithoutEventsInput
  targetTask: TaskCreateOneInput
  targetWorkspace: WorkspaceCreateOneWithoutEventsInput
}

input EventCreateWithoutTargetCandidateInput {
  type: EventTypeEnum!
  actorType: EventActorTypeEnum!
  targetType: EventTargetTypeEnum!
  workspace: WorkspaceCreateOneInput!
  actorUser: UserCreateOneWithoutEventsInput
  actorCandidate: CandidateCreateOneInput
  targetJob: JobCreateOneWithoutEventsInput
  targetTask: TaskCreateOneInput
  targetWorkspace: WorkspaceCreateOneWithoutEventsInput
}

input EventCreateWithoutTargetJobInput {
  type: EventTypeEnum!
  actorType: EventActorTypeEnum!
  targetType: EventTargetTypeEnum!
  workspace: WorkspaceCreateOneInput!
  actorUser: UserCreateOneWithoutEventsInput
  actorCandidate: CandidateCreateOneInput
  targetCandidate: CandidateCreateOneWithoutEventsInput
  targetTask: TaskCreateOneInput
  targetWorkspace: WorkspaceCreateOneWithoutEventsInput
}

input EventCreateWithoutTargetWorkspaceInput {
  type: EventTypeEnum!
  actorType: EventActorTypeEnum!
  targetType: EventTargetTypeEnum!
  workspace: WorkspaceCreateOneInput!
  actorUser: UserCreateOneWithoutEventsInput
  actorCandidate: CandidateCreateOneInput
  targetCandidate: CandidateCreateOneWithoutEventsInput
  targetJob: JobCreateOneWithoutEventsInput
  targetTask: TaskCreateOneInput
}

"""An edge in a connection."""
type EventEdge {
  """The item at the end of the edge."""
  node: Event!

  """A cursor for use in pagination."""
  cursor: String!
}

enum EventOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  type_ASC
  type_DESC
  actorType_ASC
  actorType_DESC
  targetType_ASC
  targetType_DESC
}

type EventPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  type: EventTypeEnum!
  actorType: EventActorTypeEnum!
  targetType: EventTargetTypeEnum!
}

type EventSubscriptionPayload {
  mutation: MutationType!
  node: Event
  updatedFields: [String!]
  previousValues: EventPreviousValues
}

input EventSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [EventSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [EventSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EventSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: EventWhereInput
}

enum EventTargetTypeEnum {
  CANDIDATE
  JOB
  TASK
  WORKSPACE
}

enum EventTypeEnum {
  DEFAULT
  MESSAGE
  COMMENT_CREATE
  COMMENT_EDIT
  COMMENT_DELETE
}

input EventUpdateDataInput {
  type: EventTypeEnum
  actorType: EventActorTypeEnum
  targetType: EventTargetTypeEnum
  workspace: WorkspaceUpdateOneInput
  actorUser: UserUpdateOneWithoutEventsInput
  actorCandidate: CandidateUpdateOneInput
  targetCandidate: CandidateUpdateOneWithoutEventsInput
  targetJob: JobUpdateOneWithoutEventsInput
  targetTask: TaskUpdateOneInput
  targetWorkspace: WorkspaceUpdateOneWithoutEventsInput
}

input EventUpdateInput {
  type: EventTypeEnum
  actorType: EventActorTypeEnum
  targetType: EventTargetTypeEnum
  workspace: WorkspaceUpdateOneInput
  actorUser: UserUpdateOneWithoutEventsInput
  actorCandidate: CandidateUpdateOneInput
  targetCandidate: CandidateUpdateOneWithoutEventsInput
  targetJob: JobUpdateOneWithoutEventsInput
  targetTask: TaskUpdateOneInput
  targetWorkspace: WorkspaceUpdateOneWithoutEventsInput
}

input EventUpdateManyWithoutTargetCandidateInput {
  create: [EventCreateWithoutTargetCandidateInput!]
  connect: [EventWhereUniqueInput!]
  disconnect: [EventWhereUniqueInput!]
  delete: [EventWhereUniqueInput!]
  update: [EventUpdateWithWhereUniqueWithoutTargetCandidateInput!]
  upsert: [EventUpsertWithWhereUniqueWithoutTargetCandidateInput!]
}

input EventUpdateManyWithoutTargetJobInput {
  create: [EventCreateWithoutTargetJobInput!]
  connect: [EventWhereUniqueInput!]
  disconnect: [EventWhereUniqueInput!]
  delete: [EventWhereUniqueInput!]
  update: [EventUpdateWithWhereUniqueWithoutTargetJobInput!]
  upsert: [EventUpsertWithWhereUniqueWithoutTargetJobInput!]
}

input EventUpdateManyWithoutTargetWorkspaceInput {
  create: [EventCreateWithoutTargetWorkspaceInput!]
  connect: [EventWhereUniqueInput!]
  disconnect: [EventWhereUniqueInput!]
  delete: [EventWhereUniqueInput!]
  update: [EventUpdateWithWhereUniqueWithoutTargetWorkspaceInput!]
  upsert: [EventUpsertWithWhereUniqueWithoutTargetWorkspaceInput!]
}

input EventUpdateOneInput {
  create: EventCreateInput
  connect: EventWhereUniqueInput
  delete: Boolean
  update: EventUpdateDataInput
  upsert: EventUpsertNestedInput
}

input EventUpdateOneWithoutActorUserInput {
  create: EventCreateWithoutActorUserInput
  connect: EventWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: EventUpdateWithoutActorUserDataInput
  upsert: EventUpsertWithoutActorUserInput
}

input EventUpdateWithoutActorUserDataInput {
  type: EventTypeEnum
  actorType: EventActorTypeEnum
  targetType: EventTargetTypeEnum
  workspace: WorkspaceUpdateOneInput
  actorCandidate: CandidateUpdateOneInput
  targetCandidate: CandidateUpdateOneWithoutEventsInput
  targetJob: JobUpdateOneWithoutEventsInput
  targetTask: TaskUpdateOneInput
  targetWorkspace: WorkspaceUpdateOneWithoutEventsInput
}

input EventUpdateWithoutTargetCandidateDataInput {
  type: EventTypeEnum
  actorType: EventActorTypeEnum
  targetType: EventTargetTypeEnum
  workspace: WorkspaceUpdateOneInput
  actorUser: UserUpdateOneWithoutEventsInput
  actorCandidate: CandidateUpdateOneInput
  targetJob: JobUpdateOneWithoutEventsInput
  targetTask: TaskUpdateOneInput
  targetWorkspace: WorkspaceUpdateOneWithoutEventsInput
}

input EventUpdateWithoutTargetJobDataInput {
  type: EventTypeEnum
  actorType: EventActorTypeEnum
  targetType: EventTargetTypeEnum
  workspace: WorkspaceUpdateOneInput
  actorUser: UserUpdateOneWithoutEventsInput
  actorCandidate: CandidateUpdateOneInput
  targetCandidate: CandidateUpdateOneWithoutEventsInput
  targetTask: TaskUpdateOneInput
  targetWorkspace: WorkspaceUpdateOneWithoutEventsInput
}

input EventUpdateWithoutTargetWorkspaceDataInput {
  type: EventTypeEnum
  actorType: EventActorTypeEnum
  targetType: EventTargetTypeEnum
  workspace: WorkspaceUpdateOneInput
  actorUser: UserUpdateOneWithoutEventsInput
  actorCandidate: CandidateUpdateOneInput
  targetCandidate: CandidateUpdateOneWithoutEventsInput
  targetJob: JobUpdateOneWithoutEventsInput
  targetTask: TaskUpdateOneInput
}

input EventUpdateWithWhereUniqueWithoutTargetCandidateInput {
  where: EventWhereUniqueInput!
  data: EventUpdateWithoutTargetCandidateDataInput!
}

input EventUpdateWithWhereUniqueWithoutTargetJobInput {
  where: EventWhereUniqueInput!
  data: EventUpdateWithoutTargetJobDataInput!
}

input EventUpdateWithWhereUniqueWithoutTargetWorkspaceInput {
  where: EventWhereUniqueInput!
  data: EventUpdateWithoutTargetWorkspaceDataInput!
}

input EventUpsertNestedInput {
  update: EventUpdateDataInput!
  create: EventCreateInput!
}

input EventUpsertWithoutActorUserInput {
  update: EventUpdateWithoutActorUserDataInput!
  create: EventCreateWithoutActorUserInput!
}

input EventUpsertWithWhereUniqueWithoutTargetCandidateInput {
  where: EventWhereUniqueInput!
  update: EventUpdateWithoutTargetCandidateDataInput!
  create: EventCreateWithoutTargetCandidateInput!
}

input EventUpsertWithWhereUniqueWithoutTargetJobInput {
  where: EventWhereUniqueInput!
  update: EventUpdateWithoutTargetJobDataInput!
  create: EventCreateWithoutTargetJobInput!
}

input EventUpsertWithWhereUniqueWithoutTargetWorkspaceInput {
  where: EventWhereUniqueInput!
  update: EventUpdateWithoutTargetWorkspaceDataInput!
  create: EventCreateWithoutTargetWorkspaceInput!
}

input EventWhereInput {
  """Logical AND on all given filters."""
  AND: [EventWhereInput!]

  """Logical OR on all given filters."""
  OR: [EventWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EventWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  type: EventTypeEnum

  """All values that are not equal to given value."""
  type_not: EventTypeEnum

  """All values that are contained in given list."""
  type_in: [EventTypeEnum!]

  """All values that are not contained in given list."""
  type_not_in: [EventTypeEnum!]
  actorType: EventActorTypeEnum

  """All values that are not equal to given value."""
  actorType_not: EventActorTypeEnum

  """All values that are contained in given list."""
  actorType_in: [EventActorTypeEnum!]

  """All values that are not contained in given list."""
  actorType_not_in: [EventActorTypeEnum!]
  targetType: EventTargetTypeEnum

  """All values that are not equal to given value."""
  targetType_not: EventTargetTypeEnum

  """All values that are contained in given list."""
  targetType_in: [EventTargetTypeEnum!]

  """All values that are not contained in given list."""
  targetType_not_in: [EventTargetTypeEnum!]
  workspace: WorkspaceWhereInput
  actorUser: UserWhereInput
  actorCandidate: CandidateWhereInput
  targetCandidate: CandidateWhereInput
  targetJob: JobWhereInput
  targetTask: TaskWhereInput
  targetWorkspace: WorkspaceWhereInput
}

input EventWhereUniqueInput {
  id: ID
}

type Field implements Node {
  id: ID!
  type: FieldTypeEnum!
  label: String!
  value: String!
}

"""A connection to a list of items."""
type FieldConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [FieldEdge]!
  aggregate: AggregateField!
}

input FieldCreateInput {
  type: FieldTypeEnum!
  label: String!
  value: String!
}

input FieldCreateManyInput {
  create: [FieldCreateInput!]
  connect: [FieldWhereUniqueInput!]
}

"""An edge in a connection."""
type FieldEdge {
  """The item at the end of the edge."""
  node: Field!

  """A cursor for use in pagination."""
  cursor: String!
}

enum FieldOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  label_ASC
  label_DESC
  value_ASC
  value_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type FieldPreviousValues {
  id: ID!
  type: FieldTypeEnum!
  label: String!
  value: String!
}

type FieldSubscriptionPayload {
  mutation: MutationType!
  node: Field
  updatedFields: [String!]
  previousValues: FieldPreviousValues
}

input FieldSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [FieldSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [FieldSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FieldSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: FieldWhereInput
}

enum FieldTypeEnum {
  INT
  FLOAT
  STRING
  TEXT
  BOOLEAN
  DATE_TIME
}

input FieldUpdateDataInput {
  type: FieldTypeEnum
  label: String
  value: String
}

input FieldUpdateInput {
  type: FieldTypeEnum
  label: String
  value: String
}

input FieldUpdateManyInput {
  create: [FieldCreateInput!]
  connect: [FieldWhereUniqueInput!]
  disconnect: [FieldWhereUniqueInput!]
  delete: [FieldWhereUniqueInput!]
  update: [FieldUpdateWithWhereUniqueNestedInput!]
  upsert: [FieldUpsertWithWhereUniqueNestedInput!]
}

input FieldUpdateWithWhereUniqueNestedInput {
  where: FieldWhereUniqueInput!
  data: FieldUpdateDataInput!
}

input FieldUpsertWithWhereUniqueNestedInput {
  where: FieldWhereUniqueInput!
  update: FieldUpdateDataInput!
  create: FieldCreateInput!
}

input FieldWhereInput {
  """Logical AND on all given filters."""
  AND: [FieldWhereInput!]

  """Logical OR on all given filters."""
  OR: [FieldWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FieldWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  type: FieldTypeEnum

  """All values that are not equal to given value."""
  type_not: FieldTypeEnum

  """All values that are contained in given list."""
  type_in: [FieldTypeEnum!]

  """All values that are not contained in given list."""
  type_not_in: [FieldTypeEnum!]
  label: String

  """All values that are not equal to given value."""
  label_not: String

  """All values that are contained in given list."""
  label_in: [String!]

  """All values that are not contained in given list."""
  label_not_in: [String!]

  """All values less than the given value."""
  label_lt: String

  """All values less than or equal the given value."""
  label_lte: String

  """All values greater than the given value."""
  label_gt: String

  """All values greater than or equal the given value."""
  label_gte: String

  """All values containing the given string."""
  label_contains: String

  """All values not containing the given string."""
  label_not_contains: String

  """All values starting with the given string."""
  label_starts_with: String

  """All values not starting with the given string."""
  label_not_starts_with: String

  """All values ending with the given string."""
  label_ends_with: String

  """All values not ending with the given string."""
  label_not_ends_with: String
  value: String

  """All values that are not equal to given value."""
  value_not: String

  """All values that are contained in given list."""
  value_in: [String!]

  """All values that are not contained in given list."""
  value_not_in: [String!]

  """All values less than the given value."""
  value_lt: String

  """All values less than or equal the given value."""
  value_lte: String

  """All values greater than the given value."""
  value_gt: String

  """All values greater than or equal the given value."""
  value_gte: String

  """All values containing the given string."""
  value_contains: String

  """All values not containing the given string."""
  value_not_contains: String

  """All values starting with the given string."""
  value_starts_with: String

  """All values not starting with the given string."""
  value_not_starts_with: String

  """All values ending with the given string."""
  value_ends_with: String

  """All values not ending with the given string."""
  value_not_ends_with: String
}

input FieldWhereUniqueInput {
  id: ID
}

type Invite implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  workspace(where: WorkspaceWhereInput): Workspace!
  email: String!
  expireAt: DateTime!
  invitedBy(where: UserWhereInput): User!
}

"""A connection to a list of items."""
type InviteConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [InviteEdge]!
  aggregate: AggregateInvite!
}

input InviteCreateInput {
  email: String!
  expireAt: DateTime!
  workspace: WorkspaceCreateOneWithoutInvitesInput!
  invitedBy: UserCreateOneInput!
}

input InviteCreateManyWithoutWorkspaceInput {
  create: [InviteCreateWithoutWorkspaceInput!]
  connect: [InviteWhereUniqueInput!]
}

input InviteCreateWithoutWorkspaceInput {
  email: String!
  expireAt: DateTime!
  invitedBy: UserCreateOneInput!
}

"""An edge in a connection."""
type InviteEdge {
  """The item at the end of the edge."""
  node: Invite!

  """A cursor for use in pagination."""
  cursor: String!
}

enum InviteOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  email_ASC
  email_DESC
  expireAt_ASC
  expireAt_DESC
}

type InvitePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  expireAt: DateTime!
}

type InviteSubscriptionPayload {
  mutation: MutationType!
  node: Invite
  updatedFields: [String!]
  previousValues: InvitePreviousValues
}

input InviteSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [InviteSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [InviteSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [InviteSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: InviteWhereInput
}

input InviteUpdateInput {
  email: String
  expireAt: DateTime
  workspace: WorkspaceUpdateOneWithoutInvitesInput
  invitedBy: UserUpdateOneInput
}

input InviteUpdateManyWithoutWorkspaceInput {
  create: [InviteCreateWithoutWorkspaceInput!]
  connect: [InviteWhereUniqueInput!]
  disconnect: [InviteWhereUniqueInput!]
  delete: [InviteWhereUniqueInput!]
  update: [InviteUpdateWithWhereUniqueWithoutWorkspaceInput!]
  upsert: [InviteUpsertWithWhereUniqueWithoutWorkspaceInput!]
}

input InviteUpdateWithoutWorkspaceDataInput {
  email: String
  expireAt: DateTime
  invitedBy: UserUpdateOneInput
}

input InviteUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: InviteWhereUniqueInput!
  data: InviteUpdateWithoutWorkspaceDataInput!
}

input InviteUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: InviteWhereUniqueInput!
  update: InviteUpdateWithoutWorkspaceDataInput!
  create: InviteCreateWithoutWorkspaceInput!
}

input InviteWhereInput {
  """Logical AND on all given filters."""
  AND: [InviteWhereInput!]

  """Logical OR on all given filters."""
  OR: [InviteWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [InviteWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  expireAt: DateTime

  """All values that are not equal to given value."""
  expireAt_not: DateTime

  """All values that are contained in given list."""
  expireAt_in: [DateTime!]

  """All values that are not contained in given list."""
  expireAt_not_in: [DateTime!]

  """All values less than the given value."""
  expireAt_lt: DateTime

  """All values less than or equal the given value."""
  expireAt_lte: DateTime

  """All values greater than the given value."""
  expireAt_gt: DateTime

  """All values greater than or equal the given value."""
  expireAt_gte: DateTime
  workspace: WorkspaceWhereInput
  invitedBy: UserWhereInput
}

input InviteWhereUniqueInput {
  id: ID
}

type Job implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  workspace(where: WorkspaceWhereInput): Workspace!
  subscribers(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
  applications(where: ApplicationWhereInput, orderBy: ApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Application!]
  stages(where: StageWhereInput, orderBy: StageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stage!]
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  status: JobType!
  title: String!
  department: String
  location(where: LocationWhereInput): Location
  description: String
  requirements: String
}

"""A connection to a list of items."""
type JobConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [JobEdge]!
  aggregate: AggregateJob!
}

input JobCreateInput {
  status: JobType!
  title: String!
  department: String
  description: String
  requirements: String
  workspace: WorkspaceCreateOneWithoutJobsInput!
  subscribers: UserCreateManyWithoutSubscriptionJobsInput
  events: EventCreateManyWithoutTargetJobInput
  applications: ApplicationCreateManyWithoutJobInput
  stages: StageCreateManyInput
  comments: CommentCreateManyInput
  location: LocationCreateOneInput
}

input JobCreateManyWithoutSubscribersInput {
  create: [JobCreateWithoutSubscribersInput!]
  connect: [JobWhereUniqueInput!]
}

input JobCreateManyWithoutWorkspaceInput {
  create: [JobCreateWithoutWorkspaceInput!]
  connect: [JobWhereUniqueInput!]
}

input JobCreateOneInput {
  create: JobCreateInput
  connect: JobWhereUniqueInput
}

input JobCreateOneWithoutApplicationsInput {
  create: JobCreateWithoutApplicationsInput
  connect: JobWhereUniqueInput
}

input JobCreateOneWithoutEventsInput {
  create: JobCreateWithoutEventsInput
  connect: JobWhereUniqueInput
}

input JobCreateWithoutApplicationsInput {
  status: JobType!
  title: String!
  department: String
  description: String
  requirements: String
  workspace: WorkspaceCreateOneWithoutJobsInput!
  subscribers: UserCreateManyWithoutSubscriptionJobsInput
  events: EventCreateManyWithoutTargetJobInput
  stages: StageCreateManyInput
  comments: CommentCreateManyInput
  location: LocationCreateOneInput
}

input JobCreateWithoutEventsInput {
  status: JobType!
  title: String!
  department: String
  description: String
  requirements: String
  workspace: WorkspaceCreateOneWithoutJobsInput!
  subscribers: UserCreateManyWithoutSubscriptionJobsInput
  applications: ApplicationCreateManyWithoutJobInput
  stages: StageCreateManyInput
  comments: CommentCreateManyInput
  location: LocationCreateOneInput
}

input JobCreateWithoutSubscribersInput {
  status: JobType!
  title: String!
  department: String
  description: String
  requirements: String
  workspace: WorkspaceCreateOneWithoutJobsInput!
  events: EventCreateManyWithoutTargetJobInput
  applications: ApplicationCreateManyWithoutJobInput
  stages: StageCreateManyInput
  comments: CommentCreateManyInput
  location: LocationCreateOneInput
}

input JobCreateWithoutWorkspaceInput {
  status: JobType!
  title: String!
  department: String
  description: String
  requirements: String
  subscribers: UserCreateManyWithoutSubscriptionJobsInput
  events: EventCreateManyWithoutTargetJobInput
  applications: ApplicationCreateManyWithoutJobInput
  stages: StageCreateManyInput
  comments: CommentCreateManyInput
  location: LocationCreateOneInput
}

"""An edge in a connection."""
type JobEdge {
  """The item at the end of the edge."""
  node: Job!

  """A cursor for use in pagination."""
  cursor: String!
}

enum JobOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  status_ASC
  status_DESC
  title_ASC
  title_DESC
  department_ASC
  department_DESC
  description_ASC
  description_DESC
  requirements_ASC
  requirements_DESC
}

type JobPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  status: JobType!
  title: String!
  department: String
  description: String
  requirements: String
}

type JobSubscriptionPayload {
  mutation: MutationType!
  node: Job
  updatedFields: [String!]
  previousValues: JobPreviousValues
}

input JobSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [JobSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [JobSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [JobSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: JobWhereInput
}

enum JobType {
  DRAFT
  PUBLISHED
  ARCHIVED
}

input JobUpdateDataInput {
  status: JobType
  title: String
  department: String
  description: String
  requirements: String
  workspace: WorkspaceUpdateOneWithoutJobsInput
  subscribers: UserUpdateManyWithoutSubscriptionJobsInput
  events: EventUpdateManyWithoutTargetJobInput
  applications: ApplicationUpdateManyWithoutJobInput
  stages: StageUpdateManyInput
  comments: CommentUpdateManyInput
  location: LocationUpdateOneInput
}

input JobUpdateInput {
  status: JobType
  title: String
  department: String
  description: String
  requirements: String
  workspace: WorkspaceUpdateOneWithoutJobsInput
  subscribers: UserUpdateManyWithoutSubscriptionJobsInput
  events: EventUpdateManyWithoutTargetJobInput
  applications: ApplicationUpdateManyWithoutJobInput
  stages: StageUpdateManyInput
  comments: CommentUpdateManyInput
  location: LocationUpdateOneInput
}

input JobUpdateManyWithoutSubscribersInput {
  create: [JobCreateWithoutSubscribersInput!]
  connect: [JobWhereUniqueInput!]
  disconnect: [JobWhereUniqueInput!]
  delete: [JobWhereUniqueInput!]
  update: [JobUpdateWithWhereUniqueWithoutSubscribersInput!]
  upsert: [JobUpsertWithWhereUniqueWithoutSubscribersInput!]
}

input JobUpdateManyWithoutWorkspaceInput {
  create: [JobCreateWithoutWorkspaceInput!]
  connect: [JobWhereUniqueInput!]
  disconnect: [JobWhereUniqueInput!]
  delete: [JobWhereUniqueInput!]
  update: [JobUpdateWithWhereUniqueWithoutWorkspaceInput!]
  upsert: [JobUpsertWithWhereUniqueWithoutWorkspaceInput!]
}

input JobUpdateOneInput {
  create: JobCreateInput
  connect: JobWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: JobUpdateDataInput
  upsert: JobUpsertNestedInput
}

input JobUpdateOneWithoutApplicationsInput {
  create: JobCreateWithoutApplicationsInput
  connect: JobWhereUniqueInput
  delete: Boolean
  update: JobUpdateWithoutApplicationsDataInput
  upsert: JobUpsertWithoutApplicationsInput
}

input JobUpdateOneWithoutEventsInput {
  create: JobCreateWithoutEventsInput
  connect: JobWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: JobUpdateWithoutEventsDataInput
  upsert: JobUpsertWithoutEventsInput
}

input JobUpdateWithoutApplicationsDataInput {
  status: JobType
  title: String
  department: String
  description: String
  requirements: String
  workspace: WorkspaceUpdateOneWithoutJobsInput
  subscribers: UserUpdateManyWithoutSubscriptionJobsInput
  events: EventUpdateManyWithoutTargetJobInput
  stages: StageUpdateManyInput
  comments: CommentUpdateManyInput
  location: LocationUpdateOneInput
}

input JobUpdateWithoutEventsDataInput {
  status: JobType
  title: String
  department: String
  description: String
  requirements: String
  workspace: WorkspaceUpdateOneWithoutJobsInput
  subscribers: UserUpdateManyWithoutSubscriptionJobsInput
  applications: ApplicationUpdateManyWithoutJobInput
  stages: StageUpdateManyInput
  comments: CommentUpdateManyInput
  location: LocationUpdateOneInput
}

input JobUpdateWithoutSubscribersDataInput {
  status: JobType
  title: String
  department: String
  description: String
  requirements: String
  workspace: WorkspaceUpdateOneWithoutJobsInput
  events: EventUpdateManyWithoutTargetJobInput
  applications: ApplicationUpdateManyWithoutJobInput
  stages: StageUpdateManyInput
  comments: CommentUpdateManyInput
  location: LocationUpdateOneInput
}

input JobUpdateWithoutWorkspaceDataInput {
  status: JobType
  title: String
  department: String
  description: String
  requirements: String
  subscribers: UserUpdateManyWithoutSubscriptionJobsInput
  events: EventUpdateManyWithoutTargetJobInput
  applications: ApplicationUpdateManyWithoutJobInput
  stages: StageUpdateManyInput
  comments: CommentUpdateManyInput
  location: LocationUpdateOneInput
}

input JobUpdateWithWhereUniqueWithoutSubscribersInput {
  where: JobWhereUniqueInput!
  data: JobUpdateWithoutSubscribersDataInput!
}

input JobUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: JobWhereUniqueInput!
  data: JobUpdateWithoutWorkspaceDataInput!
}

input JobUpsertNestedInput {
  update: JobUpdateDataInput!
  create: JobCreateInput!
}

input JobUpsertWithoutApplicationsInput {
  update: JobUpdateWithoutApplicationsDataInput!
  create: JobCreateWithoutApplicationsInput!
}

input JobUpsertWithoutEventsInput {
  update: JobUpdateWithoutEventsDataInput!
  create: JobCreateWithoutEventsInput!
}

input JobUpsertWithWhereUniqueWithoutSubscribersInput {
  where: JobWhereUniqueInput!
  update: JobUpdateWithoutSubscribersDataInput!
  create: JobCreateWithoutSubscribersInput!
}

input JobUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: JobWhereUniqueInput!
  update: JobUpdateWithoutWorkspaceDataInput!
  create: JobCreateWithoutWorkspaceInput!
}

input JobWhereInput {
  """Logical AND on all given filters."""
  AND: [JobWhereInput!]

  """Logical OR on all given filters."""
  OR: [JobWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [JobWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  status: JobType

  """All values that are not equal to given value."""
  status_not: JobType

  """All values that are contained in given list."""
  status_in: [JobType!]

  """All values that are not contained in given list."""
  status_not_in: [JobType!]
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  department: String

  """All values that are not equal to given value."""
  department_not: String

  """All values that are contained in given list."""
  department_in: [String!]

  """All values that are not contained in given list."""
  department_not_in: [String!]

  """All values less than the given value."""
  department_lt: String

  """All values less than or equal the given value."""
  department_lte: String

  """All values greater than the given value."""
  department_gt: String

  """All values greater than or equal the given value."""
  department_gte: String

  """All values containing the given string."""
  department_contains: String

  """All values not containing the given string."""
  department_not_contains: String

  """All values starting with the given string."""
  department_starts_with: String

  """All values not starting with the given string."""
  department_not_starts_with: String

  """All values ending with the given string."""
  department_ends_with: String

  """All values not ending with the given string."""
  department_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  requirements: String

  """All values that are not equal to given value."""
  requirements_not: String

  """All values that are contained in given list."""
  requirements_in: [String!]

  """All values that are not contained in given list."""
  requirements_not_in: [String!]

  """All values less than the given value."""
  requirements_lt: String

  """All values less than or equal the given value."""
  requirements_lte: String

  """All values greater than the given value."""
  requirements_gt: String

  """All values greater than or equal the given value."""
  requirements_gte: String

  """All values containing the given string."""
  requirements_contains: String

  """All values not containing the given string."""
  requirements_not_contains: String

  """All values starting with the given string."""
  requirements_starts_with: String

  """All values not starting with the given string."""
  requirements_not_starts_with: String

  """All values ending with the given string."""
  requirements_ends_with: String

  """All values not ending with the given string."""
  requirements_not_ends_with: String
  workspace: WorkspaceWhereInput
  subscribers_every: UserWhereInput
  subscribers_some: UserWhereInput
  subscribers_none: UserWhereInput
  events_every: EventWhereInput
  events_some: EventWhereInput
  events_none: EventWhereInput
  applications_every: ApplicationWhereInput
  applications_some: ApplicationWhereInput
  applications_none: ApplicationWhereInput
  stages_every: StageWhereInput
  stages_some: StageWhereInput
  stages_none: StageWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  location: LocationWhereInput
}

input JobWhereUniqueInput {
  id: ID
}

type Location implements Node {
  id: ID!
  country: String!
  region: String!
  city: String!
  zip: String!
}

"""A connection to a list of items."""
type LocationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LocationEdge]!
  aggregate: AggregateLocation!
}

input LocationCreateInput {
  country: String!
  region: String!
  city: String!
  zip: String!
}

input LocationCreateOneInput {
  create: LocationCreateInput
  connect: LocationWhereUniqueInput
}

"""An edge in a connection."""
type LocationEdge {
  """The item at the end of the edge."""
  node: Location!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LocationOrderByInput {
  id_ASC
  id_DESC
  country_ASC
  country_DESC
  region_ASC
  region_DESC
  city_ASC
  city_DESC
  zip_ASC
  zip_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type LocationPreviousValues {
  id: ID!
  country: String!
  region: String!
  city: String!
  zip: String!
}

type LocationSubscriptionPayload {
  mutation: MutationType!
  node: Location
  updatedFields: [String!]
  previousValues: LocationPreviousValues
}

input LocationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LocationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LocationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LocationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LocationWhereInput
}

input LocationUpdateDataInput {
  country: String
  region: String
  city: String
  zip: String
}

input LocationUpdateInput {
  country: String
  region: String
  city: String
  zip: String
}

input LocationUpdateOneInput {
  create: LocationCreateInput
  connect: LocationWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: LocationUpdateDataInput
  upsert: LocationUpsertNestedInput
}

input LocationUpsertNestedInput {
  update: LocationUpdateDataInput!
  create: LocationCreateInput!
}

input LocationWhereInput {
  """Logical AND on all given filters."""
  AND: [LocationWhereInput!]

  """Logical OR on all given filters."""
  OR: [LocationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LocationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  country: String

  """All values that are not equal to given value."""
  country_not: String

  """All values that are contained in given list."""
  country_in: [String!]

  """All values that are not contained in given list."""
  country_not_in: [String!]

  """All values less than the given value."""
  country_lt: String

  """All values less than or equal the given value."""
  country_lte: String

  """All values greater than the given value."""
  country_gt: String

  """All values greater than or equal the given value."""
  country_gte: String

  """All values containing the given string."""
  country_contains: String

  """All values not containing the given string."""
  country_not_contains: String

  """All values starting with the given string."""
  country_starts_with: String

  """All values not starting with the given string."""
  country_not_starts_with: String

  """All values ending with the given string."""
  country_ends_with: String

  """All values not ending with the given string."""
  country_not_ends_with: String
  region: String

  """All values that are not equal to given value."""
  region_not: String

  """All values that are contained in given list."""
  region_in: [String!]

  """All values that are not contained in given list."""
  region_not_in: [String!]

  """All values less than the given value."""
  region_lt: String

  """All values less than or equal the given value."""
  region_lte: String

  """All values greater than the given value."""
  region_gt: String

  """All values greater than or equal the given value."""
  region_gte: String

  """All values containing the given string."""
  region_contains: String

  """All values not containing the given string."""
  region_not_contains: String

  """All values starting with the given string."""
  region_starts_with: String

  """All values not starting with the given string."""
  region_not_starts_with: String

  """All values ending with the given string."""
  region_ends_with: String

  """All values not ending with the given string."""
  region_not_ends_with: String
  city: String

  """All values that are not equal to given value."""
  city_not: String

  """All values that are contained in given list."""
  city_in: [String!]

  """All values that are not contained in given list."""
  city_not_in: [String!]

  """All values less than the given value."""
  city_lt: String

  """All values less than or equal the given value."""
  city_lte: String

  """All values greater than the given value."""
  city_gt: String

  """All values greater than or equal the given value."""
  city_gte: String

  """All values containing the given string."""
  city_contains: String

  """All values not containing the given string."""
  city_not_contains: String

  """All values starting with the given string."""
  city_starts_with: String

  """All values not starting with the given string."""
  city_not_starts_with: String

  """All values ending with the given string."""
  city_ends_with: String

  """All values not ending with the given string."""
  city_not_ends_with: String
  zip: String

  """All values that are not equal to given value."""
  zip_not: String

  """All values that are contained in given list."""
  zip_in: [String!]

  """All values that are not contained in given list."""
  zip_not_in: [String!]

  """All values less than the given value."""
  zip_lt: String

  """All values less than or equal the given value."""
  zip_lte: String

  """All values greater than the given value."""
  zip_gt: String

  """All values greater than or equal the given value."""
  zip_gte: String

  """All values containing the given string."""
  zip_contains: String

  """All values not containing the given string."""
  zip_not_contains: String

  """All values starting with the given string."""
  zip_starts_with: String

  """All values not starting with the given string."""
  zip_not_starts_with: String

  """All values ending with the given string."""
  zip_ends_with: String

  """All values not ending with the given string."""
  zip_not_ends_with: String
}

input LocationWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createApplication(data: ApplicationCreateInput!): Application!
  createInvite(data: InviteCreateInput!): Invite!
  createNotification(data: NotificationCreateInput!): Notification!
  createLocation(data: LocationCreateInput!): Location!
  createCandidate(data: CandidateCreateInput!): Candidate!
  createUser(data: UserCreateInput!): User!
  createEvent(data: EventCreateInput!): Event!
  createStage(data: StageCreateInput!): Stage!
  createWorkspace(data: WorkspaceCreateInput!): Workspace!
  createJob(data: JobCreateInput!): Job!
  createTask(data: TaskCreateInput!): Task!
  createTag(data: TagCreateInput!): Tag!
  createField(data: FieldCreateInput!): Field!
  createComment(data: CommentCreateInput!): Comment!
  updateApplication(data: ApplicationUpdateInput!, where: ApplicationWhereUniqueInput!): Application
  updateInvite(data: InviteUpdateInput!, where: InviteWhereUniqueInput!): Invite
  updateNotification(data: NotificationUpdateInput!, where: NotificationWhereUniqueInput!): Notification
  updateLocation(data: LocationUpdateInput!, where: LocationWhereUniqueInput!): Location
  updateCandidate(data: CandidateUpdateInput!, where: CandidateWhereUniqueInput!): Candidate
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateEvent(data: EventUpdateInput!, where: EventWhereUniqueInput!): Event
  updateStage(data: StageUpdateInput!, where: StageWhereUniqueInput!): Stage
  updateWorkspace(data: WorkspaceUpdateInput!, where: WorkspaceWhereUniqueInput!): Workspace
  updateJob(data: JobUpdateInput!, where: JobWhereUniqueInput!): Job
  updateTask(data: TaskUpdateInput!, where: TaskWhereUniqueInput!): Task
  updateTag(data: TagUpdateInput!, where: TagWhereUniqueInput!): Tag
  updateField(data: FieldUpdateInput!, where: FieldWhereUniqueInput!): Field
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  deleteApplication(where: ApplicationWhereUniqueInput!): Application
  deleteInvite(where: InviteWhereUniqueInput!): Invite
  deleteNotification(where: NotificationWhereUniqueInput!): Notification
  deleteLocation(where: LocationWhereUniqueInput!): Location
  deleteCandidate(where: CandidateWhereUniqueInput!): Candidate
  deleteUser(where: UserWhereUniqueInput!): User
  deleteEvent(where: EventWhereUniqueInput!): Event
  deleteStage(where: StageWhereUniqueInput!): Stage
  deleteWorkspace(where: WorkspaceWhereUniqueInput!): Workspace
  deleteJob(where: JobWhereUniqueInput!): Job
  deleteTask(where: TaskWhereUniqueInput!): Task
  deleteTag(where: TagWhereUniqueInput!): Tag
  deleteField(where: FieldWhereUniqueInput!): Field
  deleteComment(where: CommentWhereUniqueInput!): Comment
  upsertApplication(where: ApplicationWhereUniqueInput!, create: ApplicationCreateInput!, update: ApplicationUpdateInput!): Application!
  upsertInvite(where: InviteWhereUniqueInput!, create: InviteCreateInput!, update: InviteUpdateInput!): Invite!
  upsertNotification(where: NotificationWhereUniqueInput!, create: NotificationCreateInput!, update: NotificationUpdateInput!): Notification!
  upsertLocation(where: LocationWhereUniqueInput!, create: LocationCreateInput!, update: LocationUpdateInput!): Location!
  upsertCandidate(where: CandidateWhereUniqueInput!, create: CandidateCreateInput!, update: CandidateUpdateInput!): Candidate!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertEvent(where: EventWhereUniqueInput!, create: EventCreateInput!, update: EventUpdateInput!): Event!
  upsertStage(where: StageWhereUniqueInput!, create: StageCreateInput!, update: StageUpdateInput!): Stage!
  upsertWorkspace(where: WorkspaceWhereUniqueInput!, create: WorkspaceCreateInput!, update: WorkspaceUpdateInput!): Workspace!
  upsertJob(where: JobWhereUniqueInput!, create: JobCreateInput!, update: JobUpdateInput!): Job!
  upsertTask(where: TaskWhereUniqueInput!, create: TaskCreateInput!, update: TaskUpdateInput!): Task!
  upsertTag(where: TagWhereUniqueInput!, create: TagCreateInput!, update: TagUpdateInput!): Tag!
  upsertField(where: FieldWhereUniqueInput!, create: FieldCreateInput!, update: FieldUpdateInput!): Field!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  updateManyApplications(data: ApplicationUpdateInput!, where: ApplicationWhereInput): BatchPayload!
  updateManyInvites(data: InviteUpdateInput!, where: InviteWhereInput): BatchPayload!
  updateManyNotifications(data: NotificationUpdateInput!, where: NotificationWhereInput): BatchPayload!
  updateManyLocations(data: LocationUpdateInput!, where: LocationWhereInput): BatchPayload!
  updateManyCandidates(data: CandidateUpdateInput!, where: CandidateWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyEvents(data: EventUpdateInput!, where: EventWhereInput): BatchPayload!
  updateManyStages(data: StageUpdateInput!, where: StageWhereInput): BatchPayload!
  updateManyWorkspaces(data: WorkspaceUpdateInput!, where: WorkspaceWhereInput): BatchPayload!
  updateManyJobs(data: JobUpdateInput!, where: JobWhereInput): BatchPayload!
  updateManyTasks(data: TaskUpdateInput!, where: TaskWhereInput): BatchPayload!
  updateManyTags(data: TagUpdateInput!, where: TagWhereInput): BatchPayload!
  updateManyFields(data: FieldUpdateInput!, where: FieldWhereInput): BatchPayload!
  updateManyComments(data: CommentUpdateInput!, where: CommentWhereInput): BatchPayload!
  deleteManyApplications(where: ApplicationWhereInput): BatchPayload!
  deleteManyInvites(where: InviteWhereInput): BatchPayload!
  deleteManyNotifications(where: NotificationWhereInput): BatchPayload!
  deleteManyLocations(where: LocationWhereInput): BatchPayload!
  deleteManyCandidates(where: CandidateWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyEvents(where: EventWhereInput): BatchPayload!
  deleteManyStages(where: StageWhereInput): BatchPayload!
  deleteManyWorkspaces(where: WorkspaceWhereInput): BatchPayload!
  deleteManyJobs(where: JobWhereInput): BatchPayload!
  deleteManyTasks(where: TaskWhereInput): BatchPayload!
  deleteManyTags(where: TagWhereInput): BatchPayload!
  deleteManyFields(where: FieldWhereInput): BatchPayload!
  deleteManyComments(where: CommentWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

type Notification implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  status: NotificationStatusEnum!
  user(where: UserWhereInput): User!
  event(where: EventWhereInput): Event!
}

"""A connection to a list of items."""
type NotificationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [NotificationEdge]!
  aggregate: AggregateNotification!
}

input NotificationCreateInput {
  status: NotificationStatusEnum!
  user: UserCreateOneWithoutNotificationsInput!
  event: EventCreateOneInput!
}

input NotificationCreateManyWithoutUserInput {
  create: [NotificationCreateWithoutUserInput!]
  connect: [NotificationWhereUniqueInput!]
}

input NotificationCreateWithoutUserInput {
  status: NotificationStatusEnum!
  event: EventCreateOneInput!
}

"""An edge in a connection."""
type NotificationEdge {
  """The item at the end of the edge."""
  node: Notification!

  """A cursor for use in pagination."""
  cursor: String!
}

enum NotificationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  status_ASC
  status_DESC
}

type NotificationPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  status: NotificationStatusEnum!
}

enum NotificationStatusEnum {
  NEW
  UNREAD
  READ
}

type NotificationSubscriptionPayload {
  mutation: MutationType!
  node: Notification
  updatedFields: [String!]
  previousValues: NotificationPreviousValues
}

input NotificationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [NotificationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [NotificationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NotificationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: NotificationWhereInput
}

input NotificationUpdateInput {
  status: NotificationStatusEnum
  user: UserUpdateOneWithoutNotificationsInput
  event: EventUpdateOneInput
}

input NotificationUpdateManyWithoutUserInput {
  create: [NotificationCreateWithoutUserInput!]
  connect: [NotificationWhereUniqueInput!]
  disconnect: [NotificationWhereUniqueInput!]
  delete: [NotificationWhereUniqueInput!]
  update: [NotificationUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [NotificationUpsertWithWhereUniqueWithoutUserInput!]
}

input NotificationUpdateWithoutUserDataInput {
  status: NotificationStatusEnum
  event: EventUpdateOneInput
}

input NotificationUpdateWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput!
  data: NotificationUpdateWithoutUserDataInput!
}

input NotificationUpsertWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput!
  update: NotificationUpdateWithoutUserDataInput!
  create: NotificationCreateWithoutUserInput!
}

input NotificationWhereInput {
  """Logical AND on all given filters."""
  AND: [NotificationWhereInput!]

  """Logical OR on all given filters."""
  OR: [NotificationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NotificationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  status: NotificationStatusEnum

  """All values that are not equal to given value."""
  status_not: NotificationStatusEnum

  """All values that are contained in given list."""
  status_in: [NotificationStatusEnum!]

  """All values that are not contained in given list."""
  status_not_in: [NotificationStatusEnum!]
  user: UserWhereInput
  event: EventWhereInput
}

input NotificationWhereUniqueInput {
  id: ID
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  applications(where: ApplicationWhereInput, orderBy: ApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Application]!
  invites(where: InviteWhereInput, orderBy: InviteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invite]!
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification]!
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  candidates(where: CandidateWhereInput, orderBy: CandidateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Candidate]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event]!
  stages(where: StageWhereInput, orderBy: StageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stage]!
  workspaces(where: WorkspaceWhereInput, orderBy: WorkspaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Workspace]!
  jobs(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Job]!
  tasks(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Task]!
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag]!
  fields(where: FieldWhereInput, orderBy: FieldOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Field]!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  application(where: ApplicationWhereUniqueInput!): Application
  invite(where: InviteWhereUniqueInput!): Invite
  notification(where: NotificationWhereUniqueInput!): Notification
  location(where: LocationWhereUniqueInput!): Location
  candidate(where: CandidateWhereUniqueInput!): Candidate
  user(where: UserWhereUniqueInput!): User
  event(where: EventWhereUniqueInput!): Event
  stage(where: StageWhereUniqueInput!): Stage
  workspace(where: WorkspaceWhereUniqueInput!): Workspace
  job(where: JobWhereUniqueInput!): Job
  task(where: TaskWhereUniqueInput!): Task
  tag(where: TagWhereUniqueInput!): Tag
  field(where: FieldWhereUniqueInput!): Field
  comment(where: CommentWhereUniqueInput!): Comment
  applicationsConnection(where: ApplicationWhereInput, orderBy: ApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ApplicationConnection!
  invitesConnection(where: InviteWhereInput, orderBy: InviteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): InviteConnection!
  notificationsConnection(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NotificationConnection!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  candidatesConnection(where: CandidateWhereInput, orderBy: CandidateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CandidateConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  eventsConnection(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventConnection!
  stagesConnection(where: StageWhereInput, orderBy: StageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StageConnection!
  workspacesConnection(where: WorkspaceWhereInput, orderBy: WorkspaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WorkspaceConnection!
  jobsConnection(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): JobConnection!
  tasksConnection(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TaskConnection!
  tagsConnection(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TagConnection!
  fieldsConnection(where: FieldWhereInput, orderBy: FieldOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FieldConnection!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Stage implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  description: String
  position: Int!
  type: StageTypeEnum!
}

"""A connection to a list of items."""
type StageConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [StageEdge]!
  aggregate: AggregateStage!
}

input StageCreateInput {
  name: String!
  description: String
  position: Int!
  type: StageTypeEnum!
}

input StageCreateManyInput {
  create: [StageCreateInput!]
  connect: [StageWhereUniqueInput!]
}

input StageCreateOneInput {
  create: StageCreateInput
  connect: StageWhereUniqueInput
}

"""An edge in a connection."""
type StageEdge {
  """The item at the end of the edge."""
  node: Stage!

  """A cursor for use in pagination."""
  cursor: String!
}

enum StageOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  position_ASC
  position_DESC
  type_ASC
  type_DESC
}

type StagePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  description: String
  position: Int!
  type: StageTypeEnum!
}

type StageSubscriptionPayload {
  mutation: MutationType!
  node: Stage
  updatedFields: [String!]
  previousValues: StagePreviousValues
}

input StageSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [StageSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [StageSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [StageSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: StageWhereInput
}

enum StageTypeEnum {
  NEW
  QUALIFIED
  DISQUALIFIED
}

input StageUpdateDataInput {
  name: String
  description: String
  position: Int
  type: StageTypeEnum
}

input StageUpdateInput {
  name: String
  description: String
  position: Int
  type: StageTypeEnum
}

input StageUpdateManyInput {
  create: [StageCreateInput!]
  connect: [StageWhereUniqueInput!]
  disconnect: [StageWhereUniqueInput!]
  delete: [StageWhereUniqueInput!]
  update: [StageUpdateWithWhereUniqueNestedInput!]
  upsert: [StageUpsertWithWhereUniqueNestedInput!]
}

input StageUpdateOneInput {
  create: StageCreateInput
  connect: StageWhereUniqueInput
  delete: Boolean
  update: StageUpdateDataInput
  upsert: StageUpsertNestedInput
}

input StageUpdateWithWhereUniqueNestedInput {
  where: StageWhereUniqueInput!
  data: StageUpdateDataInput!
}

input StageUpsertNestedInput {
  update: StageUpdateDataInput!
  create: StageCreateInput!
}

input StageUpsertWithWhereUniqueNestedInput {
  where: StageWhereUniqueInput!
  update: StageUpdateDataInput!
  create: StageCreateInput!
}

input StageWhereInput {
  """Logical AND on all given filters."""
  AND: [StageWhereInput!]

  """Logical OR on all given filters."""
  OR: [StageWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [StageWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  position: Int

  """All values that are not equal to given value."""
  position_not: Int

  """All values that are contained in given list."""
  position_in: [Int!]

  """All values that are not contained in given list."""
  position_not_in: [Int!]

  """All values less than the given value."""
  position_lt: Int

  """All values less than or equal the given value."""
  position_lte: Int

  """All values greater than the given value."""
  position_gt: Int

  """All values greater than or equal the given value."""
  position_gte: Int
  type: StageTypeEnum

  """All values that are not equal to given value."""
  type_not: StageTypeEnum

  """All values that are contained in given list."""
  type_in: [StageTypeEnum!]

  """All values that are not contained in given list."""
  type_not_in: [StageTypeEnum!]
}

input StageWhereUniqueInput {
  id: ID
}

type Subscription {
  application(where: ApplicationSubscriptionWhereInput): ApplicationSubscriptionPayload
  invite(where: InviteSubscriptionWhereInput): InviteSubscriptionPayload
  notification(where: NotificationSubscriptionWhereInput): NotificationSubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  candidate(where: CandidateSubscriptionWhereInput): CandidateSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  event(where: EventSubscriptionWhereInput): EventSubscriptionPayload
  stage(where: StageSubscriptionWhereInput): StageSubscriptionPayload
  workspace(where: WorkspaceSubscriptionWhereInput): WorkspaceSubscriptionPayload
  job(where: JobSubscriptionWhereInput): JobSubscriptionPayload
  task(where: TaskSubscriptionWhereInput): TaskSubscriptionPayload
  tag(where: TagSubscriptionWhereInput): TagSubscriptionPayload
  field(where: FieldSubscriptionWhereInput): FieldSubscriptionPayload
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
}

type Tag implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  label: String!
}

"""A connection to a list of items."""
type TagConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TagEdge]!
  aggregate: AggregateTag!
}

input TagCreateInput {
  label: String!
}

input TagCreateManyInput {
  create: [TagCreateInput!]
  connect: [TagWhereUniqueInput!]
}

"""An edge in a connection."""
type TagEdge {
  """The item at the end of the edge."""
  node: Tag!

  """A cursor for use in pagination."""
  cursor: String!
}

enum TagOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  label_ASC
  label_DESC
}

type TagPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  label: String!
}

type TagSubscriptionPayload {
  mutation: MutationType!
  node: Tag
  updatedFields: [String!]
  previousValues: TagPreviousValues
}

input TagSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TagSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TagSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TagSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: TagWhereInput
}

input TagUpdateDataInput {
  label: String
}

input TagUpdateInput {
  label: String
}

input TagUpdateManyInput {
  create: [TagCreateInput!]
  connect: [TagWhereUniqueInput!]
  disconnect: [TagWhereUniqueInput!]
  delete: [TagWhereUniqueInput!]
  update: [TagUpdateWithWhereUniqueNestedInput!]
  upsert: [TagUpsertWithWhereUniqueNestedInput!]
}

input TagUpdateWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput!
  data: TagUpdateDataInput!
}

input TagUpsertWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput!
  update: TagUpdateDataInput!
  create: TagCreateInput!
}

input TagWhereInput {
  """Logical AND on all given filters."""
  AND: [TagWhereInput!]

  """Logical OR on all given filters."""
  OR: [TagWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TagWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  label: String

  """All values that are not equal to given value."""
  label_not: String

  """All values that are contained in given list."""
  label_in: [String!]

  """All values that are not contained in given list."""
  label_not_in: [String!]

  """All values less than the given value."""
  label_lt: String

  """All values less than or equal the given value."""
  label_lte: String

  """All values greater than the given value."""
  label_gt: String

  """All values greater than or equal the given value."""
  label_gte: String

  """All values containing the given string."""
  label_contains: String

  """All values not containing the given string."""
  label_not_contains: String

  """All values starting with the given string."""
  label_starts_with: String

  """All values not starting with the given string."""
  label_not_starts_with: String

  """All values ending with the given string."""
  label_ends_with: String

  """All values not ending with the given string."""
  label_not_ends_with: String
}

input TagWhereUniqueInput {
  id: ID
}

type Task implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  workspace(where: WorkspaceWhereInput): Workspace!
  subscribers(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  owners(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  targetType: TaskTargetEnum
  job(where: JobWhereInput): Job
  candidate(where: CandidateWhereInput): Candidate
  title: String
  description: String
  dueAt: DateTime
}

"""A connection to a list of items."""
type TaskConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TaskEdge]!
  aggregate: AggregateTask!
}

input TaskCreateInput {
  targetType: TaskTargetEnum
  title: String
  description: String
  dueAt: DateTime
  workspace: WorkspaceCreateOneInput!
  subscribers: UserCreateManyWithoutSubscriptionTasksInput
  owners: UserCreateManyWithoutTasksInput
  job: JobCreateOneInput
  candidate: CandidateCreateOneWithoutTasksInput
}

input TaskCreateManyWithoutCandidateInput {
  create: [TaskCreateWithoutCandidateInput!]
  connect: [TaskWhereUniqueInput!]
}

input TaskCreateManyWithoutOwnersInput {
  create: [TaskCreateWithoutOwnersInput!]
  connect: [TaskWhereUniqueInput!]
}

input TaskCreateManyWithoutSubscribersInput {
  create: [TaskCreateWithoutSubscribersInput!]
  connect: [TaskWhereUniqueInput!]
}

input TaskCreateOneInput {
  create: TaskCreateInput
  connect: TaskWhereUniqueInput
}

input TaskCreateWithoutCandidateInput {
  targetType: TaskTargetEnum
  title: String
  description: String
  dueAt: DateTime
  workspace: WorkspaceCreateOneInput!
  subscribers: UserCreateManyWithoutSubscriptionTasksInput
  owners: UserCreateManyWithoutTasksInput
  job: JobCreateOneInput
}

input TaskCreateWithoutOwnersInput {
  targetType: TaskTargetEnum
  title: String
  description: String
  dueAt: DateTime
  workspace: WorkspaceCreateOneInput!
  subscribers: UserCreateManyWithoutSubscriptionTasksInput
  job: JobCreateOneInput
  candidate: CandidateCreateOneWithoutTasksInput
}

input TaskCreateWithoutSubscribersInput {
  targetType: TaskTargetEnum
  title: String
  description: String
  dueAt: DateTime
  workspace: WorkspaceCreateOneInput!
  owners: UserCreateManyWithoutTasksInput
  job: JobCreateOneInput
  candidate: CandidateCreateOneWithoutTasksInput
}

"""An edge in a connection."""
type TaskEdge {
  """The item at the end of the edge."""
  node: Task!

  """A cursor for use in pagination."""
  cursor: String!
}

enum TaskOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  targetType_ASC
  targetType_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  dueAt_ASC
  dueAt_DESC
}

type TaskPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  targetType: TaskTargetEnum
  title: String
  description: String
  dueAt: DateTime
}

type TaskSubscriptionPayload {
  mutation: MutationType!
  node: Task
  updatedFields: [String!]
  previousValues: TaskPreviousValues
}

input TaskSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TaskSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TaskSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TaskSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: TaskWhereInput
}

enum TaskTargetEnum {
  NULL
  JOB
  CANIDATE
}

input TaskUpdateDataInput {
  targetType: TaskTargetEnum
  title: String
  description: String
  dueAt: DateTime
  workspace: WorkspaceUpdateOneInput
  subscribers: UserUpdateManyWithoutSubscriptionTasksInput
  owners: UserUpdateManyWithoutTasksInput
  job: JobUpdateOneInput
  candidate: CandidateUpdateOneWithoutTasksInput
}

input TaskUpdateInput {
  targetType: TaskTargetEnum
  title: String
  description: String
  dueAt: DateTime
  workspace: WorkspaceUpdateOneInput
  subscribers: UserUpdateManyWithoutSubscriptionTasksInput
  owners: UserUpdateManyWithoutTasksInput
  job: JobUpdateOneInput
  candidate: CandidateUpdateOneWithoutTasksInput
}

input TaskUpdateManyWithoutCandidateInput {
  create: [TaskCreateWithoutCandidateInput!]
  connect: [TaskWhereUniqueInput!]
  disconnect: [TaskWhereUniqueInput!]
  delete: [TaskWhereUniqueInput!]
  update: [TaskUpdateWithWhereUniqueWithoutCandidateInput!]
  upsert: [TaskUpsertWithWhereUniqueWithoutCandidateInput!]
}

input TaskUpdateManyWithoutOwnersInput {
  create: [TaskCreateWithoutOwnersInput!]
  connect: [TaskWhereUniqueInput!]
  disconnect: [TaskWhereUniqueInput!]
  delete: [TaskWhereUniqueInput!]
  update: [TaskUpdateWithWhereUniqueWithoutOwnersInput!]
  upsert: [TaskUpsertWithWhereUniqueWithoutOwnersInput!]
}

input TaskUpdateManyWithoutSubscribersInput {
  create: [TaskCreateWithoutSubscribersInput!]
  connect: [TaskWhereUniqueInput!]
  disconnect: [TaskWhereUniqueInput!]
  delete: [TaskWhereUniqueInput!]
  update: [TaskUpdateWithWhereUniqueWithoutSubscribersInput!]
  upsert: [TaskUpsertWithWhereUniqueWithoutSubscribersInput!]
}

input TaskUpdateOneInput {
  create: TaskCreateInput
  connect: TaskWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: TaskUpdateDataInput
  upsert: TaskUpsertNestedInput
}

input TaskUpdateWithoutCandidateDataInput {
  targetType: TaskTargetEnum
  title: String
  description: String
  dueAt: DateTime
  workspace: WorkspaceUpdateOneInput
  subscribers: UserUpdateManyWithoutSubscriptionTasksInput
  owners: UserUpdateManyWithoutTasksInput
  job: JobUpdateOneInput
}

input TaskUpdateWithoutOwnersDataInput {
  targetType: TaskTargetEnum
  title: String
  description: String
  dueAt: DateTime
  workspace: WorkspaceUpdateOneInput
  subscribers: UserUpdateManyWithoutSubscriptionTasksInput
  job: JobUpdateOneInput
  candidate: CandidateUpdateOneWithoutTasksInput
}

input TaskUpdateWithoutSubscribersDataInput {
  targetType: TaskTargetEnum
  title: String
  description: String
  dueAt: DateTime
  workspace: WorkspaceUpdateOneInput
  owners: UserUpdateManyWithoutTasksInput
  job: JobUpdateOneInput
  candidate: CandidateUpdateOneWithoutTasksInput
}

input TaskUpdateWithWhereUniqueWithoutCandidateInput {
  where: TaskWhereUniqueInput!
  data: TaskUpdateWithoutCandidateDataInput!
}

input TaskUpdateWithWhereUniqueWithoutOwnersInput {
  where: TaskWhereUniqueInput!
  data: TaskUpdateWithoutOwnersDataInput!
}

input TaskUpdateWithWhereUniqueWithoutSubscribersInput {
  where: TaskWhereUniqueInput!
  data: TaskUpdateWithoutSubscribersDataInput!
}

input TaskUpsertNestedInput {
  update: TaskUpdateDataInput!
  create: TaskCreateInput!
}

input TaskUpsertWithWhereUniqueWithoutCandidateInput {
  where: TaskWhereUniqueInput!
  update: TaskUpdateWithoutCandidateDataInput!
  create: TaskCreateWithoutCandidateInput!
}

input TaskUpsertWithWhereUniqueWithoutOwnersInput {
  where: TaskWhereUniqueInput!
  update: TaskUpdateWithoutOwnersDataInput!
  create: TaskCreateWithoutOwnersInput!
}

input TaskUpsertWithWhereUniqueWithoutSubscribersInput {
  where: TaskWhereUniqueInput!
  update: TaskUpdateWithoutSubscribersDataInput!
  create: TaskCreateWithoutSubscribersInput!
}

input TaskWhereInput {
  """Logical AND on all given filters."""
  AND: [TaskWhereInput!]

  """Logical OR on all given filters."""
  OR: [TaskWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TaskWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  targetType: TaskTargetEnum

  """All values that are not equal to given value."""
  targetType_not: TaskTargetEnum

  """All values that are contained in given list."""
  targetType_in: [TaskTargetEnum!]

  """All values that are not contained in given list."""
  targetType_not_in: [TaskTargetEnum!]
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  dueAt: DateTime

  """All values that are not equal to given value."""
  dueAt_not: DateTime

  """All values that are contained in given list."""
  dueAt_in: [DateTime!]

  """All values that are not contained in given list."""
  dueAt_not_in: [DateTime!]

  """All values less than the given value."""
  dueAt_lt: DateTime

  """All values less than or equal the given value."""
  dueAt_lte: DateTime

  """All values greater than the given value."""
  dueAt_gt: DateTime

  """All values greater than or equal the given value."""
  dueAt_gte: DateTime
  workspace: WorkspaceWhereInput
  subscribers_every: UserWhereInput
  subscribers_some: UserWhereInput
  subscribers_none: UserWhereInput
  owners_every: UserWhereInput
  owners_some: UserWhereInput
  owners_none: UserWhereInput
  job: JobWhereInput
  candidate: CandidateWhereInput
}

input TaskWhereUniqueInput {
  id: ID
}

type User implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  workspace(where: WorkspaceWhereInput): Workspace!
  events(where: EventWhereInput): Event
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification!]
  subscriptionJobs(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Job!]
  subscriptionCandidates(where: CandidateWhereInput, orderBy: CandidateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Candidate!]
  subscriptionTasks(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Task!]
  tasks(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Task!]
  firstName: String
  lastName: String
  email: String!
  username: String!
  password: String!
  lastLogin: DateTime
  deletedAt: DateTime
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  firstName: String
  lastName: String
  email: String!
  username: String!
  password: String!
  lastLogin: DateTime
  deletedAt: DateTime
  workspace: WorkspaceCreateOneWithoutUsersInput!
  events: EventCreateOneWithoutActorUserInput
  notifications: NotificationCreateManyWithoutUserInput
  subscriptionJobs: JobCreateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateCreateManyWithoutSubscribersInput
  subscriptionTasks: TaskCreateManyWithoutSubscribersInput
  tasks: TaskCreateManyWithoutOwnersInput
}

input UserCreateManyWithoutSubscriptionCandidatesInput {
  create: [UserCreateWithoutSubscriptionCandidatesInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutSubscriptionJobsInput {
  create: [UserCreateWithoutSubscriptionJobsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutSubscriptionTasksInput {
  create: [UserCreateWithoutSubscriptionTasksInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutTasksInput {
  create: [UserCreateWithoutTasksInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutWorkspaceInput {
  create: [UserCreateWithoutWorkspaceInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutEventsInput {
  create: UserCreateWithoutEventsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutNotificationsInput {
  create: UserCreateWithoutNotificationsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutEventsInput {
  firstName: String
  lastName: String
  email: String!
  username: String!
  password: String!
  lastLogin: DateTime
  deletedAt: DateTime
  workspace: WorkspaceCreateOneWithoutUsersInput!
  notifications: NotificationCreateManyWithoutUserInput
  subscriptionJobs: JobCreateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateCreateManyWithoutSubscribersInput
  subscriptionTasks: TaskCreateManyWithoutSubscribersInput
  tasks: TaskCreateManyWithoutOwnersInput
}

input UserCreateWithoutNotificationsInput {
  firstName: String
  lastName: String
  email: String!
  username: String!
  password: String!
  lastLogin: DateTime
  deletedAt: DateTime
  workspace: WorkspaceCreateOneWithoutUsersInput!
  events: EventCreateOneWithoutActorUserInput
  subscriptionJobs: JobCreateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateCreateManyWithoutSubscribersInput
  subscriptionTasks: TaskCreateManyWithoutSubscribersInput
  tasks: TaskCreateManyWithoutOwnersInput
}

input UserCreateWithoutSubscriptionCandidatesInput {
  firstName: String
  lastName: String
  email: String!
  username: String!
  password: String!
  lastLogin: DateTime
  deletedAt: DateTime
  workspace: WorkspaceCreateOneWithoutUsersInput!
  events: EventCreateOneWithoutActorUserInput
  notifications: NotificationCreateManyWithoutUserInput
  subscriptionJobs: JobCreateManyWithoutSubscribersInput
  subscriptionTasks: TaskCreateManyWithoutSubscribersInput
  tasks: TaskCreateManyWithoutOwnersInput
}

input UserCreateWithoutSubscriptionJobsInput {
  firstName: String
  lastName: String
  email: String!
  username: String!
  password: String!
  lastLogin: DateTime
  deletedAt: DateTime
  workspace: WorkspaceCreateOneWithoutUsersInput!
  events: EventCreateOneWithoutActorUserInput
  notifications: NotificationCreateManyWithoutUserInput
  subscriptionCandidates: CandidateCreateManyWithoutSubscribersInput
  subscriptionTasks: TaskCreateManyWithoutSubscribersInput
  tasks: TaskCreateManyWithoutOwnersInput
}

input UserCreateWithoutSubscriptionTasksInput {
  firstName: String
  lastName: String
  email: String!
  username: String!
  password: String!
  lastLogin: DateTime
  deletedAt: DateTime
  workspace: WorkspaceCreateOneWithoutUsersInput!
  events: EventCreateOneWithoutActorUserInput
  notifications: NotificationCreateManyWithoutUserInput
  subscriptionJobs: JobCreateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateCreateManyWithoutSubscribersInput
  tasks: TaskCreateManyWithoutOwnersInput
}

input UserCreateWithoutTasksInput {
  firstName: String
  lastName: String
  email: String!
  username: String!
  password: String!
  lastLogin: DateTime
  deletedAt: DateTime
  workspace: WorkspaceCreateOneWithoutUsersInput!
  events: EventCreateOneWithoutActorUserInput
  notifications: NotificationCreateManyWithoutUserInput
  subscriptionJobs: JobCreateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateCreateManyWithoutSubscribersInput
  subscriptionTasks: TaskCreateManyWithoutSubscribersInput
}

input UserCreateWithoutWorkspaceInput {
  firstName: String
  lastName: String
  email: String!
  username: String!
  password: String!
  lastLogin: DateTime
  deletedAt: DateTime
  events: EventCreateOneWithoutActorUserInput
  notifications: NotificationCreateManyWithoutUserInput
  subscriptionJobs: JobCreateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateCreateManyWithoutSubscribersInput
  subscriptionTasks: TaskCreateManyWithoutSubscribersInput
  tasks: TaskCreateManyWithoutOwnersInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  email_ASC
  email_DESC
  username_ASC
  username_DESC
  password_ASC
  password_DESC
  lastLogin_ASC
  lastLogin_DESC
  deletedAt_ASC
  deletedAt_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  firstName: String
  lastName: String
  email: String!
  username: String!
  password: String!
  lastLogin: DateTime
  deletedAt: DateTime
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  firstName: String
  lastName: String
  email: String
  username: String
  password: String
  lastLogin: DateTime
  deletedAt: DateTime
  workspace: WorkspaceUpdateOneWithoutUsersInput
  events: EventUpdateOneWithoutActorUserInput
  notifications: NotificationUpdateManyWithoutUserInput
  subscriptionJobs: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks: TaskUpdateManyWithoutSubscribersInput
  tasks: TaskUpdateManyWithoutOwnersInput
}

input UserUpdateInput {
  firstName: String
  lastName: String
  email: String
  username: String
  password: String
  lastLogin: DateTime
  deletedAt: DateTime
  workspace: WorkspaceUpdateOneWithoutUsersInput
  events: EventUpdateOneWithoutActorUserInput
  notifications: NotificationUpdateManyWithoutUserInput
  subscriptionJobs: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks: TaskUpdateManyWithoutSubscribersInput
  tasks: TaskUpdateManyWithoutOwnersInput
}

input UserUpdateManyWithoutSubscriptionCandidatesInput {
  create: [UserCreateWithoutSubscriptionCandidatesInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutSubscriptionCandidatesInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutSubscriptionCandidatesInput!]
}

input UserUpdateManyWithoutSubscriptionJobsInput {
  create: [UserCreateWithoutSubscriptionJobsInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutSubscriptionJobsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutSubscriptionJobsInput!]
}

input UserUpdateManyWithoutSubscriptionTasksInput {
  create: [UserCreateWithoutSubscriptionTasksInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutSubscriptionTasksInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutSubscriptionTasksInput!]
}

input UserUpdateManyWithoutTasksInput {
  create: [UserCreateWithoutTasksInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutTasksInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutTasksInput!]
}

input UserUpdateManyWithoutWorkspaceInput {
  create: [UserCreateWithoutWorkspaceInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutWorkspaceInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutWorkspaceInput!]
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneWithoutEventsInput {
  create: UserCreateWithoutEventsInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutEventsDataInput
  upsert: UserUpsertWithoutEventsInput
}

input UserUpdateOneWithoutNotificationsInput {
  create: UserCreateWithoutNotificationsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutNotificationsDataInput
  upsert: UserUpsertWithoutNotificationsInput
}

input UserUpdateWithoutEventsDataInput {
  firstName: String
  lastName: String
  email: String
  username: String
  password: String
  lastLogin: DateTime
  deletedAt: DateTime
  workspace: WorkspaceUpdateOneWithoutUsersInput
  notifications: NotificationUpdateManyWithoutUserInput
  subscriptionJobs: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks: TaskUpdateManyWithoutSubscribersInput
  tasks: TaskUpdateManyWithoutOwnersInput
}

input UserUpdateWithoutNotificationsDataInput {
  firstName: String
  lastName: String
  email: String
  username: String
  password: String
  lastLogin: DateTime
  deletedAt: DateTime
  workspace: WorkspaceUpdateOneWithoutUsersInput
  events: EventUpdateOneWithoutActorUserInput
  subscriptionJobs: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks: TaskUpdateManyWithoutSubscribersInput
  tasks: TaskUpdateManyWithoutOwnersInput
}

input UserUpdateWithoutSubscriptionCandidatesDataInput {
  firstName: String
  lastName: String
  email: String
  username: String
  password: String
  lastLogin: DateTime
  deletedAt: DateTime
  workspace: WorkspaceUpdateOneWithoutUsersInput
  events: EventUpdateOneWithoutActorUserInput
  notifications: NotificationUpdateManyWithoutUserInput
  subscriptionJobs: JobUpdateManyWithoutSubscribersInput
  subscriptionTasks: TaskUpdateManyWithoutSubscribersInput
  tasks: TaskUpdateManyWithoutOwnersInput
}

input UserUpdateWithoutSubscriptionJobsDataInput {
  firstName: String
  lastName: String
  email: String
  username: String
  password: String
  lastLogin: DateTime
  deletedAt: DateTime
  workspace: WorkspaceUpdateOneWithoutUsersInput
  events: EventUpdateOneWithoutActorUserInput
  notifications: NotificationUpdateManyWithoutUserInput
  subscriptionCandidates: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks: TaskUpdateManyWithoutSubscribersInput
  tasks: TaskUpdateManyWithoutOwnersInput
}

input UserUpdateWithoutSubscriptionTasksDataInput {
  firstName: String
  lastName: String
  email: String
  username: String
  password: String
  lastLogin: DateTime
  deletedAt: DateTime
  workspace: WorkspaceUpdateOneWithoutUsersInput
  events: EventUpdateOneWithoutActorUserInput
  notifications: NotificationUpdateManyWithoutUserInput
  subscriptionJobs: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateUpdateManyWithoutSubscribersInput
  tasks: TaskUpdateManyWithoutOwnersInput
}

input UserUpdateWithoutTasksDataInput {
  firstName: String
  lastName: String
  email: String
  username: String
  password: String
  lastLogin: DateTime
  deletedAt: DateTime
  workspace: WorkspaceUpdateOneWithoutUsersInput
  events: EventUpdateOneWithoutActorUserInput
  notifications: NotificationUpdateManyWithoutUserInput
  subscriptionJobs: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks: TaskUpdateManyWithoutSubscribersInput
}

input UserUpdateWithoutWorkspaceDataInput {
  firstName: String
  lastName: String
  email: String
  username: String
  password: String
  lastLogin: DateTime
  deletedAt: DateTime
  events: EventUpdateOneWithoutActorUserInput
  notifications: NotificationUpdateManyWithoutUserInput
  subscriptionJobs: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks: TaskUpdateManyWithoutSubscribersInput
  tasks: TaskUpdateManyWithoutOwnersInput
}

input UserUpdateWithWhereUniqueWithoutSubscriptionCandidatesInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutSubscriptionCandidatesDataInput!
}

input UserUpdateWithWhereUniqueWithoutSubscriptionJobsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutSubscriptionJobsDataInput!
}

input UserUpdateWithWhereUniqueWithoutSubscriptionTasksInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutSubscriptionTasksDataInput!
}

input UserUpdateWithWhereUniqueWithoutTasksInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutTasksDataInput!
}

input UserUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutWorkspaceDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutEventsInput {
  update: UserUpdateWithoutEventsDataInput!
  create: UserCreateWithoutEventsInput!
}

input UserUpsertWithoutNotificationsInput {
  update: UserUpdateWithoutNotificationsDataInput!
  create: UserCreateWithoutNotificationsInput!
}

input UserUpsertWithWhereUniqueWithoutSubscriptionCandidatesInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutSubscriptionCandidatesDataInput!
  create: UserCreateWithoutSubscriptionCandidatesInput!
}

input UserUpsertWithWhereUniqueWithoutSubscriptionJobsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutSubscriptionJobsDataInput!
  create: UserCreateWithoutSubscriptionJobsInput!
}

input UserUpsertWithWhereUniqueWithoutSubscriptionTasksInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutSubscriptionTasksDataInput!
  create: UserCreateWithoutSubscriptionTasksInput!
}

input UserUpsertWithWhereUniqueWithoutTasksInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutTasksDataInput!
  create: UserCreateWithoutTasksInput!
}

input UserUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutWorkspaceDataInput!
  create: UserCreateWithoutWorkspaceInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  firstName: String

  """All values that are not equal to given value."""
  firstName_not: String

  """All values that are contained in given list."""
  firstName_in: [String!]

  """All values that are not contained in given list."""
  firstName_not_in: [String!]

  """All values less than the given value."""
  firstName_lt: String

  """All values less than or equal the given value."""
  firstName_lte: String

  """All values greater than the given value."""
  firstName_gt: String

  """All values greater than or equal the given value."""
  firstName_gte: String

  """All values containing the given string."""
  firstName_contains: String

  """All values not containing the given string."""
  firstName_not_contains: String

  """All values starting with the given string."""
  firstName_starts_with: String

  """All values not starting with the given string."""
  firstName_not_starts_with: String

  """All values ending with the given string."""
  firstName_ends_with: String

  """All values not ending with the given string."""
  firstName_not_ends_with: String
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values less than the given value."""
  lastName_lt: String

  """All values less than or equal the given value."""
  lastName_lte: String

  """All values greater than the given value."""
  lastName_gt: String

  """All values greater than or equal the given value."""
  lastName_gte: String

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string."""
  lastName_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  username: String

  """All values that are not equal to given value."""
  username_not: String

  """All values that are contained in given list."""
  username_in: [String!]

  """All values that are not contained in given list."""
  username_not_in: [String!]

  """All values less than the given value."""
  username_lt: String

  """All values less than or equal the given value."""
  username_lte: String

  """All values greater than the given value."""
  username_gt: String

  """All values greater than or equal the given value."""
  username_gte: String

  """All values containing the given string."""
  username_contains: String

  """All values not containing the given string."""
  username_not_contains: String

  """All values starting with the given string."""
  username_starts_with: String

  """All values not starting with the given string."""
  username_not_starts_with: String

  """All values ending with the given string."""
  username_ends_with: String

  """All values not ending with the given string."""
  username_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  lastLogin: DateTime

  """All values that are not equal to given value."""
  lastLogin_not: DateTime

  """All values that are contained in given list."""
  lastLogin_in: [DateTime!]

  """All values that are not contained in given list."""
  lastLogin_not_in: [DateTime!]

  """All values less than the given value."""
  lastLogin_lt: DateTime

  """All values less than or equal the given value."""
  lastLogin_lte: DateTime

  """All values greater than the given value."""
  lastLogin_gt: DateTime

  """All values greater than or equal the given value."""
  lastLogin_gte: DateTime
  deletedAt: DateTime

  """All values that are not equal to given value."""
  deletedAt_not: DateTime

  """All values that are contained in given list."""
  deletedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  deletedAt_not_in: [DateTime!]

  """All values less than the given value."""
  deletedAt_lt: DateTime

  """All values less than or equal the given value."""
  deletedAt_lte: DateTime

  """All values greater than the given value."""
  deletedAt_gt: DateTime

  """All values greater than or equal the given value."""
  deletedAt_gte: DateTime
  workspace: WorkspaceWhereInput
  events: EventWhereInput
  notifications_every: NotificationWhereInput
  notifications_some: NotificationWhereInput
  notifications_none: NotificationWhereInput
  subscriptionJobs_every: JobWhereInput
  subscriptionJobs_some: JobWhereInput
  subscriptionJobs_none: JobWhereInput
  subscriptionCandidates_every: CandidateWhereInput
  subscriptionCandidates_some: CandidateWhereInput
  subscriptionCandidates_none: CandidateWhereInput
  subscriptionTasks_every: TaskWhereInput
  subscriptionTasks_some: TaskWhereInput
  subscriptionTasks_none: TaskWhereInput
  tasks_every: TaskWhereInput
  tasks_some: TaskWhereInput
  tasks_none: TaskWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Workspace implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  jobs(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Job!]
  applications(where: ApplicationWhereInput, orderBy: ApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Application!]
  candidates(where: CandidateWhereInput, orderBy: CandidateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Candidate!]
  invites(where: InviteWhereInput, orderBy: InviteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invite!]
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
  name: String!
}

"""A connection to a list of items."""
type WorkspaceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [WorkspaceEdge]!
  aggregate: AggregateWorkspace!
}

input WorkspaceCreateInput {
  name: String!
  events: EventCreateManyWithoutTargetWorkspaceInput
  users: UserCreateManyWithoutWorkspaceInput
  jobs: JobCreateManyWithoutWorkspaceInput
  applications: ApplicationCreateManyWithoutWorkspaceInput
  candidates: CandidateCreateManyWithoutWorkspaceInput
  invites: InviteCreateManyWithoutWorkspaceInput
  tags: TagCreateManyInput
}

input WorkspaceCreateOneInput {
  create: WorkspaceCreateInput
  connect: WorkspaceWhereUniqueInput
}

input WorkspaceCreateOneWithoutApplicationsInput {
  create: WorkspaceCreateWithoutApplicationsInput
  connect: WorkspaceWhereUniqueInput
}

input WorkspaceCreateOneWithoutCandidatesInput {
  create: WorkspaceCreateWithoutCandidatesInput
  connect: WorkspaceWhereUniqueInput
}

input WorkspaceCreateOneWithoutEventsInput {
  create: WorkspaceCreateWithoutEventsInput
  connect: WorkspaceWhereUniqueInput
}

input WorkspaceCreateOneWithoutInvitesInput {
  create: WorkspaceCreateWithoutInvitesInput
  connect: WorkspaceWhereUniqueInput
}

input WorkspaceCreateOneWithoutJobsInput {
  create: WorkspaceCreateWithoutJobsInput
  connect: WorkspaceWhereUniqueInput
}

input WorkspaceCreateOneWithoutUsersInput {
  create: WorkspaceCreateWithoutUsersInput
  connect: WorkspaceWhereUniqueInput
}

input WorkspaceCreateWithoutApplicationsInput {
  name: String!
  events: EventCreateManyWithoutTargetWorkspaceInput
  users: UserCreateManyWithoutWorkspaceInput
  jobs: JobCreateManyWithoutWorkspaceInput
  candidates: CandidateCreateManyWithoutWorkspaceInput
  invites: InviteCreateManyWithoutWorkspaceInput
  tags: TagCreateManyInput
}

input WorkspaceCreateWithoutCandidatesInput {
  name: String!
  events: EventCreateManyWithoutTargetWorkspaceInput
  users: UserCreateManyWithoutWorkspaceInput
  jobs: JobCreateManyWithoutWorkspaceInput
  applications: ApplicationCreateManyWithoutWorkspaceInput
  invites: InviteCreateManyWithoutWorkspaceInput
  tags: TagCreateManyInput
}

input WorkspaceCreateWithoutEventsInput {
  name: String!
  users: UserCreateManyWithoutWorkspaceInput
  jobs: JobCreateManyWithoutWorkspaceInput
  applications: ApplicationCreateManyWithoutWorkspaceInput
  candidates: CandidateCreateManyWithoutWorkspaceInput
  invites: InviteCreateManyWithoutWorkspaceInput
  tags: TagCreateManyInput
}

input WorkspaceCreateWithoutInvitesInput {
  name: String!
  events: EventCreateManyWithoutTargetWorkspaceInput
  users: UserCreateManyWithoutWorkspaceInput
  jobs: JobCreateManyWithoutWorkspaceInput
  applications: ApplicationCreateManyWithoutWorkspaceInput
  candidates: CandidateCreateManyWithoutWorkspaceInput
  tags: TagCreateManyInput
}

input WorkspaceCreateWithoutJobsInput {
  name: String!
  events: EventCreateManyWithoutTargetWorkspaceInput
  users: UserCreateManyWithoutWorkspaceInput
  applications: ApplicationCreateManyWithoutWorkspaceInput
  candidates: CandidateCreateManyWithoutWorkspaceInput
  invites: InviteCreateManyWithoutWorkspaceInput
  tags: TagCreateManyInput
}

input WorkspaceCreateWithoutUsersInput {
  name: String!
  events: EventCreateManyWithoutTargetWorkspaceInput
  jobs: JobCreateManyWithoutWorkspaceInput
  applications: ApplicationCreateManyWithoutWorkspaceInput
  candidates: CandidateCreateManyWithoutWorkspaceInput
  invites: InviteCreateManyWithoutWorkspaceInput
  tags: TagCreateManyInput
}

"""An edge in a connection."""
type WorkspaceEdge {
  """The item at the end of the edge."""
  node: Workspace!

  """A cursor for use in pagination."""
  cursor: String!
}

enum WorkspaceOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
}

type WorkspacePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
}

type WorkspaceSubscriptionPayload {
  mutation: MutationType!
  node: Workspace
  updatedFields: [String!]
  previousValues: WorkspacePreviousValues
}

input WorkspaceSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [WorkspaceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [WorkspaceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [WorkspaceSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: WorkspaceWhereInput
}

input WorkspaceUpdateDataInput {
  name: String
  events: EventUpdateManyWithoutTargetWorkspaceInput
  users: UserUpdateManyWithoutWorkspaceInput
  jobs: JobUpdateManyWithoutWorkspaceInput
  applications: ApplicationUpdateManyWithoutWorkspaceInput
  candidates: CandidateUpdateManyWithoutWorkspaceInput
  invites: InviteUpdateManyWithoutWorkspaceInput
  tags: TagUpdateManyInput
}

input WorkspaceUpdateInput {
  name: String
  events: EventUpdateManyWithoutTargetWorkspaceInput
  users: UserUpdateManyWithoutWorkspaceInput
  jobs: JobUpdateManyWithoutWorkspaceInput
  applications: ApplicationUpdateManyWithoutWorkspaceInput
  candidates: CandidateUpdateManyWithoutWorkspaceInput
  invites: InviteUpdateManyWithoutWorkspaceInput
  tags: TagUpdateManyInput
}

input WorkspaceUpdateOneInput {
  create: WorkspaceCreateInput
  connect: WorkspaceWhereUniqueInput
  delete: Boolean
  update: WorkspaceUpdateDataInput
  upsert: WorkspaceUpsertNestedInput
}

input WorkspaceUpdateOneWithoutApplicationsInput {
  create: WorkspaceCreateWithoutApplicationsInput
  connect: WorkspaceWhereUniqueInput
  delete: Boolean
  update: WorkspaceUpdateWithoutApplicationsDataInput
  upsert: WorkspaceUpsertWithoutApplicationsInput
}

input WorkspaceUpdateOneWithoutCandidatesInput {
  create: WorkspaceCreateWithoutCandidatesInput
  connect: WorkspaceWhereUniqueInput
  delete: Boolean
  update: WorkspaceUpdateWithoutCandidatesDataInput
  upsert: WorkspaceUpsertWithoutCandidatesInput
}

input WorkspaceUpdateOneWithoutEventsInput {
  create: WorkspaceCreateWithoutEventsInput
  connect: WorkspaceWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: WorkspaceUpdateWithoutEventsDataInput
  upsert: WorkspaceUpsertWithoutEventsInput
}

input WorkspaceUpdateOneWithoutInvitesInput {
  create: WorkspaceCreateWithoutInvitesInput
  connect: WorkspaceWhereUniqueInput
  delete: Boolean
  update: WorkspaceUpdateWithoutInvitesDataInput
  upsert: WorkspaceUpsertWithoutInvitesInput
}

input WorkspaceUpdateOneWithoutJobsInput {
  create: WorkspaceCreateWithoutJobsInput
  connect: WorkspaceWhereUniqueInput
  delete: Boolean
  update: WorkspaceUpdateWithoutJobsDataInput
  upsert: WorkspaceUpsertWithoutJobsInput
}

input WorkspaceUpdateOneWithoutUsersInput {
  create: WorkspaceCreateWithoutUsersInput
  connect: WorkspaceWhereUniqueInput
  delete: Boolean
  update: WorkspaceUpdateWithoutUsersDataInput
  upsert: WorkspaceUpsertWithoutUsersInput
}

input WorkspaceUpdateWithoutApplicationsDataInput {
  name: String
  events: EventUpdateManyWithoutTargetWorkspaceInput
  users: UserUpdateManyWithoutWorkspaceInput
  jobs: JobUpdateManyWithoutWorkspaceInput
  candidates: CandidateUpdateManyWithoutWorkspaceInput
  invites: InviteUpdateManyWithoutWorkspaceInput
  tags: TagUpdateManyInput
}

input WorkspaceUpdateWithoutCandidatesDataInput {
  name: String
  events: EventUpdateManyWithoutTargetWorkspaceInput
  users: UserUpdateManyWithoutWorkspaceInput
  jobs: JobUpdateManyWithoutWorkspaceInput
  applications: ApplicationUpdateManyWithoutWorkspaceInput
  invites: InviteUpdateManyWithoutWorkspaceInput
  tags: TagUpdateManyInput
}

input WorkspaceUpdateWithoutEventsDataInput {
  name: String
  users: UserUpdateManyWithoutWorkspaceInput
  jobs: JobUpdateManyWithoutWorkspaceInput
  applications: ApplicationUpdateManyWithoutWorkspaceInput
  candidates: CandidateUpdateManyWithoutWorkspaceInput
  invites: InviteUpdateManyWithoutWorkspaceInput
  tags: TagUpdateManyInput
}

input WorkspaceUpdateWithoutInvitesDataInput {
  name: String
  events: EventUpdateManyWithoutTargetWorkspaceInput
  users: UserUpdateManyWithoutWorkspaceInput
  jobs: JobUpdateManyWithoutWorkspaceInput
  applications: ApplicationUpdateManyWithoutWorkspaceInput
  candidates: CandidateUpdateManyWithoutWorkspaceInput
  tags: TagUpdateManyInput
}

input WorkspaceUpdateWithoutJobsDataInput {
  name: String
  events: EventUpdateManyWithoutTargetWorkspaceInput
  users: UserUpdateManyWithoutWorkspaceInput
  applications: ApplicationUpdateManyWithoutWorkspaceInput
  candidates: CandidateUpdateManyWithoutWorkspaceInput
  invites: InviteUpdateManyWithoutWorkspaceInput
  tags: TagUpdateManyInput
}

input WorkspaceUpdateWithoutUsersDataInput {
  name: String
  events: EventUpdateManyWithoutTargetWorkspaceInput
  jobs: JobUpdateManyWithoutWorkspaceInput
  applications: ApplicationUpdateManyWithoutWorkspaceInput
  candidates: CandidateUpdateManyWithoutWorkspaceInput
  invites: InviteUpdateManyWithoutWorkspaceInput
  tags: TagUpdateManyInput
}

input WorkspaceUpsertNestedInput {
  update: WorkspaceUpdateDataInput!
  create: WorkspaceCreateInput!
}

input WorkspaceUpsertWithoutApplicationsInput {
  update: WorkspaceUpdateWithoutApplicationsDataInput!
  create: WorkspaceCreateWithoutApplicationsInput!
}

input WorkspaceUpsertWithoutCandidatesInput {
  update: WorkspaceUpdateWithoutCandidatesDataInput!
  create: WorkspaceCreateWithoutCandidatesInput!
}

input WorkspaceUpsertWithoutEventsInput {
  update: WorkspaceUpdateWithoutEventsDataInput!
  create: WorkspaceCreateWithoutEventsInput!
}

input WorkspaceUpsertWithoutInvitesInput {
  update: WorkspaceUpdateWithoutInvitesDataInput!
  create: WorkspaceCreateWithoutInvitesInput!
}

input WorkspaceUpsertWithoutJobsInput {
  update: WorkspaceUpdateWithoutJobsDataInput!
  create: WorkspaceCreateWithoutJobsInput!
}

input WorkspaceUpsertWithoutUsersInput {
  update: WorkspaceUpdateWithoutUsersDataInput!
  create: WorkspaceCreateWithoutUsersInput!
}

input WorkspaceWhereInput {
  """Logical AND on all given filters."""
  AND: [WorkspaceWhereInput!]

  """Logical OR on all given filters."""
  OR: [WorkspaceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [WorkspaceWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  events_every: EventWhereInput
  events_some: EventWhereInput
  events_none: EventWhereInput
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  jobs_every: JobWhereInput
  jobs_some: JobWhereInput
  jobs_none: JobWhereInput
  applications_every: ApplicationWhereInput
  applications_some: ApplicationWhereInput
  applications_none: ApplicationWhereInput
  candidates_every: CandidateWhereInput
  candidates_some: CandidateWhereInput
  candidates_none: CandidateWhereInput
  invites_every: InviteWhereInput
  invites_some: InviteWhereInput
  invites_none: InviteWhereInput
  tags_every: TagWhereInput
  tags_some: TagWhereInput
  tags_none: TagWhereInput
}

input WorkspaceWhereUniqueInput {
  id: ID
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type JobType =   'DRAFT' |
  'PUBLISHED' |
  'ARCHIVED'

export type TaskTargetEnum =   'NULL' |
  'JOB' |
  'CANIDATE'

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

export type WorkspaceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC'

export type CommentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'content_ASC' |
  'content_DESC'

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

export type StageTypeEnum =   'NEW' |
  'QUALIFIED' |
  'DISQUALIFIED'

export type EventActorTypeEnum =   'SYSTEM' |
  'USER' |
  'CANDIDATE'

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
  'targetType_ASC' |
  'targetType_DESC' |
  'title_ASC' |
  'title_DESC' |
  'description_ASC' |
  'description_DESC' |
  'dueAt_ASC' |
  'dueAt_DESC'

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
  'password_ASC' |
  'password_DESC' |
  'lastLogin_ASC' |
  'lastLogin_DESC' |
  'deletedAt_ASC' |
  'deletedAt_DESC'

export type NotificationStatusEnum =   'NEW' |
  'UNREAD' |
  'READ'

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

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type ApplicationOrderByInput =   'createdAt_ASC' |
  'createdAt_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'disqualifyReason_ASC' |
  'disqualifyReason_DESC'

export type FieldTypeEnum =   'INT' |
  'FLOAT' |
  'STRING' |
  'TEXT' |
  'BOOLEAN' |
  'DATE_TIME'

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

export type NotificationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'status_ASC' |
  'status_DESC'

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

export type TagOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'label_ASC' |
  'label_DESC'

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

export type EventTargetTypeEnum =   'CANDIDATE' |
  'JOB' |
  'TASK' |
  'WORKSPACE'

export type EventTypeEnum =   'DEFAULT' |
  'MESSAGE' |
  'COMMENT_CREATE' |
  'COMMENT_EDIT' |
  'COMMENT_DELETE'

export interface WorkspaceUpdateDataInput {
  name?: String
  events?: EventUpdateManyWithoutTargetWorkspaceInput
  users?: UserUpdateManyWithoutWorkspaceInput
  jobs?: JobUpdateManyWithoutWorkspaceInput
  applications?: ApplicationUpdateManyWithoutWorkspaceInput
  candidates?: CandidateUpdateManyWithoutWorkspaceInput
  invites?: InviteUpdateManyWithoutWorkspaceInput
  tags?: TagUpdateManyInput
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

export interface CandidateUpdatecoverLetterInput {
  set?: String[] | String
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

export interface UserCreateInput {
  firstName?: String
  lastName?: String
  email: String
  username: String
  password: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  workspace: WorkspaceCreateOneWithoutUsersInput
  events?: EventCreateOneWithoutActorUserInput
  notifications?: NotificationCreateManyWithoutUserInput
  subscriptionJobs?: JobCreateManyWithoutSubscribersInput
  subscriptionCandidates?: CandidateCreateManyWithoutSubscribersInput
  subscriptionTasks?: TaskCreateManyWithoutSubscribersInput
  tasks?: TaskCreateManyWithoutOwnersInput
}

export interface InviteUpdateWithoutWorkspaceDataInput {
  email?: String
  expireAt?: DateTime
  invitedBy?: UserUpdateOneInput
}

export interface TaskCreateManyWithoutOwnersInput {
  create?: TaskCreateWithoutOwnersInput[] | TaskCreateWithoutOwnersInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
}

export interface CandidateUpdatesourceInput {
  set?: String[] | String
}

export interface TaskCreateWithoutOwnersInput {
  targetType?: TaskTargetEnum
  title?: String
  description?: String
  dueAt?: DateTime
  workspace: WorkspaceCreateOneInput
  subscribers?: UserCreateManyWithoutSubscriptionTasksInput
  job?: JobCreateOneInput
  candidate?: CandidateCreateOneWithoutTasksInput
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
  type?: FieldTypeEnum
  type_not?: FieldTypeEnum
  type_in?: FieldTypeEnum[] | FieldTypeEnum
  type_not_in?: FieldTypeEnum[] | FieldTypeEnum
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

export interface CandidateCreateOneWithoutTasksInput {
  create?: CandidateCreateWithoutTasksInput
  connect?: CandidateWhereUniqueInput
}

export interface TagSubscriptionWhereInput {
  AND?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput
  OR?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput
  NOT?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: TagWhereInput
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
  events?: EventCreateManyWithoutTargetCandidateInput
  subscribers?: UserCreateManyWithoutSubscriptionCandidatesInput
  tags?: TagCreateManyInput
  fields?: FieldCreateManyInput
  applications?: ApplicationCreateManyWithoutCandidateInput
  comments?: CommentCreateManyInput
}

export interface TaskSubscriptionWhereInput {
  AND?: TaskSubscriptionWhereInput[] | TaskSubscriptionWhereInput
  OR?: TaskSubscriptionWhereInput[] | TaskSubscriptionWhereInput
  NOT?: TaskSubscriptionWhereInput[] | TaskSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: TaskWhereInput
}

export interface ApplicationCreateManyWithoutCandidateInput {
  create?: ApplicationCreateWithoutCandidateInput[] | ApplicationCreateWithoutCandidateInput
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
}

export interface JobSubscriptionWhereInput {
  AND?: JobSubscriptionWhereInput[] | JobSubscriptionWhereInput
  OR?: JobSubscriptionWhereInput[] | JobSubscriptionWhereInput
  NOT?: JobSubscriptionWhereInput[] | JobSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: JobWhereInput
}

export interface ApplicationCreateWithoutCandidateInput {
  disqualifyReason?: String
  workspace: WorkspaceCreateOneWithoutApplicationsInput
  job: JobCreateOneWithoutApplicationsInput
  stage: StageCreateOneInput
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

export interface StageCreateOneInput {
  create?: StageCreateInput
  connect?: StageWhereUniqueInput
}

export interface StageSubscriptionWhereInput {
  AND?: StageSubscriptionWhereInput[] | StageSubscriptionWhereInput
  OR?: StageSubscriptionWhereInput[] | StageSubscriptionWhereInput
  NOT?: StageSubscriptionWhereInput[] | StageSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: StageWhereInput
}

export interface StageCreateInput {
  name: String
  description?: String
  position: Int
  type: StageTypeEnum
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface CommentCreateOneInput {
  create?: CommentCreateInput
  connect?: CommentWhereUniqueInput
}

export interface CandidateSubscriptionWhereInput {
  AND?: CandidateSubscriptionWhereInput[] | CandidateSubscriptionWhereInput
  OR?: CandidateSubscriptionWhereInput[] | CandidateSubscriptionWhereInput
  NOT?: CandidateSubscriptionWhereInput[] | CandidateSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CandidateWhereInput
}

export interface StageCreateManyInput {
  create?: StageCreateInput[] | StageCreateInput
  connect?: StageWhereUniqueInput[] | StageWhereUniqueInput
}

export interface LocationSubscriptionWhereInput {
  AND?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput
  OR?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput
  NOT?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: LocationWhereInput
}

export interface LocationCreateOneInput {
  create?: LocationCreateInput
  connect?: LocationWhereUniqueInput
}

export interface NotificationSubscriptionWhereInput {
  AND?: NotificationSubscriptionWhereInput[] | NotificationSubscriptionWhereInput
  OR?: NotificationSubscriptionWhereInput[] | NotificationSubscriptionWhereInput
  NOT?: NotificationSubscriptionWhereInput[] | NotificationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: NotificationWhereInput
}

export interface LocationCreateInput {
  country: String
  region: String
  city: String
  zip: String
}

export interface InviteSubscriptionWhereInput {
  AND?: InviteSubscriptionWhereInput[] | InviteSubscriptionWhereInput
  OR?: InviteSubscriptionWhereInput[] | InviteSubscriptionWhereInput
  NOT?: InviteSubscriptionWhereInput[] | InviteSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: InviteWhereInput
}

export interface WorkspaceCreateOneWithoutEventsInput {
  create?: WorkspaceCreateWithoutEventsInput
  connect?: WorkspaceWhereUniqueInput
}

export interface ApplicationSubscriptionWhereInput {
  AND?: ApplicationSubscriptionWhereInput[] | ApplicationSubscriptionWhereInput
  OR?: ApplicationSubscriptionWhereInput[] | ApplicationSubscriptionWhereInput
  NOT?: ApplicationSubscriptionWhereInput[] | ApplicationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ApplicationWhereInput
}

export interface WorkspaceCreateWithoutEventsInput {
  name: String
  users?: UserCreateManyWithoutWorkspaceInput
  jobs?: JobCreateManyWithoutWorkspaceInput
  applications?: ApplicationCreateManyWithoutWorkspaceInput
  candidates?: CandidateCreateManyWithoutWorkspaceInput
  invites?: InviteCreateManyWithoutWorkspaceInput
  tags?: TagCreateManyInput
}

export interface CommentUpdateInput {
  content?: String
  createdBy?: UserUpdateOneInput
  parent?: CommentUpdateOneInput
}

export interface InviteCreateManyWithoutWorkspaceInput {
  create?: InviteCreateWithoutWorkspaceInput[] | InviteCreateWithoutWorkspaceInput
  connect?: InviteWhereUniqueInput[] | InviteWhereUniqueInput
}

export interface InviteWhereUniqueInput {
  id?: ID_Input
}

export interface InviteCreateWithoutWorkspaceInput {
  email: String
  expireAt: DateTime
  invitedBy: UserCreateOneInput
}

export interface LocationWhereUniqueInput {
  id?: ID_Input
}

export interface JobCreateOneWithoutEventsInput {
  create?: JobCreateWithoutEventsInput
  connect?: JobWhereUniqueInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface JobCreateWithoutEventsInput {
  status: JobType
  title: String
  department?: String
  description?: String
  requirements?: String
  workspace: WorkspaceCreateOneWithoutJobsInput
  subscribers?: UserCreateManyWithoutSubscriptionJobsInput
  applications?: ApplicationCreateManyWithoutJobInput
  stages?: StageCreateManyInput
  comments?: CommentCreateManyInput
  location?: LocationCreateOneInput
}

export interface StageWhereUniqueInput {
  id?: ID_Input
}

export interface InviteCreateInput {
  email: String
  expireAt: DateTime
  workspace: WorkspaceCreateOneWithoutInvitesInput
  invitedBy: UserCreateOneInput
}

export interface JobWhereUniqueInput {
  id?: ID_Input
}

export interface WorkspaceCreateOneWithoutInvitesInput {
  create?: WorkspaceCreateWithoutInvitesInput
  connect?: WorkspaceWhereUniqueInput
}

export interface TagWhereUniqueInput {
  id?: ID_Input
}

export interface WorkspaceCreateWithoutInvitesInput {
  name: String
  events?: EventCreateManyWithoutTargetWorkspaceInput
  users?: UserCreateManyWithoutWorkspaceInput
  jobs?: JobCreateManyWithoutWorkspaceInput
  applications?: ApplicationCreateManyWithoutWorkspaceInput
  candidates?: CandidateCreateManyWithoutWorkspaceInput
  tags?: TagCreateManyInput
}

export interface CommentWhereUniqueInput {
  id?: ID_Input
}

export interface NotificationCreateInput {
  status: NotificationStatusEnum
  user: UserCreateOneWithoutNotificationsInput
  event: EventCreateOneInput
}

export interface TagUpdateInput {
  label?: String
}

export interface UserCreateOneWithoutNotificationsInput {
  create?: UserCreateWithoutNotificationsInput
  connect?: UserWhereUniqueInput
}

export interface JobUpdateInput {
  status?: JobType
  title?: String
  department?: String
  description?: String
  requirements?: String
  workspace?: WorkspaceUpdateOneWithoutJobsInput
  subscribers?: UserUpdateManyWithoutSubscriptionJobsInput
  events?: EventUpdateManyWithoutTargetJobInput
  applications?: ApplicationUpdateManyWithoutJobInput
  stages?: StageUpdateManyInput
  comments?: CommentUpdateManyInput
  location?: LocationUpdateOneInput
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
  events?: EventCreateOneWithoutActorUserInput
  subscriptionJobs?: JobCreateManyWithoutSubscribersInput
  subscriptionCandidates?: CandidateCreateManyWithoutSubscribersInput
  subscriptionTasks?: TaskCreateManyWithoutSubscribersInput
  tasks?: TaskCreateManyWithoutOwnersInput
}

export interface StageUpdateInput {
  name?: String
  description?: String
  position?: Int
  type?: StageTypeEnum
}

export interface ApplicationUpdateInput {
  disqualifyReason?: String
  workspace?: WorkspaceUpdateOneWithoutApplicationsInput
  job?: JobUpdateOneWithoutApplicationsInput
  candidate?: CandidateUpdateOneWithoutApplicationsInput
  stage?: StageUpdateOneInput
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
  events?: EventUpdateOneWithoutActorUserInput
  notifications?: NotificationUpdateManyWithoutUserInput
  subscriptionJobs?: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates?: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks?: TaskUpdateManyWithoutSubscribersInput
  tasks?: TaskUpdateManyWithoutOwnersInput
}

export interface WorkspaceUpdateOneWithoutApplicationsInput {
  create?: WorkspaceCreateWithoutApplicationsInput
  connect?: WorkspaceWhereUniqueInput
  delete?: Boolean
  update?: WorkspaceUpdateWithoutApplicationsDataInput
  upsert?: WorkspaceUpsertWithoutApplicationsInput
}

export interface LocationUpdateInput {
  country?: String
  region?: String
  city?: String
  zip?: String
}

export interface WorkspaceUpdateWithoutApplicationsDataInput {
  name?: String
  events?: EventUpdateManyWithoutTargetWorkspaceInput
  users?: UserUpdateManyWithoutWorkspaceInput
  jobs?: JobUpdateManyWithoutWorkspaceInput
  candidates?: CandidateUpdateManyWithoutWorkspaceInput
  invites?: InviteUpdateManyWithoutWorkspaceInput
  tags?: TagUpdateManyInput
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
  events?: EventUpdateOneWithoutActorUserInput
  subscriptionJobs?: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates?: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks?: TaskUpdateManyWithoutSubscribersInput
  tasks?: TaskUpdateManyWithoutOwnersInput
}

export interface EventUpdateManyWithoutTargetWorkspaceInput {
  create?: EventCreateWithoutTargetWorkspaceInput[] | EventCreateWithoutTargetWorkspaceInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  disconnect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  delete?: EventWhereUniqueInput[] | EventWhereUniqueInput
  update?: EventUpdateWithWhereUniqueWithoutTargetWorkspaceInput[] | EventUpdateWithWhereUniqueWithoutTargetWorkspaceInput
  upsert?: EventUpsertWithWhereUniqueWithoutTargetWorkspaceInput[] | EventUpsertWithWhereUniqueWithoutTargetWorkspaceInput
}

export interface NotificationUpdateInput {
  status?: NotificationStatusEnum
  user?: UserUpdateOneWithoutNotificationsInput
  event?: EventUpdateOneInput
}

export interface EventUpdateWithWhereUniqueWithoutTargetWorkspaceInput {
  where: EventWhereUniqueInput
  data: EventUpdateWithoutTargetWorkspaceDataInput
}

export interface WorkspaceUpdateWithoutInvitesDataInput {
  name?: String
  events?: EventUpdateManyWithoutTargetWorkspaceInput
  users?: UserUpdateManyWithoutWorkspaceInput
  jobs?: JobUpdateManyWithoutWorkspaceInput
  applications?: ApplicationUpdateManyWithoutWorkspaceInput
  candidates?: CandidateUpdateManyWithoutWorkspaceInput
  tags?: TagUpdateManyInput
}

export interface EventUpdateWithoutTargetWorkspaceDataInput {
  type?: EventTypeEnum
  actorType?: EventActorTypeEnum
  targetType?: EventTargetTypeEnum
  workspace?: WorkspaceUpdateOneInput
  actorUser?: UserUpdateOneWithoutEventsInput
  actorCandidate?: CandidateUpdateOneInput
  targetCandidate?: CandidateUpdateOneWithoutEventsInput
  targetJob?: JobUpdateOneWithoutEventsInput
  targetTask?: TaskUpdateOneInput
}

export interface InviteUpdateInput {
  email?: String
  expireAt?: DateTime
  workspace?: WorkspaceUpdateOneWithoutInvitesInput
  invitedBy?: UserUpdateOneInput
}

export interface WorkspaceUpdateOneInput {
  create?: WorkspaceCreateInput
  connect?: WorkspaceWhereUniqueInput
  delete?: Boolean
  update?: WorkspaceUpdateDataInput
  upsert?: WorkspaceUpsertNestedInput
}

export interface EventUpsertWithWhereUniqueWithoutTargetWorkspaceInput {
  where: EventWhereUniqueInput
  update: EventUpdateWithoutTargetWorkspaceDataInput
  create: EventCreateWithoutTargetWorkspaceInput
}

export interface InviteUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: InviteWhereUniqueInput
  update: InviteUpdateWithoutWorkspaceDataInput
  create: InviteCreateWithoutWorkspaceInput
}

export interface UserUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutWorkspaceDataInput
  create: UserCreateWithoutWorkspaceInput
}

export interface UserUpdateManyWithoutWorkspaceInput {
  create?: UserCreateWithoutWorkspaceInput[] | UserCreateWithoutWorkspaceInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutWorkspaceInput[] | UserUpdateWithWhereUniqueWithoutWorkspaceInput
  upsert?: UserUpsertWithWhereUniqueWithoutWorkspaceInput[] | UserUpsertWithWhereUniqueWithoutWorkspaceInput
}

export interface CandidateUpsertNestedInput {
  update: CandidateUpdateDataInput
  create: CandidateCreateInput
}

export interface UserUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutWorkspaceDataInput
}

export interface JobUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: JobWhereUniqueInput
  update: JobUpdateWithoutWorkspaceDataInput
  create: JobCreateWithoutWorkspaceInput
}

export interface UserUpdateWithoutWorkspaceDataInput {
  firstName?: String
  lastName?: String
  email?: String
  username?: String
  password?: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  events?: EventUpdateOneWithoutActorUserInput
  notifications?: NotificationUpdateManyWithoutUserInput
  subscriptionJobs?: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates?: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks?: TaskUpdateManyWithoutSubscribersInput
  tasks?: TaskUpdateManyWithoutOwnersInput
}

export interface WorkspaceUpsertWithoutUsersInput {
  update: WorkspaceUpdateWithoutUsersDataInput
  create: WorkspaceCreateWithoutUsersInput
}

export interface EventUpdateOneWithoutActorUserInput {
  create?: EventCreateWithoutActorUserInput
  connect?: EventWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: EventUpdateWithoutActorUserDataInput
  upsert?: EventUpsertWithoutActorUserInput
}

export interface JobUpsertWithoutApplicationsInput {
  update: JobUpdateWithoutApplicationsDataInput
  create: JobCreateWithoutApplicationsInput
}

export interface EventUpdateWithoutActorUserDataInput {
  type?: EventTypeEnum
  actorType?: EventActorTypeEnum
  targetType?: EventTargetTypeEnum
  workspace?: WorkspaceUpdateOneInput
  actorCandidate?: CandidateUpdateOneInput
  targetCandidate?: CandidateUpdateOneWithoutEventsInput
  targetJob?: JobUpdateOneWithoutEventsInput
  targetTask?: TaskUpdateOneInput
  targetWorkspace?: WorkspaceUpdateOneWithoutEventsInput
}

export interface CandidateUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: CandidateWhereUniqueInput
  update: CandidateUpdateWithoutWorkspaceDataInput
  create: CandidateCreateWithoutWorkspaceInput
}

export interface CandidateUpdateOneInput {
  create?: CandidateCreateInput
  connect?: CandidateWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CandidateUpdateDataInput
  upsert?: CandidateUpsertNestedInput
}

export interface UserUpsertWithoutEventsInput {
  update: UserUpdateWithoutEventsDataInput
  create: UserCreateWithoutEventsInput
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
  events?: EventUpdateManyWithoutTargetCandidateInput
  subscribers?: UserUpdateManyWithoutSubscriptionCandidatesInput
  tags?: TagUpdateManyInput
  fields?: FieldUpdateManyInput
  tasks?: TaskUpdateManyWithoutCandidateInput
  applications?: ApplicationUpdateManyWithoutCandidateInput
  comments?: CommentUpdateManyInput
}

export interface EventUpsertNestedInput {
  update: EventUpdateDataInput
  create: EventCreateInput
}

export interface CandidateUpdateemailsInput {
  set?: String[] | String
}

export interface JobUpdateWithoutEventsDataInput {
  status?: JobType
  title?: String
  department?: String
  description?: String
  requirements?: String
  workspace?: WorkspaceUpdateOneWithoutJobsInput
  subscribers?: UserUpdateManyWithoutSubscriptionJobsInput
  applications?: ApplicationUpdateManyWithoutJobInput
  stages?: StageUpdateManyInput
  comments?: CommentUpdateManyInput
  location?: LocationUpdateOneInput
}

export interface CandidateUpdatephonesInput {
  set?: String[] | String
}

export interface CandidateUpsertWithoutEventsInput {
  update: CandidateUpdateWithoutEventsDataInput
  create: CandidateCreateWithoutEventsInput
}

export interface CandidateUpdatelinksInput {
  set?: String[] | String
}

export interface JobUpsertWithWhereUniqueWithoutSubscribersInput {
  where: JobWhereUniqueInput
  update: JobUpdateWithoutSubscribersDataInput
  create: JobCreateWithoutSubscribersInput
}

export interface CandidateUpdateresumeInput {
  set?: String[] | String
}

export interface WorkspaceUpsertWithoutEventsInput {
  update: WorkspaceUpdateWithoutEventsDataInput
  create: WorkspaceCreateWithoutEventsInput
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
  targetType?: TaskTargetEnum
  targetType_not?: TaskTargetEnum
  targetType_in?: TaskTargetEnum[] | TaskTargetEnum
  targetType_not_in?: TaskTargetEnum[] | TaskTargetEnum
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
  job?: JobWhereInput
  candidate?: CandidateWhereInput
}

export interface WorkspaceCreateOneWithoutApplicationsInput {
  create?: WorkspaceCreateWithoutApplicationsInput
  connect?: WorkspaceWhereUniqueInput
}

export interface EventCreateManyWithoutTargetWorkspaceInput {
  create?: EventCreateWithoutTargetWorkspaceInput[] | EventCreateWithoutTargetWorkspaceInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
}

export interface WorkspaceCreateOneInput {
  create?: WorkspaceCreateInput
  connect?: WorkspaceWhereUniqueInput
}

export interface WorkspaceUpdateOneWithoutCandidatesInput {
  create?: WorkspaceCreateWithoutCandidatesInput
  connect?: WorkspaceWhereUniqueInput
  delete?: Boolean
  update?: WorkspaceUpdateWithoutCandidatesDataInput
  upsert?: WorkspaceUpsertWithoutCandidatesInput
}

export interface UserCreateManyWithoutWorkspaceInput {
  create?: UserCreateWithoutWorkspaceInput[] | UserCreateWithoutWorkspaceInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface WorkspaceUpdateWithoutCandidatesDataInput {
  name?: String
  events?: EventUpdateManyWithoutTargetWorkspaceInput
  users?: UserUpdateManyWithoutWorkspaceInput
  jobs?: JobUpdateManyWithoutWorkspaceInput
  applications?: ApplicationUpdateManyWithoutWorkspaceInput
  invites?: InviteUpdateManyWithoutWorkspaceInput
  tags?: TagUpdateManyInput
}

export interface EventCreateOneWithoutActorUserInput {
  create?: EventCreateWithoutActorUserInput
  connect?: EventWhereUniqueInput
}

export interface JobUpdateManyWithoutWorkspaceInput {
  create?: JobCreateWithoutWorkspaceInput[] | JobCreateWithoutWorkspaceInput
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput
  disconnect?: JobWhereUniqueInput[] | JobWhereUniqueInput
  delete?: JobWhereUniqueInput[] | JobWhereUniqueInput
  update?: JobUpdateWithWhereUniqueWithoutWorkspaceInput[] | JobUpdateWithWhereUniqueWithoutWorkspaceInput
  upsert?: JobUpsertWithWhereUniqueWithoutWorkspaceInput[] | JobUpsertWithWhereUniqueWithoutWorkspaceInput
}

export interface CandidateCreateOneInput {
  create?: CandidateCreateInput
  connect?: CandidateWhereUniqueInput
}

export interface JobUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: JobWhereUniqueInput
  data: JobUpdateWithoutWorkspaceDataInput
}

export interface CandidateCreateemailsInput {
  set?: String[] | String
}

export interface JobUpdateWithoutWorkspaceDataInput {
  status?: JobType
  title?: String
  department?: String
  description?: String
  requirements?: String
  subscribers?: UserUpdateManyWithoutSubscriptionJobsInput
  events?: EventUpdateManyWithoutTargetJobInput
  applications?: ApplicationUpdateManyWithoutJobInput
  stages?: StageUpdateManyInput
  comments?: CommentUpdateManyInput
  location?: LocationUpdateOneInput
}

export interface CandidateCreatelinksInput {
  set?: String[] | String
}

export interface UserUpdateManyWithoutSubscriptionJobsInput {
  create?: UserCreateWithoutSubscriptionJobsInput[] | UserCreateWithoutSubscriptionJobsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutSubscriptionJobsInput[] | UserUpdateWithWhereUniqueWithoutSubscriptionJobsInput
  upsert?: UserUpsertWithWhereUniqueWithoutSubscriptionJobsInput[] | UserUpsertWithWhereUniqueWithoutSubscriptionJobsInput
}

export interface CandidateCreatecoverLetterInput {
  set?: String[] | String
}

export interface UserUpdateWithWhereUniqueWithoutSubscriptionJobsInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutSubscriptionJobsDataInput
}

export interface WorkspaceCreateOneWithoutCandidatesInput {
  create?: WorkspaceCreateWithoutCandidatesInput
  connect?: WorkspaceWhereUniqueInput
}

export interface UserUpdateWithoutSubscriptionJobsDataInput {
  firstName?: String
  lastName?: String
  email?: String
  username?: String
  password?: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  workspace?: WorkspaceUpdateOneWithoutUsersInput
  events?: EventUpdateOneWithoutActorUserInput
  notifications?: NotificationUpdateManyWithoutUserInput
  subscriptionCandidates?: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks?: TaskUpdateManyWithoutSubscribersInput
  tasks?: TaskUpdateManyWithoutOwnersInput
}

export interface JobCreateManyWithoutWorkspaceInput {
  create?: JobCreateWithoutWorkspaceInput[] | JobCreateWithoutWorkspaceInput
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput
}

export interface WorkspaceUpdateOneWithoutUsersInput {
  create?: WorkspaceCreateWithoutUsersInput
  connect?: WorkspaceWhereUniqueInput
  delete?: Boolean
  update?: WorkspaceUpdateWithoutUsersDataInput
  upsert?: WorkspaceUpsertWithoutUsersInput
}

export interface UserCreateManyWithoutSubscriptionJobsInput {
  create?: UserCreateWithoutSubscriptionJobsInput[] | UserCreateWithoutSubscriptionJobsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface WorkspaceUpdateWithoutUsersDataInput {
  name?: String
  events?: EventUpdateManyWithoutTargetWorkspaceInput
  jobs?: JobUpdateManyWithoutWorkspaceInput
  applications?: ApplicationUpdateManyWithoutWorkspaceInput
  candidates?: CandidateUpdateManyWithoutWorkspaceInput
  invites?: InviteUpdateManyWithoutWorkspaceInput
  tags?: TagUpdateManyInput
}

export interface WorkspaceCreateOneWithoutUsersInput {
  create?: WorkspaceCreateWithoutUsersInput
  connect?: WorkspaceWhereUniqueInput
}

export interface ApplicationUpdateManyWithoutWorkspaceInput {
  create?: ApplicationCreateWithoutWorkspaceInput[] | ApplicationCreateWithoutWorkspaceInput
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  disconnect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  delete?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  update?: ApplicationUpdateWithWhereUniqueWithoutWorkspaceInput[] | ApplicationUpdateWithWhereUniqueWithoutWorkspaceInput
  upsert?: ApplicationUpsertWithWhereUniqueWithoutWorkspaceInput[] | ApplicationUpsertWithWhereUniqueWithoutWorkspaceInput
}

export interface ApplicationCreateManyWithoutWorkspaceInput {
  create?: ApplicationCreateWithoutWorkspaceInput[] | ApplicationCreateWithoutWorkspaceInput
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
}

export interface ApplicationUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: ApplicationWhereUniqueInput
  data: ApplicationUpdateWithoutWorkspaceDataInput
}

export interface JobCreateOneWithoutApplicationsInput {
  create?: JobCreateWithoutApplicationsInput
  connect?: JobWhereUniqueInput
}

export interface ApplicationUpdateWithoutWorkspaceDataInput {
  disqualifyReason?: String
  job?: JobUpdateOneWithoutApplicationsInput
  candidate?: CandidateUpdateOneWithoutApplicationsInput
  stage?: StageUpdateOneInput
}

export interface WorkspaceCreateOneWithoutJobsInput {
  create?: WorkspaceCreateWithoutJobsInput
  connect?: WorkspaceWhereUniqueInput
}

export interface JobUpdateOneWithoutApplicationsInput {
  create?: JobCreateWithoutApplicationsInput
  connect?: JobWhereUniqueInput
  delete?: Boolean
  update?: JobUpdateWithoutApplicationsDataInput
  upsert?: JobUpsertWithoutApplicationsInput
}

export interface CandidateCreateManyWithoutWorkspaceInput {
  create?: CandidateCreateWithoutWorkspaceInput[] | CandidateCreateWithoutWorkspaceInput
  connect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
}

export interface JobUpdateWithoutApplicationsDataInput {
  status?: JobType
  title?: String
  department?: String
  description?: String
  requirements?: String
  workspace?: WorkspaceUpdateOneWithoutJobsInput
  subscribers?: UserUpdateManyWithoutSubscriptionJobsInput
  events?: EventUpdateManyWithoutTargetJobInput
  stages?: StageUpdateManyInput
  comments?: CommentUpdateManyInput
  location?: LocationUpdateOneInput
}

export interface EventCreateManyWithoutTargetCandidateInput {
  create?: EventCreateWithoutTargetCandidateInput[] | EventCreateWithoutTargetCandidateInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
}

export interface WorkspaceUpdateOneWithoutJobsInput {
  create?: WorkspaceCreateWithoutJobsInput
  connect?: WorkspaceWhereUniqueInput
  delete?: Boolean
  update?: WorkspaceUpdateWithoutJobsDataInput
  upsert?: WorkspaceUpsertWithoutJobsInput
}

export interface UserCreateOneWithoutEventsInput {
  create?: UserCreateWithoutEventsInput
  connect?: UserWhereUniqueInput
}

export interface WorkspaceUpdateWithoutJobsDataInput {
  name?: String
  events?: EventUpdateManyWithoutTargetWorkspaceInput
  users?: UserUpdateManyWithoutWorkspaceInput
  applications?: ApplicationUpdateManyWithoutWorkspaceInput
  candidates?: CandidateUpdateManyWithoutWorkspaceInput
  invites?: InviteUpdateManyWithoutWorkspaceInput
  tags?: TagUpdateManyInput
}

export interface NotificationCreateManyWithoutUserInput {
  create?: NotificationCreateWithoutUserInput[] | NotificationCreateWithoutUserInput
  connect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
}

export interface CandidateUpdateManyWithoutWorkspaceInput {
  create?: CandidateCreateWithoutWorkspaceInput[] | CandidateCreateWithoutWorkspaceInput
  connect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
  disconnect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
  delete?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
  update?: CandidateUpdateWithWhereUniqueWithoutWorkspaceInput[] | CandidateUpdateWithWhereUniqueWithoutWorkspaceInput
  upsert?: CandidateUpsertWithWhereUniqueWithoutWorkspaceInput[] | CandidateUpsertWithWhereUniqueWithoutWorkspaceInput
}

export interface EventCreateOneInput {
  create?: EventCreateInput
  connect?: EventWhereUniqueInput
}

export interface CandidateUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: CandidateWhereUniqueInput
  data: CandidateUpdateWithoutWorkspaceDataInput
}

export interface CandidateCreateOneWithoutEventsInput {
  create?: CandidateCreateWithoutEventsInput
  connect?: CandidateWhereUniqueInput
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
  events?: EventUpdateManyWithoutTargetCandidateInput
  subscribers?: UserUpdateManyWithoutSubscriptionCandidatesInput
  tags?: TagUpdateManyInput
  fields?: FieldUpdateManyInput
  tasks?: TaskUpdateManyWithoutCandidateInput
  applications?: ApplicationUpdateManyWithoutCandidateInput
  comments?: CommentUpdateManyInput
}

export interface UserCreateManyWithoutSubscriptionCandidatesInput {
  create?: UserCreateWithoutSubscriptionCandidatesInput[] | UserCreateWithoutSubscriptionCandidatesInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface EventUpdateManyWithoutTargetCandidateInput {
  create?: EventCreateWithoutTargetCandidateInput[] | EventCreateWithoutTargetCandidateInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  disconnect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  delete?: EventWhereUniqueInput[] | EventWhereUniqueInput
  update?: EventUpdateWithWhereUniqueWithoutTargetCandidateInput[] | EventUpdateWithWhereUniqueWithoutTargetCandidateInput
  upsert?: EventUpsertWithWhereUniqueWithoutTargetCandidateInput[] | EventUpsertWithWhereUniqueWithoutTargetCandidateInput
}

export interface JobCreateManyWithoutSubscribersInput {
  create?: JobCreateWithoutSubscribersInput[] | JobCreateWithoutSubscribersInput
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput
}

export interface EventUpdateWithWhereUniqueWithoutTargetCandidateInput {
  where: EventWhereUniqueInput
  data: EventUpdateWithoutTargetCandidateDataInput
}

export interface EventCreateManyWithoutTargetJobInput {
  create?: EventCreateWithoutTargetJobInput[] | EventCreateWithoutTargetJobInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
}

export interface EventUpdateWithoutTargetCandidateDataInput {
  type?: EventTypeEnum
  actorType?: EventActorTypeEnum
  targetType?: EventTargetTypeEnum
  workspace?: WorkspaceUpdateOneInput
  actorUser?: UserUpdateOneWithoutEventsInput
  actorCandidate?: CandidateUpdateOneInput
  targetJob?: JobUpdateOneWithoutEventsInput
  targetTask?: TaskUpdateOneInput
  targetWorkspace?: WorkspaceUpdateOneWithoutEventsInput
}

export interface TaskCreateOneInput {
  create?: TaskCreateInput
  connect?: TaskWhereUniqueInput
}

export interface UserUpdateOneWithoutEventsInput {
  create?: UserCreateWithoutEventsInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutEventsDataInput
  upsert?: UserUpsertWithoutEventsInput
}

export interface UserCreateManyWithoutSubscriptionTasksInput {
  create?: UserCreateWithoutSubscriptionTasksInput[] | UserCreateWithoutSubscriptionTasksInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
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
  subscriptionJobs?: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates?: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks?: TaskUpdateManyWithoutSubscribersInput
  tasks?: TaskUpdateManyWithoutOwnersInput
}

export interface CandidateCreateManyWithoutSubscribersInput {
  create?: CandidateCreateWithoutSubscribersInput[] | CandidateCreateWithoutSubscribersInput
  connect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
}

export interface NotificationUpdateManyWithoutUserInput {
  create?: NotificationCreateWithoutUserInput[] | NotificationCreateWithoutUserInput
  connect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  disconnect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  delete?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  update?: NotificationUpdateWithWhereUniqueWithoutUserInput[] | NotificationUpdateWithWhereUniqueWithoutUserInput
  upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput[] | NotificationUpsertWithWhereUniqueWithoutUserInput
}

export interface TagCreateManyInput {
  create?: TagCreateInput[] | TagCreateInput
  connect?: TagWhereUniqueInput[] | TagWhereUniqueInput
}

export interface NotificationUpdateWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput
  data: NotificationUpdateWithoutUserDataInput
}

export interface FieldCreateManyInput {
  create?: FieldCreateInput[] | FieldCreateInput
  connect?: FieldWhereUniqueInput[] | FieldWhereUniqueInput
}

export interface NotificationUpdateWithoutUserDataInput {
  status?: NotificationStatusEnum
  event?: EventUpdateOneInput
}

export interface TaskCreateManyWithoutCandidateInput {
  create?: TaskCreateWithoutCandidateInput[] | TaskCreateWithoutCandidateInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
}

export interface EventUpdateOneInput {
  create?: EventCreateInput
  connect?: EventWhereUniqueInput
  delete?: Boolean
  update?: EventUpdateDataInput
  upsert?: EventUpsertNestedInput
}

export interface UserCreateManyWithoutTasksInput {
  create?: UserCreateWithoutTasksInput[] | UserCreateWithoutTasksInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface EventUpdateDataInput {
  type?: EventTypeEnum
  actorType?: EventActorTypeEnum
  targetType?: EventTargetTypeEnum
  workspace?: WorkspaceUpdateOneInput
  actorUser?: UserUpdateOneWithoutEventsInput
  actorCandidate?: CandidateUpdateOneInput
  targetCandidate?: CandidateUpdateOneWithoutEventsInput
  targetJob?: JobUpdateOneWithoutEventsInput
  targetTask?: TaskUpdateOneInput
  targetWorkspace?: WorkspaceUpdateOneWithoutEventsInput
}

export interface TaskCreateManyWithoutSubscribersInput {
  create?: TaskCreateWithoutSubscribersInput[] | TaskCreateWithoutSubscribersInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
}

export interface CandidateUpdateOneWithoutEventsInput {
  create?: CandidateCreateWithoutEventsInput
  connect?: CandidateWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CandidateUpdateWithoutEventsDataInput
  upsert?: CandidateUpsertWithoutEventsInput
}

export interface JobCreateOneInput {
  create?: JobCreateInput
  connect?: JobWhereUniqueInput
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
  subscribers?: UserUpdateManyWithoutSubscriptionCandidatesInput
  tags?: TagUpdateManyInput
  fields?: FieldUpdateManyInput
  tasks?: TaskUpdateManyWithoutCandidateInput
  applications?: ApplicationUpdateManyWithoutCandidateInput
  comments?: CommentUpdateManyInput
}

export interface ApplicationCreateManyWithoutJobInput {
  create?: ApplicationCreateWithoutJobInput[] | ApplicationCreateWithoutJobInput
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
}

export interface UserUpdateManyWithoutSubscriptionCandidatesInput {
  create?: UserCreateWithoutSubscriptionCandidatesInput[] | UserCreateWithoutSubscriptionCandidatesInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutSubscriptionCandidatesInput[] | UserUpdateWithWhereUniqueWithoutSubscriptionCandidatesInput
  upsert?: UserUpsertWithWhereUniqueWithoutSubscriptionCandidatesInput[] | UserUpsertWithWhereUniqueWithoutSubscriptionCandidatesInput
}

export interface CandidateCreateOneWithoutApplicationsInput {
  create?: CandidateCreateWithoutApplicationsInput
  connect?: CandidateWhereUniqueInput
}

export interface UserUpdateWithWhereUniqueWithoutSubscriptionCandidatesInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutSubscriptionCandidatesDataInput
}

export interface CommentCreateManyInput {
  create?: CommentCreateInput[] | CommentCreateInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
}

export interface UserUpdateWithoutSubscriptionCandidatesDataInput {
  firstName?: String
  lastName?: String
  email?: String
  username?: String
  password?: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  workspace?: WorkspaceUpdateOneWithoutUsersInput
  events?: EventUpdateOneWithoutActorUserInput
  notifications?: NotificationUpdateManyWithoutUserInput
  subscriptionJobs?: JobUpdateManyWithoutSubscribersInput
  subscriptionTasks?: TaskUpdateManyWithoutSubscribersInput
  tasks?: TaskUpdateManyWithoutOwnersInput
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface JobUpdateManyWithoutSubscribersInput {
  create?: JobCreateWithoutSubscribersInput[] | JobCreateWithoutSubscribersInput
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput
  disconnect?: JobWhereUniqueInput[] | JobWhereUniqueInput
  delete?: JobWhereUniqueInput[] | JobWhereUniqueInput
  update?: JobUpdateWithWhereUniqueWithoutSubscribersInput[] | JobUpdateWithWhereUniqueWithoutSubscribersInput
  upsert?: JobUpsertWithWhereUniqueWithoutSubscribersInput[] | JobUpsertWithWhereUniqueWithoutSubscribersInput
}

export interface FieldSubscriptionWhereInput {
  AND?: FieldSubscriptionWhereInput[] | FieldSubscriptionWhereInput
  OR?: FieldSubscriptionWhereInput[] | FieldSubscriptionWhereInput
  NOT?: FieldSubscriptionWhereInput[] | FieldSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: FieldWhereInput
}

export interface JobUpdateWithWhereUniqueWithoutSubscribersInput {
  where: JobWhereUniqueInput
  data: JobUpdateWithoutSubscribersDataInput
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

export interface JobUpdateWithoutSubscribersDataInput {
  status?: JobType
  title?: String
  department?: String
  description?: String
  requirements?: String
  workspace?: WorkspaceUpdateOneWithoutJobsInput
  events?: EventUpdateManyWithoutTargetJobInput
  applications?: ApplicationUpdateManyWithoutJobInput
  stages?: StageUpdateManyInput
  comments?: CommentUpdateManyInput
  location?: LocationUpdateOneInput
}

export interface WorkspaceSubscriptionWhereInput {
  AND?: WorkspaceSubscriptionWhereInput[] | WorkspaceSubscriptionWhereInput
  OR?: WorkspaceSubscriptionWhereInput[] | WorkspaceSubscriptionWhereInput
  NOT?: WorkspaceSubscriptionWhereInput[] | WorkspaceSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: WorkspaceWhereInput
}

export interface EventUpdateManyWithoutTargetJobInput {
  create?: EventCreateWithoutTargetJobInput[] | EventCreateWithoutTargetJobInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  disconnect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  delete?: EventWhereUniqueInput[] | EventWhereUniqueInput
  update?: EventUpdateWithWhereUniqueWithoutTargetJobInput[] | EventUpdateWithWhereUniqueWithoutTargetJobInput
  upsert?: EventUpsertWithWhereUniqueWithoutTargetJobInput[] | EventUpsertWithWhereUniqueWithoutTargetJobInput
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
  type?: StageTypeEnum
  type_not?: StageTypeEnum
  type_in?: StageTypeEnum[] | StageTypeEnum
  type_not_in?: StageTypeEnum[] | StageTypeEnum
}

export interface EventUpdateWithWhereUniqueWithoutTargetJobInput {
  where: EventWhereUniqueInput
  data: EventUpdateWithoutTargetJobDataInput
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
  status?: NotificationStatusEnum
  status_not?: NotificationStatusEnum
  status_in?: NotificationStatusEnum[] | NotificationStatusEnum
  status_not_in?: NotificationStatusEnum[] | NotificationStatusEnum
  user?: UserWhereInput
  event?: EventWhereInput
}

export interface EventUpdateWithoutTargetJobDataInput {
  type?: EventTypeEnum
  actorType?: EventActorTypeEnum
  targetType?: EventTargetTypeEnum
  workspace?: WorkspaceUpdateOneInput
  actorUser?: UserUpdateOneWithoutEventsInput
  actorCandidate?: CandidateUpdateOneInput
  targetCandidate?: CandidateUpdateOneWithoutEventsInput
  targetTask?: TaskUpdateOneInput
  targetWorkspace?: WorkspaceUpdateOneWithoutEventsInput
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
  type?: EventTypeEnum
  type_not?: EventTypeEnum
  type_in?: EventTypeEnum[] | EventTypeEnum
  type_not_in?: EventTypeEnum[] | EventTypeEnum
  actorType?: EventActorTypeEnum
  actorType_not?: EventActorTypeEnum
  actorType_in?: EventActorTypeEnum[] | EventActorTypeEnum
  actorType_not_in?: EventActorTypeEnum[] | EventActorTypeEnum
  targetType?: EventTargetTypeEnum
  targetType_not?: EventTargetTypeEnum
  targetType_in?: EventTargetTypeEnum[] | EventTargetTypeEnum
  targetType_not_in?: EventTargetTypeEnum[] | EventTargetTypeEnum
  workspace?: WorkspaceWhereInput
  actorUser?: UserWhereInput
  actorCandidate?: CandidateWhereInput
  targetCandidate?: CandidateWhereInput
  targetJob?: JobWhereInput
  targetTask?: TaskWhereInput
  targetWorkspace?: WorkspaceWhereInput
}

export interface TaskUpdateOneInput {
  create?: TaskCreateInput
  connect?: TaskWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: TaskUpdateDataInput
  upsert?: TaskUpsertNestedInput
}

export interface ApplicationWhereUniqueInput {
  id?: ID_Input
}

export interface TaskUpdateDataInput {
  targetType?: TaskTargetEnum
  title?: String
  description?: String
  dueAt?: DateTime
  workspace?: WorkspaceUpdateOneInput
  subscribers?: UserUpdateManyWithoutSubscriptionTasksInput
  owners?: UserUpdateManyWithoutTasksInput
  job?: JobUpdateOneInput
  candidate?: CandidateUpdateOneWithoutTasksInput
}

export interface CandidateWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateManyWithoutSubscriptionTasksInput {
  create?: UserCreateWithoutSubscriptionTasksInput[] | UserCreateWithoutSubscriptionTasksInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutSubscriptionTasksInput[] | UserUpdateWithWhereUniqueWithoutSubscriptionTasksInput
  upsert?: UserUpsertWithWhereUniqueWithoutSubscriptionTasksInput[] | UserUpsertWithWhereUniqueWithoutSubscriptionTasksInput
}

export interface WorkspaceWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateWithWhereUniqueWithoutSubscriptionTasksInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutSubscriptionTasksDataInput
}

export interface FieldWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateWithoutSubscriptionTasksDataInput {
  firstName?: String
  lastName?: String
  email?: String
  username?: String
  password?: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  workspace?: WorkspaceUpdateOneWithoutUsersInput
  events?: EventUpdateOneWithoutActorUserInput
  notifications?: NotificationUpdateManyWithoutUserInput
  subscriptionJobs?: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates?: CandidateUpdateManyWithoutSubscribersInput
  tasks?: TaskUpdateManyWithoutOwnersInput
}

export interface TaskUpdateInput {
  targetType?: TaskTargetEnum
  title?: String
  description?: String
  dueAt?: DateTime
  workspace?: WorkspaceUpdateOneInput
  subscribers?: UserUpdateManyWithoutSubscriptionTasksInput
  owners?: UserUpdateManyWithoutTasksInput
  job?: JobUpdateOneInput
  candidate?: CandidateUpdateOneWithoutTasksInput
}

export interface CandidateUpdateManyWithoutSubscribersInput {
  create?: CandidateCreateWithoutSubscribersInput[] | CandidateCreateWithoutSubscribersInput
  connect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
  disconnect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
  delete?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
  update?: CandidateUpdateWithWhereUniqueWithoutSubscribersInput[] | CandidateUpdateWithWhereUniqueWithoutSubscribersInput
  upsert?: CandidateUpsertWithWhereUniqueWithoutSubscribersInput[] | CandidateUpsertWithWhereUniqueWithoutSubscribersInput
}

export interface EventUpdateInput {
  type?: EventTypeEnum
  actorType?: EventActorTypeEnum
  targetType?: EventTargetTypeEnum
  workspace?: WorkspaceUpdateOneInput
  actorUser?: UserUpdateOneWithoutEventsInput
  actorCandidate?: CandidateUpdateOneInput
  targetCandidate?: CandidateUpdateOneWithoutEventsInput
  targetJob?: JobUpdateOneWithoutEventsInput
  targetTask?: TaskUpdateOneInput
  targetWorkspace?: WorkspaceUpdateOneWithoutEventsInput
}

export interface CandidateUpdateWithWhereUniqueWithoutSubscribersInput {
  where: CandidateWhereUniqueInput
  data: CandidateUpdateWithoutSubscribersDataInput
}

export interface UserUpsertWithoutNotificationsInput {
  update: UserUpdateWithoutNotificationsDataInput
  create: UserCreateWithoutNotificationsInput
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
  events?: EventUpdateManyWithoutTargetCandidateInput
  tags?: TagUpdateManyInput
  fields?: FieldUpdateManyInput
  tasks?: TaskUpdateManyWithoutCandidateInput
  applications?: ApplicationUpdateManyWithoutCandidateInput
  comments?: CommentUpdateManyInput
}

export interface WorkspaceUpsertWithoutInvitesInput {
  update: WorkspaceUpdateWithoutInvitesDataInput
  create: WorkspaceCreateWithoutInvitesInput
}

export interface TagUpdateManyInput {
  create?: TagCreateInput[] | TagCreateInput
  connect?: TagWhereUniqueInput[] | TagWhereUniqueInput
  disconnect?: TagWhereUniqueInput[] | TagWhereUniqueInput
  delete?: TagWhereUniqueInput[] | TagWhereUniqueInput
  update?: TagUpdateWithWhereUniqueNestedInput[] | TagUpdateWithWhereUniqueNestedInput
  upsert?: TagUpsertWithWhereUniqueNestedInput[] | TagUpsertWithWhereUniqueNestedInput
}

export interface WorkspaceUpsertWithoutApplicationsInput {
  update: WorkspaceUpdateWithoutApplicationsDataInput
  create: WorkspaceCreateWithoutApplicationsInput
}

export interface TagUpdateWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput
  data: TagUpdateDataInput
}

export interface EventUpsertWithoutActorUserInput {
  update: EventUpdateWithoutActorUserDataInput
  create: EventCreateWithoutActorUserInput
}

export interface TagUpdateDataInput {
  label?: String
}

export interface UserUpsertWithWhereUniqueWithoutSubscriptionJobsInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutSubscriptionJobsDataInput
  create: UserCreateWithoutSubscriptionJobsInput
}

export interface TagUpsertWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput
  update: TagUpdateDataInput
  create: TagCreateInput
}

export interface WorkspaceUpsertWithoutJobsInput {
  update: WorkspaceUpdateWithoutJobsDataInput
  create: WorkspaceCreateWithoutJobsInput
}

export interface FieldUpdateManyInput {
  create?: FieldCreateInput[] | FieldCreateInput
  connect?: FieldWhereUniqueInput[] | FieldWhereUniqueInput
  disconnect?: FieldWhereUniqueInput[] | FieldWhereUniqueInput
  delete?: FieldWhereUniqueInput[] | FieldWhereUniqueInput
  update?: FieldUpdateWithWhereUniqueNestedInput[] | FieldUpdateWithWhereUniqueNestedInput
  upsert?: FieldUpsertWithWhereUniqueNestedInput[] | FieldUpsertWithWhereUniqueNestedInput
}

export interface NotificationUpsertWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput
  update: NotificationUpdateWithoutUserDataInput
  create: NotificationCreateWithoutUserInput
}

export interface FieldUpdateWithWhereUniqueNestedInput {
  where: FieldWhereUniqueInput
  data: FieldUpdateDataInput
}

export interface JobUpdateOneWithoutEventsInput {
  create?: JobCreateWithoutEventsInput
  connect?: JobWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: JobUpdateWithoutEventsDataInput
  upsert?: JobUpsertWithoutEventsInput
}

export interface FieldUpdateDataInput {
  type?: FieldTypeEnum
  label?: String
  value?: String
}

export interface EventUpsertWithWhereUniqueWithoutTargetJobInput {
  where: EventWhereUniqueInput
  update: EventUpdateWithoutTargetJobDataInput
  create: EventCreateWithoutTargetJobInput
}

export interface FieldUpsertWithWhereUniqueNestedInput {
  where: FieldWhereUniqueInput
  update: FieldUpdateDataInput
  create: FieldCreateInput
}

export interface WorkspaceCreateWithoutApplicationsInput {
  name: String
  events?: EventCreateManyWithoutTargetWorkspaceInput
  users?: UserCreateManyWithoutWorkspaceInput
  jobs?: JobCreateManyWithoutWorkspaceInput
  candidates?: CandidateCreateManyWithoutWorkspaceInput
  invites?: InviteCreateManyWithoutWorkspaceInput
  tags?: TagCreateManyInput
}

export interface TaskUpdateManyWithoutCandidateInput {
  create?: TaskCreateWithoutCandidateInput[] | TaskCreateWithoutCandidateInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  disconnect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  delete?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  update?: TaskUpdateWithWhereUniqueWithoutCandidateInput[] | TaskUpdateWithWhereUniqueWithoutCandidateInput
  upsert?: TaskUpsertWithWhereUniqueWithoutCandidateInput[] | TaskUpsertWithWhereUniqueWithoutCandidateInput
}

export interface WorkspaceCreateInput {
  name: String
  events?: EventCreateManyWithoutTargetWorkspaceInput
  users?: UserCreateManyWithoutWorkspaceInput
  jobs?: JobCreateManyWithoutWorkspaceInput
  applications?: ApplicationCreateManyWithoutWorkspaceInput
  candidates?: CandidateCreateManyWithoutWorkspaceInput
  invites?: InviteCreateManyWithoutWorkspaceInput
  tags?: TagCreateManyInput
}

export interface TaskUpdateWithWhereUniqueWithoutCandidateInput {
  where: TaskWhereUniqueInput
  data: TaskUpdateWithoutCandidateDataInput
}

export interface EventCreateWithoutActorUserInput {
  type: EventTypeEnum
  actorType: EventActorTypeEnum
  targetType: EventTargetTypeEnum
  workspace: WorkspaceCreateOneInput
  actorCandidate?: CandidateCreateOneInput
  targetCandidate?: CandidateCreateOneWithoutEventsInput
  targetJob?: JobCreateOneWithoutEventsInput
  targetTask?: TaskCreateOneInput
  targetWorkspace?: WorkspaceCreateOneWithoutEventsInput
}

export interface TaskUpdateWithoutCandidateDataInput {
  targetType?: TaskTargetEnum
  title?: String
  description?: String
  dueAt?: DateTime
  workspace?: WorkspaceUpdateOneInput
  subscribers?: UserUpdateManyWithoutSubscriptionTasksInput
  owners?: UserUpdateManyWithoutTasksInput
  job?: JobUpdateOneInput
}

export interface CandidateCreatephonesInput {
  set?: String[] | String
}

export interface UserUpdateManyWithoutTasksInput {
  create?: UserCreateWithoutTasksInput[] | UserCreateWithoutTasksInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutTasksInput[] | UserUpdateWithWhereUniqueWithoutTasksInput
  upsert?: UserUpsertWithWhereUniqueWithoutTasksInput[] | UserUpsertWithWhereUniqueWithoutTasksInput
}

export interface CandidateCreatesourceInput {
  set?: String[] | String
}

export interface UserUpdateWithWhereUniqueWithoutTasksInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutTasksDataInput
}

export interface JobCreateWithoutWorkspaceInput {
  status: JobType
  title: String
  department?: String
  description?: String
  requirements?: String
  subscribers?: UserCreateManyWithoutSubscriptionJobsInput
  events?: EventCreateManyWithoutTargetJobInput
  applications?: ApplicationCreateManyWithoutJobInput
  stages?: StageCreateManyInput
  comments?: CommentCreateManyInput
  location?: LocationCreateOneInput
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
  events?: EventUpdateOneWithoutActorUserInput
  notifications?: NotificationUpdateManyWithoutUserInput
  subscriptionJobs?: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates?: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks?: TaskUpdateManyWithoutSubscribersInput
}

export interface WorkspaceCreateWithoutUsersInput {
  name: String
  events?: EventCreateManyWithoutTargetWorkspaceInput
  jobs?: JobCreateManyWithoutWorkspaceInput
  applications?: ApplicationCreateManyWithoutWorkspaceInput
  candidates?: CandidateCreateManyWithoutWorkspaceInput
  invites?: InviteCreateManyWithoutWorkspaceInput
  tags?: TagCreateManyInput
}

export interface TaskUpdateManyWithoutSubscribersInput {
  create?: TaskCreateWithoutSubscribersInput[] | TaskCreateWithoutSubscribersInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  disconnect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  delete?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  update?: TaskUpdateWithWhereUniqueWithoutSubscribersInput[] | TaskUpdateWithWhereUniqueWithoutSubscribersInput
  upsert?: TaskUpsertWithWhereUniqueWithoutSubscribersInput[] | TaskUpsertWithWhereUniqueWithoutSubscribersInput
}

export interface JobCreateWithoutApplicationsInput {
  status: JobType
  title: String
  department?: String
  description?: String
  requirements?: String
  workspace: WorkspaceCreateOneWithoutJobsInput
  subscribers?: UserCreateManyWithoutSubscriptionJobsInput
  events?: EventCreateManyWithoutTargetJobInput
  stages?: StageCreateManyInput
  comments?: CommentCreateManyInput
  location?: LocationCreateOneInput
}

export interface TaskUpdateWithWhereUniqueWithoutSubscribersInput {
  where: TaskWhereUniqueInput
  data: TaskUpdateWithoutSubscribersDataInput
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
  events?: EventCreateManyWithoutTargetCandidateInput
  subscribers?: UserCreateManyWithoutSubscriptionCandidatesInput
  tags?: TagCreateManyInput
  fields?: FieldCreateManyInput
  tasks?: TaskCreateManyWithoutCandidateInput
  applications?: ApplicationCreateManyWithoutCandidateInput
  comments?: CommentCreateManyInput
}

export interface TaskUpdateWithoutSubscribersDataInput {
  targetType?: TaskTargetEnum
  title?: String
  description?: String
  dueAt?: DateTime
  workspace?: WorkspaceUpdateOneInput
  owners?: UserUpdateManyWithoutTasksInput
  job?: JobUpdateOneInput
  candidate?: CandidateUpdateOneWithoutTasksInput
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
  subscriptionJobs?: JobCreateManyWithoutSubscribersInput
  subscriptionCandidates?: CandidateCreateManyWithoutSubscribersInput
  subscriptionTasks?: TaskCreateManyWithoutSubscribersInput
  tasks?: TaskCreateManyWithoutOwnersInput
}

export interface JobUpdateOneInput {
  create?: JobCreateInput
  connect?: JobWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: JobUpdateDataInput
  upsert?: JobUpsertNestedInput
}

export interface EventCreateInput {
  type: EventTypeEnum
  actorType: EventActorTypeEnum
  targetType: EventTargetTypeEnum
  workspace: WorkspaceCreateOneInput
  actorUser?: UserCreateOneWithoutEventsInput
  actorCandidate?: CandidateCreateOneInput
  targetCandidate?: CandidateCreateOneWithoutEventsInput
  targetJob?: JobCreateOneWithoutEventsInput
  targetTask?: TaskCreateOneInput
  targetWorkspace?: WorkspaceCreateOneWithoutEventsInput
}

export interface JobUpdateDataInput {
  status?: JobType
  title?: String
  department?: String
  description?: String
  requirements?: String
  workspace?: WorkspaceUpdateOneWithoutJobsInput
  subscribers?: UserUpdateManyWithoutSubscriptionJobsInput
  events?: EventUpdateManyWithoutTargetJobInput
  applications?: ApplicationUpdateManyWithoutJobInput
  stages?: StageUpdateManyInput
  comments?: CommentUpdateManyInput
  location?: LocationUpdateOneInput
}

export interface UserCreateWithoutSubscriptionCandidatesInput {
  firstName?: String
  lastName?: String
  email: String
  username: String
  password: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  workspace: WorkspaceCreateOneWithoutUsersInput
  events?: EventCreateOneWithoutActorUserInput
  notifications?: NotificationCreateManyWithoutUserInput
  subscriptionJobs?: JobCreateManyWithoutSubscribersInput
  subscriptionTasks?: TaskCreateManyWithoutSubscribersInput
  tasks?: TaskCreateManyWithoutOwnersInput
}

export interface ApplicationUpdateManyWithoutJobInput {
  create?: ApplicationCreateWithoutJobInput[] | ApplicationCreateWithoutJobInput
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  disconnect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  delete?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  update?: ApplicationUpdateWithWhereUniqueWithoutJobInput[] | ApplicationUpdateWithWhereUniqueWithoutJobInput
  upsert?: ApplicationUpsertWithWhereUniqueWithoutJobInput[] | ApplicationUpsertWithWhereUniqueWithoutJobInput
}

export interface EventCreateWithoutTargetJobInput {
  type: EventTypeEnum
  actorType: EventActorTypeEnum
  targetType: EventTargetTypeEnum
  workspace: WorkspaceCreateOneInput
  actorUser?: UserCreateOneWithoutEventsInput
  actorCandidate?: CandidateCreateOneInput
  targetCandidate?: CandidateCreateOneWithoutEventsInput
  targetTask?: TaskCreateOneInput
  targetWorkspace?: WorkspaceCreateOneWithoutEventsInput
}

export interface ApplicationUpdateWithWhereUniqueWithoutJobInput {
  where: ApplicationWhereUniqueInput
  data: ApplicationUpdateWithoutJobDataInput
}

export interface UserCreateWithoutSubscriptionTasksInput {
  firstName?: String
  lastName?: String
  email: String
  username: String
  password: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  workspace: WorkspaceCreateOneWithoutUsersInput
  events?: EventCreateOneWithoutActorUserInput
  notifications?: NotificationCreateManyWithoutUserInput
  subscriptionJobs?: JobCreateManyWithoutSubscribersInput
  subscriptionCandidates?: CandidateCreateManyWithoutSubscribersInput
  tasks?: TaskCreateManyWithoutOwnersInput
}

export interface ApplicationUpdateWithoutJobDataInput {
  disqualifyReason?: String
  workspace?: WorkspaceUpdateOneWithoutApplicationsInput
  candidate?: CandidateUpdateOneWithoutApplicationsInput
  stage?: StageUpdateOneInput
}

export interface TagCreateInput {
  label: String
}

export interface CandidateUpdateOneWithoutApplicationsInput {
  create?: CandidateCreateWithoutApplicationsInput
  connect?: CandidateWhereUniqueInput
  delete?: Boolean
  update?: CandidateUpdateWithoutApplicationsDataInput
  upsert?: CandidateUpsertWithoutApplicationsInput
}

export interface TaskCreateWithoutCandidateInput {
  targetType?: TaskTargetEnum
  title?: String
  description?: String
  dueAt?: DateTime
  workspace: WorkspaceCreateOneInput
  subscribers?: UserCreateManyWithoutSubscriptionTasksInput
  owners?: UserCreateManyWithoutTasksInput
  job?: JobCreateOneInput
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
  events?: EventUpdateManyWithoutTargetCandidateInput
  subscribers?: UserUpdateManyWithoutSubscriptionCandidatesInput
  tags?: TagUpdateManyInput
  fields?: FieldUpdateManyInput
  tasks?: TaskUpdateManyWithoutCandidateInput
  comments?: CommentUpdateManyInput
}

export interface TaskCreateWithoutSubscribersInput {
  targetType?: TaskTargetEnum
  title?: String
  description?: String
  dueAt?: DateTime
  workspace: WorkspaceCreateOneInput
  owners?: UserCreateManyWithoutTasksInput
  job?: JobCreateOneInput
  candidate?: CandidateCreateOneWithoutTasksInput
}

export interface CommentUpdateManyInput {
  create?: CommentCreateInput[] | CommentCreateInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  disconnect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  delete?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  update?: CommentUpdateWithWhereUniqueNestedInput[] | CommentUpdateWithWhereUniqueNestedInput
  upsert?: CommentUpsertWithWhereUniqueNestedInput[] | CommentUpsertWithWhereUniqueNestedInput
}

export interface ApplicationCreateWithoutJobInput {
  disqualifyReason?: String
  workspace: WorkspaceCreateOneWithoutApplicationsInput
  candidate: CandidateCreateOneWithoutApplicationsInput
  stage: StageCreateOneInput
}

export interface CommentUpdateWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput
  data: CommentUpdateDataInput
}

export interface CommentCreateInput {
  content: String
  createdBy: UserCreateOneInput
  parent?: CommentCreateOneInput
}

export interface CommentUpdateDataInput {
  content?: String
  createdBy?: UserUpdateOneInput
  parent?: CommentUpdateOneInput
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

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface EventSubscriptionWhereInput {
  AND?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput
  OR?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput
  NOT?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: EventWhereInput
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
  events?: EventUpdateOneWithoutActorUserInput
  notifications?: NotificationUpdateManyWithoutUserInput
  subscriptionJobs?: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates?: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks?: TaskUpdateManyWithoutSubscribersInput
  tasks?: TaskUpdateManyWithoutOwnersInput
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
  subscriptionJobs_every?: JobWhereInput
  subscriptionJobs_some?: JobWhereInput
  subscriptionJobs_none?: JobWhereInput
  subscriptionCandidates_every?: CandidateWhereInput
  subscriptionCandidates_some?: CandidateWhereInput
  subscriptionCandidates_none?: CandidateWhereInput
  subscriptionTasks_every?: TaskWhereInput
  subscriptionTasks_some?: TaskWhereInput
  subscriptionTasks_none?: TaskWhereInput
  tasks_every?: TaskWhereInput
  tasks_some?: TaskWhereInput
  tasks_none?: TaskWhereInput
}

export interface TaskUpdateManyWithoutOwnersInput {
  create?: TaskCreateWithoutOwnersInput[] | TaskCreateWithoutOwnersInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  disconnect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  delete?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  update?: TaskUpdateWithWhereUniqueWithoutOwnersInput[] | TaskUpdateWithWhereUniqueWithoutOwnersInput
  upsert?: TaskUpsertWithWhereUniqueWithoutOwnersInput[] | TaskUpsertWithWhereUniqueWithoutOwnersInput
}

export interface NotificationWhereUniqueInput {
  id?: ID_Input
}

export interface TaskUpdateWithWhereUniqueWithoutOwnersInput {
  where: TaskWhereUniqueInput
  data: TaskUpdateWithoutOwnersDataInput
}

export interface TaskWhereUniqueInput {
  id?: ID_Input
}

export interface TaskUpdateWithoutOwnersDataInput {
  targetType?: TaskTargetEnum
  title?: String
  description?: String
  dueAt?: DateTime
  workspace?: WorkspaceUpdateOneInput
  subscribers?: UserUpdateManyWithoutSubscriptionTasksInput
  job?: JobUpdateOneInput
  candidate?: CandidateUpdateOneWithoutTasksInput
}

export interface WorkspaceUpdateInput {
  name?: String
  events?: EventUpdateManyWithoutTargetWorkspaceInput
  users?: UserUpdateManyWithoutWorkspaceInput
  jobs?: JobUpdateManyWithoutWorkspaceInput
  applications?: ApplicationUpdateManyWithoutWorkspaceInput
  candidates?: CandidateUpdateManyWithoutWorkspaceInput
  invites?: InviteUpdateManyWithoutWorkspaceInput
  tags?: TagUpdateManyInput
}

export interface CandidateUpdateOneWithoutTasksInput {
  create?: CandidateCreateWithoutTasksInput
  connect?: CandidateWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CandidateUpdateWithoutTasksDataInput
  upsert?: CandidateUpsertWithoutTasksInput
}

export interface UserUpdateOneWithoutNotificationsInput {
  create?: UserCreateWithoutNotificationsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutNotificationsDataInput
  upsert?: UserUpsertWithoutNotificationsInput
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
  events?: EventUpdateManyWithoutTargetCandidateInput
  subscribers?: UserUpdateManyWithoutSubscriptionCandidatesInput
  tags?: TagUpdateManyInput
  fields?: FieldUpdateManyInput
  applications?: ApplicationUpdateManyWithoutCandidateInput
  comments?: CommentUpdateManyInput
}

export interface WorkspaceUpsertNestedInput {
  update: WorkspaceUpdateDataInput
  create: WorkspaceCreateInput
}

export interface ApplicationUpdateManyWithoutCandidateInput {
  create?: ApplicationCreateWithoutCandidateInput[] | ApplicationCreateWithoutCandidateInput
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  disconnect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  delete?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  update?: ApplicationUpdateWithWhereUniqueWithoutCandidateInput[] | ApplicationUpdateWithWhereUniqueWithoutCandidateInput
  upsert?: ApplicationUpsertWithWhereUniqueWithoutCandidateInput[] | ApplicationUpsertWithWhereUniqueWithoutCandidateInput
}

export interface ApplicationUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: ApplicationWhereUniqueInput
  update: ApplicationUpdateWithoutWorkspaceDataInput
  create: ApplicationCreateWithoutWorkspaceInput
}

export interface ApplicationUpdateWithWhereUniqueWithoutCandidateInput {
  where: ApplicationWhereUniqueInput
  data: ApplicationUpdateWithoutCandidateDataInput
}

export interface JobUpsertWithoutEventsInput {
  update: JobUpdateWithoutEventsDataInput
  create: JobCreateWithoutEventsInput
}

export interface ApplicationUpdateWithoutCandidateDataInput {
  disqualifyReason?: String
  workspace?: WorkspaceUpdateOneWithoutApplicationsInput
  job?: JobUpdateOneWithoutApplicationsInput
  stage?: StageUpdateOneInput
}

export interface ApplicationCreateInput {
  disqualifyReason?: String
  workspace: WorkspaceCreateOneWithoutApplicationsInput
  job: JobCreateOneWithoutApplicationsInput
  candidate: CandidateCreateOneWithoutApplicationsInput
  stage: StageCreateOneInput
}

export interface StageUpdateOneInput {
  create?: StageCreateInput
  connect?: StageWhereUniqueInput
  delete?: Boolean
  update?: StageUpdateDataInput
  upsert?: StageUpsertNestedInput
}

export interface UserCreateWithoutWorkspaceInput {
  firstName?: String
  lastName?: String
  email: String
  username: String
  password: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  events?: EventCreateOneWithoutActorUserInput
  notifications?: NotificationCreateManyWithoutUserInput
  subscriptionJobs?: JobCreateManyWithoutSubscribersInput
  subscriptionCandidates?: CandidateCreateManyWithoutSubscribersInput
  subscriptionTasks?: TaskCreateManyWithoutSubscribersInput
  tasks?: TaskCreateManyWithoutOwnersInput
}

export interface StageUpdateDataInput {
  name?: String
  description?: String
  position?: Int
  type?: StageTypeEnum
}

export interface CandidateCreateresumeInput {
  set?: String[] | String
}

export interface StageUpsertNestedInput {
  update: StageUpdateDataInput
  create: StageCreateInput
}

export interface UserCreateWithoutSubscriptionJobsInput {
  firstName?: String
  lastName?: String
  email: String
  username: String
  password: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  workspace: WorkspaceCreateOneWithoutUsersInput
  events?: EventCreateOneWithoutActorUserInput
  notifications?: NotificationCreateManyWithoutUserInput
  subscriptionCandidates?: CandidateCreateManyWithoutSubscribersInput
  subscriptionTasks?: TaskCreateManyWithoutSubscribersInput
  tasks?: TaskCreateManyWithoutOwnersInput
}

export interface ApplicationUpsertWithWhereUniqueWithoutCandidateInput {
  where: ApplicationWhereUniqueInput
  update: ApplicationUpdateWithoutCandidateDataInput
  create: ApplicationCreateWithoutCandidateInput
}

export interface WorkspaceCreateWithoutJobsInput {
  name: String
  events?: EventCreateManyWithoutTargetWorkspaceInput
  users?: UserCreateManyWithoutWorkspaceInput
  applications?: ApplicationCreateManyWithoutWorkspaceInput
  candidates?: CandidateCreateManyWithoutWorkspaceInput
  invites?: InviteCreateManyWithoutWorkspaceInput
  tags?: TagCreateManyInput
}

export interface CandidateUpsertWithoutTasksInput {
  update: CandidateUpdateWithoutTasksDataInput
  create: CandidateCreateWithoutTasksInput
}

export interface NotificationCreateWithoutUserInput {
  status: NotificationStatusEnum
  event: EventCreateOneInput
}

export interface TaskUpsertWithWhereUniqueWithoutOwnersInput {
  where: TaskWhereUniqueInput
  update: TaskUpdateWithoutOwnersDataInput
  create: TaskCreateWithoutOwnersInput
}

export interface JobCreateWithoutSubscribersInput {
  status: JobType
  title: String
  department?: String
  description?: String
  requirements?: String
  workspace: WorkspaceCreateOneWithoutJobsInput
  events?: EventCreateManyWithoutTargetJobInput
  applications?: ApplicationCreateManyWithoutJobInput
  stages?: StageCreateManyInput
  comments?: CommentCreateManyInput
  location?: LocationCreateOneInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
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
  events?: EventCreateManyWithoutTargetCandidateInput
  tags?: TagCreateManyInput
  fields?: FieldCreateManyInput
  tasks?: TaskCreateManyWithoutCandidateInput
  applications?: ApplicationCreateManyWithoutCandidateInput
  comments?: CommentCreateManyInput
}

export interface CommentUpdateOneInput {
  create?: CommentCreateInput
  connect?: CommentWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CommentUpdateDataInput
  upsert?: CommentUpsertNestedInput
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
  events?: EventCreateOneWithoutActorUserInput
  notifications?: NotificationCreateManyWithoutUserInput
  subscriptionJobs?: JobCreateManyWithoutSubscribersInput
  subscriptionCandidates?: CandidateCreateManyWithoutSubscribersInput
  subscriptionTasks?: TaskCreateManyWithoutSubscribersInput
}

export interface CommentUpsertNestedInput {
  update: CommentUpdateDataInput
  create: CommentCreateInput
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
  events?: EventCreateManyWithoutTargetCandidateInput
  subscribers?: UserCreateManyWithoutSubscriptionCandidatesInput
  tags?: TagCreateManyInput
  fields?: FieldCreateManyInput
  tasks?: TaskCreateManyWithoutCandidateInput
  comments?: CommentCreateManyInput
}

export interface CommentUpsertWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput
  update: CommentUpdateDataInput
  create: CommentCreateInput
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

export interface CandidateUpsertWithoutApplicationsInput {
  update: CandidateUpdateWithoutApplicationsDataInput
  create: CandidateCreateWithoutApplicationsInput
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

export interface ApplicationUpsertWithWhereUniqueWithoutJobInput {
  where: ApplicationWhereUniqueInput
  update: ApplicationUpdateWithoutJobDataInput
  create: ApplicationCreateWithoutJobInput
}

export interface FieldUpdateInput {
  type?: FieldTypeEnum
  label?: String
  value?: String
}

export interface StageUpdateManyInput {
  create?: StageCreateInput[] | StageCreateInput
  connect?: StageWhereUniqueInput[] | StageWhereUniqueInput
  disconnect?: StageWhereUniqueInput[] | StageWhereUniqueInput
  delete?: StageWhereUniqueInput[] | StageWhereUniqueInput
  update?: StageUpdateWithWhereUniqueNestedInput[] | StageUpdateWithWhereUniqueNestedInput
  upsert?: StageUpsertWithWhereUniqueNestedInput[] | StageUpsertWithWhereUniqueNestedInput
}

export interface WorkspaceUpdateOneWithoutInvitesInput {
  create?: WorkspaceCreateWithoutInvitesInput
  connect?: WorkspaceWhereUniqueInput
  delete?: Boolean
  update?: WorkspaceUpdateWithoutInvitesDataInput
  upsert?: WorkspaceUpsertWithoutInvitesInput
}

export interface StageUpdateWithWhereUniqueNestedInput {
  where: StageWhereUniqueInput
  data: StageUpdateDataInput
}

export interface EventUpsertWithWhereUniqueWithoutTargetCandidateInput {
  where: EventWhereUniqueInput
  update: EventUpdateWithoutTargetCandidateDataInput
  create: EventCreateWithoutTargetCandidateInput
}

export interface StageUpsertWithWhereUniqueNestedInput {
  where: StageWhereUniqueInput
  update: StageUpdateDataInput
  create: StageCreateInput
}

export interface EventCreateWithoutTargetWorkspaceInput {
  type: EventTypeEnum
  actorType: EventActorTypeEnum
  targetType: EventTargetTypeEnum
  workspace: WorkspaceCreateOneInput
  actorUser?: UserCreateOneWithoutEventsInput
  actorCandidate?: CandidateCreateOneInput
  targetCandidate?: CandidateCreateOneWithoutEventsInput
  targetJob?: JobCreateOneWithoutEventsInput
  targetTask?: TaskCreateOneInput
}

export interface LocationUpdateOneInput {
  create?: LocationCreateInput
  connect?: LocationWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: LocationUpdateDataInput
  upsert?: LocationUpsertNestedInput
}

export interface WorkspaceCreateWithoutCandidatesInput {
  name: String
  events?: EventCreateManyWithoutTargetWorkspaceInput
  users?: UserCreateManyWithoutWorkspaceInput
  jobs?: JobCreateManyWithoutWorkspaceInput
  applications?: ApplicationCreateManyWithoutWorkspaceInput
  invites?: InviteCreateManyWithoutWorkspaceInput
  tags?: TagCreateManyInput
}

export interface LocationUpdateDataInput {
  country?: String
  region?: String
  city?: String
  zip?: String
}

export interface EventCreateWithoutTargetCandidateInput {
  type: EventTypeEnum
  actorType: EventActorTypeEnum
  targetType: EventTargetTypeEnum
  workspace: WorkspaceCreateOneInput
  actorUser?: UserCreateOneWithoutEventsInput
  actorCandidate?: CandidateCreateOneInput
  targetJob?: JobCreateOneWithoutEventsInput
  targetTask?: TaskCreateOneInput
  targetWorkspace?: WorkspaceCreateOneWithoutEventsInput
}

export interface LocationUpsertNestedInput {
  update: LocationUpdateDataInput
  create: LocationCreateInput
}

export interface TaskCreateInput {
  targetType?: TaskTargetEnum
  title?: String
  description?: String
  dueAt?: DateTime
  workspace: WorkspaceCreateOneInput
  subscribers?: UserCreateManyWithoutSubscriptionTasksInput
  owners?: UserCreateManyWithoutTasksInput
  job?: JobCreateOneInput
  candidate?: CandidateCreateOneWithoutTasksInput
}

export interface JobUpsertNestedInput {
  update: JobUpdateDataInput
  create: JobCreateInput
}

export interface JobCreateInput {
  status: JobType
  title: String
  department?: String
  description?: String
  requirements?: String
  workspace: WorkspaceCreateOneWithoutJobsInput
  subscribers?: UserCreateManyWithoutSubscriptionJobsInput
  events?: EventCreateManyWithoutTargetJobInput
  applications?: ApplicationCreateManyWithoutJobInput
  stages?: StageCreateManyInput
  comments?: CommentCreateManyInput
  location?: LocationCreateOneInput
}

export interface TaskUpsertWithWhereUniqueWithoutSubscribersInput {
  where: TaskWhereUniqueInput
  update: TaskUpdateWithoutSubscribersDataInput
  create: TaskCreateWithoutSubscribersInput
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
  stages_every?: StageWhereInput
  stages_some?: StageWhereInput
  stages_none?: StageWhereInput
  comments_every?: CommentWhereInput
  comments_some?: CommentWhereInput
  comments_none?: CommentWhereInput
  location?: LocationWhereInput
}

export interface UserUpsertWithWhereUniqueWithoutTasksInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutTasksDataInput
  create: UserCreateWithoutTasksInput
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
  events?: EventUpdateManyWithoutTargetCandidateInput
  subscribers?: UserUpdateManyWithoutSubscriptionCandidatesInput
  tags?: TagUpdateManyInput
  fields?: FieldUpdateManyInput
  tasks?: TaskUpdateManyWithoutCandidateInput
  applications?: ApplicationUpdateManyWithoutCandidateInput
  comments?: CommentUpdateManyInput
}

export interface TaskUpsertWithWhereUniqueWithoutCandidateInput {
  where: TaskWhereUniqueInput
  update: TaskUpdateWithoutCandidateDataInput
  create: TaskCreateWithoutCandidateInput
}

export interface UserUpsertWithWhereUniqueWithoutSubscriptionCandidatesInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutSubscriptionCandidatesDataInput
  create: UserCreateWithoutSubscriptionCandidatesInput
}

export interface CandidateUpsertWithWhereUniqueWithoutSubscribersInput {
  where: CandidateWhereUniqueInput
  update: CandidateUpdateWithoutSubscribersDataInput
  create: CandidateCreateWithoutSubscribersInput
}

export interface ApplicationCreateWithoutWorkspaceInput {
  disqualifyReason?: String
  job: JobCreateOneWithoutApplicationsInput
  candidate: CandidateCreateOneWithoutApplicationsInput
  stage: StageCreateOneInput
}

export interface UserUpsertWithWhereUniqueWithoutSubscriptionTasksInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutSubscriptionTasksDataInput
  create: UserCreateWithoutSubscriptionTasksInput
}

export interface FieldCreateInput {
  type: FieldTypeEnum
  label: String
  value: String
}

export interface TaskUpsertNestedInput {
  update: TaskUpdateDataInput
  create: TaskCreateInput
}

export interface EventWhereUniqueInput {
  id?: ID_Input
}

export interface InviteUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: InviteWhereUniqueInput
  data: InviteUpdateWithoutWorkspaceDataInput
}

export interface InviteUpdateManyWithoutWorkspaceInput {
  create?: InviteCreateWithoutWorkspaceInput[] | InviteCreateWithoutWorkspaceInput
  connect?: InviteWhereUniqueInput[] | InviteWhereUniqueInput
  disconnect?: InviteWhereUniqueInput[] | InviteWhereUniqueInput
  delete?: InviteWhereUniqueInput[] | InviteWhereUniqueInput
  update?: InviteUpdateWithWhereUniqueWithoutWorkspaceInput[] | InviteUpdateWithWhereUniqueWithoutWorkspaceInput
  upsert?: InviteUpsertWithWhereUniqueWithoutWorkspaceInput[] | InviteUpsertWithWhereUniqueWithoutWorkspaceInput
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

export interface WorkspaceUpdateOneWithoutEventsInput {
  create?: WorkspaceCreateWithoutEventsInput
  connect?: WorkspaceWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: WorkspaceUpdateWithoutEventsDataInput
  upsert?: WorkspaceUpsertWithoutEventsInput
}

export interface WorkspaceUpsertWithoutCandidatesInput {
  update: WorkspaceUpdateWithoutCandidatesDataInput
  create: WorkspaceCreateWithoutCandidatesInput
}

export interface CommentSubscriptionWhereInput {
  AND?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput
  OR?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput
  NOT?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CommentWhereInput
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
  subscribers?: UserCreateManyWithoutSubscriptionCandidatesInput
  tags?: TagCreateManyInput
  fields?: FieldCreateManyInput
  tasks?: TaskCreateManyWithoutCandidateInput
  applications?: ApplicationCreateManyWithoutCandidateInput
  comments?: CommentCreateManyInput
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
  events?: EventCreateManyWithoutTargetCandidateInput
  subscribers?: UserCreateManyWithoutSubscriptionCandidatesInput
  tags?: TagCreateManyInput
  fields?: FieldCreateManyInput
  tasks?: TaskCreateManyWithoutCandidateInput
  applications?: ApplicationCreateManyWithoutCandidateInput
  comments?: CommentCreateManyInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface CommentPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  content: String
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

export interface Event extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  workspace: Workspace
  type: EventTypeEnum
  actorType: EventActorTypeEnum
  actorUser?: User
  actorCandidate?: Candidate
  targetType: EventTargetTypeEnum
  targetCandidate?: Candidate
  targetJob?: Job
  targetTask?: Task
  targetWorkspace?: Workspace
}

/*
 * A connection to a list of items.

 */
export interface ApplicationConnection {
  pageInfo: PageInfo
  edges: ApplicationEdge[]
  aggregate: AggregateApplication
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

export interface AggregateComment {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface CommentConnection {
  pageInfo: PageInfo
  edges: CommentEdge[]
  aggregate: AggregateComment
}

export interface BatchPayload {
  count: Long
}

/*
 * An edge in a connection.

 */
export interface FieldEdge {
  node: Field
  cursor: String
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

export interface AggregateTag {
  count: Int
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
export interface TagConnection {
  pageInfo: PageInfo
  edges: TagEdge[]
  aggregate: AggregateTag
}

export interface FieldPreviousValues {
  id: ID_Output
  type: FieldTypeEnum
  label: String
  value: String
}

/*
 * An edge in a connection.

 */
export interface TaskEdge {
  node: Task
  cursor: String
}

export interface ApplicationSubscriptionPayload {
  mutation: MutationType
  node?: Application
  updatedFields?: String[]
  previousValues?: ApplicationPreviousValues
}

export interface AggregateJob {
  count: Int
}

export interface ApplicationPreviousValues {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  disqualifyReason?: String
}

/*
 * A connection to a list of items.

 */
export interface JobConnection {
  pageInfo: PageInfo
  edges: JobEdge[]
  aggregate: AggregateJob
}

export interface Task extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  workspace: Workspace
  subscribers?: User[]
  owners?: User[]
  targetType?: TaskTargetEnum
  job?: Job
  candidate?: Candidate
  title?: String
  description?: String
  dueAt?: DateTime
}

/*
 * An edge in a connection.

 */
export interface WorkspaceEdge {
  node: Workspace
  cursor: String
}

export interface InviteSubscriptionPayload {
  mutation: MutationType
  node?: Invite
  updatedFields?: String[]
  previousValues?: InvitePreviousValues
}

export interface AggregateStage {
  count: Int
}

export interface InvitePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  email: String
  expireAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface StageConnection {
  pageInfo: PageInfo
  edges: StageEdge[]
  aggregate: AggregateStage
}

export interface Field extends Node {
  id: ID_Output
  type: FieldTypeEnum
  label: String
  value: String
}

/*
 * An edge in a connection.

 */
export interface EventEdge {
  node: Event
  cursor: String
}

export interface NotificationSubscriptionPayload {
  mutation: MutationType
  node?: Notification
  updatedFields?: String[]
  previousValues?: NotificationPreviousValues
}

export interface AggregateUser {
  count: Int
}

export interface NotificationPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  status: NotificationStatusEnum
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface Tag extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  label: String
}

/*
 * An edge in a connection.

 */
export interface CandidateEdge {
  node: Candidate
  cursor: String
}

export interface LocationSubscriptionPayload {
  mutation: MutationType
  node?: Location
  updatedFields?: String[]
  previousValues?: LocationPreviousValues
}

export interface AggregateLocation {
  count: Int
}

export interface LocationPreviousValues {
  id: ID_Output
  country: String
  region: String
  city: String
  zip: String
}

/*
 * A connection to a list of items.

 */
export interface LocationConnection {
  pageInfo: PageInfo
  edges: LocationEdge[]
  aggregate: AggregateLocation
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
 * An edge in a connection.

 */
export interface NotificationEdge {
  node: Notification
  cursor: String
}

export interface CandidateSubscriptionPayload {
  mutation: MutationType
  node?: Candidate
  updatedFields?: String[]
  previousValues?: CandidatePreviousValues
}

export interface AggregateInvite {
  count: Int
}

export interface CandidatePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  firstName: String
  lastName: String
  emails: String[]
  phones: String[]
  links: String[]
  resume: String[]
  coverLetter: String[]
  source: String[]
}

/*
 * A connection to a list of items.

 */
export interface InviteConnection {
  pageInfo: PageInfo
  edges: InviteEdge[]
  aggregate: AggregateInvite
}

export interface Location extends Node {
  id: ID_Output
  country: String
  region: String
  city: String
  zip: String
}

/*
 * An edge in a connection.

 */
export interface ApplicationEdge {
  node: Application
  cursor: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * An edge in a connection.

 */
export interface CommentEdge {
  node: Comment
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  firstName?: String
  lastName?: String
  email: String
  username: String
  password: String
  lastLogin?: DateTime
  deletedAt?: DateTime
}

/*
 * A connection to a list of items.

 */
export interface FieldConnection {
  pageInfo: PageInfo
  edges: FieldEdge[]
  aggregate: AggregateField
}

export interface Comment extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  createdBy: User
  parent?: Comment
  content: String
}

export interface AggregateTask {
  count: Int
}

export interface EventSubscriptionPayload {
  mutation: MutationType
  node?: Event
  updatedFields?: String[]
  previousValues?: EventPreviousValues
}

/*
 * An edge in a connection.

 */
export interface JobEdge {
  node: Job
  cursor: String
}

export interface EventPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  type: EventTypeEnum
  actorType: EventActorTypeEnum
  targetType: EventTargetTypeEnum
}

/*
 * A connection to a list of items.

 */
export interface WorkspaceConnection {
  pageInfo: PageInfo
  edges: WorkspaceEdge[]
  aggregate: AggregateWorkspace
}

export interface FieldSubscriptionPayload {
  mutation: MutationType
  node?: Field
  updatedFields?: String[]
  previousValues?: FieldPreviousValues
}

export interface AggregateEvent {
  count: Int
}

export interface StageSubscriptionPayload {
  mutation: MutationType
  node?: Stage
  updatedFields?: String[]
  previousValues?: StagePreviousValues
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface StagePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description?: String
  position: Int
  type: StageTypeEnum
}

/*
 * A connection to a list of items.

 */
export interface CandidateConnection {
  pageInfo: PageInfo
  edges: CandidateEdge[]
  aggregate: AggregateCandidate
}

export interface Stage extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description?: String
  position: Int
  type: StageTypeEnum
}

export interface AggregateNotification {
  count: Int
}

export interface WorkspaceSubscriptionPayload {
  mutation: MutationType
  node?: Workspace
  updatedFields?: String[]
  previousValues?: WorkspacePreviousValues
}

/*
 * An edge in a connection.

 */
export interface InviteEdge {
  node: Invite
  cursor: String
}

export interface WorkspacePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
}

export interface CommentSubscriptionPayload {
  mutation: MutationType
  node?: Comment
  updatedFields?: String[]
  previousValues?: CommentPreviousValues
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

export interface JobSubscriptionPayload {
  mutation: MutationType
  node?: Job
  updatedFields?: String[]
  previousValues?: JobPreviousValues
}

export interface AggregateWorkspace {
  count: Int
}

export interface JobPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  status: JobType
  title: String
  department?: String
  description?: String
  requirements?: String
}

/*
 * A connection to a list of items.

 */
export interface EventConnection {
  pageInfo: PageInfo
  edges: EventEdge[]
  aggregate: AggregateEvent
}

export interface Notification extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  status: NotificationStatusEnum
  user: User
  event: Event
}

/*
 * An edge in a connection.

 */
export interface LocationEdge {
  node: Location
  cursor: String
}

export interface TaskSubscriptionPayload {
  mutation: MutationType
  node?: Task
  updatedFields?: String[]
  previousValues?: TaskPreviousValues
}

export interface AggregateApplication {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface TaskConnection {
  pageInfo: PageInfo
  edges: TaskEdge[]
  aggregate: AggregateTask
}

export interface TagPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  label: String
}

export interface TagSubscriptionPayload {
  mutation: MutationType
  node?: Tag
  updatedFields?: String[]
  previousValues?: TagPreviousValues
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
  firstName?: String
  lastName?: String
  email: String
  username: String
  password: String
  lastLogin?: DateTime
  deletedAt?: DateTime
}

export interface TaskPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  targetType?: TaskTargetEnum
  title?: String
  description?: String
  dueAt?: DateTime
}

/*
 * An edge in a connection.

 */
export interface StageEdge {
  node: Stage
  cursor: String
}

export interface AggregateField {
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

export interface AggregateCandidate {
  count: Int
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export type DateTime = Date | string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number