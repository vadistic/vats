import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    jobs: <T = Job[]>(args: { where?: JobWhereInput, orderBy?: JobOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    applications: <T = Application[]>(args: { where?: ApplicationWhereInput, orderBy?: ApplicationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    invites: <T = Invite[]>(args: { where?: InviteWhereInput, orderBy?: InviteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notifications: <T = Notification[]>(args: { where?: NotificationWhereInput, orderBy?: NotificationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    fields: <T = Field[]>(args: { where?: FieldWhereInput, orderBy?: FieldOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    fieldLinks: <T = FieldLink[]>(args: { where?: FieldLinkWhereInput, orderBy?: FieldLinkOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    locations: <T = Location[]>(args: { where?: LocationWhereInput, orderBy?: LocationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    candidates: <T = Candidate[]>(args: { where?: CandidateWhereInput, orderBy?: CandidateOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    files: <T = File[]>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    events: <T = Event[]>(args: { where?: EventWhereInput, orderBy?: EventOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stages: <T = Stage[]>(args: { where?: StageWhereInput, orderBy?: StageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    workspaces: <T = Workspace[]>(args: { where?: WorkspaceWhereInput, orderBy?: WorkspaceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tasks: <T = Task[]>(args: { where?: TaskWhereInput, orderBy?: TaskOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tags: <T = Tag[]>(args: { where?: TagWhereInput, orderBy?: TagOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    workflows: <T = Workflow[]>(args: { where?: WorkflowWhereInput, orderBy?: WorkflowOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    comments: <T = Comment[]>(args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    disqualifyReasons: <T = DisqualifyReason[]>(args: { where?: DisqualifyReasonWhereInput, orderBy?: DisqualifyReasonOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    job: <T = Job | null>(args: { where: JobWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    application: <T = Application | null>(args: { where: ApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    invite: <T = Invite | null>(args: { where: InviteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notification: <T = Notification | null>(args: { where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    field: <T = Field | null>(args: { where: FieldWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    fieldLink: <T = FieldLink | null>(args: { where: FieldLinkWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    location: <T = Location | null>(args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    candidate: <T = Candidate | null>(args: { where: CandidateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    file: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    event: <T = Event | null>(args: { where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stage: <T = Stage | null>(args: { where: StageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    workspace: <T = Workspace | null>(args: { where: WorkspaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    task: <T = Task | null>(args: { where: TaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tag: <T = Tag | null>(args: { where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    workflow: <T = Workflow | null>(args: { where: WorkflowWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    comment: <T = Comment | null>(args: { where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    disqualifyReason: <T = DisqualifyReason | null>(args: { where: DisqualifyReasonWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    jobsConnection: <T = JobConnection>(args: { where?: JobWhereInput, orderBy?: JobOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    applicationsConnection: <T = ApplicationConnection>(args: { where?: ApplicationWhereInput, orderBy?: ApplicationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    invitesConnection: <T = InviteConnection>(args: { where?: InviteWhereInput, orderBy?: InviteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notificationsConnection: <T = NotificationConnection>(args: { where?: NotificationWhereInput, orderBy?: NotificationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    fieldsConnection: <T = FieldConnection>(args: { where?: FieldWhereInput, orderBy?: FieldOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    fieldLinksConnection: <T = FieldLinkConnection>(args: { where?: FieldLinkWhereInput, orderBy?: FieldLinkOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    locationsConnection: <T = LocationConnection>(args: { where?: LocationWhereInput, orderBy?: LocationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    candidatesConnection: <T = CandidateConnection>(args: { where?: CandidateWhereInput, orderBy?: CandidateOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    filesConnection: <T = FileConnection>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    eventsConnection: <T = EventConnection>(args: { where?: EventWhereInput, orderBy?: EventOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stagesConnection: <T = StageConnection>(args: { where?: StageWhereInput, orderBy?: StageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    workspacesConnection: <T = WorkspaceConnection>(args: { where?: WorkspaceWhereInput, orderBy?: WorkspaceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tasksConnection: <T = TaskConnection>(args: { where?: TaskWhereInput, orderBy?: TaskOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tagsConnection: <T = TagConnection>(args: { where?: TagWhereInput, orderBy?: TagOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    workflowsConnection: <T = WorkflowConnection>(args: { where?: WorkflowWhereInput, orderBy?: WorkflowOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    commentsConnection: <T = CommentConnection>(args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    disqualifyReasonsConnection: <T = DisqualifyReasonConnection>(args: { where?: DisqualifyReasonWhereInput, orderBy?: DisqualifyReasonOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createJob: <T = Job>(args: { data: JobCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createApplication: <T = Application>(args: { data: ApplicationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createInvite: <T = Invite>(args: { data: InviteCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createNotification: <T = Notification>(args: { data: NotificationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createField: <T = Field>(args: { data: FieldCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFieldLink: <T = FieldLink>(args: { data: FieldLinkCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLocation: <T = Location>(args: { data: LocationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCandidate: <T = Candidate>(args: { data: CandidateCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFile: <T = File>(args: { data: FileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createEvent: <T = Event>(args: { data: EventCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createStage: <T = Stage>(args: { data: StageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createWorkspace: <T = Workspace>(args: { data: WorkspaceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTask: <T = Task>(args: { data: TaskCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTag: <T = Tag>(args: { data: TagCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createWorkflow: <T = Workflow>(args: { data: WorkflowCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createComment: <T = Comment>(args: { data: CommentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createDisqualifyReason: <T = DisqualifyReason>(args: { data: DisqualifyReasonCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateJob: <T = Job | null>(args: { data: JobUpdateInput, where: JobWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateApplication: <T = Application | null>(args: { data: ApplicationUpdateInput, where: ApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateInvite: <T = Invite | null>(args: { data: InviteUpdateInput, where: InviteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateNotification: <T = Notification | null>(args: { data: NotificationUpdateInput, where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateField: <T = Field | null>(args: { data: FieldUpdateInput, where: FieldWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateFieldLink: <T = FieldLink | null>(args: { data: FieldLinkUpdateInput, where: FieldLinkWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLocation: <T = Location | null>(args: { data: LocationUpdateInput, where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCandidate: <T = Candidate | null>(args: { data: CandidateUpdateInput, where: CandidateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateFile: <T = File | null>(args: { data: FileUpdateInput, where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateEvent: <T = Event | null>(args: { data: EventUpdateInput, where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateStage: <T = Stage | null>(args: { data: StageUpdateInput, where: StageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateWorkspace: <T = Workspace | null>(args: { data: WorkspaceUpdateInput, where: WorkspaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTask: <T = Task | null>(args: { data: TaskUpdateInput, where: TaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTag: <T = Tag | null>(args: { data: TagUpdateInput, where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateWorkflow: <T = Workflow | null>(args: { data: WorkflowUpdateInput, where: WorkflowWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateComment: <T = Comment | null>(args: { data: CommentUpdateInput, where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateDisqualifyReason: <T = DisqualifyReason | null>(args: { data: DisqualifyReasonUpdateInput, where: DisqualifyReasonWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteJob: <T = Job | null>(args: { where: JobWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteApplication: <T = Application | null>(args: { where: ApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteInvite: <T = Invite | null>(args: { where: InviteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteNotification: <T = Notification | null>(args: { where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteField: <T = Field | null>(args: { where: FieldWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteFieldLink: <T = FieldLink | null>(args: { where: FieldLinkWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLocation: <T = Location | null>(args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCandidate: <T = Candidate | null>(args: { where: CandidateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteFile: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteEvent: <T = Event | null>(args: { where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteStage: <T = Stage | null>(args: { where: StageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteWorkspace: <T = Workspace | null>(args: { where: WorkspaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteTask: <T = Task | null>(args: { where: TaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteTag: <T = Tag | null>(args: { where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteWorkflow: <T = Workflow | null>(args: { where: WorkflowWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteComment: <T = Comment | null>(args: { where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteDisqualifyReason: <T = DisqualifyReason | null>(args: { where: DisqualifyReasonWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertJob: <T = Job>(args: { where: JobWhereUniqueInput, create: JobCreateInput, update: JobUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertApplication: <T = Application>(args: { where: ApplicationWhereUniqueInput, create: ApplicationCreateInput, update: ApplicationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertInvite: <T = Invite>(args: { where: InviteWhereUniqueInput, create: InviteCreateInput, update: InviteUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertNotification: <T = Notification>(args: { where: NotificationWhereUniqueInput, create: NotificationCreateInput, update: NotificationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertField: <T = Field>(args: { where: FieldWhereUniqueInput, create: FieldCreateInput, update: FieldUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFieldLink: <T = FieldLink>(args: { where: FieldLinkWhereUniqueInput, create: FieldLinkCreateInput, update: FieldLinkUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLocation: <T = Location>(args: { where: LocationWhereUniqueInput, create: LocationCreateInput, update: LocationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCandidate: <T = Candidate>(args: { where: CandidateWhereUniqueInput, create: CandidateCreateInput, update: CandidateUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFile: <T = File>(args: { where: FileWhereUniqueInput, create: FileCreateInput, update: FileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertEvent: <T = Event>(args: { where: EventWhereUniqueInput, create: EventCreateInput, update: EventUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertStage: <T = Stage>(args: { where: StageWhereUniqueInput, create: StageCreateInput, update: StageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertWorkspace: <T = Workspace>(args: { where: WorkspaceWhereUniqueInput, create: WorkspaceCreateInput, update: WorkspaceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTask: <T = Task>(args: { where: TaskWhereUniqueInput, create: TaskCreateInput, update: TaskUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTag: <T = Tag>(args: { where: TagWhereUniqueInput, create: TagCreateInput, update: TagUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertWorkflow: <T = Workflow>(args: { where: WorkflowWhereUniqueInput, create: WorkflowCreateInput, update: WorkflowUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertComment: <T = Comment>(args: { where: CommentWhereUniqueInput, create: CommentCreateInput, update: CommentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertDisqualifyReason: <T = DisqualifyReason>(args: { where: DisqualifyReasonWhereUniqueInput, create: DisqualifyReasonCreateInput, update: DisqualifyReasonUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyJobs: <T = BatchPayload>(args: { data: JobUpdateInput, where?: JobWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyApplications: <T = BatchPayload>(args: { data: ApplicationUpdateInput, where?: ApplicationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyInvites: <T = BatchPayload>(args: { data: InviteUpdateInput, where?: InviteWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyNotifications: <T = BatchPayload>(args: { data: NotificationUpdateInput, where?: NotificationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFields: <T = BatchPayload>(args: { data: FieldUpdateInput, where?: FieldWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFieldLinks: <T = BatchPayload>(args: { data: FieldLinkUpdateInput, where?: FieldLinkWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLocations: <T = BatchPayload>(args: { data: LocationUpdateInput, where?: LocationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCandidates: <T = BatchPayload>(args: { data: CandidateUpdateInput, where?: CandidateWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFiles: <T = BatchPayload>(args: { data: FileUpdateInput, where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyEvents: <T = BatchPayload>(args: { data: EventUpdateInput, where?: EventWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyStages: <T = BatchPayload>(args: { data: StageUpdateInput, where?: StageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyWorkspaces: <T = BatchPayload>(args: { data: WorkspaceUpdateInput, where?: WorkspaceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTasks: <T = BatchPayload>(args: { data: TaskUpdateInput, where?: TaskWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTags: <T = BatchPayload>(args: { data: TagUpdateInput, where?: TagWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyWorkflows: <T = BatchPayload>(args: { data: WorkflowUpdateInput, where?: WorkflowWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyComments: <T = BatchPayload>(args: { data: CommentUpdateInput, where?: CommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyDisqualifyReasons: <T = BatchPayload>(args: { data: DisqualifyReasonUpdateInput, where?: DisqualifyReasonWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyJobs: <T = BatchPayload>(args: { where?: JobWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyApplications: <T = BatchPayload>(args: { where?: ApplicationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyInvites: <T = BatchPayload>(args: { where?: InviteWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyNotifications: <T = BatchPayload>(args: { where?: NotificationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFields: <T = BatchPayload>(args: { where?: FieldWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFieldLinks: <T = BatchPayload>(args: { where?: FieldLinkWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLocations: <T = BatchPayload>(args: { where?: LocationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCandidates: <T = BatchPayload>(args: { where?: CandidateWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFiles: <T = BatchPayload>(args: { where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyEvents: <T = BatchPayload>(args: { where?: EventWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyStages: <T = BatchPayload>(args: { where?: StageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyWorkspaces: <T = BatchPayload>(args: { where?: WorkspaceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTasks: <T = BatchPayload>(args: { where?: TaskWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTags: <T = BatchPayload>(args: { where?: TagWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyWorkflows: <T = BatchPayload>(args: { where?: WorkflowWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyComments: <T = BatchPayload>(args: { where?: CommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyDisqualifyReasons: <T = BatchPayload>(args: { where?: DisqualifyReasonWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    job: <T = JobSubscriptionPayload | null>(args: { where?: JobSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    application: <T = ApplicationSubscriptionPayload | null>(args: { where?: ApplicationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    invite: <T = InviteSubscriptionPayload | null>(args: { where?: InviteSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    notification: <T = NotificationSubscriptionPayload | null>(args: { where?: NotificationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    field: <T = FieldSubscriptionPayload | null>(args: { where?: FieldSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    fieldLink: <T = FieldLinkSubscriptionPayload | null>(args: { where?: FieldLinkSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    location: <T = LocationSubscriptionPayload | null>(args: { where?: LocationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    candidate: <T = CandidateSubscriptionPayload | null>(args: { where?: CandidateSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    file: <T = FileSubscriptionPayload | null>(args: { where?: FileSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    event: <T = EventSubscriptionPayload | null>(args: { where?: EventSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    stage: <T = StageSubscriptionPayload | null>(args: { where?: StageSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    workspace: <T = WorkspaceSubscriptionPayload | null>(args: { where?: WorkspaceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    task: <T = TaskSubscriptionPayload | null>(args: { where?: TaskSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    tag: <T = TagSubscriptionPayload | null>(args: { where?: TagSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    workflow: <T = WorkflowSubscriptionPayload | null>(args: { where?: WorkflowSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    comment: <T = CommentSubscriptionPayload | null>(args: { where?: CommentSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    disqualifyReason: <T = DisqualifyReasonSubscriptionPayload | null>(args: { where?: DisqualifyReasonSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Job: (where?: JobWhereInput) => Promise<boolean>
  Application: (where?: ApplicationWhereInput) => Promise<boolean>
  Invite: (where?: InviteWhereInput) => Promise<boolean>
  Notification: (where?: NotificationWhereInput) => Promise<boolean>
  Field: (where?: FieldWhereInput) => Promise<boolean>
  FieldLink: (where?: FieldLinkWhereInput) => Promise<boolean>
  Location: (where?: LocationWhereInput) => Promise<boolean>
  Candidate: (where?: CandidateWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  File: (where?: FileWhereInput) => Promise<boolean>
  Event: (where?: EventWhereInput) => Promise<boolean>
  Stage: (where?: StageWhereInput) => Promise<boolean>
  Workspace: (where?: WorkspaceWhereInput) => Promise<boolean>
  Task: (where?: TaskWhereInput) => Promise<boolean>
  Tag: (where?: TagWhereInput) => Promise<boolean>
  Workflow: (where?: WorkflowWhereInput) => Promise<boolean>
  Comment: (where?: CommentWhereInput) => Promise<boolean>
  DisqualifyReason: (where?: DisqualifyReasonWhereInput) => Promise<boolean>
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

type AggregateDisqualifyReason {
  count: Int!
}

type AggregateEvent {
  count: Int!
}

type AggregateField {
  count: Int!
}

type AggregateFieldLink {
  count: Int!
}

type AggregateFile {
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

type AggregateWorkflow {
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
  disqualifyReason(where: DisqualifyReasonWhereInput): DisqualifyReason
  job(where: JobWhereInput): Job!
  candidate(where: CandidateWhereInput): Candidate!
  stage(where: StageWhereInput): Stage
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
  workspace: WorkspaceCreateOneWithoutApplicationsInput!
  disqualifyReason: DisqualifyReasonCreateOneInput
  job: JobCreateOneWithoutApplicationsInput!
  candidate: CandidateCreateOneWithoutApplicationsInput!
  stage: StageCreateOneInput
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
  workspace: WorkspaceCreateOneWithoutApplicationsInput!
  disqualifyReason: DisqualifyReasonCreateOneInput
  job: JobCreateOneWithoutApplicationsInput!
  stage: StageCreateOneInput
}

input ApplicationCreateWithoutJobInput {
  workspace: WorkspaceCreateOneWithoutApplicationsInput!
  disqualifyReason: DisqualifyReasonCreateOneInput
  candidate: CandidateCreateOneWithoutApplicationsInput!
  stage: StageCreateOneInput
}

input ApplicationCreateWithoutWorkspaceInput {
  disqualifyReason: DisqualifyReasonCreateOneInput
  job: JobCreateOneWithoutApplicationsInput!
  candidate: CandidateCreateOneWithoutApplicationsInput!
  stage: StageCreateOneInput
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
}

type ApplicationPreviousValues {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
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
  workspace: WorkspaceUpdateOneRequiredWithoutApplicationsInput
  disqualifyReason: DisqualifyReasonUpdateOneInput
  job: JobUpdateOneRequiredWithoutApplicationsInput
  candidate: CandidateUpdateOneRequiredWithoutApplicationsInput
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
  workspace: WorkspaceUpdateOneRequiredWithoutApplicationsInput
  disqualifyReason: DisqualifyReasonUpdateOneInput
  job: JobUpdateOneRequiredWithoutApplicationsInput
  stage: StageUpdateOneInput
}

input ApplicationUpdateWithoutJobDataInput {
  workspace: WorkspaceUpdateOneRequiredWithoutApplicationsInput
  disqualifyReason: DisqualifyReasonUpdateOneInput
  candidate: CandidateUpdateOneRequiredWithoutApplicationsInput
  stage: StageUpdateOneInput
}

input ApplicationUpdateWithoutWorkspaceDataInput {
  disqualifyReason: DisqualifyReasonUpdateOneInput
  job: JobUpdateOneRequiredWithoutApplicationsInput
  candidate: CandidateUpdateOneRequiredWithoutApplicationsInput
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
  workspace: WorkspaceWhereInput
  disqualifyReason: DisqualifyReasonWhereInput
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
  avatar(where: FileWhereInput): File
  resumesString: [String!]!
  resumesFile(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File!]
  coverLettersString: [String!]!
  coverLettersFile(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File!]
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
  source: [String!]!
  fields(where: FieldLinkWhereInput, orderBy: FieldLinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FieldLink!]
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

input CandidateCreatecoverLettersStringInput {
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
  resumesString: CandidateCreateresumesStringInput
  coverLettersString: CandidateCreatecoverLettersStringInput
  source: CandidateCreatesourceInput
  workspace: WorkspaceCreateOneWithoutCandidatesInput!
  events: EventCreateManyWithoutTargetCandidateInput
  subscribers: UserCreateManyWithoutSubscriptionCandidatesInput
  avatar: FileCreateOneInput
  resumesFile: FileCreateManyInput
  coverLettersFile: FileCreateManyInput
  tags: TagCreateManyInput
  fields: FieldLinkCreateManyWithoutCandidateInput
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

input CandidateCreateOneWithoutFieldsInput {
  create: CandidateCreateWithoutFieldsInput
  connect: CandidateWhereUniqueInput
}

input CandidateCreateOneWithoutTasksInput {
  create: CandidateCreateWithoutTasksInput
  connect: CandidateWhereUniqueInput
}

input CandidateCreatephonesInput {
  set: [String!]
}

input CandidateCreateresumesStringInput {
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
  resumesString: CandidateCreateresumesStringInput
  coverLettersString: CandidateCreatecoverLettersStringInput
  source: CandidateCreatesourceInput
  workspace: WorkspaceCreateOneWithoutCandidatesInput!
  events: EventCreateManyWithoutTargetCandidateInput
  subscribers: UserCreateManyWithoutSubscriptionCandidatesInput
  avatar: FileCreateOneInput
  resumesFile: FileCreateManyInput
  coverLettersFile: FileCreateManyInput
  tags: TagCreateManyInput
  fields: FieldLinkCreateManyWithoutCandidateInput
  tasks: TaskCreateManyWithoutCandidateInput
  comments: CommentCreateManyInput
}

input CandidateCreateWithoutEventsInput {
  firstName: String!
  lastName: String!
  emails: CandidateCreateemailsInput
  phones: CandidateCreatephonesInput
  links: CandidateCreatelinksInput
  resumesString: CandidateCreateresumesStringInput
  coverLettersString: CandidateCreatecoverLettersStringInput
  source: CandidateCreatesourceInput
  workspace: WorkspaceCreateOneWithoutCandidatesInput!
  subscribers: UserCreateManyWithoutSubscriptionCandidatesInput
  avatar: FileCreateOneInput
  resumesFile: FileCreateManyInput
  coverLettersFile: FileCreateManyInput
  tags: TagCreateManyInput
  fields: FieldLinkCreateManyWithoutCandidateInput
  tasks: TaskCreateManyWithoutCandidateInput
  applications: ApplicationCreateManyWithoutCandidateInput
  comments: CommentCreateManyInput
}

input CandidateCreateWithoutFieldsInput {
  firstName: String!
  lastName: String!
  emails: CandidateCreateemailsInput
  phones: CandidateCreatephonesInput
  links: CandidateCreatelinksInput
  resumesString: CandidateCreateresumesStringInput
  coverLettersString: CandidateCreatecoverLettersStringInput
  source: CandidateCreatesourceInput
  workspace: WorkspaceCreateOneWithoutCandidatesInput!
  events: EventCreateManyWithoutTargetCandidateInput
  subscribers: UserCreateManyWithoutSubscriptionCandidatesInput
  avatar: FileCreateOneInput
  resumesFile: FileCreateManyInput
  coverLettersFile: FileCreateManyInput
  tags: TagCreateManyInput
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
  resumesString: CandidateCreateresumesStringInput
  coverLettersString: CandidateCreatecoverLettersStringInput
  source: CandidateCreatesourceInput
  workspace: WorkspaceCreateOneWithoutCandidatesInput!
  events: EventCreateManyWithoutTargetCandidateInput
  avatar: FileCreateOneInput
  resumesFile: FileCreateManyInput
  coverLettersFile: FileCreateManyInput
  tags: TagCreateManyInput
  fields: FieldLinkCreateManyWithoutCandidateInput
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
  resumesString: CandidateCreateresumesStringInput
  coverLettersString: CandidateCreatecoverLettersStringInput
  source: CandidateCreatesourceInput
  workspace: WorkspaceCreateOneWithoutCandidatesInput!
  events: EventCreateManyWithoutTargetCandidateInput
  subscribers: UserCreateManyWithoutSubscriptionCandidatesInput
  avatar: FileCreateOneInput
  resumesFile: FileCreateManyInput
  coverLettersFile: FileCreateManyInput
  tags: TagCreateManyInput
  fields: FieldLinkCreateManyWithoutCandidateInput
  applications: ApplicationCreateManyWithoutCandidateInput
  comments: CommentCreateManyInput
}

input CandidateCreateWithoutWorkspaceInput {
  firstName: String!
  lastName: String!
  emails: CandidateCreateemailsInput
  phones: CandidateCreatephonesInput
  links: CandidateCreatelinksInput
  resumesString: CandidateCreateresumesStringInput
  coverLettersString: CandidateCreatecoverLettersStringInput
  source: CandidateCreatesourceInput
  events: EventCreateManyWithoutTargetCandidateInput
  subscribers: UserCreateManyWithoutSubscriptionCandidatesInput
  avatar: FileCreateOneInput
  resumesFile: FileCreateManyInput
  coverLettersFile: FileCreateManyInput
  tags: TagCreateManyInput
  fields: FieldLinkCreateManyWithoutCandidateInput
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
  resumesString: [String!]!
  coverLettersString: [String!]!
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

input CandidateUpdatecoverLettersStringInput {
  set: [String!]
}

input CandidateUpdateDataInput {
  firstName: String
  lastName: String
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  resumesString: CandidateUpdateresumesStringInput
  coverLettersString: CandidateUpdatecoverLettersStringInput
  source: CandidateUpdatesourceInput
  workspace: WorkspaceUpdateOneRequiredWithoutCandidatesInput
  events: EventUpdateManyWithoutTargetCandidateInput
  subscribers: UserUpdateManyWithoutSubscriptionCandidatesInput
  avatar: FileUpdateOneInput
  resumesFile: FileUpdateManyInput
  coverLettersFile: FileUpdateManyInput
  tags: TagUpdateManyInput
  fields: FieldLinkUpdateManyWithoutCandidateInput
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
  resumesString: CandidateUpdateresumesStringInput
  coverLettersString: CandidateUpdatecoverLettersStringInput
  source: CandidateUpdatesourceInput
  workspace: WorkspaceUpdateOneRequiredWithoutCandidatesInput
  events: EventUpdateManyWithoutTargetCandidateInput
  subscribers: UserUpdateManyWithoutSubscriptionCandidatesInput
  avatar: FileUpdateOneInput
  resumesFile: FileUpdateManyInput
  coverLettersFile: FileUpdateManyInput
  tags: TagUpdateManyInput
  fields: FieldLinkUpdateManyWithoutCandidateInput
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

input CandidateUpdateOneRequiredWithoutApplicationsInput {
  create: CandidateCreateWithoutApplicationsInput
  connect: CandidateWhereUniqueInput
  update: CandidateUpdateWithoutApplicationsDataInput
  upsert: CandidateUpsertWithoutApplicationsInput
}

input CandidateUpdateOneRequiredWithoutFieldsInput {
  create: CandidateCreateWithoutFieldsInput
  connect: CandidateWhereUniqueInput
  update: CandidateUpdateWithoutFieldsDataInput
  upsert: CandidateUpsertWithoutFieldsInput
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

input CandidateUpdateresumesStringInput {
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
  resumesString: CandidateUpdateresumesStringInput
  coverLettersString: CandidateUpdatecoverLettersStringInput
  source: CandidateUpdatesourceInput
  workspace: WorkspaceUpdateOneRequiredWithoutCandidatesInput
  events: EventUpdateManyWithoutTargetCandidateInput
  subscribers: UserUpdateManyWithoutSubscriptionCandidatesInput
  avatar: FileUpdateOneInput
  resumesFile: FileUpdateManyInput
  coverLettersFile: FileUpdateManyInput
  tags: TagUpdateManyInput
  fields: FieldLinkUpdateManyWithoutCandidateInput
  tasks: TaskUpdateManyWithoutCandidateInput
  comments: CommentUpdateManyInput
}

input CandidateUpdateWithoutEventsDataInput {
  firstName: String
  lastName: String
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  resumesString: CandidateUpdateresumesStringInput
  coverLettersString: CandidateUpdatecoverLettersStringInput
  source: CandidateUpdatesourceInput
  workspace: WorkspaceUpdateOneRequiredWithoutCandidatesInput
  subscribers: UserUpdateManyWithoutSubscriptionCandidatesInput
  avatar: FileUpdateOneInput
  resumesFile: FileUpdateManyInput
  coverLettersFile: FileUpdateManyInput
  tags: TagUpdateManyInput
  fields: FieldLinkUpdateManyWithoutCandidateInput
  tasks: TaskUpdateManyWithoutCandidateInput
  applications: ApplicationUpdateManyWithoutCandidateInput
  comments: CommentUpdateManyInput
}

input CandidateUpdateWithoutFieldsDataInput {
  firstName: String
  lastName: String
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  resumesString: CandidateUpdateresumesStringInput
  coverLettersString: CandidateUpdatecoverLettersStringInput
  source: CandidateUpdatesourceInput
  workspace: WorkspaceUpdateOneRequiredWithoutCandidatesInput
  events: EventUpdateManyWithoutTargetCandidateInput
  subscribers: UserUpdateManyWithoutSubscriptionCandidatesInput
  avatar: FileUpdateOneInput
  resumesFile: FileUpdateManyInput
  coverLettersFile: FileUpdateManyInput
  tags: TagUpdateManyInput
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
  resumesString: CandidateUpdateresumesStringInput
  coverLettersString: CandidateUpdatecoverLettersStringInput
  source: CandidateUpdatesourceInput
  workspace: WorkspaceUpdateOneRequiredWithoutCandidatesInput
  events: EventUpdateManyWithoutTargetCandidateInput
  avatar: FileUpdateOneInput
  resumesFile: FileUpdateManyInput
  coverLettersFile: FileUpdateManyInput
  tags: TagUpdateManyInput
  fields: FieldLinkUpdateManyWithoutCandidateInput
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
  resumesString: CandidateUpdateresumesStringInput
  coverLettersString: CandidateUpdatecoverLettersStringInput
  source: CandidateUpdatesourceInput
  workspace: WorkspaceUpdateOneRequiredWithoutCandidatesInput
  events: EventUpdateManyWithoutTargetCandidateInput
  subscribers: UserUpdateManyWithoutSubscriptionCandidatesInput
  avatar: FileUpdateOneInput
  resumesFile: FileUpdateManyInput
  coverLettersFile: FileUpdateManyInput
  tags: TagUpdateManyInput
  fields: FieldLinkUpdateManyWithoutCandidateInput
  applications: ApplicationUpdateManyWithoutCandidateInput
  comments: CommentUpdateManyInput
}

input CandidateUpdateWithoutWorkspaceDataInput {
  firstName: String
  lastName: String
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  resumesString: CandidateUpdateresumesStringInput
  coverLettersString: CandidateUpdatecoverLettersStringInput
  source: CandidateUpdatesourceInput
  events: EventUpdateManyWithoutTargetCandidateInput
  subscribers: UserUpdateManyWithoutSubscriptionCandidatesInput
  avatar: FileUpdateOneInput
  resumesFile: FileUpdateManyInput
  coverLettersFile: FileUpdateManyInput
  tags: TagUpdateManyInput
  fields: FieldLinkUpdateManyWithoutCandidateInput
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

input CandidateUpsertWithoutFieldsInput {
  update: CandidateUpdateWithoutFieldsDataInput!
  create: CandidateCreateWithoutFieldsInput!
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
  avatar: FileWhereInput
  resumesFile_every: FileWhereInput
  resumesFile_some: FileWhereInput
  resumesFile_none: FileWhereInput
  coverLettersFile_every: FileWhereInput
  coverLettersFile_some: FileWhereInput
  coverLettersFile_none: FileWhereInput
  tags_every: TagWhereInput
  tags_some: TagWhereInput
  tags_none: TagWhereInput
  fields_every: FieldLinkWhereInput
  fields_some: FieldLinkWhereInput
  fields_none: FieldLinkWhereInput
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
  createdBy: UserUpdateOneRequiredInput
  parent: CommentUpdateOneInput
}

input CommentUpdateInput {
  content: String
  createdBy: UserUpdateOneRequiredInput
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

type DisqualifyReason implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  description: String
}

"""A connection to a list of items."""
type DisqualifyReasonConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [DisqualifyReasonEdge]!
  aggregate: AggregateDisqualifyReason!
}

input DisqualifyReasonCreateInput {
  name: String!
  description: String
}

input DisqualifyReasonCreateManyInput {
  create: [DisqualifyReasonCreateInput!]
  connect: [DisqualifyReasonWhereUniqueInput!]
}

input DisqualifyReasonCreateOneInput {
  create: DisqualifyReasonCreateInput
  connect: DisqualifyReasonWhereUniqueInput
}

"""An edge in a connection."""
type DisqualifyReasonEdge {
  """The item at the end of the edge."""
  node: DisqualifyReason!

  """A cursor for use in pagination."""
  cursor: String!
}

enum DisqualifyReasonOrderByInput {
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
}

type DisqualifyReasonPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  description: String
}

type DisqualifyReasonSubscriptionPayload {
  mutation: MutationType!
  node: DisqualifyReason
  updatedFields: [String!]
  previousValues: DisqualifyReasonPreviousValues
}

input DisqualifyReasonSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [DisqualifyReasonSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [DisqualifyReasonSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DisqualifyReasonSubscriptionWhereInput!]

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
  node: DisqualifyReasonWhereInput
}

input DisqualifyReasonUpdateDataInput {
  name: String
  description: String
}

input DisqualifyReasonUpdateInput {
  name: String
  description: String
}

input DisqualifyReasonUpdateManyInput {
  create: [DisqualifyReasonCreateInput!]
  connect: [DisqualifyReasonWhereUniqueInput!]
  disconnect: [DisqualifyReasonWhereUniqueInput!]
  delete: [DisqualifyReasonWhereUniqueInput!]
  update: [DisqualifyReasonUpdateWithWhereUniqueNestedInput!]
  upsert: [DisqualifyReasonUpsertWithWhereUniqueNestedInput!]
}

input DisqualifyReasonUpdateOneInput {
  create: DisqualifyReasonCreateInput
  connect: DisqualifyReasonWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: DisqualifyReasonUpdateDataInput
  upsert: DisqualifyReasonUpsertNestedInput
}

input DisqualifyReasonUpdateWithWhereUniqueNestedInput {
  where: DisqualifyReasonWhereUniqueInput!
  data: DisqualifyReasonUpdateDataInput!
}

input DisqualifyReasonUpsertNestedInput {
  update: DisqualifyReasonUpdateDataInput!
  create: DisqualifyReasonCreateInput!
}

input DisqualifyReasonUpsertWithWhereUniqueNestedInput {
  where: DisqualifyReasonWhereUniqueInput!
  update: DisqualifyReasonUpdateDataInput!
  create: DisqualifyReasonCreateInput!
}

input DisqualifyReasonWhereInput {
  """Logical AND on all given filters."""
  AND: [DisqualifyReasonWhereInput!]

  """Logical OR on all given filters."""
  OR: [DisqualifyReasonWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DisqualifyReasonWhereInput!]
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
}

input DisqualifyReasonWhereUniqueInput {
  id: ID
}

type Event implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  workspace(where: WorkspaceWhereInput): Workspace!
  type: EventType!
  actorType: EventActorType!
  actorUser(where: UserWhereInput): User
  actorCandidate(where: CandidateWhereInput): Candidate
  targetType: EventTargetType!
  targetCandidate(where: CandidateWhereInput): Candidate
  targetJob(where: JobWhereInput): Job
  targetTask(where: TaskWhereInput): Task
  targetWorkspace(where: WorkspaceWhereInput): Workspace
}

enum EventActorType {
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
  type: EventType!
  actorType: EventActorType!
  targetType: EventTargetType!
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
  type: EventType!
  actorType: EventActorType!
  targetType: EventTargetType!
  workspace: WorkspaceCreateOneInput!
  actorCandidate: CandidateCreateOneInput
  targetCandidate: CandidateCreateOneWithoutEventsInput
  targetJob: JobCreateOneWithoutEventsInput
  targetTask: TaskCreateOneInput
  targetWorkspace: WorkspaceCreateOneWithoutEventsInput
}

input EventCreateWithoutTargetCandidateInput {
  type: EventType!
  actorType: EventActorType!
  targetType: EventTargetType!
  workspace: WorkspaceCreateOneInput!
  actorUser: UserCreateOneWithoutEventsInput
  actorCandidate: CandidateCreateOneInput
  targetJob: JobCreateOneWithoutEventsInput
  targetTask: TaskCreateOneInput
  targetWorkspace: WorkspaceCreateOneWithoutEventsInput
}

input EventCreateWithoutTargetJobInput {
  type: EventType!
  actorType: EventActorType!
  targetType: EventTargetType!
  workspace: WorkspaceCreateOneInput!
  actorUser: UserCreateOneWithoutEventsInput
  actorCandidate: CandidateCreateOneInput
  targetCandidate: CandidateCreateOneWithoutEventsInput
  targetTask: TaskCreateOneInput
  targetWorkspace: WorkspaceCreateOneWithoutEventsInput
}

input EventCreateWithoutTargetWorkspaceInput {
  type: EventType!
  actorType: EventActorType!
  targetType: EventTargetType!
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
  type: EventType!
  actorType: EventActorType!
  targetType: EventTargetType!
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

enum EventTargetType {
  CANDIDATE
  JOB
  TASK
  WORKSPACE
}

enum EventType {
  DEFAULT
  MESSAGE
  COMMENT_CREATE
  COMMENT_EDIT
  COMMENT_DELETE
}

input EventUpdateDataInput {
  type: EventType
  actorType: EventActorType
  targetType: EventTargetType
  workspace: WorkspaceUpdateOneRequiredInput
  actorUser: UserUpdateOneWithoutEventsInput
  actorCandidate: CandidateUpdateOneInput
  targetCandidate: CandidateUpdateOneWithoutEventsInput
  targetJob: JobUpdateOneWithoutEventsInput
  targetTask: TaskUpdateOneInput
  targetWorkspace: WorkspaceUpdateOneWithoutEventsInput
}

input EventUpdateInput {
  type: EventType
  actorType: EventActorType
  targetType: EventTargetType
  workspace: WorkspaceUpdateOneRequiredInput
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

input EventUpdateOneRequiredInput {
  create: EventCreateInput
  connect: EventWhereUniqueInput
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
  type: EventType
  actorType: EventActorType
  targetType: EventTargetType
  workspace: WorkspaceUpdateOneRequiredInput
  actorCandidate: CandidateUpdateOneInput
  targetCandidate: CandidateUpdateOneWithoutEventsInput
  targetJob: JobUpdateOneWithoutEventsInput
  targetTask: TaskUpdateOneInput
  targetWorkspace: WorkspaceUpdateOneWithoutEventsInput
}

input EventUpdateWithoutTargetCandidateDataInput {
  type: EventType
  actorType: EventActorType
  targetType: EventTargetType
  workspace: WorkspaceUpdateOneRequiredInput
  actorUser: UserUpdateOneWithoutEventsInput
  actorCandidate: CandidateUpdateOneInput
  targetJob: JobUpdateOneWithoutEventsInput
  targetTask: TaskUpdateOneInput
  targetWorkspace: WorkspaceUpdateOneWithoutEventsInput
}

input EventUpdateWithoutTargetJobDataInput {
  type: EventType
  actorType: EventActorType
  targetType: EventTargetType
  workspace: WorkspaceUpdateOneRequiredInput
  actorUser: UserUpdateOneWithoutEventsInput
  actorCandidate: CandidateUpdateOneInput
  targetCandidate: CandidateUpdateOneWithoutEventsInput
  targetTask: TaskUpdateOneInput
  targetWorkspace: WorkspaceUpdateOneWithoutEventsInput
}

input EventUpdateWithoutTargetWorkspaceDataInput {
  type: EventType
  actorType: EventActorType
  targetType: EventTargetType
  workspace: WorkspaceUpdateOneRequiredInput
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
  type: EventType

  """All values that are not equal to given value."""
  type_not: EventType

  """All values that are contained in given list."""
  type_in: [EventType!]

  """All values that are not contained in given list."""
  type_not_in: [EventType!]
  actorType: EventActorType

  """All values that are not equal to given value."""
  actorType_not: EventActorType

  """All values that are contained in given list."""
  actorType_in: [EventActorType!]

  """All values that are not contained in given list."""
  actorType_not_in: [EventActorType!]
  targetType: EventTargetType

  """All values that are not equal to given value."""
  targetType_not: EventTargetType

  """All values that are contained in given list."""
  targetType_in: [EventTargetType!]

  """All values that are not contained in given list."""
  targetType_not_in: [EventTargetType!]
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
  createdAt: DateTime!
  updatedAt: DateTime!
  type: FieldType!
  label: String!
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
  type: FieldType!
  label: String!
}

"""An edge in a connection."""
type FieldEdge {
  """The item at the end of the edge."""
  node: Field!

  """A cursor for use in pagination."""
  cursor: String!
}

type FieldLink implements Node {
  id: ID!
  candidate(where: CandidateWhereInput): Candidate!
  value: String
}

"""A connection to a list of items."""
type FieldLinkConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [FieldLinkEdge]!
  aggregate: AggregateFieldLink!
}

input FieldLinkCreateInput {
  value: String
  candidate: CandidateCreateOneWithoutFieldsInput!
}

input FieldLinkCreateManyWithoutCandidateInput {
  create: [FieldLinkCreateWithoutCandidateInput!]
  connect: [FieldLinkWhereUniqueInput!]
}

input FieldLinkCreateWithoutCandidateInput {
  value: String
}

"""An edge in a connection."""
type FieldLinkEdge {
  """The item at the end of the edge."""
  node: FieldLink!

  """A cursor for use in pagination."""
  cursor: String!
}

enum FieldLinkOrderByInput {
  id_ASC
  id_DESC
  value_ASC
  value_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type FieldLinkPreviousValues {
  id: ID!
  value: String
}

type FieldLinkSubscriptionPayload {
  mutation: MutationType!
  node: FieldLink
  updatedFields: [String!]
  previousValues: FieldLinkPreviousValues
}

input FieldLinkSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [FieldLinkSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [FieldLinkSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FieldLinkSubscriptionWhereInput!]

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
  node: FieldLinkWhereInput
}

input FieldLinkUpdateInput {
  value: String
  candidate: CandidateUpdateOneRequiredWithoutFieldsInput
}

input FieldLinkUpdateManyWithoutCandidateInput {
  create: [FieldLinkCreateWithoutCandidateInput!]
  connect: [FieldLinkWhereUniqueInput!]
  disconnect: [FieldLinkWhereUniqueInput!]
  delete: [FieldLinkWhereUniqueInput!]
  update: [FieldLinkUpdateWithWhereUniqueWithoutCandidateInput!]
  upsert: [FieldLinkUpsertWithWhereUniqueWithoutCandidateInput!]
}

input FieldLinkUpdateWithoutCandidateDataInput {
  value: String
}

input FieldLinkUpdateWithWhereUniqueWithoutCandidateInput {
  where: FieldLinkWhereUniqueInput!
  data: FieldLinkUpdateWithoutCandidateDataInput!
}

input FieldLinkUpsertWithWhereUniqueWithoutCandidateInput {
  where: FieldLinkWhereUniqueInput!
  update: FieldLinkUpdateWithoutCandidateDataInput!
  create: FieldLinkCreateWithoutCandidateInput!
}

input FieldLinkWhereInput {
  """Logical AND on all given filters."""
  AND: [FieldLinkWhereInput!]

  """Logical OR on all given filters."""
  OR: [FieldLinkWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FieldLinkWhereInput!]
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
  candidate: CandidateWhereInput
}

input FieldLinkWhereUniqueInput {
  id: ID
}

enum FieldOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  type_ASC
  type_DESC
  label_ASC
  label_DESC
}

type FieldPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  type: FieldType!
  label: String!
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

enum FieldType {
  INT
  FLOAT
  STRING
  TEXT
  BOOLEAN
  DATE_TIME
}

input FieldUpdateInput {
  type: FieldType
  label: String
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
  type: FieldType

  """All values that are not equal to given value."""
  type_not: FieldType

  """All values that are contained in given list."""
  type_in: [FieldType!]

  """All values that are not contained in given list."""
  type_not_in: [FieldType!]
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

input FieldWhereUniqueInput {
  id: ID
}

type File implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  size: Int!
  type: String!
  name: String!
  url: String!
}

"""A connection to a list of items."""
type FileConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [FileEdge]!
  aggregate: AggregateFile!
}

input FileCreateInput {
  size: Int!
  type: String!
  name: String!
  url: String!
}

input FileCreateManyInput {
  create: [FileCreateInput!]
  connect: [FileWhereUniqueInput!]
}

input FileCreateOneInput {
  create: FileCreateInput
  connect: FileWhereUniqueInput
}

"""An edge in a connection."""
type FileEdge {
  """The item at the end of the edge."""
  node: File!

  """A cursor for use in pagination."""
  cursor: String!
}

enum FileOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  size_ASC
  size_DESC
  type_ASC
  type_DESC
  name_ASC
  name_DESC
  url_ASC
  url_DESC
}

type FilePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  size: Int!
  type: String!
  name: String!
  url: String!
}

type FileSubscriptionPayload {
  mutation: MutationType!
  node: File
  updatedFields: [String!]
  previousValues: FilePreviousValues
}

input FileSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [FileSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileSubscriptionWhereInput!]

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
  node: FileWhereInput
}

input FileUpdateDataInput {
  size: Int
  type: String
  name: String
  url: String
}

input FileUpdateInput {
  size: Int
  type: String
  name: String
  url: String
}

input FileUpdateManyInput {
  create: [FileCreateInput!]
  connect: [FileWhereUniqueInput!]
  disconnect: [FileWhereUniqueInput!]
  delete: [FileWhereUniqueInput!]
  update: [FileUpdateWithWhereUniqueNestedInput!]
  upsert: [FileUpsertWithWhereUniqueNestedInput!]
}

input FileUpdateOneInput {
  create: FileCreateInput
  connect: FileWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: FileUpdateDataInput
  upsert: FileUpsertNestedInput
}

input FileUpdateWithWhereUniqueNestedInput {
  where: FileWhereUniqueInput!
  data: FileUpdateDataInput!
}

input FileUpsertNestedInput {
  update: FileUpdateDataInput!
  create: FileCreateInput!
}

input FileUpsertWithWhereUniqueNestedInput {
  where: FileWhereUniqueInput!
  update: FileUpdateDataInput!
  create: FileCreateInput!
}

input FileWhereInput {
  """Logical AND on all given filters."""
  AND: [FileWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileWhereInput!]
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
  size: Int

  """All values that are not equal to given value."""
  size_not: Int

  """All values that are contained in given list."""
  size_in: [Int!]

  """All values that are not contained in given list."""
  size_not_in: [Int!]

  """All values less than the given value."""
  size_lt: Int

  """All values less than or equal the given value."""
  size_lte: Int

  """All values greater than the given value."""
  size_gt: Int

  """All values greater than or equal the given value."""
  size_gte: Int
  type: String

  """All values that are not equal to given value."""
  type_not: String

  """All values that are contained in given list."""
  type_in: [String!]

  """All values that are not contained in given list."""
  type_not_in: [String!]

  """All values less than the given value."""
  type_lt: String

  """All values less than or equal the given value."""
  type_lte: String

  """All values greater than the given value."""
  type_gt: String

  """All values greater than or equal the given value."""
  type_gte: String

  """All values containing the given string."""
  type_contains: String

  """All values not containing the given string."""
  type_not_contains: String

  """All values starting with the given string."""
  type_starts_with: String

  """All values not starting with the given string."""
  type_not_starts_with: String

  """All values ending with the given string."""
  type_ends_with: String

  """All values not ending with the given string."""
  type_not_ends_with: String
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
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
}

input FileWhereUniqueInput {
  id: ID
  url: String
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
  workspace: WorkspaceUpdateOneRequiredWithoutInvitesInput
  invitedBy: UserUpdateOneRequiredInput
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
  invitedBy: UserUpdateOneRequiredInput
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
  workflow(where: WorkflowWhereInput): Workflow!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  status: JobType!
  department: String
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location!]
  name: String!
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
  department: String
  name: String!
  description: String
  requirements: String
  workspace: WorkspaceCreateOneWithoutJobsInput!
  subscribers: UserCreateManyWithoutSubscriptionJobsInput
  events: EventCreateManyWithoutTargetJobInput
  applications: ApplicationCreateManyWithoutJobInput
  workflow: WorkflowCreateOneInput!
  comments: CommentCreateManyInput
  locations: LocationCreateManyInput
}

input JobCreateManyWithoutSubscribersInput {
  create: [JobCreateWithoutSubscribersInput!]
  connect: [JobWhereUniqueInput!]
}

input JobCreateManyWithoutWorkspaceInput {
  create: [JobCreateWithoutWorkspaceInput!]
  connect: [JobWhereUniqueInput!]
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
  department: String
  name: String!
  description: String
  requirements: String
  workspace: WorkspaceCreateOneWithoutJobsInput!
  subscribers: UserCreateManyWithoutSubscriptionJobsInput
  events: EventCreateManyWithoutTargetJobInput
  workflow: WorkflowCreateOneInput!
  comments: CommentCreateManyInput
  locations: LocationCreateManyInput
}

input JobCreateWithoutEventsInput {
  status: JobType!
  department: String
  name: String!
  description: String
  requirements: String
  workspace: WorkspaceCreateOneWithoutJobsInput!
  subscribers: UserCreateManyWithoutSubscriptionJobsInput
  applications: ApplicationCreateManyWithoutJobInput
  workflow: WorkflowCreateOneInput!
  comments: CommentCreateManyInput
  locations: LocationCreateManyInput
}

input JobCreateWithoutSubscribersInput {
  status: JobType!
  department: String
  name: String!
  description: String
  requirements: String
  workspace: WorkspaceCreateOneWithoutJobsInput!
  events: EventCreateManyWithoutTargetJobInput
  applications: ApplicationCreateManyWithoutJobInput
  workflow: WorkflowCreateOneInput!
  comments: CommentCreateManyInput
  locations: LocationCreateManyInput
}

input JobCreateWithoutWorkspaceInput {
  status: JobType!
  department: String
  name: String!
  description: String
  requirements: String
  subscribers: UserCreateManyWithoutSubscriptionJobsInput
  events: EventCreateManyWithoutTargetJobInput
  applications: ApplicationCreateManyWithoutJobInput
  workflow: WorkflowCreateOneInput!
  comments: CommentCreateManyInput
  locations: LocationCreateManyInput
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
  department_ASC
  department_DESC
  name_ASC
  name_DESC
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
  department: String
  name: String!
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

input JobUpdateInput {
  status: JobType
  department: String
  name: String
  description: String
  requirements: String
  workspace: WorkspaceUpdateOneRequiredWithoutJobsInput
  subscribers: UserUpdateManyWithoutSubscriptionJobsInput
  events: EventUpdateManyWithoutTargetJobInput
  applications: ApplicationUpdateManyWithoutJobInput
  workflow: WorkflowUpdateOneRequiredInput
  comments: CommentUpdateManyInput
  locations: LocationUpdateManyInput
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

input JobUpdateOneRequiredWithoutApplicationsInput {
  create: JobCreateWithoutApplicationsInput
  connect: JobWhereUniqueInput
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
  department: String
  name: String
  description: String
  requirements: String
  workspace: WorkspaceUpdateOneRequiredWithoutJobsInput
  subscribers: UserUpdateManyWithoutSubscriptionJobsInput
  events: EventUpdateManyWithoutTargetJobInput
  workflow: WorkflowUpdateOneRequiredInput
  comments: CommentUpdateManyInput
  locations: LocationUpdateManyInput
}

input JobUpdateWithoutEventsDataInput {
  status: JobType
  department: String
  name: String
  description: String
  requirements: String
  workspace: WorkspaceUpdateOneRequiredWithoutJobsInput
  subscribers: UserUpdateManyWithoutSubscriptionJobsInput
  applications: ApplicationUpdateManyWithoutJobInput
  workflow: WorkflowUpdateOneRequiredInput
  comments: CommentUpdateManyInput
  locations: LocationUpdateManyInput
}

input JobUpdateWithoutSubscribersDataInput {
  status: JobType
  department: String
  name: String
  description: String
  requirements: String
  workspace: WorkspaceUpdateOneRequiredWithoutJobsInput
  events: EventUpdateManyWithoutTargetJobInput
  applications: ApplicationUpdateManyWithoutJobInput
  workflow: WorkflowUpdateOneRequiredInput
  comments: CommentUpdateManyInput
  locations: LocationUpdateManyInput
}

input JobUpdateWithoutWorkspaceDataInput {
  status: JobType
  department: String
  name: String
  description: String
  requirements: String
  subscribers: UserUpdateManyWithoutSubscriptionJobsInput
  events: EventUpdateManyWithoutTargetJobInput
  applications: ApplicationUpdateManyWithoutJobInput
  workflow: WorkflowUpdateOneRequiredInput
  comments: CommentUpdateManyInput
  locations: LocationUpdateManyInput
}

input JobUpdateWithWhereUniqueWithoutSubscribersInput {
  where: JobWhereUniqueInput!
  data: JobUpdateWithoutSubscribersDataInput!
}

input JobUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: JobWhereUniqueInput!
  data: JobUpdateWithoutWorkspaceDataInput!
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
  workflow: WorkflowWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  locations_every: LocationWhereInput
  locations_some: LocationWhereInput
  locations_none: LocationWhereInput
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

input LocationCreateManyInput {
  create: [LocationCreateInput!]
  connect: [LocationWhereUniqueInput!]
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

input LocationUpdateManyInput {
  create: [LocationCreateInput!]
  connect: [LocationWhereUniqueInput!]
  disconnect: [LocationWhereUniqueInput!]
  delete: [LocationWhereUniqueInput!]
  update: [LocationUpdateWithWhereUniqueNestedInput!]
  upsert: [LocationUpsertWithWhereUniqueNestedInput!]
}

input LocationUpdateWithWhereUniqueNestedInput {
  where: LocationWhereUniqueInput!
  data: LocationUpdateDataInput!
}

input LocationUpsertWithWhereUniqueNestedInput {
  where: LocationWhereUniqueInput!
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
  createJob(data: JobCreateInput!): Job!
  createApplication(data: ApplicationCreateInput!): Application!
  createInvite(data: InviteCreateInput!): Invite!
  createNotification(data: NotificationCreateInput!): Notification!
  createField(data: FieldCreateInput!): Field!
  createFieldLink(data: FieldLinkCreateInput!): FieldLink!
  createLocation(data: LocationCreateInput!): Location!
  createCandidate(data: CandidateCreateInput!): Candidate!
  createUser(data: UserCreateInput!): User!
  createFile(data: FileCreateInput!): File!
  createEvent(data: EventCreateInput!): Event!
  createStage(data: StageCreateInput!): Stage!
  createWorkspace(data: WorkspaceCreateInput!): Workspace!
  createTask(data: TaskCreateInput!): Task!
  createTag(data: TagCreateInput!): Tag!
  createWorkflow(data: WorkflowCreateInput!): Workflow!
  createComment(data: CommentCreateInput!): Comment!
  createDisqualifyReason(data: DisqualifyReasonCreateInput!): DisqualifyReason!
  updateJob(data: JobUpdateInput!, where: JobWhereUniqueInput!): Job
  updateApplication(data: ApplicationUpdateInput!, where: ApplicationWhereUniqueInput!): Application
  updateInvite(data: InviteUpdateInput!, where: InviteWhereUniqueInput!): Invite
  updateNotification(data: NotificationUpdateInput!, where: NotificationWhereUniqueInput!): Notification
  updateField(data: FieldUpdateInput!, where: FieldWhereUniqueInput!): Field
  updateFieldLink(data: FieldLinkUpdateInput!, where: FieldLinkWhereUniqueInput!): FieldLink
  updateLocation(data: LocationUpdateInput!, where: LocationWhereUniqueInput!): Location
  updateCandidate(data: CandidateUpdateInput!, where: CandidateWhereUniqueInput!): Candidate
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  updateEvent(data: EventUpdateInput!, where: EventWhereUniqueInput!): Event
  updateStage(data: StageUpdateInput!, where: StageWhereUniqueInput!): Stage
  updateWorkspace(data: WorkspaceUpdateInput!, where: WorkspaceWhereUniqueInput!): Workspace
  updateTask(data: TaskUpdateInput!, where: TaskWhereUniqueInput!): Task
  updateTag(data: TagUpdateInput!, where: TagWhereUniqueInput!): Tag
  updateWorkflow(data: WorkflowUpdateInput!, where: WorkflowWhereUniqueInput!): Workflow
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  updateDisqualifyReason(data: DisqualifyReasonUpdateInput!, where: DisqualifyReasonWhereUniqueInput!): DisqualifyReason
  deleteJob(where: JobWhereUniqueInput!): Job
  deleteApplication(where: ApplicationWhereUniqueInput!): Application
  deleteInvite(where: InviteWhereUniqueInput!): Invite
  deleteNotification(where: NotificationWhereUniqueInput!): Notification
  deleteField(where: FieldWhereUniqueInput!): Field
  deleteFieldLink(where: FieldLinkWhereUniqueInput!): FieldLink
  deleteLocation(where: LocationWhereUniqueInput!): Location
  deleteCandidate(where: CandidateWhereUniqueInput!): Candidate
  deleteUser(where: UserWhereUniqueInput!): User
  deleteFile(where: FileWhereUniqueInput!): File
  deleteEvent(where: EventWhereUniqueInput!): Event
  deleteStage(where: StageWhereUniqueInput!): Stage
  deleteWorkspace(where: WorkspaceWhereUniqueInput!): Workspace
  deleteTask(where: TaskWhereUniqueInput!): Task
  deleteTag(where: TagWhereUniqueInput!): Tag
  deleteWorkflow(where: WorkflowWhereUniqueInput!): Workflow
  deleteComment(where: CommentWhereUniqueInput!): Comment
  deleteDisqualifyReason(where: DisqualifyReasonWhereUniqueInput!): DisqualifyReason
  upsertJob(where: JobWhereUniqueInput!, create: JobCreateInput!, update: JobUpdateInput!): Job!
  upsertApplication(where: ApplicationWhereUniqueInput!, create: ApplicationCreateInput!, update: ApplicationUpdateInput!): Application!
  upsertInvite(where: InviteWhereUniqueInput!, create: InviteCreateInput!, update: InviteUpdateInput!): Invite!
  upsertNotification(where: NotificationWhereUniqueInput!, create: NotificationCreateInput!, update: NotificationUpdateInput!): Notification!
  upsertField(where: FieldWhereUniqueInput!, create: FieldCreateInput!, update: FieldUpdateInput!): Field!
  upsertFieldLink(where: FieldLinkWhereUniqueInput!, create: FieldLinkCreateInput!, update: FieldLinkUpdateInput!): FieldLink!
  upsertLocation(where: LocationWhereUniqueInput!, create: LocationCreateInput!, update: LocationUpdateInput!): Location!
  upsertCandidate(where: CandidateWhereUniqueInput!, create: CandidateCreateInput!, update: CandidateUpdateInput!): Candidate!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  upsertEvent(where: EventWhereUniqueInput!, create: EventCreateInput!, update: EventUpdateInput!): Event!
  upsertStage(where: StageWhereUniqueInput!, create: StageCreateInput!, update: StageUpdateInput!): Stage!
  upsertWorkspace(where: WorkspaceWhereUniqueInput!, create: WorkspaceCreateInput!, update: WorkspaceUpdateInput!): Workspace!
  upsertTask(where: TaskWhereUniqueInput!, create: TaskCreateInput!, update: TaskUpdateInput!): Task!
  upsertTag(where: TagWhereUniqueInput!, create: TagCreateInput!, update: TagUpdateInput!): Tag!
  upsertWorkflow(where: WorkflowWhereUniqueInput!, create: WorkflowCreateInput!, update: WorkflowUpdateInput!): Workflow!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  upsertDisqualifyReason(where: DisqualifyReasonWhereUniqueInput!, create: DisqualifyReasonCreateInput!, update: DisqualifyReasonUpdateInput!): DisqualifyReason!
  updateManyJobs(data: JobUpdateInput!, where: JobWhereInput): BatchPayload!
  updateManyApplications(data: ApplicationUpdateInput!, where: ApplicationWhereInput): BatchPayload!
  updateManyInvites(data: InviteUpdateInput!, where: InviteWhereInput): BatchPayload!
  updateManyNotifications(data: NotificationUpdateInput!, where: NotificationWhereInput): BatchPayload!
  updateManyFields(data: FieldUpdateInput!, where: FieldWhereInput): BatchPayload!
  updateManyFieldLinks(data: FieldLinkUpdateInput!, where: FieldLinkWhereInput): BatchPayload!
  updateManyLocations(data: LocationUpdateInput!, where: LocationWhereInput): BatchPayload!
  updateManyCandidates(data: CandidateUpdateInput!, where: CandidateWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyFiles(data: FileUpdateInput!, where: FileWhereInput): BatchPayload!
  updateManyEvents(data: EventUpdateInput!, where: EventWhereInput): BatchPayload!
  updateManyStages(data: StageUpdateInput!, where: StageWhereInput): BatchPayload!
  updateManyWorkspaces(data: WorkspaceUpdateInput!, where: WorkspaceWhereInput): BatchPayload!
  updateManyTasks(data: TaskUpdateInput!, where: TaskWhereInput): BatchPayload!
  updateManyTags(data: TagUpdateInput!, where: TagWhereInput): BatchPayload!
  updateManyWorkflows(data: WorkflowUpdateInput!, where: WorkflowWhereInput): BatchPayload!
  updateManyComments(data: CommentUpdateInput!, where: CommentWhereInput): BatchPayload!
  updateManyDisqualifyReasons(data: DisqualifyReasonUpdateInput!, where: DisqualifyReasonWhereInput): BatchPayload!
  deleteManyJobs(where: JobWhereInput): BatchPayload!
  deleteManyApplications(where: ApplicationWhereInput): BatchPayload!
  deleteManyInvites(where: InviteWhereInput): BatchPayload!
  deleteManyNotifications(where: NotificationWhereInput): BatchPayload!
  deleteManyFields(where: FieldWhereInput): BatchPayload!
  deleteManyFieldLinks(where: FieldLinkWhereInput): BatchPayload!
  deleteManyLocations(where: LocationWhereInput): BatchPayload!
  deleteManyCandidates(where: CandidateWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyFiles(where: FileWhereInput): BatchPayload!
  deleteManyEvents(where: EventWhereInput): BatchPayload!
  deleteManyStages(where: StageWhereInput): BatchPayload!
  deleteManyWorkspaces(where: WorkspaceWhereInput): BatchPayload!
  deleteManyTasks(where: TaskWhereInput): BatchPayload!
  deleteManyTags(where: TagWhereInput): BatchPayload!
  deleteManyWorkflows(where: WorkflowWhereInput): BatchPayload!
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  deleteManyDisqualifyReasons(where: DisqualifyReasonWhereInput): BatchPayload!
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
  type: NotificationType!
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
  type: NotificationType!
  user: UserCreateOneWithoutNotificationsInput!
  event: EventCreateOneInput!
}

input NotificationCreateManyWithoutUserInput {
  create: [NotificationCreateWithoutUserInput!]
  connect: [NotificationWhereUniqueInput!]
}

input NotificationCreateWithoutUserInput {
  type: NotificationType!
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
  type_ASC
  type_DESC
}

type NotificationPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  type: NotificationType!
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

enum NotificationType {
  NEW
  UNREAD
  READ
}

input NotificationUpdateInput {
  type: NotificationType
  user: UserUpdateOneRequiredWithoutNotificationsInput
  event: EventUpdateOneRequiredInput
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
  type: NotificationType
  event: EventUpdateOneRequiredInput
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
  type: NotificationType

  """All values that are not equal to given value."""
  type_not: NotificationType

  """All values that are contained in given list."""
  type_in: [NotificationType!]

  """All values that are not contained in given list."""
  type_not_in: [NotificationType!]
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
  jobs(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Job]!
  applications(where: ApplicationWhereInput, orderBy: ApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Application]!
  invites(where: InviteWhereInput, orderBy: InviteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invite]!
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification]!
  fields(where: FieldWhereInput, orderBy: FieldOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Field]!
  fieldLinks(where: FieldLinkWhereInput, orderBy: FieldLinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FieldLink]!
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  candidates(where: CandidateWhereInput, orderBy: CandidateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Candidate]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event]!
  stages(where: StageWhereInput, orderBy: StageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stage]!
  workspaces(where: WorkspaceWhereInput, orderBy: WorkspaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Workspace]!
  tasks(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Task]!
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag]!
  workflows(where: WorkflowWhereInput, orderBy: WorkflowOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Workflow]!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  disqualifyReasons(where: DisqualifyReasonWhereInput, orderBy: DisqualifyReasonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [DisqualifyReason]!
  job(where: JobWhereUniqueInput!): Job
  application(where: ApplicationWhereUniqueInput!): Application
  invite(where: InviteWhereUniqueInput!): Invite
  notification(where: NotificationWhereUniqueInput!): Notification
  field(where: FieldWhereUniqueInput!): Field
  fieldLink(where: FieldLinkWhereUniqueInput!): FieldLink
  location(where: LocationWhereUniqueInput!): Location
  candidate(where: CandidateWhereUniqueInput!): Candidate
  user(where: UserWhereUniqueInput!): User
  file(where: FileWhereUniqueInput!): File
  event(where: EventWhereUniqueInput!): Event
  stage(where: StageWhereUniqueInput!): Stage
  workspace(where: WorkspaceWhereUniqueInput!): Workspace
  task(where: TaskWhereUniqueInput!): Task
  tag(where: TagWhereUniqueInput!): Tag
  workflow(where: WorkflowWhereUniqueInput!): Workflow
  comment(where: CommentWhereUniqueInput!): Comment
  disqualifyReason(where: DisqualifyReasonWhereUniqueInput!): DisqualifyReason
  jobsConnection(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): JobConnection!
  applicationsConnection(where: ApplicationWhereInput, orderBy: ApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ApplicationConnection!
  invitesConnection(where: InviteWhereInput, orderBy: InviteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): InviteConnection!
  notificationsConnection(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NotificationConnection!
  fieldsConnection(where: FieldWhereInput, orderBy: FieldOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FieldConnection!
  fieldLinksConnection(where: FieldLinkWhereInput, orderBy: FieldLinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FieldLinkConnection!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  candidatesConnection(where: CandidateWhereInput, orderBy: CandidateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CandidateConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!
  eventsConnection(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventConnection!
  stagesConnection(where: StageWhereInput, orderBy: StageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StageConnection!
  workspacesConnection(where: WorkspaceWhereInput, orderBy: WorkspaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WorkspaceConnection!
  tasksConnection(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TaskConnection!
  tagsConnection(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TagConnection!
  workflowsConnection(where: WorkflowWhereInput, orderBy: WorkflowOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WorkflowConnection!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  disqualifyReasonsConnection(where: DisqualifyReasonWhereInput, orderBy: DisqualifyReasonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DisqualifyReasonConnection!

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
  type: StageType!
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
  type: StageType!
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
  type_ASC
  type_DESC
}

type StagePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  description: String
  type: StageType!
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

enum StageType {
  NEW
  QUALIFIED
  HIRED
  DISQUALIFIED
}

input StageUpdateDataInput {
  name: String
  description: String
  type: StageType
}

input StageUpdateInput {
  name: String
  description: String
  type: StageType
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
  disconnect: Boolean
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
  type: StageType

  """All values that are not equal to given value."""
  type_not: StageType

  """All values that are contained in given list."""
  type_in: [StageType!]

  """All values that are not contained in given list."""
  type_not_in: [StageType!]
}

input StageWhereUniqueInput {
  id: ID
}

type Subscription {
  job(where: JobSubscriptionWhereInput): JobSubscriptionPayload
  application(where: ApplicationSubscriptionWhereInput): ApplicationSubscriptionPayload
  invite(where: InviteSubscriptionWhereInput): InviteSubscriptionPayload
  notification(where: NotificationSubscriptionWhereInput): NotificationSubscriptionPayload
  field(where: FieldSubscriptionWhereInput): FieldSubscriptionPayload
  fieldLink(where: FieldLinkSubscriptionWhereInput): FieldLinkSubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  candidate(where: CandidateSubscriptionWhereInput): CandidateSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
  event(where: EventSubscriptionWhereInput): EventSubscriptionPayload
  stage(where: StageSubscriptionWhereInput): StageSubscriptionPayload
  workspace(where: WorkspaceSubscriptionWhereInput): WorkspaceSubscriptionPayload
  task(where: TaskSubscriptionWhereInput): TaskSubscriptionPayload
  tag(where: TagSubscriptionWhereInput): TagSubscriptionPayload
  workflow(where: WorkflowSubscriptionWhereInput): WorkflowSubscriptionPayload
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  disqualifyReason(where: DisqualifyReasonSubscriptionWhereInput): DisqualifyReasonSubscriptionPayload
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
  title: String
  description: String
  dueAt: DateTime
  workspace: WorkspaceCreateOneInput!
  subscribers: UserCreateManyWithoutSubscriptionTasksInput
  owners: UserCreateManyWithoutTasksInput
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
  title: String
  description: String
  dueAt: DateTime
  workspace: WorkspaceCreateOneInput!
  subscribers: UserCreateManyWithoutSubscriptionTasksInput
  owners: UserCreateManyWithoutTasksInput
}

input TaskCreateWithoutOwnersInput {
  title: String
  description: String
  dueAt: DateTime
  workspace: WorkspaceCreateOneInput!
  subscribers: UserCreateManyWithoutSubscriptionTasksInput
  candidate: CandidateCreateOneWithoutTasksInput
}

input TaskCreateWithoutSubscribersInput {
  title: String
  description: String
  dueAt: DateTime
  workspace: WorkspaceCreateOneInput!
  owners: UserCreateManyWithoutTasksInput
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

input TaskUpdateDataInput {
  title: String
  description: String
  dueAt: DateTime
  workspace: WorkspaceUpdateOneRequiredInput
  subscribers: UserUpdateManyWithoutSubscriptionTasksInput
  owners: UserUpdateManyWithoutTasksInput
  candidate: CandidateUpdateOneWithoutTasksInput
}

input TaskUpdateInput {
  title: String
  description: String
  dueAt: DateTime
  workspace: WorkspaceUpdateOneRequiredInput
  subscribers: UserUpdateManyWithoutSubscriptionTasksInput
  owners: UserUpdateManyWithoutTasksInput
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
  title: String
  description: String
  dueAt: DateTime
  workspace: WorkspaceUpdateOneRequiredInput
  subscribers: UserUpdateManyWithoutSubscriptionTasksInput
  owners: UserUpdateManyWithoutTasksInput
}

input TaskUpdateWithoutOwnersDataInput {
  title: String
  description: String
  dueAt: DateTime
  workspace: WorkspaceUpdateOneRequiredInput
  subscribers: UserUpdateManyWithoutSubscriptionTasksInput
  candidate: CandidateUpdateOneWithoutTasksInput
}

input TaskUpdateWithoutSubscribersDataInput {
  title: String
  description: String
  dueAt: DateTime
  workspace: WorkspaceUpdateOneRequiredInput
  owners: UserUpdateManyWithoutTasksInput
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
  firstName: String!
  lastName: String!
  email: String!
  username: String!
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  avatar(where: FileWhereInput): File
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
  firstName: String!
  lastName: String!
  email: String!
  username: String!
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  workspace: WorkspaceCreateOneWithoutUsersInput!
  events: EventCreateOneWithoutActorUserInput
  notifications: NotificationCreateManyWithoutUserInput
  subscriptionJobs: JobCreateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateCreateManyWithoutSubscribersInput
  subscriptionTasks: TaskCreateManyWithoutSubscribersInput
  tasks: TaskCreateManyWithoutOwnersInput
  avatar: FileCreateOneInput
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
  firstName: String!
  lastName: String!
  email: String!
  username: String!
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  workspace: WorkspaceCreateOneWithoutUsersInput!
  notifications: NotificationCreateManyWithoutUserInput
  subscriptionJobs: JobCreateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateCreateManyWithoutSubscribersInput
  subscriptionTasks: TaskCreateManyWithoutSubscribersInput
  tasks: TaskCreateManyWithoutOwnersInput
  avatar: FileCreateOneInput
}

input UserCreateWithoutNotificationsInput {
  firstName: String!
  lastName: String!
  email: String!
  username: String!
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  workspace: WorkspaceCreateOneWithoutUsersInput!
  events: EventCreateOneWithoutActorUserInput
  subscriptionJobs: JobCreateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateCreateManyWithoutSubscribersInput
  subscriptionTasks: TaskCreateManyWithoutSubscribersInput
  tasks: TaskCreateManyWithoutOwnersInput
  avatar: FileCreateOneInput
}

input UserCreateWithoutSubscriptionCandidatesInput {
  firstName: String!
  lastName: String!
  email: String!
  username: String!
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  workspace: WorkspaceCreateOneWithoutUsersInput!
  events: EventCreateOneWithoutActorUserInput
  notifications: NotificationCreateManyWithoutUserInput
  subscriptionJobs: JobCreateManyWithoutSubscribersInput
  subscriptionTasks: TaskCreateManyWithoutSubscribersInput
  tasks: TaskCreateManyWithoutOwnersInput
  avatar: FileCreateOneInput
}

input UserCreateWithoutSubscriptionJobsInput {
  firstName: String!
  lastName: String!
  email: String!
  username: String!
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  workspace: WorkspaceCreateOneWithoutUsersInput!
  events: EventCreateOneWithoutActorUserInput
  notifications: NotificationCreateManyWithoutUserInput
  subscriptionCandidates: CandidateCreateManyWithoutSubscribersInput
  subscriptionTasks: TaskCreateManyWithoutSubscribersInput
  tasks: TaskCreateManyWithoutOwnersInput
  avatar: FileCreateOneInput
}

input UserCreateWithoutSubscriptionTasksInput {
  firstName: String!
  lastName: String!
  email: String!
  username: String!
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  workspace: WorkspaceCreateOneWithoutUsersInput!
  events: EventCreateOneWithoutActorUserInput
  notifications: NotificationCreateManyWithoutUserInput
  subscriptionJobs: JobCreateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateCreateManyWithoutSubscribersInput
  tasks: TaskCreateManyWithoutOwnersInput
  avatar: FileCreateOneInput
}

input UserCreateWithoutTasksInput {
  firstName: String!
  lastName: String!
  email: String!
  username: String!
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  workspace: WorkspaceCreateOneWithoutUsersInput!
  events: EventCreateOneWithoutActorUserInput
  notifications: NotificationCreateManyWithoutUserInput
  subscriptionJobs: JobCreateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateCreateManyWithoutSubscribersInput
  subscriptionTasks: TaskCreateManyWithoutSubscribersInput
  avatar: FileCreateOneInput
}

input UserCreateWithoutWorkspaceInput {
  firstName: String!
  lastName: String!
  email: String!
  username: String!
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  events: EventCreateOneWithoutActorUserInput
  notifications: NotificationCreateManyWithoutUserInput
  subscriptionJobs: JobCreateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateCreateManyWithoutSubscribersInput
  subscriptionTasks: TaskCreateManyWithoutSubscribersInput
  tasks: TaskCreateManyWithoutOwnersInput
  avatar: FileCreateOneInput
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
  lastLogin_ASC
  lastLogin_DESC
  deletedAt_ASC
  deletedAt_DESC
  position_ASC
  position_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  firstName: String!
  lastName: String!
  email: String!
  username: String!
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
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
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  workspace: WorkspaceUpdateOneRequiredWithoutUsersInput
  events: EventUpdateOneWithoutActorUserInput
  notifications: NotificationUpdateManyWithoutUserInput
  subscriptionJobs: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks: TaskUpdateManyWithoutSubscribersInput
  tasks: TaskUpdateManyWithoutOwnersInput
  avatar: FileUpdateOneInput
}

input UserUpdateInput {
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  workspace: WorkspaceUpdateOneRequiredWithoutUsersInput
  events: EventUpdateOneWithoutActorUserInput
  notifications: NotificationUpdateManyWithoutUserInput
  subscriptionJobs: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks: TaskUpdateManyWithoutSubscribersInput
  tasks: TaskUpdateManyWithoutOwnersInput
  avatar: FileUpdateOneInput
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

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneRequiredWithoutNotificationsInput {
  create: UserCreateWithoutNotificationsInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutNotificationsDataInput
  upsert: UserUpsertWithoutNotificationsInput
}

input UserUpdateOneWithoutEventsInput {
  create: UserCreateWithoutEventsInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutEventsDataInput
  upsert: UserUpsertWithoutEventsInput
}

input UserUpdateWithoutEventsDataInput {
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  workspace: WorkspaceUpdateOneRequiredWithoutUsersInput
  notifications: NotificationUpdateManyWithoutUserInput
  subscriptionJobs: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks: TaskUpdateManyWithoutSubscribersInput
  tasks: TaskUpdateManyWithoutOwnersInput
  avatar: FileUpdateOneInput
}

input UserUpdateWithoutNotificationsDataInput {
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  workspace: WorkspaceUpdateOneRequiredWithoutUsersInput
  events: EventUpdateOneWithoutActorUserInput
  subscriptionJobs: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks: TaskUpdateManyWithoutSubscribersInput
  tasks: TaskUpdateManyWithoutOwnersInput
  avatar: FileUpdateOneInput
}

input UserUpdateWithoutSubscriptionCandidatesDataInput {
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  workspace: WorkspaceUpdateOneRequiredWithoutUsersInput
  events: EventUpdateOneWithoutActorUserInput
  notifications: NotificationUpdateManyWithoutUserInput
  subscriptionJobs: JobUpdateManyWithoutSubscribersInput
  subscriptionTasks: TaskUpdateManyWithoutSubscribersInput
  tasks: TaskUpdateManyWithoutOwnersInput
  avatar: FileUpdateOneInput
}

input UserUpdateWithoutSubscriptionJobsDataInput {
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  workspace: WorkspaceUpdateOneRequiredWithoutUsersInput
  events: EventUpdateOneWithoutActorUserInput
  notifications: NotificationUpdateManyWithoutUserInput
  subscriptionCandidates: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks: TaskUpdateManyWithoutSubscribersInput
  tasks: TaskUpdateManyWithoutOwnersInput
  avatar: FileUpdateOneInput
}

input UserUpdateWithoutSubscriptionTasksDataInput {
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  workspace: WorkspaceUpdateOneRequiredWithoutUsersInput
  events: EventUpdateOneWithoutActorUserInput
  notifications: NotificationUpdateManyWithoutUserInput
  subscriptionJobs: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateUpdateManyWithoutSubscribersInput
  tasks: TaskUpdateManyWithoutOwnersInput
  avatar: FileUpdateOneInput
}

input UserUpdateWithoutTasksDataInput {
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  workspace: WorkspaceUpdateOneRequiredWithoutUsersInput
  events: EventUpdateOneWithoutActorUserInput
  notifications: NotificationUpdateManyWithoutUserInput
  subscriptionJobs: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks: TaskUpdateManyWithoutSubscribersInput
  avatar: FileUpdateOneInput
}

input UserUpdateWithoutWorkspaceDataInput {
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  events: EventUpdateOneWithoutActorUserInput
  notifications: NotificationUpdateManyWithoutUserInput
  subscriptionJobs: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks: TaskUpdateManyWithoutSubscribersInput
  tasks: TaskUpdateManyWithoutOwnersInput
  avatar: FileUpdateOneInput
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
  position: String

  """All values that are not equal to given value."""
  position_not: String

  """All values that are contained in given list."""
  position_in: [String!]

  """All values that are not contained in given list."""
  position_not_in: [String!]

  """All values less than the given value."""
  position_lt: String

  """All values less than or equal the given value."""
  position_lte: String

  """All values greater than the given value."""
  position_gt: String

  """All values greater than or equal the given value."""
  position_gte: String

  """All values containing the given string."""
  position_contains: String

  """All values not containing the given string."""
  position_not_contains: String

  """All values starting with the given string."""
  position_starts_with: String

  """All values not starting with the given string."""
  position_not_starts_with: String

  """All values ending with the given string."""
  position_ends_with: String

  """All values not ending with the given string."""
  position_not_ends_with: String
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
  avatar: FileWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Workflow implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  description: String
  stages(where: StageWhereInput, orderBy: StageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stage!]
  disqualifyReasons(where: DisqualifyReasonWhereInput, orderBy: DisqualifyReasonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [DisqualifyReason!]
}

"""A connection to a list of items."""
type WorkflowConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [WorkflowEdge]!
  aggregate: AggregateWorkflow!
}

input WorkflowCreateInput {
  name: String!
  description: String
  stages: StageCreateManyInput
  disqualifyReasons: DisqualifyReasonCreateManyInput
}

input WorkflowCreateManyInput {
  create: [WorkflowCreateInput!]
  connect: [WorkflowWhereUniqueInput!]
}

input WorkflowCreateOneInput {
  create: WorkflowCreateInput
  connect: WorkflowWhereUniqueInput
}

"""An edge in a connection."""
type WorkflowEdge {
  """The item at the end of the edge."""
  node: Workflow!

  """A cursor for use in pagination."""
  cursor: String!
}

enum WorkflowOrderByInput {
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
}

type WorkflowPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  description: String
}

type WorkflowSubscriptionPayload {
  mutation: MutationType!
  node: Workflow
  updatedFields: [String!]
  previousValues: WorkflowPreviousValues
}

input WorkflowSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [WorkflowSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [WorkflowSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [WorkflowSubscriptionWhereInput!]

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
  node: WorkflowWhereInput
}

input WorkflowUpdateDataInput {
  name: String
  description: String
  stages: StageUpdateManyInput
  disqualifyReasons: DisqualifyReasonUpdateManyInput
}

input WorkflowUpdateInput {
  name: String
  description: String
  stages: StageUpdateManyInput
  disqualifyReasons: DisqualifyReasonUpdateManyInput
}

input WorkflowUpdateManyInput {
  create: [WorkflowCreateInput!]
  connect: [WorkflowWhereUniqueInput!]
  disconnect: [WorkflowWhereUniqueInput!]
  delete: [WorkflowWhereUniqueInput!]
  update: [WorkflowUpdateWithWhereUniqueNestedInput!]
  upsert: [WorkflowUpsertWithWhereUniqueNestedInput!]
}

input WorkflowUpdateOneInput {
  create: WorkflowCreateInput
  connect: WorkflowWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: WorkflowUpdateDataInput
  upsert: WorkflowUpsertNestedInput
}

input WorkflowUpdateOneRequiredInput {
  create: WorkflowCreateInput
  connect: WorkflowWhereUniqueInput
  update: WorkflowUpdateDataInput
  upsert: WorkflowUpsertNestedInput
}

input WorkflowUpdateWithWhereUniqueNestedInput {
  where: WorkflowWhereUniqueInput!
  data: WorkflowUpdateDataInput!
}

input WorkflowUpsertNestedInput {
  update: WorkflowUpdateDataInput!
  create: WorkflowCreateInput!
}

input WorkflowUpsertWithWhereUniqueNestedInput {
  where: WorkflowWhereUniqueInput!
  update: WorkflowUpdateDataInput!
  create: WorkflowCreateInput!
}

input WorkflowWhereInput {
  """Logical AND on all given filters."""
  AND: [WorkflowWhereInput!]

  """Logical OR on all given filters."""
  OR: [WorkflowWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [WorkflowWhereInput!]
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
  stages_every: StageWhereInput
  stages_some: StageWhereInput
  stages_none: StageWhereInput
  disqualifyReasons_every: DisqualifyReasonWhereInput
  disqualifyReasons_some: DisqualifyReasonWhereInput
  disqualifyReasons_none: DisqualifyReasonWhereInput
}

input WorkflowWhereUniqueInput {
  id: ID
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
  workflows(where: WorkflowWhereInput, orderBy: WorkflowOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Workflow!]
  workflowDefault(where: WorkflowWhereInput): Workflow
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
  workflows: WorkflowCreateManyInput
  workflowDefault: WorkflowCreateOneInput
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
  workflows: WorkflowCreateManyInput
  workflowDefault: WorkflowCreateOneInput
  invites: InviteCreateManyWithoutWorkspaceInput
  tags: TagCreateManyInput
}

input WorkspaceCreateWithoutCandidatesInput {
  name: String!
  events: EventCreateManyWithoutTargetWorkspaceInput
  users: UserCreateManyWithoutWorkspaceInput
  jobs: JobCreateManyWithoutWorkspaceInput
  applications: ApplicationCreateManyWithoutWorkspaceInput
  workflows: WorkflowCreateManyInput
  workflowDefault: WorkflowCreateOneInput
  invites: InviteCreateManyWithoutWorkspaceInput
  tags: TagCreateManyInput
}

input WorkspaceCreateWithoutEventsInput {
  name: String!
  users: UserCreateManyWithoutWorkspaceInput
  jobs: JobCreateManyWithoutWorkspaceInput
  applications: ApplicationCreateManyWithoutWorkspaceInput
  candidates: CandidateCreateManyWithoutWorkspaceInput
  workflows: WorkflowCreateManyInput
  workflowDefault: WorkflowCreateOneInput
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
  workflows: WorkflowCreateManyInput
  workflowDefault: WorkflowCreateOneInput
  tags: TagCreateManyInput
}

input WorkspaceCreateWithoutJobsInput {
  name: String!
  events: EventCreateManyWithoutTargetWorkspaceInput
  users: UserCreateManyWithoutWorkspaceInput
  applications: ApplicationCreateManyWithoutWorkspaceInput
  candidates: CandidateCreateManyWithoutWorkspaceInput
  workflows: WorkflowCreateManyInput
  workflowDefault: WorkflowCreateOneInput
  invites: InviteCreateManyWithoutWorkspaceInput
  tags: TagCreateManyInput
}

input WorkspaceCreateWithoutUsersInput {
  name: String!
  events: EventCreateManyWithoutTargetWorkspaceInput
  jobs: JobCreateManyWithoutWorkspaceInput
  applications: ApplicationCreateManyWithoutWorkspaceInput
  candidates: CandidateCreateManyWithoutWorkspaceInput
  workflows: WorkflowCreateManyInput
  workflowDefault: WorkflowCreateOneInput
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
  workflows: WorkflowUpdateManyInput
  workflowDefault: WorkflowUpdateOneInput
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
  workflows: WorkflowUpdateManyInput
  workflowDefault: WorkflowUpdateOneInput
  invites: InviteUpdateManyWithoutWorkspaceInput
  tags: TagUpdateManyInput
}

input WorkspaceUpdateOneRequiredInput {
  create: WorkspaceCreateInput
  connect: WorkspaceWhereUniqueInput
  update: WorkspaceUpdateDataInput
  upsert: WorkspaceUpsertNestedInput
}

input WorkspaceUpdateOneRequiredWithoutApplicationsInput {
  create: WorkspaceCreateWithoutApplicationsInput
  connect: WorkspaceWhereUniqueInput
  update: WorkspaceUpdateWithoutApplicationsDataInput
  upsert: WorkspaceUpsertWithoutApplicationsInput
}

input WorkspaceUpdateOneRequiredWithoutCandidatesInput {
  create: WorkspaceCreateWithoutCandidatesInput
  connect: WorkspaceWhereUniqueInput
  update: WorkspaceUpdateWithoutCandidatesDataInput
  upsert: WorkspaceUpsertWithoutCandidatesInput
}

input WorkspaceUpdateOneRequiredWithoutInvitesInput {
  create: WorkspaceCreateWithoutInvitesInput
  connect: WorkspaceWhereUniqueInput
  update: WorkspaceUpdateWithoutInvitesDataInput
  upsert: WorkspaceUpsertWithoutInvitesInput
}

input WorkspaceUpdateOneRequiredWithoutJobsInput {
  create: WorkspaceCreateWithoutJobsInput
  connect: WorkspaceWhereUniqueInput
  update: WorkspaceUpdateWithoutJobsDataInput
  upsert: WorkspaceUpsertWithoutJobsInput
}

input WorkspaceUpdateOneRequiredWithoutUsersInput {
  create: WorkspaceCreateWithoutUsersInput
  connect: WorkspaceWhereUniqueInput
  update: WorkspaceUpdateWithoutUsersDataInput
  upsert: WorkspaceUpsertWithoutUsersInput
}

input WorkspaceUpdateOneWithoutEventsInput {
  create: WorkspaceCreateWithoutEventsInput
  connect: WorkspaceWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: WorkspaceUpdateWithoutEventsDataInput
  upsert: WorkspaceUpsertWithoutEventsInput
}

input WorkspaceUpdateWithoutApplicationsDataInput {
  name: String
  events: EventUpdateManyWithoutTargetWorkspaceInput
  users: UserUpdateManyWithoutWorkspaceInput
  jobs: JobUpdateManyWithoutWorkspaceInput
  candidates: CandidateUpdateManyWithoutWorkspaceInput
  workflows: WorkflowUpdateManyInput
  workflowDefault: WorkflowUpdateOneInput
  invites: InviteUpdateManyWithoutWorkspaceInput
  tags: TagUpdateManyInput
}

input WorkspaceUpdateWithoutCandidatesDataInput {
  name: String
  events: EventUpdateManyWithoutTargetWorkspaceInput
  users: UserUpdateManyWithoutWorkspaceInput
  jobs: JobUpdateManyWithoutWorkspaceInput
  applications: ApplicationUpdateManyWithoutWorkspaceInput
  workflows: WorkflowUpdateManyInput
  workflowDefault: WorkflowUpdateOneInput
  invites: InviteUpdateManyWithoutWorkspaceInput
  tags: TagUpdateManyInput
}

input WorkspaceUpdateWithoutEventsDataInput {
  name: String
  users: UserUpdateManyWithoutWorkspaceInput
  jobs: JobUpdateManyWithoutWorkspaceInput
  applications: ApplicationUpdateManyWithoutWorkspaceInput
  candidates: CandidateUpdateManyWithoutWorkspaceInput
  workflows: WorkflowUpdateManyInput
  workflowDefault: WorkflowUpdateOneInput
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
  workflows: WorkflowUpdateManyInput
  workflowDefault: WorkflowUpdateOneInput
  tags: TagUpdateManyInput
}

input WorkspaceUpdateWithoutJobsDataInput {
  name: String
  events: EventUpdateManyWithoutTargetWorkspaceInput
  users: UserUpdateManyWithoutWorkspaceInput
  applications: ApplicationUpdateManyWithoutWorkspaceInput
  candidates: CandidateUpdateManyWithoutWorkspaceInput
  workflows: WorkflowUpdateManyInput
  workflowDefault: WorkflowUpdateOneInput
  invites: InviteUpdateManyWithoutWorkspaceInput
  tags: TagUpdateManyInput
}

input WorkspaceUpdateWithoutUsersDataInput {
  name: String
  events: EventUpdateManyWithoutTargetWorkspaceInput
  jobs: JobUpdateManyWithoutWorkspaceInput
  applications: ApplicationUpdateManyWithoutWorkspaceInput
  candidates: CandidateUpdateManyWithoutWorkspaceInput
  workflows: WorkflowUpdateManyInput
  workflowDefault: WorkflowUpdateOneInput
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
  workflows_every: WorkflowWhereInput
  workflows_some: WorkflowWhereInput
  workflows_none: WorkflowWhereInput
  workflowDefault: WorkflowWhereInput
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

export type JobOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'status_ASC' |
  'status_DESC' |
  'department_ASC' |
  'department_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'requirements_ASC' |
  'requirements_DESC'

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

export type JobType =   'DRAFT' |
  'PUBLISHED' |
  'ARCHIVED'

export type CommentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'content_ASC' |
  'content_DESC'

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

export type ApplicationOrderByInput =   'createdAt_ASC' |
  'createdAt_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type EventType =   'DEFAULT' |
  'MESSAGE' |
  'COMMENT_CREATE' |
  'COMMENT_EDIT' |
  'COMMENT_DELETE'

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

export type EventTargetType =   'CANDIDATE' |
  'JOB' |
  'TASK' |
  'WORKSPACE'

export type FieldLinkOrderByInput =   'id_ASC' |
  'id_DESC' |
  'value_ASC' |
  'value_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

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

export type TagOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'label_ASC' |
  'label_DESC'

export type DisqualifyReasonOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC'

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

export type WorkspaceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC'

export type StageType =   'NEW' |
  'QUALIFIED' |
  'HIRED' |
  'DISQUALIFIED'

export type EventActorType =   'SYSTEM' |
  'USER' |
  'CANDIDATE'

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

export type FieldType =   'INT' |
  'FLOAT' |
  'STRING' |
  'TEXT' |
  'BOOLEAN' |
  'DATE_TIME'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type NotificationType =   'NEW' |
  'UNREAD' |
  'READ'

export interface EventUpdateWithoutTargetWorkspaceDataInput {
  type?: EventType
  actorType?: EventActorType
  targetType?: EventTargetType
  workspace?: WorkspaceUpdateOneRequiredInput
  actorUser?: UserUpdateOneWithoutEventsInput
  actorCandidate?: CandidateUpdateOneInput
  targetCandidate?: CandidateUpdateOneWithoutEventsInput
  targetJob?: JobUpdateOneWithoutEventsInput
  targetTask?: TaskUpdateOneInput
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

export interface TaskCreateManyWithoutCandidateInput {
  create?: TaskCreateWithoutCandidateInput[] | TaskCreateWithoutCandidateInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
}

export interface WorkflowUpsertWithWhereUniqueNestedInput {
  where: WorkflowWhereUniqueInput
  update: WorkflowUpdateDataInput
  create: WorkflowCreateInput
}

export interface TaskCreateWithoutCandidateInput {
  title?: String
  description?: String
  dueAt?: DateTime
  workspace: WorkspaceCreateOneInput
  subscribers?: UserCreateManyWithoutSubscriptionTasksInput
  owners?: UserCreateManyWithoutTasksInput
}

export interface CandidateUpdatecoverLettersStringInput {
  set?: String[] | String
}

export interface UserCreateManyWithoutSubscriptionTasksInput {
  create?: UserCreateWithoutSubscriptionTasksInput[] | UserCreateWithoutSubscriptionTasksInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
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

export interface WorkflowSubscriptionWhereInput {
  AND?: WorkflowSubscriptionWhereInput[] | WorkflowSubscriptionWhereInput
  OR?: WorkflowSubscriptionWhereInput[] | WorkflowSubscriptionWhereInput
  NOT?: WorkflowSubscriptionWhereInput[] | WorkflowSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: WorkflowWhereInput
}

export interface TaskCreateManyWithoutOwnersInput {
  create?: TaskCreateWithoutOwnersInput[] | TaskCreateWithoutOwnersInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
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

export interface TaskCreateWithoutOwnersInput {
  title?: String
  description?: String
  dueAt?: DateTime
  workspace: WorkspaceCreateOneInput
  subscribers?: UserCreateManyWithoutSubscriptionTasksInput
  candidate?: CandidateCreateOneWithoutTasksInput
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

export interface CandidateCreateOneWithoutTasksInput {
  create?: CandidateCreateWithoutTasksInput
  connect?: CandidateWhereUniqueInput
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
  fields?: FieldLinkCreateManyWithoutCandidateInput
  applications?: ApplicationCreateManyWithoutCandidateInput
  comments?: CommentCreateManyInput
}

export interface DisqualifyReasonWhereInput {
  AND?: DisqualifyReasonWhereInput[] | DisqualifyReasonWhereInput
  OR?: DisqualifyReasonWhereInput[] | DisqualifyReasonWhereInput
  NOT?: DisqualifyReasonWhereInput[] | DisqualifyReasonWhereInput
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

export interface ApplicationCreateManyWithoutCandidateInput {
  create?: ApplicationCreateWithoutCandidateInput[] | ApplicationCreateWithoutCandidateInput
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
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
  workspace?: WorkspaceWhereInput
  disqualifyReason?: DisqualifyReasonWhereInput
  job?: JobWhereInput
  candidate?: CandidateWhereInput
  stage?: StageWhereInput
}

export interface ApplicationCreateWithoutCandidateInput {
  workspace: WorkspaceCreateOneWithoutApplicationsInput
  disqualifyReason?: DisqualifyReasonCreateOneInput
  job: JobCreateOneWithoutApplicationsInput
  stage?: StageCreateOneInput
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
  workspace?: WorkspaceWhereInput
  subscribers_every?: UserWhereInput
  subscribers_some?: UserWhereInput
  subscribers_none?: UserWhereInput
  owners_every?: UserWhereInput
  owners_some?: UserWhereInput
  owners_none?: UserWhereInput
  candidate?: CandidateWhereInput
}

export interface StageCreateOneInput {
  create?: StageCreateInput
  connect?: StageWhereUniqueInput
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
  candidate?: CandidateWhereInput
}

export interface UserCreateManyWithoutTasksInput {
  create?: UserCreateWithoutTasksInput[] | UserCreateWithoutTasksInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
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

export interface TaskCreateManyWithoutSubscribersInput {
  create?: TaskCreateWithoutSubscribersInput[] | TaskCreateWithoutSubscribersInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
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

export interface TaskCreateWithoutSubscribersInput {
  title?: String
  description?: String
  dueAt?: DateTime
  workspace: WorkspaceCreateOneInput
  owners?: UserCreateManyWithoutTasksInput
  candidate?: CandidateCreateOneWithoutTasksInput
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

export interface CommentCreateOneInput {
  create?: CommentCreateInput
  connect?: CommentWhereUniqueInput
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

export interface LocationCreateManyInput {
  create?: LocationCreateInput[] | LocationCreateInput
  connect?: LocationWhereUniqueInput[] | LocationWhereUniqueInput
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
  position?: String
  position_not?: String
  position_in?: String[] | String
  position_not_in?: String[] | String
  position_lt?: String
  position_lte?: String
  position_gt?: String
  position_gte?: String
  position_contains?: String
  position_not_contains?: String
  position_starts_with?: String
  position_not_starts_with?: String
  position_ends_with?: String
  position_not_ends_with?: String
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
  avatar?: FileWhereInput
}

export interface LocationCreateInput {
  country: String
  region: String
  city: String
  zip: String
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

export interface TaskCreateOneInput {
  create?: TaskCreateInput
  connect?: TaskWhereUniqueInput
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

export interface TaskCreateInput {
  title?: String
  description?: String
  dueAt?: DateTime
  workspace: WorkspaceCreateOneInput
  subscribers?: UserCreateManyWithoutSubscriptionTasksInput
  owners?: UserCreateManyWithoutTasksInput
  candidate?: CandidateCreateOneWithoutTasksInput
}

export interface DisqualifyReasonUpdateInput {
  name?: String
  description?: String
}

export interface WorkspaceCreateOneWithoutEventsInput {
  create?: WorkspaceCreateWithoutEventsInput
  connect?: WorkspaceWhereUniqueInput
}

export interface ApplicationWhereUniqueInput {
  id?: ID_Input
}

export interface WorkspaceCreateWithoutEventsInput {
  name: String
  users?: UserCreateManyWithoutWorkspaceInput
  jobs?: JobCreateManyWithoutWorkspaceInput
  applications?: ApplicationCreateManyWithoutWorkspaceInput
  candidates?: CandidateCreateManyWithoutWorkspaceInput
  workflows?: WorkflowCreateManyInput
  workflowDefault?: WorkflowCreateOneInput
  invites?: InviteCreateManyWithoutWorkspaceInput
  tags?: TagCreateManyInput
}

export interface NotificationWhereUniqueInput {
  id?: ID_Input
}

export interface WorkflowCreateManyInput {
  create?: WorkflowCreateInput[] | WorkflowCreateInput
  connect?: WorkflowWhereUniqueInput[] | WorkflowWhereUniqueInput
}

export interface FieldLinkWhereUniqueInput {
  id?: ID_Input
}

export interface InviteCreateManyWithoutWorkspaceInput {
  create?: InviteCreateWithoutWorkspaceInput[] | InviteCreateWithoutWorkspaceInput
  connect?: InviteWhereUniqueInput[] | InviteWhereUniqueInput
}

export interface CandidateWhereUniqueInput {
  id?: ID_Input
}

export interface InviteCreateWithoutWorkspaceInput {
  email: String
  expireAt: DateTime
  invitedBy: UserCreateOneInput
}

export interface FileWhereUniqueInput {
  id?: ID_Input
  url?: String
}

export interface CandidateCreateOneWithoutApplicationsInput {
  create?: CandidateCreateWithoutApplicationsInput
  connect?: CandidateWhereUniqueInput
}

export interface StageWhereUniqueInput {
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
  fields?: FieldLinkCreateManyWithoutCandidateInput
  tasks?: TaskCreateManyWithoutCandidateInput
  comments?: CommentCreateManyInput
}

export interface TaskWhereUniqueInput {
  id?: ID_Input
}

export interface ApplicationCreateInput {
  workspace: WorkspaceCreateOneWithoutApplicationsInput
  disqualifyReason?: DisqualifyReasonCreateOneInput
  job: JobCreateOneWithoutApplicationsInput
  candidate: CandidateCreateOneWithoutApplicationsInput
  stage?: StageCreateOneInput
}

export interface WorkflowWhereUniqueInput {
  id?: ID_Input
}

export interface InviteCreateInput {
  email: String
  expireAt: DateTime
  workspace: WorkspaceCreateOneWithoutInvitesInput
  invitedBy: UserCreateOneInput
}

export interface DisqualifyReasonWhereUniqueInput {
  id?: ID_Input
}

export interface WorkspaceCreateOneWithoutInvitesInput {
  create?: WorkspaceCreateWithoutInvitesInput
  connect?: WorkspaceWhereUniqueInput
}

export interface WorkflowUpdateInput {
  name?: String
  description?: String
  stages?: StageUpdateManyInput
  disqualifyReasons?: DisqualifyReasonUpdateManyInput
}

export interface WorkspaceCreateWithoutInvitesInput {
  name: String
  events?: EventCreateManyWithoutTargetWorkspaceInput
  users?: UserCreateManyWithoutWorkspaceInput
  jobs?: JobCreateManyWithoutWorkspaceInput
  applications?: ApplicationCreateManyWithoutWorkspaceInput
  candidates?: CandidateCreateManyWithoutWorkspaceInput
  workflows?: WorkflowCreateManyInput
  workflowDefault?: WorkflowCreateOneInput
  tags?: TagCreateManyInput
}

export interface TaskUpdateInput {
  title?: String
  description?: String
  dueAt?: DateTime
  workspace?: WorkspaceUpdateOneRequiredInput
  subscribers?: UserUpdateManyWithoutSubscriptionTasksInput
  owners?: UserUpdateManyWithoutTasksInput
  candidate?: CandidateUpdateOneWithoutTasksInput
}

export interface NotificationCreateInput {
  type: NotificationType
  user: UserCreateOneWithoutNotificationsInput
  event: EventCreateOneInput
}

export interface StageUpdateInput {
  name?: String
  description?: String
  type?: StageType
}

export interface UserCreateOneWithoutNotificationsInput {
  create?: UserCreateWithoutNotificationsInput
  connect?: UserWhereUniqueInput
}

export interface FileUpdateInput {
  size?: Int
  type?: String
  name?: String
  url?: String
}

export interface UserCreateWithoutNotificationsInput {
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  position?: String
  workspace: WorkspaceCreateOneWithoutUsersInput
  events?: EventCreateOneWithoutActorUserInput
  subscriptionJobs?: JobCreateManyWithoutSubscribersInput
  subscriptionCandidates?: CandidateCreateManyWithoutSubscribersInput
  subscriptionTasks?: TaskCreateManyWithoutSubscribersInput
  tasks?: TaskCreateManyWithoutOwnersInput
  avatar?: FileCreateOneInput
}

export interface CandidateUpdateInput {
  firstName?: String
  lastName?: String
  emails?: CandidateUpdateemailsInput
  phones?: CandidateUpdatephonesInput
  links?: CandidateUpdatelinksInput
  resumesString?: CandidateUpdateresumesStringInput
  coverLettersString?: CandidateUpdatecoverLettersStringInput
  source?: CandidateUpdatesourceInput
  workspace?: WorkspaceUpdateOneRequiredWithoutCandidatesInput
  events?: EventUpdateManyWithoutTargetCandidateInput
  subscribers?: UserUpdateManyWithoutSubscriptionCandidatesInput
  avatar?: FileUpdateOneInput
  resumesFile?: FileUpdateManyInput
  coverLettersFile?: FileUpdateManyInput
  tags?: TagUpdateManyInput
  fields?: FieldLinkUpdateManyWithoutCandidateInput
  tasks?: TaskUpdateManyWithoutCandidateInput
  applications?: ApplicationUpdateManyWithoutCandidateInput
  comments?: CommentUpdateManyInput
}

export interface FieldCreateInput {
  type: FieldType
  label: String
}

export interface CandidateUpsertWithoutFieldsInput {
  update: CandidateUpdateWithoutFieldsDataInput
  create: CandidateCreateWithoutFieldsInput
}

export interface FieldLinkCreateInput {
  value?: String
  candidate: CandidateCreateOneWithoutFieldsInput
}

export interface CandidateUpdateOneRequiredWithoutFieldsInput {
  create?: CandidateCreateWithoutFieldsInput
  connect?: CandidateWhereUniqueInput
  update?: CandidateUpdateWithoutFieldsDataInput
  upsert?: CandidateUpsertWithoutFieldsInput
}

export interface CandidateCreateOneWithoutFieldsInput {
  create?: CandidateCreateWithoutFieldsInput
  connect?: CandidateWhereUniqueInput
}

export interface FieldUpdateInput {
  type?: FieldType
  label?: String
}

export interface CandidateCreateWithoutFieldsInput {
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
  tasks?: TaskCreateManyWithoutCandidateInput
  applications?: ApplicationCreateManyWithoutCandidateInput
  comments?: CommentCreateManyInput
}

export interface UserUpdateWithoutNotificationsDataInput {
  firstName?: String
  lastName?: String
  email?: String
  username?: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  position?: String
  workspace?: WorkspaceUpdateOneRequiredWithoutUsersInput
  events?: EventUpdateOneWithoutActorUserInput
  subscriptionJobs?: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates?: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks?: TaskUpdateManyWithoutSubscribersInput
  tasks?: TaskUpdateManyWithoutOwnersInput
  avatar?: FileUpdateOneInput
}

export interface JobUpdateInput {
  status?: JobType
  department?: String
  name?: String
  description?: String
  requirements?: String
  workspace?: WorkspaceUpdateOneRequiredWithoutJobsInput
  subscribers?: UserUpdateManyWithoutSubscriptionJobsInput
  events?: EventUpdateManyWithoutTargetJobInput
  applications?: ApplicationUpdateManyWithoutJobInput
  workflow?: WorkflowUpdateOneRequiredInput
  comments?: CommentUpdateManyInput
  locations?: LocationUpdateManyInput
}

export interface NotificationUpdateInput {
  type?: NotificationType
  user?: UserUpdateOneRequiredWithoutNotificationsInput
  event?: EventUpdateOneRequiredInput
}

export interface WorkspaceUpdateOneRequiredWithoutJobsInput {
  create?: WorkspaceCreateWithoutJobsInput
  connect?: WorkspaceWhereUniqueInput
  update?: WorkspaceUpdateWithoutJobsDataInput
  upsert?: WorkspaceUpsertWithoutJobsInput
}

export interface WorkspaceUpdateWithoutInvitesDataInput {
  name?: String
  events?: EventUpdateManyWithoutTargetWorkspaceInput
  users?: UserUpdateManyWithoutWorkspaceInput
  jobs?: JobUpdateManyWithoutWorkspaceInput
  applications?: ApplicationUpdateManyWithoutWorkspaceInput
  candidates?: CandidateUpdateManyWithoutWorkspaceInput
  workflows?: WorkflowUpdateManyInput
  workflowDefault?: WorkflowUpdateOneInput
  tags?: TagUpdateManyInput
}

export interface WorkspaceUpdateWithoutJobsDataInput {
  name?: String
  events?: EventUpdateManyWithoutTargetWorkspaceInput
  users?: UserUpdateManyWithoutWorkspaceInput
  applications?: ApplicationUpdateManyWithoutWorkspaceInput
  candidates?: CandidateUpdateManyWithoutWorkspaceInput
  workflows?: WorkflowUpdateManyInput
  workflowDefault?: WorkflowUpdateOneInput
  invites?: InviteUpdateManyWithoutWorkspaceInput
  tags?: TagUpdateManyInput
}

export interface InviteUpdateInput {
  email?: String
  expireAt?: DateTime
  workspace?: WorkspaceUpdateOneRequiredWithoutInvitesInput
  invitedBy?: UserUpdateOneRequiredInput
}

export interface EventUpdateManyWithoutTargetWorkspaceInput {
  create?: EventCreateWithoutTargetWorkspaceInput[] | EventCreateWithoutTargetWorkspaceInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  disconnect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  delete?: EventWhereUniqueInput[] | EventWhereUniqueInput
  update?: EventUpdateWithWhereUniqueWithoutTargetWorkspaceInput[] | EventUpdateWithWhereUniqueWithoutTargetWorkspaceInput
  upsert?: EventUpsertWithWhereUniqueWithoutTargetWorkspaceInput[] | EventUpsertWithWhereUniqueWithoutTargetWorkspaceInput
}

export interface WorkspaceUpsertWithoutJobsInput {
  update: WorkspaceUpdateWithoutJobsDataInput
  create: WorkspaceCreateWithoutJobsInput
}

export interface EventUpdateWithWhereUniqueWithoutTargetWorkspaceInput {
  where: EventWhereUniqueInput
  data: EventUpdateWithoutTargetWorkspaceDataInput
}

export interface WorkspaceUpsertNestedInput {
  update: WorkspaceUpdateDataInput
  create: WorkspaceCreateInput
}

export interface WorkflowUpdateOneInput {
  create?: WorkflowCreateInput
  connect?: WorkflowWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: WorkflowUpdateDataInput
  upsert?: WorkflowUpsertNestedInput
}

export interface EventUpsertWithoutActorUserInput {
  update: EventUpdateWithoutActorUserDataInput
  create: EventCreateWithoutActorUserInput
}

export interface WorkspaceUpdateOneRequiredInput {
  create?: WorkspaceCreateInput
  connect?: WorkspaceWhereUniqueInput
  update?: WorkspaceUpdateDataInput
  upsert?: WorkspaceUpsertNestedInput
}

export interface WorkspaceUpsertWithoutCandidatesInput {
  update: WorkspaceUpdateWithoutCandidatesDataInput
  create: WorkspaceCreateWithoutCandidatesInput
}

export interface WorkspaceUpdateDataInput {
  name?: String
  events?: EventUpdateManyWithoutTargetWorkspaceInput
  users?: UserUpdateManyWithoutWorkspaceInput
  jobs?: JobUpdateManyWithoutWorkspaceInput
  applications?: ApplicationUpdateManyWithoutWorkspaceInput
  candidates?: CandidateUpdateManyWithoutWorkspaceInput
  workflows?: WorkflowUpdateManyInput
  workflowDefault?: WorkflowUpdateOneInput
  invites?: InviteUpdateManyWithoutWorkspaceInput
  tags?: TagUpdateManyInput
}

export interface UserUpsertWithWhereUniqueWithoutSubscriptionJobsInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutSubscriptionJobsDataInput
  create: UserCreateWithoutSubscriptionJobsInput
}

export interface UserUpdateManyWithoutWorkspaceInput {
  create?: UserCreateWithoutWorkspaceInput[] | UserCreateWithoutWorkspaceInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutWorkspaceInput[] | UserUpdateWithWhereUniqueWithoutWorkspaceInput
  upsert?: UserUpsertWithWhereUniqueWithoutWorkspaceInput[] | UserUpsertWithWhereUniqueWithoutWorkspaceInput
}

export interface ApplicationUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: ApplicationWhereUniqueInput
  update: ApplicationUpdateWithoutWorkspaceDataInput
  create: ApplicationCreateWithoutWorkspaceInput
}

export interface UserUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutWorkspaceDataInput
}

export interface EventUpsertWithWhereUniqueWithoutTargetJobInput {
  where: EventWhereUniqueInput
  update: EventUpdateWithoutTargetJobDataInput
  create: EventCreateWithoutTargetJobInput
}

export interface UserUpdateWithoutWorkspaceDataInput {
  firstName?: String
  lastName?: String
  email?: String
  username?: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  position?: String
  events?: EventUpdateOneWithoutActorUserInput
  notifications?: NotificationUpdateManyWithoutUserInput
  subscriptionJobs?: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates?: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks?: TaskUpdateManyWithoutSubscribersInput
  tasks?: TaskUpdateManyWithoutOwnersInput
  avatar?: FileUpdateOneInput
}

export interface NotificationUpsertWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput
  update: NotificationUpdateWithoutUserDataInput
  create: NotificationCreateWithoutUserInput
}

export interface EventUpdateOneWithoutActorUserInput {
  create?: EventCreateWithoutActorUserInput
  connect?: EventWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: EventUpdateWithoutActorUserDataInput
  upsert?: EventUpsertWithoutActorUserInput
}

export interface CandidateUpsertWithoutEventsInput {
  update: CandidateUpdateWithoutEventsDataInput
  create: CandidateCreateWithoutEventsInput
}

export interface EventUpdateWithoutActorUserDataInput {
  type?: EventType
  actorType?: EventActorType
  targetType?: EventTargetType
  workspace?: WorkspaceUpdateOneRequiredInput
  actorCandidate?: CandidateUpdateOneInput
  targetCandidate?: CandidateUpdateOneWithoutEventsInput
  targetJob?: JobUpdateOneWithoutEventsInput
  targetTask?: TaskUpdateOneInput
  targetWorkspace?: WorkspaceUpdateOneWithoutEventsInput
}

export interface JobUpsertWithWhereUniqueWithoutSubscribersInput {
  where: JobWhereUniqueInput
  update: JobUpdateWithoutSubscribersDataInput
  create: JobCreateWithoutSubscribersInput
}

export interface CandidateUpdateOneInput {
  create?: CandidateCreateInput
  connect?: CandidateWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CandidateUpdateDataInput
  upsert?: CandidateUpsertNestedInput
}

export interface CandidateUpsertWithoutApplicationsInput {
  update: CandidateUpdateWithoutApplicationsDataInput
  create: CandidateCreateWithoutApplicationsInput
}

export interface CandidateUpdateDataInput {
  firstName?: String
  lastName?: String
  emails?: CandidateUpdateemailsInput
  phones?: CandidateUpdatephonesInput
  links?: CandidateUpdatelinksInput
  resumesString?: CandidateUpdateresumesStringInput
  coverLettersString?: CandidateUpdatecoverLettersStringInput
  source?: CandidateUpdatesourceInput
  workspace?: WorkspaceUpdateOneRequiredWithoutCandidatesInput
  events?: EventUpdateManyWithoutTargetCandidateInput
  subscribers?: UserUpdateManyWithoutSubscriptionCandidatesInput
  avatar?: FileUpdateOneInput
  resumesFile?: FileUpdateManyInput
  coverLettersFile?: FileUpdateManyInput
  tags?: TagUpdateManyInput
  fields?: FieldLinkUpdateManyWithoutCandidateInput
  tasks?: TaskUpdateManyWithoutCandidateInput
  applications?: ApplicationUpdateManyWithoutCandidateInput
  comments?: CommentUpdateManyInput
}

export interface CandidateUpdateOneRequiredWithoutApplicationsInput {
  create?: CandidateCreateWithoutApplicationsInput
  connect?: CandidateWhereUniqueInput
  update?: CandidateUpdateWithoutApplicationsDataInput
  upsert?: CandidateUpsertWithoutApplicationsInput
}

export interface CandidateUpdateemailsInput {
  set?: String[] | String
}

export interface CandidateUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: CandidateWhereUniqueInput
  update: CandidateUpdateWithoutWorkspaceDataInput
  create: CandidateCreateWithoutWorkspaceInput
}

export interface CandidateUpdatephonesInput {
  set?: String[] | String
}

export interface WorkspaceUpsertWithoutEventsInput {
  update: WorkspaceUpdateWithoutEventsDataInput
  create: WorkspaceCreateWithoutEventsInput
}

export interface CandidateUpdatelinksInput {
  set?: String[] | String
}

export interface InviteUpdateWithoutWorkspaceDataInput {
  email?: String
  expireAt?: DateTime
  invitedBy?: UserUpdateOneRequiredInput
}

export interface CandidateUpdateresumesStringInput {
  set?: String[] | String
}

export interface InviteUpdateManyWithoutWorkspaceInput {
  create?: InviteCreateWithoutWorkspaceInput[] | InviteCreateWithoutWorkspaceInput
  connect?: InviteWhereUniqueInput[] | InviteWhereUniqueInput
  disconnect?: InviteWhereUniqueInput[] | InviteWhereUniqueInput
  delete?: InviteWhereUniqueInput[] | InviteWhereUniqueInput
  update?: InviteUpdateWithWhereUniqueWithoutWorkspaceInput[] | InviteUpdateWithWhereUniqueWithoutWorkspaceInput
  upsert?: InviteUpsertWithWhereUniqueWithoutWorkspaceInput[] | InviteUpsertWithWhereUniqueWithoutWorkspaceInput
}

export interface WorkspaceCreateOneWithoutJobsInput {
  create?: WorkspaceCreateWithoutJobsInput
  connect?: WorkspaceWhereUniqueInput
}

export interface EventCreateManyWithoutTargetWorkspaceInput {
  create?: EventCreateWithoutTargetWorkspaceInput[] | EventCreateWithoutTargetWorkspaceInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
}

export interface CandidateUpdatesourceInput {
  set?: String[] | String
}

export interface WorkspaceCreateOneInput {
  create?: WorkspaceCreateInput
  connect?: WorkspaceWhereUniqueInput
}

export interface WorkspaceUpdateOneRequiredWithoutCandidatesInput {
  create?: WorkspaceCreateWithoutCandidatesInput
  connect?: WorkspaceWhereUniqueInput
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
  workflows?: WorkflowUpdateManyInput
  workflowDefault?: WorkflowUpdateOneInput
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
  department?: String
  name?: String
  description?: String
  requirements?: String
  subscribers?: UserUpdateManyWithoutSubscriptionJobsInput
  events?: EventUpdateManyWithoutTargetJobInput
  applications?: ApplicationUpdateManyWithoutJobInput
  workflow?: WorkflowUpdateOneRequiredInput
  comments?: CommentUpdateManyInput
  locations?: LocationUpdateManyInput
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

export interface CandidateCreatecoverLettersStringInput {
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
  lastLogin?: DateTime
  deletedAt?: DateTime
  position?: String
  workspace?: WorkspaceUpdateOneRequiredWithoutUsersInput
  events?: EventUpdateOneWithoutActorUserInput
  notifications?: NotificationUpdateManyWithoutUserInput
  subscriptionCandidates?: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks?: TaskUpdateManyWithoutSubscribersInput
  tasks?: TaskUpdateManyWithoutOwnersInput
  avatar?: FileUpdateOneInput
}

export interface JobCreateManyWithoutWorkspaceInput {
  create?: JobCreateWithoutWorkspaceInput[] | JobCreateWithoutWorkspaceInput
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput
}

export interface WorkspaceUpdateOneRequiredWithoutUsersInput {
  create?: WorkspaceCreateWithoutUsersInput
  connect?: WorkspaceWhereUniqueInput
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
  workflows?: WorkflowUpdateManyInput
  workflowDefault?: WorkflowUpdateOneInput
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

export interface DisqualifyReasonCreateOneInput {
  create?: DisqualifyReasonCreateInput
  connect?: DisqualifyReasonWhereUniqueInput
}

export interface ApplicationUpdateWithoutWorkspaceDataInput {
  disqualifyReason?: DisqualifyReasonUpdateOneInput
  job?: JobUpdateOneRequiredWithoutApplicationsInput
  candidate?: CandidateUpdateOneRequiredWithoutApplicationsInput
  stage?: StageUpdateOneInput
}

export interface JobCreateOneWithoutApplicationsInput {
  create?: JobCreateWithoutApplicationsInput
  connect?: JobWhereUniqueInput
}

export interface DisqualifyReasonUpdateOneInput {
  create?: DisqualifyReasonCreateInput
  connect?: DisqualifyReasonWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: DisqualifyReasonUpdateDataInput
  upsert?: DisqualifyReasonUpsertNestedInput
}

export interface EventCreateManyWithoutTargetJobInput {
  create?: EventCreateWithoutTargetJobInput[] | EventCreateWithoutTargetJobInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
}

export interface DisqualifyReasonUpdateDataInput {
  name?: String
  description?: String
}

export interface UserCreateOneWithoutEventsInput {
  create?: UserCreateWithoutEventsInput
  connect?: UserWhereUniqueInput
}

export interface DisqualifyReasonUpsertNestedInput {
  update: DisqualifyReasonUpdateDataInput
  create: DisqualifyReasonCreateInput
}

export interface NotificationCreateManyWithoutUserInput {
  create?: NotificationCreateWithoutUserInput[] | NotificationCreateWithoutUserInput
  connect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
}

export interface JobUpdateOneRequiredWithoutApplicationsInput {
  create?: JobCreateWithoutApplicationsInput
  connect?: JobWhereUniqueInput
  update?: JobUpdateWithoutApplicationsDataInput
  upsert?: JobUpsertWithoutApplicationsInput
}

export interface EventCreateOneInput {
  create?: EventCreateInput
  connect?: EventWhereUniqueInput
}

export interface JobUpdateWithoutApplicationsDataInput {
  status?: JobType
  department?: String
  name?: String
  description?: String
  requirements?: String
  workspace?: WorkspaceUpdateOneRequiredWithoutJobsInput
  subscribers?: UserUpdateManyWithoutSubscriptionJobsInput
  events?: EventUpdateManyWithoutTargetJobInput
  workflow?: WorkflowUpdateOneRequiredInput
  comments?: CommentUpdateManyInput
  locations?: LocationUpdateManyInput
}

export interface CandidateCreateOneWithoutEventsInput {
  create?: CandidateCreateWithoutEventsInput
  connect?: CandidateWhereUniqueInput
}

export interface EventUpdateManyWithoutTargetJobInput {
  create?: EventCreateWithoutTargetJobInput[] | EventCreateWithoutTargetJobInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  disconnect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  delete?: EventWhereUniqueInput[] | EventWhereUniqueInput
  update?: EventUpdateWithWhereUniqueWithoutTargetJobInput[] | EventUpdateWithWhereUniqueWithoutTargetJobInput
  upsert?: EventUpsertWithWhereUniqueWithoutTargetJobInput[] | EventUpsertWithWhereUniqueWithoutTargetJobInput
}

export interface UserCreateManyWithoutSubscriptionCandidatesInput {
  create?: UserCreateWithoutSubscriptionCandidatesInput[] | UserCreateWithoutSubscriptionCandidatesInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface EventUpdateWithWhereUniqueWithoutTargetJobInput {
  where: EventWhereUniqueInput
  data: EventUpdateWithoutTargetJobDataInput
}

export interface JobCreateManyWithoutSubscribersInput {
  create?: JobCreateWithoutSubscribersInput[] | JobCreateWithoutSubscribersInput
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput
}

export interface EventUpdateWithoutTargetJobDataInput {
  type?: EventType
  actorType?: EventActorType
  targetType?: EventTargetType
  workspace?: WorkspaceUpdateOneRequiredInput
  actorUser?: UserUpdateOneWithoutEventsInput
  actorCandidate?: CandidateUpdateOneInput
  targetCandidate?: CandidateUpdateOneWithoutEventsInput
  targetTask?: TaskUpdateOneInput
  targetWorkspace?: WorkspaceUpdateOneWithoutEventsInput
}

export interface ApplicationCreateManyWithoutJobInput {
  create?: ApplicationCreateWithoutJobInput[] | ApplicationCreateWithoutJobInput
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
}

export interface UserUpdateOneWithoutEventsInput {
  create?: UserCreateWithoutEventsInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutEventsDataInput
  upsert?: UserUpsertWithoutEventsInput
}

export interface WorkspaceCreateOneWithoutApplicationsInput {
  create?: WorkspaceCreateWithoutApplicationsInput
  connect?: WorkspaceWhereUniqueInput
}

export interface UserUpdateWithoutEventsDataInput {
  firstName?: String
  lastName?: String
  email?: String
  username?: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  position?: String
  workspace?: WorkspaceUpdateOneRequiredWithoutUsersInput
  notifications?: NotificationUpdateManyWithoutUserInput
  subscriptionJobs?: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates?: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks?: TaskUpdateManyWithoutSubscribersInput
  tasks?: TaskUpdateManyWithoutOwnersInput
  avatar?: FileUpdateOneInput
}

export interface CandidateCreateManyWithoutWorkspaceInput {
  create?: CandidateCreateWithoutWorkspaceInput[] | CandidateCreateWithoutWorkspaceInput
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

export interface EventCreateManyWithoutTargetCandidateInput {
  create?: EventCreateWithoutTargetCandidateInput[] | EventCreateWithoutTargetCandidateInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
}

export interface NotificationUpdateWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput
  data: NotificationUpdateWithoutUserDataInput
}

export interface JobCreateOneWithoutEventsInput {
  create?: JobCreateWithoutEventsInput
  connect?: JobWhereUniqueInput
}

export interface NotificationUpdateWithoutUserDataInput {
  type?: NotificationType
  event?: EventUpdateOneRequiredInput
}

export interface WorkflowCreateOneInput {
  create?: WorkflowCreateInput
  connect?: WorkflowWhereUniqueInput
}

export interface EventUpdateOneRequiredInput {
  create?: EventCreateInput
  connect?: EventWhereUniqueInput
  update?: EventUpdateDataInput
  upsert?: EventUpsertNestedInput
}

export interface StageCreateManyInput {
  create?: StageCreateInput[] | StageCreateInput
  connect?: StageWhereUniqueInput[] | StageWhereUniqueInput
}

export interface EventUpdateDataInput {
  type?: EventType
  actorType?: EventActorType
  targetType?: EventTargetType
  workspace?: WorkspaceUpdateOneRequiredInput
  actorUser?: UserUpdateOneWithoutEventsInput
  actorCandidate?: CandidateUpdateOneInput
  targetCandidate?: CandidateUpdateOneWithoutEventsInput
  targetJob?: JobUpdateOneWithoutEventsInput
  targetTask?: TaskUpdateOneInput
  targetWorkspace?: WorkspaceUpdateOneWithoutEventsInput
}

export interface DisqualifyReasonCreateManyInput {
  create?: DisqualifyReasonCreateInput[] | DisqualifyReasonCreateInput
  connect?: DisqualifyReasonWhereUniqueInput[] | DisqualifyReasonWhereUniqueInput
}

export interface CandidateUpdateOneWithoutEventsInput {
  create?: CandidateCreateWithoutEventsInput
  connect?: CandidateWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CandidateUpdateWithoutEventsDataInput
  upsert?: CandidateUpsertWithoutEventsInput
}

export interface CommentCreateInput {
  content: String
  createdBy: UserCreateOneInput
  parent?: CommentCreateOneInput
}

export interface CandidateUpdateWithoutEventsDataInput {
  firstName?: String
  lastName?: String
  emails?: CandidateUpdateemailsInput
  phones?: CandidateUpdatephonesInput
  links?: CandidateUpdatelinksInput
  resumesString?: CandidateUpdateresumesStringInput
  coverLettersString?: CandidateUpdatecoverLettersStringInput
  source?: CandidateUpdatesourceInput
  workspace?: WorkspaceUpdateOneRequiredWithoutCandidatesInput
  subscribers?: UserUpdateManyWithoutSubscriptionCandidatesInput
  avatar?: FileUpdateOneInput
  resumesFile?: FileUpdateManyInput
  coverLettersFile?: FileUpdateManyInput
  tags?: TagUpdateManyInput
  fields?: FieldLinkUpdateManyWithoutCandidateInput
  tasks?: TaskUpdateManyWithoutCandidateInput
  applications?: ApplicationUpdateManyWithoutCandidateInput
  comments?: CommentUpdateManyInput
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

export interface UserUpdateManyWithoutSubscriptionCandidatesInput {
  create?: UserCreateWithoutSubscriptionCandidatesInput[] | UserCreateWithoutSubscriptionCandidatesInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutSubscriptionCandidatesInput[] | UserUpdateWithWhereUniqueWithoutSubscriptionCandidatesInput
  upsert?: UserUpsertWithWhereUniqueWithoutSubscriptionCandidatesInput[] | UserUpsertWithWhereUniqueWithoutSubscriptionCandidatesInput
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
  fields?: FieldLinkCreateManyWithoutCandidateInput
  tasks?: TaskCreateManyWithoutCandidateInput
  applications?: ApplicationCreateManyWithoutCandidateInput
  comments?: CommentCreateManyInput
}

export interface UserUpdateWithWhereUniqueWithoutSubscriptionCandidatesInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutSubscriptionCandidatesDataInput
}

export interface FileCreateInput {
  size: Int
  type: String
  name: String
  url: String
}

export interface UserUpdateWithoutSubscriptionCandidatesDataInput {
  firstName?: String
  lastName?: String
  email?: String
  username?: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  position?: String
  workspace?: WorkspaceUpdateOneRequiredWithoutUsersInput
  events?: EventUpdateOneWithoutActorUserInput
  notifications?: NotificationUpdateManyWithoutUserInput
  subscriptionJobs?: JobUpdateManyWithoutSubscribersInput
  subscriptionTasks?: TaskUpdateManyWithoutSubscribersInput
  tasks?: TaskUpdateManyWithoutOwnersInput
  avatar?: FileUpdateOneInput
}

export interface TagCreateManyInput {
  create?: TagCreateInput[] | TagCreateInput
  connect?: TagWhereUniqueInput[] | TagWhereUniqueInput
}

export interface JobUpdateManyWithoutSubscribersInput {
  create?: JobCreateWithoutSubscribersInput[] | JobCreateWithoutSubscribersInput
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput
  disconnect?: JobWhereUniqueInput[] | JobWhereUniqueInput
  delete?: JobWhereUniqueInput[] | JobWhereUniqueInput
  update?: JobUpdateWithWhereUniqueWithoutSubscribersInput[] | JobUpdateWithWhereUniqueWithoutSubscribersInput
  upsert?: JobUpsertWithWhereUniqueWithoutSubscribersInput[] | JobUpsertWithWhereUniqueWithoutSubscribersInput
}

export interface FieldLinkCreateManyWithoutCandidateInput {
  create?: FieldLinkCreateWithoutCandidateInput[] | FieldLinkCreateWithoutCandidateInput
  connect?: FieldLinkWhereUniqueInput[] | FieldLinkWhereUniqueInput
}

export interface JobUpdateWithWhereUniqueWithoutSubscribersInput {
  where: JobWhereUniqueInput
  data: JobUpdateWithoutSubscribersDataInput
}

export interface DisqualifyReasonSubscriptionWhereInput {
  AND?: DisqualifyReasonSubscriptionWhereInput[] | DisqualifyReasonSubscriptionWhereInput
  OR?: DisqualifyReasonSubscriptionWhereInput[] | DisqualifyReasonSubscriptionWhereInput
  NOT?: DisqualifyReasonSubscriptionWhereInput[] | DisqualifyReasonSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: DisqualifyReasonWhereInput
}

export interface JobUpdateWithoutSubscribersDataInput {
  status?: JobType
  department?: String
  name?: String
  description?: String
  requirements?: String
  workspace?: WorkspaceUpdateOneRequiredWithoutJobsInput
  events?: EventUpdateManyWithoutTargetJobInput
  applications?: ApplicationUpdateManyWithoutJobInput
  workflow?: WorkflowUpdateOneRequiredInput
  comments?: CommentUpdateManyInput
  locations?: LocationUpdateManyInput
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

export interface ApplicationUpdateManyWithoutJobInput {
  create?: ApplicationCreateWithoutJobInput[] | ApplicationCreateWithoutJobInput
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  disconnect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  delete?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  update?: ApplicationUpdateWithWhereUniqueWithoutJobInput[] | ApplicationUpdateWithWhereUniqueWithoutJobInput
  upsert?: ApplicationUpsertWithWhereUniqueWithoutJobInput[] | ApplicationUpsertWithWhereUniqueWithoutJobInput
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

export interface ApplicationUpdateWithWhereUniqueWithoutJobInput {
  where: ApplicationWhereUniqueInput
  data: ApplicationUpdateWithoutJobDataInput
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

export interface ApplicationUpdateWithoutJobDataInput {
  workspace?: WorkspaceUpdateOneRequiredWithoutApplicationsInput
  disqualifyReason?: DisqualifyReasonUpdateOneInput
  candidate?: CandidateUpdateOneRequiredWithoutApplicationsInput
  stage?: StageUpdateOneInput
}

export interface FileSubscriptionWhereInput {
  AND?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  OR?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  NOT?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: FileWhereInput
}

export interface WorkspaceUpdateOneRequiredWithoutApplicationsInput {
  create?: WorkspaceCreateWithoutApplicationsInput
  connect?: WorkspaceWhereUniqueInput
  update?: WorkspaceUpdateWithoutApplicationsDataInput
  upsert?: WorkspaceUpsertWithoutApplicationsInput
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

export interface WorkspaceUpdateWithoutApplicationsDataInput {
  name?: String
  events?: EventUpdateManyWithoutTargetWorkspaceInput
  users?: UserUpdateManyWithoutWorkspaceInput
  jobs?: JobUpdateManyWithoutWorkspaceInput
  candidates?: CandidateUpdateManyWithoutWorkspaceInput
  workflows?: WorkflowUpdateManyInput
  workflowDefault?: WorkflowUpdateOneInput
  invites?: InviteUpdateManyWithoutWorkspaceInput
  tags?: TagUpdateManyInput
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

export interface CandidateUpdateManyWithoutWorkspaceInput {
  create?: CandidateCreateWithoutWorkspaceInput[] | CandidateCreateWithoutWorkspaceInput
  connect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
  disconnect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
  delete?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
  update?: CandidateUpdateWithWhereUniqueWithoutWorkspaceInput[] | CandidateUpdateWithWhereUniqueWithoutWorkspaceInput
  upsert?: CandidateUpsertWithWhereUniqueWithoutWorkspaceInput[] | CandidateUpsertWithWhereUniqueWithoutWorkspaceInput
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

export interface CandidateUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: CandidateWhereUniqueInput
  data: CandidateUpdateWithoutWorkspaceDataInput
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
  workspace?: WorkspaceWhereInput
  actorUser?: UserWhereInput
  actorCandidate?: CandidateWhereInput
  targetCandidate?: CandidateWhereInput
  targetJob?: JobWhereInput
  targetTask?: TaskWhereInput
  targetWorkspace?: WorkspaceWhereInput
}

export interface CandidateUpdateWithoutWorkspaceDataInput {
  firstName?: String
  lastName?: String
  emails?: CandidateUpdateemailsInput
  phones?: CandidateUpdatephonesInput
  links?: CandidateUpdatelinksInput
  resumesString?: CandidateUpdateresumesStringInput
  coverLettersString?: CandidateUpdatecoverLettersStringInput
  source?: CandidateUpdatesourceInput
  events?: EventUpdateManyWithoutTargetCandidateInput
  subscribers?: UserUpdateManyWithoutSubscriptionCandidatesInput
  avatar?: FileUpdateOneInput
  resumesFile?: FileUpdateManyInput
  coverLettersFile?: FileUpdateManyInput
  tags?: TagUpdateManyInput
  fields?: FieldLinkUpdateManyWithoutCandidateInput
  tasks?: TaskUpdateManyWithoutCandidateInput
  applications?: ApplicationUpdateManyWithoutCandidateInput
  comments?: CommentUpdateManyInput
}

export interface JobWhereUniqueInput {
  id?: ID_Input
}

export interface EventUpdateManyWithoutTargetCandidateInput {
  create?: EventCreateWithoutTargetCandidateInput[] | EventCreateWithoutTargetCandidateInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  disconnect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  delete?: EventWhereUniqueInput[] | EventWhereUniqueInput
  update?: EventUpdateWithWhereUniqueWithoutTargetCandidateInput[] | EventUpdateWithWhereUniqueWithoutTargetCandidateInput
  upsert?: EventUpsertWithWhereUniqueWithoutTargetCandidateInput[] | EventUpsertWithWhereUniqueWithoutTargetCandidateInput
}

export interface FieldWhereUniqueInput {
  id?: ID_Input
}

export interface EventUpdateWithWhereUniqueWithoutTargetCandidateInput {
  where: EventWhereUniqueInput
  data: EventUpdateWithoutTargetCandidateDataInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface EventUpdateWithoutTargetCandidateDataInput {
  type?: EventType
  actorType?: EventActorType
  targetType?: EventTargetType
  workspace?: WorkspaceUpdateOneRequiredInput
  actorUser?: UserUpdateOneWithoutEventsInput
  actorCandidate?: CandidateUpdateOneInput
  targetJob?: JobUpdateOneWithoutEventsInput
  targetTask?: TaskUpdateOneInput
  targetWorkspace?: WorkspaceUpdateOneWithoutEventsInput
}

export interface WorkspaceWhereUniqueInput {
  id?: ID_Input
}

export interface JobUpdateOneWithoutEventsInput {
  create?: JobCreateWithoutEventsInput
  connect?: JobWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: JobUpdateWithoutEventsDataInput
  upsert?: JobUpsertWithoutEventsInput
}

export interface CommentWhereUniqueInput {
  id?: ID_Input
}

export interface JobUpdateWithoutEventsDataInput {
  status?: JobType
  department?: String
  name?: String
  description?: String
  requirements?: String
  workspace?: WorkspaceUpdateOneRequiredWithoutJobsInput
  subscribers?: UserUpdateManyWithoutSubscriptionJobsInput
  applications?: ApplicationUpdateManyWithoutJobInput
  workflow?: WorkflowUpdateOneRequiredInput
  comments?: CommentUpdateManyInput
  locations?: LocationUpdateManyInput
}

export interface TagUpdateInput {
  label?: String
}

export interface WorkflowUpdateOneRequiredInput {
  create?: WorkflowCreateInput
  connect?: WorkflowWhereUniqueInput
  update?: WorkflowUpdateDataInput
  upsert?: WorkflowUpsertNestedInput
}

export interface EventUpdateInput {
  type?: EventType
  actorType?: EventActorType
  targetType?: EventTargetType
  workspace?: WorkspaceUpdateOneRequiredInput
  actorUser?: UserUpdateOneWithoutEventsInput
  actorCandidate?: CandidateUpdateOneInput
  targetCandidate?: CandidateUpdateOneWithoutEventsInput
  targetJob?: JobUpdateOneWithoutEventsInput
  targetTask?: TaskUpdateOneInput
  targetWorkspace?: WorkspaceUpdateOneWithoutEventsInput
}

export interface WorkflowUpdateDataInput {
  name?: String
  description?: String
  stages?: StageUpdateManyInput
  disqualifyReasons?: DisqualifyReasonUpdateManyInput
}

export interface LocationUpdateInput {
  country?: String
  region?: String
  city?: String
  zip?: String
}

export interface StageUpdateManyInput {
  create?: StageCreateInput[] | StageCreateInput
  connect?: StageWhereUniqueInput[] | StageWhereUniqueInput
  disconnect?: StageWhereUniqueInput[] | StageWhereUniqueInput
  delete?: StageWhereUniqueInput[] | StageWhereUniqueInput
  update?: StageUpdateWithWhereUniqueNestedInput[] | StageUpdateWithWhereUniqueNestedInput
  upsert?: StageUpsertWithWhereUniqueNestedInput[] | StageUpsertWithWhereUniqueNestedInput
}

export interface FieldLinkUpdateInput {
  value?: String
  candidate?: CandidateUpdateOneRequiredWithoutFieldsInput
}

export interface StageUpdateWithWhereUniqueNestedInput {
  where: StageWhereUniqueInput
  data: StageUpdateDataInput
}

export interface UserUpdateOneRequiredWithoutNotificationsInput {
  create?: UserCreateWithoutNotificationsInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutNotificationsDataInput
  upsert?: UserUpsertWithoutNotificationsInput
}

export interface StageUpdateDataInput {
  name?: String
  description?: String
  type?: StageType
}

export interface WorkspaceUpdateOneRequiredWithoutInvitesInput {
  create?: WorkspaceCreateWithoutInvitesInput
  connect?: WorkspaceWhereUniqueInput
  update?: WorkspaceUpdateWithoutInvitesDataInput
  upsert?: WorkspaceUpsertWithoutInvitesInput
}

export interface StageUpsertWithWhereUniqueNestedInput {
  where: StageWhereUniqueInput
  update: StageUpdateDataInput
  create: StageCreateInput
}

export interface EventUpsertWithWhereUniqueWithoutTargetWorkspaceInput {
  where: EventWhereUniqueInput
  update: EventUpdateWithoutTargetWorkspaceDataInput
  create: EventCreateWithoutTargetWorkspaceInput
}

export interface DisqualifyReasonUpdateManyInput {
  create?: DisqualifyReasonCreateInput[] | DisqualifyReasonCreateInput
  connect?: DisqualifyReasonWhereUniqueInput[] | DisqualifyReasonWhereUniqueInput
  disconnect?: DisqualifyReasonWhereUniqueInput[] | DisqualifyReasonWhereUniqueInput
  delete?: DisqualifyReasonWhereUniqueInput[] | DisqualifyReasonWhereUniqueInput
  update?: DisqualifyReasonUpdateWithWhereUniqueNestedInput[] | DisqualifyReasonUpdateWithWhereUniqueNestedInput
  upsert?: DisqualifyReasonUpsertWithWhereUniqueNestedInput[] | DisqualifyReasonUpsertWithWhereUniqueNestedInput
}

export interface CandidateUpsertNestedInput {
  update: CandidateUpdateDataInput
  create: CandidateCreateInput
}

export interface DisqualifyReasonUpdateWithWhereUniqueNestedInput {
  where: DisqualifyReasonWhereUniqueInput
  data: DisqualifyReasonUpdateDataInput
}

export interface WorkspaceUpsertWithoutUsersInput {
  update: WorkspaceUpdateWithoutUsersDataInput
  create: WorkspaceCreateWithoutUsersInput
}

export interface DisqualifyReasonUpsertWithWhereUniqueNestedInput {
  where: DisqualifyReasonWhereUniqueInput
  update: DisqualifyReasonUpdateDataInput
  create: DisqualifyReasonCreateInput
}

export interface UserUpsertWithoutEventsInput {
  update: UserUpdateWithoutEventsDataInput
  create: UserCreateWithoutEventsInput
}

export interface WorkflowUpsertNestedInput {
  update: WorkflowUpdateDataInput
  create: WorkflowCreateInput
}

export interface UserUpsertWithWhereUniqueWithoutSubscriptionCandidatesInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutSubscriptionCandidatesDataInput
  create: UserCreateWithoutSubscriptionCandidatesInput
}

export interface CommentUpdateManyInput {
  create?: CommentCreateInput[] | CommentCreateInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  disconnect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  delete?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  update?: CommentUpdateWithWhereUniqueNestedInput[] | CommentUpdateWithWhereUniqueNestedInput
  upsert?: CommentUpsertWithWhereUniqueNestedInput[] | CommentUpsertWithWhereUniqueNestedInput
}

export interface CandidateUpdateWithoutApplicationsDataInput {
  firstName?: String
  lastName?: String
  emails?: CandidateUpdateemailsInput
  phones?: CandidateUpdatephonesInput
  links?: CandidateUpdatelinksInput
  resumesString?: CandidateUpdateresumesStringInput
  coverLettersString?: CandidateUpdatecoverLettersStringInput
  source?: CandidateUpdatesourceInput
  workspace?: WorkspaceUpdateOneRequiredWithoutCandidatesInput
  events?: EventUpdateManyWithoutTargetCandidateInput
  subscribers?: UserUpdateManyWithoutSubscriptionCandidatesInput
  avatar?: FileUpdateOneInput
  resumesFile?: FileUpdateManyInput
  coverLettersFile?: FileUpdateManyInput
  tags?: TagUpdateManyInput
  fields?: FieldLinkUpdateManyWithoutCandidateInput
  tasks?: TaskUpdateManyWithoutCandidateInput
  comments?: CommentUpdateManyInput
}

export interface CommentUpdateWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput
  data: CommentUpdateDataInput
}

export interface EventUpsertWithWhereUniqueWithoutTargetCandidateInput {
  where: EventWhereUniqueInput
  update: EventUpdateWithoutTargetCandidateDataInput
  create: EventCreateWithoutTargetCandidateInput
}

export interface CommentUpdateDataInput {
  content?: String
  createdBy?: UserUpdateOneRequiredInput
  parent?: CommentUpdateOneInput
}

export interface InviteUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: InviteWhereUniqueInput
  data: InviteUpdateWithoutWorkspaceDataInput
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface WorkspaceCreateWithoutJobsInput {
  name: String
  events?: EventCreateManyWithoutTargetWorkspaceInput
  users?: UserCreateManyWithoutWorkspaceInput
  applications?: ApplicationCreateManyWithoutWorkspaceInput
  candidates?: CandidateCreateManyWithoutWorkspaceInput
  workflows?: WorkflowCreateManyInput
  workflowDefault?: WorkflowCreateOneInput
  invites?: InviteCreateManyWithoutWorkspaceInput
  tags?: TagCreateManyInput
}

export interface UserUpdateDataInput {
  firstName?: String
  lastName?: String
  email?: String
  username?: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  position?: String
  workspace?: WorkspaceUpdateOneRequiredWithoutUsersInput
  events?: EventUpdateOneWithoutActorUserInput
  notifications?: NotificationUpdateManyWithoutUserInput
  subscriptionJobs?: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates?: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks?: TaskUpdateManyWithoutSubscribersInput
  tasks?: TaskUpdateManyWithoutOwnersInput
  avatar?: FileUpdateOneInput
}

export interface WorkspaceCreateInput {
  name: String
  events?: EventCreateManyWithoutTargetWorkspaceInput
  users?: UserCreateManyWithoutWorkspaceInput
  jobs?: JobCreateManyWithoutWorkspaceInput
  applications?: ApplicationCreateManyWithoutWorkspaceInput
  candidates?: CandidateCreateManyWithoutWorkspaceInput
  workflows?: WorkflowCreateManyInput
  workflowDefault?: WorkflowCreateOneInput
  invites?: InviteCreateManyWithoutWorkspaceInput
  tags?: TagCreateManyInput
}

export interface CandidateUpdateManyWithoutSubscribersInput {
  create?: CandidateCreateWithoutSubscribersInput[] | CandidateCreateWithoutSubscribersInput
  connect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
  disconnect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
  delete?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
  update?: CandidateUpdateWithWhereUniqueWithoutSubscribersInput[] | CandidateUpdateWithWhereUniqueWithoutSubscribersInput
  upsert?: CandidateUpsertWithWhereUniqueWithoutSubscribersInput[] | CandidateUpsertWithWhereUniqueWithoutSubscribersInput
}

export interface EventCreateWithoutActorUserInput {
  type: EventType
  actorType: EventActorType
  targetType: EventTargetType
  workspace: WorkspaceCreateOneInput
  actorCandidate?: CandidateCreateOneInput
  targetCandidate?: CandidateCreateOneWithoutEventsInput
  targetJob?: JobCreateOneWithoutEventsInput
  targetTask?: TaskCreateOneInput
  targetWorkspace?: WorkspaceCreateOneWithoutEventsInput
}

export interface CandidateUpdateWithWhereUniqueWithoutSubscribersInput {
  where: CandidateWhereUniqueInput
  data: CandidateUpdateWithoutSubscribersDataInput
}

export interface CandidateCreatephonesInput {
  set?: String[] | String
}

export interface CandidateUpdateWithoutSubscribersDataInput {
  firstName?: String
  lastName?: String
  emails?: CandidateUpdateemailsInput
  phones?: CandidateUpdatephonesInput
  links?: CandidateUpdatelinksInput
  resumesString?: CandidateUpdateresumesStringInput
  coverLettersString?: CandidateUpdatecoverLettersStringInput
  source?: CandidateUpdatesourceInput
  workspace?: WorkspaceUpdateOneRequiredWithoutCandidatesInput
  events?: EventUpdateManyWithoutTargetCandidateInput
  avatar?: FileUpdateOneInput
  resumesFile?: FileUpdateManyInput
  coverLettersFile?: FileUpdateManyInput
  tags?: TagUpdateManyInput
  fields?: FieldLinkUpdateManyWithoutCandidateInput
  tasks?: TaskUpdateManyWithoutCandidateInput
  applications?: ApplicationUpdateManyWithoutCandidateInput
  comments?: CommentUpdateManyInput
}

export interface CandidateCreatesourceInput {
  set?: String[] | String
}

export interface FileUpdateOneInput {
  create?: FileCreateInput
  connect?: FileWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: FileUpdateDataInput
  upsert?: FileUpsertNestedInput
}

export interface JobCreateWithoutWorkspaceInput {
  status: JobType
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

export interface FileUpdateDataInput {
  size?: Int
  type?: String
  name?: String
  url?: String
}

export interface WorkspaceCreateWithoutUsersInput {
  name: String
  events?: EventCreateManyWithoutTargetWorkspaceInput
  jobs?: JobCreateManyWithoutWorkspaceInput
  applications?: ApplicationCreateManyWithoutWorkspaceInput
  candidates?: CandidateCreateManyWithoutWorkspaceInput
  workflows?: WorkflowCreateManyInput
  workflowDefault?: WorkflowCreateOneInput
  invites?: InviteCreateManyWithoutWorkspaceInput
  tags?: TagCreateManyInput
}

export interface FileUpsertNestedInput {
  update: FileUpdateDataInput
  create: FileCreateInput
}

export interface DisqualifyReasonCreateInput {
  name: String
  description?: String
}

export interface FileUpdateManyInput {
  create?: FileCreateInput[] | FileCreateInput
  connect?: FileWhereUniqueInput[] | FileWhereUniqueInput
  disconnect?: FileWhereUniqueInput[] | FileWhereUniqueInput
  delete?: FileWhereUniqueInput[] | FileWhereUniqueInput
  update?: FileUpdateWithWhereUniqueNestedInput[] | FileUpdateWithWhereUniqueNestedInput
  upsert?: FileUpsertWithWhereUniqueNestedInput[] | FileUpsertWithWhereUniqueNestedInput
}

export interface EventCreateWithoutTargetJobInput {
  type: EventType
  actorType: EventActorType
  targetType: EventTargetType
  workspace: WorkspaceCreateOneInput
  actorUser?: UserCreateOneWithoutEventsInput
  actorCandidate?: CandidateCreateOneInput
  targetCandidate?: CandidateCreateOneWithoutEventsInput
  targetTask?: TaskCreateOneInput
  targetWorkspace?: WorkspaceCreateOneWithoutEventsInput
}

export interface FileUpdateWithWhereUniqueNestedInput {
  where: FileWhereUniqueInput
  data: FileUpdateDataInput
}

export interface NotificationCreateWithoutUserInput {
  type: NotificationType
  event: EventCreateOneInput
}

export interface FileUpsertWithWhereUniqueNestedInput {
  where: FileWhereUniqueInput
  update: FileUpdateDataInput
  create: FileCreateInput
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
  fields?: FieldLinkCreateManyWithoutCandidateInput
  tasks?: TaskCreateManyWithoutCandidateInput
  applications?: ApplicationCreateManyWithoutCandidateInput
  comments?: CommentCreateManyInput
}

export interface TagUpdateManyInput {
  create?: TagCreateInput[] | TagCreateInput
  connect?: TagWhereUniqueInput[] | TagWhereUniqueInput
  disconnect?: TagWhereUniqueInput[] | TagWhereUniqueInput
  delete?: TagWhereUniqueInput[] | TagWhereUniqueInput
  update?: TagUpdateWithWhereUniqueNestedInput[] | TagUpdateWithWhereUniqueNestedInput
  upsert?: TagUpsertWithWhereUniqueNestedInput[] | TagUpsertWithWhereUniqueNestedInput
}

export interface JobCreateWithoutSubscribersInput {
  status: JobType
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

export interface TagUpdateWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput
  data: TagUpdateDataInput
}

export interface WorkspaceCreateWithoutApplicationsInput {
  name: String
  events?: EventCreateManyWithoutTargetWorkspaceInput
  users?: UserCreateManyWithoutWorkspaceInput
  jobs?: JobCreateManyWithoutWorkspaceInput
  candidates?: CandidateCreateManyWithoutWorkspaceInput
  workflows?: WorkflowCreateManyInput
  workflowDefault?: WorkflowCreateOneInput
  invites?: InviteCreateManyWithoutWorkspaceInput
  tags?: TagCreateManyInput
}

export interface TagUpdateDataInput {
  label?: String
}

export interface EventCreateWithoutTargetCandidateInput {
  type: EventType
  actorType: EventActorType
  targetType: EventTargetType
  workspace: WorkspaceCreateOneInput
  actorUser?: UserCreateOneWithoutEventsInput
  actorCandidate?: CandidateCreateOneInput
  targetJob?: JobCreateOneWithoutEventsInput
  targetTask?: TaskCreateOneInput
  targetWorkspace?: WorkspaceCreateOneWithoutEventsInput
}

export interface TagUpsertWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput
  update: TagUpdateDataInput
  create: TagCreateInput
}

export interface WorkflowCreateInput {
  name: String
  description?: String
  stages?: StageCreateManyInput
  disqualifyReasons?: DisqualifyReasonCreateManyInput
}

export interface FieldLinkUpdateManyWithoutCandidateInput {
  create?: FieldLinkCreateWithoutCandidateInput[] | FieldLinkCreateWithoutCandidateInput
  connect?: FieldLinkWhereUniqueInput[] | FieldLinkWhereUniqueInput
  disconnect?: FieldLinkWhereUniqueInput[] | FieldLinkWhereUniqueInput
  delete?: FieldLinkWhereUniqueInput[] | FieldLinkWhereUniqueInput
  update?: FieldLinkUpdateWithWhereUniqueWithoutCandidateInput[] | FieldLinkUpdateWithWhereUniqueWithoutCandidateInput
  upsert?: FieldLinkUpsertWithWhereUniqueWithoutCandidateInput[] | FieldLinkUpsertWithWhereUniqueWithoutCandidateInput
}

export interface CommentCreateManyInput {
  create?: CommentCreateInput[] | CommentCreateInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
}

export interface FieldLinkUpdateWithWhereUniqueWithoutCandidateInput {
  where: FieldLinkWhereUniqueInput
  data: FieldLinkUpdateWithoutCandidateDataInput
}

export interface CandidateCreateManyWithoutSubscribersInput {
  create?: CandidateCreateWithoutSubscribersInput[] | CandidateCreateWithoutSubscribersInput
  connect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
}

export interface FieldLinkUpdateWithoutCandidateDataInput {
  value?: String
}

export interface FileCreateManyInput {
  create?: FileCreateInput[] | FileCreateInput
  connect?: FileWhereUniqueInput[] | FileWhereUniqueInput
}

export interface FieldLinkUpsertWithWhereUniqueWithoutCandidateInput {
  where: FieldLinkWhereUniqueInput
  update: FieldLinkUpdateWithoutCandidateDataInput
  create: FieldLinkCreateWithoutCandidateInput
}

export interface FieldLinkCreateWithoutCandidateInput {
  value?: String
}

export interface TaskUpdateManyWithoutCandidateInput {
  create?: TaskCreateWithoutCandidateInput[] | TaskCreateWithoutCandidateInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  disconnect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  delete?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  update?: TaskUpdateWithWhereUniqueWithoutCandidateInput[] | TaskUpdateWithWhereUniqueWithoutCandidateInput
  upsert?: TaskUpsertWithWhereUniqueWithoutCandidateInput[] | TaskUpsertWithWhereUniqueWithoutCandidateInput
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
  disqualifyReasons_every?: DisqualifyReasonWhereInput
  disqualifyReasons_some?: DisqualifyReasonWhereInput
  disqualifyReasons_none?: DisqualifyReasonWhereInput
}

export interface TaskUpdateWithWhereUniqueWithoutCandidateInput {
  where: TaskWhereUniqueInput
  data: TaskUpdateWithoutCandidateDataInput
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

export interface TaskUpdateWithoutCandidateDataInput {
  title?: String
  description?: String
  dueAt?: DateTime
  workspace?: WorkspaceUpdateOneRequiredInput
  subscribers?: UserUpdateManyWithoutSubscriptionTasksInput
  owners?: UserUpdateManyWithoutTasksInput
}

export interface FieldLinkSubscriptionWhereInput {
  AND?: FieldLinkSubscriptionWhereInput[] | FieldLinkSubscriptionWhereInput
  OR?: FieldLinkSubscriptionWhereInput[] | FieldLinkSubscriptionWhereInput
  NOT?: FieldLinkSubscriptionWhereInput[] | FieldLinkSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: FieldLinkWhereInput
}

export interface UserUpdateManyWithoutSubscriptionTasksInput {
  create?: UserCreateWithoutSubscriptionTasksInput[] | UserCreateWithoutSubscriptionTasksInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutSubscriptionTasksInput[] | UserUpdateWithWhereUniqueWithoutSubscriptionTasksInput
  upsert?: UserUpsertWithWhereUniqueWithoutSubscriptionTasksInput[] | UserUpsertWithWhereUniqueWithoutSubscriptionTasksInput
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

export interface UserUpdateWithWhereUniqueWithoutSubscriptionTasksInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutSubscriptionTasksDataInput
}

export interface InviteWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateWithoutSubscriptionTasksDataInput {
  firstName?: String
  lastName?: String
  email?: String
  username?: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  position?: String
  workspace?: WorkspaceUpdateOneRequiredWithoutUsersInput
  events?: EventUpdateOneWithoutActorUserInput
  notifications?: NotificationUpdateManyWithoutUserInput
  subscriptionJobs?: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates?: CandidateUpdateManyWithoutSubscribersInput
  tasks?: TaskUpdateManyWithoutOwnersInput
  avatar?: FileUpdateOneInput
}

export interface EventWhereUniqueInput {
  id?: ID_Input
}

export interface TaskUpdateManyWithoutOwnersInput {
  create?: TaskCreateWithoutOwnersInput[] | TaskCreateWithoutOwnersInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  disconnect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  delete?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  update?: TaskUpdateWithWhereUniqueWithoutOwnersInput[] | TaskUpdateWithWhereUniqueWithoutOwnersInput
  upsert?: TaskUpsertWithWhereUniqueWithoutOwnersInput[] | TaskUpsertWithWhereUniqueWithoutOwnersInput
}

export interface CommentUpdateInput {
  content?: String
  createdBy?: UserUpdateOneRequiredInput
  parent?: CommentUpdateOneInput
}

export interface TaskUpdateWithWhereUniqueWithoutOwnersInput {
  where: TaskWhereUniqueInput
  data: TaskUpdateWithoutOwnersDataInput
}

export interface UserUpdateInput {
  firstName?: String
  lastName?: String
  email?: String
  username?: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  position?: String
  workspace?: WorkspaceUpdateOneRequiredWithoutUsersInput
  events?: EventUpdateOneWithoutActorUserInput
  notifications?: NotificationUpdateManyWithoutUserInput
  subscriptionJobs?: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates?: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks?: TaskUpdateManyWithoutSubscribersInput
  tasks?: TaskUpdateManyWithoutOwnersInput
  avatar?: FileUpdateOneInput
}

export interface TaskUpdateWithoutOwnersDataInput {
  title?: String
  description?: String
  dueAt?: DateTime
  workspace?: WorkspaceUpdateOneRequiredInput
  subscribers?: UserUpdateManyWithoutSubscriptionTasksInput
  candidate?: CandidateUpdateOneWithoutTasksInput
}

export interface UserUpsertWithoutNotificationsInput {
  update: UserUpdateWithoutNotificationsDataInput
  create: UserCreateWithoutNotificationsInput
}

export interface CandidateUpdateOneWithoutTasksInput {
  create?: CandidateCreateWithoutTasksInput
  connect?: CandidateWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CandidateUpdateWithoutTasksDataInput
  upsert?: CandidateUpsertWithoutTasksInput
}

export interface ApplicationUpdateInput {
  workspace?: WorkspaceUpdateOneRequiredWithoutApplicationsInput
  disqualifyReason?: DisqualifyReasonUpdateOneInput
  job?: JobUpdateOneRequiredWithoutApplicationsInput
  candidate?: CandidateUpdateOneRequiredWithoutApplicationsInput
  stage?: StageUpdateOneInput
}

export interface CandidateUpdateWithoutTasksDataInput {
  firstName?: String
  lastName?: String
  emails?: CandidateUpdateemailsInput
  phones?: CandidateUpdatephonesInput
  links?: CandidateUpdatelinksInput
  resumesString?: CandidateUpdateresumesStringInput
  coverLettersString?: CandidateUpdatecoverLettersStringInput
  source?: CandidateUpdatesourceInput
  workspace?: WorkspaceUpdateOneRequiredWithoutCandidatesInput
  events?: EventUpdateManyWithoutTargetCandidateInput
  subscribers?: UserUpdateManyWithoutSubscriptionCandidatesInput
  avatar?: FileUpdateOneInput
  resumesFile?: FileUpdateManyInput
  coverLettersFile?: FileUpdateManyInput
  tags?: TagUpdateManyInput
  fields?: FieldLinkUpdateManyWithoutCandidateInput
  applications?: ApplicationUpdateManyWithoutCandidateInput
  comments?: CommentUpdateManyInput
}

export interface JobUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: JobWhereUniqueInput
  update: JobUpdateWithoutWorkspaceDataInput
  create: JobCreateWithoutWorkspaceInput
}

export interface ApplicationUpdateManyWithoutCandidateInput {
  create?: ApplicationCreateWithoutCandidateInput[] | ApplicationCreateWithoutCandidateInput
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  disconnect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  delete?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  update?: ApplicationUpdateWithWhereUniqueWithoutCandidateInput[] | ApplicationUpdateWithWhereUniqueWithoutCandidateInput
  upsert?: ApplicationUpsertWithWhereUniqueWithoutCandidateInput[] | ApplicationUpsertWithWhereUniqueWithoutCandidateInput
}

export interface EventUpsertNestedInput {
  update: EventUpdateDataInput
  create: EventCreateInput
}

export interface ApplicationUpdateWithWhereUniqueWithoutCandidateInput {
  where: ApplicationWhereUniqueInput
  data: ApplicationUpdateWithoutCandidateDataInput
}

export interface WorkspaceUpsertWithoutApplicationsInput {
  update: WorkspaceUpdateWithoutApplicationsDataInput
  create: WorkspaceCreateWithoutApplicationsInput
}

export interface ApplicationUpdateWithoutCandidateDataInput {
  workspace?: WorkspaceUpdateOneRequiredWithoutApplicationsInput
  disqualifyReason?: DisqualifyReasonUpdateOneInput
  job?: JobUpdateOneRequiredWithoutApplicationsInput
  stage?: StageUpdateOneInput
}

export interface JobCreateInput {
  status: JobType
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

export interface StageUpdateOneInput {
  create?: StageCreateInput
  connect?: StageWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: StageUpdateDataInput
  upsert?: StageUpsertNestedInput
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

export interface StageUpsertNestedInput {
  update: StageUpdateDataInput
  create: StageCreateInput
}

export interface CandidateCreateresumesStringInput {
  set?: String[] | String
}

export interface ApplicationUpsertWithWhereUniqueWithoutCandidateInput {
  where: ApplicationWhereUniqueInput
  update: ApplicationUpdateWithoutCandidateDataInput
  create: ApplicationCreateWithoutCandidateInput
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

export interface CandidateUpsertWithoutTasksInput {
  update: CandidateUpdateWithoutTasksDataInput
  create: CandidateCreateWithoutTasksInput
}

export interface JobCreateWithoutApplicationsInput {
  status: JobType
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

export interface TaskUpsertWithWhereUniqueWithoutOwnersInput {
  where: TaskWhereUniqueInput
  update: TaskUpdateWithoutOwnersDataInput
  create: TaskCreateWithoutOwnersInput
}

export interface EventCreateInput {
  type: EventType
  actorType: EventActorType
  targetType: EventTargetType
  workspace: WorkspaceCreateOneInput
  actorUser?: UserCreateOneWithoutEventsInput
  actorCandidate?: CandidateCreateOneInput
  targetCandidate?: CandidateCreateOneWithoutEventsInput
  targetJob?: JobCreateOneWithoutEventsInput
  targetTask?: TaskCreateOneInput
  targetWorkspace?: WorkspaceCreateOneWithoutEventsInput
}

export interface UserUpsertWithWhereUniqueWithoutSubscriptionTasksInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutSubscriptionTasksDataInput
  create: UserCreateWithoutSubscriptionTasksInput
}

export interface ApplicationCreateWithoutJobInput {
  workspace: WorkspaceCreateOneWithoutApplicationsInput
  disqualifyReason?: DisqualifyReasonCreateOneInput
  candidate: CandidateCreateOneWithoutApplicationsInput
  stage?: StageCreateOneInput
}

export interface UserUpdateManyWithoutTasksInput {
  create?: UserCreateWithoutTasksInput[] | UserCreateWithoutTasksInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutTasksInput[] | UserUpdateWithWhereUniqueWithoutTasksInput
  upsert?: UserUpsertWithWhereUniqueWithoutTasksInput[] | UserUpsertWithWhereUniqueWithoutTasksInput
}

export interface JobCreateWithoutEventsInput {
  status: JobType
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

export interface UserUpdateWithWhereUniqueWithoutTasksInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutTasksDataInput
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface UserUpdateWithoutTasksDataInput {
  firstName?: String
  lastName?: String
  email?: String
  username?: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  position?: String
  workspace?: WorkspaceUpdateOneRequiredWithoutUsersInput
  events?: EventUpdateOneWithoutActorUserInput
  notifications?: NotificationUpdateManyWithoutUserInput
  subscriptionJobs?: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates?: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks?: TaskUpdateManyWithoutSubscribersInput
  avatar?: FileUpdateOneInput
}

export interface TagCreateInput {
  label: String
}

export interface TaskUpdateManyWithoutSubscribersInput {
  create?: TaskCreateWithoutSubscribersInput[] | TaskCreateWithoutSubscribersInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  disconnect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  delete?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  update?: TaskUpdateWithWhereUniqueWithoutSubscribersInput[] | TaskUpdateWithWhereUniqueWithoutSubscribersInput
  upsert?: TaskUpsertWithWhereUniqueWithoutSubscribersInput[] | TaskUpsertWithWhereUniqueWithoutSubscribersInput
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

export interface TaskUpdateWithWhereUniqueWithoutSubscribersInput {
  where: TaskWhereUniqueInput
  data: TaskUpdateWithoutSubscribersDataInput
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

export interface TaskUpdateWithoutSubscribersDataInput {
  title?: String
  description?: String
  dueAt?: DateTime
  workspace?: WorkspaceUpdateOneRequiredInput
  owners?: UserUpdateManyWithoutTasksInput
  candidate?: CandidateUpdateOneWithoutTasksInput
}

export interface LocationWhereUniqueInput {
  id?: ID_Input
}

export interface TaskUpsertWithWhereUniqueWithoutSubscribersInput {
  where: TaskWhereUniqueInput
  update: TaskUpdateWithoutSubscribersDataInput
  create: TaskCreateWithoutSubscribersInput
}

export interface WorkspaceUpdateInput {
  name?: String
  events?: EventUpdateManyWithoutTargetWorkspaceInput
  users?: UserUpdateManyWithoutWorkspaceInput
  jobs?: JobUpdateManyWithoutWorkspaceInput
  applications?: ApplicationUpdateManyWithoutWorkspaceInput
  candidates?: CandidateUpdateManyWithoutWorkspaceInput
  workflows?: WorkflowUpdateManyInput
  workflowDefault?: WorkflowUpdateOneInput
  invites?: InviteUpdateManyWithoutWorkspaceInput
  tags?: TagUpdateManyInput
}

export interface UserUpsertWithWhereUniqueWithoutTasksInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutTasksDataInput
  create: UserCreateWithoutTasksInput
}

export interface WorkspaceUpsertWithoutInvitesInput {
  update: WorkspaceUpdateWithoutInvitesDataInput
  create: WorkspaceCreateWithoutInvitesInput
}

export interface TaskUpsertWithWhereUniqueWithoutCandidateInput {
  where: TaskWhereUniqueInput
  update: TaskUpdateWithoutCandidateDataInput
  create: TaskCreateWithoutCandidateInput
}

export interface JobUpsertWithoutApplicationsInput {
  update: JobUpdateWithoutApplicationsDataInput
  create: JobCreateWithoutApplicationsInput
}

export interface CandidateUpsertWithWhereUniqueWithoutSubscribersInput {
  where: CandidateWhereUniqueInput
  update: CandidateUpdateWithoutSubscribersDataInput
  create: CandidateCreateWithoutSubscribersInput
}

export interface InviteUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: InviteWhereUniqueInput
  update: InviteUpdateWithoutWorkspaceDataInput
  create: InviteCreateWithoutWorkspaceInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
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
  fields?: FieldLinkCreateManyWithoutCandidateInput
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

export interface ApplicationCreateWithoutWorkspaceInput {
  disqualifyReason?: DisqualifyReasonCreateOneInput
  job: JobCreateOneWithoutApplicationsInput
  candidate: CandidateCreateOneWithoutApplicationsInput
  stage?: StageCreateOneInput
}

export interface CommentUpsertNestedInput {
  update: CommentUpdateDataInput
  create: CommentCreateInput
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

export interface CommentUpsertWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput
  update: CommentUpdateDataInput
  create: CommentCreateInput
}

export interface StageCreateInput {
  name: String
  description?: String
  type: StageType
}

export interface LocationUpdateManyInput {
  create?: LocationCreateInput[] | LocationCreateInput
  connect?: LocationWhereUniqueInput[] | LocationWhereUniqueInput
  disconnect?: LocationWhereUniqueInput[] | LocationWhereUniqueInput
  delete?: LocationWhereUniqueInput[] | LocationWhereUniqueInput
  update?: LocationUpdateWithWhereUniqueNestedInput[] | LocationUpdateWithWhereUniqueNestedInput
  upsert?: LocationUpsertWithWhereUniqueNestedInput[] | LocationUpsertWithWhereUniqueNestedInput
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

export interface LocationUpdateWithWhereUniqueNestedInput {
  where: LocationWhereUniqueInput
  data: LocationUpdateDataInput
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

export interface LocationUpdateDataInput {
  country?: String
  region?: String
  city?: String
  zip?: String
}

export interface CandidateUpdateWithoutFieldsDataInput {
  firstName?: String
  lastName?: String
  emails?: CandidateUpdateemailsInput
  phones?: CandidateUpdatephonesInput
  links?: CandidateUpdatelinksInput
  resumesString?: CandidateUpdateresumesStringInput
  coverLettersString?: CandidateUpdatecoverLettersStringInput
  source?: CandidateUpdatesourceInput
  workspace?: WorkspaceUpdateOneRequiredWithoutCandidatesInput
  events?: EventUpdateManyWithoutTargetCandidateInput
  subscribers?: UserUpdateManyWithoutSubscriptionCandidatesInput
  avatar?: FileUpdateOneInput
  resumesFile?: FileUpdateManyInput
  coverLettersFile?: FileUpdateManyInput
  tags?: TagUpdateManyInput
  tasks?: TaskUpdateManyWithoutCandidateInput
  applications?: ApplicationUpdateManyWithoutCandidateInput
  comments?: CommentUpdateManyInput
}

export interface LocationUpsertWithWhereUniqueNestedInput {
  where: LocationWhereUniqueInput
  update: LocationUpdateDataInput
  create: LocationCreateInput
}

export interface ApplicationUpsertWithWhereUniqueWithoutJobInput {
  where: ApplicationWhereUniqueInput
  update: ApplicationUpdateWithoutJobDataInput
  create: ApplicationCreateWithoutJobInput
}

export interface JobUpsertWithoutEventsInput {
  update: JobUpdateWithoutEventsDataInput
  create: JobCreateWithoutEventsInput
}

export interface WorkspaceCreateWithoutCandidatesInput {
  name: String
  events?: EventCreateManyWithoutTargetWorkspaceInput
  users?: UserCreateManyWithoutWorkspaceInput
  jobs?: JobCreateManyWithoutWorkspaceInput
  applications?: ApplicationCreateManyWithoutWorkspaceInput
  workflows?: WorkflowCreateManyInput
  workflowDefault?: WorkflowCreateOneInput
  invites?: InviteCreateManyWithoutWorkspaceInput
  tags?: TagCreateManyInput
}

export interface TaskUpdateOneInput {
  create?: TaskCreateInput
  connect?: TaskWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: TaskUpdateDataInput
  upsert?: TaskUpsertNestedInput
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
  fields?: FieldLinkCreateManyWithoutCandidateInput
  tasks?: TaskCreateManyWithoutCandidateInput
  applications?: ApplicationCreateManyWithoutCandidateInput
  comments?: CommentCreateManyInput
}

export interface TaskUpdateDataInput {
  title?: String
  description?: String
  dueAt?: DateTime
  workspace?: WorkspaceUpdateOneRequiredInput
  subscribers?: UserUpdateManyWithoutSubscriptionTasksInput
  owners?: UserUpdateManyWithoutTasksInput
  candidate?: CandidateUpdateOneWithoutTasksInput
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

export interface TaskUpsertNestedInput {
  update: TaskUpdateDataInput
  create: TaskCreateInput
}

export interface UserUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutWorkspaceDataInput
  create: UserCreateWithoutWorkspaceInput
}

export interface WorkflowUpdateWithWhereUniqueNestedInput {
  where: WorkflowWhereUniqueInput
  data: WorkflowUpdateDataInput
}

export interface WorkflowUpdateManyInput {
  create?: WorkflowCreateInput[] | WorkflowCreateInput
  connect?: WorkflowWhereUniqueInput[] | WorkflowWhereUniqueInput
  disconnect?: WorkflowWhereUniqueInput[] | WorkflowWhereUniqueInput
  delete?: WorkflowWhereUniqueInput[] | WorkflowWhereUniqueInput
  update?: WorkflowUpdateWithWhereUniqueNestedInput[] | WorkflowUpdateWithWhereUniqueNestedInput
  upsert?: WorkflowUpsertWithWhereUniqueNestedInput[] | WorkflowUpsertWithWhereUniqueNestedInput
}

export interface WorkspaceUpdateWithoutEventsDataInput {
  name?: String
  users?: UserUpdateManyWithoutWorkspaceInput
  jobs?: JobUpdateManyWithoutWorkspaceInput
  applications?: ApplicationUpdateManyWithoutWorkspaceInput
  candidates?: CandidateUpdateManyWithoutWorkspaceInput
  workflows?: WorkflowUpdateManyInput
  workflowDefault?: WorkflowUpdateOneInput
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

export interface EventCreateWithoutTargetWorkspaceInput {
  type: EventType
  actorType: EventActorType
  targetType: EventTargetType
  workspace: WorkspaceCreateOneInput
  actorUser?: UserCreateOneWithoutEventsInput
  actorCandidate?: CandidateCreateOneInput
  targetCandidate?: CandidateCreateOneWithoutEventsInput
  targetJob?: JobCreateOneWithoutEventsInput
  targetTask?: TaskCreateOneInput
}

export interface TagWhereUniqueInput {
  id?: ID_Input
}

export interface FileCreateOneInput {
  create?: FileCreateInput
  connect?: FileWhereUniqueInput
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

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface DisqualifyReasonPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description?: String
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
 * A connection to a list of items.

 */
export interface JobConnection {
  pageInfo: PageInfo
  edges: JobEdge[]
  aggregate: AggregateJob
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
  status: JobType
  department?: String
  locations?: Location[]
  name: String
  description?: String
  requirements?: String
}

export interface AggregateDisqualifyReason {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface DisqualifyReasonConnection {
  pageInfo: PageInfo
  edges: DisqualifyReasonEdge[]
  aggregate: AggregateDisqualifyReason
}

export interface BatchPayload {
  count: Long
}

/*
 * An edge in a connection.

 */
export interface CommentEdge {
  node: Comment
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
  workflows?: Workflow[]
  workflowDefault?: Workflow
  invites?: Invite[]
  tags?: Tag[]
  name: String
}

export interface AggregateWorkflow {
  count: Int
}

export interface Field extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  type: FieldType
  label: String
}

/*
 * A connection to a list of items.

 */
export interface WorkflowConnection {
  pageInfo: PageInfo
  edges: WorkflowEdge[]
  aggregate: AggregateWorkflow
}

export interface CommentPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  content: String
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

export interface AggregateTask {
  count: Int
}

export interface JobPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  status: JobType
  department?: String
  name: String
  description?: String
  requirements?: String
}

/*
 * A connection to a list of items.

 */
export interface TaskConnection {
  pageInfo: PageInfo
  edges: TaskEdge[]
  aggregate: AggregateTask
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
export interface WorkspaceEdge {
  node: Workspace
  cursor: String
}

export interface ApplicationSubscriptionPayload {
  mutation: MutationType
  node?: Application
  updatedFields?: String[]
  previousValues?: ApplicationPreviousValues
}

export interface AggregateStage {
  count: Int
}

export interface ApplicationPreviousValues {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface StageConnection {
  pageInfo: PageInfo
  edges: StageEdge[]
  aggregate: AggregateStage
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
 * An edge in a connection.

 */
export interface EventEdge {
  node: Event
  cursor: String
}

export interface InviteSubscriptionPayload {
  mutation: MutationType
  node?: Invite
  updatedFields?: String[]
  previousValues?: InvitePreviousValues
}

export interface AggregateFile {
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
export interface FileConnection {
  pageInfo: PageInfo
  edges: FileEdge[]
  aggregate: AggregateFile
}

export interface Workflow extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description?: String
  stages?: Stage[]
  disqualifyReasons?: DisqualifyReason[]
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface NotificationSubscriptionPayload {
  mutation: MutationType
  node?: Notification
  updatedFields?: String[]
  previousValues?: NotificationPreviousValues
}

export interface AggregateCandidate {
  count: Int
}

export interface NotificationPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  type: NotificationType
}

/*
 * A connection to a list of items.

 */
export interface CandidateConnection {
  pageInfo: PageInfo
  edges: CandidateEdge[]
  aggregate: AggregateCandidate
}

export interface CommentSubscriptionPayload {
  mutation: MutationType
  node?: Comment
  updatedFields?: String[]
  previousValues?: CommentPreviousValues
}

/*
 * An edge in a connection.

 */
export interface LocationEdge {
  node: Location
  cursor: String
}

export interface FieldSubscriptionPayload {
  mutation: MutationType
  node?: Field
  updatedFields?: String[]
  previousValues?: FieldPreviousValues
}

export interface AggregateFieldLink {
  count: Int
}

export interface FieldPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  type: FieldType
  label: String
}

/*
 * A connection to a list of items.

 */
export interface FieldLinkConnection {
  pageInfo: PageInfo
  edges: FieldLinkEdge[]
  aggregate: AggregateFieldLink
}

export interface Comment extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  createdBy: User
  parent?: Comment
  content: String
}

/*
 * An edge in a connection.

 */
export interface FieldEdge {
  node: Field
  cursor: String
}

export interface FieldLinkSubscriptionPayload {
  mutation: MutationType
  node?: FieldLink
  updatedFields?: String[]
  previousValues?: FieldLinkPreviousValues
}

export interface AggregateNotification {
  count: Int
}

export interface FieldLinkPreviousValues {
  id: ID_Output
  value?: String
}

/*
 * A connection to a list of items.

 */
export interface NotificationConnection {
  pageInfo: PageInfo
  edges: NotificationEdge[]
  aggregate: AggregateNotification
}

export interface Stage extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description?: String
  type: StageType
}

/*
 * An edge in a connection.

 */
export interface InviteEdge {
  node: Invite
  cursor: String
}

export interface LocationSubscriptionPayload {
  mutation: MutationType
  node?: Location
  updatedFields?: String[]
  previousValues?: LocationPreviousValues
}

export interface AggregateApplication {
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
export interface ApplicationConnection {
  pageInfo: PageInfo
  edges: ApplicationEdge[]
  aggregate: AggregateApplication
}

export interface DisqualifyReason extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description?: String
}

/*
 * An edge in a connection.

 */
export interface JobEdge {
  node: Job
  cursor: String
}

export interface CandidateSubscriptionPayload {
  mutation: MutationType
  node?: Candidate
  updatedFields?: String[]
  previousValues?: CandidatePreviousValues
}

/*
 * An edge in a connection.

 */
export interface DisqualifyReasonEdge {
  node: DisqualifyReason
  cursor: String
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
  resumesString: String[]
  coverLettersString: String[]
  source: String[]
}

/*
 * A connection to a list of items.

 */
export interface CommentConnection {
  pageInfo: PageInfo
  edges: CommentEdge[]
  aggregate: AggregateComment
}

export interface Application extends Node {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  workspace: Workspace
  disqualifyReason?: DisqualifyReason
  job: Job
  candidate: Candidate
  stage?: Stage
}

export interface AggregateTag {
  count: Int
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
export interface TaskEdge {
  node: Task
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin?: DateTime
  deletedAt?: DateTime
  position?: String
}

/*
 * A connection to a list of items.

 */
export interface WorkspaceConnection {
  pageInfo: PageInfo
  edges: WorkspaceEdge[]
  aggregate: AggregateWorkspace
}

export interface Task extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  workspace: Workspace
  subscribers?: User[]
  owners?: User[]
  candidate?: Candidate
  title?: String
  description?: String
  dueAt?: DateTime
}

export interface AggregateEvent {
  count: Int
}

export interface FileSubscriptionPayload {
  mutation: MutationType
  node?: File
  updatedFields?: String[]
  previousValues?: FilePreviousValues
}

/*
 * An edge in a connection.

 */
export interface FileEdge {
  node: File
  cursor: String
}

export interface FilePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  size: Int
  type: String
  name: String
  url: String
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface FieldLink extends Node {
  id: ID_Output
  candidate: Candidate
  value?: String
}

export interface AggregateLocation {
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
export interface FieldLinkEdge {
  node: FieldLink
  cursor: String
}

export interface EventPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  type: EventType
  actorType: EventActorType
  targetType: EventTargetType
}

/*
 * A connection to a list of items.

 */
export interface FieldConnection {
  pageInfo: PageInfo
  edges: FieldEdge[]
  aggregate: AggregateField
}

export interface Tag extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  label: String
}

export interface AggregateInvite {
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
export interface ApplicationEdge {
  node: Application
  cursor: String
}

export interface StagePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description?: String
  type: StageType
}

export interface DisqualifyReasonSubscriptionPayload {
  mutation: MutationType
  node?: DisqualifyReason
  updatedFields?: String[]
  previousValues?: DisqualifyReasonPreviousValues
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

/*
 * An edge in a connection.

 */
export interface WorkflowEdge {
  node: Workflow
  cursor: String
}

export interface WorkspaceSubscriptionPayload {
  mutation: MutationType
  node?: Workspace
  updatedFields?: String[]
  previousValues?: WorkspacePreviousValues
}

export interface AggregateWorkspace {
  count: Int
}

export interface WorkspacePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
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

/*
 * An edge in a connection.

 */
export interface CandidateEdge {
  node: Candidate
  cursor: String
}

export interface TaskSubscriptionPayload {
  mutation: MutationType
  node?: Task
  updatedFields?: String[]
  previousValues?: TaskPreviousValues
}

export interface AggregateField {
  count: Int
}

export interface TaskPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  title?: String
  description?: String
  dueAt?: DateTime
}

/*
 * A connection to a list of items.

 */
export interface InviteConnection {
  pageInfo: PageInfo
  edges: InviteEdge[]
  aggregate: AggregateInvite
}

export interface Notification extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  type: NotificationType
  user: User
  event: Event
}

export interface AggregateComment {
  count: Int
}

export interface TagSubscriptionPayload {
  mutation: MutationType
  node?: Tag
  updatedFields?: String[]
  previousValues?: TagPreviousValues
}

/*
 * An edge in a connection.

 */
export interface StageEdge {
  node: Stage
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface LocationConnection {
  pageInfo: PageInfo
  edges: LocationEdge[]
  aggregate: AggregateLocation
}

export interface WorkflowPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description?: String
}

export interface WorkflowSubscriptionPayload {
  mutation: MutationType
  node?: Workflow
  updatedFields?: String[]
  previousValues?: WorkflowPreviousValues
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

export interface TagPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  label: String
}

/*
 * An edge in a connection.

 */
export interface NotificationEdge {
  node: Notification
  cursor: String
}

export interface AggregateUser {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface TagConnection {
  pageInfo: PageInfo
  edges: TagEdge[]
  aggregate: AggregateTag
}

export interface AggregateJob {
  count: Int
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

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

export type DateTime = Date | string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number