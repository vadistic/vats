import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    application: <T = Application | null>(args: { where: ApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    applications: <T = Array<Application | null>>(args: { where?: ApplicationWhereInput | null, orderBy?: ApplicationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    applicationsConnection: <T = ApplicationConnection>(args: { where?: ApplicationWhereInput | null, orderBy?: ApplicationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    candidate: <T = Candidate | null>(args: { where: CandidateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    candidates: <T = Array<Candidate | null>>(args: { where?: CandidateWhereInput | null, orderBy?: CandidateOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    candidatesConnection: <T = CandidateConnection>(args: { where?: CandidateWhereInput | null, orderBy?: CandidateOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    comment: <T = Comment | null>(args: { where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    comments: <T = Array<Comment | null>>(args: { where?: CommentWhereInput | null, orderBy?: CommentOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    commentsConnection: <T = CommentConnection>(args: { where?: CommentWhereInput | null, orderBy?: CommentOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    disqualification: <T = Disqualification | null>(args: { where: DisqualificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    disqualifications: <T = Array<Disqualification | null>>(args: { where?: DisqualificationWhereInput | null, orderBy?: DisqualificationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    disqualificationsConnection: <T = DisqualificationConnection>(args: { where?: DisqualificationWhereInput | null, orderBy?: DisqualificationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    disqualificationLink: <T = DisqualificationLink | null>(args: { where: DisqualificationLinkWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    disqualificationLinks: <T = Array<DisqualificationLink | null>>(args: { where?: DisqualificationLinkWhereInput | null, orderBy?: DisqualificationLinkOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    disqualificationLinksConnection: <T = DisqualificationLinkConnection>(args: { where?: DisqualificationLinkWhereInput | null, orderBy?: DisqualificationLinkOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    event: <T = Event | null>(args: { where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    events: <T = Array<Event | null>>(args: { where?: EventWhereInput | null, orderBy?: EventOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    eventsConnection: <T = EventConnection>(args: { where?: EventWhereInput | null, orderBy?: EventOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    field: <T = Field | null>(args: { where: FieldWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    fields: <T = Array<Field | null>>(args: { where?: FieldWhereInput | null, orderBy?: FieldOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    fieldsConnection: <T = FieldConnection>(args: { where?: FieldWhereInput | null, orderBy?: FieldOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    fieldLink: <T = FieldLink | null>(args: { where: FieldLinkWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    fieldLinks: <T = Array<FieldLink | null>>(args: { where?: FieldLinkWhereInput | null, orderBy?: FieldLinkOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    fieldLinksConnection: <T = FieldLinkConnection>(args: { where?: FieldLinkWhereInput | null, orderBy?: FieldLinkOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    file: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    files: <T = Array<File | null>>(args: { where?: FileWhereInput | null, orderBy?: FileOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    filesConnection: <T = FileConnection>(args: { where?: FileWhereInput | null, orderBy?: FileOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    invite: <T = Invite | null>(args: { where: InviteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    invites: <T = Array<Invite | null>>(args: { where?: InviteWhereInput | null, orderBy?: InviteOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    invitesConnection: <T = InviteConnection>(args: { where?: InviteWhereInput | null, orderBy?: InviteOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    job: <T = Job | null>(args: { where: JobWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    jobs: <T = Array<Job | null>>(args: { where?: JobWhereInput | null, orderBy?: JobOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    jobsConnection: <T = JobConnection>(args: { where?: JobWhereInput | null, orderBy?: JobOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    location: <T = Location | null>(args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    locations: <T = Array<Location | null>>(args: { where?: LocationWhereInput | null, orderBy?: LocationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    locationsConnection: <T = LocationConnection>(args: { where?: LocationWhereInput | null, orderBy?: LocationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notification: <T = Notification | null>(args: { where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    notifications: <T = Array<Notification | null>>(args: { where?: NotificationWhereInput | null, orderBy?: NotificationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notificationsConnection: <T = NotificationConnection>(args: { where?: NotificationWhereInput | null, orderBy?: NotificationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stage: <T = Stage | null>(args: { where: StageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    stages: <T = Array<Stage | null>>(args: { where?: StageWhereInput | null, orderBy?: StageOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stagesConnection: <T = StageConnection>(args: { where?: StageWhereInput | null, orderBy?: StageOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tag: <T = Tag | null>(args: { where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    tags: <T = Array<Tag | null>>(args: { where?: TagWhereInput | null, orderBy?: TagOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tagsConnection: <T = TagConnection>(args: { where?: TagWhereInput | null, orderBy?: TagOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    task: <T = Task | null>(args: { where: TaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    tasks: <T = Array<Task | null>>(args: { where?: TaskWhereInput | null, orderBy?: TaskOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tasksConnection: <T = TaskConnection>(args: { where?: TaskWhereInput | null, orderBy?: TaskOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    workflow: <T = Workflow | null>(args: { where: WorkflowWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    workflows: <T = Array<Workflow | null>>(args: { where?: WorkflowWhereInput | null, orderBy?: WorkflowOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    workflowsConnection: <T = WorkflowConnection>(args: { where?: WorkflowWhereInput | null, orderBy?: WorkflowOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    workspace: <T = Workspace | null>(args: { where: WorkspaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    workspaces: <T = Array<Workspace | null>>(args: { where?: WorkspaceWhereInput | null, orderBy?: WorkspaceOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    workspacesConnection: <T = WorkspaceConnection>(args: { where?: WorkspaceWhereInput | null, orderBy?: WorkspaceOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createApplication: <T = Application>(args: { data: ApplicationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateApplication: <T = Application | null>(args: { data: ApplicationUpdateInput, where: ApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyApplications: <T = BatchPayload>(args: { data: ApplicationUpdateManyMutationInput, where?: ApplicationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertApplication: <T = Application>(args: { where: ApplicationWhereUniqueInput, create: ApplicationCreateInput, update: ApplicationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteApplication: <T = Application | null>(args: { where: ApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyApplications: <T = BatchPayload>(args: { where?: ApplicationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCandidate: <T = Candidate>(args: { data: CandidateCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCandidate: <T = Candidate | null>(args: { data: CandidateUpdateInput, where: CandidateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyCandidates: <T = BatchPayload>(args: { data: CandidateUpdateManyMutationInput, where?: CandidateWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCandidate: <T = Candidate>(args: { where: CandidateWhereUniqueInput, create: CandidateCreateInput, update: CandidateUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCandidate: <T = Candidate | null>(args: { where: CandidateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyCandidates: <T = BatchPayload>(args: { where?: CandidateWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createComment: <T = Comment>(args: { data: CommentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateComment: <T = Comment | null>(args: { data: CommentUpdateInput, where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyComments: <T = BatchPayload>(args: { data: CommentUpdateManyMutationInput, where?: CommentWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertComment: <T = Comment>(args: { where: CommentWhereUniqueInput, create: CommentCreateInput, update: CommentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteComment: <T = Comment | null>(args: { where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyComments: <T = BatchPayload>(args: { where?: CommentWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createDisqualification: <T = Disqualification>(args: { data: DisqualificationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateDisqualification: <T = Disqualification | null>(args: { data: DisqualificationUpdateInput, where: DisqualificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyDisqualifications: <T = BatchPayload>(args: { data: DisqualificationUpdateManyMutationInput, where?: DisqualificationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertDisqualification: <T = Disqualification>(args: { where: DisqualificationWhereUniqueInput, create: DisqualificationCreateInput, update: DisqualificationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteDisqualification: <T = Disqualification | null>(args: { where: DisqualificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyDisqualifications: <T = BatchPayload>(args: { where?: DisqualificationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createDisqualificationLink: <T = DisqualificationLink>(args: { data: DisqualificationLinkCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateDisqualificationLink: <T = DisqualificationLink | null>(args: { data: DisqualificationLinkUpdateInput, where: DisqualificationLinkWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyDisqualificationLinks: <T = BatchPayload>(args: { data: DisqualificationLinkUpdateManyMutationInput, where?: DisqualificationLinkWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertDisqualificationLink: <T = DisqualificationLink>(args: { where: DisqualificationLinkWhereUniqueInput, create: DisqualificationLinkCreateInput, update: DisqualificationLinkUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteDisqualificationLink: <T = DisqualificationLink | null>(args: { where: DisqualificationLinkWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyDisqualificationLinks: <T = BatchPayload>(args: { where?: DisqualificationLinkWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createEvent: <T = Event>(args: { data: EventCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateEvent: <T = Event | null>(args: { data: EventUpdateInput, where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyEvents: <T = BatchPayload>(args: { data: EventUpdateManyMutationInput, where?: EventWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertEvent: <T = Event>(args: { where: EventWhereUniqueInput, create: EventCreateInput, update: EventUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteEvent: <T = Event | null>(args: { where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyEvents: <T = BatchPayload>(args: { where?: EventWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createField: <T = Field>(args: { data: FieldCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateField: <T = Field | null>(args: { data: FieldUpdateInput, where: FieldWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyFields: <T = BatchPayload>(args: { data: FieldUpdateManyMutationInput, where?: FieldWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertField: <T = Field>(args: { where: FieldWhereUniqueInput, create: FieldCreateInput, update: FieldUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteField: <T = Field | null>(args: { where: FieldWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyFields: <T = BatchPayload>(args: { where?: FieldWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFieldLink: <T = FieldLink>(args: { data: FieldLinkCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateFieldLink: <T = FieldLink | null>(args: { data: FieldLinkUpdateInput, where: FieldLinkWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyFieldLinks: <T = BatchPayload>(args: { data: FieldLinkUpdateManyMutationInput, where?: FieldLinkWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFieldLink: <T = FieldLink>(args: { where: FieldLinkWhereUniqueInput, create: FieldLinkCreateInput, update: FieldLinkUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteFieldLink: <T = FieldLink | null>(args: { where: FieldLinkWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyFieldLinks: <T = BatchPayload>(args: { where?: FieldLinkWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFile: <T = File>(args: { data: FileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateFile: <T = File | null>(args: { data: FileUpdateInput, where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyFiles: <T = BatchPayload>(args: { data: FileUpdateManyMutationInput, where?: FileWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFile: <T = File>(args: { where: FileWhereUniqueInput, create: FileCreateInput, update: FileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteFile: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyFiles: <T = BatchPayload>(args: { where?: FileWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createInvite: <T = Invite>(args: { data: InviteCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateInvite: <T = Invite | null>(args: { data: InviteUpdateInput, where: InviteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyInvites: <T = BatchPayload>(args: { data: InviteUpdateManyMutationInput, where?: InviteWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertInvite: <T = Invite>(args: { where: InviteWhereUniqueInput, create: InviteCreateInput, update: InviteUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteInvite: <T = Invite | null>(args: { where: InviteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyInvites: <T = BatchPayload>(args: { where?: InviteWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createJob: <T = Job>(args: { data: JobCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateJob: <T = Job | null>(args: { data: JobUpdateInput, where: JobWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyJobs: <T = BatchPayload>(args: { data: JobUpdateManyMutationInput, where?: JobWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertJob: <T = Job>(args: { where: JobWhereUniqueInput, create: JobCreateInput, update: JobUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteJob: <T = Job | null>(args: { where: JobWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyJobs: <T = BatchPayload>(args: { where?: JobWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLocation: <T = Location>(args: { data: LocationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLocation: <T = Location | null>(args: { data: LocationUpdateInput, where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyLocations: <T = BatchPayload>(args: { data: LocationUpdateManyMutationInput, where?: LocationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLocation: <T = Location>(args: { where: LocationWhereUniqueInput, create: LocationCreateInput, update: LocationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLocation: <T = Location | null>(args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyLocations: <T = BatchPayload>(args: { where?: LocationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createNotification: <T = Notification>(args: { data: NotificationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateNotification: <T = Notification | null>(args: { data: NotificationUpdateInput, where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyNotifications: <T = BatchPayload>(args: { data: NotificationUpdateManyMutationInput, where?: NotificationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertNotification: <T = Notification>(args: { where: NotificationWhereUniqueInput, create: NotificationCreateInput, update: NotificationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteNotification: <T = Notification | null>(args: { where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyNotifications: <T = BatchPayload>(args: { where?: NotificationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createStage: <T = Stage>(args: { data: StageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateStage: <T = Stage | null>(args: { data: StageUpdateInput, where: StageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyStages: <T = BatchPayload>(args: { data: StageUpdateManyMutationInput, where?: StageWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertStage: <T = Stage>(args: { where: StageWhereUniqueInput, create: StageCreateInput, update: StageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteStage: <T = Stage | null>(args: { where: StageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyStages: <T = BatchPayload>(args: { where?: StageWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTag: <T = Tag>(args: { data: TagCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTag: <T = Tag | null>(args: { data: TagUpdateInput, where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyTags: <T = BatchPayload>(args: { data: TagUpdateManyMutationInput, where?: TagWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTag: <T = Tag>(args: { where: TagWhereUniqueInput, create: TagCreateInput, update: TagUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteTag: <T = Tag | null>(args: { where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyTags: <T = BatchPayload>(args: { where?: TagWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTask: <T = Task>(args: { data: TaskCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTask: <T = Task | null>(args: { data: TaskUpdateInput, where: TaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyTasks: <T = BatchPayload>(args: { data: TaskUpdateManyMutationInput, where?: TaskWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTask: <T = Task>(args: { where: TaskWhereUniqueInput, create: TaskCreateInput, update: TaskUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteTask: <T = Task | null>(args: { where: TaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyTasks: <T = BatchPayload>(args: { where?: TaskWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createWorkflow: <T = Workflow>(args: { data: WorkflowCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateWorkflow: <T = Workflow | null>(args: { data: WorkflowUpdateInput, where: WorkflowWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyWorkflows: <T = BatchPayload>(args: { data: WorkflowUpdateManyMutationInput, where?: WorkflowWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertWorkflow: <T = Workflow>(args: { where: WorkflowWhereUniqueInput, create: WorkflowCreateInput, update: WorkflowUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteWorkflow: <T = Workflow | null>(args: { where: WorkflowWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyWorkflows: <T = BatchPayload>(args: { where?: WorkflowWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createWorkspace: <T = Workspace>(args: { data: WorkspaceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateWorkspace: <T = Workspace | null>(args: { data: WorkspaceUpdateInput, where: WorkspaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyWorkspaces: <T = BatchPayload>(args: { data: WorkspaceUpdateManyMutationInput, where?: WorkspaceWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertWorkspace: <T = Workspace>(args: { where: WorkspaceWhereUniqueInput, create: WorkspaceCreateInput, update: WorkspaceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteWorkspace: <T = Workspace | null>(args: { where: WorkspaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyWorkspaces: <T = BatchPayload>(args: { where?: WorkspaceWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    application: <T = ApplicationSubscriptionPayload | null>(args: { where?: ApplicationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    candidate: <T = CandidateSubscriptionPayload | null>(args: { where?: CandidateSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    comment: <T = CommentSubscriptionPayload | null>(args: { where?: CommentSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    disqualification: <T = DisqualificationSubscriptionPayload | null>(args: { where?: DisqualificationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    disqualificationLink: <T = DisqualificationLinkSubscriptionPayload | null>(args: { where?: DisqualificationLinkSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    event: <T = EventSubscriptionPayload | null>(args: { where?: EventSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    field: <T = FieldSubscriptionPayload | null>(args: { where?: FieldSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    fieldLink: <T = FieldLinkSubscriptionPayload | null>(args: { where?: FieldLinkSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    file: <T = FileSubscriptionPayload | null>(args: { where?: FileSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    invite: <T = InviteSubscriptionPayload | null>(args: { where?: InviteSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    job: <T = JobSubscriptionPayload | null>(args: { where?: JobSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    location: <T = LocationSubscriptionPayload | null>(args: { where?: LocationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    notification: <T = NotificationSubscriptionPayload | null>(args: { where?: NotificationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    stage: <T = StageSubscriptionPayload | null>(args: { where?: StageSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    tag: <T = TagSubscriptionPayload | null>(args: { where?: TagSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    task: <T = TaskSubscriptionPayload | null>(args: { where?: TaskSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    workflow: <T = WorkflowSubscriptionPayload | null>(args: { where?: WorkflowSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    workspace: <T = WorkspaceSubscriptionPayload | null>(args: { where?: WorkspaceSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  Application: (where?: ApplicationWhereInput) => Promise<boolean>
  Candidate: (where?: CandidateWhereInput) => Promise<boolean>
  Comment: (where?: CommentWhereInput) => Promise<boolean>
  Disqualification: (where?: DisqualificationWhereInput) => Promise<boolean>
  DisqualificationLink: (where?: DisqualificationLinkWhereInput) => Promise<boolean>
  Event: (where?: EventWhereInput) => Promise<boolean>
  Field: (where?: FieldWhereInput) => Promise<boolean>
  FieldLink: (where?: FieldLinkWhereInput) => Promise<boolean>
  File: (where?: FileWhereInput) => Promise<boolean>
  Invite: (where?: InviteWhereInput) => Promise<boolean>
  Job: (where?: JobWhereInput) => Promise<boolean>
  Location: (where?: LocationWhereInput) => Promise<boolean>
  Notification: (where?: NotificationWhereInput) => Promise<boolean>
  Stage: (where?: StageWhereInput) => Promise<boolean>
  Tag: (where?: TagWhereInput) => Promise<boolean>
  Task: (where?: TaskWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  Workflow: (where?: WorkflowWhereInput) => Promise<boolean>
  Workspace: (where?: WorkspaceWhereInput) => Promise<boolean>
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

type Application {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  type: ApplicationType!
  disqualificationLink: DisqualificationLink
  stage: Stage!
  job: Job!
  candidate: Candidate!
}

type ApplicationConnection {
  pageInfo: PageInfo!
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

type ApplicationEdge {
  node: Application!
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

input ApplicationScalarWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  type: ApplicationType
  type_not: ApplicationType
  type_in: [ApplicationType!]
  type_not_in: [ApplicationType!]
  AND: [ApplicationScalarWhereInput!]
  OR: [ApplicationScalarWhereInput!]
  NOT: [ApplicationScalarWhereInput!]
}

type ApplicationSubscriptionPayload {
  mutation: MutationType!
  node: Application
  updatedFields: [String!]
  previousValues: ApplicationPreviousValues
}

input ApplicationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ApplicationWhereInput
  AND: [ApplicationSubscriptionWhereInput!]
  OR: [ApplicationSubscriptionWhereInput!]
  NOT: [ApplicationSubscriptionWhereInput!]
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

input ApplicationUpdateManyDataInput {
  type: ApplicationType
}

input ApplicationUpdateManyMutationInput {
  type: ApplicationType
}

input ApplicationUpdateManyWithoutCandidateInput {
  create: [ApplicationCreateWithoutCandidateInput!]
  delete: [ApplicationWhereUniqueInput!]
  connect: [ApplicationWhereUniqueInput!]
  disconnect: [ApplicationWhereUniqueInput!]
  update: [ApplicationUpdateWithWhereUniqueWithoutCandidateInput!]
  upsert: [ApplicationUpsertWithWhereUniqueWithoutCandidateInput!]
  deleteMany: [ApplicationScalarWhereInput!]
  updateMany: [ApplicationUpdateManyWithWhereNestedInput!]
}

input ApplicationUpdateManyWithoutJobInput {
  create: [ApplicationCreateWithoutJobInput!]
  delete: [ApplicationWhereUniqueInput!]
  connect: [ApplicationWhereUniqueInput!]
  disconnect: [ApplicationWhereUniqueInput!]
  update: [ApplicationUpdateWithWhereUniqueWithoutJobInput!]
  upsert: [ApplicationUpsertWithWhereUniqueWithoutJobInput!]
  deleteMany: [ApplicationScalarWhereInput!]
  updateMany: [ApplicationUpdateManyWithWhereNestedInput!]
}

input ApplicationUpdateManyWithWhereNestedInput {
  where: ApplicationScalarWhereInput!
  data: ApplicationUpdateManyDataInput!
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
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  type: ApplicationType
  type_not: ApplicationType
  type_in: [ApplicationType!]
  type_not_in: [ApplicationType!]
  disqualificationLink: DisqualificationLinkWhereInput
  stage: StageWhereInput
  job: JobWhereInput
  candidate: CandidateWhereInput
  AND: [ApplicationWhereInput!]
  OR: [ApplicationWhereInput!]
  NOT: [ApplicationWhereInput!]
}

input ApplicationWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

type Candidate {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  workspace: Workspace!
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
  subscribers(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  firstName: String!
  lastName: String!
  emails: [String!]!
  phones: [String!]!
  links: [String!]!
  avatar: File
  metaCompany: String
  metaHeadline: String
  metaPosition: String
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

type CandidateConnection {
  pageInfo: PageInfo!
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
  workspace: WorkspaceCreateOneWithoutCandidatesInput!
  events: EventCreateManyWithoutTargetCandidateInput
  subscribers: UserCreateManyWithoutSubscriptionCandidatesInput
  firstName: String!
  lastName: String!
  emails: CandidateCreateemailsInput
  phones: CandidateCreatephonesInput
  links: CandidateCreatelinksInput
  avatar: FileCreateOneInput
  metaCompany: String
  metaHeadline: String
  metaPosition: String
  resumesString: CandidateCreateresumesStringInput
  resumesFile: FileCreateManyInput
  coverLettersString: CandidateCreatecoverLettersStringInput
  coverLettersFile: FileCreateManyInput
  tags: TagCreateManyInput
  source: CandidateCreatesourceInput
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
  workspace: WorkspaceCreateOneWithoutCandidatesInput!
  events: EventCreateManyWithoutTargetCandidateInput
  subscribers: UserCreateManyWithoutSubscriptionCandidatesInput
  firstName: String!
  lastName: String!
  emails: CandidateCreateemailsInput
  phones: CandidateCreatephonesInput
  links: CandidateCreatelinksInput
  avatar: FileCreateOneInput
  metaCompany: String
  metaHeadline: String
  metaPosition: String
  resumesString: CandidateCreateresumesStringInput
  resumesFile: FileCreateManyInput
  coverLettersString: CandidateCreatecoverLettersStringInput
  coverLettersFile: FileCreateManyInput
  tags: TagCreateManyInput
  source: CandidateCreatesourceInput
  fields: FieldLinkCreateManyInput
  tasks: TaskCreateManyWithoutCandidateInput
  comments: CommentCreateManyInput
}

input CandidateCreateWithoutEventsInput {
  workspace: WorkspaceCreateOneWithoutCandidatesInput!
  subscribers: UserCreateManyWithoutSubscriptionCandidatesInput
  firstName: String!
  lastName: String!
  emails: CandidateCreateemailsInput
  phones: CandidateCreatephonesInput
  links: CandidateCreatelinksInput
  avatar: FileCreateOneInput
  metaCompany: String
  metaHeadline: String
  metaPosition: String
  resumesString: CandidateCreateresumesStringInput
  resumesFile: FileCreateManyInput
  coverLettersString: CandidateCreatecoverLettersStringInput
  coverLettersFile: FileCreateManyInput
  tags: TagCreateManyInput
  source: CandidateCreatesourceInput
  fields: FieldLinkCreateManyInput
  tasks: TaskCreateManyWithoutCandidateInput
  applications: ApplicationCreateManyWithoutCandidateInput
  comments: CommentCreateManyInput
}

input CandidateCreateWithoutSubscribersInput {
  workspace: WorkspaceCreateOneWithoutCandidatesInput!
  events: EventCreateManyWithoutTargetCandidateInput
  firstName: String!
  lastName: String!
  emails: CandidateCreateemailsInput
  phones: CandidateCreatephonesInput
  links: CandidateCreatelinksInput
  avatar: FileCreateOneInput
  metaCompany: String
  metaHeadline: String
  metaPosition: String
  resumesString: CandidateCreateresumesStringInput
  resumesFile: FileCreateManyInput
  coverLettersString: CandidateCreatecoverLettersStringInput
  coverLettersFile: FileCreateManyInput
  tags: TagCreateManyInput
  source: CandidateCreatesourceInput
  fields: FieldLinkCreateManyInput
  tasks: TaskCreateManyWithoutCandidateInput
  applications: ApplicationCreateManyWithoutCandidateInput
  comments: CommentCreateManyInput
}

input CandidateCreateWithoutTasksInput {
  workspace: WorkspaceCreateOneWithoutCandidatesInput!
  events: EventCreateManyWithoutTargetCandidateInput
  subscribers: UserCreateManyWithoutSubscriptionCandidatesInput
  firstName: String!
  lastName: String!
  emails: CandidateCreateemailsInput
  phones: CandidateCreatephonesInput
  links: CandidateCreatelinksInput
  avatar: FileCreateOneInput
  metaCompany: String
  metaHeadline: String
  metaPosition: String
  resumesString: CandidateCreateresumesStringInput
  resumesFile: FileCreateManyInput
  coverLettersString: CandidateCreatecoverLettersStringInput
  coverLettersFile: FileCreateManyInput
  tags: TagCreateManyInput
  source: CandidateCreatesourceInput
  fields: FieldLinkCreateManyInput
  applications: ApplicationCreateManyWithoutCandidateInput
  comments: CommentCreateManyInput
}

input CandidateCreateWithoutWorkspaceInput {
  events: EventCreateManyWithoutTargetCandidateInput
  subscribers: UserCreateManyWithoutSubscriptionCandidatesInput
  firstName: String!
  lastName: String!
  emails: CandidateCreateemailsInput
  phones: CandidateCreatephonesInput
  links: CandidateCreatelinksInput
  avatar: FileCreateOneInput
  metaCompany: String
  metaHeadline: String
  metaPosition: String
  resumesString: CandidateCreateresumesStringInput
  resumesFile: FileCreateManyInput
  coverLettersString: CandidateCreatecoverLettersStringInput
  coverLettersFile: FileCreateManyInput
  tags: TagCreateManyInput
  source: CandidateCreatesourceInput
  fields: FieldLinkCreateManyInput
  tasks: TaskCreateManyWithoutCandidateInput
  applications: ApplicationCreateManyWithoutCandidateInput
  comments: CommentCreateManyInput
}

type CandidateEdge {
  node: Candidate!
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
  metaCompany_ASC
  metaCompany_DESC
  metaHeadline_ASC
  metaHeadline_DESC
  metaPosition_ASC
  metaPosition_DESC
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
  metaCompany: String
  metaHeadline: String
  metaPosition: String
  resumesString: [String!]!
  coverLettersString: [String!]!
  source: [String!]!
}

input CandidateScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  metaCompany: String
  metaCompany_not: String
  metaCompany_in: [String!]
  metaCompany_not_in: [String!]
  metaCompany_lt: String
  metaCompany_lte: String
  metaCompany_gt: String
  metaCompany_gte: String
  metaCompany_contains: String
  metaCompany_not_contains: String
  metaCompany_starts_with: String
  metaCompany_not_starts_with: String
  metaCompany_ends_with: String
  metaCompany_not_ends_with: String
  metaHeadline: String
  metaHeadline_not: String
  metaHeadline_in: [String!]
  metaHeadline_not_in: [String!]
  metaHeadline_lt: String
  metaHeadline_lte: String
  metaHeadline_gt: String
  metaHeadline_gte: String
  metaHeadline_contains: String
  metaHeadline_not_contains: String
  metaHeadline_starts_with: String
  metaHeadline_not_starts_with: String
  metaHeadline_ends_with: String
  metaHeadline_not_ends_with: String
  metaPosition: String
  metaPosition_not: String
  metaPosition_in: [String!]
  metaPosition_not_in: [String!]
  metaPosition_lt: String
  metaPosition_lte: String
  metaPosition_gt: String
  metaPosition_gte: String
  metaPosition_contains: String
  metaPosition_not_contains: String
  metaPosition_starts_with: String
  metaPosition_not_starts_with: String
  metaPosition_ends_with: String
  metaPosition_not_ends_with: String
  AND: [CandidateScalarWhereInput!]
  OR: [CandidateScalarWhereInput!]
  NOT: [CandidateScalarWhereInput!]
}

type CandidateSubscriptionPayload {
  mutation: MutationType!
  node: Candidate
  updatedFields: [String!]
  previousValues: CandidatePreviousValues
}

input CandidateSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CandidateWhereInput
  AND: [CandidateSubscriptionWhereInput!]
  OR: [CandidateSubscriptionWhereInput!]
  NOT: [CandidateSubscriptionWhereInput!]
}

input CandidateUpdatecoverLettersStringInput {
  set: [String!]
}

input CandidateUpdateDataInput {
  workspace: WorkspaceUpdateOneRequiredWithoutCandidatesInput
  events: EventUpdateManyWithoutTargetCandidateInput
  subscribers: UserUpdateManyWithoutSubscriptionCandidatesInput
  firstName: String
  lastName: String
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  avatar: FileUpdateOneInput
  metaCompany: String
  metaHeadline: String
  metaPosition: String
  resumesString: CandidateUpdateresumesStringInput
  resumesFile: FileUpdateManyInput
  coverLettersString: CandidateUpdatecoverLettersStringInput
  coverLettersFile: FileUpdateManyInput
  tags: TagUpdateManyInput
  source: CandidateUpdatesourceInput
  fields: FieldLinkUpdateManyInput
  tasks: TaskUpdateManyWithoutCandidateInput
  applications: ApplicationUpdateManyWithoutCandidateInput
  comments: CommentUpdateManyInput
}

input CandidateUpdateemailsInput {
  set: [String!]
}

input CandidateUpdateInput {
  workspace: WorkspaceUpdateOneRequiredWithoutCandidatesInput
  events: EventUpdateManyWithoutTargetCandidateInput
  subscribers: UserUpdateManyWithoutSubscriptionCandidatesInput
  firstName: String
  lastName: String
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  avatar: FileUpdateOneInput
  metaCompany: String
  metaHeadline: String
  metaPosition: String
  resumesString: CandidateUpdateresumesStringInput
  resumesFile: FileUpdateManyInput
  coverLettersString: CandidateUpdatecoverLettersStringInput
  coverLettersFile: FileUpdateManyInput
  tags: TagUpdateManyInput
  source: CandidateUpdatesourceInput
  fields: FieldLinkUpdateManyInput
  tasks: TaskUpdateManyWithoutCandidateInput
  applications: ApplicationUpdateManyWithoutCandidateInput
  comments: CommentUpdateManyInput
}

input CandidateUpdatelinksInput {
  set: [String!]
}

input CandidateUpdateManyDataInput {
  firstName: String
  lastName: String
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  metaCompany: String
  metaHeadline: String
  metaPosition: String
  resumesString: CandidateUpdateresumesStringInput
  coverLettersString: CandidateUpdatecoverLettersStringInput
  source: CandidateUpdatesourceInput
}

input CandidateUpdateManyMutationInput {
  firstName: String
  lastName: String
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  metaCompany: String
  metaHeadline: String
  metaPosition: String
  resumesString: CandidateUpdateresumesStringInput
  coverLettersString: CandidateUpdatecoverLettersStringInput
  source: CandidateUpdatesourceInput
}

input CandidateUpdateManyWithoutSubscribersInput {
  create: [CandidateCreateWithoutSubscribersInput!]
  delete: [CandidateWhereUniqueInput!]
  connect: [CandidateWhereUniqueInput!]
  disconnect: [CandidateWhereUniqueInput!]
  update: [CandidateUpdateWithWhereUniqueWithoutSubscribersInput!]
  upsert: [CandidateUpsertWithWhereUniqueWithoutSubscribersInput!]
  deleteMany: [CandidateScalarWhereInput!]
  updateMany: [CandidateUpdateManyWithWhereNestedInput!]
}

input CandidateUpdateManyWithoutWorkspaceInput {
  create: [CandidateCreateWithoutWorkspaceInput!]
  delete: [CandidateWhereUniqueInput!]
  connect: [CandidateWhereUniqueInput!]
  disconnect: [CandidateWhereUniqueInput!]
  update: [CandidateUpdateWithWhereUniqueWithoutWorkspaceInput!]
  upsert: [CandidateUpsertWithWhereUniqueWithoutWorkspaceInput!]
  deleteMany: [CandidateScalarWhereInput!]
  updateMany: [CandidateUpdateManyWithWhereNestedInput!]
}

input CandidateUpdateManyWithWhereNestedInput {
  where: CandidateScalarWhereInput!
  data: CandidateUpdateManyDataInput!
}

input CandidateUpdateOneInput {
  create: CandidateCreateInput
  update: CandidateUpdateDataInput
  upsert: CandidateUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: CandidateWhereUniqueInput
}

input CandidateUpdateOneRequiredWithoutApplicationsInput {
  create: CandidateCreateWithoutApplicationsInput
  update: CandidateUpdateWithoutApplicationsDataInput
  upsert: CandidateUpsertWithoutApplicationsInput
  connect: CandidateWhereUniqueInput
}

input CandidateUpdateOneWithoutEventsInput {
  create: CandidateCreateWithoutEventsInput
  update: CandidateUpdateWithoutEventsDataInput
  upsert: CandidateUpsertWithoutEventsInput
  delete: Boolean
  disconnect: Boolean
  connect: CandidateWhereUniqueInput
}

input CandidateUpdateOneWithoutTasksInput {
  create: CandidateCreateWithoutTasksInput
  update: CandidateUpdateWithoutTasksDataInput
  upsert: CandidateUpsertWithoutTasksInput
  delete: Boolean
  disconnect: Boolean
  connect: CandidateWhereUniqueInput
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
  workspace: WorkspaceUpdateOneRequiredWithoutCandidatesInput
  events: EventUpdateManyWithoutTargetCandidateInput
  subscribers: UserUpdateManyWithoutSubscriptionCandidatesInput
  firstName: String
  lastName: String
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  avatar: FileUpdateOneInput
  metaCompany: String
  metaHeadline: String
  metaPosition: String
  resumesString: CandidateUpdateresumesStringInput
  resumesFile: FileUpdateManyInput
  coverLettersString: CandidateUpdatecoverLettersStringInput
  coverLettersFile: FileUpdateManyInput
  tags: TagUpdateManyInput
  source: CandidateUpdatesourceInput
  fields: FieldLinkUpdateManyInput
  tasks: TaskUpdateManyWithoutCandidateInput
  comments: CommentUpdateManyInput
}

input CandidateUpdateWithoutEventsDataInput {
  workspace: WorkspaceUpdateOneRequiredWithoutCandidatesInput
  subscribers: UserUpdateManyWithoutSubscriptionCandidatesInput
  firstName: String
  lastName: String
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  avatar: FileUpdateOneInput
  metaCompany: String
  metaHeadline: String
  metaPosition: String
  resumesString: CandidateUpdateresumesStringInput
  resumesFile: FileUpdateManyInput
  coverLettersString: CandidateUpdatecoverLettersStringInput
  coverLettersFile: FileUpdateManyInput
  tags: TagUpdateManyInput
  source: CandidateUpdatesourceInput
  fields: FieldLinkUpdateManyInput
  tasks: TaskUpdateManyWithoutCandidateInput
  applications: ApplicationUpdateManyWithoutCandidateInput
  comments: CommentUpdateManyInput
}

input CandidateUpdateWithoutSubscribersDataInput {
  workspace: WorkspaceUpdateOneRequiredWithoutCandidatesInput
  events: EventUpdateManyWithoutTargetCandidateInput
  firstName: String
  lastName: String
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  avatar: FileUpdateOneInput
  metaCompany: String
  metaHeadline: String
  metaPosition: String
  resumesString: CandidateUpdateresumesStringInput
  resumesFile: FileUpdateManyInput
  coverLettersString: CandidateUpdatecoverLettersStringInput
  coverLettersFile: FileUpdateManyInput
  tags: TagUpdateManyInput
  source: CandidateUpdatesourceInput
  fields: FieldLinkUpdateManyInput
  tasks: TaskUpdateManyWithoutCandidateInput
  applications: ApplicationUpdateManyWithoutCandidateInput
  comments: CommentUpdateManyInput
}

input CandidateUpdateWithoutTasksDataInput {
  workspace: WorkspaceUpdateOneRequiredWithoutCandidatesInput
  events: EventUpdateManyWithoutTargetCandidateInput
  subscribers: UserUpdateManyWithoutSubscriptionCandidatesInput
  firstName: String
  lastName: String
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  avatar: FileUpdateOneInput
  metaCompany: String
  metaHeadline: String
  metaPosition: String
  resumesString: CandidateUpdateresumesStringInput
  resumesFile: FileUpdateManyInput
  coverLettersString: CandidateUpdatecoverLettersStringInput
  coverLettersFile: FileUpdateManyInput
  tags: TagUpdateManyInput
  source: CandidateUpdatesourceInput
  fields: FieldLinkUpdateManyInput
  applications: ApplicationUpdateManyWithoutCandidateInput
  comments: CommentUpdateManyInput
}

input CandidateUpdateWithoutWorkspaceDataInput {
  events: EventUpdateManyWithoutTargetCandidateInput
  subscribers: UserUpdateManyWithoutSubscriptionCandidatesInput
  firstName: String
  lastName: String
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  avatar: FileUpdateOneInput
  metaCompany: String
  metaHeadline: String
  metaPosition: String
  resumesString: CandidateUpdateresumesStringInput
  resumesFile: FileUpdateManyInput
  coverLettersString: CandidateUpdatecoverLettersStringInput
  coverLettersFile: FileUpdateManyInput
  tags: TagUpdateManyInput
  source: CandidateUpdatesourceInput
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  workspace: WorkspaceWhereInput
  events_every: EventWhereInput
  events_some: EventWhereInput
  events_none: EventWhereInput
  subscribers_every: UserWhereInput
  subscribers_some: UserWhereInput
  subscribers_none: UserWhereInput
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  avatar: FileWhereInput
  metaCompany: String
  metaCompany_not: String
  metaCompany_in: [String!]
  metaCompany_not_in: [String!]
  metaCompany_lt: String
  metaCompany_lte: String
  metaCompany_gt: String
  metaCompany_gte: String
  metaCompany_contains: String
  metaCompany_not_contains: String
  metaCompany_starts_with: String
  metaCompany_not_starts_with: String
  metaCompany_ends_with: String
  metaCompany_not_ends_with: String
  metaHeadline: String
  metaHeadline_not: String
  metaHeadline_in: [String!]
  metaHeadline_not_in: [String!]
  metaHeadline_lt: String
  metaHeadline_lte: String
  metaHeadline_gt: String
  metaHeadline_gte: String
  metaHeadline_contains: String
  metaHeadline_not_contains: String
  metaHeadline_starts_with: String
  metaHeadline_not_starts_with: String
  metaHeadline_ends_with: String
  metaHeadline_not_ends_with: String
  metaPosition: String
  metaPosition_not: String
  metaPosition_in: [String!]
  metaPosition_not_in: [String!]
  metaPosition_lt: String
  metaPosition_lte: String
  metaPosition_gt: String
  metaPosition_gte: String
  metaPosition_contains: String
  metaPosition_not_contains: String
  metaPosition_starts_with: String
  metaPosition_not_starts_with: String
  metaPosition_ends_with: String
  metaPosition_not_ends_with: String
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
  AND: [CandidateWhereInput!]
  OR: [CandidateWhereInput!]
  NOT: [CandidateWhereInput!]
}

input CandidateWhereUniqueInput {
  id: ID
}

type Comment {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  createdBy: User!
  parent: Comment
  content: String!
}

type CommentConnection {
  pageInfo: PageInfo!
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  createdBy: UserCreateOneInput!
  parent: CommentCreateOneInput
  content: String!
}

input CommentCreateManyInput {
  create: [CommentCreateInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateOneInput {
  create: CommentCreateInput
  connect: CommentWhereUniqueInput
}

type CommentEdge {
  node: Comment!
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

input CommentScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  AND: [CommentScalarWhereInput!]
  OR: [CommentScalarWhereInput!]
  NOT: [CommentScalarWhereInput!]
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CommentWhereInput
  AND: [CommentSubscriptionWhereInput!]
  OR: [CommentSubscriptionWhereInput!]
  NOT: [CommentSubscriptionWhereInput!]
}

input CommentUpdateDataInput {
  createdBy: UserUpdateOneRequiredInput
  parent: CommentUpdateOneInput
  content: String
}

input CommentUpdateInput {
  createdBy: UserUpdateOneRequiredInput
  parent: CommentUpdateOneInput
  content: String
}

input CommentUpdateManyDataInput {
  content: String
}

input CommentUpdateManyInput {
  create: [CommentCreateInput!]
  update: [CommentUpdateWithWhereUniqueNestedInput!]
  upsert: [CommentUpsertWithWhereUniqueNestedInput!]
  delete: [CommentWhereUniqueInput!]
  connect: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  deleteMany: [CommentScalarWhereInput!]
  updateMany: [CommentUpdateManyWithWhereNestedInput!]
}

input CommentUpdateManyMutationInput {
  content: String
}

input CommentUpdateManyWithWhereNestedInput {
  where: CommentScalarWhereInput!
  data: CommentUpdateManyDataInput!
}

input CommentUpdateOneInput {
  create: CommentCreateInput
  update: CommentUpdateDataInput
  upsert: CommentUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: CommentWhereUniqueInput
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdBy: UserWhereInput
  parent: CommentWhereInput
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  AND: [CommentWhereInput!]
  OR: [CommentWhereInput!]
  NOT: [CommentWhereInput!]
}

input CommentWhereUniqueInput {
  id: ID
}

scalar DateTime

type Disqualification {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  description: String
}

type DisqualificationConnection {
  pageInfo: PageInfo!
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

type DisqualificationEdge {
  node: Disqualification!
  cursor: String!
}

type DisqualificationLink {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  disqualification: Disqualification!
  createdBy: User!
  justification: String
}

type DisqualificationLinkConnection {
  pageInfo: PageInfo!
  edges: [DisqualificationLinkEdge]!
  aggregate: AggregateDisqualificationLink!
}

input DisqualificationLinkCreateInput {
  disqualification: DisqualificationCreateOneInput!
  createdBy: UserCreateOneInput!
  justification: String
}

input DisqualificationLinkCreateOneInput {
  create: DisqualificationLinkCreateInput
  connect: DisqualificationLinkWhereUniqueInput
}

type DisqualificationLinkEdge {
  node: DisqualificationLink!
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
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DisqualificationLinkWhereInput
  AND: [DisqualificationLinkSubscriptionWhereInput!]
  OR: [DisqualificationLinkSubscriptionWhereInput!]
  NOT: [DisqualificationLinkSubscriptionWhereInput!]
}

input DisqualificationLinkUpdateDataInput {
  disqualification: DisqualificationUpdateOneRequiredInput
  createdBy: UserUpdateOneRequiredInput
  justification: String
}

input DisqualificationLinkUpdateInput {
  disqualification: DisqualificationUpdateOneRequiredInput
  createdBy: UserUpdateOneRequiredInput
  justification: String
}

input DisqualificationLinkUpdateManyMutationInput {
  justification: String
}

input DisqualificationLinkUpdateOneInput {
  create: DisqualificationLinkCreateInput
  update: DisqualificationLinkUpdateDataInput
  upsert: DisqualificationLinkUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: DisqualificationLinkWhereUniqueInput
}

input DisqualificationLinkUpsertNestedInput {
  update: DisqualificationLinkUpdateDataInput!
  create: DisqualificationLinkCreateInput!
}

input DisqualificationLinkWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  disqualification: DisqualificationWhereInput
  createdBy: UserWhereInput
  justification: String
  justification_not: String
  justification_in: [String!]
  justification_not_in: [String!]
  justification_lt: String
  justification_lte: String
  justification_gt: String
  justification_gte: String
  justification_contains: String
  justification_not_contains: String
  justification_starts_with: String
  justification_not_starts_with: String
  justification_ends_with: String
  justification_not_ends_with: String
  AND: [DisqualificationLinkWhereInput!]
  OR: [DisqualificationLinkWhereInput!]
  NOT: [DisqualificationLinkWhereInput!]
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

input DisqualificationScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [DisqualificationScalarWhereInput!]
  OR: [DisqualificationScalarWhereInput!]
  NOT: [DisqualificationScalarWhereInput!]
}

type DisqualificationSubscriptionPayload {
  mutation: MutationType!
  node: Disqualification
  updatedFields: [String!]
  previousValues: DisqualificationPreviousValues
}

input DisqualificationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DisqualificationWhereInput
  AND: [DisqualificationSubscriptionWhereInput!]
  OR: [DisqualificationSubscriptionWhereInput!]
  NOT: [DisqualificationSubscriptionWhereInput!]
}

input DisqualificationUpdateDataInput {
  name: String
  description: String
}

input DisqualificationUpdateInput {
  name: String
  description: String
}

input DisqualificationUpdateManyDataInput {
  name: String
  description: String
}

input DisqualificationUpdateManyInput {
  create: [DisqualificationCreateInput!]
  update: [DisqualificationUpdateWithWhereUniqueNestedInput!]
  upsert: [DisqualificationUpsertWithWhereUniqueNestedInput!]
  delete: [DisqualificationWhereUniqueInput!]
  connect: [DisqualificationWhereUniqueInput!]
  disconnect: [DisqualificationWhereUniqueInput!]
  deleteMany: [DisqualificationScalarWhereInput!]
  updateMany: [DisqualificationUpdateManyWithWhereNestedInput!]
}

input DisqualificationUpdateManyMutationInput {
  name: String
  description: String
}

input DisqualificationUpdateManyWithWhereNestedInput {
  where: DisqualificationScalarWhereInput!
  data: DisqualificationUpdateManyDataInput!
}

input DisqualificationUpdateOneRequiredInput {
  create: DisqualificationCreateInput
  update: DisqualificationUpdateDataInput
  upsert: DisqualificationUpsertNestedInput
  connect: DisqualificationWhereUniqueInput
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [DisqualificationWhereInput!]
  OR: [DisqualificationWhereInput!]
  NOT: [DisqualificationWhereInput!]
}

input DisqualificationWhereUniqueInput {
  id: ID
}

type Event {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  type: EventType!
  actorType: EventActorType!
  actorUser: User
  actorCandidate: Candidate
  targetType: EventTargetType!
  targetCandidate: Candidate
  targetJob: Job
  targetTask: Task
  targetWorkspace: Workspace
}

enum EventActorType {
  System
  User
  Candidate
}

type EventConnection {
  pageInfo: PageInfo!
  edges: [EventEdge]!
  aggregate: AggregateEvent!
}

input EventCreateInput {
  type: EventType!
  actorType: EventActorType!
  actorUser: UserCreateOneWithoutEventsInput
  actorCandidate: CandidateCreateOneInput
  targetType: EventTargetType!
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
  actorCandidate: CandidateCreateOneInput
  targetType: EventTargetType!
  targetCandidate: CandidateCreateOneWithoutEventsInput
  targetJob: JobCreateOneWithoutEventsInput
  targetTask: TaskCreateOneInput
  targetWorkspace: WorkspaceCreateOneWithoutEventsInput
}

input EventCreateWithoutTargetCandidateInput {
  type: EventType!
  actorType: EventActorType!
  actorUser: UserCreateOneWithoutEventsInput
  actorCandidate: CandidateCreateOneInput
  targetType: EventTargetType!
  targetJob: JobCreateOneWithoutEventsInput
  targetTask: TaskCreateOneInput
  targetWorkspace: WorkspaceCreateOneWithoutEventsInput
}

input EventCreateWithoutTargetJobInput {
  type: EventType!
  actorType: EventActorType!
  actorUser: UserCreateOneWithoutEventsInput
  actorCandidate: CandidateCreateOneInput
  targetType: EventTargetType!
  targetCandidate: CandidateCreateOneWithoutEventsInput
  targetTask: TaskCreateOneInput
  targetWorkspace: WorkspaceCreateOneWithoutEventsInput
}

input EventCreateWithoutTargetWorkspaceInput {
  type: EventType!
  actorType: EventActorType!
  actorUser: UserCreateOneWithoutEventsInput
  actorCandidate: CandidateCreateOneInput
  targetType: EventTargetType!
  targetCandidate: CandidateCreateOneWithoutEventsInput
  targetJob: JobCreateOneWithoutEventsInput
  targetTask: TaskCreateOneInput
}

type EventEdge {
  node: Event!
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

input EventScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  type: EventType
  type_not: EventType
  type_in: [EventType!]
  type_not_in: [EventType!]
  actorType: EventActorType
  actorType_not: EventActorType
  actorType_in: [EventActorType!]
  actorType_not_in: [EventActorType!]
  targetType: EventTargetType
  targetType_not: EventTargetType
  targetType_in: [EventTargetType!]
  targetType_not_in: [EventTargetType!]
  AND: [EventScalarWhereInput!]
  OR: [EventScalarWhereInput!]
  NOT: [EventScalarWhereInput!]
}

type EventSubscriptionPayload {
  mutation: MutationType!
  node: Event
  updatedFields: [String!]
  previousValues: EventPreviousValues
}

input EventSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EventWhereInput
  AND: [EventSubscriptionWhereInput!]
  OR: [EventSubscriptionWhereInput!]
  NOT: [EventSubscriptionWhereInput!]
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
  actorUser: UserUpdateOneWithoutEventsInput
  actorCandidate: CandidateUpdateOneInput
  targetType: EventTargetType
  targetCandidate: CandidateUpdateOneWithoutEventsInput
  targetJob: JobUpdateOneWithoutEventsInput
  targetTask: TaskUpdateOneInput
  targetWorkspace: WorkspaceUpdateOneWithoutEventsInput
}

input EventUpdateInput {
  type: EventType
  actorType: EventActorType
  actorUser: UserUpdateOneWithoutEventsInput
  actorCandidate: CandidateUpdateOneInput
  targetType: EventTargetType
  targetCandidate: CandidateUpdateOneWithoutEventsInput
  targetJob: JobUpdateOneWithoutEventsInput
  targetTask: TaskUpdateOneInput
  targetWorkspace: WorkspaceUpdateOneWithoutEventsInput
}

input EventUpdateManyDataInput {
  type: EventType
  actorType: EventActorType
  targetType: EventTargetType
}

input EventUpdateManyMutationInput {
  type: EventType
  actorType: EventActorType
  targetType: EventTargetType
}

input EventUpdateManyWithoutTargetCandidateInput {
  create: [EventCreateWithoutTargetCandidateInput!]
  delete: [EventWhereUniqueInput!]
  connect: [EventWhereUniqueInput!]
  disconnect: [EventWhereUniqueInput!]
  update: [EventUpdateWithWhereUniqueWithoutTargetCandidateInput!]
  upsert: [EventUpsertWithWhereUniqueWithoutTargetCandidateInput!]
  deleteMany: [EventScalarWhereInput!]
  updateMany: [EventUpdateManyWithWhereNestedInput!]
}

input EventUpdateManyWithoutTargetJobInput {
  create: [EventCreateWithoutTargetJobInput!]
  delete: [EventWhereUniqueInput!]
  connect: [EventWhereUniqueInput!]
  disconnect: [EventWhereUniqueInput!]
  update: [EventUpdateWithWhereUniqueWithoutTargetJobInput!]
  upsert: [EventUpsertWithWhereUniqueWithoutTargetJobInput!]
  deleteMany: [EventScalarWhereInput!]
  updateMany: [EventUpdateManyWithWhereNestedInput!]
}

input EventUpdateManyWithoutTargetWorkspaceInput {
  create: [EventCreateWithoutTargetWorkspaceInput!]
  delete: [EventWhereUniqueInput!]
  connect: [EventWhereUniqueInput!]
  disconnect: [EventWhereUniqueInput!]
  update: [EventUpdateWithWhereUniqueWithoutTargetWorkspaceInput!]
  upsert: [EventUpsertWithWhereUniqueWithoutTargetWorkspaceInput!]
  deleteMany: [EventScalarWhereInput!]
  updateMany: [EventUpdateManyWithWhereNestedInput!]
}

input EventUpdateManyWithWhereNestedInput {
  where: EventScalarWhereInput!
  data: EventUpdateManyDataInput!
}

input EventUpdateOneRequiredInput {
  create: EventCreateInput
  update: EventUpdateDataInput
  upsert: EventUpsertNestedInput
  connect: EventWhereUniqueInput
}

input EventUpdateOneWithoutActorUserInput {
  create: EventCreateWithoutActorUserInput
  update: EventUpdateWithoutActorUserDataInput
  upsert: EventUpsertWithoutActorUserInput
  delete: Boolean
  disconnect: Boolean
  connect: EventWhereUniqueInput
}

input EventUpdateWithoutActorUserDataInput {
  type: EventType
  actorType: EventActorType
  actorCandidate: CandidateUpdateOneInput
  targetType: EventTargetType
  targetCandidate: CandidateUpdateOneWithoutEventsInput
  targetJob: JobUpdateOneWithoutEventsInput
  targetTask: TaskUpdateOneInput
  targetWorkspace: WorkspaceUpdateOneWithoutEventsInput
}

input EventUpdateWithoutTargetCandidateDataInput {
  type: EventType
  actorType: EventActorType
  actorUser: UserUpdateOneWithoutEventsInput
  actorCandidate: CandidateUpdateOneInput
  targetType: EventTargetType
  targetJob: JobUpdateOneWithoutEventsInput
  targetTask: TaskUpdateOneInput
  targetWorkspace: WorkspaceUpdateOneWithoutEventsInput
}

input EventUpdateWithoutTargetJobDataInput {
  type: EventType
  actorType: EventActorType
  actorUser: UserUpdateOneWithoutEventsInput
  actorCandidate: CandidateUpdateOneInput
  targetType: EventTargetType
  targetCandidate: CandidateUpdateOneWithoutEventsInput
  targetTask: TaskUpdateOneInput
  targetWorkspace: WorkspaceUpdateOneWithoutEventsInput
}

input EventUpdateWithoutTargetWorkspaceDataInput {
  type: EventType
  actorType: EventActorType
  actorUser: UserUpdateOneWithoutEventsInput
  actorCandidate: CandidateUpdateOneInput
  targetType: EventTargetType
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  type: EventType
  type_not: EventType
  type_in: [EventType!]
  type_not_in: [EventType!]
  actorType: EventActorType
  actorType_not: EventActorType
  actorType_in: [EventActorType!]
  actorType_not_in: [EventActorType!]
  actorUser: UserWhereInput
  actorCandidate: CandidateWhereInput
  targetType: EventTargetType
  targetType_not: EventTargetType
  targetType_in: [EventTargetType!]
  targetType_not_in: [EventTargetType!]
  targetCandidate: CandidateWhereInput
  targetJob: JobWhereInput
  targetTask: TaskWhereInput
  targetWorkspace: WorkspaceWhereInput
  AND: [EventWhereInput!]
  OR: [EventWhereInput!]
  NOT: [EventWhereInput!]
}

input EventWhereUniqueInput {
  id: ID
}

type Field {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  type: FieldType!
  label: String!
}

type FieldConnection {
  pageInfo: PageInfo!
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

type FieldEdge {
  node: Field!
  cursor: String!
}

type FieldLink {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  field: Field!
  value: String
}

type FieldLinkConnection {
  pageInfo: PageInfo!
  edges: [FieldLinkEdge]!
  aggregate: AggregateFieldLink!
}

input FieldLinkCreateInput {
  field: FieldCreateOneInput!
  value: String
}

input FieldLinkCreateManyInput {
  create: [FieldLinkCreateInput!]
  connect: [FieldLinkWhereUniqueInput!]
}

type FieldLinkEdge {
  node: FieldLink!
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

input FieldLinkScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  value: String
  value_not: String
  value_in: [String!]
  value_not_in: [String!]
  value_lt: String
  value_lte: String
  value_gt: String
  value_gte: String
  value_contains: String
  value_not_contains: String
  value_starts_with: String
  value_not_starts_with: String
  value_ends_with: String
  value_not_ends_with: String
  AND: [FieldLinkScalarWhereInput!]
  OR: [FieldLinkScalarWhereInput!]
  NOT: [FieldLinkScalarWhereInput!]
}

type FieldLinkSubscriptionPayload {
  mutation: MutationType!
  node: FieldLink
  updatedFields: [String!]
  previousValues: FieldLinkPreviousValues
}

input FieldLinkSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FieldLinkWhereInput
  AND: [FieldLinkSubscriptionWhereInput!]
  OR: [FieldLinkSubscriptionWhereInput!]
  NOT: [FieldLinkSubscriptionWhereInput!]
}

input FieldLinkUpdateDataInput {
  field: FieldUpdateOneRequiredInput
  value: String
}

input FieldLinkUpdateInput {
  field: FieldUpdateOneRequiredInput
  value: String
}

input FieldLinkUpdateManyDataInput {
  value: String
}

input FieldLinkUpdateManyInput {
  create: [FieldLinkCreateInput!]
  update: [FieldLinkUpdateWithWhereUniqueNestedInput!]
  upsert: [FieldLinkUpsertWithWhereUniqueNestedInput!]
  delete: [FieldLinkWhereUniqueInput!]
  connect: [FieldLinkWhereUniqueInput!]
  disconnect: [FieldLinkWhereUniqueInput!]
  deleteMany: [FieldLinkScalarWhereInput!]
  updateMany: [FieldLinkUpdateManyWithWhereNestedInput!]
}

input FieldLinkUpdateManyMutationInput {
  value: String
}

input FieldLinkUpdateManyWithWhereNestedInput {
  where: FieldLinkScalarWhereInput!
  data: FieldLinkUpdateManyDataInput!
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  field: FieldWhereInput
  value: String
  value_not: String
  value_in: [String!]
  value_not_in: [String!]
  value_lt: String
  value_lte: String
  value_gt: String
  value_gte: String
  value_contains: String
  value_not_contains: String
  value_starts_with: String
  value_not_starts_with: String
  value_ends_with: String
  value_not_ends_with: String
  AND: [FieldLinkWhereInput!]
  OR: [FieldLinkWhereInput!]
  NOT: [FieldLinkWhereInput!]
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

input FieldScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  type: FieldType
  type_not: FieldType
  type_in: [FieldType!]
  type_not_in: [FieldType!]
  label: String
  label_not: String
  label_in: [String!]
  label_not_in: [String!]
  label_lt: String
  label_lte: String
  label_gt: String
  label_gte: String
  label_contains: String
  label_not_contains: String
  label_starts_with: String
  label_not_starts_with: String
  label_ends_with: String
  label_not_ends_with: String
  AND: [FieldScalarWhereInput!]
  OR: [FieldScalarWhereInput!]
  NOT: [FieldScalarWhereInput!]
}

type FieldSubscriptionPayload {
  mutation: MutationType!
  node: Field
  updatedFields: [String!]
  previousValues: FieldPreviousValues
}

input FieldSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FieldWhereInput
  AND: [FieldSubscriptionWhereInput!]
  OR: [FieldSubscriptionWhereInput!]
  NOT: [FieldSubscriptionWhereInput!]
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

input FieldUpdateManyDataInput {
  type: FieldType
  label: String
}

input FieldUpdateManyInput {
  create: [FieldCreateInput!]
  update: [FieldUpdateWithWhereUniqueNestedInput!]
  upsert: [FieldUpsertWithWhereUniqueNestedInput!]
  delete: [FieldWhereUniqueInput!]
  connect: [FieldWhereUniqueInput!]
  disconnect: [FieldWhereUniqueInput!]
  deleteMany: [FieldScalarWhereInput!]
  updateMany: [FieldUpdateManyWithWhereNestedInput!]
}

input FieldUpdateManyMutationInput {
  type: FieldType
  label: String
}

input FieldUpdateManyWithWhereNestedInput {
  where: FieldScalarWhereInput!
  data: FieldUpdateManyDataInput!
}

input FieldUpdateOneRequiredInput {
  create: FieldCreateInput
  update: FieldUpdateDataInput
  upsert: FieldUpsertNestedInput
  connect: FieldWhereUniqueInput
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  type: FieldType
  type_not: FieldType
  type_in: [FieldType!]
  type_not_in: [FieldType!]
  label: String
  label_not: String
  label_in: [String!]
  label_not_in: [String!]
  label_lt: String
  label_lte: String
  label_gt: String
  label_gte: String
  label_contains: String
  label_not_contains: String
  label_starts_with: String
  label_not_starts_with: String
  label_ends_with: String
  label_not_ends_with: String
  AND: [FieldWhereInput!]
  OR: [FieldWhereInput!]
  NOT: [FieldWhereInput!]
}

input FieldWhereUniqueInput {
  id: ID
}

type File {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  size: Int!
  type: String!
  name: String!
  url: String!
}

type FileConnection {
  pageInfo: PageInfo!
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

type FileEdge {
  node: File!
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

input FileScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  size: Int
  size_not: Int
  size_in: [Int!]
  size_not_in: [Int!]
  size_lt: Int
  size_lte: Int
  size_gt: Int
  size_gte: Int
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [FileScalarWhereInput!]
  OR: [FileScalarWhereInput!]
  NOT: [FileScalarWhereInput!]
}

type FileSubscriptionPayload {
  mutation: MutationType!
  node: File
  updatedFields: [String!]
  previousValues: FilePreviousValues
}

input FileSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FileWhereInput
  AND: [FileSubscriptionWhereInput!]
  OR: [FileSubscriptionWhereInput!]
  NOT: [FileSubscriptionWhereInput!]
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

input FileUpdateManyDataInput {
  size: Int
  type: String
  name: String
  url: String
}

input FileUpdateManyInput {
  create: [FileCreateInput!]
  update: [FileUpdateWithWhereUniqueNestedInput!]
  upsert: [FileUpsertWithWhereUniqueNestedInput!]
  delete: [FileWhereUniqueInput!]
  connect: [FileWhereUniqueInput!]
  disconnect: [FileWhereUniqueInput!]
  deleteMany: [FileScalarWhereInput!]
  updateMany: [FileUpdateManyWithWhereNestedInput!]
}

input FileUpdateManyMutationInput {
  size: Int
  type: String
  name: String
  url: String
}

input FileUpdateManyWithWhereNestedInput {
  where: FileScalarWhereInput!
  data: FileUpdateManyDataInput!
}

input FileUpdateOneInput {
  create: FileCreateInput
  update: FileUpdateDataInput
  upsert: FileUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: FileWhereUniqueInput
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  size: Int
  size_not: Int
  size_in: [Int!]
  size_not_in: [Int!]
  size_lt: Int
  size_lte: Int
  size_gt: Int
  size_gte: Int
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [FileWhereInput!]
  OR: [FileWhereInput!]
  NOT: [FileWhereInput!]
}

input FileWhereUniqueInput {
  id: ID
  url: String
}

type Invite {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  expireAt: DateTime!
  invitedBy: User!
}

type InviteConnection {
  pageInfo: PageInfo!
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

type InviteEdge {
  node: Invite!
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

input InviteScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  expireAt: DateTime
  expireAt_not: DateTime
  expireAt_in: [DateTime!]
  expireAt_not_in: [DateTime!]
  expireAt_lt: DateTime
  expireAt_lte: DateTime
  expireAt_gt: DateTime
  expireAt_gte: DateTime
  AND: [InviteScalarWhereInput!]
  OR: [InviteScalarWhereInput!]
  NOT: [InviteScalarWhereInput!]
}

type InviteSubscriptionPayload {
  mutation: MutationType!
  node: Invite
  updatedFields: [String!]
  previousValues: InvitePreviousValues
}

input InviteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: InviteWhereInput
  AND: [InviteSubscriptionWhereInput!]
  OR: [InviteSubscriptionWhereInput!]
  NOT: [InviteSubscriptionWhereInput!]
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

input InviteUpdateManyDataInput {
  email: String
  expireAt: DateTime
}

input InviteUpdateManyInput {
  create: [InviteCreateInput!]
  update: [InviteUpdateWithWhereUniqueNestedInput!]
  upsert: [InviteUpsertWithWhereUniqueNestedInput!]
  delete: [InviteWhereUniqueInput!]
  connect: [InviteWhereUniqueInput!]
  disconnect: [InviteWhereUniqueInput!]
  deleteMany: [InviteScalarWhereInput!]
  updateMany: [InviteUpdateManyWithWhereNestedInput!]
}

input InviteUpdateManyMutationInput {
  email: String
  expireAt: DateTime
}

input InviteUpdateManyWithWhereNestedInput {
  where: InviteScalarWhereInput!
  data: InviteUpdateManyDataInput!
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  expireAt: DateTime
  expireAt_not: DateTime
  expireAt_in: [DateTime!]
  expireAt_not_in: [DateTime!]
  expireAt_lt: DateTime
  expireAt_lte: DateTime
  expireAt_gt: DateTime
  expireAt_gte: DateTime
  invitedBy: UserWhereInput
  AND: [InviteWhereInput!]
  OR: [InviteWhereInput!]
  NOT: [InviteWhereInput!]
}

input InviteWhereUniqueInput {
  id: ID
}

type Job {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  workspace: Workspace!
  subscribers(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
  applications(where: ApplicationWhereInput, orderBy: ApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Application!]
  workflow: Workflow!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  type: JobType!
  department: String
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location!]
  name: String!
  description: String
  requirements: String
}

type JobConnection {
  pageInfo: PageInfo!
  edges: [JobEdge]!
  aggregate: AggregateJob!
}

input JobCreateInput {
  workspace: WorkspaceCreateOneWithoutJobsInput!
  subscribers: UserCreateManyWithoutSubscriptionJobsInput
  events: EventCreateManyWithoutTargetJobInput
  applications: ApplicationCreateManyWithoutJobInput
  workflow: WorkflowCreateOneInput!
  comments: CommentCreateManyInput
  type: JobType!
  department: String
  locations: LocationCreateManyInput
  name: String!
  description: String
  requirements: String
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
  workspace: WorkspaceCreateOneWithoutJobsInput!
  subscribers: UserCreateManyWithoutSubscriptionJobsInput
  events: EventCreateManyWithoutTargetJobInput
  workflow: WorkflowCreateOneInput!
  comments: CommentCreateManyInput
  type: JobType!
  department: String
  locations: LocationCreateManyInput
  name: String!
  description: String
  requirements: String
}

input JobCreateWithoutEventsInput {
  workspace: WorkspaceCreateOneWithoutJobsInput!
  subscribers: UserCreateManyWithoutSubscriptionJobsInput
  applications: ApplicationCreateManyWithoutJobInput
  workflow: WorkflowCreateOneInput!
  comments: CommentCreateManyInput
  type: JobType!
  department: String
  locations: LocationCreateManyInput
  name: String!
  description: String
  requirements: String
}

input JobCreateWithoutSubscribersInput {
  workspace: WorkspaceCreateOneWithoutJobsInput!
  events: EventCreateManyWithoutTargetJobInput
  applications: ApplicationCreateManyWithoutJobInput
  workflow: WorkflowCreateOneInput!
  comments: CommentCreateManyInput
  type: JobType!
  department: String
  locations: LocationCreateManyInput
  name: String!
  description: String
  requirements: String
}

input JobCreateWithoutWorkspaceInput {
  subscribers: UserCreateManyWithoutSubscriptionJobsInput
  events: EventCreateManyWithoutTargetJobInput
  applications: ApplicationCreateManyWithoutJobInput
  workflow: WorkflowCreateOneInput!
  comments: CommentCreateManyInput
  type: JobType!
  department: String
  locations: LocationCreateManyInput
  name: String!
  description: String
  requirements: String
}

type JobEdge {
  node: Job!
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

input JobScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  type: JobType
  type_not: JobType
  type_in: [JobType!]
  type_not_in: [JobType!]
  department: String
  department_not: String
  department_in: [String!]
  department_not_in: [String!]
  department_lt: String
  department_lte: String
  department_gt: String
  department_gte: String
  department_contains: String
  department_not_contains: String
  department_starts_with: String
  department_not_starts_with: String
  department_ends_with: String
  department_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  requirements: String
  requirements_not: String
  requirements_in: [String!]
  requirements_not_in: [String!]
  requirements_lt: String
  requirements_lte: String
  requirements_gt: String
  requirements_gte: String
  requirements_contains: String
  requirements_not_contains: String
  requirements_starts_with: String
  requirements_not_starts_with: String
  requirements_ends_with: String
  requirements_not_ends_with: String
  AND: [JobScalarWhereInput!]
  OR: [JobScalarWhereInput!]
  NOT: [JobScalarWhereInput!]
}

type JobSubscriptionPayload {
  mutation: MutationType!
  node: Job
  updatedFields: [String!]
  previousValues: JobPreviousValues
}

input JobSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: JobWhereInput
  AND: [JobSubscriptionWhereInput!]
  OR: [JobSubscriptionWhereInput!]
  NOT: [JobSubscriptionWhereInput!]
}

enum JobType {
  Draft
  Published
  Archived
}

input JobUpdateInput {
  workspace: WorkspaceUpdateOneRequiredWithoutJobsInput
  subscribers: UserUpdateManyWithoutSubscriptionJobsInput
  events: EventUpdateManyWithoutTargetJobInput
  applications: ApplicationUpdateManyWithoutJobInput
  workflow: WorkflowUpdateOneRequiredInput
  comments: CommentUpdateManyInput
  type: JobType
  department: String
  locations: LocationUpdateManyInput
  name: String
  description: String
  requirements: String
}

input JobUpdateManyDataInput {
  type: JobType
  department: String
  name: String
  description: String
  requirements: String
}

input JobUpdateManyMutationInput {
  type: JobType
  department: String
  name: String
  description: String
  requirements: String
}

input JobUpdateManyWithoutSubscribersInput {
  create: [JobCreateWithoutSubscribersInput!]
  delete: [JobWhereUniqueInput!]
  connect: [JobWhereUniqueInput!]
  disconnect: [JobWhereUniqueInput!]
  update: [JobUpdateWithWhereUniqueWithoutSubscribersInput!]
  upsert: [JobUpsertWithWhereUniqueWithoutSubscribersInput!]
  deleteMany: [JobScalarWhereInput!]
  updateMany: [JobUpdateManyWithWhereNestedInput!]
}

input JobUpdateManyWithoutWorkspaceInput {
  create: [JobCreateWithoutWorkspaceInput!]
  delete: [JobWhereUniqueInput!]
  connect: [JobWhereUniqueInput!]
  disconnect: [JobWhereUniqueInput!]
  update: [JobUpdateWithWhereUniqueWithoutWorkspaceInput!]
  upsert: [JobUpsertWithWhereUniqueWithoutWorkspaceInput!]
  deleteMany: [JobScalarWhereInput!]
  updateMany: [JobUpdateManyWithWhereNestedInput!]
}

input JobUpdateManyWithWhereNestedInput {
  where: JobScalarWhereInput!
  data: JobUpdateManyDataInput!
}

input JobUpdateOneRequiredWithoutApplicationsInput {
  create: JobCreateWithoutApplicationsInput
  update: JobUpdateWithoutApplicationsDataInput
  upsert: JobUpsertWithoutApplicationsInput
  connect: JobWhereUniqueInput
}

input JobUpdateOneWithoutEventsInput {
  create: JobCreateWithoutEventsInput
  update: JobUpdateWithoutEventsDataInput
  upsert: JobUpsertWithoutEventsInput
  delete: Boolean
  disconnect: Boolean
  connect: JobWhereUniqueInput
}

input JobUpdateWithoutApplicationsDataInput {
  workspace: WorkspaceUpdateOneRequiredWithoutJobsInput
  subscribers: UserUpdateManyWithoutSubscriptionJobsInput
  events: EventUpdateManyWithoutTargetJobInput
  workflow: WorkflowUpdateOneRequiredInput
  comments: CommentUpdateManyInput
  type: JobType
  department: String
  locations: LocationUpdateManyInput
  name: String
  description: String
  requirements: String
}

input JobUpdateWithoutEventsDataInput {
  workspace: WorkspaceUpdateOneRequiredWithoutJobsInput
  subscribers: UserUpdateManyWithoutSubscriptionJobsInput
  applications: ApplicationUpdateManyWithoutJobInput
  workflow: WorkflowUpdateOneRequiredInput
  comments: CommentUpdateManyInput
  type: JobType
  department: String
  locations: LocationUpdateManyInput
  name: String
  description: String
  requirements: String
}

input JobUpdateWithoutSubscribersDataInput {
  workspace: WorkspaceUpdateOneRequiredWithoutJobsInput
  events: EventUpdateManyWithoutTargetJobInput
  applications: ApplicationUpdateManyWithoutJobInput
  workflow: WorkflowUpdateOneRequiredInput
  comments: CommentUpdateManyInput
  type: JobType
  department: String
  locations: LocationUpdateManyInput
  name: String
  description: String
  requirements: String
}

input JobUpdateWithoutWorkspaceDataInput {
  subscribers: UserUpdateManyWithoutSubscriptionJobsInput
  events: EventUpdateManyWithoutTargetJobInput
  applications: ApplicationUpdateManyWithoutJobInput
  workflow: WorkflowUpdateOneRequiredInput
  comments: CommentUpdateManyInput
  type: JobType
  department: String
  locations: LocationUpdateManyInput
  name: String
  description: String
  requirements: String
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
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
  type: JobType
  type_not: JobType
  type_in: [JobType!]
  type_not_in: [JobType!]
  department: String
  department_not: String
  department_in: [String!]
  department_not_in: [String!]
  department_lt: String
  department_lte: String
  department_gt: String
  department_gte: String
  department_contains: String
  department_not_contains: String
  department_starts_with: String
  department_not_starts_with: String
  department_ends_with: String
  department_not_ends_with: String
  locations_every: LocationWhereInput
  locations_some: LocationWhereInput
  locations_none: LocationWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  requirements: String
  requirements_not: String
  requirements_in: [String!]
  requirements_not_in: [String!]
  requirements_lt: String
  requirements_lte: String
  requirements_gt: String
  requirements_gte: String
  requirements_contains: String
  requirements_not_contains: String
  requirements_starts_with: String
  requirements_not_starts_with: String
  requirements_ends_with: String
  requirements_not_ends_with: String
  AND: [JobWhereInput!]
  OR: [JobWhereInput!]
  NOT: [JobWhereInput!]
}

input JobWhereUniqueInput {
  id: ID
}

type Location {
  id: ID!
  country: String!
  region: String!
  city: String!
  zip: String!
}

type LocationConnection {
  pageInfo: PageInfo!
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

type LocationEdge {
  node: Location!
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
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LocationPreviousValues {
  id: ID!
  country: String!
  region: String!
  city: String!
  zip: String!
}

input LocationScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  region: String
  region_not: String
  region_in: [String!]
  region_not_in: [String!]
  region_lt: String
  region_lte: String
  region_gt: String
  region_gte: String
  region_contains: String
  region_not_contains: String
  region_starts_with: String
  region_not_starts_with: String
  region_ends_with: String
  region_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  zip: String
  zip_not: String
  zip_in: [String!]
  zip_not_in: [String!]
  zip_lt: String
  zip_lte: String
  zip_gt: String
  zip_gte: String
  zip_contains: String
  zip_not_contains: String
  zip_starts_with: String
  zip_not_starts_with: String
  zip_ends_with: String
  zip_not_ends_with: String
  AND: [LocationScalarWhereInput!]
  OR: [LocationScalarWhereInput!]
  NOT: [LocationScalarWhereInput!]
}

type LocationSubscriptionPayload {
  mutation: MutationType!
  node: Location
  updatedFields: [String!]
  previousValues: LocationPreviousValues
}

input LocationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LocationWhereInput
  AND: [LocationSubscriptionWhereInput!]
  OR: [LocationSubscriptionWhereInput!]
  NOT: [LocationSubscriptionWhereInput!]
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

input LocationUpdateManyDataInput {
  country: String
  region: String
  city: String
  zip: String
}

input LocationUpdateManyInput {
  create: [LocationCreateInput!]
  update: [LocationUpdateWithWhereUniqueNestedInput!]
  upsert: [LocationUpsertWithWhereUniqueNestedInput!]
  delete: [LocationWhereUniqueInput!]
  connect: [LocationWhereUniqueInput!]
  disconnect: [LocationWhereUniqueInput!]
  deleteMany: [LocationScalarWhereInput!]
  updateMany: [LocationUpdateManyWithWhereNestedInput!]
}

input LocationUpdateManyMutationInput {
  country: String
  region: String
  city: String
  zip: String
}

input LocationUpdateManyWithWhereNestedInput {
  where: LocationScalarWhereInput!
  data: LocationUpdateManyDataInput!
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  region: String
  region_not: String
  region_in: [String!]
  region_not_in: [String!]
  region_lt: String
  region_lte: String
  region_gt: String
  region_gte: String
  region_contains: String
  region_not_contains: String
  region_starts_with: String
  region_not_starts_with: String
  region_ends_with: String
  region_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  zip: String
  zip_not: String
  zip_in: [String!]
  zip_not_in: [String!]
  zip_lt: String
  zip_lte: String
  zip_gt: String
  zip_gte: String
  zip_contains: String
  zip_not_contains: String
  zip_starts_with: String
  zip_not_starts_with: String
  zip_ends_with: String
  zip_not_ends_with: String
  AND: [LocationWhereInput!]
  OR: [LocationWhereInput!]
  NOT: [LocationWhereInput!]
}

input LocationWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createApplication(data: ApplicationCreateInput!): Application!
  updateApplication(data: ApplicationUpdateInput!, where: ApplicationWhereUniqueInput!): Application
  updateManyApplications(data: ApplicationUpdateManyMutationInput!, where: ApplicationWhereInput): BatchPayload!
  upsertApplication(where: ApplicationWhereUniqueInput!, create: ApplicationCreateInput!, update: ApplicationUpdateInput!): Application!
  deleteApplication(where: ApplicationWhereUniqueInput!): Application
  deleteManyApplications(where: ApplicationWhereInput): BatchPayload!
  createCandidate(data: CandidateCreateInput!): Candidate!
  updateCandidate(data: CandidateUpdateInput!, where: CandidateWhereUniqueInput!): Candidate
  updateManyCandidates(data: CandidateUpdateManyMutationInput!, where: CandidateWhereInput): BatchPayload!
  upsertCandidate(where: CandidateWhereUniqueInput!, create: CandidateCreateInput!, update: CandidateUpdateInput!): Candidate!
  deleteCandidate(where: CandidateWhereUniqueInput!): Candidate
  deleteManyCandidates(where: CandidateWhereInput): BatchPayload!
  createComment(data: CommentCreateInput!): Comment!
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  updateManyComments(data: CommentUpdateManyMutationInput!, where: CommentWhereInput): BatchPayload!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  deleteComment(where: CommentWhereUniqueInput!): Comment
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  createDisqualification(data: DisqualificationCreateInput!): Disqualification!
  updateDisqualification(data: DisqualificationUpdateInput!, where: DisqualificationWhereUniqueInput!): Disqualification
  updateManyDisqualifications(data: DisqualificationUpdateManyMutationInput!, where: DisqualificationWhereInput): BatchPayload!
  upsertDisqualification(where: DisqualificationWhereUniqueInput!, create: DisqualificationCreateInput!, update: DisqualificationUpdateInput!): Disqualification!
  deleteDisqualification(where: DisqualificationWhereUniqueInput!): Disqualification
  deleteManyDisqualifications(where: DisqualificationWhereInput): BatchPayload!
  createDisqualificationLink(data: DisqualificationLinkCreateInput!): DisqualificationLink!
  updateDisqualificationLink(data: DisqualificationLinkUpdateInput!, where: DisqualificationLinkWhereUniqueInput!): DisqualificationLink
  updateManyDisqualificationLinks(data: DisqualificationLinkUpdateManyMutationInput!, where: DisqualificationLinkWhereInput): BatchPayload!
  upsertDisqualificationLink(where: DisqualificationLinkWhereUniqueInput!, create: DisqualificationLinkCreateInput!, update: DisqualificationLinkUpdateInput!): DisqualificationLink!
  deleteDisqualificationLink(where: DisqualificationLinkWhereUniqueInput!): DisqualificationLink
  deleteManyDisqualificationLinks(where: DisqualificationLinkWhereInput): BatchPayload!
  createEvent(data: EventCreateInput!): Event!
  updateEvent(data: EventUpdateInput!, where: EventWhereUniqueInput!): Event
  updateManyEvents(data: EventUpdateManyMutationInput!, where: EventWhereInput): BatchPayload!
  upsertEvent(where: EventWhereUniqueInput!, create: EventCreateInput!, update: EventUpdateInput!): Event!
  deleteEvent(where: EventWhereUniqueInput!): Event
  deleteManyEvents(where: EventWhereInput): BatchPayload!
  createField(data: FieldCreateInput!): Field!
  updateField(data: FieldUpdateInput!, where: FieldWhereUniqueInput!): Field
  updateManyFields(data: FieldUpdateManyMutationInput!, where: FieldWhereInput): BatchPayload!
  upsertField(where: FieldWhereUniqueInput!, create: FieldCreateInput!, update: FieldUpdateInput!): Field!
  deleteField(where: FieldWhereUniqueInput!): Field
  deleteManyFields(where: FieldWhereInput): BatchPayload!
  createFieldLink(data: FieldLinkCreateInput!): FieldLink!
  updateFieldLink(data: FieldLinkUpdateInput!, where: FieldLinkWhereUniqueInput!): FieldLink
  updateManyFieldLinks(data: FieldLinkUpdateManyMutationInput!, where: FieldLinkWhereInput): BatchPayload!
  upsertFieldLink(where: FieldLinkWhereUniqueInput!, create: FieldLinkCreateInput!, update: FieldLinkUpdateInput!): FieldLink!
  deleteFieldLink(where: FieldLinkWhereUniqueInput!): FieldLink
  deleteManyFieldLinks(where: FieldLinkWhereInput): BatchPayload!
  createFile(data: FileCreateInput!): File!
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  updateManyFiles(data: FileUpdateManyMutationInput!, where: FileWhereInput): BatchPayload!
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  deleteFile(where: FileWhereUniqueInput!): File
  deleteManyFiles(where: FileWhereInput): BatchPayload!
  createInvite(data: InviteCreateInput!): Invite!
  updateInvite(data: InviteUpdateInput!, where: InviteWhereUniqueInput!): Invite
  updateManyInvites(data: InviteUpdateManyMutationInput!, where: InviteWhereInput): BatchPayload!
  upsertInvite(where: InviteWhereUniqueInput!, create: InviteCreateInput!, update: InviteUpdateInput!): Invite!
  deleteInvite(where: InviteWhereUniqueInput!): Invite
  deleteManyInvites(where: InviteWhereInput): BatchPayload!
  createJob(data: JobCreateInput!): Job!
  updateJob(data: JobUpdateInput!, where: JobWhereUniqueInput!): Job
  updateManyJobs(data: JobUpdateManyMutationInput!, where: JobWhereInput): BatchPayload!
  upsertJob(where: JobWhereUniqueInput!, create: JobCreateInput!, update: JobUpdateInput!): Job!
  deleteJob(where: JobWhereUniqueInput!): Job
  deleteManyJobs(where: JobWhereInput): BatchPayload!
  createLocation(data: LocationCreateInput!): Location!
  updateLocation(data: LocationUpdateInput!, where: LocationWhereUniqueInput!): Location
  updateManyLocations(data: LocationUpdateManyMutationInput!, where: LocationWhereInput): BatchPayload!
  upsertLocation(where: LocationWhereUniqueInput!, create: LocationCreateInput!, update: LocationUpdateInput!): Location!
  deleteLocation(where: LocationWhereUniqueInput!): Location
  deleteManyLocations(where: LocationWhereInput): BatchPayload!
  createNotification(data: NotificationCreateInput!): Notification!
  updateNotification(data: NotificationUpdateInput!, where: NotificationWhereUniqueInput!): Notification
  updateManyNotifications(data: NotificationUpdateManyMutationInput!, where: NotificationWhereInput): BatchPayload!
  upsertNotification(where: NotificationWhereUniqueInput!, create: NotificationCreateInput!, update: NotificationUpdateInput!): Notification!
  deleteNotification(where: NotificationWhereUniqueInput!): Notification
  deleteManyNotifications(where: NotificationWhereInput): BatchPayload!
  createStage(data: StageCreateInput!): Stage!
  updateStage(data: StageUpdateInput!, where: StageWhereUniqueInput!): Stage
  updateManyStages(data: StageUpdateManyMutationInput!, where: StageWhereInput): BatchPayload!
  upsertStage(where: StageWhereUniqueInput!, create: StageCreateInput!, update: StageUpdateInput!): Stage!
  deleteStage(where: StageWhereUniqueInput!): Stage
  deleteManyStages(where: StageWhereInput): BatchPayload!
  createTag(data: TagCreateInput!): Tag!
  updateTag(data: TagUpdateInput!, where: TagWhereUniqueInput!): Tag
  updateManyTags(data: TagUpdateManyMutationInput!, where: TagWhereInput): BatchPayload!
  upsertTag(where: TagWhereUniqueInput!, create: TagCreateInput!, update: TagUpdateInput!): Tag!
  deleteTag(where: TagWhereUniqueInput!): Tag
  deleteManyTags(where: TagWhereInput): BatchPayload!
  createTask(data: TaskCreateInput!): Task!
  updateTask(data: TaskUpdateInput!, where: TaskWhereUniqueInput!): Task
  updateManyTasks(data: TaskUpdateManyMutationInput!, where: TaskWhereInput): BatchPayload!
  upsertTask(where: TaskWhereUniqueInput!, create: TaskCreateInput!, update: TaskUpdateInput!): Task!
  deleteTask(where: TaskWhereUniqueInput!): Task
  deleteManyTasks(where: TaskWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createWorkflow(data: WorkflowCreateInput!): Workflow!
  updateWorkflow(data: WorkflowUpdateInput!, where: WorkflowWhereUniqueInput!): Workflow
  updateManyWorkflows(data: WorkflowUpdateManyMutationInput!, where: WorkflowWhereInput): BatchPayload!
  upsertWorkflow(where: WorkflowWhereUniqueInput!, create: WorkflowCreateInput!, update: WorkflowUpdateInput!): Workflow!
  deleteWorkflow(where: WorkflowWhereUniqueInput!): Workflow
  deleteManyWorkflows(where: WorkflowWhereInput): BatchPayload!
  createWorkspace(data: WorkspaceCreateInput!): Workspace!
  updateWorkspace(data: WorkspaceUpdateInput!, where: WorkspaceWhereUniqueInput!): Workspace
  updateManyWorkspaces(data: WorkspaceUpdateManyMutationInput!, where: WorkspaceWhereInput): BatchPayload!
  upsertWorkspace(where: WorkspaceWhereUniqueInput!, create: WorkspaceCreateInput!, update: WorkspaceUpdateInput!): Workspace!
  deleteWorkspace(where: WorkspaceWhereUniqueInput!): Workspace
  deleteManyWorkspaces(where: WorkspaceWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Notification {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  type: NotificationType!
  user: User!
  event: Event!
}

type NotificationConnection {
  pageInfo: PageInfo!
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

type NotificationEdge {
  node: Notification!
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

input NotificationScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  type: NotificationType
  type_not: NotificationType
  type_in: [NotificationType!]
  type_not_in: [NotificationType!]
  AND: [NotificationScalarWhereInput!]
  OR: [NotificationScalarWhereInput!]
  NOT: [NotificationScalarWhereInput!]
}

type NotificationSubscriptionPayload {
  mutation: MutationType!
  node: Notification
  updatedFields: [String!]
  previousValues: NotificationPreviousValues
}

input NotificationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: NotificationWhereInput
  AND: [NotificationSubscriptionWhereInput!]
  OR: [NotificationSubscriptionWhereInput!]
  NOT: [NotificationSubscriptionWhereInput!]
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

input NotificationUpdateManyDataInput {
  type: NotificationType
}

input NotificationUpdateManyMutationInput {
  type: NotificationType
}

input NotificationUpdateManyWithoutUserInput {
  create: [NotificationCreateWithoutUserInput!]
  delete: [NotificationWhereUniqueInput!]
  connect: [NotificationWhereUniqueInput!]
  disconnect: [NotificationWhereUniqueInput!]
  update: [NotificationUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [NotificationUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [NotificationScalarWhereInput!]
  updateMany: [NotificationUpdateManyWithWhereNestedInput!]
}

input NotificationUpdateManyWithWhereNestedInput {
  where: NotificationScalarWhereInput!
  data: NotificationUpdateManyDataInput!
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  type: NotificationType
  type_not: NotificationType
  type_in: [NotificationType!]
  type_not_in: [NotificationType!]
  user: UserWhereInput
  event: EventWhereInput
  AND: [NotificationWhereInput!]
  OR: [NotificationWhereInput!]
  NOT: [NotificationWhereInput!]
}

input NotificationWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  application(where: ApplicationWhereUniqueInput!): Application
  applications(where: ApplicationWhereInput, orderBy: ApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Application]!
  applicationsConnection(where: ApplicationWhereInput, orderBy: ApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ApplicationConnection!
  candidate(where: CandidateWhereUniqueInput!): Candidate
  candidates(where: CandidateWhereInput, orderBy: CandidateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Candidate]!
  candidatesConnection(where: CandidateWhereInput, orderBy: CandidateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CandidateConnection!
  comment(where: CommentWhereUniqueInput!): Comment
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  disqualification(where: DisqualificationWhereUniqueInput!): Disqualification
  disqualifications(where: DisqualificationWhereInput, orderBy: DisqualificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Disqualification]!
  disqualificationsConnection(where: DisqualificationWhereInput, orderBy: DisqualificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DisqualificationConnection!
  disqualificationLink(where: DisqualificationLinkWhereUniqueInput!): DisqualificationLink
  disqualificationLinks(where: DisqualificationLinkWhereInput, orderBy: DisqualificationLinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [DisqualificationLink]!
  disqualificationLinksConnection(where: DisqualificationLinkWhereInput, orderBy: DisqualificationLinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DisqualificationLinkConnection!
  event(where: EventWhereUniqueInput!): Event
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event]!
  eventsConnection(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventConnection!
  field(where: FieldWhereUniqueInput!): Field
  fields(where: FieldWhereInput, orderBy: FieldOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Field]!
  fieldsConnection(where: FieldWhereInput, orderBy: FieldOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FieldConnection!
  fieldLink(where: FieldLinkWhereUniqueInput!): FieldLink
  fieldLinks(where: FieldLinkWhereInput, orderBy: FieldLinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FieldLink]!
  fieldLinksConnection(where: FieldLinkWhereInput, orderBy: FieldLinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FieldLinkConnection!
  file(where: FileWhereUniqueInput!): File
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!
  invite(where: InviteWhereUniqueInput!): Invite
  invites(where: InviteWhereInput, orderBy: InviteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invite]!
  invitesConnection(where: InviteWhereInput, orderBy: InviteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): InviteConnection!
  job(where: JobWhereUniqueInput!): Job
  jobs(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Job]!
  jobsConnection(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): JobConnection!
  location(where: LocationWhereUniqueInput!): Location
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  notification(where: NotificationWhereUniqueInput!): Notification
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification]!
  notificationsConnection(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NotificationConnection!
  stage(where: StageWhereUniqueInput!): Stage
  stages(where: StageWhereInput, orderBy: StageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stage]!
  stagesConnection(where: StageWhereInput, orderBy: StageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StageConnection!
  tag(where: TagWhereUniqueInput!): Tag
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag]!
  tagsConnection(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TagConnection!
  task(where: TaskWhereUniqueInput!): Task
  tasks(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Task]!
  tasksConnection(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TaskConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  workflow(where: WorkflowWhereUniqueInput!): Workflow
  workflows(where: WorkflowWhereInput, orderBy: WorkflowOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Workflow]!
  workflowsConnection(where: WorkflowWhereInput, orderBy: WorkflowOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WorkflowConnection!
  workspace(where: WorkspaceWhereUniqueInput!): Workspace
  workspaces(where: WorkspaceWhereInput, orderBy: WorkspaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Workspace]!
  workspacesConnection(where: WorkspaceWhereInput, orderBy: WorkspaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WorkspaceConnection!
  node(id: ID!): Node
}

type Stage {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  description: String
  type: StageType!
}

type StageConnection {
  pageInfo: PageInfo!
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

type StageEdge {
  node: Stage!
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

input StageScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  type: StageType
  type_not: StageType
  type_in: [StageType!]
  type_not_in: [StageType!]
  AND: [StageScalarWhereInput!]
  OR: [StageScalarWhereInput!]
  NOT: [StageScalarWhereInput!]
}

type StageSubscriptionPayload {
  mutation: MutationType!
  node: Stage
  updatedFields: [String!]
  previousValues: StagePreviousValues
}

input StageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StageWhereInput
  AND: [StageSubscriptionWhereInput!]
  OR: [StageSubscriptionWhereInput!]
  NOT: [StageSubscriptionWhereInput!]
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

input StageUpdateManyDataInput {
  name: String
  description: String
  type: StageType
}

input StageUpdateManyInput {
  create: [StageCreateInput!]
  update: [StageUpdateWithWhereUniqueNestedInput!]
  upsert: [StageUpsertWithWhereUniqueNestedInput!]
  delete: [StageWhereUniqueInput!]
  connect: [StageWhereUniqueInput!]
  disconnect: [StageWhereUniqueInput!]
  deleteMany: [StageScalarWhereInput!]
  updateMany: [StageUpdateManyWithWhereNestedInput!]
}

input StageUpdateManyMutationInput {
  name: String
  description: String
  type: StageType
}

input StageUpdateManyWithWhereNestedInput {
  where: StageScalarWhereInput!
  data: StageUpdateManyDataInput!
}

input StageUpdateOneRequiredInput {
  create: StageCreateInput
  update: StageUpdateDataInput
  upsert: StageUpsertNestedInput
  connect: StageWhereUniqueInput
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  type: StageType
  type_not: StageType
  type_in: [StageType!]
  type_not_in: [StageType!]
  AND: [StageWhereInput!]
  OR: [StageWhereInput!]
  NOT: [StageWhereInput!]
}

input StageWhereUniqueInput {
  id: ID
}

type Subscription {
  application(where: ApplicationSubscriptionWhereInput): ApplicationSubscriptionPayload
  candidate(where: CandidateSubscriptionWhereInput): CandidateSubscriptionPayload
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  disqualification(where: DisqualificationSubscriptionWhereInput): DisqualificationSubscriptionPayload
  disqualificationLink(where: DisqualificationLinkSubscriptionWhereInput): DisqualificationLinkSubscriptionPayload
  event(where: EventSubscriptionWhereInput): EventSubscriptionPayload
  field(where: FieldSubscriptionWhereInput): FieldSubscriptionPayload
  fieldLink(where: FieldLinkSubscriptionWhereInput): FieldLinkSubscriptionPayload
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
  invite(where: InviteSubscriptionWhereInput): InviteSubscriptionPayload
  job(where: JobSubscriptionWhereInput): JobSubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  notification(where: NotificationSubscriptionWhereInput): NotificationSubscriptionPayload
  stage(where: StageSubscriptionWhereInput): StageSubscriptionPayload
  tag(where: TagSubscriptionWhereInput): TagSubscriptionPayload
  task(where: TaskSubscriptionWhereInput): TaskSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  workflow(where: WorkflowSubscriptionWhereInput): WorkflowSubscriptionPayload
  workspace(where: WorkspaceSubscriptionWhereInput): WorkspaceSubscriptionPayload
}

type Tag {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  label: String!
}

type TagConnection {
  pageInfo: PageInfo!
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

type TagEdge {
  node: Tag!
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

input TagScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  label: String
  label_not: String
  label_in: [String!]
  label_not_in: [String!]
  label_lt: String
  label_lte: String
  label_gt: String
  label_gte: String
  label_contains: String
  label_not_contains: String
  label_starts_with: String
  label_not_starts_with: String
  label_ends_with: String
  label_not_ends_with: String
  AND: [TagScalarWhereInput!]
  OR: [TagScalarWhereInput!]
  NOT: [TagScalarWhereInput!]
}

type TagSubscriptionPayload {
  mutation: MutationType!
  node: Tag
  updatedFields: [String!]
  previousValues: TagPreviousValues
}

input TagSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TagWhereInput
  AND: [TagSubscriptionWhereInput!]
  OR: [TagSubscriptionWhereInput!]
  NOT: [TagSubscriptionWhereInput!]
}

input TagUpdateDataInput {
  label: String
}

input TagUpdateInput {
  label: String
}

input TagUpdateManyDataInput {
  label: String
}

input TagUpdateManyInput {
  create: [TagCreateInput!]
  update: [TagUpdateWithWhereUniqueNestedInput!]
  upsert: [TagUpsertWithWhereUniqueNestedInput!]
  delete: [TagWhereUniqueInput!]
  connect: [TagWhereUniqueInput!]
  disconnect: [TagWhereUniqueInput!]
  deleteMany: [TagScalarWhereInput!]
  updateMany: [TagUpdateManyWithWhereNestedInput!]
}

input TagUpdateManyMutationInput {
  label: String
}

input TagUpdateManyWithWhereNestedInput {
  where: TagScalarWhereInput!
  data: TagUpdateManyDataInput!
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  label: String
  label_not: String
  label_in: [String!]
  label_not_in: [String!]
  label_lt: String
  label_lte: String
  label_gt: String
  label_gte: String
  label_contains: String
  label_not_contains: String
  label_starts_with: String
  label_not_starts_with: String
  label_ends_with: String
  label_not_ends_with: String
  AND: [TagWhereInput!]
  OR: [TagWhereInput!]
  NOT: [TagWhereInput!]
}

input TagWhereUniqueInput {
  id: ID
}

type Task {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  subscribers(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  owners(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  candidate: Candidate
  title: String
  description: String
  dueAt: DateTime
}

type TaskConnection {
  pageInfo: PageInfo!
  edges: [TaskEdge]!
  aggregate: AggregateTask!
}

input TaskCreateInput {
  subscribers: UserCreateManyWithoutSubscriptionTasksInput
  owners: UserCreateManyWithoutTasksInput
  candidate: CandidateCreateOneWithoutTasksInput
  title: String
  description: String
  dueAt: DateTime
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
  subscribers: UserCreateManyWithoutSubscriptionTasksInput
  owners: UserCreateManyWithoutTasksInput
  title: String
  description: String
  dueAt: DateTime
}

input TaskCreateWithoutOwnersInput {
  subscribers: UserCreateManyWithoutSubscriptionTasksInput
  candidate: CandidateCreateOneWithoutTasksInput
  title: String
  description: String
  dueAt: DateTime
}

input TaskCreateWithoutSubscribersInput {
  owners: UserCreateManyWithoutTasksInput
  candidate: CandidateCreateOneWithoutTasksInput
  title: String
  description: String
  dueAt: DateTime
}

type TaskEdge {
  node: Task!
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

input TaskScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  dueAt: DateTime
  dueAt_not: DateTime
  dueAt_in: [DateTime!]
  dueAt_not_in: [DateTime!]
  dueAt_lt: DateTime
  dueAt_lte: DateTime
  dueAt_gt: DateTime
  dueAt_gte: DateTime
  AND: [TaskScalarWhereInput!]
  OR: [TaskScalarWhereInput!]
  NOT: [TaskScalarWhereInput!]
}

type TaskSubscriptionPayload {
  mutation: MutationType!
  node: Task
  updatedFields: [String!]
  previousValues: TaskPreviousValues
}

input TaskSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TaskWhereInput
  AND: [TaskSubscriptionWhereInput!]
  OR: [TaskSubscriptionWhereInput!]
  NOT: [TaskSubscriptionWhereInput!]
}

input TaskUpdateDataInput {
  subscribers: UserUpdateManyWithoutSubscriptionTasksInput
  owners: UserUpdateManyWithoutTasksInput
  candidate: CandidateUpdateOneWithoutTasksInput
  title: String
  description: String
  dueAt: DateTime
}

input TaskUpdateInput {
  subscribers: UserUpdateManyWithoutSubscriptionTasksInput
  owners: UserUpdateManyWithoutTasksInput
  candidate: CandidateUpdateOneWithoutTasksInput
  title: String
  description: String
  dueAt: DateTime
}

input TaskUpdateManyDataInput {
  title: String
  description: String
  dueAt: DateTime
}

input TaskUpdateManyMutationInput {
  title: String
  description: String
  dueAt: DateTime
}

input TaskUpdateManyWithoutCandidateInput {
  create: [TaskCreateWithoutCandidateInput!]
  delete: [TaskWhereUniqueInput!]
  connect: [TaskWhereUniqueInput!]
  disconnect: [TaskWhereUniqueInput!]
  update: [TaskUpdateWithWhereUniqueWithoutCandidateInput!]
  upsert: [TaskUpsertWithWhereUniqueWithoutCandidateInput!]
  deleteMany: [TaskScalarWhereInput!]
  updateMany: [TaskUpdateManyWithWhereNestedInput!]
}

input TaskUpdateManyWithoutOwnersInput {
  create: [TaskCreateWithoutOwnersInput!]
  delete: [TaskWhereUniqueInput!]
  connect: [TaskWhereUniqueInput!]
  disconnect: [TaskWhereUniqueInput!]
  update: [TaskUpdateWithWhereUniqueWithoutOwnersInput!]
  upsert: [TaskUpsertWithWhereUniqueWithoutOwnersInput!]
  deleteMany: [TaskScalarWhereInput!]
  updateMany: [TaskUpdateManyWithWhereNestedInput!]
}

input TaskUpdateManyWithoutSubscribersInput {
  create: [TaskCreateWithoutSubscribersInput!]
  delete: [TaskWhereUniqueInput!]
  connect: [TaskWhereUniqueInput!]
  disconnect: [TaskWhereUniqueInput!]
  update: [TaskUpdateWithWhereUniqueWithoutSubscribersInput!]
  upsert: [TaskUpsertWithWhereUniqueWithoutSubscribersInput!]
  deleteMany: [TaskScalarWhereInput!]
  updateMany: [TaskUpdateManyWithWhereNestedInput!]
}

input TaskUpdateManyWithWhereNestedInput {
  where: TaskScalarWhereInput!
  data: TaskUpdateManyDataInput!
}

input TaskUpdateOneInput {
  create: TaskCreateInput
  update: TaskUpdateDataInput
  upsert: TaskUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: TaskWhereUniqueInput
}

input TaskUpdateWithoutCandidateDataInput {
  subscribers: UserUpdateManyWithoutSubscriptionTasksInput
  owners: UserUpdateManyWithoutTasksInput
  title: String
  description: String
  dueAt: DateTime
}

input TaskUpdateWithoutOwnersDataInput {
  subscribers: UserUpdateManyWithoutSubscriptionTasksInput
  candidate: CandidateUpdateOneWithoutTasksInput
  title: String
  description: String
  dueAt: DateTime
}

input TaskUpdateWithoutSubscribersDataInput {
  owners: UserUpdateManyWithoutTasksInput
  candidate: CandidateUpdateOneWithoutTasksInput
  title: String
  description: String
  dueAt: DateTime
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  subscribers_every: UserWhereInput
  subscribers_some: UserWhereInput
  subscribers_none: UserWhereInput
  owners_every: UserWhereInput
  owners_some: UserWhereInput
  owners_none: UserWhereInput
  candidate: CandidateWhereInput
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  dueAt: DateTime
  dueAt_not: DateTime
  dueAt_in: [DateTime!]
  dueAt_not_in: [DateTime!]
  dueAt_lt: DateTime
  dueAt_lte: DateTime
  dueAt_gt: DateTime
  dueAt_gte: DateTime
  AND: [TaskWhereInput!]
  OR: [TaskWhereInput!]
  NOT: [TaskWhereInput!]
}

input TaskWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  workspace: Workspace!
  events: Event
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
  avatar: File
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  workspace: WorkspaceCreateOneWithoutUsersInput!
  events: EventCreateOneWithoutActorUserInput
  notifications: NotificationCreateManyWithoutUserInput
  subscriptionJobs: JobCreateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateCreateManyWithoutSubscribersInput
  subscriptionTasks: TaskCreateManyWithoutSubscribersInput
  tasks: TaskCreateManyWithoutOwnersInput
  firstName: String!
  lastName: String!
  email: String!
  username: String!
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
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
  workspace: WorkspaceCreateOneWithoutUsersInput!
  notifications: NotificationCreateManyWithoutUserInput
  subscriptionJobs: JobCreateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateCreateManyWithoutSubscribersInput
  subscriptionTasks: TaskCreateManyWithoutSubscribersInput
  tasks: TaskCreateManyWithoutOwnersInput
  firstName: String!
  lastName: String!
  email: String!
  username: String!
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  avatar: FileCreateOneInput
}

input UserCreateWithoutNotificationsInput {
  workspace: WorkspaceCreateOneWithoutUsersInput!
  events: EventCreateOneWithoutActorUserInput
  subscriptionJobs: JobCreateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateCreateManyWithoutSubscribersInput
  subscriptionTasks: TaskCreateManyWithoutSubscribersInput
  tasks: TaskCreateManyWithoutOwnersInput
  firstName: String!
  lastName: String!
  email: String!
  username: String!
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  avatar: FileCreateOneInput
}

input UserCreateWithoutSubscriptionCandidatesInput {
  workspace: WorkspaceCreateOneWithoutUsersInput!
  events: EventCreateOneWithoutActorUserInput
  notifications: NotificationCreateManyWithoutUserInput
  subscriptionJobs: JobCreateManyWithoutSubscribersInput
  subscriptionTasks: TaskCreateManyWithoutSubscribersInput
  tasks: TaskCreateManyWithoutOwnersInput
  firstName: String!
  lastName: String!
  email: String!
  username: String!
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  avatar: FileCreateOneInput
}

input UserCreateWithoutSubscriptionJobsInput {
  workspace: WorkspaceCreateOneWithoutUsersInput!
  events: EventCreateOneWithoutActorUserInput
  notifications: NotificationCreateManyWithoutUserInput
  subscriptionCandidates: CandidateCreateManyWithoutSubscribersInput
  subscriptionTasks: TaskCreateManyWithoutSubscribersInput
  tasks: TaskCreateManyWithoutOwnersInput
  firstName: String!
  lastName: String!
  email: String!
  username: String!
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  avatar: FileCreateOneInput
}

input UserCreateWithoutSubscriptionTasksInput {
  workspace: WorkspaceCreateOneWithoutUsersInput!
  events: EventCreateOneWithoutActorUserInput
  notifications: NotificationCreateManyWithoutUserInput
  subscriptionJobs: JobCreateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateCreateManyWithoutSubscribersInput
  tasks: TaskCreateManyWithoutOwnersInput
  firstName: String!
  lastName: String!
  email: String!
  username: String!
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  avatar: FileCreateOneInput
}

input UserCreateWithoutTasksInput {
  workspace: WorkspaceCreateOneWithoutUsersInput!
  events: EventCreateOneWithoutActorUserInput
  notifications: NotificationCreateManyWithoutUserInput
  subscriptionJobs: JobCreateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateCreateManyWithoutSubscribersInput
  subscriptionTasks: TaskCreateManyWithoutSubscribersInput
  firstName: String!
  lastName: String!
  email: String!
  username: String!
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  avatar: FileCreateOneInput
}

input UserCreateWithoutWorkspaceInput {
  events: EventCreateOneWithoutActorUserInput
  notifications: NotificationCreateManyWithoutUserInput
  subscriptionJobs: JobCreateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateCreateManyWithoutSubscribersInput
  subscriptionTasks: TaskCreateManyWithoutSubscribersInput
  tasks: TaskCreateManyWithoutOwnersInput
  firstName: String!
  lastName: String!
  email: String!
  username: String!
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  avatar: FileCreateOneInput
}

type UserEdge {
  node: User!
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

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  lastLogin: DateTime
  lastLogin_not: DateTime
  lastLogin_in: [DateTime!]
  lastLogin_not_in: [DateTime!]
  lastLogin_lt: DateTime
  lastLogin_lte: DateTime
  lastLogin_gt: DateTime
  lastLogin_gte: DateTime
  deletedAt: DateTime
  deletedAt_not: DateTime
  deletedAt_in: [DateTime!]
  deletedAt_not_in: [DateTime!]
  deletedAt_lt: DateTime
  deletedAt_lte: DateTime
  deletedAt_gt: DateTime
  deletedAt_gte: DateTime
  position: String
  position_not: String
  position_in: [String!]
  position_not_in: [String!]
  position_lt: String
  position_lte: String
  position_gt: String
  position_gte: String
  position_contains: String
  position_not_contains: String
  position_starts_with: String
  position_not_starts_with: String
  position_ends_with: String
  position_not_ends_with: String
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  workspace: WorkspaceUpdateOneRequiredWithoutUsersInput
  events: EventUpdateOneWithoutActorUserInput
  notifications: NotificationUpdateManyWithoutUserInput
  subscriptionJobs: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks: TaskUpdateManyWithoutSubscribersInput
  tasks: TaskUpdateManyWithoutOwnersInput
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  avatar: FileUpdateOneInput
}

input UserUpdateInput {
  workspace: WorkspaceUpdateOneRequiredWithoutUsersInput
  events: EventUpdateOneWithoutActorUserInput
  notifications: NotificationUpdateManyWithoutUserInput
  subscriptionJobs: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks: TaskUpdateManyWithoutSubscribersInput
  tasks: TaskUpdateManyWithoutOwnersInput
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  avatar: FileUpdateOneInput
}

input UserUpdateManyDataInput {
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
}

input UserUpdateManyMutationInput {
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
}

input UserUpdateManyWithoutSubscriptionCandidatesInput {
  create: [UserCreateWithoutSubscriptionCandidatesInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutSubscriptionCandidatesInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutSubscriptionCandidatesInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutSubscriptionJobsInput {
  create: [UserCreateWithoutSubscriptionJobsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutSubscriptionJobsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutSubscriptionJobsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutSubscriptionTasksInput {
  create: [UserCreateWithoutSubscriptionTasksInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutSubscriptionTasksInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutSubscriptionTasksInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutTasksInput {
  create: [UserCreateWithoutTasksInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutTasksInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutTasksInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutWorkspaceInput {
  create: [UserCreateWithoutWorkspaceInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutWorkspaceInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutWorkspaceInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutNotificationsInput {
  create: UserCreateWithoutNotificationsInput
  update: UserUpdateWithoutNotificationsDataInput
  upsert: UserUpsertWithoutNotificationsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutEventsInput {
  create: UserCreateWithoutEventsInput
  update: UserUpdateWithoutEventsDataInput
  upsert: UserUpsertWithoutEventsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutEventsDataInput {
  workspace: WorkspaceUpdateOneRequiredWithoutUsersInput
  notifications: NotificationUpdateManyWithoutUserInput
  subscriptionJobs: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks: TaskUpdateManyWithoutSubscribersInput
  tasks: TaskUpdateManyWithoutOwnersInput
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  avatar: FileUpdateOneInput
}

input UserUpdateWithoutNotificationsDataInput {
  workspace: WorkspaceUpdateOneRequiredWithoutUsersInput
  events: EventUpdateOneWithoutActorUserInput
  subscriptionJobs: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks: TaskUpdateManyWithoutSubscribersInput
  tasks: TaskUpdateManyWithoutOwnersInput
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  avatar: FileUpdateOneInput
}

input UserUpdateWithoutSubscriptionCandidatesDataInput {
  workspace: WorkspaceUpdateOneRequiredWithoutUsersInput
  events: EventUpdateOneWithoutActorUserInput
  notifications: NotificationUpdateManyWithoutUserInput
  subscriptionJobs: JobUpdateManyWithoutSubscribersInput
  subscriptionTasks: TaskUpdateManyWithoutSubscribersInput
  tasks: TaskUpdateManyWithoutOwnersInput
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  avatar: FileUpdateOneInput
}

input UserUpdateWithoutSubscriptionJobsDataInput {
  workspace: WorkspaceUpdateOneRequiredWithoutUsersInput
  events: EventUpdateOneWithoutActorUserInput
  notifications: NotificationUpdateManyWithoutUserInput
  subscriptionCandidates: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks: TaskUpdateManyWithoutSubscribersInput
  tasks: TaskUpdateManyWithoutOwnersInput
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  avatar: FileUpdateOneInput
}

input UserUpdateWithoutSubscriptionTasksDataInput {
  workspace: WorkspaceUpdateOneRequiredWithoutUsersInput
  events: EventUpdateOneWithoutActorUserInput
  notifications: NotificationUpdateManyWithoutUserInput
  subscriptionJobs: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateUpdateManyWithoutSubscribersInput
  tasks: TaskUpdateManyWithoutOwnersInput
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  avatar: FileUpdateOneInput
}

input UserUpdateWithoutTasksDataInput {
  workspace: WorkspaceUpdateOneRequiredWithoutUsersInput
  events: EventUpdateOneWithoutActorUserInput
  notifications: NotificationUpdateManyWithoutUserInput
  subscriptionJobs: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks: TaskUpdateManyWithoutSubscribersInput
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  avatar: FileUpdateOneInput
}

input UserUpdateWithoutWorkspaceDataInput {
  events: EventUpdateOneWithoutActorUserInput
  notifications: NotificationUpdateManyWithoutUserInput
  subscriptionJobs: JobUpdateManyWithoutSubscribersInput
  subscriptionCandidates: CandidateUpdateManyWithoutSubscribersInput
  subscriptionTasks: TaskUpdateManyWithoutSubscribersInput
  tasks: TaskUpdateManyWithoutOwnersInput
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
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
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  lastLogin: DateTime
  lastLogin_not: DateTime
  lastLogin_in: [DateTime!]
  lastLogin_not_in: [DateTime!]
  lastLogin_lt: DateTime
  lastLogin_lte: DateTime
  lastLogin_gt: DateTime
  lastLogin_gte: DateTime
  deletedAt: DateTime
  deletedAt_not: DateTime
  deletedAt_in: [DateTime!]
  deletedAt_not_in: [DateTime!]
  deletedAt_lt: DateTime
  deletedAt_lte: DateTime
  deletedAt_gt: DateTime
  deletedAt_gte: DateTime
  position: String
  position_not: String
  position_in: [String!]
  position_not_in: [String!]
  position_lt: String
  position_lte: String
  position_gt: String
  position_gte: String
  position_contains: String
  position_not_contains: String
  position_starts_with: String
  position_not_starts_with: String
  position_ends_with: String
  position_not_ends_with: String
  avatar: FileWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Workflow {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  description: String
  stages(where: StageWhereInput, orderBy: StageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stage!]
  disqualifications(where: DisqualificationWhereInput, orderBy: DisqualificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Disqualification!]
  fields(where: FieldWhereInput, orderBy: FieldOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Field!]
}

type WorkflowConnection {
  pageInfo: PageInfo!
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

type WorkflowEdge {
  node: Workflow!
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

input WorkflowScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [WorkflowScalarWhereInput!]
  OR: [WorkflowScalarWhereInput!]
  NOT: [WorkflowScalarWhereInput!]
}

type WorkflowSubscriptionPayload {
  mutation: MutationType!
  node: Workflow
  updatedFields: [String!]
  previousValues: WorkflowPreviousValues
}

input WorkflowSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: WorkflowWhereInput
  AND: [WorkflowSubscriptionWhereInput!]
  OR: [WorkflowSubscriptionWhereInput!]
  NOT: [WorkflowSubscriptionWhereInput!]
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

input WorkflowUpdateManyDataInput {
  name: String
  description: String
}

input WorkflowUpdateManyInput {
  create: [WorkflowCreateInput!]
  update: [WorkflowUpdateWithWhereUniqueNestedInput!]
  upsert: [WorkflowUpsertWithWhereUniqueNestedInput!]
  delete: [WorkflowWhereUniqueInput!]
  connect: [WorkflowWhereUniqueInput!]
  disconnect: [WorkflowWhereUniqueInput!]
  deleteMany: [WorkflowScalarWhereInput!]
  updateMany: [WorkflowUpdateManyWithWhereNestedInput!]
}

input WorkflowUpdateManyMutationInput {
  name: String
  description: String
}

input WorkflowUpdateManyWithWhereNestedInput {
  where: WorkflowScalarWhereInput!
  data: WorkflowUpdateManyDataInput!
}

input WorkflowUpdateOneInput {
  create: WorkflowCreateInput
  update: WorkflowUpdateDataInput
  upsert: WorkflowUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: WorkflowWhereUniqueInput
}

input WorkflowUpdateOneRequiredInput {
  create: WorkflowCreateInput
  update: WorkflowUpdateDataInput
  upsert: WorkflowUpsertNestedInput
  connect: WorkflowWhereUniqueInput
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
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
  AND: [WorkflowWhereInput!]
  OR: [WorkflowWhereInput!]
  NOT: [WorkflowWhereInput!]
}

input WorkflowWhereUniqueInput {
  id: ID
}

type Workspace {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  jobs(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Job!]
  candidates(where: CandidateWhereInput, orderBy: CandidateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Candidate!]
  workflows(where: WorkflowWhereInput, orderBy: WorkflowOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Workflow!]
  workflowDefault: Workflow
  invites(where: InviteWhereInput, orderBy: InviteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invite!]
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
  name: String!
}

type WorkspaceConnection {
  pageInfo: PageInfo!
  edges: [WorkspaceEdge]!
  aggregate: AggregateWorkspace!
}

input WorkspaceCreateInput {
  events: EventCreateManyWithoutTargetWorkspaceInput
  users: UserCreateManyWithoutWorkspaceInput
  jobs: JobCreateManyWithoutWorkspaceInput
  candidates: CandidateCreateManyWithoutWorkspaceInput
  workflows: WorkflowCreateManyInput
  workflowDefault: WorkflowCreateOneInput
  invites: InviteCreateManyInput
  tags: TagCreateManyInput
  name: String!
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
  events: EventCreateManyWithoutTargetWorkspaceInput
  users: UserCreateManyWithoutWorkspaceInput
  jobs: JobCreateManyWithoutWorkspaceInput
  workflows: WorkflowCreateManyInput
  workflowDefault: WorkflowCreateOneInput
  invites: InviteCreateManyInput
  tags: TagCreateManyInput
  name: String!
}

input WorkspaceCreateWithoutEventsInput {
  users: UserCreateManyWithoutWorkspaceInput
  jobs: JobCreateManyWithoutWorkspaceInput
  candidates: CandidateCreateManyWithoutWorkspaceInput
  workflows: WorkflowCreateManyInput
  workflowDefault: WorkflowCreateOneInput
  invites: InviteCreateManyInput
  tags: TagCreateManyInput
  name: String!
}

input WorkspaceCreateWithoutJobsInput {
  events: EventCreateManyWithoutTargetWorkspaceInput
  users: UserCreateManyWithoutWorkspaceInput
  candidates: CandidateCreateManyWithoutWorkspaceInput
  workflows: WorkflowCreateManyInput
  workflowDefault: WorkflowCreateOneInput
  invites: InviteCreateManyInput
  tags: TagCreateManyInput
  name: String!
}

input WorkspaceCreateWithoutUsersInput {
  events: EventCreateManyWithoutTargetWorkspaceInput
  jobs: JobCreateManyWithoutWorkspaceInput
  candidates: CandidateCreateManyWithoutWorkspaceInput
  workflows: WorkflowCreateManyInput
  workflowDefault: WorkflowCreateOneInput
  invites: InviteCreateManyInput
  tags: TagCreateManyInput
  name: String!
}

type WorkspaceEdge {
  node: Workspace!
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
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: WorkspaceWhereInput
  AND: [WorkspaceSubscriptionWhereInput!]
  OR: [WorkspaceSubscriptionWhereInput!]
  NOT: [WorkspaceSubscriptionWhereInput!]
}

input WorkspaceUpdateInput {
  events: EventUpdateManyWithoutTargetWorkspaceInput
  users: UserUpdateManyWithoutWorkspaceInput
  jobs: JobUpdateManyWithoutWorkspaceInput
  candidates: CandidateUpdateManyWithoutWorkspaceInput
  workflows: WorkflowUpdateManyInput
  workflowDefault: WorkflowUpdateOneInput
  invites: InviteUpdateManyInput
  tags: TagUpdateManyInput
  name: String
}

input WorkspaceUpdateManyMutationInput {
  name: String
}

input WorkspaceUpdateOneRequiredWithoutCandidatesInput {
  create: WorkspaceCreateWithoutCandidatesInput
  update: WorkspaceUpdateWithoutCandidatesDataInput
  upsert: WorkspaceUpsertWithoutCandidatesInput
  connect: WorkspaceWhereUniqueInput
}

input WorkspaceUpdateOneRequiredWithoutJobsInput {
  create: WorkspaceCreateWithoutJobsInput
  update: WorkspaceUpdateWithoutJobsDataInput
  upsert: WorkspaceUpsertWithoutJobsInput
  connect: WorkspaceWhereUniqueInput
}

input WorkspaceUpdateOneRequiredWithoutUsersInput {
  create: WorkspaceCreateWithoutUsersInput
  update: WorkspaceUpdateWithoutUsersDataInput
  upsert: WorkspaceUpsertWithoutUsersInput
  connect: WorkspaceWhereUniqueInput
}

input WorkspaceUpdateOneWithoutEventsInput {
  create: WorkspaceCreateWithoutEventsInput
  update: WorkspaceUpdateWithoutEventsDataInput
  upsert: WorkspaceUpsertWithoutEventsInput
  delete: Boolean
  disconnect: Boolean
  connect: WorkspaceWhereUniqueInput
}

input WorkspaceUpdateWithoutCandidatesDataInput {
  events: EventUpdateManyWithoutTargetWorkspaceInput
  users: UserUpdateManyWithoutWorkspaceInput
  jobs: JobUpdateManyWithoutWorkspaceInput
  workflows: WorkflowUpdateManyInput
  workflowDefault: WorkflowUpdateOneInput
  invites: InviteUpdateManyInput
  tags: TagUpdateManyInput
  name: String
}

input WorkspaceUpdateWithoutEventsDataInput {
  users: UserUpdateManyWithoutWorkspaceInput
  jobs: JobUpdateManyWithoutWorkspaceInput
  candidates: CandidateUpdateManyWithoutWorkspaceInput
  workflows: WorkflowUpdateManyInput
  workflowDefault: WorkflowUpdateOneInput
  invites: InviteUpdateManyInput
  tags: TagUpdateManyInput
  name: String
}

input WorkspaceUpdateWithoutJobsDataInput {
  events: EventUpdateManyWithoutTargetWorkspaceInput
  users: UserUpdateManyWithoutWorkspaceInput
  candidates: CandidateUpdateManyWithoutWorkspaceInput
  workflows: WorkflowUpdateManyInput
  workflowDefault: WorkflowUpdateOneInput
  invites: InviteUpdateManyInput
  tags: TagUpdateManyInput
  name: String
}

input WorkspaceUpdateWithoutUsersDataInput {
  events: EventUpdateManyWithoutTargetWorkspaceInput
  jobs: JobUpdateManyWithoutWorkspaceInput
  candidates: CandidateUpdateManyWithoutWorkspaceInput
  workflows: WorkflowUpdateManyInput
  workflowDefault: WorkflowUpdateOneInput
  invites: InviteUpdateManyInput
  tags: TagUpdateManyInput
  name: String
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
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
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [WorkspaceWhereInput!]
  OR: [WorkspaceWhereInput!]
  NOT: [WorkspaceWhereInput!]
}

input WorkspaceWhereUniqueInput {
  id: ID
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type ApplicationOrderByInput =   'createdAt_ASC' |
  'createdAt_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'type_ASC' |
  'type_DESC'

export type ApplicationType =   'Qualified' |
  'Disqualified'

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
  'metaCompany_ASC' |
  'metaCompany_DESC' |
  'metaHeadline_ASC' |
  'metaHeadline_DESC' |
  'metaPosition_ASC' |
  'metaPosition_DESC'

export type CommentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'content_ASC' |
  'content_DESC'

export type DisqualificationLinkOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'justification_ASC' |
  'justification_DESC'

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

export type EventActorType =   'System' |
  'User' |
  'Candidate'

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

export type EventTargetType =   'Candidate' |
  'Job' |
  'Task' |
  'Workspace'

export type EventType =   'Default' |
  'Message' |
  'CommentCreate' |
  'CommentEdit' |
  'CommentDelete'

export type FieldLinkOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'value_ASC' |
  'value_DESC'

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

export type FieldType =   'Int' |
  'Float' |
  'String' |
  'Text' |
  'Boolean' |
  'DateTime'

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

export type JobType =   'Draft' |
  'Published' |
  'Archived'

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
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type NotificationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'type_ASC' |
  'type_DESC'

export type NotificationType =   'Unread' |
  'Read'

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

export type StageType =   'New' |
  'Pipeline' |
  'Final'

export type TagOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'label_ASC' |
  'label_DESC'

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

export type WorkspaceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC'

export interface ApplicationCreateInput {
  type: ApplicationType
  disqualificationLink?: DisqualificationLinkCreateOneInput | null
  stage: StageCreateOneInput
  job: JobCreateOneWithoutApplicationsInput
  candidate: CandidateCreateOneWithoutApplicationsInput
}

export interface ApplicationCreateManyWithoutCandidateInput {
  create?: ApplicationCreateWithoutCandidateInput[] | ApplicationCreateWithoutCandidateInput | null
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput | null
}

export interface ApplicationCreateManyWithoutJobInput {
  create?: ApplicationCreateWithoutJobInput[] | ApplicationCreateWithoutJobInput | null
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput | null
}

export interface ApplicationCreateWithoutCandidateInput {
  type: ApplicationType
  disqualificationLink?: DisqualificationLinkCreateOneInput | null
  stage: StageCreateOneInput
  job: JobCreateOneWithoutApplicationsInput
}

export interface ApplicationCreateWithoutJobInput {
  type: ApplicationType
  disqualificationLink?: DisqualificationLinkCreateOneInput | null
  stage: StageCreateOneInput
  candidate: CandidateCreateOneWithoutApplicationsInput
}

export interface ApplicationScalarWhereInput {
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  type?: ApplicationType | null
  type_not?: ApplicationType | null
  type_in?: ApplicationType[] | ApplicationType | null
  type_not_in?: ApplicationType[] | ApplicationType | null
  AND?: ApplicationScalarWhereInput[] | ApplicationScalarWhereInput | null
  OR?: ApplicationScalarWhereInput[] | ApplicationScalarWhereInput | null
  NOT?: ApplicationScalarWhereInput[] | ApplicationScalarWhereInput | null
}

export interface ApplicationSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ApplicationWhereInput | null
  AND?: ApplicationSubscriptionWhereInput[] | ApplicationSubscriptionWhereInput | null
  OR?: ApplicationSubscriptionWhereInput[] | ApplicationSubscriptionWhereInput | null
  NOT?: ApplicationSubscriptionWhereInput[] | ApplicationSubscriptionWhereInput | null
}

export interface ApplicationUpdateInput {
  type?: ApplicationType | null
  disqualificationLink?: DisqualificationLinkUpdateOneInput | null
  stage?: StageUpdateOneRequiredInput | null
  job?: JobUpdateOneRequiredWithoutApplicationsInput | null
  candidate?: CandidateUpdateOneRequiredWithoutApplicationsInput | null
}

export interface ApplicationUpdateManyDataInput {
  type?: ApplicationType | null
}

export interface ApplicationUpdateManyMutationInput {
  type?: ApplicationType | null
}

export interface ApplicationUpdateManyWithoutCandidateInput {
  create?: ApplicationCreateWithoutCandidateInput[] | ApplicationCreateWithoutCandidateInput | null
  delete?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput | null
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput | null
  disconnect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput | null
  update?: ApplicationUpdateWithWhereUniqueWithoutCandidateInput[] | ApplicationUpdateWithWhereUniqueWithoutCandidateInput | null
  upsert?: ApplicationUpsertWithWhereUniqueWithoutCandidateInput[] | ApplicationUpsertWithWhereUniqueWithoutCandidateInput | null
  deleteMany?: ApplicationScalarWhereInput[] | ApplicationScalarWhereInput | null
  updateMany?: ApplicationUpdateManyWithWhereNestedInput[] | ApplicationUpdateManyWithWhereNestedInput | null
}

export interface ApplicationUpdateManyWithoutJobInput {
  create?: ApplicationCreateWithoutJobInput[] | ApplicationCreateWithoutJobInput | null
  delete?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput | null
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput | null
  disconnect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput | null
  update?: ApplicationUpdateWithWhereUniqueWithoutJobInput[] | ApplicationUpdateWithWhereUniqueWithoutJobInput | null
  upsert?: ApplicationUpsertWithWhereUniqueWithoutJobInput[] | ApplicationUpsertWithWhereUniqueWithoutJobInput | null
  deleteMany?: ApplicationScalarWhereInput[] | ApplicationScalarWhereInput | null
  updateMany?: ApplicationUpdateManyWithWhereNestedInput[] | ApplicationUpdateManyWithWhereNestedInput | null
}

export interface ApplicationUpdateManyWithWhereNestedInput {
  where: ApplicationScalarWhereInput
  data: ApplicationUpdateManyDataInput
}

export interface ApplicationUpdateWithoutCandidateDataInput {
  type?: ApplicationType | null
  disqualificationLink?: DisqualificationLinkUpdateOneInput | null
  stage?: StageUpdateOneRequiredInput | null
  job?: JobUpdateOneRequiredWithoutApplicationsInput | null
}

export interface ApplicationUpdateWithoutJobDataInput {
  type?: ApplicationType | null
  disqualificationLink?: DisqualificationLinkUpdateOneInput | null
  stage?: StageUpdateOneRequiredInput | null
  candidate?: CandidateUpdateOneRequiredWithoutApplicationsInput | null
}

export interface ApplicationUpdateWithWhereUniqueWithoutCandidateInput {
  where: ApplicationWhereUniqueInput
  data: ApplicationUpdateWithoutCandidateDataInput
}

export interface ApplicationUpdateWithWhereUniqueWithoutJobInput {
  where: ApplicationWhereUniqueInput
  data: ApplicationUpdateWithoutJobDataInput
}

export interface ApplicationUpsertWithWhereUniqueWithoutCandidateInput {
  where: ApplicationWhereUniqueInput
  update: ApplicationUpdateWithoutCandidateDataInput
  create: ApplicationCreateWithoutCandidateInput
}

export interface ApplicationUpsertWithWhereUniqueWithoutJobInput {
  where: ApplicationWhereUniqueInput
  update: ApplicationUpdateWithoutJobDataInput
  create: ApplicationCreateWithoutJobInput
}

export interface ApplicationWhereInput {
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  type?: ApplicationType | null
  type_not?: ApplicationType | null
  type_in?: ApplicationType[] | ApplicationType | null
  type_not_in?: ApplicationType[] | ApplicationType | null
  disqualificationLink?: DisqualificationLinkWhereInput | null
  stage?: StageWhereInput | null
  job?: JobWhereInput | null
  candidate?: CandidateWhereInput | null
  AND?: ApplicationWhereInput[] | ApplicationWhereInput | null
  OR?: ApplicationWhereInput[] | ApplicationWhereInput | null
  NOT?: ApplicationWhereInput[] | ApplicationWhereInput | null
}

export interface ApplicationWhereUniqueInput {
  id?: ID_Input | null
}

export interface CandidateCreatecoverLettersStringInput {
  set?: String[] | String | null
}

export interface CandidateCreateemailsInput {
  set?: String[] | String | null
}

export interface CandidateCreateInput {
  workspace: WorkspaceCreateOneWithoutCandidatesInput
  events?: EventCreateManyWithoutTargetCandidateInput | null
  subscribers?: UserCreateManyWithoutSubscriptionCandidatesInput | null
  firstName: String
  lastName: String
  emails?: CandidateCreateemailsInput | null
  phones?: CandidateCreatephonesInput | null
  links?: CandidateCreatelinksInput | null
  avatar?: FileCreateOneInput | null
  metaCompany?: String | null
  metaHeadline?: String | null
  metaPosition?: String | null
  resumesString?: CandidateCreateresumesStringInput | null
  resumesFile?: FileCreateManyInput | null
  coverLettersString?: CandidateCreatecoverLettersStringInput | null
  coverLettersFile?: FileCreateManyInput | null
  tags?: TagCreateManyInput | null
  source?: CandidateCreatesourceInput | null
  fields?: FieldLinkCreateManyInput | null
  tasks?: TaskCreateManyWithoutCandidateInput | null
  applications?: ApplicationCreateManyWithoutCandidateInput | null
  comments?: CommentCreateManyInput | null
}

export interface CandidateCreatelinksInput {
  set?: String[] | String | null
}

export interface CandidateCreateManyWithoutSubscribersInput {
  create?: CandidateCreateWithoutSubscribersInput[] | CandidateCreateWithoutSubscribersInput | null
  connect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput | null
}

export interface CandidateCreateManyWithoutWorkspaceInput {
  create?: CandidateCreateWithoutWorkspaceInput[] | CandidateCreateWithoutWorkspaceInput | null
  connect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput | null
}

export interface CandidateCreateOneInput {
  create?: CandidateCreateInput | null
  connect?: CandidateWhereUniqueInput | null
}

export interface CandidateCreateOneWithoutApplicationsInput {
  create?: CandidateCreateWithoutApplicationsInput | null
  connect?: CandidateWhereUniqueInput | null
}

export interface CandidateCreateOneWithoutEventsInput {
  create?: CandidateCreateWithoutEventsInput | null
  connect?: CandidateWhereUniqueInput | null
}

export interface CandidateCreateOneWithoutTasksInput {
  create?: CandidateCreateWithoutTasksInput | null
  connect?: CandidateWhereUniqueInput | null
}

export interface CandidateCreatephonesInput {
  set?: String[] | String | null
}

export interface CandidateCreateresumesStringInput {
  set?: String[] | String | null
}

export interface CandidateCreatesourceInput {
  set?: String[] | String | null
}

export interface CandidateCreateWithoutApplicationsInput {
  workspace: WorkspaceCreateOneWithoutCandidatesInput
  events?: EventCreateManyWithoutTargetCandidateInput | null
  subscribers?: UserCreateManyWithoutSubscriptionCandidatesInput | null
  firstName: String
  lastName: String
  emails?: CandidateCreateemailsInput | null
  phones?: CandidateCreatephonesInput | null
  links?: CandidateCreatelinksInput | null
  avatar?: FileCreateOneInput | null
  metaCompany?: String | null
  metaHeadline?: String | null
  metaPosition?: String | null
  resumesString?: CandidateCreateresumesStringInput | null
  resumesFile?: FileCreateManyInput | null
  coverLettersString?: CandidateCreatecoverLettersStringInput | null
  coverLettersFile?: FileCreateManyInput | null
  tags?: TagCreateManyInput | null
  source?: CandidateCreatesourceInput | null
  fields?: FieldLinkCreateManyInput | null
  tasks?: TaskCreateManyWithoutCandidateInput | null
  comments?: CommentCreateManyInput | null
}

export interface CandidateCreateWithoutEventsInput {
  workspace: WorkspaceCreateOneWithoutCandidatesInput
  subscribers?: UserCreateManyWithoutSubscriptionCandidatesInput | null
  firstName: String
  lastName: String
  emails?: CandidateCreateemailsInput | null
  phones?: CandidateCreatephonesInput | null
  links?: CandidateCreatelinksInput | null
  avatar?: FileCreateOneInput | null
  metaCompany?: String | null
  metaHeadline?: String | null
  metaPosition?: String | null
  resumesString?: CandidateCreateresumesStringInput | null
  resumesFile?: FileCreateManyInput | null
  coverLettersString?: CandidateCreatecoverLettersStringInput | null
  coverLettersFile?: FileCreateManyInput | null
  tags?: TagCreateManyInput | null
  source?: CandidateCreatesourceInput | null
  fields?: FieldLinkCreateManyInput | null
  tasks?: TaskCreateManyWithoutCandidateInput | null
  applications?: ApplicationCreateManyWithoutCandidateInput | null
  comments?: CommentCreateManyInput | null
}

export interface CandidateCreateWithoutSubscribersInput {
  workspace: WorkspaceCreateOneWithoutCandidatesInput
  events?: EventCreateManyWithoutTargetCandidateInput | null
  firstName: String
  lastName: String
  emails?: CandidateCreateemailsInput | null
  phones?: CandidateCreatephonesInput | null
  links?: CandidateCreatelinksInput | null
  avatar?: FileCreateOneInput | null
  metaCompany?: String | null
  metaHeadline?: String | null
  metaPosition?: String | null
  resumesString?: CandidateCreateresumesStringInput | null
  resumesFile?: FileCreateManyInput | null
  coverLettersString?: CandidateCreatecoverLettersStringInput | null
  coverLettersFile?: FileCreateManyInput | null
  tags?: TagCreateManyInput | null
  source?: CandidateCreatesourceInput | null
  fields?: FieldLinkCreateManyInput | null
  tasks?: TaskCreateManyWithoutCandidateInput | null
  applications?: ApplicationCreateManyWithoutCandidateInput | null
  comments?: CommentCreateManyInput | null
}

export interface CandidateCreateWithoutTasksInput {
  workspace: WorkspaceCreateOneWithoutCandidatesInput
  events?: EventCreateManyWithoutTargetCandidateInput | null
  subscribers?: UserCreateManyWithoutSubscriptionCandidatesInput | null
  firstName: String
  lastName: String
  emails?: CandidateCreateemailsInput | null
  phones?: CandidateCreatephonesInput | null
  links?: CandidateCreatelinksInput | null
  avatar?: FileCreateOneInput | null
  metaCompany?: String | null
  metaHeadline?: String | null
  metaPosition?: String | null
  resumesString?: CandidateCreateresumesStringInput | null
  resumesFile?: FileCreateManyInput | null
  coverLettersString?: CandidateCreatecoverLettersStringInput | null
  coverLettersFile?: FileCreateManyInput | null
  tags?: TagCreateManyInput | null
  source?: CandidateCreatesourceInput | null
  fields?: FieldLinkCreateManyInput | null
  applications?: ApplicationCreateManyWithoutCandidateInput | null
  comments?: CommentCreateManyInput | null
}

export interface CandidateCreateWithoutWorkspaceInput {
  events?: EventCreateManyWithoutTargetCandidateInput | null
  subscribers?: UserCreateManyWithoutSubscriptionCandidatesInput | null
  firstName: String
  lastName: String
  emails?: CandidateCreateemailsInput | null
  phones?: CandidateCreatephonesInput | null
  links?: CandidateCreatelinksInput | null
  avatar?: FileCreateOneInput | null
  metaCompany?: String | null
  metaHeadline?: String | null
  metaPosition?: String | null
  resumesString?: CandidateCreateresumesStringInput | null
  resumesFile?: FileCreateManyInput | null
  coverLettersString?: CandidateCreatecoverLettersStringInput | null
  coverLettersFile?: FileCreateManyInput | null
  tags?: TagCreateManyInput | null
  source?: CandidateCreatesourceInput | null
  fields?: FieldLinkCreateManyInput | null
  tasks?: TaskCreateManyWithoutCandidateInput | null
  applications?: ApplicationCreateManyWithoutCandidateInput | null
  comments?: CommentCreateManyInput | null
}

export interface CandidateScalarWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  firstName?: String | null
  firstName_not?: String | null
  firstName_in?: String[] | String | null
  firstName_not_in?: String[] | String | null
  firstName_lt?: String | null
  firstName_lte?: String | null
  firstName_gt?: String | null
  firstName_gte?: String | null
  firstName_contains?: String | null
  firstName_not_contains?: String | null
  firstName_starts_with?: String | null
  firstName_not_starts_with?: String | null
  firstName_ends_with?: String | null
  firstName_not_ends_with?: String | null
  lastName?: String | null
  lastName_not?: String | null
  lastName_in?: String[] | String | null
  lastName_not_in?: String[] | String | null
  lastName_lt?: String | null
  lastName_lte?: String | null
  lastName_gt?: String | null
  lastName_gte?: String | null
  lastName_contains?: String | null
  lastName_not_contains?: String | null
  lastName_starts_with?: String | null
  lastName_not_starts_with?: String | null
  lastName_ends_with?: String | null
  lastName_not_ends_with?: String | null
  metaCompany?: String | null
  metaCompany_not?: String | null
  metaCompany_in?: String[] | String | null
  metaCompany_not_in?: String[] | String | null
  metaCompany_lt?: String | null
  metaCompany_lte?: String | null
  metaCompany_gt?: String | null
  metaCompany_gte?: String | null
  metaCompany_contains?: String | null
  metaCompany_not_contains?: String | null
  metaCompany_starts_with?: String | null
  metaCompany_not_starts_with?: String | null
  metaCompany_ends_with?: String | null
  metaCompany_not_ends_with?: String | null
  metaHeadline?: String | null
  metaHeadline_not?: String | null
  metaHeadline_in?: String[] | String | null
  metaHeadline_not_in?: String[] | String | null
  metaHeadline_lt?: String | null
  metaHeadline_lte?: String | null
  metaHeadline_gt?: String | null
  metaHeadline_gte?: String | null
  metaHeadline_contains?: String | null
  metaHeadline_not_contains?: String | null
  metaHeadline_starts_with?: String | null
  metaHeadline_not_starts_with?: String | null
  metaHeadline_ends_with?: String | null
  metaHeadline_not_ends_with?: String | null
  metaPosition?: String | null
  metaPosition_not?: String | null
  metaPosition_in?: String[] | String | null
  metaPosition_not_in?: String[] | String | null
  metaPosition_lt?: String | null
  metaPosition_lte?: String | null
  metaPosition_gt?: String | null
  metaPosition_gte?: String | null
  metaPosition_contains?: String | null
  metaPosition_not_contains?: String | null
  metaPosition_starts_with?: String | null
  metaPosition_not_starts_with?: String | null
  metaPosition_ends_with?: String | null
  metaPosition_not_ends_with?: String | null
  AND?: CandidateScalarWhereInput[] | CandidateScalarWhereInput | null
  OR?: CandidateScalarWhereInput[] | CandidateScalarWhereInput | null
  NOT?: CandidateScalarWhereInput[] | CandidateScalarWhereInput | null
}

export interface CandidateSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: CandidateWhereInput | null
  AND?: CandidateSubscriptionWhereInput[] | CandidateSubscriptionWhereInput | null
  OR?: CandidateSubscriptionWhereInput[] | CandidateSubscriptionWhereInput | null
  NOT?: CandidateSubscriptionWhereInput[] | CandidateSubscriptionWhereInput | null
}

export interface CandidateUpdatecoverLettersStringInput {
  set?: String[] | String | null
}

export interface CandidateUpdateDataInput {
  workspace?: WorkspaceUpdateOneRequiredWithoutCandidatesInput | null
  events?: EventUpdateManyWithoutTargetCandidateInput | null
  subscribers?: UserUpdateManyWithoutSubscriptionCandidatesInput | null
  firstName?: String | null
  lastName?: String | null
  emails?: CandidateUpdateemailsInput | null
  phones?: CandidateUpdatephonesInput | null
  links?: CandidateUpdatelinksInput | null
  avatar?: FileUpdateOneInput | null
  metaCompany?: String | null
  metaHeadline?: String | null
  metaPosition?: String | null
  resumesString?: CandidateUpdateresumesStringInput | null
  resumesFile?: FileUpdateManyInput | null
  coverLettersString?: CandidateUpdatecoverLettersStringInput | null
  coverLettersFile?: FileUpdateManyInput | null
  tags?: TagUpdateManyInput | null
  source?: CandidateUpdatesourceInput | null
  fields?: FieldLinkUpdateManyInput | null
  tasks?: TaskUpdateManyWithoutCandidateInput | null
  applications?: ApplicationUpdateManyWithoutCandidateInput | null
  comments?: CommentUpdateManyInput | null
}

export interface CandidateUpdateemailsInput {
  set?: String[] | String | null
}

export interface CandidateUpdateInput {
  workspace?: WorkspaceUpdateOneRequiredWithoutCandidatesInput | null
  events?: EventUpdateManyWithoutTargetCandidateInput | null
  subscribers?: UserUpdateManyWithoutSubscriptionCandidatesInput | null
  firstName?: String | null
  lastName?: String | null
  emails?: CandidateUpdateemailsInput | null
  phones?: CandidateUpdatephonesInput | null
  links?: CandidateUpdatelinksInput | null
  avatar?: FileUpdateOneInput | null
  metaCompany?: String | null
  metaHeadline?: String | null
  metaPosition?: String | null
  resumesString?: CandidateUpdateresumesStringInput | null
  resumesFile?: FileUpdateManyInput | null
  coverLettersString?: CandidateUpdatecoverLettersStringInput | null
  coverLettersFile?: FileUpdateManyInput | null
  tags?: TagUpdateManyInput | null
  source?: CandidateUpdatesourceInput | null
  fields?: FieldLinkUpdateManyInput | null
  tasks?: TaskUpdateManyWithoutCandidateInput | null
  applications?: ApplicationUpdateManyWithoutCandidateInput | null
  comments?: CommentUpdateManyInput | null
}

export interface CandidateUpdatelinksInput {
  set?: String[] | String | null
}

export interface CandidateUpdateManyDataInput {
  firstName?: String | null
  lastName?: String | null
  emails?: CandidateUpdateemailsInput | null
  phones?: CandidateUpdatephonesInput | null
  links?: CandidateUpdatelinksInput | null
  metaCompany?: String | null
  metaHeadline?: String | null
  metaPosition?: String | null
  resumesString?: CandidateUpdateresumesStringInput | null
  coverLettersString?: CandidateUpdatecoverLettersStringInput | null
  source?: CandidateUpdatesourceInput | null
}

export interface CandidateUpdateManyMutationInput {
  firstName?: String | null
  lastName?: String | null
  emails?: CandidateUpdateemailsInput | null
  phones?: CandidateUpdatephonesInput | null
  links?: CandidateUpdatelinksInput | null
  metaCompany?: String | null
  metaHeadline?: String | null
  metaPosition?: String | null
  resumesString?: CandidateUpdateresumesStringInput | null
  coverLettersString?: CandidateUpdatecoverLettersStringInput | null
  source?: CandidateUpdatesourceInput | null
}

export interface CandidateUpdateManyWithoutSubscribersInput {
  create?: CandidateCreateWithoutSubscribersInput[] | CandidateCreateWithoutSubscribersInput | null
  delete?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput | null
  connect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput | null
  disconnect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput | null
  update?: CandidateUpdateWithWhereUniqueWithoutSubscribersInput[] | CandidateUpdateWithWhereUniqueWithoutSubscribersInput | null
  upsert?: CandidateUpsertWithWhereUniqueWithoutSubscribersInput[] | CandidateUpsertWithWhereUniqueWithoutSubscribersInput | null
  deleteMany?: CandidateScalarWhereInput[] | CandidateScalarWhereInput | null
  updateMany?: CandidateUpdateManyWithWhereNestedInput[] | CandidateUpdateManyWithWhereNestedInput | null
}

export interface CandidateUpdateManyWithoutWorkspaceInput {
  create?: CandidateCreateWithoutWorkspaceInput[] | CandidateCreateWithoutWorkspaceInput | null
  delete?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput | null
  connect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput | null
  disconnect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput | null
  update?: CandidateUpdateWithWhereUniqueWithoutWorkspaceInput[] | CandidateUpdateWithWhereUniqueWithoutWorkspaceInput | null
  upsert?: CandidateUpsertWithWhereUniqueWithoutWorkspaceInput[] | CandidateUpsertWithWhereUniqueWithoutWorkspaceInput | null
  deleteMany?: CandidateScalarWhereInput[] | CandidateScalarWhereInput | null
  updateMany?: CandidateUpdateManyWithWhereNestedInput[] | CandidateUpdateManyWithWhereNestedInput | null
}

export interface CandidateUpdateManyWithWhereNestedInput {
  where: CandidateScalarWhereInput
  data: CandidateUpdateManyDataInput
}

export interface CandidateUpdateOneInput {
  create?: CandidateCreateInput | null
  update?: CandidateUpdateDataInput | null
  upsert?: CandidateUpsertNestedInput | null
  delete?: Boolean | null
  disconnect?: Boolean | null
  connect?: CandidateWhereUniqueInput | null
}

export interface CandidateUpdateOneRequiredWithoutApplicationsInput {
  create?: CandidateCreateWithoutApplicationsInput | null
  update?: CandidateUpdateWithoutApplicationsDataInput | null
  upsert?: CandidateUpsertWithoutApplicationsInput | null
  connect?: CandidateWhereUniqueInput | null
}

export interface CandidateUpdateOneWithoutEventsInput {
  create?: CandidateCreateWithoutEventsInput | null
  update?: CandidateUpdateWithoutEventsDataInput | null
  upsert?: CandidateUpsertWithoutEventsInput | null
  delete?: Boolean | null
  disconnect?: Boolean | null
  connect?: CandidateWhereUniqueInput | null
}

export interface CandidateUpdateOneWithoutTasksInput {
  create?: CandidateCreateWithoutTasksInput | null
  update?: CandidateUpdateWithoutTasksDataInput | null
  upsert?: CandidateUpsertWithoutTasksInput | null
  delete?: Boolean | null
  disconnect?: Boolean | null
  connect?: CandidateWhereUniqueInput | null
}

export interface CandidateUpdatephonesInput {
  set?: String[] | String | null
}

export interface CandidateUpdateresumesStringInput {
  set?: String[] | String | null
}

export interface CandidateUpdatesourceInput {
  set?: String[] | String | null
}

export interface CandidateUpdateWithoutApplicationsDataInput {
  workspace?: WorkspaceUpdateOneRequiredWithoutCandidatesInput | null
  events?: EventUpdateManyWithoutTargetCandidateInput | null
  subscribers?: UserUpdateManyWithoutSubscriptionCandidatesInput | null
  firstName?: String | null
  lastName?: String | null
  emails?: CandidateUpdateemailsInput | null
  phones?: CandidateUpdatephonesInput | null
  links?: CandidateUpdatelinksInput | null
  avatar?: FileUpdateOneInput | null
  metaCompany?: String | null
  metaHeadline?: String | null
  metaPosition?: String | null
  resumesString?: CandidateUpdateresumesStringInput | null
  resumesFile?: FileUpdateManyInput | null
  coverLettersString?: CandidateUpdatecoverLettersStringInput | null
  coverLettersFile?: FileUpdateManyInput | null
  tags?: TagUpdateManyInput | null
  source?: CandidateUpdatesourceInput | null
  fields?: FieldLinkUpdateManyInput | null
  tasks?: TaskUpdateManyWithoutCandidateInput | null
  comments?: CommentUpdateManyInput | null
}

export interface CandidateUpdateWithoutEventsDataInput {
  workspace?: WorkspaceUpdateOneRequiredWithoutCandidatesInput | null
  subscribers?: UserUpdateManyWithoutSubscriptionCandidatesInput | null
  firstName?: String | null
  lastName?: String | null
  emails?: CandidateUpdateemailsInput | null
  phones?: CandidateUpdatephonesInput | null
  links?: CandidateUpdatelinksInput | null
  avatar?: FileUpdateOneInput | null
  metaCompany?: String | null
  metaHeadline?: String | null
  metaPosition?: String | null
  resumesString?: CandidateUpdateresumesStringInput | null
  resumesFile?: FileUpdateManyInput | null
  coverLettersString?: CandidateUpdatecoverLettersStringInput | null
  coverLettersFile?: FileUpdateManyInput | null
  tags?: TagUpdateManyInput | null
  source?: CandidateUpdatesourceInput | null
  fields?: FieldLinkUpdateManyInput | null
  tasks?: TaskUpdateManyWithoutCandidateInput | null
  applications?: ApplicationUpdateManyWithoutCandidateInput | null
  comments?: CommentUpdateManyInput | null
}

export interface CandidateUpdateWithoutSubscribersDataInput {
  workspace?: WorkspaceUpdateOneRequiredWithoutCandidatesInput | null
  events?: EventUpdateManyWithoutTargetCandidateInput | null
  firstName?: String | null
  lastName?: String | null
  emails?: CandidateUpdateemailsInput | null
  phones?: CandidateUpdatephonesInput | null
  links?: CandidateUpdatelinksInput | null
  avatar?: FileUpdateOneInput | null
  metaCompany?: String | null
  metaHeadline?: String | null
  metaPosition?: String | null
  resumesString?: CandidateUpdateresumesStringInput | null
  resumesFile?: FileUpdateManyInput | null
  coverLettersString?: CandidateUpdatecoverLettersStringInput | null
  coverLettersFile?: FileUpdateManyInput | null
  tags?: TagUpdateManyInput | null
  source?: CandidateUpdatesourceInput | null
  fields?: FieldLinkUpdateManyInput | null
  tasks?: TaskUpdateManyWithoutCandidateInput | null
  applications?: ApplicationUpdateManyWithoutCandidateInput | null
  comments?: CommentUpdateManyInput | null
}

export interface CandidateUpdateWithoutTasksDataInput {
  workspace?: WorkspaceUpdateOneRequiredWithoutCandidatesInput | null
  events?: EventUpdateManyWithoutTargetCandidateInput | null
  subscribers?: UserUpdateManyWithoutSubscriptionCandidatesInput | null
  firstName?: String | null
  lastName?: String | null
  emails?: CandidateUpdateemailsInput | null
  phones?: CandidateUpdatephonesInput | null
  links?: CandidateUpdatelinksInput | null
  avatar?: FileUpdateOneInput | null
  metaCompany?: String | null
  metaHeadline?: String | null
  metaPosition?: String | null
  resumesString?: CandidateUpdateresumesStringInput | null
  resumesFile?: FileUpdateManyInput | null
  coverLettersString?: CandidateUpdatecoverLettersStringInput | null
  coverLettersFile?: FileUpdateManyInput | null
  tags?: TagUpdateManyInput | null
  source?: CandidateUpdatesourceInput | null
  fields?: FieldLinkUpdateManyInput | null
  applications?: ApplicationUpdateManyWithoutCandidateInput | null
  comments?: CommentUpdateManyInput | null
}

export interface CandidateUpdateWithoutWorkspaceDataInput {
  events?: EventUpdateManyWithoutTargetCandidateInput | null
  subscribers?: UserUpdateManyWithoutSubscriptionCandidatesInput | null
  firstName?: String | null
  lastName?: String | null
  emails?: CandidateUpdateemailsInput | null
  phones?: CandidateUpdatephonesInput | null
  links?: CandidateUpdatelinksInput | null
  avatar?: FileUpdateOneInput | null
  metaCompany?: String | null
  metaHeadline?: String | null
  metaPosition?: String | null
  resumesString?: CandidateUpdateresumesStringInput | null
  resumesFile?: FileUpdateManyInput | null
  coverLettersString?: CandidateUpdatecoverLettersStringInput | null
  coverLettersFile?: FileUpdateManyInput | null
  tags?: TagUpdateManyInput | null
  source?: CandidateUpdatesourceInput | null
  fields?: FieldLinkUpdateManyInput | null
  tasks?: TaskUpdateManyWithoutCandidateInput | null
  applications?: ApplicationUpdateManyWithoutCandidateInput | null
  comments?: CommentUpdateManyInput | null
}

export interface CandidateUpdateWithWhereUniqueWithoutSubscribersInput {
  where: CandidateWhereUniqueInput
  data: CandidateUpdateWithoutSubscribersDataInput
}

export interface CandidateUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: CandidateWhereUniqueInput
  data: CandidateUpdateWithoutWorkspaceDataInput
}

export interface CandidateUpsertNestedInput {
  update: CandidateUpdateDataInput
  create: CandidateCreateInput
}

export interface CandidateUpsertWithoutApplicationsInput {
  update: CandidateUpdateWithoutApplicationsDataInput
  create: CandidateCreateWithoutApplicationsInput
}

export interface CandidateUpsertWithoutEventsInput {
  update: CandidateUpdateWithoutEventsDataInput
  create: CandidateCreateWithoutEventsInput
}

export interface CandidateUpsertWithoutTasksInput {
  update: CandidateUpdateWithoutTasksDataInput
  create: CandidateCreateWithoutTasksInput
}

export interface CandidateUpsertWithWhereUniqueWithoutSubscribersInput {
  where: CandidateWhereUniqueInput
  update: CandidateUpdateWithoutSubscribersDataInput
  create: CandidateCreateWithoutSubscribersInput
}

export interface CandidateUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: CandidateWhereUniqueInput
  update: CandidateUpdateWithoutWorkspaceDataInput
  create: CandidateCreateWithoutWorkspaceInput
}

export interface CandidateWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  workspace?: WorkspaceWhereInput | null
  events_every?: EventWhereInput | null
  events_some?: EventWhereInput | null
  events_none?: EventWhereInput | null
  subscribers_every?: UserWhereInput | null
  subscribers_some?: UserWhereInput | null
  subscribers_none?: UserWhereInput | null
  firstName?: String | null
  firstName_not?: String | null
  firstName_in?: String[] | String | null
  firstName_not_in?: String[] | String | null
  firstName_lt?: String | null
  firstName_lte?: String | null
  firstName_gt?: String | null
  firstName_gte?: String | null
  firstName_contains?: String | null
  firstName_not_contains?: String | null
  firstName_starts_with?: String | null
  firstName_not_starts_with?: String | null
  firstName_ends_with?: String | null
  firstName_not_ends_with?: String | null
  lastName?: String | null
  lastName_not?: String | null
  lastName_in?: String[] | String | null
  lastName_not_in?: String[] | String | null
  lastName_lt?: String | null
  lastName_lte?: String | null
  lastName_gt?: String | null
  lastName_gte?: String | null
  lastName_contains?: String | null
  lastName_not_contains?: String | null
  lastName_starts_with?: String | null
  lastName_not_starts_with?: String | null
  lastName_ends_with?: String | null
  lastName_not_ends_with?: String | null
  avatar?: FileWhereInput | null
  metaCompany?: String | null
  metaCompany_not?: String | null
  metaCompany_in?: String[] | String | null
  metaCompany_not_in?: String[] | String | null
  metaCompany_lt?: String | null
  metaCompany_lte?: String | null
  metaCompany_gt?: String | null
  metaCompany_gte?: String | null
  metaCompany_contains?: String | null
  metaCompany_not_contains?: String | null
  metaCompany_starts_with?: String | null
  metaCompany_not_starts_with?: String | null
  metaCompany_ends_with?: String | null
  metaCompany_not_ends_with?: String | null
  metaHeadline?: String | null
  metaHeadline_not?: String | null
  metaHeadline_in?: String[] | String | null
  metaHeadline_not_in?: String[] | String | null
  metaHeadline_lt?: String | null
  metaHeadline_lte?: String | null
  metaHeadline_gt?: String | null
  metaHeadline_gte?: String | null
  metaHeadline_contains?: String | null
  metaHeadline_not_contains?: String | null
  metaHeadline_starts_with?: String | null
  metaHeadline_not_starts_with?: String | null
  metaHeadline_ends_with?: String | null
  metaHeadline_not_ends_with?: String | null
  metaPosition?: String | null
  metaPosition_not?: String | null
  metaPosition_in?: String[] | String | null
  metaPosition_not_in?: String[] | String | null
  metaPosition_lt?: String | null
  metaPosition_lte?: String | null
  metaPosition_gt?: String | null
  metaPosition_gte?: String | null
  metaPosition_contains?: String | null
  metaPosition_not_contains?: String | null
  metaPosition_starts_with?: String | null
  metaPosition_not_starts_with?: String | null
  metaPosition_ends_with?: String | null
  metaPosition_not_ends_with?: String | null
  resumesFile_every?: FileWhereInput | null
  resumesFile_some?: FileWhereInput | null
  resumesFile_none?: FileWhereInput | null
  coverLettersFile_every?: FileWhereInput | null
  coverLettersFile_some?: FileWhereInput | null
  coverLettersFile_none?: FileWhereInput | null
  tags_every?: TagWhereInput | null
  tags_some?: TagWhereInput | null
  tags_none?: TagWhereInput | null
  fields_every?: FieldLinkWhereInput | null
  fields_some?: FieldLinkWhereInput | null
  fields_none?: FieldLinkWhereInput | null
  tasks_every?: TaskWhereInput | null
  tasks_some?: TaskWhereInput | null
  tasks_none?: TaskWhereInput | null
  applications_every?: ApplicationWhereInput | null
  applications_some?: ApplicationWhereInput | null
  applications_none?: ApplicationWhereInput | null
  comments_every?: CommentWhereInput | null
  comments_some?: CommentWhereInput | null
  comments_none?: CommentWhereInput | null
  AND?: CandidateWhereInput[] | CandidateWhereInput | null
  OR?: CandidateWhereInput[] | CandidateWhereInput | null
  NOT?: CandidateWhereInput[] | CandidateWhereInput | null
}

export interface CandidateWhereUniqueInput {
  id?: ID_Input | null
}

export interface CommentCreateInput {
  createdBy: UserCreateOneInput
  parent?: CommentCreateOneInput | null
  content: String
}

export interface CommentCreateManyInput {
  create?: CommentCreateInput[] | CommentCreateInput | null
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput | null
}

export interface CommentCreateOneInput {
  create?: CommentCreateInput | null
  connect?: CommentWhereUniqueInput | null
}

export interface CommentScalarWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  content?: String | null
  content_not?: String | null
  content_in?: String[] | String | null
  content_not_in?: String[] | String | null
  content_lt?: String | null
  content_lte?: String | null
  content_gt?: String | null
  content_gte?: String | null
  content_contains?: String | null
  content_not_contains?: String | null
  content_starts_with?: String | null
  content_not_starts_with?: String | null
  content_ends_with?: String | null
  content_not_ends_with?: String | null
  AND?: CommentScalarWhereInput[] | CommentScalarWhereInput | null
  OR?: CommentScalarWhereInput[] | CommentScalarWhereInput | null
  NOT?: CommentScalarWhereInput[] | CommentScalarWhereInput | null
}

export interface CommentSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: CommentWhereInput | null
  AND?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput | null
  OR?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput | null
  NOT?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput | null
}

export interface CommentUpdateDataInput {
  createdBy?: UserUpdateOneRequiredInput | null
  parent?: CommentUpdateOneInput | null
  content?: String | null
}

export interface CommentUpdateInput {
  createdBy?: UserUpdateOneRequiredInput | null
  parent?: CommentUpdateOneInput | null
  content?: String | null
}

export interface CommentUpdateManyDataInput {
  content?: String | null
}

export interface CommentUpdateManyInput {
  create?: CommentCreateInput[] | CommentCreateInput | null
  update?: CommentUpdateWithWhereUniqueNestedInput[] | CommentUpdateWithWhereUniqueNestedInput | null
  upsert?: CommentUpsertWithWhereUniqueNestedInput[] | CommentUpsertWithWhereUniqueNestedInput | null
  delete?: CommentWhereUniqueInput[] | CommentWhereUniqueInput | null
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput | null
  disconnect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput | null
  deleteMany?: CommentScalarWhereInput[] | CommentScalarWhereInput | null
  updateMany?: CommentUpdateManyWithWhereNestedInput[] | CommentUpdateManyWithWhereNestedInput | null
}

export interface CommentUpdateManyMutationInput {
  content?: String | null
}

export interface CommentUpdateManyWithWhereNestedInput {
  where: CommentScalarWhereInput
  data: CommentUpdateManyDataInput
}

export interface CommentUpdateOneInput {
  create?: CommentCreateInput | null
  update?: CommentUpdateDataInput | null
  upsert?: CommentUpsertNestedInput | null
  delete?: Boolean | null
  disconnect?: Boolean | null
  connect?: CommentWhereUniqueInput | null
}

export interface CommentUpdateWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput
  data: CommentUpdateDataInput
}

export interface CommentUpsertNestedInput {
  update: CommentUpdateDataInput
  create: CommentCreateInput
}

export interface CommentUpsertWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput
  update: CommentUpdateDataInput
  create: CommentCreateInput
}

export interface CommentWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  createdBy?: UserWhereInput | null
  parent?: CommentWhereInput | null
  content?: String | null
  content_not?: String | null
  content_in?: String[] | String | null
  content_not_in?: String[] | String | null
  content_lt?: String | null
  content_lte?: String | null
  content_gt?: String | null
  content_gte?: String | null
  content_contains?: String | null
  content_not_contains?: String | null
  content_starts_with?: String | null
  content_not_starts_with?: String | null
  content_ends_with?: String | null
  content_not_ends_with?: String | null
  AND?: CommentWhereInput[] | CommentWhereInput | null
  OR?: CommentWhereInput[] | CommentWhereInput | null
  NOT?: CommentWhereInput[] | CommentWhereInput | null
}

export interface CommentWhereUniqueInput {
  id?: ID_Input | null
}

export interface DisqualificationCreateInput {
  name: String
  description?: String | null
}

export interface DisqualificationCreateManyInput {
  create?: DisqualificationCreateInput[] | DisqualificationCreateInput | null
  connect?: DisqualificationWhereUniqueInput[] | DisqualificationWhereUniqueInput | null
}

export interface DisqualificationCreateOneInput {
  create?: DisqualificationCreateInput | null
  connect?: DisqualificationWhereUniqueInput | null
}

export interface DisqualificationLinkCreateInput {
  disqualification: DisqualificationCreateOneInput
  createdBy: UserCreateOneInput
  justification?: String | null
}

export interface DisqualificationLinkCreateOneInput {
  create?: DisqualificationLinkCreateInput | null
  connect?: DisqualificationLinkWhereUniqueInput | null
}

export interface DisqualificationLinkSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: DisqualificationLinkWhereInput | null
  AND?: DisqualificationLinkSubscriptionWhereInput[] | DisqualificationLinkSubscriptionWhereInput | null
  OR?: DisqualificationLinkSubscriptionWhereInput[] | DisqualificationLinkSubscriptionWhereInput | null
  NOT?: DisqualificationLinkSubscriptionWhereInput[] | DisqualificationLinkSubscriptionWhereInput | null
}

export interface DisqualificationLinkUpdateDataInput {
  disqualification?: DisqualificationUpdateOneRequiredInput | null
  createdBy?: UserUpdateOneRequiredInput | null
  justification?: String | null
}

export interface DisqualificationLinkUpdateInput {
  disqualification?: DisqualificationUpdateOneRequiredInput | null
  createdBy?: UserUpdateOneRequiredInput | null
  justification?: String | null
}

export interface DisqualificationLinkUpdateManyMutationInput {
  justification?: String | null
}

export interface DisqualificationLinkUpdateOneInput {
  create?: DisqualificationLinkCreateInput | null
  update?: DisqualificationLinkUpdateDataInput | null
  upsert?: DisqualificationLinkUpsertNestedInput | null
  delete?: Boolean | null
  disconnect?: Boolean | null
  connect?: DisqualificationLinkWhereUniqueInput | null
}

export interface DisqualificationLinkUpsertNestedInput {
  update: DisqualificationLinkUpdateDataInput
  create: DisqualificationLinkCreateInput
}

export interface DisqualificationLinkWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  disqualification?: DisqualificationWhereInput | null
  createdBy?: UserWhereInput | null
  justification?: String | null
  justification_not?: String | null
  justification_in?: String[] | String | null
  justification_not_in?: String[] | String | null
  justification_lt?: String | null
  justification_lte?: String | null
  justification_gt?: String | null
  justification_gte?: String | null
  justification_contains?: String | null
  justification_not_contains?: String | null
  justification_starts_with?: String | null
  justification_not_starts_with?: String | null
  justification_ends_with?: String | null
  justification_not_ends_with?: String | null
  AND?: DisqualificationLinkWhereInput[] | DisqualificationLinkWhereInput | null
  OR?: DisqualificationLinkWhereInput[] | DisqualificationLinkWhereInput | null
  NOT?: DisqualificationLinkWhereInput[] | DisqualificationLinkWhereInput | null
}

export interface DisqualificationLinkWhereUniqueInput {
  id?: ID_Input | null
}

export interface DisqualificationScalarWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  AND?: DisqualificationScalarWhereInput[] | DisqualificationScalarWhereInput | null
  OR?: DisqualificationScalarWhereInput[] | DisqualificationScalarWhereInput | null
  NOT?: DisqualificationScalarWhereInput[] | DisqualificationScalarWhereInput | null
}

export interface DisqualificationSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: DisqualificationWhereInput | null
  AND?: DisqualificationSubscriptionWhereInput[] | DisqualificationSubscriptionWhereInput | null
  OR?: DisqualificationSubscriptionWhereInput[] | DisqualificationSubscriptionWhereInput | null
  NOT?: DisqualificationSubscriptionWhereInput[] | DisqualificationSubscriptionWhereInput | null
}

export interface DisqualificationUpdateDataInput {
  name?: String | null
  description?: String | null
}

export interface DisqualificationUpdateInput {
  name?: String | null
  description?: String | null
}

export interface DisqualificationUpdateManyDataInput {
  name?: String | null
  description?: String | null
}

export interface DisqualificationUpdateManyInput {
  create?: DisqualificationCreateInput[] | DisqualificationCreateInput | null
  update?: DisqualificationUpdateWithWhereUniqueNestedInput[] | DisqualificationUpdateWithWhereUniqueNestedInput | null
  upsert?: DisqualificationUpsertWithWhereUniqueNestedInput[] | DisqualificationUpsertWithWhereUniqueNestedInput | null
  delete?: DisqualificationWhereUniqueInput[] | DisqualificationWhereUniqueInput | null
  connect?: DisqualificationWhereUniqueInput[] | DisqualificationWhereUniqueInput | null
  disconnect?: DisqualificationWhereUniqueInput[] | DisqualificationWhereUniqueInput | null
  deleteMany?: DisqualificationScalarWhereInput[] | DisqualificationScalarWhereInput | null
  updateMany?: DisqualificationUpdateManyWithWhereNestedInput[] | DisqualificationUpdateManyWithWhereNestedInput | null
}

export interface DisqualificationUpdateManyMutationInput {
  name?: String | null
  description?: String | null
}

export interface DisqualificationUpdateManyWithWhereNestedInput {
  where: DisqualificationScalarWhereInput
  data: DisqualificationUpdateManyDataInput
}

export interface DisqualificationUpdateOneRequiredInput {
  create?: DisqualificationCreateInput | null
  update?: DisqualificationUpdateDataInput | null
  upsert?: DisqualificationUpsertNestedInput | null
  connect?: DisqualificationWhereUniqueInput | null
}

export interface DisqualificationUpdateWithWhereUniqueNestedInput {
  where: DisqualificationWhereUniqueInput
  data: DisqualificationUpdateDataInput
}

export interface DisqualificationUpsertNestedInput {
  update: DisqualificationUpdateDataInput
  create: DisqualificationCreateInput
}

export interface DisqualificationUpsertWithWhereUniqueNestedInput {
  where: DisqualificationWhereUniqueInput
  update: DisqualificationUpdateDataInput
  create: DisqualificationCreateInput
}

export interface DisqualificationWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  AND?: DisqualificationWhereInput[] | DisqualificationWhereInput | null
  OR?: DisqualificationWhereInput[] | DisqualificationWhereInput | null
  NOT?: DisqualificationWhereInput[] | DisqualificationWhereInput | null
}

export interface DisqualificationWhereUniqueInput {
  id?: ID_Input | null
}

export interface EventCreateInput {
  type: EventType
  actorType: EventActorType
  actorUser?: UserCreateOneWithoutEventsInput | null
  actorCandidate?: CandidateCreateOneInput | null
  targetType: EventTargetType
  targetCandidate?: CandidateCreateOneWithoutEventsInput | null
  targetJob?: JobCreateOneWithoutEventsInput | null
  targetTask?: TaskCreateOneInput | null
  targetWorkspace?: WorkspaceCreateOneWithoutEventsInput | null
}

export interface EventCreateManyWithoutTargetCandidateInput {
  create?: EventCreateWithoutTargetCandidateInput[] | EventCreateWithoutTargetCandidateInput | null
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput | null
}

export interface EventCreateManyWithoutTargetJobInput {
  create?: EventCreateWithoutTargetJobInput[] | EventCreateWithoutTargetJobInput | null
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput | null
}

export interface EventCreateManyWithoutTargetWorkspaceInput {
  create?: EventCreateWithoutTargetWorkspaceInput[] | EventCreateWithoutTargetWorkspaceInput | null
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput | null
}

export interface EventCreateOneInput {
  create?: EventCreateInput | null
  connect?: EventWhereUniqueInput | null
}

export interface EventCreateOneWithoutActorUserInput {
  create?: EventCreateWithoutActorUserInput | null
  connect?: EventWhereUniqueInput | null
}

export interface EventCreateWithoutActorUserInput {
  type: EventType
  actorType: EventActorType
  actorCandidate?: CandidateCreateOneInput | null
  targetType: EventTargetType
  targetCandidate?: CandidateCreateOneWithoutEventsInput | null
  targetJob?: JobCreateOneWithoutEventsInput | null
  targetTask?: TaskCreateOneInput | null
  targetWorkspace?: WorkspaceCreateOneWithoutEventsInput | null
}

export interface EventCreateWithoutTargetCandidateInput {
  type: EventType
  actorType: EventActorType
  actorUser?: UserCreateOneWithoutEventsInput | null
  actorCandidate?: CandidateCreateOneInput | null
  targetType: EventTargetType
  targetJob?: JobCreateOneWithoutEventsInput | null
  targetTask?: TaskCreateOneInput | null
  targetWorkspace?: WorkspaceCreateOneWithoutEventsInput | null
}

export interface EventCreateWithoutTargetJobInput {
  type: EventType
  actorType: EventActorType
  actorUser?: UserCreateOneWithoutEventsInput | null
  actorCandidate?: CandidateCreateOneInput | null
  targetType: EventTargetType
  targetCandidate?: CandidateCreateOneWithoutEventsInput | null
  targetTask?: TaskCreateOneInput | null
  targetWorkspace?: WorkspaceCreateOneWithoutEventsInput | null
}

export interface EventCreateWithoutTargetWorkspaceInput {
  type: EventType
  actorType: EventActorType
  actorUser?: UserCreateOneWithoutEventsInput | null
  actorCandidate?: CandidateCreateOneInput | null
  targetType: EventTargetType
  targetCandidate?: CandidateCreateOneWithoutEventsInput | null
  targetJob?: JobCreateOneWithoutEventsInput | null
  targetTask?: TaskCreateOneInput | null
}

export interface EventScalarWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  type?: EventType | null
  type_not?: EventType | null
  type_in?: EventType[] | EventType | null
  type_not_in?: EventType[] | EventType | null
  actorType?: EventActorType | null
  actorType_not?: EventActorType | null
  actorType_in?: EventActorType[] | EventActorType | null
  actorType_not_in?: EventActorType[] | EventActorType | null
  targetType?: EventTargetType | null
  targetType_not?: EventTargetType | null
  targetType_in?: EventTargetType[] | EventTargetType | null
  targetType_not_in?: EventTargetType[] | EventTargetType | null
  AND?: EventScalarWhereInput[] | EventScalarWhereInput | null
  OR?: EventScalarWhereInput[] | EventScalarWhereInput | null
  NOT?: EventScalarWhereInput[] | EventScalarWhereInput | null
}

export interface EventSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: EventWhereInput | null
  AND?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput | null
  OR?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput | null
  NOT?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput | null
}

export interface EventUpdateDataInput {
  type?: EventType | null
  actorType?: EventActorType | null
  actorUser?: UserUpdateOneWithoutEventsInput | null
  actorCandidate?: CandidateUpdateOneInput | null
  targetType?: EventTargetType | null
  targetCandidate?: CandidateUpdateOneWithoutEventsInput | null
  targetJob?: JobUpdateOneWithoutEventsInput | null
  targetTask?: TaskUpdateOneInput | null
  targetWorkspace?: WorkspaceUpdateOneWithoutEventsInput | null
}

export interface EventUpdateInput {
  type?: EventType | null
  actorType?: EventActorType | null
  actorUser?: UserUpdateOneWithoutEventsInput | null
  actorCandidate?: CandidateUpdateOneInput | null
  targetType?: EventTargetType | null
  targetCandidate?: CandidateUpdateOneWithoutEventsInput | null
  targetJob?: JobUpdateOneWithoutEventsInput | null
  targetTask?: TaskUpdateOneInput | null
  targetWorkspace?: WorkspaceUpdateOneWithoutEventsInput | null
}

export interface EventUpdateManyDataInput {
  type?: EventType | null
  actorType?: EventActorType | null
  targetType?: EventTargetType | null
}

export interface EventUpdateManyMutationInput {
  type?: EventType | null
  actorType?: EventActorType | null
  targetType?: EventTargetType | null
}

export interface EventUpdateManyWithoutTargetCandidateInput {
  create?: EventCreateWithoutTargetCandidateInput[] | EventCreateWithoutTargetCandidateInput | null
  delete?: EventWhereUniqueInput[] | EventWhereUniqueInput | null
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput | null
  disconnect?: EventWhereUniqueInput[] | EventWhereUniqueInput | null
  update?: EventUpdateWithWhereUniqueWithoutTargetCandidateInput[] | EventUpdateWithWhereUniqueWithoutTargetCandidateInput | null
  upsert?: EventUpsertWithWhereUniqueWithoutTargetCandidateInput[] | EventUpsertWithWhereUniqueWithoutTargetCandidateInput | null
  deleteMany?: EventScalarWhereInput[] | EventScalarWhereInput | null
  updateMany?: EventUpdateManyWithWhereNestedInput[] | EventUpdateManyWithWhereNestedInput | null
}

export interface EventUpdateManyWithoutTargetJobInput {
  create?: EventCreateWithoutTargetJobInput[] | EventCreateWithoutTargetJobInput | null
  delete?: EventWhereUniqueInput[] | EventWhereUniqueInput | null
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput | null
  disconnect?: EventWhereUniqueInput[] | EventWhereUniqueInput | null
  update?: EventUpdateWithWhereUniqueWithoutTargetJobInput[] | EventUpdateWithWhereUniqueWithoutTargetJobInput | null
  upsert?: EventUpsertWithWhereUniqueWithoutTargetJobInput[] | EventUpsertWithWhereUniqueWithoutTargetJobInput | null
  deleteMany?: EventScalarWhereInput[] | EventScalarWhereInput | null
  updateMany?: EventUpdateManyWithWhereNestedInput[] | EventUpdateManyWithWhereNestedInput | null
}

export interface EventUpdateManyWithoutTargetWorkspaceInput {
  create?: EventCreateWithoutTargetWorkspaceInput[] | EventCreateWithoutTargetWorkspaceInput | null
  delete?: EventWhereUniqueInput[] | EventWhereUniqueInput | null
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput | null
  disconnect?: EventWhereUniqueInput[] | EventWhereUniqueInput | null
  update?: EventUpdateWithWhereUniqueWithoutTargetWorkspaceInput[] | EventUpdateWithWhereUniqueWithoutTargetWorkspaceInput | null
  upsert?: EventUpsertWithWhereUniqueWithoutTargetWorkspaceInput[] | EventUpsertWithWhereUniqueWithoutTargetWorkspaceInput | null
  deleteMany?: EventScalarWhereInput[] | EventScalarWhereInput | null
  updateMany?: EventUpdateManyWithWhereNestedInput[] | EventUpdateManyWithWhereNestedInput | null
}

export interface EventUpdateManyWithWhereNestedInput {
  where: EventScalarWhereInput
  data: EventUpdateManyDataInput
}

export interface EventUpdateOneRequiredInput {
  create?: EventCreateInput | null
  update?: EventUpdateDataInput | null
  upsert?: EventUpsertNestedInput | null
  connect?: EventWhereUniqueInput | null
}

export interface EventUpdateOneWithoutActorUserInput {
  create?: EventCreateWithoutActorUserInput | null
  update?: EventUpdateWithoutActorUserDataInput | null
  upsert?: EventUpsertWithoutActorUserInput | null
  delete?: Boolean | null
  disconnect?: Boolean | null
  connect?: EventWhereUniqueInput | null
}

export interface EventUpdateWithoutActorUserDataInput {
  type?: EventType | null
  actorType?: EventActorType | null
  actorCandidate?: CandidateUpdateOneInput | null
  targetType?: EventTargetType | null
  targetCandidate?: CandidateUpdateOneWithoutEventsInput | null
  targetJob?: JobUpdateOneWithoutEventsInput | null
  targetTask?: TaskUpdateOneInput | null
  targetWorkspace?: WorkspaceUpdateOneWithoutEventsInput | null
}

export interface EventUpdateWithoutTargetCandidateDataInput {
  type?: EventType | null
  actorType?: EventActorType | null
  actorUser?: UserUpdateOneWithoutEventsInput | null
  actorCandidate?: CandidateUpdateOneInput | null
  targetType?: EventTargetType | null
  targetJob?: JobUpdateOneWithoutEventsInput | null
  targetTask?: TaskUpdateOneInput | null
  targetWorkspace?: WorkspaceUpdateOneWithoutEventsInput | null
}

export interface EventUpdateWithoutTargetJobDataInput {
  type?: EventType | null
  actorType?: EventActorType | null
  actorUser?: UserUpdateOneWithoutEventsInput | null
  actorCandidate?: CandidateUpdateOneInput | null
  targetType?: EventTargetType | null
  targetCandidate?: CandidateUpdateOneWithoutEventsInput | null
  targetTask?: TaskUpdateOneInput | null
  targetWorkspace?: WorkspaceUpdateOneWithoutEventsInput | null
}

export interface EventUpdateWithoutTargetWorkspaceDataInput {
  type?: EventType | null
  actorType?: EventActorType | null
  actorUser?: UserUpdateOneWithoutEventsInput | null
  actorCandidate?: CandidateUpdateOneInput | null
  targetType?: EventTargetType | null
  targetCandidate?: CandidateUpdateOneWithoutEventsInput | null
  targetJob?: JobUpdateOneWithoutEventsInput | null
  targetTask?: TaskUpdateOneInput | null
}

export interface EventUpdateWithWhereUniqueWithoutTargetCandidateInput {
  where: EventWhereUniqueInput
  data: EventUpdateWithoutTargetCandidateDataInput
}

export interface EventUpdateWithWhereUniqueWithoutTargetJobInput {
  where: EventWhereUniqueInput
  data: EventUpdateWithoutTargetJobDataInput
}

export interface EventUpdateWithWhereUniqueWithoutTargetWorkspaceInput {
  where: EventWhereUniqueInput
  data: EventUpdateWithoutTargetWorkspaceDataInput
}

export interface EventUpsertNestedInput {
  update: EventUpdateDataInput
  create: EventCreateInput
}

export interface EventUpsertWithoutActorUserInput {
  update: EventUpdateWithoutActorUserDataInput
  create: EventCreateWithoutActorUserInput
}

export interface EventUpsertWithWhereUniqueWithoutTargetCandidateInput {
  where: EventWhereUniqueInput
  update: EventUpdateWithoutTargetCandidateDataInput
  create: EventCreateWithoutTargetCandidateInput
}

export interface EventUpsertWithWhereUniqueWithoutTargetJobInput {
  where: EventWhereUniqueInput
  update: EventUpdateWithoutTargetJobDataInput
  create: EventCreateWithoutTargetJobInput
}

export interface EventUpsertWithWhereUniqueWithoutTargetWorkspaceInput {
  where: EventWhereUniqueInput
  update: EventUpdateWithoutTargetWorkspaceDataInput
  create: EventCreateWithoutTargetWorkspaceInput
}

export interface EventWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  type?: EventType | null
  type_not?: EventType | null
  type_in?: EventType[] | EventType | null
  type_not_in?: EventType[] | EventType | null
  actorType?: EventActorType | null
  actorType_not?: EventActorType | null
  actorType_in?: EventActorType[] | EventActorType | null
  actorType_not_in?: EventActorType[] | EventActorType | null
  actorUser?: UserWhereInput | null
  actorCandidate?: CandidateWhereInput | null
  targetType?: EventTargetType | null
  targetType_not?: EventTargetType | null
  targetType_in?: EventTargetType[] | EventTargetType | null
  targetType_not_in?: EventTargetType[] | EventTargetType | null
  targetCandidate?: CandidateWhereInput | null
  targetJob?: JobWhereInput | null
  targetTask?: TaskWhereInput | null
  targetWorkspace?: WorkspaceWhereInput | null
  AND?: EventWhereInput[] | EventWhereInput | null
  OR?: EventWhereInput[] | EventWhereInput | null
  NOT?: EventWhereInput[] | EventWhereInput | null
}

export interface EventWhereUniqueInput {
  id?: ID_Input | null
}

export interface FieldCreateInput {
  type: FieldType
  label: String
}

export interface FieldCreateManyInput {
  create?: FieldCreateInput[] | FieldCreateInput | null
  connect?: FieldWhereUniqueInput[] | FieldWhereUniqueInput | null
}

export interface FieldCreateOneInput {
  create?: FieldCreateInput | null
  connect?: FieldWhereUniqueInput | null
}

export interface FieldLinkCreateInput {
  field: FieldCreateOneInput
  value?: String | null
}

export interface FieldLinkCreateManyInput {
  create?: FieldLinkCreateInput[] | FieldLinkCreateInput | null
  connect?: FieldLinkWhereUniqueInput[] | FieldLinkWhereUniqueInput | null
}

export interface FieldLinkScalarWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  value?: String | null
  value_not?: String | null
  value_in?: String[] | String | null
  value_not_in?: String[] | String | null
  value_lt?: String | null
  value_lte?: String | null
  value_gt?: String | null
  value_gte?: String | null
  value_contains?: String | null
  value_not_contains?: String | null
  value_starts_with?: String | null
  value_not_starts_with?: String | null
  value_ends_with?: String | null
  value_not_ends_with?: String | null
  AND?: FieldLinkScalarWhereInput[] | FieldLinkScalarWhereInput | null
  OR?: FieldLinkScalarWhereInput[] | FieldLinkScalarWhereInput | null
  NOT?: FieldLinkScalarWhereInput[] | FieldLinkScalarWhereInput | null
}

export interface FieldLinkSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: FieldLinkWhereInput | null
  AND?: FieldLinkSubscriptionWhereInput[] | FieldLinkSubscriptionWhereInput | null
  OR?: FieldLinkSubscriptionWhereInput[] | FieldLinkSubscriptionWhereInput | null
  NOT?: FieldLinkSubscriptionWhereInput[] | FieldLinkSubscriptionWhereInput | null
}

export interface FieldLinkUpdateDataInput {
  field?: FieldUpdateOneRequiredInput | null
  value?: String | null
}

export interface FieldLinkUpdateInput {
  field?: FieldUpdateOneRequiredInput | null
  value?: String | null
}

export interface FieldLinkUpdateManyDataInput {
  value?: String | null
}

export interface FieldLinkUpdateManyInput {
  create?: FieldLinkCreateInput[] | FieldLinkCreateInput | null
  update?: FieldLinkUpdateWithWhereUniqueNestedInput[] | FieldLinkUpdateWithWhereUniqueNestedInput | null
  upsert?: FieldLinkUpsertWithWhereUniqueNestedInput[] | FieldLinkUpsertWithWhereUniqueNestedInput | null
  delete?: FieldLinkWhereUniqueInput[] | FieldLinkWhereUniqueInput | null
  connect?: FieldLinkWhereUniqueInput[] | FieldLinkWhereUniqueInput | null
  disconnect?: FieldLinkWhereUniqueInput[] | FieldLinkWhereUniqueInput | null
  deleteMany?: FieldLinkScalarWhereInput[] | FieldLinkScalarWhereInput | null
  updateMany?: FieldLinkUpdateManyWithWhereNestedInput[] | FieldLinkUpdateManyWithWhereNestedInput | null
}

export interface FieldLinkUpdateManyMutationInput {
  value?: String | null
}

export interface FieldLinkUpdateManyWithWhereNestedInput {
  where: FieldLinkScalarWhereInput
  data: FieldLinkUpdateManyDataInput
}

export interface FieldLinkUpdateWithWhereUniqueNestedInput {
  where: FieldLinkWhereUniqueInput
  data: FieldLinkUpdateDataInput
}

export interface FieldLinkUpsertWithWhereUniqueNestedInput {
  where: FieldLinkWhereUniqueInput
  update: FieldLinkUpdateDataInput
  create: FieldLinkCreateInput
}

export interface FieldLinkWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  field?: FieldWhereInput | null
  value?: String | null
  value_not?: String | null
  value_in?: String[] | String | null
  value_not_in?: String[] | String | null
  value_lt?: String | null
  value_lte?: String | null
  value_gt?: String | null
  value_gte?: String | null
  value_contains?: String | null
  value_not_contains?: String | null
  value_starts_with?: String | null
  value_not_starts_with?: String | null
  value_ends_with?: String | null
  value_not_ends_with?: String | null
  AND?: FieldLinkWhereInput[] | FieldLinkWhereInput | null
  OR?: FieldLinkWhereInput[] | FieldLinkWhereInput | null
  NOT?: FieldLinkWhereInput[] | FieldLinkWhereInput | null
}

export interface FieldLinkWhereUniqueInput {
  id?: ID_Input | null
}

export interface FieldScalarWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  type?: FieldType | null
  type_not?: FieldType | null
  type_in?: FieldType[] | FieldType | null
  type_not_in?: FieldType[] | FieldType | null
  label?: String | null
  label_not?: String | null
  label_in?: String[] | String | null
  label_not_in?: String[] | String | null
  label_lt?: String | null
  label_lte?: String | null
  label_gt?: String | null
  label_gte?: String | null
  label_contains?: String | null
  label_not_contains?: String | null
  label_starts_with?: String | null
  label_not_starts_with?: String | null
  label_ends_with?: String | null
  label_not_ends_with?: String | null
  AND?: FieldScalarWhereInput[] | FieldScalarWhereInput | null
  OR?: FieldScalarWhereInput[] | FieldScalarWhereInput | null
  NOT?: FieldScalarWhereInput[] | FieldScalarWhereInput | null
}

export interface FieldSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: FieldWhereInput | null
  AND?: FieldSubscriptionWhereInput[] | FieldSubscriptionWhereInput | null
  OR?: FieldSubscriptionWhereInput[] | FieldSubscriptionWhereInput | null
  NOT?: FieldSubscriptionWhereInput[] | FieldSubscriptionWhereInput | null
}

export interface FieldUpdateDataInput {
  type?: FieldType | null
  label?: String | null
}

export interface FieldUpdateInput {
  type?: FieldType | null
  label?: String | null
}

export interface FieldUpdateManyDataInput {
  type?: FieldType | null
  label?: String | null
}

export interface FieldUpdateManyInput {
  create?: FieldCreateInput[] | FieldCreateInput | null
  update?: FieldUpdateWithWhereUniqueNestedInput[] | FieldUpdateWithWhereUniqueNestedInput | null
  upsert?: FieldUpsertWithWhereUniqueNestedInput[] | FieldUpsertWithWhereUniqueNestedInput | null
  delete?: FieldWhereUniqueInput[] | FieldWhereUniqueInput | null
  connect?: FieldWhereUniqueInput[] | FieldWhereUniqueInput | null
  disconnect?: FieldWhereUniqueInput[] | FieldWhereUniqueInput | null
  deleteMany?: FieldScalarWhereInput[] | FieldScalarWhereInput | null
  updateMany?: FieldUpdateManyWithWhereNestedInput[] | FieldUpdateManyWithWhereNestedInput | null
}

export interface FieldUpdateManyMutationInput {
  type?: FieldType | null
  label?: String | null
}

export interface FieldUpdateManyWithWhereNestedInput {
  where: FieldScalarWhereInput
  data: FieldUpdateManyDataInput
}

export interface FieldUpdateOneRequiredInput {
  create?: FieldCreateInput | null
  update?: FieldUpdateDataInput | null
  upsert?: FieldUpsertNestedInput | null
  connect?: FieldWhereUniqueInput | null
}

export interface FieldUpdateWithWhereUniqueNestedInput {
  where: FieldWhereUniqueInput
  data: FieldUpdateDataInput
}

export interface FieldUpsertNestedInput {
  update: FieldUpdateDataInput
  create: FieldCreateInput
}

export interface FieldUpsertWithWhereUniqueNestedInput {
  where: FieldWhereUniqueInput
  update: FieldUpdateDataInput
  create: FieldCreateInput
}

export interface FieldWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  type?: FieldType | null
  type_not?: FieldType | null
  type_in?: FieldType[] | FieldType | null
  type_not_in?: FieldType[] | FieldType | null
  label?: String | null
  label_not?: String | null
  label_in?: String[] | String | null
  label_not_in?: String[] | String | null
  label_lt?: String | null
  label_lte?: String | null
  label_gt?: String | null
  label_gte?: String | null
  label_contains?: String | null
  label_not_contains?: String | null
  label_starts_with?: String | null
  label_not_starts_with?: String | null
  label_ends_with?: String | null
  label_not_ends_with?: String | null
  AND?: FieldWhereInput[] | FieldWhereInput | null
  OR?: FieldWhereInput[] | FieldWhereInput | null
  NOT?: FieldWhereInput[] | FieldWhereInput | null
}

export interface FieldWhereUniqueInput {
  id?: ID_Input | null
}

export interface FileCreateInput {
  size: Int
  type: String
  name: String
  url: String
}

export interface FileCreateManyInput {
  create?: FileCreateInput[] | FileCreateInput | null
  connect?: FileWhereUniqueInput[] | FileWhereUniqueInput | null
}

export interface FileCreateOneInput {
  create?: FileCreateInput | null
  connect?: FileWhereUniqueInput | null
}

export interface FileScalarWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  size?: Int | null
  size_not?: Int | null
  size_in?: Int[] | Int | null
  size_not_in?: Int[] | Int | null
  size_lt?: Int | null
  size_lte?: Int | null
  size_gt?: Int | null
  size_gte?: Int | null
  type?: String | null
  type_not?: String | null
  type_in?: String[] | String | null
  type_not_in?: String[] | String | null
  type_lt?: String | null
  type_lte?: String | null
  type_gt?: String | null
  type_gte?: String | null
  type_contains?: String | null
  type_not_contains?: String | null
  type_starts_with?: String | null
  type_not_starts_with?: String | null
  type_ends_with?: String | null
  type_not_ends_with?: String | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  url?: String | null
  url_not?: String | null
  url_in?: String[] | String | null
  url_not_in?: String[] | String | null
  url_lt?: String | null
  url_lte?: String | null
  url_gt?: String | null
  url_gte?: String | null
  url_contains?: String | null
  url_not_contains?: String | null
  url_starts_with?: String | null
  url_not_starts_with?: String | null
  url_ends_with?: String | null
  url_not_ends_with?: String | null
  AND?: FileScalarWhereInput[] | FileScalarWhereInput | null
  OR?: FileScalarWhereInput[] | FileScalarWhereInput | null
  NOT?: FileScalarWhereInput[] | FileScalarWhereInput | null
}

export interface FileSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: FileWhereInput | null
  AND?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput | null
  OR?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput | null
  NOT?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput | null
}

export interface FileUpdateDataInput {
  size?: Int | null
  type?: String | null
  name?: String | null
  url?: String | null
}

export interface FileUpdateInput {
  size?: Int | null
  type?: String | null
  name?: String | null
  url?: String | null
}

export interface FileUpdateManyDataInput {
  size?: Int | null
  type?: String | null
  name?: String | null
  url?: String | null
}

export interface FileUpdateManyInput {
  create?: FileCreateInput[] | FileCreateInput | null
  update?: FileUpdateWithWhereUniqueNestedInput[] | FileUpdateWithWhereUniqueNestedInput | null
  upsert?: FileUpsertWithWhereUniqueNestedInput[] | FileUpsertWithWhereUniqueNestedInput | null
  delete?: FileWhereUniqueInput[] | FileWhereUniqueInput | null
  connect?: FileWhereUniqueInput[] | FileWhereUniqueInput | null
  disconnect?: FileWhereUniqueInput[] | FileWhereUniqueInput | null
  deleteMany?: FileScalarWhereInput[] | FileScalarWhereInput | null
  updateMany?: FileUpdateManyWithWhereNestedInput[] | FileUpdateManyWithWhereNestedInput | null
}

export interface FileUpdateManyMutationInput {
  size?: Int | null
  type?: String | null
  name?: String | null
  url?: String | null
}

export interface FileUpdateManyWithWhereNestedInput {
  where: FileScalarWhereInput
  data: FileUpdateManyDataInput
}

export interface FileUpdateOneInput {
  create?: FileCreateInput | null
  update?: FileUpdateDataInput | null
  upsert?: FileUpsertNestedInput | null
  delete?: Boolean | null
  disconnect?: Boolean | null
  connect?: FileWhereUniqueInput | null
}

export interface FileUpdateWithWhereUniqueNestedInput {
  where: FileWhereUniqueInput
  data: FileUpdateDataInput
}

export interface FileUpsertNestedInput {
  update: FileUpdateDataInput
  create: FileCreateInput
}

export interface FileUpsertWithWhereUniqueNestedInput {
  where: FileWhereUniqueInput
  update: FileUpdateDataInput
  create: FileCreateInput
}

export interface FileWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  size?: Int | null
  size_not?: Int | null
  size_in?: Int[] | Int | null
  size_not_in?: Int[] | Int | null
  size_lt?: Int | null
  size_lte?: Int | null
  size_gt?: Int | null
  size_gte?: Int | null
  type?: String | null
  type_not?: String | null
  type_in?: String[] | String | null
  type_not_in?: String[] | String | null
  type_lt?: String | null
  type_lte?: String | null
  type_gt?: String | null
  type_gte?: String | null
  type_contains?: String | null
  type_not_contains?: String | null
  type_starts_with?: String | null
  type_not_starts_with?: String | null
  type_ends_with?: String | null
  type_not_ends_with?: String | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  url?: String | null
  url_not?: String | null
  url_in?: String[] | String | null
  url_not_in?: String[] | String | null
  url_lt?: String | null
  url_lte?: String | null
  url_gt?: String | null
  url_gte?: String | null
  url_contains?: String | null
  url_not_contains?: String | null
  url_starts_with?: String | null
  url_not_starts_with?: String | null
  url_ends_with?: String | null
  url_not_ends_with?: String | null
  AND?: FileWhereInput[] | FileWhereInput | null
  OR?: FileWhereInput[] | FileWhereInput | null
  NOT?: FileWhereInput[] | FileWhereInput | null
}

export interface FileWhereUniqueInput {
  id?: ID_Input | null
  url?: String | null
}

export interface InviteCreateInput {
  email: String
  expireAt: DateTime
  invitedBy: UserCreateOneInput
}

export interface InviteCreateManyInput {
  create?: InviteCreateInput[] | InviteCreateInput | null
  connect?: InviteWhereUniqueInput[] | InviteWhereUniqueInput | null
}

export interface InviteScalarWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  expireAt?: DateTime | null
  expireAt_not?: DateTime | null
  expireAt_in?: DateTime[] | DateTime | null
  expireAt_not_in?: DateTime[] | DateTime | null
  expireAt_lt?: DateTime | null
  expireAt_lte?: DateTime | null
  expireAt_gt?: DateTime | null
  expireAt_gte?: DateTime | null
  AND?: InviteScalarWhereInput[] | InviteScalarWhereInput | null
  OR?: InviteScalarWhereInput[] | InviteScalarWhereInput | null
  NOT?: InviteScalarWhereInput[] | InviteScalarWhereInput | null
}

export interface InviteSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: InviteWhereInput | null
  AND?: InviteSubscriptionWhereInput[] | InviteSubscriptionWhereInput | null
  OR?: InviteSubscriptionWhereInput[] | InviteSubscriptionWhereInput | null
  NOT?: InviteSubscriptionWhereInput[] | InviteSubscriptionWhereInput | null
}

export interface InviteUpdateDataInput {
  email?: String | null
  expireAt?: DateTime | null
  invitedBy?: UserUpdateOneRequiredInput | null
}

export interface InviteUpdateInput {
  email?: String | null
  expireAt?: DateTime | null
  invitedBy?: UserUpdateOneRequiredInput | null
}

export interface InviteUpdateManyDataInput {
  email?: String | null
  expireAt?: DateTime | null
}

export interface InviteUpdateManyInput {
  create?: InviteCreateInput[] | InviteCreateInput | null
  update?: InviteUpdateWithWhereUniqueNestedInput[] | InviteUpdateWithWhereUniqueNestedInput | null
  upsert?: InviteUpsertWithWhereUniqueNestedInput[] | InviteUpsertWithWhereUniqueNestedInput | null
  delete?: InviteWhereUniqueInput[] | InviteWhereUniqueInput | null
  connect?: InviteWhereUniqueInput[] | InviteWhereUniqueInput | null
  disconnect?: InviteWhereUniqueInput[] | InviteWhereUniqueInput | null
  deleteMany?: InviteScalarWhereInput[] | InviteScalarWhereInput | null
  updateMany?: InviteUpdateManyWithWhereNestedInput[] | InviteUpdateManyWithWhereNestedInput | null
}

export interface InviteUpdateManyMutationInput {
  email?: String | null
  expireAt?: DateTime | null
}

export interface InviteUpdateManyWithWhereNestedInput {
  where: InviteScalarWhereInput
  data: InviteUpdateManyDataInput
}

export interface InviteUpdateWithWhereUniqueNestedInput {
  where: InviteWhereUniqueInput
  data: InviteUpdateDataInput
}

export interface InviteUpsertWithWhereUniqueNestedInput {
  where: InviteWhereUniqueInput
  update: InviteUpdateDataInput
  create: InviteCreateInput
}

export interface InviteWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  expireAt?: DateTime | null
  expireAt_not?: DateTime | null
  expireAt_in?: DateTime[] | DateTime | null
  expireAt_not_in?: DateTime[] | DateTime | null
  expireAt_lt?: DateTime | null
  expireAt_lte?: DateTime | null
  expireAt_gt?: DateTime | null
  expireAt_gte?: DateTime | null
  invitedBy?: UserWhereInput | null
  AND?: InviteWhereInput[] | InviteWhereInput | null
  OR?: InviteWhereInput[] | InviteWhereInput | null
  NOT?: InviteWhereInput[] | InviteWhereInput | null
}

export interface InviteWhereUniqueInput {
  id?: ID_Input | null
}

export interface JobCreateInput {
  workspace: WorkspaceCreateOneWithoutJobsInput
  subscribers?: UserCreateManyWithoutSubscriptionJobsInput | null
  events?: EventCreateManyWithoutTargetJobInput | null
  applications?: ApplicationCreateManyWithoutJobInput | null
  workflow: WorkflowCreateOneInput
  comments?: CommentCreateManyInput | null
  type: JobType
  department?: String | null
  locations?: LocationCreateManyInput | null
  name: String
  description?: String | null
  requirements?: String | null
}

export interface JobCreateManyWithoutSubscribersInput {
  create?: JobCreateWithoutSubscribersInput[] | JobCreateWithoutSubscribersInput | null
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
}

export interface JobCreateManyWithoutWorkspaceInput {
  create?: JobCreateWithoutWorkspaceInput[] | JobCreateWithoutWorkspaceInput | null
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
}

export interface JobCreateOneWithoutApplicationsInput {
  create?: JobCreateWithoutApplicationsInput | null
  connect?: JobWhereUniqueInput | null
}

export interface JobCreateOneWithoutEventsInput {
  create?: JobCreateWithoutEventsInput | null
  connect?: JobWhereUniqueInput | null
}

export interface JobCreateWithoutApplicationsInput {
  workspace: WorkspaceCreateOneWithoutJobsInput
  subscribers?: UserCreateManyWithoutSubscriptionJobsInput | null
  events?: EventCreateManyWithoutTargetJobInput | null
  workflow: WorkflowCreateOneInput
  comments?: CommentCreateManyInput | null
  type: JobType
  department?: String | null
  locations?: LocationCreateManyInput | null
  name: String
  description?: String | null
  requirements?: String | null
}

export interface JobCreateWithoutEventsInput {
  workspace: WorkspaceCreateOneWithoutJobsInput
  subscribers?: UserCreateManyWithoutSubscriptionJobsInput | null
  applications?: ApplicationCreateManyWithoutJobInput | null
  workflow: WorkflowCreateOneInput
  comments?: CommentCreateManyInput | null
  type: JobType
  department?: String | null
  locations?: LocationCreateManyInput | null
  name: String
  description?: String | null
  requirements?: String | null
}

export interface JobCreateWithoutSubscribersInput {
  workspace: WorkspaceCreateOneWithoutJobsInput
  events?: EventCreateManyWithoutTargetJobInput | null
  applications?: ApplicationCreateManyWithoutJobInput | null
  workflow: WorkflowCreateOneInput
  comments?: CommentCreateManyInput | null
  type: JobType
  department?: String | null
  locations?: LocationCreateManyInput | null
  name: String
  description?: String | null
  requirements?: String | null
}

export interface JobCreateWithoutWorkspaceInput {
  subscribers?: UserCreateManyWithoutSubscriptionJobsInput | null
  events?: EventCreateManyWithoutTargetJobInput | null
  applications?: ApplicationCreateManyWithoutJobInput | null
  workflow: WorkflowCreateOneInput
  comments?: CommentCreateManyInput | null
  type: JobType
  department?: String | null
  locations?: LocationCreateManyInput | null
  name: String
  description?: String | null
  requirements?: String | null
}

export interface JobScalarWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  type?: JobType | null
  type_not?: JobType | null
  type_in?: JobType[] | JobType | null
  type_not_in?: JobType[] | JobType | null
  department?: String | null
  department_not?: String | null
  department_in?: String[] | String | null
  department_not_in?: String[] | String | null
  department_lt?: String | null
  department_lte?: String | null
  department_gt?: String | null
  department_gte?: String | null
  department_contains?: String | null
  department_not_contains?: String | null
  department_starts_with?: String | null
  department_not_starts_with?: String | null
  department_ends_with?: String | null
  department_not_ends_with?: String | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  requirements?: String | null
  requirements_not?: String | null
  requirements_in?: String[] | String | null
  requirements_not_in?: String[] | String | null
  requirements_lt?: String | null
  requirements_lte?: String | null
  requirements_gt?: String | null
  requirements_gte?: String | null
  requirements_contains?: String | null
  requirements_not_contains?: String | null
  requirements_starts_with?: String | null
  requirements_not_starts_with?: String | null
  requirements_ends_with?: String | null
  requirements_not_ends_with?: String | null
  AND?: JobScalarWhereInput[] | JobScalarWhereInput | null
  OR?: JobScalarWhereInput[] | JobScalarWhereInput | null
  NOT?: JobScalarWhereInput[] | JobScalarWhereInput | null
}

export interface JobSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: JobWhereInput | null
  AND?: JobSubscriptionWhereInput[] | JobSubscriptionWhereInput | null
  OR?: JobSubscriptionWhereInput[] | JobSubscriptionWhereInput | null
  NOT?: JobSubscriptionWhereInput[] | JobSubscriptionWhereInput | null
}

export interface JobUpdateInput {
  workspace?: WorkspaceUpdateOneRequiredWithoutJobsInput | null
  subscribers?: UserUpdateManyWithoutSubscriptionJobsInput | null
  events?: EventUpdateManyWithoutTargetJobInput | null
  applications?: ApplicationUpdateManyWithoutJobInput | null
  workflow?: WorkflowUpdateOneRequiredInput | null
  comments?: CommentUpdateManyInput | null
  type?: JobType | null
  department?: String | null
  locations?: LocationUpdateManyInput | null
  name?: String | null
  description?: String | null
  requirements?: String | null
}

export interface JobUpdateManyDataInput {
  type?: JobType | null
  department?: String | null
  name?: String | null
  description?: String | null
  requirements?: String | null
}

export interface JobUpdateManyMutationInput {
  type?: JobType | null
  department?: String | null
  name?: String | null
  description?: String | null
  requirements?: String | null
}

export interface JobUpdateManyWithoutSubscribersInput {
  create?: JobCreateWithoutSubscribersInput[] | JobCreateWithoutSubscribersInput | null
  delete?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
  disconnect?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
  update?: JobUpdateWithWhereUniqueWithoutSubscribersInput[] | JobUpdateWithWhereUniqueWithoutSubscribersInput | null
  upsert?: JobUpsertWithWhereUniqueWithoutSubscribersInput[] | JobUpsertWithWhereUniqueWithoutSubscribersInput | null
  deleteMany?: JobScalarWhereInput[] | JobScalarWhereInput | null
  updateMany?: JobUpdateManyWithWhereNestedInput[] | JobUpdateManyWithWhereNestedInput | null
}

export interface JobUpdateManyWithoutWorkspaceInput {
  create?: JobCreateWithoutWorkspaceInput[] | JobCreateWithoutWorkspaceInput | null
  delete?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
  disconnect?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
  update?: JobUpdateWithWhereUniqueWithoutWorkspaceInput[] | JobUpdateWithWhereUniqueWithoutWorkspaceInput | null
  upsert?: JobUpsertWithWhereUniqueWithoutWorkspaceInput[] | JobUpsertWithWhereUniqueWithoutWorkspaceInput | null
  deleteMany?: JobScalarWhereInput[] | JobScalarWhereInput | null
  updateMany?: JobUpdateManyWithWhereNestedInput[] | JobUpdateManyWithWhereNestedInput | null
}

export interface JobUpdateManyWithWhereNestedInput {
  where: JobScalarWhereInput
  data: JobUpdateManyDataInput
}

export interface JobUpdateOneRequiredWithoutApplicationsInput {
  create?: JobCreateWithoutApplicationsInput | null
  update?: JobUpdateWithoutApplicationsDataInput | null
  upsert?: JobUpsertWithoutApplicationsInput | null
  connect?: JobWhereUniqueInput | null
}

export interface JobUpdateOneWithoutEventsInput {
  create?: JobCreateWithoutEventsInput | null
  update?: JobUpdateWithoutEventsDataInput | null
  upsert?: JobUpsertWithoutEventsInput | null
  delete?: Boolean | null
  disconnect?: Boolean | null
  connect?: JobWhereUniqueInput | null
}

export interface JobUpdateWithoutApplicationsDataInput {
  workspace?: WorkspaceUpdateOneRequiredWithoutJobsInput | null
  subscribers?: UserUpdateManyWithoutSubscriptionJobsInput | null
  events?: EventUpdateManyWithoutTargetJobInput | null
  workflow?: WorkflowUpdateOneRequiredInput | null
  comments?: CommentUpdateManyInput | null
  type?: JobType | null
  department?: String | null
  locations?: LocationUpdateManyInput | null
  name?: String | null
  description?: String | null
  requirements?: String | null
}

export interface JobUpdateWithoutEventsDataInput {
  workspace?: WorkspaceUpdateOneRequiredWithoutJobsInput | null
  subscribers?: UserUpdateManyWithoutSubscriptionJobsInput | null
  applications?: ApplicationUpdateManyWithoutJobInput | null
  workflow?: WorkflowUpdateOneRequiredInput | null
  comments?: CommentUpdateManyInput | null
  type?: JobType | null
  department?: String | null
  locations?: LocationUpdateManyInput | null
  name?: String | null
  description?: String | null
  requirements?: String | null
}

export interface JobUpdateWithoutSubscribersDataInput {
  workspace?: WorkspaceUpdateOneRequiredWithoutJobsInput | null
  events?: EventUpdateManyWithoutTargetJobInput | null
  applications?: ApplicationUpdateManyWithoutJobInput | null
  workflow?: WorkflowUpdateOneRequiredInput | null
  comments?: CommentUpdateManyInput | null
  type?: JobType | null
  department?: String | null
  locations?: LocationUpdateManyInput | null
  name?: String | null
  description?: String | null
  requirements?: String | null
}

export interface JobUpdateWithoutWorkspaceDataInput {
  subscribers?: UserUpdateManyWithoutSubscriptionJobsInput | null
  events?: EventUpdateManyWithoutTargetJobInput | null
  applications?: ApplicationUpdateManyWithoutJobInput | null
  workflow?: WorkflowUpdateOneRequiredInput | null
  comments?: CommentUpdateManyInput | null
  type?: JobType | null
  department?: String | null
  locations?: LocationUpdateManyInput | null
  name?: String | null
  description?: String | null
  requirements?: String | null
}

export interface JobUpdateWithWhereUniqueWithoutSubscribersInput {
  where: JobWhereUniqueInput
  data: JobUpdateWithoutSubscribersDataInput
}

export interface JobUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: JobWhereUniqueInput
  data: JobUpdateWithoutWorkspaceDataInput
}

export interface JobUpsertWithoutApplicationsInput {
  update: JobUpdateWithoutApplicationsDataInput
  create: JobCreateWithoutApplicationsInput
}

export interface JobUpsertWithoutEventsInput {
  update: JobUpdateWithoutEventsDataInput
  create: JobCreateWithoutEventsInput
}

export interface JobUpsertWithWhereUniqueWithoutSubscribersInput {
  where: JobWhereUniqueInput
  update: JobUpdateWithoutSubscribersDataInput
  create: JobCreateWithoutSubscribersInput
}

export interface JobUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: JobWhereUniqueInput
  update: JobUpdateWithoutWorkspaceDataInput
  create: JobCreateWithoutWorkspaceInput
}

export interface JobWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  workspace?: WorkspaceWhereInput | null
  subscribers_every?: UserWhereInput | null
  subscribers_some?: UserWhereInput | null
  subscribers_none?: UserWhereInput | null
  events_every?: EventWhereInput | null
  events_some?: EventWhereInput | null
  events_none?: EventWhereInput | null
  applications_every?: ApplicationWhereInput | null
  applications_some?: ApplicationWhereInput | null
  applications_none?: ApplicationWhereInput | null
  workflow?: WorkflowWhereInput | null
  comments_every?: CommentWhereInput | null
  comments_some?: CommentWhereInput | null
  comments_none?: CommentWhereInput | null
  type?: JobType | null
  type_not?: JobType | null
  type_in?: JobType[] | JobType | null
  type_not_in?: JobType[] | JobType | null
  department?: String | null
  department_not?: String | null
  department_in?: String[] | String | null
  department_not_in?: String[] | String | null
  department_lt?: String | null
  department_lte?: String | null
  department_gt?: String | null
  department_gte?: String | null
  department_contains?: String | null
  department_not_contains?: String | null
  department_starts_with?: String | null
  department_not_starts_with?: String | null
  department_ends_with?: String | null
  department_not_ends_with?: String | null
  locations_every?: LocationWhereInput | null
  locations_some?: LocationWhereInput | null
  locations_none?: LocationWhereInput | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  requirements?: String | null
  requirements_not?: String | null
  requirements_in?: String[] | String | null
  requirements_not_in?: String[] | String | null
  requirements_lt?: String | null
  requirements_lte?: String | null
  requirements_gt?: String | null
  requirements_gte?: String | null
  requirements_contains?: String | null
  requirements_not_contains?: String | null
  requirements_starts_with?: String | null
  requirements_not_starts_with?: String | null
  requirements_ends_with?: String | null
  requirements_not_ends_with?: String | null
  AND?: JobWhereInput[] | JobWhereInput | null
  OR?: JobWhereInput[] | JobWhereInput | null
  NOT?: JobWhereInput[] | JobWhereInput | null
}

export interface JobWhereUniqueInput {
  id?: ID_Input | null
}

export interface LocationCreateInput {
  country: String
  region: String
  city: String
  zip: String
}

export interface LocationCreateManyInput {
  create?: LocationCreateInput[] | LocationCreateInput | null
  connect?: LocationWhereUniqueInput[] | LocationWhereUniqueInput | null
}

export interface LocationScalarWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  country?: String | null
  country_not?: String | null
  country_in?: String[] | String | null
  country_not_in?: String[] | String | null
  country_lt?: String | null
  country_lte?: String | null
  country_gt?: String | null
  country_gte?: String | null
  country_contains?: String | null
  country_not_contains?: String | null
  country_starts_with?: String | null
  country_not_starts_with?: String | null
  country_ends_with?: String | null
  country_not_ends_with?: String | null
  region?: String | null
  region_not?: String | null
  region_in?: String[] | String | null
  region_not_in?: String[] | String | null
  region_lt?: String | null
  region_lte?: String | null
  region_gt?: String | null
  region_gte?: String | null
  region_contains?: String | null
  region_not_contains?: String | null
  region_starts_with?: String | null
  region_not_starts_with?: String | null
  region_ends_with?: String | null
  region_not_ends_with?: String | null
  city?: String | null
  city_not?: String | null
  city_in?: String[] | String | null
  city_not_in?: String[] | String | null
  city_lt?: String | null
  city_lte?: String | null
  city_gt?: String | null
  city_gte?: String | null
  city_contains?: String | null
  city_not_contains?: String | null
  city_starts_with?: String | null
  city_not_starts_with?: String | null
  city_ends_with?: String | null
  city_not_ends_with?: String | null
  zip?: String | null
  zip_not?: String | null
  zip_in?: String[] | String | null
  zip_not_in?: String[] | String | null
  zip_lt?: String | null
  zip_lte?: String | null
  zip_gt?: String | null
  zip_gte?: String | null
  zip_contains?: String | null
  zip_not_contains?: String | null
  zip_starts_with?: String | null
  zip_not_starts_with?: String | null
  zip_ends_with?: String | null
  zip_not_ends_with?: String | null
  AND?: LocationScalarWhereInput[] | LocationScalarWhereInput | null
  OR?: LocationScalarWhereInput[] | LocationScalarWhereInput | null
  NOT?: LocationScalarWhereInput[] | LocationScalarWhereInput | null
}

export interface LocationSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: LocationWhereInput | null
  AND?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput | null
  OR?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput | null
  NOT?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput | null
}

export interface LocationUpdateDataInput {
  country?: String | null
  region?: String | null
  city?: String | null
  zip?: String | null
}

export interface LocationUpdateInput {
  country?: String | null
  region?: String | null
  city?: String | null
  zip?: String | null
}

export interface LocationUpdateManyDataInput {
  country?: String | null
  region?: String | null
  city?: String | null
  zip?: String | null
}

export interface LocationUpdateManyInput {
  create?: LocationCreateInput[] | LocationCreateInput | null
  update?: LocationUpdateWithWhereUniqueNestedInput[] | LocationUpdateWithWhereUniqueNestedInput | null
  upsert?: LocationUpsertWithWhereUniqueNestedInput[] | LocationUpsertWithWhereUniqueNestedInput | null
  delete?: LocationWhereUniqueInput[] | LocationWhereUniqueInput | null
  connect?: LocationWhereUniqueInput[] | LocationWhereUniqueInput | null
  disconnect?: LocationWhereUniqueInput[] | LocationWhereUniqueInput | null
  deleteMany?: LocationScalarWhereInput[] | LocationScalarWhereInput | null
  updateMany?: LocationUpdateManyWithWhereNestedInput[] | LocationUpdateManyWithWhereNestedInput | null
}

export interface LocationUpdateManyMutationInput {
  country?: String | null
  region?: String | null
  city?: String | null
  zip?: String | null
}

export interface LocationUpdateManyWithWhereNestedInput {
  where: LocationScalarWhereInput
  data: LocationUpdateManyDataInput
}

export interface LocationUpdateWithWhereUniqueNestedInput {
  where: LocationWhereUniqueInput
  data: LocationUpdateDataInput
}

export interface LocationUpsertWithWhereUniqueNestedInput {
  where: LocationWhereUniqueInput
  update: LocationUpdateDataInput
  create: LocationCreateInput
}

export interface LocationWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  country?: String | null
  country_not?: String | null
  country_in?: String[] | String | null
  country_not_in?: String[] | String | null
  country_lt?: String | null
  country_lte?: String | null
  country_gt?: String | null
  country_gte?: String | null
  country_contains?: String | null
  country_not_contains?: String | null
  country_starts_with?: String | null
  country_not_starts_with?: String | null
  country_ends_with?: String | null
  country_not_ends_with?: String | null
  region?: String | null
  region_not?: String | null
  region_in?: String[] | String | null
  region_not_in?: String[] | String | null
  region_lt?: String | null
  region_lte?: String | null
  region_gt?: String | null
  region_gte?: String | null
  region_contains?: String | null
  region_not_contains?: String | null
  region_starts_with?: String | null
  region_not_starts_with?: String | null
  region_ends_with?: String | null
  region_not_ends_with?: String | null
  city?: String | null
  city_not?: String | null
  city_in?: String[] | String | null
  city_not_in?: String[] | String | null
  city_lt?: String | null
  city_lte?: String | null
  city_gt?: String | null
  city_gte?: String | null
  city_contains?: String | null
  city_not_contains?: String | null
  city_starts_with?: String | null
  city_not_starts_with?: String | null
  city_ends_with?: String | null
  city_not_ends_with?: String | null
  zip?: String | null
  zip_not?: String | null
  zip_in?: String[] | String | null
  zip_not_in?: String[] | String | null
  zip_lt?: String | null
  zip_lte?: String | null
  zip_gt?: String | null
  zip_gte?: String | null
  zip_contains?: String | null
  zip_not_contains?: String | null
  zip_starts_with?: String | null
  zip_not_starts_with?: String | null
  zip_ends_with?: String | null
  zip_not_ends_with?: String | null
  AND?: LocationWhereInput[] | LocationWhereInput | null
  OR?: LocationWhereInput[] | LocationWhereInput | null
  NOT?: LocationWhereInput[] | LocationWhereInput | null
}

export interface LocationWhereUniqueInput {
  id?: ID_Input | null
}

export interface NotificationCreateInput {
  type: NotificationType
  user: UserCreateOneWithoutNotificationsInput
  event: EventCreateOneInput
}

export interface NotificationCreateManyWithoutUserInput {
  create?: NotificationCreateWithoutUserInput[] | NotificationCreateWithoutUserInput | null
  connect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput | null
}

export interface NotificationCreateWithoutUserInput {
  type: NotificationType
  event: EventCreateOneInput
}

export interface NotificationScalarWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  type?: NotificationType | null
  type_not?: NotificationType | null
  type_in?: NotificationType[] | NotificationType | null
  type_not_in?: NotificationType[] | NotificationType | null
  AND?: NotificationScalarWhereInput[] | NotificationScalarWhereInput | null
  OR?: NotificationScalarWhereInput[] | NotificationScalarWhereInput | null
  NOT?: NotificationScalarWhereInput[] | NotificationScalarWhereInput | null
}

export interface NotificationSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: NotificationWhereInput | null
  AND?: NotificationSubscriptionWhereInput[] | NotificationSubscriptionWhereInput | null
  OR?: NotificationSubscriptionWhereInput[] | NotificationSubscriptionWhereInput | null
  NOT?: NotificationSubscriptionWhereInput[] | NotificationSubscriptionWhereInput | null
}

export interface NotificationUpdateInput {
  type?: NotificationType | null
  user?: UserUpdateOneRequiredWithoutNotificationsInput | null
  event?: EventUpdateOneRequiredInput | null
}

export interface NotificationUpdateManyDataInput {
  type?: NotificationType | null
}

export interface NotificationUpdateManyMutationInput {
  type?: NotificationType | null
}

export interface NotificationUpdateManyWithoutUserInput {
  create?: NotificationCreateWithoutUserInput[] | NotificationCreateWithoutUserInput | null
  delete?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput | null
  connect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput | null
  disconnect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput | null
  update?: NotificationUpdateWithWhereUniqueWithoutUserInput[] | NotificationUpdateWithWhereUniqueWithoutUserInput | null
  upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput[] | NotificationUpsertWithWhereUniqueWithoutUserInput | null
  deleteMany?: NotificationScalarWhereInput[] | NotificationScalarWhereInput | null
  updateMany?: NotificationUpdateManyWithWhereNestedInput[] | NotificationUpdateManyWithWhereNestedInput | null
}

export interface NotificationUpdateManyWithWhereNestedInput {
  where: NotificationScalarWhereInput
  data: NotificationUpdateManyDataInput
}

export interface NotificationUpdateWithoutUserDataInput {
  type?: NotificationType | null
  event?: EventUpdateOneRequiredInput | null
}

export interface NotificationUpdateWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput
  data: NotificationUpdateWithoutUserDataInput
}

export interface NotificationUpsertWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput
  update: NotificationUpdateWithoutUserDataInput
  create: NotificationCreateWithoutUserInput
}

export interface NotificationWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  type?: NotificationType | null
  type_not?: NotificationType | null
  type_in?: NotificationType[] | NotificationType | null
  type_not_in?: NotificationType[] | NotificationType | null
  user?: UserWhereInput | null
  event?: EventWhereInput | null
  AND?: NotificationWhereInput[] | NotificationWhereInput | null
  OR?: NotificationWhereInput[] | NotificationWhereInput | null
  NOT?: NotificationWhereInput[] | NotificationWhereInput | null
}

export interface NotificationWhereUniqueInput {
  id?: ID_Input | null
}

export interface StageCreateInput {
  name: String
  description?: String | null
  type: StageType
}

export interface StageCreateManyInput {
  create?: StageCreateInput[] | StageCreateInput | null
  connect?: StageWhereUniqueInput[] | StageWhereUniqueInput | null
}

export interface StageCreateOneInput {
  create?: StageCreateInput | null
  connect?: StageWhereUniqueInput | null
}

export interface StageScalarWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  type?: StageType | null
  type_not?: StageType | null
  type_in?: StageType[] | StageType | null
  type_not_in?: StageType[] | StageType | null
  AND?: StageScalarWhereInput[] | StageScalarWhereInput | null
  OR?: StageScalarWhereInput[] | StageScalarWhereInput | null
  NOT?: StageScalarWhereInput[] | StageScalarWhereInput | null
}

export interface StageSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: StageWhereInput | null
  AND?: StageSubscriptionWhereInput[] | StageSubscriptionWhereInput | null
  OR?: StageSubscriptionWhereInput[] | StageSubscriptionWhereInput | null
  NOT?: StageSubscriptionWhereInput[] | StageSubscriptionWhereInput | null
}

export interface StageUpdateDataInput {
  name?: String | null
  description?: String | null
  type?: StageType | null
}

export interface StageUpdateInput {
  name?: String | null
  description?: String | null
  type?: StageType | null
}

export interface StageUpdateManyDataInput {
  name?: String | null
  description?: String | null
  type?: StageType | null
}

export interface StageUpdateManyInput {
  create?: StageCreateInput[] | StageCreateInput | null
  update?: StageUpdateWithWhereUniqueNestedInput[] | StageUpdateWithWhereUniqueNestedInput | null
  upsert?: StageUpsertWithWhereUniqueNestedInput[] | StageUpsertWithWhereUniqueNestedInput | null
  delete?: StageWhereUniqueInput[] | StageWhereUniqueInput | null
  connect?: StageWhereUniqueInput[] | StageWhereUniqueInput | null
  disconnect?: StageWhereUniqueInput[] | StageWhereUniqueInput | null
  deleteMany?: StageScalarWhereInput[] | StageScalarWhereInput | null
  updateMany?: StageUpdateManyWithWhereNestedInput[] | StageUpdateManyWithWhereNestedInput | null
}

export interface StageUpdateManyMutationInput {
  name?: String | null
  description?: String | null
  type?: StageType | null
}

export interface StageUpdateManyWithWhereNestedInput {
  where: StageScalarWhereInput
  data: StageUpdateManyDataInput
}

export interface StageUpdateOneRequiredInput {
  create?: StageCreateInput | null
  update?: StageUpdateDataInput | null
  upsert?: StageUpsertNestedInput | null
  connect?: StageWhereUniqueInput | null
}

export interface StageUpdateWithWhereUniqueNestedInput {
  where: StageWhereUniqueInput
  data: StageUpdateDataInput
}

export interface StageUpsertNestedInput {
  update: StageUpdateDataInput
  create: StageCreateInput
}

export interface StageUpsertWithWhereUniqueNestedInput {
  where: StageWhereUniqueInput
  update: StageUpdateDataInput
  create: StageCreateInput
}

export interface StageWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  type?: StageType | null
  type_not?: StageType | null
  type_in?: StageType[] | StageType | null
  type_not_in?: StageType[] | StageType | null
  AND?: StageWhereInput[] | StageWhereInput | null
  OR?: StageWhereInput[] | StageWhereInput | null
  NOT?: StageWhereInput[] | StageWhereInput | null
}

export interface StageWhereUniqueInput {
  id?: ID_Input | null
}

export interface TagCreateInput {
  label: String
}

export interface TagCreateManyInput {
  create?: TagCreateInput[] | TagCreateInput | null
  connect?: TagWhereUniqueInput[] | TagWhereUniqueInput | null
}

export interface TagScalarWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  label?: String | null
  label_not?: String | null
  label_in?: String[] | String | null
  label_not_in?: String[] | String | null
  label_lt?: String | null
  label_lte?: String | null
  label_gt?: String | null
  label_gte?: String | null
  label_contains?: String | null
  label_not_contains?: String | null
  label_starts_with?: String | null
  label_not_starts_with?: String | null
  label_ends_with?: String | null
  label_not_ends_with?: String | null
  AND?: TagScalarWhereInput[] | TagScalarWhereInput | null
  OR?: TagScalarWhereInput[] | TagScalarWhereInput | null
  NOT?: TagScalarWhereInput[] | TagScalarWhereInput | null
}

export interface TagSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: TagWhereInput | null
  AND?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput | null
  OR?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput | null
  NOT?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput | null
}

export interface TagUpdateDataInput {
  label?: String | null
}

export interface TagUpdateInput {
  label?: String | null
}

export interface TagUpdateManyDataInput {
  label?: String | null
}

export interface TagUpdateManyInput {
  create?: TagCreateInput[] | TagCreateInput | null
  update?: TagUpdateWithWhereUniqueNestedInput[] | TagUpdateWithWhereUniqueNestedInput | null
  upsert?: TagUpsertWithWhereUniqueNestedInput[] | TagUpsertWithWhereUniqueNestedInput | null
  delete?: TagWhereUniqueInput[] | TagWhereUniqueInput | null
  connect?: TagWhereUniqueInput[] | TagWhereUniqueInput | null
  disconnect?: TagWhereUniqueInput[] | TagWhereUniqueInput | null
  deleteMany?: TagScalarWhereInput[] | TagScalarWhereInput | null
  updateMany?: TagUpdateManyWithWhereNestedInput[] | TagUpdateManyWithWhereNestedInput | null
}

export interface TagUpdateManyMutationInput {
  label?: String | null
}

export interface TagUpdateManyWithWhereNestedInput {
  where: TagScalarWhereInput
  data: TagUpdateManyDataInput
}

export interface TagUpdateWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput
  data: TagUpdateDataInput
}

export interface TagUpsertWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput
  update: TagUpdateDataInput
  create: TagCreateInput
}

export interface TagWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  label?: String | null
  label_not?: String | null
  label_in?: String[] | String | null
  label_not_in?: String[] | String | null
  label_lt?: String | null
  label_lte?: String | null
  label_gt?: String | null
  label_gte?: String | null
  label_contains?: String | null
  label_not_contains?: String | null
  label_starts_with?: String | null
  label_not_starts_with?: String | null
  label_ends_with?: String | null
  label_not_ends_with?: String | null
  AND?: TagWhereInput[] | TagWhereInput | null
  OR?: TagWhereInput[] | TagWhereInput | null
  NOT?: TagWhereInput[] | TagWhereInput | null
}

export interface TagWhereUniqueInput {
  id?: ID_Input | null
}

export interface TaskCreateInput {
  subscribers?: UserCreateManyWithoutSubscriptionTasksInput | null
  owners?: UserCreateManyWithoutTasksInput | null
  candidate?: CandidateCreateOneWithoutTasksInput | null
  title?: String | null
  description?: String | null
  dueAt?: DateTime | null
}

export interface TaskCreateManyWithoutCandidateInput {
  create?: TaskCreateWithoutCandidateInput[] | TaskCreateWithoutCandidateInput | null
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput | null
}

export interface TaskCreateManyWithoutOwnersInput {
  create?: TaskCreateWithoutOwnersInput[] | TaskCreateWithoutOwnersInput | null
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput | null
}

export interface TaskCreateManyWithoutSubscribersInput {
  create?: TaskCreateWithoutSubscribersInput[] | TaskCreateWithoutSubscribersInput | null
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput | null
}

export interface TaskCreateOneInput {
  create?: TaskCreateInput | null
  connect?: TaskWhereUniqueInput | null
}

export interface TaskCreateWithoutCandidateInput {
  subscribers?: UserCreateManyWithoutSubscriptionTasksInput | null
  owners?: UserCreateManyWithoutTasksInput | null
  title?: String | null
  description?: String | null
  dueAt?: DateTime | null
}

export interface TaskCreateWithoutOwnersInput {
  subscribers?: UserCreateManyWithoutSubscriptionTasksInput | null
  candidate?: CandidateCreateOneWithoutTasksInput | null
  title?: String | null
  description?: String | null
  dueAt?: DateTime | null
}

export interface TaskCreateWithoutSubscribersInput {
  owners?: UserCreateManyWithoutTasksInput | null
  candidate?: CandidateCreateOneWithoutTasksInput | null
  title?: String | null
  description?: String | null
  dueAt?: DateTime | null
}

export interface TaskScalarWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  title?: String | null
  title_not?: String | null
  title_in?: String[] | String | null
  title_not_in?: String[] | String | null
  title_lt?: String | null
  title_lte?: String | null
  title_gt?: String | null
  title_gte?: String | null
  title_contains?: String | null
  title_not_contains?: String | null
  title_starts_with?: String | null
  title_not_starts_with?: String | null
  title_ends_with?: String | null
  title_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  dueAt?: DateTime | null
  dueAt_not?: DateTime | null
  dueAt_in?: DateTime[] | DateTime | null
  dueAt_not_in?: DateTime[] | DateTime | null
  dueAt_lt?: DateTime | null
  dueAt_lte?: DateTime | null
  dueAt_gt?: DateTime | null
  dueAt_gte?: DateTime | null
  AND?: TaskScalarWhereInput[] | TaskScalarWhereInput | null
  OR?: TaskScalarWhereInput[] | TaskScalarWhereInput | null
  NOT?: TaskScalarWhereInput[] | TaskScalarWhereInput | null
}

export interface TaskSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: TaskWhereInput | null
  AND?: TaskSubscriptionWhereInput[] | TaskSubscriptionWhereInput | null
  OR?: TaskSubscriptionWhereInput[] | TaskSubscriptionWhereInput | null
  NOT?: TaskSubscriptionWhereInput[] | TaskSubscriptionWhereInput | null
}

export interface TaskUpdateDataInput {
  subscribers?: UserUpdateManyWithoutSubscriptionTasksInput | null
  owners?: UserUpdateManyWithoutTasksInput | null
  candidate?: CandidateUpdateOneWithoutTasksInput | null
  title?: String | null
  description?: String | null
  dueAt?: DateTime | null
}

export interface TaskUpdateInput {
  subscribers?: UserUpdateManyWithoutSubscriptionTasksInput | null
  owners?: UserUpdateManyWithoutTasksInput | null
  candidate?: CandidateUpdateOneWithoutTasksInput | null
  title?: String | null
  description?: String | null
  dueAt?: DateTime | null
}

export interface TaskUpdateManyDataInput {
  title?: String | null
  description?: String | null
  dueAt?: DateTime | null
}

export interface TaskUpdateManyMutationInput {
  title?: String | null
  description?: String | null
  dueAt?: DateTime | null
}

export interface TaskUpdateManyWithoutCandidateInput {
  create?: TaskCreateWithoutCandidateInput[] | TaskCreateWithoutCandidateInput | null
  delete?: TaskWhereUniqueInput[] | TaskWhereUniqueInput | null
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput | null
  disconnect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput | null
  update?: TaskUpdateWithWhereUniqueWithoutCandidateInput[] | TaskUpdateWithWhereUniqueWithoutCandidateInput | null
  upsert?: TaskUpsertWithWhereUniqueWithoutCandidateInput[] | TaskUpsertWithWhereUniqueWithoutCandidateInput | null
  deleteMany?: TaskScalarWhereInput[] | TaskScalarWhereInput | null
  updateMany?: TaskUpdateManyWithWhereNestedInput[] | TaskUpdateManyWithWhereNestedInput | null
}

export interface TaskUpdateManyWithoutOwnersInput {
  create?: TaskCreateWithoutOwnersInput[] | TaskCreateWithoutOwnersInput | null
  delete?: TaskWhereUniqueInput[] | TaskWhereUniqueInput | null
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput | null
  disconnect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput | null
  update?: TaskUpdateWithWhereUniqueWithoutOwnersInput[] | TaskUpdateWithWhereUniqueWithoutOwnersInput | null
  upsert?: TaskUpsertWithWhereUniqueWithoutOwnersInput[] | TaskUpsertWithWhereUniqueWithoutOwnersInput | null
  deleteMany?: TaskScalarWhereInput[] | TaskScalarWhereInput | null
  updateMany?: TaskUpdateManyWithWhereNestedInput[] | TaskUpdateManyWithWhereNestedInput | null
}

export interface TaskUpdateManyWithoutSubscribersInput {
  create?: TaskCreateWithoutSubscribersInput[] | TaskCreateWithoutSubscribersInput | null
  delete?: TaskWhereUniqueInput[] | TaskWhereUniqueInput | null
  connect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput | null
  disconnect?: TaskWhereUniqueInput[] | TaskWhereUniqueInput | null
  update?: TaskUpdateWithWhereUniqueWithoutSubscribersInput[] | TaskUpdateWithWhereUniqueWithoutSubscribersInput | null
  upsert?: TaskUpsertWithWhereUniqueWithoutSubscribersInput[] | TaskUpsertWithWhereUniqueWithoutSubscribersInput | null
  deleteMany?: TaskScalarWhereInput[] | TaskScalarWhereInput | null
  updateMany?: TaskUpdateManyWithWhereNestedInput[] | TaskUpdateManyWithWhereNestedInput | null
}

export interface TaskUpdateManyWithWhereNestedInput {
  where: TaskScalarWhereInput
  data: TaskUpdateManyDataInput
}

export interface TaskUpdateOneInput {
  create?: TaskCreateInput | null
  update?: TaskUpdateDataInput | null
  upsert?: TaskUpsertNestedInput | null
  delete?: Boolean | null
  disconnect?: Boolean | null
  connect?: TaskWhereUniqueInput | null
}

export interface TaskUpdateWithoutCandidateDataInput {
  subscribers?: UserUpdateManyWithoutSubscriptionTasksInput | null
  owners?: UserUpdateManyWithoutTasksInput | null
  title?: String | null
  description?: String | null
  dueAt?: DateTime | null
}

export interface TaskUpdateWithoutOwnersDataInput {
  subscribers?: UserUpdateManyWithoutSubscriptionTasksInput | null
  candidate?: CandidateUpdateOneWithoutTasksInput | null
  title?: String | null
  description?: String | null
  dueAt?: DateTime | null
}

export interface TaskUpdateWithoutSubscribersDataInput {
  owners?: UserUpdateManyWithoutTasksInput | null
  candidate?: CandidateUpdateOneWithoutTasksInput | null
  title?: String | null
  description?: String | null
  dueAt?: DateTime | null
}

export interface TaskUpdateWithWhereUniqueWithoutCandidateInput {
  where: TaskWhereUniqueInput
  data: TaskUpdateWithoutCandidateDataInput
}

export interface TaskUpdateWithWhereUniqueWithoutOwnersInput {
  where: TaskWhereUniqueInput
  data: TaskUpdateWithoutOwnersDataInput
}

export interface TaskUpdateWithWhereUniqueWithoutSubscribersInput {
  where: TaskWhereUniqueInput
  data: TaskUpdateWithoutSubscribersDataInput
}

export interface TaskUpsertNestedInput {
  update: TaskUpdateDataInput
  create: TaskCreateInput
}

export interface TaskUpsertWithWhereUniqueWithoutCandidateInput {
  where: TaskWhereUniqueInput
  update: TaskUpdateWithoutCandidateDataInput
  create: TaskCreateWithoutCandidateInput
}

export interface TaskUpsertWithWhereUniqueWithoutOwnersInput {
  where: TaskWhereUniqueInput
  update: TaskUpdateWithoutOwnersDataInput
  create: TaskCreateWithoutOwnersInput
}

export interface TaskUpsertWithWhereUniqueWithoutSubscribersInput {
  where: TaskWhereUniqueInput
  update: TaskUpdateWithoutSubscribersDataInput
  create: TaskCreateWithoutSubscribersInput
}

export interface TaskWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  subscribers_every?: UserWhereInput | null
  subscribers_some?: UserWhereInput | null
  subscribers_none?: UserWhereInput | null
  owners_every?: UserWhereInput | null
  owners_some?: UserWhereInput | null
  owners_none?: UserWhereInput | null
  candidate?: CandidateWhereInput | null
  title?: String | null
  title_not?: String | null
  title_in?: String[] | String | null
  title_not_in?: String[] | String | null
  title_lt?: String | null
  title_lte?: String | null
  title_gt?: String | null
  title_gte?: String | null
  title_contains?: String | null
  title_not_contains?: String | null
  title_starts_with?: String | null
  title_not_starts_with?: String | null
  title_ends_with?: String | null
  title_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  dueAt?: DateTime | null
  dueAt_not?: DateTime | null
  dueAt_in?: DateTime[] | DateTime | null
  dueAt_not_in?: DateTime[] | DateTime | null
  dueAt_lt?: DateTime | null
  dueAt_lte?: DateTime | null
  dueAt_gt?: DateTime | null
  dueAt_gte?: DateTime | null
  AND?: TaskWhereInput[] | TaskWhereInput | null
  OR?: TaskWhereInput[] | TaskWhereInput | null
  NOT?: TaskWhereInput[] | TaskWhereInput | null
}

export interface TaskWhereUniqueInput {
  id?: ID_Input | null
}

export interface UserCreateInput {
  workspace: WorkspaceCreateOneWithoutUsersInput
  events?: EventCreateOneWithoutActorUserInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  subscriptionJobs?: JobCreateManyWithoutSubscribersInput | null
  subscriptionCandidates?: CandidateCreateManyWithoutSubscribersInput | null
  subscriptionTasks?: TaskCreateManyWithoutSubscribersInput | null
  tasks?: TaskCreateManyWithoutOwnersInput | null
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin?: DateTime | null
  deletedAt?: DateTime | null
  position?: String | null
  avatar?: FileCreateOneInput | null
}

export interface UserCreateManyWithoutSubscriptionCandidatesInput {
  create?: UserCreateWithoutSubscriptionCandidatesInput[] | UserCreateWithoutSubscriptionCandidatesInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateManyWithoutSubscriptionJobsInput {
  create?: UserCreateWithoutSubscriptionJobsInput[] | UserCreateWithoutSubscriptionJobsInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateManyWithoutSubscriptionTasksInput {
  create?: UserCreateWithoutSubscriptionTasksInput[] | UserCreateWithoutSubscriptionTasksInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateManyWithoutTasksInput {
  create?: UserCreateWithoutTasksInput[] | UserCreateWithoutTasksInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateManyWithoutWorkspaceInput {
  create?: UserCreateWithoutWorkspaceInput[] | UserCreateWithoutWorkspaceInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateOneInput {
  create?: UserCreateInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutEventsInput {
  create?: UserCreateWithoutEventsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutNotificationsInput {
  create?: UserCreateWithoutNotificationsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutEventsInput {
  workspace: WorkspaceCreateOneWithoutUsersInput
  notifications?: NotificationCreateManyWithoutUserInput | null
  subscriptionJobs?: JobCreateManyWithoutSubscribersInput | null
  subscriptionCandidates?: CandidateCreateManyWithoutSubscribersInput | null
  subscriptionTasks?: TaskCreateManyWithoutSubscribersInput | null
  tasks?: TaskCreateManyWithoutOwnersInput | null
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin?: DateTime | null
  deletedAt?: DateTime | null
  position?: String | null
  avatar?: FileCreateOneInput | null
}

export interface UserCreateWithoutNotificationsInput {
  workspace: WorkspaceCreateOneWithoutUsersInput
  events?: EventCreateOneWithoutActorUserInput | null
  subscriptionJobs?: JobCreateManyWithoutSubscribersInput | null
  subscriptionCandidates?: CandidateCreateManyWithoutSubscribersInput | null
  subscriptionTasks?: TaskCreateManyWithoutSubscribersInput | null
  tasks?: TaskCreateManyWithoutOwnersInput | null
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin?: DateTime | null
  deletedAt?: DateTime | null
  position?: String | null
  avatar?: FileCreateOneInput | null
}

export interface UserCreateWithoutSubscriptionCandidatesInput {
  workspace: WorkspaceCreateOneWithoutUsersInput
  events?: EventCreateOneWithoutActorUserInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  subscriptionJobs?: JobCreateManyWithoutSubscribersInput | null
  subscriptionTasks?: TaskCreateManyWithoutSubscribersInput | null
  tasks?: TaskCreateManyWithoutOwnersInput | null
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin?: DateTime | null
  deletedAt?: DateTime | null
  position?: String | null
  avatar?: FileCreateOneInput | null
}

export interface UserCreateWithoutSubscriptionJobsInput {
  workspace: WorkspaceCreateOneWithoutUsersInput
  events?: EventCreateOneWithoutActorUserInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  subscriptionCandidates?: CandidateCreateManyWithoutSubscribersInput | null
  subscriptionTasks?: TaskCreateManyWithoutSubscribersInput | null
  tasks?: TaskCreateManyWithoutOwnersInput | null
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin?: DateTime | null
  deletedAt?: DateTime | null
  position?: String | null
  avatar?: FileCreateOneInput | null
}

export interface UserCreateWithoutSubscriptionTasksInput {
  workspace: WorkspaceCreateOneWithoutUsersInput
  events?: EventCreateOneWithoutActorUserInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  subscriptionJobs?: JobCreateManyWithoutSubscribersInput | null
  subscriptionCandidates?: CandidateCreateManyWithoutSubscribersInput | null
  tasks?: TaskCreateManyWithoutOwnersInput | null
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin?: DateTime | null
  deletedAt?: DateTime | null
  position?: String | null
  avatar?: FileCreateOneInput | null
}

export interface UserCreateWithoutTasksInput {
  workspace: WorkspaceCreateOneWithoutUsersInput
  events?: EventCreateOneWithoutActorUserInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  subscriptionJobs?: JobCreateManyWithoutSubscribersInput | null
  subscriptionCandidates?: CandidateCreateManyWithoutSubscribersInput | null
  subscriptionTasks?: TaskCreateManyWithoutSubscribersInput | null
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin?: DateTime | null
  deletedAt?: DateTime | null
  position?: String | null
  avatar?: FileCreateOneInput | null
}

export interface UserCreateWithoutWorkspaceInput {
  events?: EventCreateOneWithoutActorUserInput | null
  notifications?: NotificationCreateManyWithoutUserInput | null
  subscriptionJobs?: JobCreateManyWithoutSubscribersInput | null
  subscriptionCandidates?: CandidateCreateManyWithoutSubscribersInput | null
  subscriptionTasks?: TaskCreateManyWithoutSubscribersInput | null
  tasks?: TaskCreateManyWithoutOwnersInput | null
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin?: DateTime | null
  deletedAt?: DateTime | null
  position?: String | null
  avatar?: FileCreateOneInput | null
}

export interface UserScalarWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  firstName?: String | null
  firstName_not?: String | null
  firstName_in?: String[] | String | null
  firstName_not_in?: String[] | String | null
  firstName_lt?: String | null
  firstName_lte?: String | null
  firstName_gt?: String | null
  firstName_gte?: String | null
  firstName_contains?: String | null
  firstName_not_contains?: String | null
  firstName_starts_with?: String | null
  firstName_not_starts_with?: String | null
  firstName_ends_with?: String | null
  firstName_not_ends_with?: String | null
  lastName?: String | null
  lastName_not?: String | null
  lastName_in?: String[] | String | null
  lastName_not_in?: String[] | String | null
  lastName_lt?: String | null
  lastName_lte?: String | null
  lastName_gt?: String | null
  lastName_gte?: String | null
  lastName_contains?: String | null
  lastName_not_contains?: String | null
  lastName_starts_with?: String | null
  lastName_not_starts_with?: String | null
  lastName_ends_with?: String | null
  lastName_not_ends_with?: String | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  username?: String | null
  username_not?: String | null
  username_in?: String[] | String | null
  username_not_in?: String[] | String | null
  username_lt?: String | null
  username_lte?: String | null
  username_gt?: String | null
  username_gte?: String | null
  username_contains?: String | null
  username_not_contains?: String | null
  username_starts_with?: String | null
  username_not_starts_with?: String | null
  username_ends_with?: String | null
  username_not_ends_with?: String | null
  lastLogin?: DateTime | null
  lastLogin_not?: DateTime | null
  lastLogin_in?: DateTime[] | DateTime | null
  lastLogin_not_in?: DateTime[] | DateTime | null
  lastLogin_lt?: DateTime | null
  lastLogin_lte?: DateTime | null
  lastLogin_gt?: DateTime | null
  lastLogin_gte?: DateTime | null
  deletedAt?: DateTime | null
  deletedAt_not?: DateTime | null
  deletedAt_in?: DateTime[] | DateTime | null
  deletedAt_not_in?: DateTime[] | DateTime | null
  deletedAt_lt?: DateTime | null
  deletedAt_lte?: DateTime | null
  deletedAt_gt?: DateTime | null
  deletedAt_gte?: DateTime | null
  position?: String | null
  position_not?: String | null
  position_in?: String[] | String | null
  position_not_in?: String[] | String | null
  position_lt?: String | null
  position_lte?: String | null
  position_gt?: String | null
  position_gte?: String | null
  position_contains?: String | null
  position_not_contains?: String | null
  position_starts_with?: String | null
  position_not_starts_with?: String | null
  position_ends_with?: String | null
  position_not_ends_with?: String | null
  AND?: UserScalarWhereInput[] | UserScalarWhereInput | null
  OR?: UserScalarWhereInput[] | UserScalarWhereInput | null
  NOT?: UserScalarWhereInput[] | UserScalarWhereInput | null
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
}

export interface UserUpdateDataInput {
  workspace?: WorkspaceUpdateOneRequiredWithoutUsersInput | null
  events?: EventUpdateOneWithoutActorUserInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  subscriptionJobs?: JobUpdateManyWithoutSubscribersInput | null
  subscriptionCandidates?: CandidateUpdateManyWithoutSubscribersInput | null
  subscriptionTasks?: TaskUpdateManyWithoutSubscribersInput | null
  tasks?: TaskUpdateManyWithoutOwnersInput | null
  firstName?: String | null
  lastName?: String | null
  email?: String | null
  username?: String | null
  lastLogin?: DateTime | null
  deletedAt?: DateTime | null
  position?: String | null
  avatar?: FileUpdateOneInput | null
}

export interface UserUpdateInput {
  workspace?: WorkspaceUpdateOneRequiredWithoutUsersInput | null
  events?: EventUpdateOneWithoutActorUserInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  subscriptionJobs?: JobUpdateManyWithoutSubscribersInput | null
  subscriptionCandidates?: CandidateUpdateManyWithoutSubscribersInput | null
  subscriptionTasks?: TaskUpdateManyWithoutSubscribersInput | null
  tasks?: TaskUpdateManyWithoutOwnersInput | null
  firstName?: String | null
  lastName?: String | null
  email?: String | null
  username?: String | null
  lastLogin?: DateTime | null
  deletedAt?: DateTime | null
  position?: String | null
  avatar?: FileUpdateOneInput | null
}

export interface UserUpdateManyDataInput {
  firstName?: String | null
  lastName?: String | null
  email?: String | null
  username?: String | null
  lastLogin?: DateTime | null
  deletedAt?: DateTime | null
  position?: String | null
}

export interface UserUpdateManyMutationInput {
  firstName?: String | null
  lastName?: String | null
  email?: String | null
  username?: String | null
  lastLogin?: DateTime | null
  deletedAt?: DateTime | null
  position?: String | null
}

export interface UserUpdateManyWithoutSubscriptionCandidatesInput {
  create?: UserCreateWithoutSubscriptionCandidatesInput[] | UserCreateWithoutSubscriptionCandidatesInput | null
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  update?: UserUpdateWithWhereUniqueWithoutSubscriptionCandidatesInput[] | UserUpdateWithWhereUniqueWithoutSubscriptionCandidatesInput | null
  upsert?: UserUpsertWithWhereUniqueWithoutSubscriptionCandidatesInput[] | UserUpsertWithWhereUniqueWithoutSubscriptionCandidatesInput | null
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput | null
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput | null
}

export interface UserUpdateManyWithoutSubscriptionJobsInput {
  create?: UserCreateWithoutSubscriptionJobsInput[] | UserCreateWithoutSubscriptionJobsInput | null
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  update?: UserUpdateWithWhereUniqueWithoutSubscriptionJobsInput[] | UserUpdateWithWhereUniqueWithoutSubscriptionJobsInput | null
  upsert?: UserUpsertWithWhereUniqueWithoutSubscriptionJobsInput[] | UserUpsertWithWhereUniqueWithoutSubscriptionJobsInput | null
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput | null
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput | null
}

export interface UserUpdateManyWithoutSubscriptionTasksInput {
  create?: UserCreateWithoutSubscriptionTasksInput[] | UserCreateWithoutSubscriptionTasksInput | null
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  update?: UserUpdateWithWhereUniqueWithoutSubscriptionTasksInput[] | UserUpdateWithWhereUniqueWithoutSubscriptionTasksInput | null
  upsert?: UserUpsertWithWhereUniqueWithoutSubscriptionTasksInput[] | UserUpsertWithWhereUniqueWithoutSubscriptionTasksInput | null
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput | null
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput | null
}

export interface UserUpdateManyWithoutTasksInput {
  create?: UserCreateWithoutTasksInput[] | UserCreateWithoutTasksInput | null
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  update?: UserUpdateWithWhereUniqueWithoutTasksInput[] | UserUpdateWithWhereUniqueWithoutTasksInput | null
  upsert?: UserUpsertWithWhereUniqueWithoutTasksInput[] | UserUpsertWithWhereUniqueWithoutTasksInput | null
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput | null
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput | null
}

export interface UserUpdateManyWithoutWorkspaceInput {
  create?: UserCreateWithoutWorkspaceInput[] | UserCreateWithoutWorkspaceInput | null
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  update?: UserUpdateWithWhereUniqueWithoutWorkspaceInput[] | UserUpdateWithWhereUniqueWithoutWorkspaceInput | null
  upsert?: UserUpsertWithWhereUniqueWithoutWorkspaceInput[] | UserUpsertWithWhereUniqueWithoutWorkspaceInput | null
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput | null
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput | null
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput
  data: UserUpdateManyDataInput
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput | null
  update?: UserUpdateDataInput | null
  upsert?: UserUpsertNestedInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserUpdateOneRequiredWithoutNotificationsInput {
  create?: UserCreateWithoutNotificationsInput | null
  update?: UserUpdateWithoutNotificationsDataInput | null
  upsert?: UserUpsertWithoutNotificationsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserUpdateOneWithoutEventsInput {
  create?: UserCreateWithoutEventsInput | null
  update?: UserUpdateWithoutEventsDataInput | null
  upsert?: UserUpsertWithoutEventsInput | null
  delete?: Boolean | null
  disconnect?: Boolean | null
  connect?: UserWhereUniqueInput | null
}

export interface UserUpdateWithoutEventsDataInput {
  workspace?: WorkspaceUpdateOneRequiredWithoutUsersInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  subscriptionJobs?: JobUpdateManyWithoutSubscribersInput | null
  subscriptionCandidates?: CandidateUpdateManyWithoutSubscribersInput | null
  subscriptionTasks?: TaskUpdateManyWithoutSubscribersInput | null
  tasks?: TaskUpdateManyWithoutOwnersInput | null
  firstName?: String | null
  lastName?: String | null
  email?: String | null
  username?: String | null
  lastLogin?: DateTime | null
  deletedAt?: DateTime | null
  position?: String | null
  avatar?: FileUpdateOneInput | null
}

export interface UserUpdateWithoutNotificationsDataInput {
  workspace?: WorkspaceUpdateOneRequiredWithoutUsersInput | null
  events?: EventUpdateOneWithoutActorUserInput | null
  subscriptionJobs?: JobUpdateManyWithoutSubscribersInput | null
  subscriptionCandidates?: CandidateUpdateManyWithoutSubscribersInput | null
  subscriptionTasks?: TaskUpdateManyWithoutSubscribersInput | null
  tasks?: TaskUpdateManyWithoutOwnersInput | null
  firstName?: String | null
  lastName?: String | null
  email?: String | null
  username?: String | null
  lastLogin?: DateTime | null
  deletedAt?: DateTime | null
  position?: String | null
  avatar?: FileUpdateOneInput | null
}

export interface UserUpdateWithoutSubscriptionCandidatesDataInput {
  workspace?: WorkspaceUpdateOneRequiredWithoutUsersInput | null
  events?: EventUpdateOneWithoutActorUserInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  subscriptionJobs?: JobUpdateManyWithoutSubscribersInput | null
  subscriptionTasks?: TaskUpdateManyWithoutSubscribersInput | null
  tasks?: TaskUpdateManyWithoutOwnersInput | null
  firstName?: String | null
  lastName?: String | null
  email?: String | null
  username?: String | null
  lastLogin?: DateTime | null
  deletedAt?: DateTime | null
  position?: String | null
  avatar?: FileUpdateOneInput | null
}

export interface UserUpdateWithoutSubscriptionJobsDataInput {
  workspace?: WorkspaceUpdateOneRequiredWithoutUsersInput | null
  events?: EventUpdateOneWithoutActorUserInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  subscriptionCandidates?: CandidateUpdateManyWithoutSubscribersInput | null
  subscriptionTasks?: TaskUpdateManyWithoutSubscribersInput | null
  tasks?: TaskUpdateManyWithoutOwnersInput | null
  firstName?: String | null
  lastName?: String | null
  email?: String | null
  username?: String | null
  lastLogin?: DateTime | null
  deletedAt?: DateTime | null
  position?: String | null
  avatar?: FileUpdateOneInput | null
}

export interface UserUpdateWithoutSubscriptionTasksDataInput {
  workspace?: WorkspaceUpdateOneRequiredWithoutUsersInput | null
  events?: EventUpdateOneWithoutActorUserInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  subscriptionJobs?: JobUpdateManyWithoutSubscribersInput | null
  subscriptionCandidates?: CandidateUpdateManyWithoutSubscribersInput | null
  tasks?: TaskUpdateManyWithoutOwnersInput | null
  firstName?: String | null
  lastName?: String | null
  email?: String | null
  username?: String | null
  lastLogin?: DateTime | null
  deletedAt?: DateTime | null
  position?: String | null
  avatar?: FileUpdateOneInput | null
}

export interface UserUpdateWithoutTasksDataInput {
  workspace?: WorkspaceUpdateOneRequiredWithoutUsersInput | null
  events?: EventUpdateOneWithoutActorUserInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  subscriptionJobs?: JobUpdateManyWithoutSubscribersInput | null
  subscriptionCandidates?: CandidateUpdateManyWithoutSubscribersInput | null
  subscriptionTasks?: TaskUpdateManyWithoutSubscribersInput | null
  firstName?: String | null
  lastName?: String | null
  email?: String | null
  username?: String | null
  lastLogin?: DateTime | null
  deletedAt?: DateTime | null
  position?: String | null
  avatar?: FileUpdateOneInput | null
}

export interface UserUpdateWithoutWorkspaceDataInput {
  events?: EventUpdateOneWithoutActorUserInput | null
  notifications?: NotificationUpdateManyWithoutUserInput | null
  subscriptionJobs?: JobUpdateManyWithoutSubscribersInput | null
  subscriptionCandidates?: CandidateUpdateManyWithoutSubscribersInput | null
  subscriptionTasks?: TaskUpdateManyWithoutSubscribersInput | null
  tasks?: TaskUpdateManyWithoutOwnersInput | null
  firstName?: String | null
  lastName?: String | null
  email?: String | null
  username?: String | null
  lastLogin?: DateTime | null
  deletedAt?: DateTime | null
  position?: String | null
  avatar?: FileUpdateOneInput | null
}

export interface UserUpdateWithWhereUniqueWithoutSubscriptionCandidatesInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutSubscriptionCandidatesDataInput
}

export interface UserUpdateWithWhereUniqueWithoutSubscriptionJobsInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutSubscriptionJobsDataInput
}

export interface UserUpdateWithWhereUniqueWithoutSubscriptionTasksInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutSubscriptionTasksDataInput
}

export interface UserUpdateWithWhereUniqueWithoutTasksInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutTasksDataInput
}

export interface UserUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutWorkspaceDataInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserUpsertWithoutEventsInput {
  update: UserUpdateWithoutEventsDataInput
  create: UserCreateWithoutEventsInput
}

export interface UserUpsertWithoutNotificationsInput {
  update: UserUpdateWithoutNotificationsDataInput
  create: UserCreateWithoutNotificationsInput
}

export interface UserUpsertWithWhereUniqueWithoutSubscriptionCandidatesInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutSubscriptionCandidatesDataInput
  create: UserCreateWithoutSubscriptionCandidatesInput
}

export interface UserUpsertWithWhereUniqueWithoutSubscriptionJobsInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutSubscriptionJobsDataInput
  create: UserCreateWithoutSubscriptionJobsInput
}

export interface UserUpsertWithWhereUniqueWithoutSubscriptionTasksInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutSubscriptionTasksDataInput
  create: UserCreateWithoutSubscriptionTasksInput
}

export interface UserUpsertWithWhereUniqueWithoutTasksInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutTasksDataInput
  create: UserCreateWithoutTasksInput
}

export interface UserUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutWorkspaceDataInput
  create: UserCreateWithoutWorkspaceInput
}

export interface UserWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  workspace?: WorkspaceWhereInput | null
  events?: EventWhereInput | null
  notifications_every?: NotificationWhereInput | null
  notifications_some?: NotificationWhereInput | null
  notifications_none?: NotificationWhereInput | null
  subscriptionJobs_every?: JobWhereInput | null
  subscriptionJobs_some?: JobWhereInput | null
  subscriptionJobs_none?: JobWhereInput | null
  subscriptionCandidates_every?: CandidateWhereInput | null
  subscriptionCandidates_some?: CandidateWhereInput | null
  subscriptionCandidates_none?: CandidateWhereInput | null
  subscriptionTasks_every?: TaskWhereInput | null
  subscriptionTasks_some?: TaskWhereInput | null
  subscriptionTasks_none?: TaskWhereInput | null
  tasks_every?: TaskWhereInput | null
  tasks_some?: TaskWhereInput | null
  tasks_none?: TaskWhereInput | null
  firstName?: String | null
  firstName_not?: String | null
  firstName_in?: String[] | String | null
  firstName_not_in?: String[] | String | null
  firstName_lt?: String | null
  firstName_lte?: String | null
  firstName_gt?: String | null
  firstName_gte?: String | null
  firstName_contains?: String | null
  firstName_not_contains?: String | null
  firstName_starts_with?: String | null
  firstName_not_starts_with?: String | null
  firstName_ends_with?: String | null
  firstName_not_ends_with?: String | null
  lastName?: String | null
  lastName_not?: String | null
  lastName_in?: String[] | String | null
  lastName_not_in?: String[] | String | null
  lastName_lt?: String | null
  lastName_lte?: String | null
  lastName_gt?: String | null
  lastName_gte?: String | null
  lastName_contains?: String | null
  lastName_not_contains?: String | null
  lastName_starts_with?: String | null
  lastName_not_starts_with?: String | null
  lastName_ends_with?: String | null
  lastName_not_ends_with?: String | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  username?: String | null
  username_not?: String | null
  username_in?: String[] | String | null
  username_not_in?: String[] | String | null
  username_lt?: String | null
  username_lte?: String | null
  username_gt?: String | null
  username_gte?: String | null
  username_contains?: String | null
  username_not_contains?: String | null
  username_starts_with?: String | null
  username_not_starts_with?: String | null
  username_ends_with?: String | null
  username_not_ends_with?: String | null
  lastLogin?: DateTime | null
  lastLogin_not?: DateTime | null
  lastLogin_in?: DateTime[] | DateTime | null
  lastLogin_not_in?: DateTime[] | DateTime | null
  lastLogin_lt?: DateTime | null
  lastLogin_lte?: DateTime | null
  lastLogin_gt?: DateTime | null
  lastLogin_gte?: DateTime | null
  deletedAt?: DateTime | null
  deletedAt_not?: DateTime | null
  deletedAt_in?: DateTime[] | DateTime | null
  deletedAt_not_in?: DateTime[] | DateTime | null
  deletedAt_lt?: DateTime | null
  deletedAt_lte?: DateTime | null
  deletedAt_gt?: DateTime | null
  deletedAt_gte?: DateTime | null
  position?: String | null
  position_not?: String | null
  position_in?: String[] | String | null
  position_not_in?: String[] | String | null
  position_lt?: String | null
  position_lte?: String | null
  position_gt?: String | null
  position_gte?: String | null
  position_contains?: String | null
  position_not_contains?: String | null
  position_starts_with?: String | null
  position_not_starts_with?: String | null
  position_ends_with?: String | null
  position_not_ends_with?: String | null
  avatar?: FileWhereInput | null
  AND?: UserWhereInput[] | UserWhereInput | null
  OR?: UserWhereInput[] | UserWhereInput | null
  NOT?: UserWhereInput[] | UserWhereInput | null
}

export interface UserWhereUniqueInput {
  id?: ID_Input | null
  email?: String | null
}

export interface WorkflowCreateInput {
  name: String
  description?: String | null
  stages?: StageCreateManyInput | null
  disqualifications?: DisqualificationCreateManyInput | null
  fields?: FieldCreateManyInput | null
}

export interface WorkflowCreateManyInput {
  create?: WorkflowCreateInput[] | WorkflowCreateInput | null
  connect?: WorkflowWhereUniqueInput[] | WorkflowWhereUniqueInput | null
}

export interface WorkflowCreateOneInput {
  create?: WorkflowCreateInput | null
  connect?: WorkflowWhereUniqueInput | null
}

export interface WorkflowScalarWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  AND?: WorkflowScalarWhereInput[] | WorkflowScalarWhereInput | null
  OR?: WorkflowScalarWhereInput[] | WorkflowScalarWhereInput | null
  NOT?: WorkflowScalarWhereInput[] | WorkflowScalarWhereInput | null
}

export interface WorkflowSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: WorkflowWhereInput | null
  AND?: WorkflowSubscriptionWhereInput[] | WorkflowSubscriptionWhereInput | null
  OR?: WorkflowSubscriptionWhereInput[] | WorkflowSubscriptionWhereInput | null
  NOT?: WorkflowSubscriptionWhereInput[] | WorkflowSubscriptionWhereInput | null
}

export interface WorkflowUpdateDataInput {
  name?: String | null
  description?: String | null
  stages?: StageUpdateManyInput | null
  disqualifications?: DisqualificationUpdateManyInput | null
  fields?: FieldUpdateManyInput | null
}

export interface WorkflowUpdateInput {
  name?: String | null
  description?: String | null
  stages?: StageUpdateManyInput | null
  disqualifications?: DisqualificationUpdateManyInput | null
  fields?: FieldUpdateManyInput | null
}

export interface WorkflowUpdateManyDataInput {
  name?: String | null
  description?: String | null
}

export interface WorkflowUpdateManyInput {
  create?: WorkflowCreateInput[] | WorkflowCreateInput | null
  update?: WorkflowUpdateWithWhereUniqueNestedInput[] | WorkflowUpdateWithWhereUniqueNestedInput | null
  upsert?: WorkflowUpsertWithWhereUniqueNestedInput[] | WorkflowUpsertWithWhereUniqueNestedInput | null
  delete?: WorkflowWhereUniqueInput[] | WorkflowWhereUniqueInput | null
  connect?: WorkflowWhereUniqueInput[] | WorkflowWhereUniqueInput | null
  disconnect?: WorkflowWhereUniqueInput[] | WorkflowWhereUniqueInput | null
  deleteMany?: WorkflowScalarWhereInput[] | WorkflowScalarWhereInput | null
  updateMany?: WorkflowUpdateManyWithWhereNestedInput[] | WorkflowUpdateManyWithWhereNestedInput | null
}

export interface WorkflowUpdateManyMutationInput {
  name?: String | null
  description?: String | null
}

export interface WorkflowUpdateManyWithWhereNestedInput {
  where: WorkflowScalarWhereInput
  data: WorkflowUpdateManyDataInput
}

export interface WorkflowUpdateOneInput {
  create?: WorkflowCreateInput | null
  update?: WorkflowUpdateDataInput | null
  upsert?: WorkflowUpsertNestedInput | null
  delete?: Boolean | null
  disconnect?: Boolean | null
  connect?: WorkflowWhereUniqueInput | null
}

export interface WorkflowUpdateOneRequiredInput {
  create?: WorkflowCreateInput | null
  update?: WorkflowUpdateDataInput | null
  upsert?: WorkflowUpsertNestedInput | null
  connect?: WorkflowWhereUniqueInput | null
}

export interface WorkflowUpdateWithWhereUniqueNestedInput {
  where: WorkflowWhereUniqueInput
  data: WorkflowUpdateDataInput
}

export interface WorkflowUpsertNestedInput {
  update: WorkflowUpdateDataInput
  create: WorkflowCreateInput
}

export interface WorkflowUpsertWithWhereUniqueNestedInput {
  where: WorkflowWhereUniqueInput
  update: WorkflowUpdateDataInput
  create: WorkflowCreateInput
}

export interface WorkflowWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  stages_every?: StageWhereInput | null
  stages_some?: StageWhereInput | null
  stages_none?: StageWhereInput | null
  disqualifications_every?: DisqualificationWhereInput | null
  disqualifications_some?: DisqualificationWhereInput | null
  disqualifications_none?: DisqualificationWhereInput | null
  fields_every?: FieldWhereInput | null
  fields_some?: FieldWhereInput | null
  fields_none?: FieldWhereInput | null
  AND?: WorkflowWhereInput[] | WorkflowWhereInput | null
  OR?: WorkflowWhereInput[] | WorkflowWhereInput | null
  NOT?: WorkflowWhereInput[] | WorkflowWhereInput | null
}

export interface WorkflowWhereUniqueInput {
  id?: ID_Input | null
}

export interface WorkspaceCreateInput {
  events?: EventCreateManyWithoutTargetWorkspaceInput | null
  users?: UserCreateManyWithoutWorkspaceInput | null
  jobs?: JobCreateManyWithoutWorkspaceInput | null
  candidates?: CandidateCreateManyWithoutWorkspaceInput | null
  workflows?: WorkflowCreateManyInput | null
  workflowDefault?: WorkflowCreateOneInput | null
  invites?: InviteCreateManyInput | null
  tags?: TagCreateManyInput | null
  name: String
}

export interface WorkspaceCreateOneWithoutCandidatesInput {
  create?: WorkspaceCreateWithoutCandidatesInput | null
  connect?: WorkspaceWhereUniqueInput | null
}

export interface WorkspaceCreateOneWithoutEventsInput {
  create?: WorkspaceCreateWithoutEventsInput | null
  connect?: WorkspaceWhereUniqueInput | null
}

export interface WorkspaceCreateOneWithoutJobsInput {
  create?: WorkspaceCreateWithoutJobsInput | null
  connect?: WorkspaceWhereUniqueInput | null
}

export interface WorkspaceCreateOneWithoutUsersInput {
  create?: WorkspaceCreateWithoutUsersInput | null
  connect?: WorkspaceWhereUniqueInput | null
}

export interface WorkspaceCreateWithoutCandidatesInput {
  events?: EventCreateManyWithoutTargetWorkspaceInput | null
  users?: UserCreateManyWithoutWorkspaceInput | null
  jobs?: JobCreateManyWithoutWorkspaceInput | null
  workflows?: WorkflowCreateManyInput | null
  workflowDefault?: WorkflowCreateOneInput | null
  invites?: InviteCreateManyInput | null
  tags?: TagCreateManyInput | null
  name: String
}

export interface WorkspaceCreateWithoutEventsInput {
  users?: UserCreateManyWithoutWorkspaceInput | null
  jobs?: JobCreateManyWithoutWorkspaceInput | null
  candidates?: CandidateCreateManyWithoutWorkspaceInput | null
  workflows?: WorkflowCreateManyInput | null
  workflowDefault?: WorkflowCreateOneInput | null
  invites?: InviteCreateManyInput | null
  tags?: TagCreateManyInput | null
  name: String
}

export interface WorkspaceCreateWithoutJobsInput {
  events?: EventCreateManyWithoutTargetWorkspaceInput | null
  users?: UserCreateManyWithoutWorkspaceInput | null
  candidates?: CandidateCreateManyWithoutWorkspaceInput | null
  workflows?: WorkflowCreateManyInput | null
  workflowDefault?: WorkflowCreateOneInput | null
  invites?: InviteCreateManyInput | null
  tags?: TagCreateManyInput | null
  name: String
}

export interface WorkspaceCreateWithoutUsersInput {
  events?: EventCreateManyWithoutTargetWorkspaceInput | null
  jobs?: JobCreateManyWithoutWorkspaceInput | null
  candidates?: CandidateCreateManyWithoutWorkspaceInput | null
  workflows?: WorkflowCreateManyInput | null
  workflowDefault?: WorkflowCreateOneInput | null
  invites?: InviteCreateManyInput | null
  tags?: TagCreateManyInput | null
  name: String
}

export interface WorkspaceSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: WorkspaceWhereInput | null
  AND?: WorkspaceSubscriptionWhereInput[] | WorkspaceSubscriptionWhereInput | null
  OR?: WorkspaceSubscriptionWhereInput[] | WorkspaceSubscriptionWhereInput | null
  NOT?: WorkspaceSubscriptionWhereInput[] | WorkspaceSubscriptionWhereInput | null
}

export interface WorkspaceUpdateInput {
  events?: EventUpdateManyWithoutTargetWorkspaceInput | null
  users?: UserUpdateManyWithoutWorkspaceInput | null
  jobs?: JobUpdateManyWithoutWorkspaceInput | null
  candidates?: CandidateUpdateManyWithoutWorkspaceInput | null
  workflows?: WorkflowUpdateManyInput | null
  workflowDefault?: WorkflowUpdateOneInput | null
  invites?: InviteUpdateManyInput | null
  tags?: TagUpdateManyInput | null
  name?: String | null
}

export interface WorkspaceUpdateManyMutationInput {
  name?: String | null
}

export interface WorkspaceUpdateOneRequiredWithoutCandidatesInput {
  create?: WorkspaceCreateWithoutCandidatesInput | null
  update?: WorkspaceUpdateWithoutCandidatesDataInput | null
  upsert?: WorkspaceUpsertWithoutCandidatesInput | null
  connect?: WorkspaceWhereUniqueInput | null
}

export interface WorkspaceUpdateOneRequiredWithoutJobsInput {
  create?: WorkspaceCreateWithoutJobsInput | null
  update?: WorkspaceUpdateWithoutJobsDataInput | null
  upsert?: WorkspaceUpsertWithoutJobsInput | null
  connect?: WorkspaceWhereUniqueInput | null
}

export interface WorkspaceUpdateOneRequiredWithoutUsersInput {
  create?: WorkspaceCreateWithoutUsersInput | null
  update?: WorkspaceUpdateWithoutUsersDataInput | null
  upsert?: WorkspaceUpsertWithoutUsersInput | null
  connect?: WorkspaceWhereUniqueInput | null
}

export interface WorkspaceUpdateOneWithoutEventsInput {
  create?: WorkspaceCreateWithoutEventsInput | null
  update?: WorkspaceUpdateWithoutEventsDataInput | null
  upsert?: WorkspaceUpsertWithoutEventsInput | null
  delete?: Boolean | null
  disconnect?: Boolean | null
  connect?: WorkspaceWhereUniqueInput | null
}

export interface WorkspaceUpdateWithoutCandidatesDataInput {
  events?: EventUpdateManyWithoutTargetWorkspaceInput | null
  users?: UserUpdateManyWithoutWorkspaceInput | null
  jobs?: JobUpdateManyWithoutWorkspaceInput | null
  workflows?: WorkflowUpdateManyInput | null
  workflowDefault?: WorkflowUpdateOneInput | null
  invites?: InviteUpdateManyInput | null
  tags?: TagUpdateManyInput | null
  name?: String | null
}

export interface WorkspaceUpdateWithoutEventsDataInput {
  users?: UserUpdateManyWithoutWorkspaceInput | null
  jobs?: JobUpdateManyWithoutWorkspaceInput | null
  candidates?: CandidateUpdateManyWithoutWorkspaceInput | null
  workflows?: WorkflowUpdateManyInput | null
  workflowDefault?: WorkflowUpdateOneInput | null
  invites?: InviteUpdateManyInput | null
  tags?: TagUpdateManyInput | null
  name?: String | null
}

export interface WorkspaceUpdateWithoutJobsDataInput {
  events?: EventUpdateManyWithoutTargetWorkspaceInput | null
  users?: UserUpdateManyWithoutWorkspaceInput | null
  candidates?: CandidateUpdateManyWithoutWorkspaceInput | null
  workflows?: WorkflowUpdateManyInput | null
  workflowDefault?: WorkflowUpdateOneInput | null
  invites?: InviteUpdateManyInput | null
  tags?: TagUpdateManyInput | null
  name?: String | null
}

export interface WorkspaceUpdateWithoutUsersDataInput {
  events?: EventUpdateManyWithoutTargetWorkspaceInput | null
  jobs?: JobUpdateManyWithoutWorkspaceInput | null
  candidates?: CandidateUpdateManyWithoutWorkspaceInput | null
  workflows?: WorkflowUpdateManyInput | null
  workflowDefault?: WorkflowUpdateOneInput | null
  invites?: InviteUpdateManyInput | null
  tags?: TagUpdateManyInput | null
  name?: String | null
}

export interface WorkspaceUpsertWithoutCandidatesInput {
  update: WorkspaceUpdateWithoutCandidatesDataInput
  create: WorkspaceCreateWithoutCandidatesInput
}

export interface WorkspaceUpsertWithoutEventsInput {
  update: WorkspaceUpdateWithoutEventsDataInput
  create: WorkspaceCreateWithoutEventsInput
}

export interface WorkspaceUpsertWithoutJobsInput {
  update: WorkspaceUpdateWithoutJobsDataInput
  create: WorkspaceCreateWithoutJobsInput
}

export interface WorkspaceUpsertWithoutUsersInput {
  update: WorkspaceUpdateWithoutUsersDataInput
  create: WorkspaceCreateWithoutUsersInput
}

export interface WorkspaceWhereInput {
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  events_every?: EventWhereInput | null
  events_some?: EventWhereInput | null
  events_none?: EventWhereInput | null
  users_every?: UserWhereInput | null
  users_some?: UserWhereInput | null
  users_none?: UserWhereInput | null
  jobs_every?: JobWhereInput | null
  jobs_some?: JobWhereInput | null
  jobs_none?: JobWhereInput | null
  candidates_every?: CandidateWhereInput | null
  candidates_some?: CandidateWhereInput | null
  candidates_none?: CandidateWhereInput | null
  workflows_every?: WorkflowWhereInput | null
  workflows_some?: WorkflowWhereInput | null
  workflows_none?: WorkflowWhereInput | null
  workflowDefault?: WorkflowWhereInput | null
  invites_every?: InviteWhereInput | null
  invites_some?: InviteWhereInput | null
  invites_none?: InviteWhereInput | null
  tags_every?: TagWhereInput | null
  tags_some?: TagWhereInput | null
  tags_none?: TagWhereInput | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  AND?: WorkspaceWhereInput[] | WorkspaceWhereInput | null
  OR?: WorkspaceWhereInput[] | WorkspaceWhereInput | null
  NOT?: WorkspaceWhereInput[] | WorkspaceWhereInput | null
}

export interface WorkspaceWhereUniqueInput {
  id?: ID_Input | null
}

export interface Node {
  id: ID_Output
}

export interface AggregateApplication {
  count: Int
}

export interface AggregateCandidate {
  count: Int
}

export interface AggregateComment {
  count: Int
}

export interface AggregateDisqualification {
  count: Int
}

export interface AggregateDisqualificationLink {
  count: Int
}

export interface AggregateEvent {
  count: Int
}

export interface AggregateField {
  count: Int
}

export interface AggregateFieldLink {
  count: Int
}

export interface AggregateFile {
  count: Int
}

export interface AggregateInvite {
  count: Int
}

export interface AggregateJob {
  count: Int
}

export interface AggregateLocation {
  count: Int
}

export interface AggregateNotification {
  count: Int
}

export interface AggregateStage {
  count: Int
}

export interface AggregateTag {
  count: Int
}

export interface AggregateTask {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface AggregateWorkflow {
  count: Int
}

export interface AggregateWorkspace {
  count: Int
}

export interface Application {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  type: ApplicationType
  disqualificationLink?: DisqualificationLink | null
  stage: Stage
  job: Job
  candidate: Candidate
}

export interface ApplicationConnection {
  pageInfo: PageInfo
  edges: Array<ApplicationEdge | null>
  aggregate: AggregateApplication
}

export interface ApplicationEdge {
  node: Application
  cursor: String
}

export interface ApplicationPreviousValues {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  type: ApplicationType
}

export interface ApplicationSubscriptionPayload {
  mutation: MutationType
  node?: Application | null
  updatedFields?: Array<String> | null
  previousValues?: ApplicationPreviousValues | null
}

export interface BatchPayload {
  count: Long
}

export interface Candidate {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  workspace: Workspace
  events?: Array<Event> | null
  subscribers?: Array<User> | null
  firstName: String
  lastName: String
  emails: Array<String>
  phones: Array<String>
  links: Array<String>
  avatar?: File | null
  metaCompany?: String | null
  metaHeadline?: String | null
  metaPosition?: String | null
  resumesString: Array<String>
  resumesFile?: Array<File> | null
  coverLettersString: Array<String>
  coverLettersFile?: Array<File> | null
  tags?: Array<Tag> | null
  source: Array<String>
  fields?: Array<FieldLink> | null
  tasks?: Array<Task> | null
  applications?: Array<Application> | null
  comments?: Array<Comment> | null
}

export interface CandidateConnection {
  pageInfo: PageInfo
  edges: Array<CandidateEdge | null>
  aggregate: AggregateCandidate
}

export interface CandidateEdge {
  node: Candidate
  cursor: String
}

export interface CandidatePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  firstName: String
  lastName: String
  emails: Array<String>
  phones: Array<String>
  links: Array<String>
  metaCompany?: String | null
  metaHeadline?: String | null
  metaPosition?: String | null
  resumesString: Array<String>
  coverLettersString: Array<String>
  source: Array<String>
}

export interface CandidateSubscriptionPayload {
  mutation: MutationType
  node?: Candidate | null
  updatedFields?: Array<String> | null
  previousValues?: CandidatePreviousValues | null
}

export interface Comment {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  createdBy: User
  parent?: Comment | null
  content: String
}

export interface CommentConnection {
  pageInfo: PageInfo
  edges: Array<CommentEdge | null>
  aggregate: AggregateComment
}

export interface CommentEdge {
  node: Comment
  cursor: String
}

export interface CommentPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  content: String
}

export interface CommentSubscriptionPayload {
  mutation: MutationType
  node?: Comment | null
  updatedFields?: Array<String> | null
  previousValues?: CommentPreviousValues | null
}

export interface Disqualification {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description?: String | null
}

export interface DisqualificationConnection {
  pageInfo: PageInfo
  edges: Array<DisqualificationEdge | null>
  aggregate: AggregateDisqualification
}

export interface DisqualificationEdge {
  node: Disqualification
  cursor: String
}

export interface DisqualificationLink {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  disqualification: Disqualification
  createdBy: User
  justification?: String | null
}

export interface DisqualificationLinkConnection {
  pageInfo: PageInfo
  edges: Array<DisqualificationLinkEdge | null>
  aggregate: AggregateDisqualificationLink
}

export interface DisqualificationLinkEdge {
  node: DisqualificationLink
  cursor: String
}

export interface DisqualificationLinkPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  justification?: String | null
}

export interface DisqualificationLinkSubscriptionPayload {
  mutation: MutationType
  node?: DisqualificationLink | null
  updatedFields?: Array<String> | null
  previousValues?: DisqualificationLinkPreviousValues | null
}

export interface DisqualificationPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description?: String | null
}

export interface DisqualificationSubscriptionPayload {
  mutation: MutationType
  node?: Disqualification | null
  updatedFields?: Array<String> | null
  previousValues?: DisqualificationPreviousValues | null
}

export interface Event {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  type: EventType
  actorType: EventActorType
  actorUser?: User | null
  actorCandidate?: Candidate | null
  targetType: EventTargetType
  targetCandidate?: Candidate | null
  targetJob?: Job | null
  targetTask?: Task | null
  targetWorkspace?: Workspace | null
}

export interface EventConnection {
  pageInfo: PageInfo
  edges: Array<EventEdge | null>
  aggregate: AggregateEvent
}

export interface EventEdge {
  node: Event
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

export interface EventSubscriptionPayload {
  mutation: MutationType
  node?: Event | null
  updatedFields?: Array<String> | null
  previousValues?: EventPreviousValues | null
}

export interface Field {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  type: FieldType
  label: String
}

export interface FieldConnection {
  pageInfo: PageInfo
  edges: Array<FieldEdge | null>
  aggregate: AggregateField
}

export interface FieldEdge {
  node: Field
  cursor: String
}

export interface FieldLink {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  field: Field
  value?: String | null
}

export interface FieldLinkConnection {
  pageInfo: PageInfo
  edges: Array<FieldLinkEdge | null>
  aggregate: AggregateFieldLink
}

export interface FieldLinkEdge {
  node: FieldLink
  cursor: String
}

export interface FieldLinkPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  value?: String | null
}

export interface FieldLinkSubscriptionPayload {
  mutation: MutationType
  node?: FieldLink | null
  updatedFields?: Array<String> | null
  previousValues?: FieldLinkPreviousValues | null
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
  node?: Field | null
  updatedFields?: Array<String> | null
  previousValues?: FieldPreviousValues | null
}

export interface File {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  size: Int
  type: String
  name: String
  url: String
}

export interface FileConnection {
  pageInfo: PageInfo
  edges: Array<FileEdge | null>
  aggregate: AggregateFile
}

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

export interface FileSubscriptionPayload {
  mutation: MutationType
  node?: File | null
  updatedFields?: Array<String> | null
  previousValues?: FilePreviousValues | null
}

export interface Invite {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  email: String
  expireAt: DateTime
  invitedBy: User
}

export interface InviteConnection {
  pageInfo: PageInfo
  edges: Array<InviteEdge | null>
  aggregate: AggregateInvite
}

export interface InviteEdge {
  node: Invite
  cursor: String
}

export interface InvitePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  email: String
  expireAt: DateTime
}

export interface InviteSubscriptionPayload {
  mutation: MutationType
  node?: Invite | null
  updatedFields?: Array<String> | null
  previousValues?: InvitePreviousValues | null
}

export interface Job {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  workspace: Workspace
  subscribers?: Array<User> | null
  events?: Array<Event> | null
  applications?: Array<Application> | null
  workflow: Workflow
  comments?: Array<Comment> | null
  type: JobType
  department?: String | null
  locations?: Array<Location> | null
  name: String
  description?: String | null
  requirements?: String | null
}

export interface JobConnection {
  pageInfo: PageInfo
  edges: Array<JobEdge | null>
  aggregate: AggregateJob
}

export interface JobEdge {
  node: Job
  cursor: String
}

export interface JobPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  type: JobType
  department?: String | null
  name: String
  description?: String | null
  requirements?: String | null
}

export interface JobSubscriptionPayload {
  mutation: MutationType
  node?: Job | null
  updatedFields?: Array<String> | null
  previousValues?: JobPreviousValues | null
}

export interface Location {
  id: ID_Output
  country: String
  region: String
  city: String
  zip: String
}

export interface LocationConnection {
  pageInfo: PageInfo
  edges: Array<LocationEdge | null>
  aggregate: AggregateLocation
}

export interface LocationEdge {
  node: Location
  cursor: String
}

export interface LocationPreviousValues {
  id: ID_Output
  country: String
  region: String
  city: String
  zip: String
}

export interface LocationSubscriptionPayload {
  mutation: MutationType
  node?: Location | null
  updatedFields?: Array<String> | null
  previousValues?: LocationPreviousValues | null
}

export interface Notification {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  type: NotificationType
  user: User
  event: Event
}

export interface NotificationConnection {
  pageInfo: PageInfo
  edges: Array<NotificationEdge | null>
  aggregate: AggregateNotification
}

export interface NotificationEdge {
  node: Notification
  cursor: String
}

export interface NotificationPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  type: NotificationType
}

export interface NotificationSubscriptionPayload {
  mutation: MutationType
  node?: Notification | null
  updatedFields?: Array<String> | null
  previousValues?: NotificationPreviousValues | null
}

export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface Stage {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description?: String | null
  type: StageType
}

export interface StageConnection {
  pageInfo: PageInfo
  edges: Array<StageEdge | null>
  aggregate: AggregateStage
}

export interface StageEdge {
  node: Stage
  cursor: String
}

export interface StagePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description?: String | null
  type: StageType
}

export interface StageSubscriptionPayload {
  mutation: MutationType
  node?: Stage | null
  updatedFields?: Array<String> | null
  previousValues?: StagePreviousValues | null
}

export interface Tag {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  label: String
}

export interface TagConnection {
  pageInfo: PageInfo
  edges: Array<TagEdge | null>
  aggregate: AggregateTag
}

export interface TagEdge {
  node: Tag
  cursor: String
}

export interface TagPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  label: String
}

export interface TagSubscriptionPayload {
  mutation: MutationType
  node?: Tag | null
  updatedFields?: Array<String> | null
  previousValues?: TagPreviousValues | null
}

export interface Task {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  subscribers?: Array<User> | null
  owners?: Array<User> | null
  candidate?: Candidate | null
  title?: String | null
  description?: String | null
  dueAt?: DateTime | null
}

export interface TaskConnection {
  pageInfo: PageInfo
  edges: Array<TaskEdge | null>
  aggregate: AggregateTask
}

export interface TaskEdge {
  node: Task
  cursor: String
}

export interface TaskPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  title?: String | null
  description?: String | null
  dueAt?: DateTime | null
}

export interface TaskSubscriptionPayload {
  mutation: MutationType
  node?: Task | null
  updatedFields?: Array<String> | null
  previousValues?: TaskPreviousValues | null
}

export interface User {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  workspace: Workspace
  events?: Event | null
  notifications?: Array<Notification> | null
  subscriptionJobs?: Array<Job> | null
  subscriptionCandidates?: Array<Candidate> | null
  subscriptionTasks?: Array<Task> | null
  tasks?: Array<Task> | null
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin?: DateTime | null
  deletedAt?: DateTime | null
  position?: String | null
  avatar?: File | null
}

export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

export interface UserEdge {
  node: User
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
  lastLogin?: DateTime | null
  deletedAt?: DateTime | null
  position?: String | null
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

export interface Workflow {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description?: String | null
  stages?: Array<Stage> | null
  disqualifications?: Array<Disqualification> | null
  fields?: Array<Field> | null
}

export interface WorkflowConnection {
  pageInfo: PageInfo
  edges: Array<WorkflowEdge | null>
  aggregate: AggregateWorkflow
}

export interface WorkflowEdge {
  node: Workflow
  cursor: String
}

export interface WorkflowPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description?: String | null
}

export interface WorkflowSubscriptionPayload {
  mutation: MutationType
  node?: Workflow | null
  updatedFields?: Array<String> | null
  previousValues?: WorkflowPreviousValues | null
}

export interface Workspace {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  events?: Array<Event> | null
  users?: Array<User> | null
  jobs?: Array<Job> | null
  candidates?: Array<Candidate> | null
  workflows?: Array<Workflow> | null
  workflowDefault?: Workflow | null
  invites?: Array<Invite> | null
  tags?: Array<Tag> | null
  name: String
}

export interface WorkspaceConnection {
  pageInfo: PageInfo
  edges: Array<WorkspaceEdge | null>
  aggregate: AggregateWorkspace
}

export interface WorkspaceEdge {
  node: Workspace
  cursor: String
}

export interface WorkspacePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
}

export interface WorkspaceSubscriptionPayload {
  mutation: MutationType
  node?: Workspace | null
  updatedFields?: Array<String> | null
  previousValues?: WorkspacePreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string