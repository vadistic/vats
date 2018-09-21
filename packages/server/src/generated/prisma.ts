import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    workspaces: <T = Workspace[]>(args: { where?: WorkspaceWhereInput, orderBy?: WorkspaceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    jobs: <T = Job[]>(args: { where?: JobWhereInput, orderBy?: JobOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    applications: <T = Application[]>(args: { where?: ApplicationWhereInput, orderBy?: ApplicationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notifications: <T = Notification[]>(args: { where?: NotificationWhereInput, orderBy?: NotificationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    disqualificationLinks: <T = DisqualificationLink[]>(args: { where?: DisqualificationLinkWhereInput, orderBy?: DisqualificationLinkOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    locations: <T = Location[]>(args: { where?: LocationWhereInput, orderBy?: LocationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    candidates: <T = Candidate[]>(args: { where?: CandidateWhereInput, orderBy?: CandidateOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    invites: <T = Invite[]>(args: { where?: InviteWhereInput, orderBy?: InviteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    files: <T = File[]>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    fieldLinks: <T = FieldLink[]>(args: { where?: FieldLinkWhereInput, orderBy?: FieldLinkOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    events: <T = Event[]>(args: { where?: EventWhereInput, orderBy?: EventOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    disqualifications: <T = Disqualification[]>(args: { where?: DisqualificationWhereInput, orderBy?: DisqualificationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stages: <T = Stage[]>(args: { where?: StageWhereInput, orderBy?: StageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tasks: <T = Task[]>(args: { where?: TaskWhereInput, orderBy?: TaskOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tags: <T = Tag[]>(args: { where?: TagWhereInput, orderBy?: TagOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    fields: <T = Field[]>(args: { where?: FieldWhereInput, orderBy?: FieldOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    workflows: <T = Workflow[]>(args: { where?: WorkflowWhereInput, orderBy?: WorkflowOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    comments: <T = Comment[]>(args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    workspace: <T = Workspace | null>(args: { where: WorkspaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    job: <T = Job | null>(args: { where: JobWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    application: <T = Application | null>(args: { where: ApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notification: <T = Notification | null>(args: { where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    disqualificationLink: <T = DisqualificationLink | null>(args: { where: DisqualificationLinkWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    location: <T = Location | null>(args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    candidate: <T = Candidate | null>(args: { where: CandidateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    invite: <T = Invite | null>(args: { where: InviteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    file: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    fieldLink: <T = FieldLink | null>(args: { where: FieldLinkWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    event: <T = Event | null>(args: { where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    disqualification: <T = Disqualification | null>(args: { where: DisqualificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stage: <T = Stage | null>(args: { where: StageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    task: <T = Task | null>(args: { where: TaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tag: <T = Tag | null>(args: { where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    field: <T = Field | null>(args: { where: FieldWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    workflow: <T = Workflow | null>(args: { where: WorkflowWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    comment: <T = Comment | null>(args: { where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    workspacesConnection: <T = WorkspaceConnection>(args: { where?: WorkspaceWhereInput, orderBy?: WorkspaceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    jobsConnection: <T = JobConnection>(args: { where?: JobWhereInput, orderBy?: JobOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    applicationsConnection: <T = ApplicationConnection>(args: { where?: ApplicationWhereInput, orderBy?: ApplicationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notificationsConnection: <T = NotificationConnection>(args: { where?: NotificationWhereInput, orderBy?: NotificationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    disqualificationLinksConnection: <T = DisqualificationLinkConnection>(args: { where?: DisqualificationLinkWhereInput, orderBy?: DisqualificationLinkOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    locationsConnection: <T = LocationConnection>(args: { where?: LocationWhereInput, orderBy?: LocationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    candidatesConnection: <T = CandidateConnection>(args: { where?: CandidateWhereInput, orderBy?: CandidateOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    invitesConnection: <T = InviteConnection>(args: { where?: InviteWhereInput, orderBy?: InviteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    filesConnection: <T = FileConnection>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    fieldLinksConnection: <T = FieldLinkConnection>(args: { where?: FieldLinkWhereInput, orderBy?: FieldLinkOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    eventsConnection: <T = EventConnection>(args: { where?: EventWhereInput, orderBy?: EventOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    disqualificationsConnection: <T = DisqualificationConnection>(args: { where?: DisqualificationWhereInput, orderBy?: DisqualificationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stagesConnection: <T = StageConnection>(args: { where?: StageWhereInput, orderBy?: StageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tasksConnection: <T = TaskConnection>(args: { where?: TaskWhereInput, orderBy?: TaskOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tagsConnection: <T = TagConnection>(args: { where?: TagWhereInput, orderBy?: TagOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    fieldsConnection: <T = FieldConnection>(args: { where?: FieldWhereInput, orderBy?: FieldOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    workflowsConnection: <T = WorkflowConnection>(args: { where?: WorkflowWhereInput, orderBy?: WorkflowOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    commentsConnection: <T = CommentConnection>(args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createWorkspace: <T = Workspace>(args: { data: WorkspaceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createJob: <T = Job>(args: { data: JobCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createApplication: <T = Application>(args: { data: ApplicationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createNotification: <T = Notification>(args: { data: NotificationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createDisqualificationLink: <T = DisqualificationLink>(args: { data: DisqualificationLinkCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLocation: <T = Location>(args: { data: LocationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCandidate: <T = Candidate>(args: { data: CandidateCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createInvite: <T = Invite>(args: { data: InviteCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFile: <T = File>(args: { data: FileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFieldLink: <T = FieldLink>(args: { data: FieldLinkCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createEvent: <T = Event>(args: { data: EventCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createDisqualification: <T = Disqualification>(args: { data: DisqualificationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createStage: <T = Stage>(args: { data: StageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTask: <T = Task>(args: { data: TaskCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTag: <T = Tag>(args: { data: TagCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createField: <T = Field>(args: { data: FieldCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createWorkflow: <T = Workflow>(args: { data: WorkflowCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createComment: <T = Comment>(args: { data: CommentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateWorkspace: <T = Workspace | null>(args: { data: WorkspaceUpdateInput, where: WorkspaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateJob: <T = Job | null>(args: { data: JobUpdateInput, where: JobWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateApplication: <T = Application | null>(args: { data: ApplicationUpdateInput, where: ApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateNotification: <T = Notification | null>(args: { data: NotificationUpdateInput, where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateDisqualificationLink: <T = DisqualificationLink | null>(args: { data: DisqualificationLinkUpdateInput, where: DisqualificationLinkWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLocation: <T = Location | null>(args: { data: LocationUpdateInput, where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCandidate: <T = Candidate | null>(args: { data: CandidateUpdateInput, where: CandidateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateInvite: <T = Invite | null>(args: { data: InviteUpdateInput, where: InviteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateFile: <T = File | null>(args: { data: FileUpdateInput, where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateFieldLink: <T = FieldLink | null>(args: { data: FieldLinkUpdateInput, where: FieldLinkWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateEvent: <T = Event | null>(args: { data: EventUpdateInput, where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateDisqualification: <T = Disqualification | null>(args: { data: DisqualificationUpdateInput, where: DisqualificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateStage: <T = Stage | null>(args: { data: StageUpdateInput, where: StageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTask: <T = Task | null>(args: { data: TaskUpdateInput, where: TaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTag: <T = Tag | null>(args: { data: TagUpdateInput, where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateField: <T = Field | null>(args: { data: FieldUpdateInput, where: FieldWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateWorkflow: <T = Workflow | null>(args: { data: WorkflowUpdateInput, where: WorkflowWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateComment: <T = Comment | null>(args: { data: CommentUpdateInput, where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteWorkspace: <T = Workspace | null>(args: { where: WorkspaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteJob: <T = Job | null>(args: { where: JobWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteApplication: <T = Application | null>(args: { where: ApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteNotification: <T = Notification | null>(args: { where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteDisqualificationLink: <T = DisqualificationLink | null>(args: { where: DisqualificationLinkWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLocation: <T = Location | null>(args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCandidate: <T = Candidate | null>(args: { where: CandidateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteInvite: <T = Invite | null>(args: { where: InviteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteFile: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteFieldLink: <T = FieldLink | null>(args: { where: FieldLinkWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteEvent: <T = Event | null>(args: { where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteDisqualification: <T = Disqualification | null>(args: { where: DisqualificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteStage: <T = Stage | null>(args: { where: StageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteTask: <T = Task | null>(args: { where: TaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteTag: <T = Tag | null>(args: { where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteField: <T = Field | null>(args: { where: FieldWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteWorkflow: <T = Workflow | null>(args: { where: WorkflowWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteComment: <T = Comment | null>(args: { where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertWorkspace: <T = Workspace>(args: { where: WorkspaceWhereUniqueInput, create: WorkspaceCreateInput, update: WorkspaceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertJob: <T = Job>(args: { where: JobWhereUniqueInput, create: JobCreateInput, update: JobUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertApplication: <T = Application>(args: { where: ApplicationWhereUniqueInput, create: ApplicationCreateInput, update: ApplicationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertNotification: <T = Notification>(args: { where: NotificationWhereUniqueInput, create: NotificationCreateInput, update: NotificationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertDisqualificationLink: <T = DisqualificationLink>(args: { where: DisqualificationLinkWhereUniqueInput, create: DisqualificationLinkCreateInput, update: DisqualificationLinkUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLocation: <T = Location>(args: { where: LocationWhereUniqueInput, create: LocationCreateInput, update: LocationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCandidate: <T = Candidate>(args: { where: CandidateWhereUniqueInput, create: CandidateCreateInput, update: CandidateUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertInvite: <T = Invite>(args: { where: InviteWhereUniqueInput, create: InviteCreateInput, update: InviteUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFile: <T = File>(args: { where: FileWhereUniqueInput, create: FileCreateInput, update: FileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFieldLink: <T = FieldLink>(args: { where: FieldLinkWhereUniqueInput, create: FieldLinkCreateInput, update: FieldLinkUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertEvent: <T = Event>(args: { where: EventWhereUniqueInput, create: EventCreateInput, update: EventUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertDisqualification: <T = Disqualification>(args: { where: DisqualificationWhereUniqueInput, create: DisqualificationCreateInput, update: DisqualificationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertStage: <T = Stage>(args: { where: StageWhereUniqueInput, create: StageCreateInput, update: StageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTask: <T = Task>(args: { where: TaskWhereUniqueInput, create: TaskCreateInput, update: TaskUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTag: <T = Tag>(args: { where: TagWhereUniqueInput, create: TagCreateInput, update: TagUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertField: <T = Field>(args: { where: FieldWhereUniqueInput, create: FieldCreateInput, update: FieldUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertWorkflow: <T = Workflow>(args: { where: WorkflowWhereUniqueInput, create: WorkflowCreateInput, update: WorkflowUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertComment: <T = Comment>(args: { where: CommentWhereUniqueInput, create: CommentCreateInput, update: CommentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyWorkspaces: <T = BatchPayload>(args: { data: WorkspaceUpdateInput, where?: WorkspaceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyJobs: <T = BatchPayload>(args: { data: JobUpdateInput, where?: JobWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyApplications: <T = BatchPayload>(args: { data: ApplicationUpdateInput, where?: ApplicationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyNotifications: <T = BatchPayload>(args: { data: NotificationUpdateInput, where?: NotificationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyDisqualificationLinks: <T = BatchPayload>(args: { data: DisqualificationLinkUpdateInput, where?: DisqualificationLinkWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLocations: <T = BatchPayload>(args: { data: LocationUpdateInput, where?: LocationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCandidates: <T = BatchPayload>(args: { data: CandidateUpdateInput, where?: CandidateWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyInvites: <T = BatchPayload>(args: { data: InviteUpdateInput, where?: InviteWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFiles: <T = BatchPayload>(args: { data: FileUpdateInput, where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFieldLinks: <T = BatchPayload>(args: { data: FieldLinkUpdateInput, where?: FieldLinkWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyEvents: <T = BatchPayload>(args: { data: EventUpdateInput, where?: EventWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyDisqualifications: <T = BatchPayload>(args: { data: DisqualificationUpdateInput, where?: DisqualificationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyStages: <T = BatchPayload>(args: { data: StageUpdateInput, where?: StageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTasks: <T = BatchPayload>(args: { data: TaskUpdateInput, where?: TaskWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTags: <T = BatchPayload>(args: { data: TagUpdateInput, where?: TagWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFields: <T = BatchPayload>(args: { data: FieldUpdateInput, where?: FieldWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyWorkflows: <T = BatchPayload>(args: { data: WorkflowUpdateInput, where?: WorkflowWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyComments: <T = BatchPayload>(args: { data: CommentUpdateInput, where?: CommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyWorkspaces: <T = BatchPayload>(args: { where?: WorkspaceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyJobs: <T = BatchPayload>(args: { where?: JobWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyApplications: <T = BatchPayload>(args: { where?: ApplicationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyNotifications: <T = BatchPayload>(args: { where?: NotificationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyDisqualificationLinks: <T = BatchPayload>(args: { where?: DisqualificationLinkWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLocations: <T = BatchPayload>(args: { where?: LocationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCandidates: <T = BatchPayload>(args: { where?: CandidateWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyInvites: <T = BatchPayload>(args: { where?: InviteWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFiles: <T = BatchPayload>(args: { where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFieldLinks: <T = BatchPayload>(args: { where?: FieldLinkWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyEvents: <T = BatchPayload>(args: { where?: EventWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyDisqualifications: <T = BatchPayload>(args: { where?: DisqualificationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyStages: <T = BatchPayload>(args: { where?: StageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTasks: <T = BatchPayload>(args: { where?: TaskWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTags: <T = BatchPayload>(args: { where?: TagWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFields: <T = BatchPayload>(args: { where?: FieldWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyWorkflows: <T = BatchPayload>(args: { where?: WorkflowWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyComments: <T = BatchPayload>(args: { where?: CommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    workspace: <T = WorkspaceSubscriptionPayload | null>(args: { where?: WorkspaceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    job: <T = JobSubscriptionPayload | null>(args: { where?: JobSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    application: <T = ApplicationSubscriptionPayload | null>(args: { where?: ApplicationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    notification: <T = NotificationSubscriptionPayload | null>(args: { where?: NotificationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    disqualificationLink: <T = DisqualificationLinkSubscriptionPayload | null>(args: { where?: DisqualificationLinkSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    location: <T = LocationSubscriptionPayload | null>(args: { where?: LocationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    candidate: <T = CandidateSubscriptionPayload | null>(args: { where?: CandidateSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    invite: <T = InviteSubscriptionPayload | null>(args: { where?: InviteSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    file: <T = FileSubscriptionPayload | null>(args: { where?: FileSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    fieldLink: <T = FieldLinkSubscriptionPayload | null>(args: { where?: FieldLinkSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    event: <T = EventSubscriptionPayload | null>(args: { where?: EventSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    disqualification: <T = DisqualificationSubscriptionPayload | null>(args: { where?: DisqualificationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    stage: <T = StageSubscriptionPayload | null>(args: { where?: StageSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    task: <T = TaskSubscriptionPayload | null>(args: { where?: TaskSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    tag: <T = TagSubscriptionPayload | null>(args: { where?: TagSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    field: <T = FieldSubscriptionPayload | null>(args: { where?: FieldSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    workflow: <T = WorkflowSubscriptionPayload | null>(args: { where?: WorkflowSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    comment: <T = CommentSubscriptionPayload | null>(args: { where?: CommentSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Workspace: (where?: WorkspaceWhereInput) => Promise<boolean>
  Job: (where?: JobWhereInput) => Promise<boolean>
  Application: (where?: ApplicationWhereInput) => Promise<boolean>
  Notification: (where?: NotificationWhereInput) => Promise<boolean>
  DisqualificationLink: (where?: DisqualificationLinkWhereInput) => Promise<boolean>
  Location: (where?: LocationWhereInput) => Promise<boolean>
  Candidate: (where?: CandidateWhereInput) => Promise<boolean>
  Invite: (where?: InviteWhereInput) => Promise<boolean>
  File: (where?: FileWhereInput) => Promise<boolean>
  FieldLink: (where?: FieldLinkWhereInput) => Promise<boolean>
  Event: (where?: EventWhereInput) => Promise<boolean>
  Disqualification: (where?: DisqualificationWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  Stage: (where?: StageWhereInput) => Promise<boolean>
  Task: (where?: TaskWhereInput) => Promise<boolean>
  Tag: (where?: TagWhereInput) => Promise<boolean>
  Field: (where?: FieldWhereInput) => Promise<boolean>
  Workflow: (where?: WorkflowWhereInput) => Promise<boolean>
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

type AggregateDisqualification {
  count: Int!
}

type AggregateDisqualificationLink {
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
  type: ApplicationType!
  disqualificationLink(where: DisqualificationLinkWhereInput): DisqualificationLink
  stage(where: StageWhereInput): Stage!
  job(where: JobWhereInput): Job!
  candidate(where: CandidateWhereInput): Candidate!
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
  type: ApplicationType!
  disqualificationLink: DisqualificationLinkCreateOneInput
  stage: StageCreateOneInput!
  job: JobCreateOneWithoutApplicationsInput!
  candidate: CandidateCreateOneWithoutApplicationsInput!
}

input ApplicationCreateManyWithoutCandidateInput {
  create: [ApplicationCreateWithoutCandidateInput!]
  connect: [ApplicationWhereUniqueInput!]
}

input ApplicationCreateManyWithoutJobInput {
  create: [ApplicationCreateWithoutJobInput!]
  connect: [ApplicationWhereUniqueInput!]
}

input ApplicationCreateWithoutCandidateInput {
  type: ApplicationType!
  disqualificationLink: DisqualificationLinkCreateOneInput
  stage: StageCreateOneInput!
  job: JobCreateOneWithoutApplicationsInput!
}

input ApplicationCreateWithoutJobInput {
  type: ApplicationType!
  disqualificationLink: DisqualificationLinkCreateOneInput
  stage: StageCreateOneInput!
  candidate: CandidateCreateOneWithoutApplicationsInput!
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
  type_ASC
  type_DESC
}

type ApplicationPreviousValues {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  type: ApplicationType!
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

enum ApplicationType {
  Qualified
  Disqualified
}

input ApplicationUpdateInput {
  type: ApplicationType
  disqualificationLink: DisqualificationLinkUpdateOneInput
  stage: StageUpdateOneRequiredInput
  job: JobUpdateOneRequiredWithoutApplicationsInput
  candidate: CandidateUpdateOneRequiredWithoutApplicationsInput
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

input ApplicationUpdateWithoutCandidateDataInput {
  type: ApplicationType
  disqualificationLink: DisqualificationLinkUpdateOneInput
  stage: StageUpdateOneRequiredInput
  job: JobUpdateOneRequiredWithoutApplicationsInput
}

input ApplicationUpdateWithoutJobDataInput {
  type: ApplicationType
  disqualificationLink: DisqualificationLinkUpdateOneInput
  stage: StageUpdateOneRequiredInput
  candidate: CandidateUpdateOneRequiredWithoutApplicationsInput
}

input ApplicationUpdateWithWhereUniqueWithoutCandidateInput {
  where: ApplicationWhereUniqueInput!
  data: ApplicationUpdateWithoutCandidateDataInput!
}

input ApplicationUpdateWithWhereUniqueWithoutJobInput {
  where: ApplicationWhereUniqueInput!
  data: ApplicationUpdateWithoutJobDataInput!
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
  type: ApplicationType

  """All values that are not equal to given value."""
  type_not: ApplicationType

  """All values that are contained in given list."""
  type_in: [ApplicationType!]

  """All values that are not contained in given list."""
  type_not_in: [ApplicationType!]
  disqualificationLink: DisqualificationLinkWhereInput
  stage: StageWhereInput
  job: JobWhereInput
  candidate: CandidateWhereInput
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
  fields: FieldLinkCreateManyInput
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
  fields: FieldLinkCreateManyInput
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
  fields: FieldLinkCreateManyInput
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
  fields: FieldLinkCreateManyInput
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
  fields: FieldLinkCreateManyInput
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
  fields: FieldLinkCreateManyInput
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
  fields: FieldLinkUpdateManyInput
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
  fields: FieldLinkUpdateManyInput
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
  fields: FieldLinkUpdateManyInput
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
  fields: FieldLinkUpdateManyInput
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
  fields: FieldLinkUpdateManyInput
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
  fields: FieldLinkUpdateManyInput
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
  fields: FieldLinkUpdateManyInput
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

type Disqualification implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  description: String
}

"""A connection to a list of items."""
type DisqualificationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [DisqualificationEdge]!
  aggregate: AggregateDisqualification!
}

input DisqualificationCreateInput {
  name: String!
  description: String
}

input DisqualificationCreateManyInput {
  create: [DisqualificationCreateInput!]
  connect: [DisqualificationWhereUniqueInput!]
}

input DisqualificationCreateOneInput {
  create: DisqualificationCreateInput
  connect: DisqualificationWhereUniqueInput
}

"""An edge in a connection."""
type DisqualificationEdge {
  """The item at the end of the edge."""
  node: Disqualification!

  """A cursor for use in pagination."""
  cursor: String!
}

type DisqualificationLink implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  disqualification(where: DisqualificationWhereInput): Disqualification!
  createdBy(where: UserWhereInput): User!
  justification: String
}

"""A connection to a list of items."""
type DisqualificationLinkConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [DisqualificationLinkEdge]!
  aggregate: AggregateDisqualificationLink!
}

input DisqualificationLinkCreateInput {
  justification: String
  disqualification: DisqualificationCreateOneInput!
  createdBy: UserCreateOneInput!
}

input DisqualificationLinkCreateOneInput {
  create: DisqualificationLinkCreateInput
  connect: DisqualificationLinkWhereUniqueInput
}

"""An edge in a connection."""
type DisqualificationLinkEdge {
  """The item at the end of the edge."""
  node: DisqualificationLink!

  """A cursor for use in pagination."""
  cursor: String!
}

enum DisqualificationLinkOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  justification_ASC
  justification_DESC
}

type DisqualificationLinkPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  justification: String
}

type DisqualificationLinkSubscriptionPayload {
  mutation: MutationType!
  node: DisqualificationLink
  updatedFields: [String!]
  previousValues: DisqualificationLinkPreviousValues
}

input DisqualificationLinkSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [DisqualificationLinkSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [DisqualificationLinkSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DisqualificationLinkSubscriptionWhereInput!]

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
  node: DisqualificationLinkWhereInput
}

input DisqualificationLinkUpdateDataInput {
  justification: String
  disqualification: DisqualificationUpdateOneRequiredInput
  createdBy: UserUpdateOneRequiredInput
}

input DisqualificationLinkUpdateInput {
  justification: String
  disqualification: DisqualificationUpdateOneRequiredInput
  createdBy: UserUpdateOneRequiredInput
}

input DisqualificationLinkUpdateOneInput {
  create: DisqualificationLinkCreateInput
  connect: DisqualificationLinkWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: DisqualificationLinkUpdateDataInput
  upsert: DisqualificationLinkUpsertNestedInput
}

input DisqualificationLinkUpsertNestedInput {
  update: DisqualificationLinkUpdateDataInput!
  create: DisqualificationLinkCreateInput!
}

input DisqualificationLinkWhereInput {
  """Logical AND on all given filters."""
  AND: [DisqualificationLinkWhereInput!]

  """Logical OR on all given filters."""
  OR: [DisqualificationLinkWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DisqualificationLinkWhereInput!]
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
  justification: String

  """All values that are not equal to given value."""
  justification_not: String

  """All values that are contained in given list."""
  justification_in: [String!]

  """All values that are not contained in given list."""
  justification_not_in: [String!]

  """All values less than the given value."""
  justification_lt: String

  """All values less than or equal the given value."""
  justification_lte: String

  """All values greater than the given value."""
  justification_gt: String

  """All values greater than or equal the given value."""
  justification_gte: String

  """All values containing the given string."""
  justification_contains: String

  """All values not containing the given string."""
  justification_not_contains: String

  """All values starting with the given string."""
  justification_starts_with: String

  """All values not starting with the given string."""
  justification_not_starts_with: String

  """All values ending with the given string."""
  justification_ends_with: String

  """All values not ending with the given string."""
  justification_not_ends_with: String
  disqualification: DisqualificationWhereInput
  createdBy: UserWhereInput
}

input DisqualificationLinkWhereUniqueInput {
  id: ID
}

enum DisqualificationOrderByInput {
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

type DisqualificationPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  description: String
}

type DisqualificationSubscriptionPayload {
  mutation: MutationType!
  node: Disqualification
  updatedFields: [String!]
  previousValues: DisqualificationPreviousValues
}

input DisqualificationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [DisqualificationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [DisqualificationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DisqualificationSubscriptionWhereInput!]

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
  node: DisqualificationWhereInput
}

input DisqualificationUpdateDataInput {
  name: String
  description: String
}

input DisqualificationUpdateInput {
  name: String
  description: String
}

input DisqualificationUpdateManyInput {
  create: [DisqualificationCreateInput!]
  connect: [DisqualificationWhereUniqueInput!]
  disconnect: [DisqualificationWhereUniqueInput!]
  delete: [DisqualificationWhereUniqueInput!]
  update: [DisqualificationUpdateWithWhereUniqueNestedInput!]
  upsert: [DisqualificationUpsertWithWhereUniqueNestedInput!]
}

input DisqualificationUpdateOneRequiredInput {
  create: DisqualificationCreateInput
  connect: DisqualificationWhereUniqueInput
  update: DisqualificationUpdateDataInput
  upsert: DisqualificationUpsertNestedInput
}

input DisqualificationUpdateWithWhereUniqueNestedInput {
  where: DisqualificationWhereUniqueInput!
  data: DisqualificationUpdateDataInput!
}

input DisqualificationUpsertNestedInput {
  update: DisqualificationUpdateDataInput!
  create: DisqualificationCreateInput!
}

input DisqualificationUpsertWithWhereUniqueNestedInput {
  where: DisqualificationWhereUniqueInput!
  update: DisqualificationUpdateDataInput!
  create: DisqualificationCreateInput!
}

input DisqualificationWhereInput {
  """Logical AND on all given filters."""
  AND: [DisqualificationWhereInput!]

  """Logical OR on all given filters."""
  OR: [DisqualificationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DisqualificationWhereInput!]
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

input DisqualificationWhereUniqueInput {
  id: ID
}

type Event implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
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
  System
  User
  Candidate
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
  Candidate
  Job
  Task
  Workspace
}

enum EventType {
  Default
  Message
  CommentCreate
  CommentEdit
  CommentDelete
}

input EventUpdateDataInput {
  type: EventType
  actorType: EventActorType
  targetType: EventTargetType
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

input FieldCreateManyInput {
  create: [FieldCreateInput!]
  connect: [FieldWhereUniqueInput!]
}

input FieldCreateOneInput {
  create: FieldCreateInput
  connect: FieldWhereUniqueInput
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
  createdAt: DateTime!
  updatedAt: DateTime!
  field(where: FieldWhereInput): Field!
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
  field: FieldCreateOneInput!
}

input FieldLinkCreateManyInput {
  create: [FieldLinkCreateInput!]
  connect: [FieldLinkWhereUniqueInput!]
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
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  value_ASC
  value_DESC
}

type FieldLinkPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
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

input FieldLinkUpdateDataInput {
  value: String
  field: FieldUpdateOneRequiredInput
}

input FieldLinkUpdateInput {
  value: String
  field: FieldUpdateOneRequiredInput
}

input FieldLinkUpdateManyInput {
  create: [FieldLinkCreateInput!]
  connect: [FieldLinkWhereUniqueInput!]
  disconnect: [FieldLinkWhereUniqueInput!]
  delete: [FieldLinkWhereUniqueInput!]
  update: [FieldLinkUpdateWithWhereUniqueNestedInput!]
  upsert: [FieldLinkUpsertWithWhereUniqueNestedInput!]
}

input FieldLinkUpdateWithWhereUniqueNestedInput {
  where: FieldLinkWhereUniqueInput!
  data: FieldLinkUpdateDataInput!
}

input FieldLinkUpsertWithWhereUniqueNestedInput {
  where: FieldLinkWhereUniqueInput!
  update: FieldLinkUpdateDataInput!
  create: FieldLinkCreateInput!
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
  field: FieldWhereInput
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
  Int
  Float
  String
  Text
  Boolean
  DateTime
}

input FieldUpdateDataInput {
  type: FieldType
  label: String
}

input FieldUpdateInput {
  type: FieldType
  label: String
}

input FieldUpdateManyInput {
  create: [FieldCreateInput!]
  connect: [FieldWhereUniqueInput!]
  disconnect: [FieldWhereUniqueInput!]
  delete: [FieldWhereUniqueInput!]
  update: [FieldUpdateWithWhereUniqueNestedInput!]
  upsert: [FieldUpsertWithWhereUniqueNestedInput!]
}

input FieldUpdateOneRequiredInput {
  create: FieldCreateInput
  connect: FieldWhereUniqueInput
  update: FieldUpdateDataInput
  upsert: FieldUpsertNestedInput
}

input FieldUpdateWithWhereUniqueNestedInput {
  where: FieldWhereUniqueInput!
  data: FieldUpdateDataInput!
}

input FieldUpsertNestedInput {
  update: FieldUpdateDataInput!
  create: FieldCreateInput!
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
  invitedBy: UserCreateOneInput!
}

input InviteCreateManyInput {
  create: [InviteCreateInput!]
  connect: [InviteWhereUniqueInput!]
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

input InviteUpdateDataInput {
  email: String
  expireAt: DateTime
  invitedBy: UserUpdateOneRequiredInput
}

input InviteUpdateInput {
  email: String
  expireAt: DateTime
  invitedBy: UserUpdateOneRequiredInput
}

input InviteUpdateManyInput {
  create: [InviteCreateInput!]
  connect: [InviteWhereUniqueInput!]
  disconnect: [InviteWhereUniqueInput!]
  delete: [InviteWhereUniqueInput!]
  update: [InviteUpdateWithWhereUniqueNestedInput!]
  upsert: [InviteUpsertWithWhereUniqueNestedInput!]
}

input InviteUpdateWithWhereUniqueNestedInput {
  where: InviteWhereUniqueInput!
  data: InviteUpdateDataInput!
}

input InviteUpsertWithWhereUniqueNestedInput {
  where: InviteWhereUniqueInput!
  update: InviteUpdateDataInput!
  create: InviteCreateInput!
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
  type: JobType!
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
  type: JobType!
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
  type: JobType!
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
  type: JobType!
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
  type: JobType!
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
  type: JobType!
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
  type_ASC
  type_DESC
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
  type: JobType!
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
  Draft
  Published
  Archived
}

input JobUpdateInput {
  type: JobType
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
  type: JobType
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
  type: JobType
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
  type: JobType
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
  type: JobType
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
  type: JobType

  """All values that are not equal to given value."""
  type_not: JobType

  """All values that are contained in given list."""
  type_in: [JobType!]

  """All values that are not contained in given list."""
  type_not_in: [JobType!]
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
  createWorkspace(data: WorkspaceCreateInput!): Workspace!
  createJob(data: JobCreateInput!): Job!
  createApplication(data: ApplicationCreateInput!): Application!
  createNotification(data: NotificationCreateInput!): Notification!
  createDisqualificationLink(data: DisqualificationLinkCreateInput!): DisqualificationLink!
  createLocation(data: LocationCreateInput!): Location!
  createCandidate(data: CandidateCreateInput!): Candidate!
  createInvite(data: InviteCreateInput!): Invite!
  createFile(data: FileCreateInput!): File!
  createFieldLink(data: FieldLinkCreateInput!): FieldLink!
  createEvent(data: EventCreateInput!): Event!
  createDisqualification(data: DisqualificationCreateInput!): Disqualification!
  createUser(data: UserCreateInput!): User!
  createStage(data: StageCreateInput!): Stage!
  createTask(data: TaskCreateInput!): Task!
  createTag(data: TagCreateInput!): Tag!
  createField(data: FieldCreateInput!): Field!
  createWorkflow(data: WorkflowCreateInput!): Workflow!
  createComment(data: CommentCreateInput!): Comment!
  updateWorkspace(data: WorkspaceUpdateInput!, where: WorkspaceWhereUniqueInput!): Workspace
  updateJob(data: JobUpdateInput!, where: JobWhereUniqueInput!): Job
  updateApplication(data: ApplicationUpdateInput!, where: ApplicationWhereUniqueInput!): Application
  updateNotification(data: NotificationUpdateInput!, where: NotificationWhereUniqueInput!): Notification
  updateDisqualificationLink(data: DisqualificationLinkUpdateInput!, where: DisqualificationLinkWhereUniqueInput!): DisqualificationLink
  updateLocation(data: LocationUpdateInput!, where: LocationWhereUniqueInput!): Location
  updateCandidate(data: CandidateUpdateInput!, where: CandidateWhereUniqueInput!): Candidate
  updateInvite(data: InviteUpdateInput!, where: InviteWhereUniqueInput!): Invite
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  updateFieldLink(data: FieldLinkUpdateInput!, where: FieldLinkWhereUniqueInput!): FieldLink
  updateEvent(data: EventUpdateInput!, where: EventWhereUniqueInput!): Event
  updateDisqualification(data: DisqualificationUpdateInput!, where: DisqualificationWhereUniqueInput!): Disqualification
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateStage(data: StageUpdateInput!, where: StageWhereUniqueInput!): Stage
  updateTask(data: TaskUpdateInput!, where: TaskWhereUniqueInput!): Task
  updateTag(data: TagUpdateInput!, where: TagWhereUniqueInput!): Tag
  updateField(data: FieldUpdateInput!, where: FieldWhereUniqueInput!): Field
  updateWorkflow(data: WorkflowUpdateInput!, where: WorkflowWhereUniqueInput!): Workflow
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  deleteWorkspace(where: WorkspaceWhereUniqueInput!): Workspace
  deleteJob(where: JobWhereUniqueInput!): Job
  deleteApplication(where: ApplicationWhereUniqueInput!): Application
  deleteNotification(where: NotificationWhereUniqueInput!): Notification
  deleteDisqualificationLink(where: DisqualificationLinkWhereUniqueInput!): DisqualificationLink
  deleteLocation(where: LocationWhereUniqueInput!): Location
  deleteCandidate(where: CandidateWhereUniqueInput!): Candidate
  deleteInvite(where: InviteWhereUniqueInput!): Invite
  deleteFile(where: FileWhereUniqueInput!): File
  deleteFieldLink(where: FieldLinkWhereUniqueInput!): FieldLink
  deleteEvent(where: EventWhereUniqueInput!): Event
  deleteDisqualification(where: DisqualificationWhereUniqueInput!): Disqualification
  deleteUser(where: UserWhereUniqueInput!): User
  deleteStage(where: StageWhereUniqueInput!): Stage
  deleteTask(where: TaskWhereUniqueInput!): Task
  deleteTag(where: TagWhereUniqueInput!): Tag
  deleteField(where: FieldWhereUniqueInput!): Field
  deleteWorkflow(where: WorkflowWhereUniqueInput!): Workflow
  deleteComment(where: CommentWhereUniqueInput!): Comment
  upsertWorkspace(where: WorkspaceWhereUniqueInput!, create: WorkspaceCreateInput!, update: WorkspaceUpdateInput!): Workspace!
  upsertJob(where: JobWhereUniqueInput!, create: JobCreateInput!, update: JobUpdateInput!): Job!
  upsertApplication(where: ApplicationWhereUniqueInput!, create: ApplicationCreateInput!, update: ApplicationUpdateInput!): Application!
  upsertNotification(where: NotificationWhereUniqueInput!, create: NotificationCreateInput!, update: NotificationUpdateInput!): Notification!
  upsertDisqualificationLink(where: DisqualificationLinkWhereUniqueInput!, create: DisqualificationLinkCreateInput!, update: DisqualificationLinkUpdateInput!): DisqualificationLink!
  upsertLocation(where: LocationWhereUniqueInput!, create: LocationCreateInput!, update: LocationUpdateInput!): Location!
  upsertCandidate(where: CandidateWhereUniqueInput!, create: CandidateCreateInput!, update: CandidateUpdateInput!): Candidate!
  upsertInvite(where: InviteWhereUniqueInput!, create: InviteCreateInput!, update: InviteUpdateInput!): Invite!
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  upsertFieldLink(where: FieldLinkWhereUniqueInput!, create: FieldLinkCreateInput!, update: FieldLinkUpdateInput!): FieldLink!
  upsertEvent(where: EventWhereUniqueInput!, create: EventCreateInput!, update: EventUpdateInput!): Event!
  upsertDisqualification(where: DisqualificationWhereUniqueInput!, create: DisqualificationCreateInput!, update: DisqualificationUpdateInput!): Disqualification!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertStage(where: StageWhereUniqueInput!, create: StageCreateInput!, update: StageUpdateInput!): Stage!
  upsertTask(where: TaskWhereUniqueInput!, create: TaskCreateInput!, update: TaskUpdateInput!): Task!
  upsertTag(where: TagWhereUniqueInput!, create: TagCreateInput!, update: TagUpdateInput!): Tag!
  upsertField(where: FieldWhereUniqueInput!, create: FieldCreateInput!, update: FieldUpdateInput!): Field!
  upsertWorkflow(where: WorkflowWhereUniqueInput!, create: WorkflowCreateInput!, update: WorkflowUpdateInput!): Workflow!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  updateManyWorkspaces(data: WorkspaceUpdateInput!, where: WorkspaceWhereInput): BatchPayload!
  updateManyJobs(data: JobUpdateInput!, where: JobWhereInput): BatchPayload!
  updateManyApplications(data: ApplicationUpdateInput!, where: ApplicationWhereInput): BatchPayload!
  updateManyNotifications(data: NotificationUpdateInput!, where: NotificationWhereInput): BatchPayload!
  updateManyDisqualificationLinks(data: DisqualificationLinkUpdateInput!, where: DisqualificationLinkWhereInput): BatchPayload!
  updateManyLocations(data: LocationUpdateInput!, where: LocationWhereInput): BatchPayload!
  updateManyCandidates(data: CandidateUpdateInput!, where: CandidateWhereInput): BatchPayload!
  updateManyInvites(data: InviteUpdateInput!, where: InviteWhereInput): BatchPayload!
  updateManyFiles(data: FileUpdateInput!, where: FileWhereInput): BatchPayload!
  updateManyFieldLinks(data: FieldLinkUpdateInput!, where: FieldLinkWhereInput): BatchPayload!
  updateManyEvents(data: EventUpdateInput!, where: EventWhereInput): BatchPayload!
  updateManyDisqualifications(data: DisqualificationUpdateInput!, where: DisqualificationWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyStages(data: StageUpdateInput!, where: StageWhereInput): BatchPayload!
  updateManyTasks(data: TaskUpdateInput!, where: TaskWhereInput): BatchPayload!
  updateManyTags(data: TagUpdateInput!, where: TagWhereInput): BatchPayload!
  updateManyFields(data: FieldUpdateInput!, where: FieldWhereInput): BatchPayload!
  updateManyWorkflows(data: WorkflowUpdateInput!, where: WorkflowWhereInput): BatchPayload!
  updateManyComments(data: CommentUpdateInput!, where: CommentWhereInput): BatchPayload!
  deleteManyWorkspaces(where: WorkspaceWhereInput): BatchPayload!
  deleteManyJobs(where: JobWhereInput): BatchPayload!
  deleteManyApplications(where: ApplicationWhereInput): BatchPayload!
  deleteManyNotifications(where: NotificationWhereInput): BatchPayload!
  deleteManyDisqualificationLinks(where: DisqualificationLinkWhereInput): BatchPayload!
  deleteManyLocations(where: LocationWhereInput): BatchPayload!
  deleteManyCandidates(where: CandidateWhereInput): BatchPayload!
  deleteManyInvites(where: InviteWhereInput): BatchPayload!
  deleteManyFiles(where: FileWhereInput): BatchPayload!
  deleteManyFieldLinks(where: FieldLinkWhereInput): BatchPayload!
  deleteManyEvents(where: EventWhereInput): BatchPayload!
  deleteManyDisqualifications(where: DisqualificationWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyStages(where: StageWhereInput): BatchPayload!
  deleteManyTasks(where: TaskWhereInput): BatchPayload!
  deleteManyTags(where: TagWhereInput): BatchPayload!
  deleteManyFields(where: FieldWhereInput): BatchPayload!
  deleteManyWorkflows(where: WorkflowWhereInput): BatchPayload!
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
  Unread
  Read
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
  workspaces(where: WorkspaceWhereInput, orderBy: WorkspaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Workspace]!
  jobs(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Job]!
  applications(where: ApplicationWhereInput, orderBy: ApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Application]!
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification]!
  disqualificationLinks(where: DisqualificationLinkWhereInput, orderBy: DisqualificationLinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [DisqualificationLink]!
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  candidates(where: CandidateWhereInput, orderBy: CandidateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Candidate]!
  invites(where: InviteWhereInput, orderBy: InviteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invite]!
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  fieldLinks(where: FieldLinkWhereInput, orderBy: FieldLinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FieldLink]!
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event]!
  disqualifications(where: DisqualificationWhereInput, orderBy: DisqualificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Disqualification]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  stages(where: StageWhereInput, orderBy: StageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stage]!
  tasks(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Task]!
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag]!
  fields(where: FieldWhereInput, orderBy: FieldOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Field]!
  workflows(where: WorkflowWhereInput, orderBy: WorkflowOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Workflow]!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  workspace(where: WorkspaceWhereUniqueInput!): Workspace
  job(where: JobWhereUniqueInput!): Job
  application(where: ApplicationWhereUniqueInput!): Application
  notification(where: NotificationWhereUniqueInput!): Notification
  disqualificationLink(where: DisqualificationLinkWhereUniqueInput!): DisqualificationLink
  location(where: LocationWhereUniqueInput!): Location
  candidate(where: CandidateWhereUniqueInput!): Candidate
  invite(where: InviteWhereUniqueInput!): Invite
  file(where: FileWhereUniqueInput!): File
  fieldLink(where: FieldLinkWhereUniqueInput!): FieldLink
  event(where: EventWhereUniqueInput!): Event
  disqualification(where: DisqualificationWhereUniqueInput!): Disqualification
  user(where: UserWhereUniqueInput!): User
  stage(where: StageWhereUniqueInput!): Stage
  task(where: TaskWhereUniqueInput!): Task
  tag(where: TagWhereUniqueInput!): Tag
  field(where: FieldWhereUniqueInput!): Field
  workflow(where: WorkflowWhereUniqueInput!): Workflow
  comment(where: CommentWhereUniqueInput!): Comment
  workspacesConnection(where: WorkspaceWhereInput, orderBy: WorkspaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WorkspaceConnection!
  jobsConnection(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): JobConnection!
  applicationsConnection(where: ApplicationWhereInput, orderBy: ApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ApplicationConnection!
  notificationsConnection(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NotificationConnection!
  disqualificationLinksConnection(where: DisqualificationLinkWhereInput, orderBy: DisqualificationLinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DisqualificationLinkConnection!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  candidatesConnection(where: CandidateWhereInput, orderBy: CandidateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CandidateConnection!
  invitesConnection(where: InviteWhereInput, orderBy: InviteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): InviteConnection!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!
  fieldLinksConnection(where: FieldLinkWhereInput, orderBy: FieldLinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FieldLinkConnection!
  eventsConnection(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventConnection!
  disqualificationsConnection(where: DisqualificationWhereInput, orderBy: DisqualificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DisqualificationConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  stagesConnection(where: StageWhereInput, orderBy: StageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StageConnection!
  tasksConnection(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TaskConnection!
  tagsConnection(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TagConnection!
  fieldsConnection(where: FieldWhereInput, orderBy: FieldOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FieldConnection!
  workflowsConnection(where: WorkflowWhereInput, orderBy: WorkflowOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WorkflowConnection!
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
  New
  Pipeline
  Final
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

input StageUpdateOneRequiredInput {
  create: StageCreateInput
  connect: StageWhereUniqueInput
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
  workspace(where: WorkspaceSubscriptionWhereInput): WorkspaceSubscriptionPayload
  job(where: JobSubscriptionWhereInput): JobSubscriptionPayload
  application(where: ApplicationSubscriptionWhereInput): ApplicationSubscriptionPayload
  notification(where: NotificationSubscriptionWhereInput): NotificationSubscriptionPayload
  disqualificationLink(where: DisqualificationLinkSubscriptionWhereInput): DisqualificationLinkSubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  candidate(where: CandidateSubscriptionWhereInput): CandidateSubscriptionPayload
  invite(where: InviteSubscriptionWhereInput): InviteSubscriptionPayload
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
  fieldLink(where: FieldLinkSubscriptionWhereInput): FieldLinkSubscriptionPayload
  event(where: EventSubscriptionWhereInput): EventSubscriptionPayload
  disqualification(where: DisqualificationSubscriptionWhereInput): DisqualificationSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  stage(where: StageSubscriptionWhereInput): StageSubscriptionPayload
  task(where: TaskSubscriptionWhereInput): TaskSubscriptionPayload
  tag(where: TagSubscriptionWhereInput): TagSubscriptionPayload
  field(where: FieldSubscriptionWhereInput): FieldSubscriptionPayload
  workflow(where: WorkflowSubscriptionWhereInput): WorkflowSubscriptionPayload
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
  subscribers: UserCreateManyWithoutSubscriptionTasksInput
  owners: UserCreateManyWithoutTasksInput
}

input TaskCreateWithoutOwnersInput {
  title: String
  description: String
  dueAt: DateTime
  subscribers: UserCreateManyWithoutSubscriptionTasksInput
  candidate: CandidateCreateOneWithoutTasksInput
}

input TaskCreateWithoutSubscribersInput {
  title: String
  description: String
  dueAt: DateTime
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
  subscribers: UserUpdateManyWithoutSubscriptionTasksInput
  owners: UserUpdateManyWithoutTasksInput
  candidate: CandidateUpdateOneWithoutTasksInput
}

input TaskUpdateInput {
  title: String
  description: String
  dueAt: DateTime
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
  subscribers: UserUpdateManyWithoutSubscriptionTasksInput
  owners: UserUpdateManyWithoutTasksInput
}

input TaskUpdateWithoutOwnersDataInput {
  title: String
  description: String
  dueAt: DateTime
  subscribers: UserUpdateManyWithoutSubscriptionTasksInput
  candidate: CandidateUpdateOneWithoutTasksInput
}

input TaskUpdateWithoutSubscribersDataInput {
  title: String
  description: String
  dueAt: DateTime
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
  disqualifications(where: DisqualificationWhereInput, orderBy: DisqualificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Disqualification!]
  fields(where: FieldWhereInput, orderBy: FieldOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Field!]
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
  disqualifications: DisqualificationCreateManyInput
  fields: FieldCreateManyInput
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
  disqualifications: DisqualificationUpdateManyInput
  fields: FieldUpdateManyInput
}

input WorkflowUpdateInput {
  name: String
  description: String
  stages: StageUpdateManyInput
  disqualifications: DisqualificationUpdateManyInput
  fields: FieldUpdateManyInput
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
  disqualifications_every: DisqualificationWhereInput
  disqualifications_some: DisqualificationWhereInput
  disqualifications_none: DisqualificationWhereInput
  fields_every: FieldWhereInput
  fields_some: FieldWhereInput
  fields_none: FieldWhereInput
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
  candidates: CandidateCreateManyWithoutWorkspaceInput
  workflows: WorkflowCreateManyInput
  workflowDefault: WorkflowCreateOneInput
  invites: InviteCreateManyInput
  tags: TagCreateManyInput
}

input WorkspaceCreateOneWithoutCandidatesInput {
  create: WorkspaceCreateWithoutCandidatesInput
  connect: WorkspaceWhereUniqueInput
}

input WorkspaceCreateOneWithoutEventsInput {
  create: WorkspaceCreateWithoutEventsInput
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

input WorkspaceCreateWithoutCandidatesInput {
  name: String!
  events: EventCreateManyWithoutTargetWorkspaceInput
  users: UserCreateManyWithoutWorkspaceInput
  jobs: JobCreateManyWithoutWorkspaceInput
  workflows: WorkflowCreateManyInput
  workflowDefault: WorkflowCreateOneInput
  invites: InviteCreateManyInput
  tags: TagCreateManyInput
}

input WorkspaceCreateWithoutEventsInput {
  name: String!
  users: UserCreateManyWithoutWorkspaceInput
  jobs: JobCreateManyWithoutWorkspaceInput
  candidates: CandidateCreateManyWithoutWorkspaceInput
  workflows: WorkflowCreateManyInput
  workflowDefault: WorkflowCreateOneInput
  invites: InviteCreateManyInput
  tags: TagCreateManyInput
}

input WorkspaceCreateWithoutJobsInput {
  name: String!
  events: EventCreateManyWithoutTargetWorkspaceInput
  users: UserCreateManyWithoutWorkspaceInput
  candidates: CandidateCreateManyWithoutWorkspaceInput
  workflows: WorkflowCreateManyInput
  workflowDefault: WorkflowCreateOneInput
  invites: InviteCreateManyInput
  tags: TagCreateManyInput
}

input WorkspaceCreateWithoutUsersInput {
  name: String!
  events: EventCreateManyWithoutTargetWorkspaceInput
  jobs: JobCreateManyWithoutWorkspaceInput
  candidates: CandidateCreateManyWithoutWorkspaceInput
  workflows: WorkflowCreateManyInput
  workflowDefault: WorkflowCreateOneInput
  invites: InviteCreateManyInput
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

input WorkspaceUpdateInput {
  name: String
  events: EventUpdateManyWithoutTargetWorkspaceInput
  users: UserUpdateManyWithoutWorkspaceInput
  jobs: JobUpdateManyWithoutWorkspaceInput
  candidates: CandidateUpdateManyWithoutWorkspaceInput
  workflows: WorkflowUpdateManyInput
  workflowDefault: WorkflowUpdateOneInput
  invites: InviteUpdateManyInput
  tags: TagUpdateManyInput
}

input WorkspaceUpdateOneRequiredWithoutCandidatesInput {
  create: WorkspaceCreateWithoutCandidatesInput
  connect: WorkspaceWhereUniqueInput
  update: WorkspaceUpdateWithoutCandidatesDataInput
  upsert: WorkspaceUpsertWithoutCandidatesInput
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

input WorkspaceUpdateWithoutCandidatesDataInput {
  name: String
  events: EventUpdateManyWithoutTargetWorkspaceInput
  users: UserUpdateManyWithoutWorkspaceInput
  jobs: JobUpdateManyWithoutWorkspaceInput
  workflows: WorkflowUpdateManyInput
  workflowDefault: WorkflowUpdateOneInput
  invites: InviteUpdateManyInput
  tags: TagUpdateManyInput
}

input WorkspaceUpdateWithoutEventsDataInput {
  name: String
  users: UserUpdateManyWithoutWorkspaceInput
  jobs: JobUpdateManyWithoutWorkspaceInput
  candidates: CandidateUpdateManyWithoutWorkspaceInput
  workflows: WorkflowUpdateManyInput
  workflowDefault: WorkflowUpdateOneInput
  invites: InviteUpdateManyInput
  tags: TagUpdateManyInput
}

input WorkspaceUpdateWithoutJobsDataInput {
  name: String
  events: EventUpdateManyWithoutTargetWorkspaceInput
  users: UserUpdateManyWithoutWorkspaceInput
  candidates: CandidateUpdateManyWithoutWorkspaceInput
  workflows: WorkflowUpdateManyInput
  workflowDefault: WorkflowUpdateOneInput
  invites: InviteUpdateManyInput
  tags: TagUpdateManyInput
}

input WorkspaceUpdateWithoutUsersDataInput {
  name: String
  events: EventUpdateManyWithoutTargetWorkspaceInput
  jobs: JobUpdateManyWithoutWorkspaceInput
  candidates: CandidateUpdateManyWithoutWorkspaceInput
  workflows: WorkflowUpdateManyInput
  workflowDefault: WorkflowUpdateOneInput
  invites: InviteUpdateManyInput
  tags: TagUpdateManyInput
}

input WorkspaceUpsertWithoutCandidatesInput {
  update: WorkspaceUpdateWithoutCandidatesDataInput!
  create: WorkspaceCreateWithoutCandidatesInput!
}

input WorkspaceUpsertWithoutEventsInput {
  update: WorkspaceUpdateWithoutEventsDataInput!
  create: WorkspaceCreateWithoutEventsInput!
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

export type WorkspaceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC'

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

export type DisqualificationLinkOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'justification_ASC' |
  'justification_DESC'

export type CommentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'content_ASC' |
  'content_DESC'

export type EventType =   'Default' |
  'Message' |
  'CommentCreate' |
  'CommentEdit' |
  'CommentDelete'

export type StageType =   'New' |
  'Pipeline' |
  'Final'

export type EventTargetType =   'Candidate' |
  'Job' |
  'Task' |
  'Workspace'

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

export type FieldLinkOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'value_ASC' |
  'value_DESC'

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
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'type_ASC' |
  'type_DESC' |
  'label_ASC' |
  'label_DESC'

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

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type ApplicationOrderByInput =   'createdAt_ASC' |
  'createdAt_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'type_ASC' |
  'type_DESC'

export type EventActorType =   'System' |
  'User' |
  'Candidate'

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

export type NotificationType =   'Unread' |
  'Read'

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

export type FieldType =   'Int' |
  'Float' |
  'String' |
  'Text' |
  'Boolean' |
  'DateTime'

export type JobType =   'Draft' |
  'Published' |
  'Archived'

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

export type ApplicationType =   'Qualified' |
  'Disqualified'

export interface EventUpdateWithoutTargetWorkspaceDataInput {
  type?: EventType
  actorType?: EventActorType
  targetType?: EventTargetType
  actorUser?: UserUpdateOneWithoutEventsInput
  actorCandidate?: CandidateUpdateOneInput
  targetCandidate?: CandidateUpdateOneWithoutEventsInput
  targetJob?: JobUpdateOneWithoutEventsInput
  targetTask?: TaskUpdateOneInput
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

export interface CandidateUpdateemailsInput {
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
  invitedBy?: UserWhereInput
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

export interface CommentUpdateManyInput {
  create?: CommentCreateInput[] | CommentCreateInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  disconnect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  delete?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  update?: CommentUpdateWithWhereUniqueNestedInput[] | CommentUpdateWithWhereUniqueNestedInput
  upsert?: CommentUpsertWithWhereUniqueNestedInput[] | CommentUpsertWithWhereUniqueNestedInput
}

export interface TaskCreateManyWithoutOwnersInput {
  create?: TaskCreateWithoutOwnersInput[] | TaskCreateWithoutOwnersInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
}

export interface CandidateUpdatephonesInput {
  set?: String[] | String
}

export interface TaskCreateWithoutOwnersInput {
  title?: String
  description?: String
  dueAt?: DateTime
  subscribers?: UserCreateManyWithoutSubscriptionTasksInput
  candidate?: CandidateCreateOneWithoutTasksInput
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

export interface CandidateCreateOneWithoutTasksInput {
  create?: CandidateCreateWithoutTasksInput
  connect?: CandidateWhereUniqueInput
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

export interface ApplicationCreateWithoutCandidateInput {
  type: ApplicationType
  disqualificationLink?: DisqualificationLinkCreateOneInput
  stage: StageCreateOneInput
  job: JobCreateOneWithoutApplicationsInput
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

export interface StageCreateOneInput {
  create?: StageCreateInput
  connect?: StageWhereUniqueInput
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

export interface StageCreateInput {
  name: String
  description?: String
  type: StageType
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

export interface JobCreateOneWithoutApplicationsInput {
  create?: JobCreateWithoutApplicationsInput
  connect?: JobWhereUniqueInput
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

export interface EventCreateManyWithoutTargetJobInput {
  create?: EventCreateWithoutTargetJobInput[] | EventCreateWithoutTargetJobInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
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

export interface TaskCreateOneInput {
  create?: TaskCreateInput
  connect?: TaskWhereUniqueInput
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

export interface TaskCreateInput {
  title?: String
  description?: String
  dueAt?: DateTime
  subscribers?: UserCreateManyWithoutSubscriptionTasksInput
  owners?: UserCreateManyWithoutTasksInput
  candidate?: CandidateCreateOneWithoutTasksInput
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

export interface UserCreateManyWithoutTasksInput {
  create?: UserCreateWithoutTasksInput[] | UserCreateWithoutTasksInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
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

export interface TaskCreateManyWithoutSubscribersInput {
  create?: TaskCreateWithoutSubscribersInput[] | TaskCreateWithoutSubscribersInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
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

export interface TaskCreateWithoutSubscribersInput {
  title?: String
  description?: String
  dueAt?: DateTime
  owners?: UserCreateManyWithoutTasksInput
  candidate?: CandidateCreateOneWithoutTasksInput
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

export interface WorkspaceCreateOneWithoutEventsInput {
  create?: WorkspaceCreateWithoutEventsInput
  connect?: WorkspaceWhereUniqueInput
}

export interface CommentUpdateInput {
  content?: String
  createdBy?: UserUpdateOneRequiredInput
  parent?: CommentUpdateOneInput
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

export interface JobWhereUniqueInput {
  id?: ID_Input
}

export interface WorkflowCreateManyInput {
  create?: WorkflowCreateInput[] | WorkflowCreateInput
  connect?: WorkflowWhereUniqueInput[] | WorkflowWhereUniqueInput
}

export interface NotificationWhereUniqueInput {
  id?: ID_Input
}

export interface WorkflowCreateInput {
  name: String
  description?: String
  stages?: StageCreateManyInput
  disqualifications?: DisqualificationCreateManyInput
  fields?: FieldCreateManyInput
}

export interface LocationWhereUniqueInput {
  id?: ID_Input
}

export interface StageCreateManyInput {
  create?: StageCreateInput[] | StageCreateInput
  connect?: StageWhereUniqueInput[] | StageWhereUniqueInput
}

export interface InviteWhereUniqueInput {
  id?: ID_Input
}

export interface DisqualificationCreateManyInput {
  create?: DisqualificationCreateInput[] | DisqualificationCreateInput
  connect?: DisqualificationWhereUniqueInput[] | DisqualificationWhereUniqueInput
}

export interface FieldLinkWhereUniqueInput {
  id?: ID_Input
}

export interface FieldCreateManyInput {
  create?: FieldCreateInput[] | FieldCreateInput
  connect?: FieldWhereUniqueInput[] | FieldWhereUniqueInput
}

export interface DisqualificationWhereUniqueInput {
  id?: ID_Input
}

export interface WorkflowCreateOneInput {
  create?: WorkflowCreateInput
  connect?: WorkflowWhereUniqueInput
}

export interface StageWhereUniqueInput {
  id?: ID_Input
}

export interface InviteCreateManyInput {
  create?: InviteCreateInput[] | InviteCreateInput
  connect?: InviteWhereUniqueInput[] | InviteWhereUniqueInput
}

export interface TagWhereUniqueInput {
  id?: ID_Input
}

export interface InviteCreateInput {
  email: String
  expireAt: DateTime
  invitedBy: UserCreateOneInput
}

export interface WorkflowWhereUniqueInput {
  id?: ID_Input
}

export interface CommentCreateManyInput {
  create?: CommentCreateInput[] | CommentCreateInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
}

export interface WorkflowUpdateInput {
  name?: String
  description?: String
  stages?: StageUpdateManyInput
  disqualifications?: DisqualificationUpdateManyInput
  fields?: FieldUpdateManyInput
}

export interface CommentCreateInput {
  content: String
  createdBy: UserCreateOneInput
  parent?: CommentCreateOneInput
}

export interface TagUpdateInput {
  label?: String
}

export interface CommentCreateOneInput {
  create?: CommentCreateInput
  connect?: CommentWhereUniqueInput
}

export interface StageUpdateInput {
  name?: String
  description?: String
  type?: StageType
}

export interface LocationCreateManyInput {
  create?: LocationCreateInput[] | LocationCreateInput
  connect?: LocationWhereUniqueInput[] | LocationWhereUniqueInput
}

export interface DisqualificationUpdateInput {
  name?: String
  description?: String
}

export interface LocationCreateInput {
  country: String
  region: String
  city: String
  zip: String
}

export interface FieldLinkUpdateInput {
  value?: String
  field?: FieldUpdateOneRequiredInput
}

export interface CandidateCreateOneWithoutApplicationsInput {
  create?: CandidateCreateWithoutApplicationsInput
  connect?: CandidateWhereUniqueInput
}

export interface InviteUpdateInput {
  email?: String
  expireAt?: DateTime
  invitedBy?: UserUpdateOneRequiredInput
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

export interface LocationUpdateInput {
  country?: String
  region?: String
  city?: String
  zip?: String
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

export interface UserUpsertWithoutNotificationsInput {
  update: UserUpdateWithoutNotificationsDataInput
  create: UserCreateWithoutNotificationsInput
}

export interface ApplicationCreateInput {
  type: ApplicationType
  disqualificationLink?: DisqualificationLinkCreateOneInput
  stage: StageCreateOneInput
  job: JobCreateOneWithoutApplicationsInput
  candidate: CandidateCreateOneWithoutApplicationsInput
}

export interface UserUpdateOneRequiredWithoutNotificationsInput {
  create?: UserCreateWithoutNotificationsInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutNotificationsDataInput
  upsert?: UserUpsertWithoutNotificationsInput
}

export interface NotificationCreateInput {
  type: NotificationType
  user: UserCreateOneWithoutNotificationsInput
  event: EventCreateOneInput
}

export interface ApplicationUpdateInput {
  type?: ApplicationType
  disqualificationLink?: DisqualificationLinkUpdateOneInput
  stage?: StageUpdateOneRequiredInput
  job?: JobUpdateOneRequiredWithoutApplicationsInput
  candidate?: CandidateUpdateOneRequiredWithoutApplicationsInput
}

export interface UserCreateOneWithoutNotificationsInput {
  create?: UserCreateWithoutNotificationsInput
  connect?: UserWhereUniqueInput
}

export interface EventUpsertWithWhereUniqueWithoutTargetWorkspaceInput {
  where: EventWhereUniqueInput
  update: EventUpdateWithoutTargetWorkspaceDataInput
  create: EventCreateWithoutTargetWorkspaceInput
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

export interface WorkspaceUpsertWithoutUsersInput {
  update: WorkspaceUpdateWithoutUsersDataInput
  create: WorkspaceCreateWithoutUsersInput
}

export interface WorkspaceUpdateInput {
  name?: String
  events?: EventUpdateManyWithoutTargetWorkspaceInput
  users?: UserUpdateManyWithoutWorkspaceInput
  jobs?: JobUpdateManyWithoutWorkspaceInput
  candidates?: CandidateUpdateManyWithoutWorkspaceInput
  workflows?: WorkflowUpdateManyInput
  workflowDefault?: WorkflowUpdateOneInput
  invites?: InviteUpdateManyInput
  tags?: TagUpdateManyInput
}

export interface UserUpsertWithWhereUniqueWithoutSubscriptionJobsInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutSubscriptionJobsDataInput
  create: UserCreateWithoutSubscriptionJobsInput
}

export interface EventUpdateManyWithoutTargetWorkspaceInput {
  create?: EventCreateWithoutTargetWorkspaceInput[] | EventCreateWithoutTargetWorkspaceInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  disconnect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  delete?: EventWhereUniqueInput[] | EventWhereUniqueInput
  update?: EventUpdateWithWhereUniqueWithoutTargetWorkspaceInput[] | EventUpdateWithWhereUniqueWithoutTargetWorkspaceInput
  upsert?: EventUpsertWithWhereUniqueWithoutTargetWorkspaceInput[] | EventUpsertWithWhereUniqueWithoutTargetWorkspaceInput
}

export interface CandidateUpsertNestedInput {
  update: CandidateUpdateDataInput
  create: CandidateCreateInput
}

export interface EventUpdateWithWhereUniqueWithoutTargetWorkspaceInput {
  where: EventWhereUniqueInput
  data: EventUpdateWithoutTargetWorkspaceDataInput
}

export interface UserUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutWorkspaceDataInput
  create: UserCreateWithoutWorkspaceInput
}

export interface CommentUpdateWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput
  data: CommentUpdateDataInput
}

export interface EventUpsertNestedInput {
  update: EventUpdateDataInput
  create: EventCreateInput
}

export interface UserUpdateOneWithoutEventsInput {
  create?: UserCreateWithoutEventsInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutEventsDataInput
  upsert?: UserUpsertWithoutEventsInput
}

export interface UserUpsertWithWhereUniqueWithoutSubscriptionCandidatesInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutSubscriptionCandidatesDataInput
  create: UserCreateWithoutSubscriptionCandidatesInput
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

export interface WorkspaceUpsertWithoutJobsInput {
  update: WorkspaceUpdateWithoutJobsDataInput
  create: WorkspaceCreateWithoutJobsInput
}

export interface WorkspaceUpdateOneRequiredWithoutUsersInput {
  create?: WorkspaceCreateWithoutUsersInput
  connect?: WorkspaceWhereUniqueInput
  update?: WorkspaceUpdateWithoutUsersDataInput
  upsert?: WorkspaceUpsertWithoutUsersInput
}

export interface EventUpsertWithWhereUniqueWithoutTargetCandidateInput {
  where: EventWhereUniqueInput
  update: EventUpdateWithoutTargetCandidateDataInput
  create: EventCreateWithoutTargetCandidateInput
}

export interface WorkspaceUpdateWithoutUsersDataInput {
  name?: String
  events?: EventUpdateManyWithoutTargetWorkspaceInput
  jobs?: JobUpdateManyWithoutWorkspaceInput
  candidates?: CandidateUpdateManyWithoutWorkspaceInput
  workflows?: WorkflowUpdateManyInput
  workflowDefault?: WorkflowUpdateOneInput
  invites?: InviteUpdateManyInput
  tags?: TagUpdateManyInput
}

export interface ApplicationUpsertWithWhereUniqueWithoutJobInput {
  where: ApplicationWhereUniqueInput
  update: ApplicationUpdateWithoutJobDataInput
  create: ApplicationCreateWithoutJobInput
}

export interface JobUpdateManyWithoutWorkspaceInput {
  create?: JobCreateWithoutWorkspaceInput[] | JobCreateWithoutWorkspaceInput
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput
  disconnect?: JobWhereUniqueInput[] | JobWhereUniqueInput
  delete?: JobWhereUniqueInput[] | JobWhereUniqueInput
  update?: JobUpdateWithWhereUniqueWithoutWorkspaceInput[] | JobUpdateWithWhereUniqueWithoutWorkspaceInput
  upsert?: JobUpsertWithWhereUniqueWithoutWorkspaceInput[] | JobUpsertWithWhereUniqueWithoutWorkspaceInput
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
  fields?: FieldLinkUpdateManyInput
  tasks?: TaskUpdateManyWithoutCandidateInput
  comments?: CommentUpdateManyInput
}

export interface JobUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: JobWhereUniqueInput
  data: JobUpdateWithoutWorkspaceDataInput
}

export interface DisqualificationLinkUpsertNestedInput {
  update: DisqualificationLinkUpdateDataInput
  create: DisqualificationLinkCreateInput
}

export interface JobUpdateWithoutWorkspaceDataInput {
  type?: JobType
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

export interface CandidateUpsertWithWhereUniqueWithoutSubscribersInput {
  where: CandidateWhereUniqueInput
  update: CandidateUpdateWithoutSubscribersDataInput
  create: CandidateCreateWithoutSubscribersInput
}

export interface UserUpdateManyWithoutSubscriptionJobsInput {
  create?: UserCreateWithoutSubscriptionJobsInput[] | UserCreateWithoutSubscriptionJobsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutSubscriptionJobsInput[] | UserUpdateWithWhereUniqueWithoutSubscriptionJobsInput
  upsert?: UserUpsertWithWhereUniqueWithoutSubscriptionJobsInput[] | UserUpsertWithWhereUniqueWithoutSubscriptionJobsInput
}

export interface UserUpsertWithWhereUniqueWithoutSubscriptionTasksInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutSubscriptionTasksDataInput
  create: UserCreateWithoutSubscriptionTasksInput
}

export interface UserUpdateWithWhereUniqueWithoutSubscriptionJobsInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutSubscriptionJobsDataInput
}

export interface CandidateUpsertWithoutTasksInput {
  update: CandidateUpdateWithoutTasksDataInput
  create: CandidateCreateWithoutTasksInput
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

export interface JobUpsertWithoutApplicationsInput {
  update: JobUpdateWithoutApplicationsDataInput
  create: JobCreateWithoutApplicationsInput
}

export interface EventUpdateOneWithoutActorUserInput {
  create?: EventCreateWithoutActorUserInput
  connect?: EventWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: EventUpdateWithoutActorUserDataInput
  upsert?: EventUpsertWithoutActorUserInput
}

export interface LocationUpdateDataInput {
  country?: String
  region?: String
  city?: String
  zip?: String
}

export interface EventUpdateWithoutActorUserDataInput {
  type?: EventType
  actorType?: EventActorType
  targetType?: EventTargetType
  actorCandidate?: CandidateUpdateOneInput
  targetCandidate?: CandidateUpdateOneWithoutEventsInput
  targetJob?: JobUpdateOneWithoutEventsInput
  targetTask?: TaskUpdateOneInput
  targetWorkspace?: WorkspaceUpdateOneWithoutEventsInput
}

export interface LocationUpdateManyInput {
  create?: LocationCreateInput[] | LocationCreateInput
  connect?: LocationWhereUniqueInput[] | LocationWhereUniqueInput
  disconnect?: LocationWhereUniqueInput[] | LocationWhereUniqueInput
  delete?: LocationWhereUniqueInput[] | LocationWhereUniqueInput
  update?: LocationUpdateWithWhereUniqueNestedInput[] | LocationUpdateWithWhereUniqueNestedInput
  upsert?: LocationUpsertWithWhereUniqueNestedInput[] | LocationUpsertWithWhereUniqueNestedInput
}

export interface CandidateUpdateOneInput {
  create?: CandidateCreateInput
  connect?: CandidateWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CandidateUpdateDataInput
  upsert?: CandidateUpsertNestedInput
}

export interface CommentUpsertNestedInput {
  update: CommentUpdateDataInput
  create: CommentCreateInput
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
  fields?: FieldLinkUpdateManyInput
  tasks?: TaskUpdateManyWithoutCandidateInput
  applications?: ApplicationUpdateManyWithoutCandidateInput
  comments?: CommentUpdateManyInput
}

export interface CommentUpdateDataInput {
  content?: String
  createdBy?: UserUpdateOneRequiredInput
  parent?: CommentUpdateOneInput
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

export interface EventCreateManyWithoutTargetWorkspaceInput {
  create?: EventCreateWithoutTargetWorkspaceInput[] | EventCreateWithoutTargetWorkspaceInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
}

export interface UserCreateOneWithoutEventsInput {
  create?: UserCreateWithoutEventsInput
  connect?: UserWhereUniqueInput
}

export interface WorkspaceCreateOneWithoutUsersInput {
  create?: WorkspaceCreateWithoutUsersInput
  connect?: WorkspaceWhereUniqueInput
}

export interface CandidateUpdatelinksInput {
  set?: String[] | String
}

export interface JobCreateManyWithoutWorkspaceInput {
  create?: JobCreateWithoutWorkspaceInput[] | JobCreateWithoutWorkspaceInput
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput
}

export interface CandidateUpdateresumesStringInput {
  set?: String[] | String
}

export interface UserCreateManyWithoutSubscriptionJobsInput {
  create?: UserCreateWithoutSubscriptionJobsInput[] | UserCreateWithoutSubscriptionJobsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface CandidateUpdatecoverLettersStringInput {
  set?: String[] | String
}

export interface EventCreateOneWithoutActorUserInput {
  create?: EventCreateWithoutActorUserInput
  connect?: EventWhereUniqueInput
}

export interface CandidateUpdatesourceInput {
  set?: String[] | String
}

export interface CandidateCreateOneInput {
  create?: CandidateCreateInput
  connect?: CandidateWhereUniqueInput
}

export interface WorkspaceUpdateOneRequiredWithoutCandidatesInput {
  create?: WorkspaceCreateWithoutCandidatesInput
  connect?: WorkspaceWhereUniqueInput
  update?: WorkspaceUpdateWithoutCandidatesDataInput
  upsert?: WorkspaceUpsertWithoutCandidatesInput
}

export interface CandidateCreateemailsInput {
  set?: String[] | String
}

export interface WorkspaceUpdateWithoutCandidatesDataInput {
  name?: String
  events?: EventUpdateManyWithoutTargetWorkspaceInput
  users?: UserUpdateManyWithoutWorkspaceInput
  jobs?: JobUpdateManyWithoutWorkspaceInput
  workflows?: WorkflowUpdateManyInput
  workflowDefault?: WorkflowUpdateOneInput
  invites?: InviteUpdateManyInput
  tags?: TagUpdateManyInput
}

export interface CandidateCreatelinksInput {
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

export interface CandidateCreatecoverLettersStringInput {
  set?: String[] | String
}

export interface UserUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutWorkspaceDataInput
}

export interface WorkspaceCreateOneWithoutCandidatesInput {
  create?: WorkspaceCreateWithoutCandidatesInput
  connect?: WorkspaceWhereUniqueInput
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

export interface UserCreateManyWithoutWorkspaceInput {
  create?: UserCreateWithoutWorkspaceInput[] | UserCreateWithoutWorkspaceInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface NotificationUpdateManyWithoutUserInput {
  create?: NotificationCreateWithoutUserInput[] | NotificationCreateWithoutUserInput
  connect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  disconnect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  delete?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  update?: NotificationUpdateWithWhereUniqueWithoutUserInput[] | NotificationUpdateWithWhereUniqueWithoutUserInput
  upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput[] | NotificationUpsertWithWhereUniqueWithoutUserInput
}

export interface NotificationCreateManyWithoutUserInput {
  create?: NotificationCreateWithoutUserInput[] | NotificationCreateWithoutUserInput
  connect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
}

export interface NotificationUpdateWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput
  data: NotificationUpdateWithoutUserDataInput
}

export interface EventCreateOneInput {
  create?: EventCreateInput
  connect?: EventWhereUniqueInput
}

export interface NotificationUpdateWithoutUserDataInput {
  type?: NotificationType
  event?: EventUpdateOneRequiredInput
}

export interface CandidateCreateOneWithoutEventsInput {
  create?: CandidateCreateWithoutEventsInput
  connect?: CandidateWhereUniqueInput
}

export interface EventUpdateOneRequiredInput {
  create?: EventCreateInput
  connect?: EventWhereUniqueInput
  update?: EventUpdateDataInput
  upsert?: EventUpsertNestedInput
}

export interface UserCreateManyWithoutSubscriptionCandidatesInput {
  create?: UserCreateWithoutSubscriptionCandidatesInput[] | UserCreateWithoutSubscriptionCandidatesInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface EventUpdateDataInput {
  type?: EventType
  actorType?: EventActorType
  targetType?: EventTargetType
  actorUser?: UserUpdateOneWithoutEventsInput
  actorCandidate?: CandidateUpdateOneInput
  targetCandidate?: CandidateUpdateOneWithoutEventsInput
  targetJob?: JobUpdateOneWithoutEventsInput
  targetTask?: TaskUpdateOneInput
  targetWorkspace?: WorkspaceUpdateOneWithoutEventsInput
}

export interface JobCreateManyWithoutSubscribersInput {
  create?: JobCreateWithoutSubscribersInput[] | JobCreateWithoutSubscribersInput
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput
}

export interface CandidateUpdateOneWithoutEventsInput {
  create?: CandidateCreateWithoutEventsInput
  connect?: CandidateWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CandidateUpdateWithoutEventsDataInput
  upsert?: CandidateUpsertWithoutEventsInput
}

export interface WorkspaceCreateOneWithoutJobsInput {
  create?: WorkspaceCreateWithoutJobsInput
  connect?: WorkspaceWhereUniqueInput
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
  fields?: FieldLinkUpdateManyInput
  tasks?: TaskUpdateManyWithoutCandidateInput
  applications?: ApplicationUpdateManyWithoutCandidateInput
  comments?: CommentUpdateManyInput
}

export interface CandidateCreateManyWithoutWorkspaceInput {
  create?: CandidateCreateWithoutWorkspaceInput[] | CandidateCreateWithoutWorkspaceInput
  connect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
}

export interface UserUpdateManyWithoutSubscriptionCandidatesInput {
  create?: UserCreateWithoutSubscriptionCandidatesInput[] | UserCreateWithoutSubscriptionCandidatesInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutSubscriptionCandidatesInput[] | UserUpdateWithWhereUniqueWithoutSubscriptionCandidatesInput
  upsert?: UserUpsertWithWhereUniqueWithoutSubscriptionCandidatesInput[] | UserUpsertWithWhereUniqueWithoutSubscriptionCandidatesInput
}

export interface EventCreateManyWithoutTargetCandidateInput {
  create?: EventCreateWithoutTargetCandidateInput[] | EventCreateWithoutTargetCandidateInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
}

export interface UserUpdateWithWhereUniqueWithoutSubscriptionCandidatesInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutSubscriptionCandidatesDataInput
}

export interface JobCreateOneWithoutEventsInput {
  create?: JobCreateWithoutEventsInput
  connect?: JobWhereUniqueInput
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

export interface ApplicationCreateManyWithoutJobInput {
  create?: ApplicationCreateWithoutJobInput[] | ApplicationCreateWithoutJobInput
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
}

export interface JobUpdateManyWithoutSubscribersInput {
  create?: JobCreateWithoutSubscribersInput[] | JobCreateWithoutSubscribersInput
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput
  disconnect?: JobWhereUniqueInput[] | JobWhereUniqueInput
  delete?: JobWhereUniqueInput[] | JobWhereUniqueInput
  update?: JobUpdateWithWhereUniqueWithoutSubscribersInput[] | JobUpdateWithWhereUniqueWithoutSubscribersInput
  upsert?: JobUpsertWithWhereUniqueWithoutSubscribersInput[] | JobUpsertWithWhereUniqueWithoutSubscribersInput
}

export interface DisqualificationLinkCreateOneInput {
  create?: DisqualificationLinkCreateInput
  connect?: DisqualificationLinkWhereUniqueInput
}

export interface JobUpdateWithWhereUniqueWithoutSubscribersInput {
  where: JobWhereUniqueInput
  data: JobUpdateWithoutSubscribersDataInput
}

export interface DisqualificationCreateOneInput {
  create?: DisqualificationCreateInput
  connect?: DisqualificationWhereUniqueInput
}

export interface JobUpdateWithoutSubscribersDataInput {
  type?: JobType
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

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface WorkspaceUpdateOneRequiredWithoutJobsInput {
  create?: WorkspaceCreateWithoutJobsInput
  connect?: WorkspaceWhereUniqueInput
  update?: WorkspaceUpdateWithoutJobsDataInput
  upsert?: WorkspaceUpsertWithoutJobsInput
}

export interface CandidateCreateManyWithoutSubscribersInput {
  create?: CandidateCreateWithoutSubscribersInput[] | CandidateCreateWithoutSubscribersInput
  connect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
}

export interface WorkspaceUpdateWithoutJobsDataInput {
  name?: String
  events?: EventUpdateManyWithoutTargetWorkspaceInput
  users?: UserUpdateManyWithoutWorkspaceInput
  candidates?: CandidateUpdateManyWithoutWorkspaceInput
  workflows?: WorkflowUpdateManyInput
  workflowDefault?: WorkflowUpdateOneInput
  invites?: InviteUpdateManyInput
  tags?: TagUpdateManyInput
}

export interface FileCreateOneInput {
  create?: FileCreateInput
  connect?: FileWhereUniqueInput
}

export interface CandidateUpdateManyWithoutWorkspaceInput {
  create?: CandidateCreateWithoutWorkspaceInput[] | CandidateCreateWithoutWorkspaceInput
  connect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
  disconnect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
  delete?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
  update?: CandidateUpdateWithWhereUniqueWithoutWorkspaceInput[] | CandidateUpdateWithWhereUniqueWithoutWorkspaceInput
  upsert?: CandidateUpsertWithWhereUniqueWithoutWorkspaceInput[] | CandidateUpsertWithWhereUniqueWithoutWorkspaceInput
}

export interface FileCreateManyInput {
  create?: FileCreateInput[] | FileCreateInput
  connect?: FileWhereUniqueInput[] | FileWhereUniqueInput
}

export interface CandidateUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: CandidateWhereUniqueInput
  data: CandidateUpdateWithoutWorkspaceDataInput
}

export interface TagCreateInput {
  label: String
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
  fields?: FieldLinkUpdateManyInput
  tasks?: TaskUpdateManyWithoutCandidateInput
  applications?: ApplicationUpdateManyWithoutCandidateInput
  comments?: CommentUpdateManyInput
}

export interface FieldLinkCreateInput {
  value?: String
  field: FieldCreateOneInput
}

export interface EventUpdateManyWithoutTargetCandidateInput {
  create?: EventCreateWithoutTargetCandidateInput[] | EventCreateWithoutTargetCandidateInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  disconnect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  delete?: EventWhereUniqueInput[] | EventWhereUniqueInput
  update?: EventUpdateWithWhereUniqueWithoutTargetCandidateInput[] | EventUpdateWithWhereUniqueWithoutTargetCandidateInput
  upsert?: EventUpsertWithWhereUniqueWithoutTargetCandidateInput[] | EventUpsertWithWhereUniqueWithoutTargetCandidateInput
}

export interface FieldCreateInput {
  type: FieldType
  label: String
}

export interface EventUpdateWithWhereUniqueWithoutTargetCandidateInput {
  where: EventWhereUniqueInput
  data: EventUpdateWithoutTargetCandidateDataInput
}

export interface TaskCreateWithoutCandidateInput {
  title?: String
  description?: String
  dueAt?: DateTime
  subscribers?: UserCreateManyWithoutSubscriptionTasksInput
  owners?: UserCreateManyWithoutTasksInput
}

export interface EventUpdateWithoutTargetCandidateDataInput {
  type?: EventType
  actorType?: EventActorType
  targetType?: EventTargetType
  actorUser?: UserUpdateOneWithoutEventsInput
  actorCandidate?: CandidateUpdateOneInput
  targetJob?: JobUpdateOneWithoutEventsInput
  targetTask?: TaskUpdateOneInput
  targetWorkspace?: WorkspaceUpdateOneWithoutEventsInput
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

export interface JobUpdateOneWithoutEventsInput {
  create?: JobCreateWithoutEventsInput
  connect?: JobWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: JobUpdateWithoutEventsDataInput
  upsert?: JobUpsertWithoutEventsInput
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

export interface JobUpdateWithoutEventsDataInput {
  type?: JobType
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

export interface ApplicationUpdateManyWithoutJobInput {
  create?: ApplicationCreateWithoutJobInput[] | ApplicationCreateWithoutJobInput
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  disconnect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  delete?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  update?: ApplicationUpdateWithWhereUniqueWithoutJobInput[] | ApplicationUpdateWithWhereUniqueWithoutJobInput
  upsert?: ApplicationUpsertWithWhereUniqueWithoutJobInput[] | ApplicationUpsertWithWhereUniqueWithoutJobInput
}

export interface DisqualificationSubscriptionWhereInput {
  AND?: DisqualificationSubscriptionWhereInput[] | DisqualificationSubscriptionWhereInput
  OR?: DisqualificationSubscriptionWhereInput[] | DisqualificationSubscriptionWhereInput
  NOT?: DisqualificationSubscriptionWhereInput[] | DisqualificationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: DisqualificationWhereInput
}

export interface ApplicationUpdateWithWhereUniqueWithoutJobInput {
  where: ApplicationWhereUniqueInput
  data: ApplicationUpdateWithoutJobDataInput
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

export interface ApplicationUpdateWithoutJobDataInput {
  type?: ApplicationType
  disqualificationLink?: DisqualificationLinkUpdateOneInput
  stage?: StageUpdateOneRequiredInput
  candidate?: CandidateUpdateOneRequiredWithoutApplicationsInput
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

export interface DisqualificationLinkUpdateOneInput {
  create?: DisqualificationLinkCreateInput
  connect?: DisqualificationLinkWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: DisqualificationLinkUpdateDataInput
  upsert?: DisqualificationLinkUpsertNestedInput
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

export interface DisqualificationLinkUpdateDataInput {
  justification?: String
  disqualification?: DisqualificationUpdateOneRequiredInput
  createdBy?: UserUpdateOneRequiredInput
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

export interface DisqualificationUpdateOneRequiredInput {
  create?: DisqualificationCreateInput
  connect?: DisqualificationWhereUniqueInput
  update?: DisqualificationUpdateDataInput
  upsert?: DisqualificationUpsertNestedInput
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

export interface DisqualificationUpdateDataInput {
  name?: String
  description?: String
}

export interface WorkspaceWhereUniqueInput {
  id?: ID_Input
}

export interface DisqualificationUpsertNestedInput {
  update: DisqualificationUpdateDataInput
  create: DisqualificationCreateInput
}

export interface DisqualificationLinkWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface FileWhereUniqueInput {
  id?: ID_Input
  url?: String
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

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface CandidateUpdateManyWithoutSubscribersInput {
  create?: CandidateCreateWithoutSubscribersInput[] | CandidateCreateWithoutSubscribersInput
  connect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
  disconnect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
  delete?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput
  update?: CandidateUpdateWithWhereUniqueWithoutSubscribersInput[] | CandidateUpdateWithWhereUniqueWithoutSubscribersInput
  upsert?: CandidateUpsertWithWhereUniqueWithoutSubscribersInput[] | CandidateUpsertWithWhereUniqueWithoutSubscribersInput
}

export interface FieldWhereUniqueInput {
  id?: ID_Input
}

export interface CandidateUpdateWithWhereUniqueWithoutSubscribersInput {
  where: CandidateWhereUniqueInput
  data: CandidateUpdateWithoutSubscribersDataInput
}

export interface FieldUpdateInput {
  type?: FieldType
  label?: String
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
  fields?: FieldLinkUpdateManyInput
  tasks?: TaskUpdateManyWithoutCandidateInput
  applications?: ApplicationUpdateManyWithoutCandidateInput
  comments?: CommentUpdateManyInput
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

export interface FileUpdateOneInput {
  create?: FileCreateInput
  connect?: FileWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: FileUpdateDataInput
  upsert?: FileUpsertNestedInput
}

export interface FileUpdateInput {
  size?: Int
  type?: String
  name?: String
  url?: String
}

export interface FileUpdateDataInput {
  size?: Int
  type?: String
  name?: String
  url?: String
}

export interface DisqualificationLinkUpdateInput {
  justification?: String
  disqualification?: DisqualificationUpdateOneRequiredInput
  createdBy?: UserUpdateOneRequiredInput
}

export interface FileUpsertNestedInput {
  update: FileUpdateDataInput
  create: FileCreateInput
}

export interface NotificationUpdateInput {
  type?: NotificationType
  user?: UserUpdateOneRequiredWithoutNotificationsInput
  event?: EventUpdateOneRequiredInput
}

export interface FileUpdateManyInput {
  create?: FileCreateInput[] | FileCreateInput
  connect?: FileWhereUniqueInput[] | FileWhereUniqueInput
  disconnect?: FileWhereUniqueInput[] | FileWhereUniqueInput
  delete?: FileWhereUniqueInput[] | FileWhereUniqueInput
  update?: FileUpdateWithWhereUniqueNestedInput[] | FileUpdateWithWhereUniqueNestedInput
  upsert?: FileUpsertWithWhereUniqueNestedInput[] | FileUpsertWithWhereUniqueNestedInput
}

export interface UserUpsertWithoutEventsInput {
  update: UserUpdateWithoutEventsDataInput
  create: UserCreateWithoutEventsInput
}

export interface FileUpdateWithWhereUniqueNestedInput {
  where: FileWhereUniqueInput
  data: FileUpdateDataInput
}

export interface EventUpsertWithoutActorUserInput {
  update: EventUpdateWithoutActorUserDataInput
  create: EventCreateWithoutActorUserInput
}

export interface FileUpsertWithWhereUniqueNestedInput {
  where: FileWhereUniqueInput
  update: FileUpdateDataInput
  create: FileCreateInput
}

export interface NotificationUpsertWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput
  update: NotificationUpdateWithoutUserDataInput
  create: NotificationCreateWithoutUserInput
}

export interface TagUpdateManyInput {
  create?: TagCreateInput[] | TagCreateInput
  connect?: TagWhereUniqueInput[] | TagWhereUniqueInput
  disconnect?: TagWhereUniqueInput[] | TagWhereUniqueInput
  delete?: TagWhereUniqueInput[] | TagWhereUniqueInput
  update?: TagUpdateWithWhereUniqueNestedInput[] | TagUpdateWithWhereUniqueNestedInput
  upsert?: TagUpsertWithWhereUniqueNestedInput[] | TagUpsertWithWhereUniqueNestedInput
}

export interface JobUpsertWithWhereUniqueWithoutSubscribersInput {
  where: JobWhereUniqueInput
  update: JobUpdateWithoutSubscribersDataInput
  create: JobCreateWithoutSubscribersInput
}

export interface TagUpdateWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput
  data: TagUpdateDataInput
}

export interface JobUpsertWithoutEventsInput {
  update: JobUpdateWithoutEventsDataInput
  create: JobCreateWithoutEventsInput
}

export interface TagUpdateDataInput {
  label?: String
}

export interface CandidateUpdateOneRequiredWithoutApplicationsInput {
  create?: CandidateCreateWithoutApplicationsInput
  connect?: CandidateWhereUniqueInput
  update?: CandidateUpdateWithoutApplicationsDataInput
  upsert?: CandidateUpsertWithoutApplicationsInput
}

export interface TagUpsertWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput
  update: TagUpdateDataInput
  create: TagCreateInput
}

export interface TaskUpsertWithWhereUniqueWithoutCandidateInput {
  where: TaskWhereUniqueInput
  update: TaskUpdateWithoutCandidateDataInput
  create: TaskCreateWithoutCandidateInput
}

export interface FieldLinkUpdateManyInput {
  create?: FieldLinkCreateInput[] | FieldLinkCreateInput
  connect?: FieldLinkWhereUniqueInput[] | FieldLinkWhereUniqueInput
  disconnect?: FieldLinkWhereUniqueInput[] | FieldLinkWhereUniqueInput
  delete?: FieldLinkWhereUniqueInput[] | FieldLinkWhereUniqueInput
  update?: FieldLinkUpdateWithWhereUniqueNestedInput[] | FieldLinkUpdateWithWhereUniqueNestedInput
  upsert?: FieldLinkUpsertWithWhereUniqueNestedInput[] | FieldLinkUpsertWithWhereUniqueNestedInput
}

export interface ApplicationUpsertWithWhereUniqueWithoutCandidateInput {
  where: ApplicationWhereUniqueInput
  update: ApplicationUpdateWithoutCandidateDataInput
  create: ApplicationCreateWithoutCandidateInput
}

export interface FieldLinkUpdateWithWhereUniqueNestedInput {
  where: FieldLinkWhereUniqueInput
  data: FieldLinkUpdateDataInput
}

export interface LocationUpdateWithWhereUniqueNestedInput {
  where: LocationWhereUniqueInput
  data: LocationUpdateDataInput
}

export interface FieldLinkUpdateDataInput {
  value?: String
  field?: FieldUpdateOneRequiredInput
}

export interface CommentUpdateOneInput {
  create?: CommentCreateInput
  connect?: CommentWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CommentUpdateDataInput
  upsert?: CommentUpsertNestedInput
}

export interface FieldUpdateOneRequiredInput {
  create?: FieldCreateInput
  connect?: FieldWhereUniqueInput
  update?: FieldUpdateDataInput
  upsert?: FieldUpsertNestedInput
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

export interface FieldUpdateDataInput {
  type?: FieldType
  label?: String
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

export interface FieldUpsertNestedInput {
  update: FieldUpdateDataInput
  create: FieldCreateInput
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

export interface FieldLinkUpsertWithWhereUniqueNestedInput {
  where: FieldLinkWhereUniqueInput
  update: FieldLinkUpdateDataInput
  create: FieldLinkCreateInput
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

export interface TaskUpdateManyWithoutCandidateInput {
  create?: TaskCreateWithoutCandidateInput[] | TaskCreateWithoutCandidateInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  disconnect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  delete?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  update?: TaskUpdateWithWhereUniqueWithoutCandidateInput[] | TaskUpdateWithWhereUniqueWithoutCandidateInput
  upsert?: TaskUpsertWithWhereUniqueWithoutCandidateInput[] | TaskUpsertWithWhereUniqueWithoutCandidateInput
}

export interface CandidateCreateresumesStringInput {
  set?: String[] | String
}

export interface TaskUpdateWithWhereUniqueWithoutCandidateInput {
  where: TaskWhereUniqueInput
  data: TaskUpdateWithoutCandidateDataInput
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

export interface TaskUpdateWithoutCandidateDataInput {
  title?: String
  description?: String
  dueAt?: DateTime
  subscribers?: UserUpdateManyWithoutSubscriptionTasksInput
  owners?: UserUpdateManyWithoutTasksInput
}

export interface NotificationCreateWithoutUserInput {
  type: NotificationType
  event: EventCreateOneInput
}

export interface UserUpdateManyWithoutSubscriptionTasksInput {
  create?: UserCreateWithoutSubscriptionTasksInput[] | UserCreateWithoutSubscriptionTasksInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutSubscriptionTasksInput[] | UserUpdateWithWhereUniqueWithoutSubscriptionTasksInput
  upsert?: UserUpsertWithWhereUniqueWithoutSubscriptionTasksInput[] | UserUpsertWithWhereUniqueWithoutSubscriptionTasksInput
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

export interface UserUpdateWithWhereUniqueWithoutSubscriptionTasksInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutSubscriptionTasksDataInput
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

export interface TaskUpdateManyWithoutOwnersInput {
  create?: TaskCreateWithoutOwnersInput[] | TaskCreateWithoutOwnersInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  disconnect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  delete?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
  update?: TaskUpdateWithWhereUniqueWithoutOwnersInput[] | TaskUpdateWithWhereUniqueWithoutOwnersInput
  upsert?: TaskUpsertWithWhereUniqueWithoutOwnersInput[] | TaskUpsertWithWhereUniqueWithoutOwnersInput
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

export interface TaskUpdateWithWhereUniqueWithoutOwnersInput {
  where: TaskWhereUniqueInput
  data: TaskUpdateWithoutOwnersDataInput
}

export interface DisqualificationLinkCreateInput {
  justification?: String
  disqualification: DisqualificationCreateOneInput
  createdBy: UserCreateOneInput
}

export interface TaskUpdateWithoutOwnersDataInput {
  title?: String
  description?: String
  dueAt?: DateTime
  subscribers?: UserUpdateManyWithoutSubscriptionTasksInput
  candidate?: CandidateUpdateOneWithoutTasksInput
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

export interface CandidateUpdateOneWithoutTasksInput {
  create?: CandidateCreateWithoutTasksInput
  connect?: CandidateWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CandidateUpdateWithoutTasksDataInput
  upsert?: CandidateUpsertWithoutTasksInput
}

export interface FileCreateInput {
  size: Int
  type: String
  name: String
  url: String
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
  fields?: FieldLinkUpdateManyInput
  applications?: ApplicationUpdateManyWithoutCandidateInput
  comments?: CommentUpdateManyInput
}

export interface FieldLinkCreateManyInput {
  create?: FieldLinkCreateInput[] | FieldLinkCreateInput
  connect?: FieldLinkWhereUniqueInput[] | FieldLinkWhereUniqueInput
}

export interface ApplicationUpdateManyWithoutCandidateInput {
  create?: ApplicationCreateWithoutCandidateInput[] | ApplicationCreateWithoutCandidateInput
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  disconnect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  delete?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput
  update?: ApplicationUpdateWithWhereUniqueWithoutCandidateInput[] | ApplicationUpdateWithWhereUniqueWithoutCandidateInput
  upsert?: ApplicationUpsertWithWhereUniqueWithoutCandidateInput[] | ApplicationUpsertWithWhereUniqueWithoutCandidateInput
}

export interface TaskCreateManyWithoutCandidateInput {
  create?: TaskCreateWithoutCandidateInput[] | TaskCreateWithoutCandidateInput
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput
}

export interface ApplicationUpdateWithWhereUniqueWithoutCandidateInput {
  where: ApplicationWhereUniqueInput
  data: ApplicationUpdateWithoutCandidateDataInput
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

export interface ApplicationUpdateWithoutCandidateDataInput {
  type?: ApplicationType
  disqualificationLink?: DisqualificationLinkUpdateOneInput
  stage?: StageUpdateOneRequiredInput
  job?: JobUpdateOneRequiredWithoutApplicationsInput
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

export interface StageUpdateOneRequiredInput {
  create?: StageCreateInput
  connect?: StageWhereUniqueInput
  update?: StageUpdateDataInput
  upsert?: StageUpsertNestedInput
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

export interface StageUpdateDataInput {
  name?: String
  description?: String
  type?: StageType
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

export interface StageUpsertNestedInput {
  update: StageUpdateDataInput
  create: StageCreateInput
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

export interface JobUpdateOneRequiredWithoutApplicationsInput {
  create?: JobCreateWithoutApplicationsInput
  connect?: JobWhereUniqueInput
  update?: JobUpdateWithoutApplicationsDataInput
  upsert?: JobUpsertWithoutApplicationsInput
}

export interface CandidateWhereUniqueInput {
  id?: ID_Input
}

export interface JobUpdateWithoutApplicationsDataInput {
  type?: JobType
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

export interface TaskWhereUniqueInput {
  id?: ID_Input
}

export interface EventUpdateManyWithoutTargetJobInput {
  create?: EventCreateWithoutTargetJobInput[] | EventCreateWithoutTargetJobInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  disconnect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  delete?: EventWhereUniqueInput[] | EventWhereUniqueInput
  update?: EventUpdateWithWhereUniqueWithoutTargetJobInput[] | EventUpdateWithWhereUniqueWithoutTargetJobInput
  upsert?: EventUpsertWithWhereUniqueWithoutTargetJobInput[] | EventUpsertWithWhereUniqueWithoutTargetJobInput
}

export interface TaskUpdateInput {
  title?: String
  description?: String
  dueAt?: DateTime
  subscribers?: UserUpdateManyWithoutSubscriptionTasksInput
  owners?: UserUpdateManyWithoutTasksInput
  candidate?: CandidateUpdateOneWithoutTasksInput
}

export interface EventUpdateWithWhereUniqueWithoutTargetJobInput {
  where: EventWhereUniqueInput
  data: EventUpdateWithoutTargetJobDataInput
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
  fields?: FieldLinkUpdateManyInput
  tasks?: TaskUpdateManyWithoutCandidateInput
  applications?: ApplicationUpdateManyWithoutCandidateInput
  comments?: CommentUpdateManyInput
}

export interface EventUpdateWithoutTargetJobDataInput {
  type?: EventType
  actorType?: EventActorType
  targetType?: EventTargetType
  actorUser?: UserUpdateOneWithoutEventsInput
  actorCandidate?: CandidateUpdateOneInput
  targetCandidate?: CandidateUpdateOneWithoutEventsInput
  targetTask?: TaskUpdateOneInput
  targetWorkspace?: WorkspaceUpdateOneWithoutEventsInput
}

export interface JobUpdateInput {
  type?: JobType
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

export interface TaskUpdateOneInput {
  create?: TaskCreateInput
  connect?: TaskWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: TaskUpdateDataInput
  upsert?: TaskUpsertNestedInput
}

export interface WorkspaceUpsertWithoutCandidatesInput {
  update: WorkspaceUpdateWithoutCandidatesDataInput
  create: WorkspaceCreateWithoutCandidatesInput
}

export interface TaskUpdateDataInput {
  title?: String
  description?: String
  dueAt?: DateTime
  subscribers?: UserUpdateManyWithoutSubscriptionTasksInput
  owners?: UserUpdateManyWithoutTasksInput
  candidate?: CandidateUpdateOneWithoutTasksInput
}

export interface CandidateUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: CandidateWhereUniqueInput
  update: CandidateUpdateWithoutWorkspaceDataInput
  create: CandidateCreateWithoutWorkspaceInput
}

export interface UserUpdateManyWithoutTasksInput {
  create?: UserCreateWithoutTasksInput[] | UserCreateWithoutTasksInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutTasksInput[] | UserUpdateWithWhereUniqueWithoutTasksInput
  upsert?: UserUpsertWithWhereUniqueWithoutTasksInput[] | UserUpsertWithWhereUniqueWithoutTasksInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserUpdateWithWhereUniqueWithoutTasksInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutTasksDataInput
}

export interface LocationUpsertWithWhereUniqueNestedInput {
  where: LocationWhereUniqueInput
  update: LocationUpdateDataInput
  create: LocationCreateInput
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

export interface WorkspaceCreateInput {
  name: String
  events?: EventCreateManyWithoutTargetWorkspaceInput
  users?: UserCreateManyWithoutWorkspaceInput
  jobs?: JobCreateManyWithoutWorkspaceInput
  candidates?: CandidateCreateManyWithoutWorkspaceInput
  workflows?: WorkflowCreateManyInput
  workflowDefault?: WorkflowCreateOneInput
  invites?: InviteCreateManyInput
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

export interface TaskUpdateWithWhereUniqueWithoutSubscribersInput {
  where: TaskWhereUniqueInput
  data: TaskUpdateWithoutSubscribersDataInput
}

export interface CandidateCreatephonesInput {
  set?: String[] | String
}

export interface TaskUpdateWithoutSubscribersDataInput {
  title?: String
  description?: String
  dueAt?: DateTime
  owners?: UserUpdateManyWithoutTasksInput
  candidate?: CandidateUpdateOneWithoutTasksInput
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

export interface TaskUpsertWithWhereUniqueWithoutSubscribersInput {
  where: TaskWhereUniqueInput
  update: TaskUpdateWithoutSubscribersDataInput
  create: TaskCreateWithoutSubscribersInput
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

export interface UserUpsertWithWhereUniqueWithoutTasksInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutTasksDataInput
  create: UserCreateWithoutTasksInput
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

export interface TaskUpsertNestedInput {
  update: TaskUpdateDataInput
  create: TaskCreateInput
}

export interface DisqualificationCreateInput {
  name: String
  description?: String
}

export interface WorkspaceUpdateOneWithoutEventsInput {
  create?: WorkspaceCreateWithoutEventsInput
  connect?: WorkspaceWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: WorkspaceUpdateWithoutEventsDataInput
  upsert?: WorkspaceUpsertWithoutEventsInput
}

export interface TagCreateManyInput {
  create?: TagCreateInput[] | TagCreateInput
  connect?: TagWhereUniqueInput[] | TagWhereUniqueInput
}

export interface WorkspaceUpdateWithoutEventsDataInput {
  name?: String
  users?: UserUpdateManyWithoutWorkspaceInput
  jobs?: JobUpdateManyWithoutWorkspaceInput
  candidates?: CandidateUpdateManyWithoutWorkspaceInput
  workflows?: WorkflowUpdateManyInput
  workflowDefault?: WorkflowUpdateOneInput
  invites?: InviteUpdateManyInput
  tags?: TagUpdateManyInput
}

export interface UserCreateManyWithoutSubscriptionTasksInput {
  create?: UserCreateWithoutSubscriptionTasksInput[] | UserCreateWithoutSubscriptionTasksInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface WorkflowUpdateManyInput {
  create?: WorkflowCreateInput[] | WorkflowCreateInput
  connect?: WorkflowWhereUniqueInput[] | WorkflowWhereUniqueInput
  disconnect?: WorkflowWhereUniqueInput[] | WorkflowWhereUniqueInput
  delete?: WorkflowWhereUniqueInput[] | WorkflowWhereUniqueInput
  update?: WorkflowUpdateWithWhereUniqueNestedInput[] | WorkflowUpdateWithWhereUniqueNestedInput
  upsert?: WorkflowUpsertWithWhereUniqueNestedInput[] | WorkflowUpsertWithWhereUniqueNestedInput
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

export interface WorkflowUpdateWithWhereUniqueNestedInput {
  where: WorkflowWhereUniqueInput
  data: WorkflowUpdateDataInput
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

export interface WorkflowUpdateDataInput {
  name?: String
  description?: String
  stages?: StageUpdateManyInput
  disqualifications?: DisqualificationUpdateManyInput
  fields?: FieldUpdateManyInput
}

export interface EventWhereUniqueInput {
  id?: ID_Input
}

export interface StageUpdateManyInput {
  create?: StageCreateInput[] | StageCreateInput
  connect?: StageWhereUniqueInput[] | StageWhereUniqueInput
  disconnect?: StageWhereUniqueInput[] | StageWhereUniqueInput
  delete?: StageWhereUniqueInput[] | StageWhereUniqueInput
  update?: StageUpdateWithWhereUniqueNestedInput[] | StageUpdateWithWhereUniqueNestedInput
  upsert?: StageUpsertWithWhereUniqueNestedInput[] | StageUpsertWithWhereUniqueNestedInput
}

export interface EventUpdateInput {
  type?: EventType
  actorType?: EventActorType
  targetType?: EventTargetType
  actorUser?: UserUpdateOneWithoutEventsInput
  actorCandidate?: CandidateUpdateOneInput
  targetCandidate?: CandidateUpdateOneWithoutEventsInput
  targetJob?: JobUpdateOneWithoutEventsInput
  targetTask?: TaskUpdateOneInput
  targetWorkspace?: WorkspaceUpdateOneWithoutEventsInput
}

export interface StageUpdateWithWhereUniqueNestedInput {
  where: StageWhereUniqueInput
  data: StageUpdateDataInput
}

export interface JobUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: JobWhereUniqueInput
  update: JobUpdateWithoutWorkspaceDataInput
  create: JobCreateWithoutWorkspaceInput
}

export interface StageUpsertWithWhereUniqueNestedInput {
  where: StageWhereUniqueInput
  update: StageUpdateDataInput
  create: StageCreateInput
}

export interface CandidateUpsertWithoutApplicationsInput {
  update: CandidateUpdateWithoutApplicationsDataInput
  create: CandidateCreateWithoutApplicationsInput
}

export interface DisqualificationUpdateManyInput {
  create?: DisqualificationCreateInput[] | DisqualificationCreateInput
  connect?: DisqualificationWhereUniqueInput[] | DisqualificationWhereUniqueInput
  disconnect?: DisqualificationWhereUniqueInput[] | DisqualificationWhereUniqueInput
  delete?: DisqualificationWhereUniqueInput[] | DisqualificationWhereUniqueInput
  update?: DisqualificationUpdateWithWhereUniqueNestedInput[] | DisqualificationUpdateWithWhereUniqueNestedInput
  upsert?: DisqualificationUpsertWithWhereUniqueNestedInput[] | DisqualificationUpsertWithWhereUniqueNestedInput
}

export interface CommentUpsertWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput
  update: CommentUpdateDataInput
  create: CommentCreateInput
}

export interface DisqualificationUpdateWithWhereUniqueNestedInput {
  where: DisqualificationWhereUniqueInput
  data: DisqualificationUpdateDataInput
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

export interface DisqualificationUpsertWithWhereUniqueNestedInput {
  where: DisqualificationWhereUniqueInput
  update: DisqualificationUpdateDataInput
  create: DisqualificationCreateInput
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

export interface FieldUpdateManyInput {
  create?: FieldCreateInput[] | FieldCreateInput
  connect?: FieldWhereUniqueInput[] | FieldWhereUniqueInput
  disconnect?: FieldWhereUniqueInput[] | FieldWhereUniqueInput
  delete?: FieldWhereUniqueInput[] | FieldWhereUniqueInput
  update?: FieldUpdateWithWhereUniqueNestedInput[] | FieldUpdateWithWhereUniqueNestedInput
  upsert?: FieldUpsertWithWhereUniqueNestedInput[] | FieldUpsertWithWhereUniqueNestedInput
}

export interface ApplicationCreateWithoutJobInput {
  type: ApplicationType
  disqualificationLink?: DisqualificationLinkCreateOneInput
  stage: StageCreateOneInput
  candidate: CandidateCreateOneWithoutApplicationsInput
}

export interface FieldUpdateWithWhereUniqueNestedInput {
  where: FieldWhereUniqueInput
  data: FieldUpdateDataInput
}

export interface FieldCreateOneInput {
  create?: FieldCreateInput
  connect?: FieldWhereUniqueInput
}

export interface FieldUpsertWithWhereUniqueNestedInput {
  where: FieldWhereUniqueInput
  update: FieldUpdateDataInput
  create: FieldCreateInput
}

export interface DisqualificationLinkSubscriptionWhereInput {
  AND?: DisqualificationLinkSubscriptionWhereInput[] | DisqualificationLinkSubscriptionWhereInput
  OR?: DisqualificationLinkSubscriptionWhereInput[] | DisqualificationLinkSubscriptionWhereInput
  NOT?: DisqualificationLinkSubscriptionWhereInput[] | DisqualificationLinkSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: DisqualificationLinkWhereInput
}

export interface WorkflowUpsertWithWhereUniqueNestedInput {
  where: WorkflowWhereUniqueInput
  update: WorkflowUpdateDataInput
  create: WorkflowCreateInput
}

export interface CommentWhereUniqueInput {
  id?: ID_Input
}

export interface WorkflowUpdateOneInput {
  create?: WorkflowCreateInput
  connect?: WorkflowWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: WorkflowUpdateDataInput
  upsert?: WorkflowUpsertNestedInput
}

export interface CandidateUpsertWithoutEventsInput {
  update: CandidateUpdateWithoutEventsDataInput
  create: CandidateCreateWithoutEventsInput
}

export interface WorkflowUpsertNestedInput {
  update: WorkflowUpdateDataInput
  create: WorkflowCreateInput
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

export interface InviteUpdateManyInput {
  create?: InviteCreateInput[] | InviteCreateInput
  connect?: InviteWhereUniqueInput[] | InviteWhereUniqueInput
  disconnect?: InviteWhereUniqueInput[] | InviteWhereUniqueInput
  delete?: InviteWhereUniqueInput[] | InviteWhereUniqueInput
  update?: InviteUpdateWithWhereUniqueNestedInput[] | InviteUpdateWithWhereUniqueNestedInput
  upsert?: InviteUpsertWithWhereUniqueNestedInput[] | InviteUpsertWithWhereUniqueNestedInput
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

export interface InviteUpdateWithWhereUniqueNestedInput {
  where: InviteWhereUniqueInput
  data: InviteUpdateDataInput
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

export interface InviteUpdateDataInput {
  email?: String
  expireAt?: DateTime
  invitedBy?: UserUpdateOneRequiredInput
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

export interface WorkflowUpdateOneRequiredInput {
  create?: WorkflowCreateInput
  connect?: WorkflowWhereUniqueInput
  update?: WorkflowUpdateDataInput
  upsert?: WorkflowUpsertNestedInput
}

export interface EventUpsertWithWhereUniqueWithoutTargetJobInput {
  where: EventWhereUniqueInput
  update: EventUpdateWithoutTargetJobDataInput
  create: EventCreateWithoutTargetJobInput
}

export interface WorkspaceUpsertWithoutEventsInput {
  update: WorkspaceUpdateWithoutEventsDataInput
  create: WorkspaceCreateWithoutEventsInput
}

export interface InviteUpsertWithWhereUniqueNestedInput {
  where: InviteWhereUniqueInput
  update: InviteUpdateDataInput
  create: InviteCreateInput
}

export interface TaskUpsertWithWhereUniqueWithoutOwnersInput {
  where: TaskWhereUniqueInput
  update: TaskUpdateWithoutOwnersDataInput
  create: TaskCreateWithoutOwnersInput
}

export interface ApplicationWhereUniqueInput {
  id?: ID_Input
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

export interface CandidateCreatesourceInput {
  set?: String[] | String
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

/*
 * A connection to a list of items.

 */
export interface WorkspaceConnection {
  pageInfo: PageInfo
  edges: WorkspaceEdge[]
  aggregate: AggregateWorkspace
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
export interface WorkflowEdge {
  node: Workflow
  cursor: String
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

export interface AggregateField {
  count: Int
}

export interface Invite extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  email: String
  expireAt: DateTime
  invitedBy: User
}

/*
 * A connection to a list of items.

 */
export interface FieldConnection {
  pageInfo: PageInfo
  edges: FieldEdge[]
  aggregate: AggregateField
}

export interface WorkflowPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description?: String
}

/*
 * An edge in a connection.

 */
export interface TagEdge {
  node: Tag
  cursor: String
}

export interface WorkspaceSubscriptionPayload {
  mutation: MutationType
  node?: Workspace
  updatedFields?: String[]
  previousValues?: WorkspacePreviousValues
}

export interface AggregateTask {
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
export interface StageEdge {
  node: Stage
  cursor: String
}

export interface JobSubscriptionPayload {
  mutation: MutationType
  node?: Job
  updatedFields?: String[]
  previousValues?: JobPreviousValues
}

export interface AggregateUser {
  count: Int
}

export interface JobPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  type: JobType
  department?: String
  name: String
  description?: String
  requirements?: String
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
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

/*
 * An edge in a connection.

 */
export interface DisqualificationEdge {
  node: Disqualification
  cursor: String
}

export interface ApplicationSubscriptionPayload {
  mutation: MutationType
  node?: Application
  updatedFields?: String[]
  previousValues?: ApplicationPreviousValues
}

export interface AggregateEvent {
  count: Int
}

export interface ApplicationPreviousValues {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  type: ApplicationType
}

/*
 * A connection to a list of items.

 */
export interface EventConnection {
  pageInfo: PageInfo
  edges: EventEdge[]
  aggregate: AggregateEvent
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
export interface FieldLinkEdge {
  node: FieldLink
  cursor: String
}

export interface NotificationSubscriptionPayload {
  mutation: MutationType
  node?: Notification
  updatedFields?: String[]
  previousValues?: NotificationPreviousValues
}

export interface AggregateFile {
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
export interface FileConnection {
  pageInfo: PageInfo
  edges: FileEdge[]
  aggregate: AggregateFile
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

/*
 * An edge in a connection.

 */
export interface InviteEdge {
  node: Invite
  cursor: String
}

export interface DisqualificationLinkSubscriptionPayload {
  mutation: MutationType
  node?: DisqualificationLink
  updatedFields?: String[]
  previousValues?: DisqualificationLinkPreviousValues
}

export interface AggregateCandidate {
  count: Int
}

export interface DisqualificationLinkPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  justification?: String
}

/*
 * A connection to a list of items.

 */
export interface CandidateConnection {
  pageInfo: PageInfo
  edges: CandidateEdge[]
  aggregate: AggregateCandidate
}

export interface Field extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  type: FieldType
  label: String
}

/*
 * An edge in a connection.

 */
export interface LocationEdge {
  node: Location
  cursor: String
}

export interface LocationSubscriptionPayload {
  mutation: MutationType
  node?: Location
  updatedFields?: String[]
  previousValues?: LocationPreviousValues
}

export interface AggregateDisqualificationLink {
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
export interface DisqualificationLinkConnection {
  pageInfo: PageInfo
  edges: DisqualificationLinkEdge[]
  aggregate: AggregateDisqualificationLink
}

export interface FieldLink extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  field: Field
  value?: String
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

export interface AggregateApplication {
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
  resumesString: String[]
  coverLettersString: String[]
  source: String[]
}

/*
 * A connection to a list of items.

 */
export interface ApplicationConnection {
  pageInfo: PageInfo
  edges: ApplicationEdge[]
  aggregate: AggregateApplication
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
export interface JobEdge {
  node: Job
  cursor: String
}

export interface InviteSubscriptionPayload {
  mutation: MutationType
  node?: Invite
  updatedFields?: String[]
  previousValues?: InvitePreviousValues
}

export interface AggregateWorkspace {
  count: Int
}

export interface InvitePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  email: String
  expireAt: DateTime
}

export interface CommentSubscriptionPayload {
  mutation: MutationType
  node?: Comment
  updatedFields?: String[]
  previousValues?: CommentPreviousValues
}

export interface WorkflowSubscriptionPayload {
  mutation: MutationType
  node?: Workflow
  updatedFields?: String[]
  previousValues?: WorkflowPreviousValues
}

export interface AggregateWorkflow {
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
export interface FieldEdge {
  node: Field
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
export interface TagConnection {
  pageInfo: PageInfo
  edges: TagEdge[]
  aggregate: AggregateTag
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

export interface AggregateStage {
  count: Int
}

export interface FieldLinkSubscriptionPayload {
  mutation: MutationType
  node?: FieldLink
  updatedFields?: String[]
  previousValues?: FieldLinkPreviousValues
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface FieldLinkPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  value?: String
}

/*
 * A connection to a list of items.

 */
export interface DisqualificationConnection {
  pageInfo: PageInfo
  edges: DisqualificationEdge[]
  aggregate: AggregateDisqualification
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

export interface AggregateFieldLink {
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
export interface FileEdge {
  node: File
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
export interface InviteConnection {
  pageInfo: PageInfo
  edges: InviteEdge[]
  aggregate: AggregateInvite
}

export interface Stage extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description?: String
  type: StageType
}

export interface AggregateLocation {
  count: Int
}

export interface DisqualificationSubscriptionPayload {
  mutation: MutationType
  node?: Disqualification
  updatedFields?: String[]
  previousValues?: DisqualificationPreviousValues
}

/*
 * An edge in a connection.

 */
export interface DisqualificationLinkEdge {
  node: DisqualificationLink
  cursor: String
}

export interface DisqualificationPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description?: String
}

/*
 * A connection to a list of items.

 */
export interface NotificationConnection {
  pageInfo: PageInfo
  edges: NotificationEdge[]
  aggregate: AggregateNotification
}

export interface Disqualification extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description?: String
}

export interface AggregateJob {
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
export interface WorkspaceEdge {
  node: Workspace
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
export interface WorkflowConnection {
  pageInfo: PageInfo
  edges: WorkflowEdge[]
  aggregate: AggregateWorkflow
}

export interface DisqualificationLink extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  disqualification: Disqualification
  createdBy: User
  justification?: String
}

/*
 * An edge in a connection.

 */
export interface TaskEdge {
  node: Task
  cursor: String
}

export interface StageSubscriptionPayload {
  mutation: MutationType
  node?: Stage
  updatedFields?: String[]
  previousValues?: StagePreviousValues
}

export interface AggregateDisqualification {
  count: Int
}

export interface StagePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description?: String
  type: StageType
}

/*
 * A connection to a list of items.

 */
export interface FieldLinkConnection {
  pageInfo: PageInfo
  edges: FieldLinkEdge[]
  aggregate: AggregateFieldLink
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

export interface AggregateNotification {
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
  type: JobType
  department?: String
  locations?: Location[]
  name: String
  description?: String
  requirements?: String
}

export interface AggregateTag {
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
export interface EventEdge {
  node: Event
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

export interface FieldPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  type: FieldType
  label: String
}

export interface FieldSubscriptionPayload {
  mutation: MutationType
  node?: Field
  updatedFields?: String[]
  previousValues?: FieldPreviousValues
}

export interface Notification extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  type: NotificationType
  user: User
  event: Event
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
export interface ApplicationEdge {
  node: Application
  cursor: String
}

export interface AggregateInvite {
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
export interface CommentEdge {
  node: Comment
  cursor: String
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