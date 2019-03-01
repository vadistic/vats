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
    disqualificationInstance: <T = DisqualificationInstance | null>(args: { where: DisqualificationInstanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    disqualificationInstances: <T = Array<DisqualificationInstance | null>>(args: { where?: DisqualificationInstanceWhereInput | null, orderBy?: DisqualificationInstanceOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    disqualificationInstancesConnection: <T = DisqualificationInstanceConnection>(args: { where?: DisqualificationInstanceWhereInput | null, orderBy?: DisqualificationInstanceOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    field: <T = Field | null>(args: { where: FieldWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    fields: <T = Array<Field | null>>(args: { where?: FieldWhereInput | null, orderBy?: FieldOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    fieldsConnection: <T = FieldConnection>(args: { where?: FieldWhereInput | null, orderBy?: FieldOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    fieldInstance: <T = FieldInstance | null>(args: { where: FieldInstanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    fieldInstances: <T = Array<FieldInstance | null>>(args: { where?: FieldInstanceWhereInput | null, orderBy?: FieldInstanceOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    fieldInstancesConnection: <T = FieldInstanceConnection>(args: { where?: FieldInstanceWhereInput | null, orderBy?: FieldInstanceOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
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
    source: <T = Source | null>(args: { where: SourceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    sources: <T = Array<Source | null>>(args: { where?: SourceWhereInput | null, orderBy?: SourceOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    sourcesConnection: <T = SourceConnection>(args: { where?: SourceWhereInput | null, orderBy?: SourceOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
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
    createDisqualificationInstance: <T = DisqualificationInstance>(args: { data: DisqualificationInstanceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateDisqualificationInstance: <T = DisqualificationInstance | null>(args: { data: DisqualificationInstanceUpdateInput, where: DisqualificationInstanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyDisqualificationInstances: <T = BatchPayload>(args: { data: DisqualificationInstanceUpdateManyMutationInput, where?: DisqualificationInstanceWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertDisqualificationInstance: <T = DisqualificationInstance>(args: { where: DisqualificationInstanceWhereUniqueInput, create: DisqualificationInstanceCreateInput, update: DisqualificationInstanceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteDisqualificationInstance: <T = DisqualificationInstance | null>(args: { where: DisqualificationInstanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyDisqualificationInstances: <T = BatchPayload>(args: { where?: DisqualificationInstanceWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createField: <T = Field>(args: { data: FieldCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateField: <T = Field | null>(args: { data: FieldUpdateInput, where: FieldWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyFields: <T = BatchPayload>(args: { data: FieldUpdateManyMutationInput, where?: FieldWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertField: <T = Field>(args: { where: FieldWhereUniqueInput, create: FieldCreateInput, update: FieldUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteField: <T = Field | null>(args: { where: FieldWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyFields: <T = BatchPayload>(args: { where?: FieldWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFieldInstance: <T = FieldInstance>(args: { data: FieldInstanceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateFieldInstance: <T = FieldInstance | null>(args: { data: FieldInstanceUpdateInput, where: FieldInstanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyFieldInstances: <T = BatchPayload>(args: { data: FieldInstanceUpdateManyMutationInput, where?: FieldInstanceWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFieldInstance: <T = FieldInstance>(args: { where: FieldInstanceWhereUniqueInput, create: FieldInstanceCreateInput, update: FieldInstanceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteFieldInstance: <T = FieldInstance | null>(args: { where: FieldInstanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyFieldInstances: <T = BatchPayload>(args: { where?: FieldInstanceWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
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
    createSource: <T = Source>(args: { data: SourceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateSource: <T = Source | null>(args: { data: SourceUpdateInput, where: SourceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManySources: <T = BatchPayload>(args: { data: SourceUpdateManyMutationInput, where?: SourceWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSource: <T = Source>(args: { where: SourceWhereUniqueInput, create: SourceCreateInput, update: SourceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteSource: <T = Source | null>(args: { where: SourceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManySources: <T = BatchPayload>(args: { where?: SourceWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
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
    disqualificationInstance: <T = DisqualificationInstanceSubscriptionPayload | null>(args: { where?: DisqualificationInstanceSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    field: <T = FieldSubscriptionPayload | null>(args: { where?: FieldSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    fieldInstance: <T = FieldInstanceSubscriptionPayload | null>(args: { where?: FieldInstanceSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    file: <T = FileSubscriptionPayload | null>(args: { where?: FileSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    invite: <T = InviteSubscriptionPayload | null>(args: { where?: InviteSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    job: <T = JobSubscriptionPayload | null>(args: { where?: JobSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    location: <T = LocationSubscriptionPayload | null>(args: { where?: LocationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    source: <T = SourceSubscriptionPayload | null>(args: { where?: SourceSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
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
  DisqualificationInstance: (where?: DisqualificationInstanceWhereInput) => Promise<boolean>
  Field: (where?: FieldWhereInput) => Promise<boolean>
  FieldInstance: (where?: FieldInstanceWhereInput) => Promise<boolean>
  File: (where?: FileWhereInput) => Promise<boolean>
  Invite: (where?: InviteWhereInput) => Promise<boolean>
  Job: (where?: JobWhereInput) => Promise<boolean>
  Location: (where?: LocationWhereInput) => Promise<boolean>
  Source: (where?: SourceWhereInput) => Promise<boolean>
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

type AggregateDisqualificationInstance {
  count: Int!
}

type AggregateField {
  count: Int!
}

type AggregateFieldInstance {
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

type AggregateSource {
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
  disqualification: DisqualificationInstance
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
  disqualification: DisqualificationInstanceCreateOneInput
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
  disqualification: DisqualificationInstanceCreateOneInput
  stage: StageCreateOneInput!
  job: JobCreateOneWithoutApplicationsInput!
}

input ApplicationCreateWithoutJobInput {
  type: ApplicationType!
  disqualification: DisqualificationInstanceCreateOneInput
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
  QUALIFIED
  DISQUALIFIED
}

input ApplicationUpdateInput {
  type: ApplicationType
  disqualification: DisqualificationInstanceUpdateOneInput
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
  disqualification: DisqualificationInstanceUpdateOneInput
  stage: StageUpdateOneRequiredInput
  job: JobUpdateOneRequiredWithoutApplicationsInput
}

input ApplicationUpdateWithoutJobDataInput {
  type: ApplicationType
  disqualification: DisqualificationInstanceUpdateOneInput
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
  disqualification: DisqualificationInstanceWhereInput
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
  firstName: String!
  lastName: String!
  emails: [String!]!
  phones: [String!]!
  links: [String!]!
  avatar: File
  company: String
  headline: String
  position: String
  resumesString: [String!]!
  resumesFile(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File!]
  coverLettersString: [String!]!
  coverLettersFile(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File!]
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
  sources(where: SourceWhereInput, orderBy: SourceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Source!]
  fields(where: FieldInstanceWhereInput, orderBy: FieldInstanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FieldInstance!]
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
  firstName: String!
  lastName: String!
  emails: CandidateCreateemailsInput
  phones: CandidateCreatephonesInput
  links: CandidateCreatelinksInput
  avatar: FileCreateOneInput
  company: String
  headline: String
  position: String
  resumesString: CandidateCreateresumesStringInput
  resumesFile: FileCreateManyInput
  coverLettersString: CandidateCreatecoverLettersStringInput
  coverLettersFile: FileCreateManyInput
  tags: TagCreateManyInput
  sources: SourceCreateManyInput
  fields: FieldInstanceCreateManyInput
  tasks: TaskCreateManyWithoutCandidateInput
  applications: ApplicationCreateManyWithoutCandidateInput
  comments: CommentCreateManyInput
}

input CandidateCreatelinksInput {
  set: [String!]
}

input CandidateCreateManyInput {
  create: [CandidateCreateInput!]
  connect: [CandidateWhereUniqueInput!]
}

input CandidateCreateOneWithoutApplicationsInput {
  create: CandidateCreateWithoutApplicationsInput
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

input CandidateCreateWithoutApplicationsInput {
  firstName: String!
  lastName: String!
  emails: CandidateCreateemailsInput
  phones: CandidateCreatephonesInput
  links: CandidateCreatelinksInput
  avatar: FileCreateOneInput
  company: String
  headline: String
  position: String
  resumesString: CandidateCreateresumesStringInput
  resumesFile: FileCreateManyInput
  coverLettersString: CandidateCreatecoverLettersStringInput
  coverLettersFile: FileCreateManyInput
  tags: TagCreateManyInput
  sources: SourceCreateManyInput
  fields: FieldInstanceCreateManyInput
  tasks: TaskCreateManyWithoutCandidateInput
  comments: CommentCreateManyInput
}

input CandidateCreateWithoutTasksInput {
  firstName: String!
  lastName: String!
  emails: CandidateCreateemailsInput
  phones: CandidateCreatephonesInput
  links: CandidateCreatelinksInput
  avatar: FileCreateOneInput
  company: String
  headline: String
  position: String
  resumesString: CandidateCreateresumesStringInput
  resumesFile: FileCreateManyInput
  coverLettersString: CandidateCreatecoverLettersStringInput
  coverLettersFile: FileCreateManyInput
  tags: TagCreateManyInput
  sources: SourceCreateManyInput
  fields: FieldInstanceCreateManyInput
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
  company_ASC
  company_DESC
  headline_ASC
  headline_DESC
  position_ASC
  position_DESC
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
  company: String
  headline: String
  position: String
  resumesString: [String!]!
  coverLettersString: [String!]!
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
  company: String
  company_not: String
  company_in: [String!]
  company_not_in: [String!]
  company_lt: String
  company_lte: String
  company_gt: String
  company_gte: String
  company_contains: String
  company_not_contains: String
  company_starts_with: String
  company_not_starts_with: String
  company_ends_with: String
  company_not_ends_with: String
  headline: String
  headline_not: String
  headline_in: [String!]
  headline_not_in: [String!]
  headline_lt: String
  headline_lte: String
  headline_gt: String
  headline_gte: String
  headline_contains: String
  headline_not_contains: String
  headline_starts_with: String
  headline_not_starts_with: String
  headline_ends_with: String
  headline_not_ends_with: String
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
  firstName: String
  lastName: String
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  avatar: FileUpdateOneInput
  company: String
  headline: String
  position: String
  resumesString: CandidateUpdateresumesStringInput
  resumesFile: FileUpdateManyInput
  coverLettersString: CandidateUpdatecoverLettersStringInput
  coverLettersFile: FileUpdateManyInput
  tags: TagUpdateManyInput
  sources: SourceUpdateManyInput
  fields: FieldInstanceUpdateManyInput
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
  avatar: FileUpdateOneInput
  company: String
  headline: String
  position: String
  resumesString: CandidateUpdateresumesStringInput
  resumesFile: FileUpdateManyInput
  coverLettersString: CandidateUpdatecoverLettersStringInput
  coverLettersFile: FileUpdateManyInput
  tags: TagUpdateManyInput
  sources: SourceUpdateManyInput
  fields: FieldInstanceUpdateManyInput
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
  company: String
  headline: String
  position: String
  resumesString: CandidateUpdateresumesStringInput
  coverLettersString: CandidateUpdatecoverLettersStringInput
}

input CandidateUpdateManyInput {
  create: [CandidateCreateInput!]
  update: [CandidateUpdateWithWhereUniqueNestedInput!]
  upsert: [CandidateUpsertWithWhereUniqueNestedInput!]
  delete: [CandidateWhereUniqueInput!]
  connect: [CandidateWhereUniqueInput!]
  disconnect: [CandidateWhereUniqueInput!]
  deleteMany: [CandidateScalarWhereInput!]
  updateMany: [CandidateUpdateManyWithWhereNestedInput!]
}

input CandidateUpdateManyMutationInput {
  firstName: String
  lastName: String
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  company: String
  headline: String
  position: String
  resumesString: CandidateUpdateresumesStringInput
  coverLettersString: CandidateUpdatecoverLettersStringInput
}

input CandidateUpdateManyWithWhereNestedInput {
  where: CandidateScalarWhereInput!
  data: CandidateUpdateManyDataInput!
}

input CandidateUpdateOneRequiredWithoutApplicationsInput {
  create: CandidateCreateWithoutApplicationsInput
  update: CandidateUpdateWithoutApplicationsDataInput
  upsert: CandidateUpsertWithoutApplicationsInput
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

input CandidateUpdateWithoutApplicationsDataInput {
  firstName: String
  lastName: String
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  avatar: FileUpdateOneInput
  company: String
  headline: String
  position: String
  resumesString: CandidateUpdateresumesStringInput
  resumesFile: FileUpdateManyInput
  coverLettersString: CandidateUpdatecoverLettersStringInput
  coverLettersFile: FileUpdateManyInput
  tags: TagUpdateManyInput
  sources: SourceUpdateManyInput
  fields: FieldInstanceUpdateManyInput
  tasks: TaskUpdateManyWithoutCandidateInput
  comments: CommentUpdateManyInput
}

input CandidateUpdateWithoutTasksDataInput {
  firstName: String
  lastName: String
  emails: CandidateUpdateemailsInput
  phones: CandidateUpdatephonesInput
  links: CandidateUpdatelinksInput
  avatar: FileUpdateOneInput
  company: String
  headline: String
  position: String
  resumesString: CandidateUpdateresumesStringInput
  resumesFile: FileUpdateManyInput
  coverLettersString: CandidateUpdatecoverLettersStringInput
  coverLettersFile: FileUpdateManyInput
  tags: TagUpdateManyInput
  sources: SourceUpdateManyInput
  fields: FieldInstanceUpdateManyInput
  applications: ApplicationUpdateManyWithoutCandidateInput
  comments: CommentUpdateManyInput
}

input CandidateUpdateWithWhereUniqueNestedInput {
  where: CandidateWhereUniqueInput!
  data: CandidateUpdateDataInput!
}

input CandidateUpsertWithoutApplicationsInput {
  update: CandidateUpdateWithoutApplicationsDataInput!
  create: CandidateCreateWithoutApplicationsInput!
}

input CandidateUpsertWithoutTasksInput {
  update: CandidateUpdateWithoutTasksDataInput!
  create: CandidateCreateWithoutTasksInput!
}

input CandidateUpsertWithWhereUniqueNestedInput {
  where: CandidateWhereUniqueInput!
  update: CandidateUpdateDataInput!
  create: CandidateCreateInput!
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
  company: String
  company_not: String
  company_in: [String!]
  company_not_in: [String!]
  company_lt: String
  company_lte: String
  company_gt: String
  company_gte: String
  company_contains: String
  company_not_contains: String
  company_starts_with: String
  company_not_starts_with: String
  company_ends_with: String
  company_not_ends_with: String
  headline: String
  headline_not: String
  headline_in: [String!]
  headline_not_in: [String!]
  headline_lt: String
  headline_lte: String
  headline_gt: String
  headline_gte: String
  headline_contains: String
  headline_not_contains: String
  headline_starts_with: String
  headline_not_starts_with: String
  headline_ends_with: String
  headline_not_ends_with: String
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
  resumesFile_every: FileWhereInput
  resumesFile_some: FileWhereInput
  resumesFile_none: FileWhereInput
  coverLettersFile_every: FileWhereInput
  coverLettersFile_some: FileWhereInput
  coverLettersFile_none: FileWhereInput
  tags_every: TagWhereInput
  tags_some: TagWhereInput
  tags_none: TagWhereInput
  sources_every: SourceWhereInput
  sources_some: SourceWhereInput
  sources_none: SourceWhereInput
  fields_every: FieldInstanceWhereInput
  fields_some: FieldInstanceWhereInput
  fields_none: FieldInstanceWhereInput
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

type DisqualificationInstance {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  disqualification: Disqualification!
  createdBy: User!
  content: String
}

type DisqualificationInstanceConnection {
  pageInfo: PageInfo!
  edges: [DisqualificationInstanceEdge]!
  aggregate: AggregateDisqualificationInstance!
}

input DisqualificationInstanceCreateInput {
  disqualification: DisqualificationCreateOneInput!
  createdBy: UserCreateOneInput!
  content: String
}

input DisqualificationInstanceCreateOneInput {
  create: DisqualificationInstanceCreateInput
  connect: DisqualificationInstanceWhereUniqueInput
}

type DisqualificationInstanceEdge {
  node: DisqualificationInstance!
  cursor: String!
}

enum DisqualificationInstanceOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  content_ASC
  content_DESC
}

type DisqualificationInstancePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  content: String
}

type DisqualificationInstanceSubscriptionPayload {
  mutation: MutationType!
  node: DisqualificationInstance
  updatedFields: [String!]
  previousValues: DisqualificationInstancePreviousValues
}

input DisqualificationInstanceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DisqualificationInstanceWhereInput
  AND: [DisqualificationInstanceSubscriptionWhereInput!]
  OR: [DisqualificationInstanceSubscriptionWhereInput!]
  NOT: [DisqualificationInstanceSubscriptionWhereInput!]
}

input DisqualificationInstanceUpdateDataInput {
  disqualification: DisqualificationUpdateOneRequiredInput
  createdBy: UserUpdateOneRequiredInput
  content: String
}

input DisqualificationInstanceUpdateInput {
  disqualification: DisqualificationUpdateOneRequiredInput
  createdBy: UserUpdateOneRequiredInput
  content: String
}

input DisqualificationInstanceUpdateManyMutationInput {
  content: String
}

input DisqualificationInstanceUpdateOneInput {
  create: DisqualificationInstanceCreateInput
  update: DisqualificationInstanceUpdateDataInput
  upsert: DisqualificationInstanceUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: DisqualificationInstanceWhereUniqueInput
}

input DisqualificationInstanceUpsertNestedInput {
  update: DisqualificationInstanceUpdateDataInput!
  create: DisqualificationInstanceCreateInput!
}

input DisqualificationInstanceWhereInput {
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
  AND: [DisqualificationInstanceWhereInput!]
  OR: [DisqualificationInstanceWhereInput!]
  NOT: [DisqualificationInstanceWhereInput!]
}

input DisqualificationInstanceWhereUniqueInput {
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

type Field {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  type: FieldType!
  label: String!
  description: String
}

type FieldConnection {
  pageInfo: PageInfo!
  edges: [FieldEdge]!
  aggregate: AggregateField!
}

input FieldCreateInput {
  type: FieldType!
  label: String!
  description: String
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

type FieldInstance {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  field: Field!
  value: String
}

type FieldInstanceConnection {
  pageInfo: PageInfo!
  edges: [FieldInstanceEdge]!
  aggregate: AggregateFieldInstance!
}

input FieldInstanceCreateInput {
  field: FieldCreateOneInput!
  value: String
}

input FieldInstanceCreateManyInput {
  create: [FieldInstanceCreateInput!]
  connect: [FieldInstanceWhereUniqueInput!]
}

type FieldInstanceEdge {
  node: FieldInstance!
  cursor: String!
}

enum FieldInstanceOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  value_ASC
  value_DESC
}

type FieldInstancePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  value: String
}

input FieldInstanceScalarWhereInput {
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
  AND: [FieldInstanceScalarWhereInput!]
  OR: [FieldInstanceScalarWhereInput!]
  NOT: [FieldInstanceScalarWhereInput!]
}

type FieldInstanceSubscriptionPayload {
  mutation: MutationType!
  node: FieldInstance
  updatedFields: [String!]
  previousValues: FieldInstancePreviousValues
}

input FieldInstanceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FieldInstanceWhereInput
  AND: [FieldInstanceSubscriptionWhereInput!]
  OR: [FieldInstanceSubscriptionWhereInput!]
  NOT: [FieldInstanceSubscriptionWhereInput!]
}

input FieldInstanceUpdateDataInput {
  field: FieldUpdateOneRequiredInput
  value: String
}

input FieldInstanceUpdateInput {
  field: FieldUpdateOneRequiredInput
  value: String
}

input FieldInstanceUpdateManyDataInput {
  value: String
}

input FieldInstanceUpdateManyInput {
  create: [FieldInstanceCreateInput!]
  update: [FieldInstanceUpdateWithWhereUniqueNestedInput!]
  upsert: [FieldInstanceUpsertWithWhereUniqueNestedInput!]
  delete: [FieldInstanceWhereUniqueInput!]
  connect: [FieldInstanceWhereUniqueInput!]
  disconnect: [FieldInstanceWhereUniqueInput!]
  deleteMany: [FieldInstanceScalarWhereInput!]
  updateMany: [FieldInstanceUpdateManyWithWhereNestedInput!]
}

input FieldInstanceUpdateManyMutationInput {
  value: String
}

input FieldInstanceUpdateManyWithWhereNestedInput {
  where: FieldInstanceScalarWhereInput!
  data: FieldInstanceUpdateManyDataInput!
}

input FieldInstanceUpdateWithWhereUniqueNestedInput {
  where: FieldInstanceWhereUniqueInput!
  data: FieldInstanceUpdateDataInput!
}

input FieldInstanceUpsertWithWhereUniqueNestedInput {
  where: FieldInstanceWhereUniqueInput!
  update: FieldInstanceUpdateDataInput!
  create: FieldInstanceCreateInput!
}

input FieldInstanceWhereInput {
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
  AND: [FieldInstanceWhereInput!]
  OR: [FieldInstanceWhereInput!]
  NOT: [FieldInstanceWhereInput!]
}

input FieldInstanceWhereUniqueInput {
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
  description_ASC
  description_DESC
}

type FieldPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  type: FieldType!
  label: String!
  description: String
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
  INT
  FLOAT
  TEXT
  PARAGRAPH
  BOOLEAN
  DATETIME
}

input FieldUpdateDataInput {
  type: FieldType
  label: String
  description: String
}

input FieldUpdateInput {
  type: FieldType
  label: String
  description: String
}

input FieldUpdateManyDataInput {
  type: FieldType
  label: String
  description: String
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
  description: String
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
  applications(where: ApplicationWhereInput, orderBy: ApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Application!]
  workflow: Workflow!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  type: JobType!
  department: String
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location!]
  name: String!
  excerpt: String
  companyDescription: String
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
  applications: ApplicationCreateManyWithoutJobInput
  workflow: WorkflowCreateOneInput!
  comments: CommentCreateManyInput
  type: JobType!
  department: String
  locations: LocationCreateManyInput
  name: String!
  excerpt: String
  companyDescription: String
  description: String
  requirements: String
}

input JobCreateManyWithoutWorkspaceInput {
  create: [JobCreateWithoutWorkspaceInput!]
  connect: [JobWhereUniqueInput!]
}

input JobCreateOneWithoutApplicationsInput {
  create: JobCreateWithoutApplicationsInput
  connect: JobWhereUniqueInput
}

input JobCreateWithoutApplicationsInput {
  workspace: WorkspaceCreateOneWithoutJobsInput!
  workflow: WorkflowCreateOneInput!
  comments: CommentCreateManyInput
  type: JobType!
  department: String
  locations: LocationCreateManyInput
  name: String!
  excerpt: String
  companyDescription: String
  description: String
  requirements: String
}

input JobCreateWithoutWorkspaceInput {
  applications: ApplicationCreateManyWithoutJobInput
  workflow: WorkflowCreateOneInput!
  comments: CommentCreateManyInput
  type: JobType!
  department: String
  locations: LocationCreateManyInput
  name: String!
  excerpt: String
  companyDescription: String
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
  excerpt_ASC
  excerpt_DESC
  companyDescription_ASC
  companyDescription_DESC
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
  excerpt: String
  companyDescription: String
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
  excerpt: String
  excerpt_not: String
  excerpt_in: [String!]
  excerpt_not_in: [String!]
  excerpt_lt: String
  excerpt_lte: String
  excerpt_gt: String
  excerpt_gte: String
  excerpt_contains: String
  excerpt_not_contains: String
  excerpt_starts_with: String
  excerpt_not_starts_with: String
  excerpt_ends_with: String
  excerpt_not_ends_with: String
  companyDescription: String
  companyDescription_not: String
  companyDescription_in: [String!]
  companyDescription_not_in: [String!]
  companyDescription_lt: String
  companyDescription_lte: String
  companyDescription_gt: String
  companyDescription_gte: String
  companyDescription_contains: String
  companyDescription_not_contains: String
  companyDescription_starts_with: String
  companyDescription_not_starts_with: String
  companyDescription_ends_with: String
  companyDescription_not_ends_with: String
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
  DRAFT
  PUBLISHED
  ARCHIVED
}

input JobUpdateInput {
  workspace: WorkspaceUpdateOneRequiredWithoutJobsInput
  applications: ApplicationUpdateManyWithoutJobInput
  workflow: WorkflowUpdateOneRequiredInput
  comments: CommentUpdateManyInput
  type: JobType
  department: String
  locations: LocationUpdateManyInput
  name: String
  excerpt: String
  companyDescription: String
  description: String
  requirements: String
}

input JobUpdateManyDataInput {
  type: JobType
  department: String
  name: String
  excerpt: String
  companyDescription: String
  description: String
  requirements: String
}

input JobUpdateManyMutationInput {
  type: JobType
  department: String
  name: String
  excerpt: String
  companyDescription: String
  description: String
  requirements: String
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

input JobUpdateWithoutApplicationsDataInput {
  workspace: WorkspaceUpdateOneRequiredWithoutJobsInput
  workflow: WorkflowUpdateOneRequiredInput
  comments: CommentUpdateManyInput
  type: JobType
  department: String
  locations: LocationUpdateManyInput
  name: String
  excerpt: String
  companyDescription: String
  description: String
  requirements: String
}

input JobUpdateWithoutWorkspaceDataInput {
  applications: ApplicationUpdateManyWithoutJobInput
  workflow: WorkflowUpdateOneRequiredInput
  comments: CommentUpdateManyInput
  type: JobType
  department: String
  locations: LocationUpdateManyInput
  name: String
  excerpt: String
  companyDescription: String
  description: String
  requirements: String
}

input JobUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: JobWhereUniqueInput!
  data: JobUpdateWithoutWorkspaceDataInput!
}

input JobUpsertWithoutApplicationsInput {
  update: JobUpdateWithoutApplicationsDataInput!
  create: JobCreateWithoutApplicationsInput!
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
  excerpt: String
  excerpt_not: String
  excerpt_in: [String!]
  excerpt_not_in: [String!]
  excerpt_lt: String
  excerpt_lte: String
  excerpt_gt: String
  excerpt_gte: String
  excerpt_contains: String
  excerpt_not_contains: String
  excerpt_starts_with: String
  excerpt_not_starts_with: String
  excerpt_ends_with: String
  excerpt_not_ends_with: String
  companyDescription: String
  companyDescription_not: String
  companyDescription_in: [String!]
  companyDescription_not_in: [String!]
  companyDescription_lt: String
  companyDescription_lte: String
  companyDescription_gt: String
  companyDescription_gte: String
  companyDescription_contains: String
  companyDescription_not_contains: String
  companyDescription_starts_with: String
  companyDescription_not_starts_with: String
  companyDescription_ends_with: String
  companyDescription_not_ends_with: String
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

scalar Json

type Location {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  country: String!
  region: String
  city: String!
  zip: String
}

type LocationConnection {
  pageInfo: PageInfo!
  edges: [LocationEdge]!
  aggregate: AggregateLocation!
}

input LocationCreateInput {
  country: String!
  region: String
  city: String!
  zip: String
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
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  country_ASC
  country_DESC
  region_ASC
  region_DESC
  city_ASC
  city_DESC
  zip_ASC
  zip_DESC
}

type LocationPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  country: String!
  region: String
  city: String!
  zip: String
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
  createDisqualificationInstance(data: DisqualificationInstanceCreateInput!): DisqualificationInstance!
  updateDisqualificationInstance(data: DisqualificationInstanceUpdateInput!, where: DisqualificationInstanceWhereUniqueInput!): DisqualificationInstance
  updateManyDisqualificationInstances(data: DisqualificationInstanceUpdateManyMutationInput!, where: DisqualificationInstanceWhereInput): BatchPayload!
  upsertDisqualificationInstance(where: DisqualificationInstanceWhereUniqueInput!, create: DisqualificationInstanceCreateInput!, update: DisqualificationInstanceUpdateInput!): DisqualificationInstance!
  deleteDisqualificationInstance(where: DisqualificationInstanceWhereUniqueInput!): DisqualificationInstance
  deleteManyDisqualificationInstances(where: DisqualificationInstanceWhereInput): BatchPayload!
  createField(data: FieldCreateInput!): Field!
  updateField(data: FieldUpdateInput!, where: FieldWhereUniqueInput!): Field
  updateManyFields(data: FieldUpdateManyMutationInput!, where: FieldWhereInput): BatchPayload!
  upsertField(where: FieldWhereUniqueInput!, create: FieldCreateInput!, update: FieldUpdateInput!): Field!
  deleteField(where: FieldWhereUniqueInput!): Field
  deleteManyFields(where: FieldWhereInput): BatchPayload!
  createFieldInstance(data: FieldInstanceCreateInput!): FieldInstance!
  updateFieldInstance(data: FieldInstanceUpdateInput!, where: FieldInstanceWhereUniqueInput!): FieldInstance
  updateManyFieldInstances(data: FieldInstanceUpdateManyMutationInput!, where: FieldInstanceWhereInput): BatchPayload!
  upsertFieldInstance(where: FieldInstanceWhereUniqueInput!, create: FieldInstanceCreateInput!, update: FieldInstanceUpdateInput!): FieldInstance!
  deleteFieldInstance(where: FieldInstanceWhereUniqueInput!): FieldInstance
  deleteManyFieldInstances(where: FieldInstanceWhereInput): BatchPayload!
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
  createSource(data: SourceCreateInput!): Source!
  updateSource(data: SourceUpdateInput!, where: SourceWhereUniqueInput!): Source
  updateManySources(data: SourceUpdateManyMutationInput!, where: SourceWhereInput): BatchPayload!
  upsertSource(where: SourceWhereUniqueInput!, create: SourceCreateInput!, update: SourceUpdateInput!): Source!
  deleteSource(where: SourceWhereUniqueInput!): Source
  deleteManySources(where: SourceWhereInput): BatchPayload!
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
  disqualificationInstance(where: DisqualificationInstanceWhereUniqueInput!): DisqualificationInstance
  disqualificationInstances(where: DisqualificationInstanceWhereInput, orderBy: DisqualificationInstanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [DisqualificationInstance]!
  disqualificationInstancesConnection(where: DisqualificationInstanceWhereInput, orderBy: DisqualificationInstanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DisqualificationInstanceConnection!
  field(where: FieldWhereUniqueInput!): Field
  fields(where: FieldWhereInput, orderBy: FieldOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Field]!
  fieldsConnection(where: FieldWhereInput, orderBy: FieldOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FieldConnection!
  fieldInstance(where: FieldInstanceWhereUniqueInput!): FieldInstance
  fieldInstances(where: FieldInstanceWhereInput, orderBy: FieldInstanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FieldInstance]!
  fieldInstancesConnection(where: FieldInstanceWhereInput, orderBy: FieldInstanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FieldInstanceConnection!
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
  source(where: SourceWhereUniqueInput!): Source
  sources(where: SourceWhereInput, orderBy: SourceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Source]!
  sourcesConnection(where: SourceWhereInput, orderBy: SourceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SourceConnection!
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

type Source {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  label: String!
  description: String
}

type SourceConnection {
  pageInfo: PageInfo!
  edges: [SourceEdge]!
  aggregate: AggregateSource!
}

input SourceCreateInput {
  label: String!
  description: String
}

input SourceCreateManyInput {
  create: [SourceCreateInput!]
  connect: [SourceWhereUniqueInput!]
}

type SourceEdge {
  node: Source!
  cursor: String!
}

enum SourceOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  label_ASC
  label_DESC
  description_ASC
  description_DESC
}

type SourcePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  label: String!
  description: String
}

input SourceScalarWhereInput {
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
  AND: [SourceScalarWhereInput!]
  OR: [SourceScalarWhereInput!]
  NOT: [SourceScalarWhereInput!]
}

type SourceSubscriptionPayload {
  mutation: MutationType!
  node: Source
  updatedFields: [String!]
  previousValues: SourcePreviousValues
}

input SourceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SourceWhereInput
  AND: [SourceSubscriptionWhereInput!]
  OR: [SourceSubscriptionWhereInput!]
  NOT: [SourceSubscriptionWhereInput!]
}

input SourceUpdateDataInput {
  label: String
  description: String
}

input SourceUpdateInput {
  label: String
  description: String
}

input SourceUpdateManyDataInput {
  label: String
  description: String
}

input SourceUpdateManyInput {
  create: [SourceCreateInput!]
  update: [SourceUpdateWithWhereUniqueNestedInput!]
  upsert: [SourceUpsertWithWhereUniqueNestedInput!]
  delete: [SourceWhereUniqueInput!]
  connect: [SourceWhereUniqueInput!]
  disconnect: [SourceWhereUniqueInput!]
  deleteMany: [SourceScalarWhereInput!]
  updateMany: [SourceUpdateManyWithWhereNestedInput!]
}

input SourceUpdateManyMutationInput {
  label: String
  description: String
}

input SourceUpdateManyWithWhereNestedInput {
  where: SourceScalarWhereInput!
  data: SourceUpdateManyDataInput!
}

input SourceUpdateWithWhereUniqueNestedInput {
  where: SourceWhereUniqueInput!
  data: SourceUpdateDataInput!
}

input SourceUpsertWithWhereUniqueNestedInput {
  where: SourceWhereUniqueInput!
  update: SourceUpdateDataInput!
  create: SourceCreateInput!
}

input SourceWhereInput {
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
  AND: [SourceWhereInput!]
  OR: [SourceWhereInput!]
  NOT: [SourceWhereInput!]
}

input SourceWhereUniqueInput {
  id: ID
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
  NEW
  PIPELINE
  FINAL
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
  disqualificationInstance(where: DisqualificationInstanceSubscriptionWhereInput): DisqualificationInstanceSubscriptionPayload
  field(where: FieldSubscriptionWhereInput): FieldSubscriptionPayload
  fieldInstance(where: FieldInstanceSubscriptionWhereInput): FieldInstanceSubscriptionPayload
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
  invite(where: InviteSubscriptionWhereInput): InviteSubscriptionPayload
  job(where: JobSubscriptionWhereInput): JobSubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  source(where: SourceSubscriptionWhereInput): SourceSubscriptionPayload
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
  description: String
}

type TagConnection {
  pageInfo: PageInfo!
  edges: [TagEdge]!
  aggregate: AggregateTag!
}

input TagCreateInput {
  label: String!
  description: String
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
  description_ASC
  description_DESC
}

type TagPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  label: String!
  description: String
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
  description: String
}

input TagUpdateInput {
  label: String
  description: String
}

input TagUpdateManyDataInput {
  label: String
  description: String
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
  description: String
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

input TaskCreateWithoutCandidateInput {
  owners: UserCreateManyWithoutTasksInput
  title: String
  description: String
  dueAt: DateTime
}

input TaskCreateWithoutOwnersInput {
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

input TaskUpdateInput {
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

input TaskUpdateManyWithWhereNestedInput {
  where: TaskScalarWhereInput!
  data: TaskUpdateManyDataInput!
}

input TaskUpdateWithoutCandidateDataInput {
  owners: UserUpdateManyWithoutTasksInput
  title: String
  description: String
  dueAt: DateTime
}

input TaskUpdateWithoutOwnersDataInput {
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
  settings: Json
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
  settings: Json
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

input UserCreateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutTasksInput {
  create: [UserCreateWithoutTasksInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutTasksInput {
  settings: Json
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
  settings_ASC
  settings_DESC
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
  settings: Json
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
  settings: Json
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
  settings: Json
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
  settings: Json
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
}

input UserUpdateManyInput {
  create: [UserCreateInput!]
  update: [UserUpdateWithWhereUniqueNestedInput!]
  upsert: [UserUpsertWithWhereUniqueNestedInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyMutationInput {
  settings: Json
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
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

input UserUpdateWithoutTasksDataInput {
  settings: Json
  firstName: String
  lastName: String
  email: String
  username: String
  lastLogin: DateTime
  deletedAt: DateTime
  position: String
  avatar: FileUpdateOneInput
}

input UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateDataInput!
}

input UserUpdateWithWhereUniqueWithoutTasksInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutTasksDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithWhereUniqueWithoutTasksInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutTasksDataInput!
  create: UserCreateWithoutTasksInput!
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
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  jobs(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Job!]
  candidates(where: CandidateWhereInput, orderBy: CandidateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Candidate!]
  settings: Json
  workflows(where: WorkflowWhereInput, orderBy: WorkflowOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Workflow!]
  invites(where: InviteWhereInput, orderBy: InviteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invite!]
  name: String!
}

type WorkspaceConnection {
  pageInfo: PageInfo!
  edges: [WorkspaceEdge]!
  aggregate: AggregateWorkspace!
}

input WorkspaceCreateInput {
  users: UserCreateManyInput
  jobs: JobCreateManyWithoutWorkspaceInput
  candidates: CandidateCreateManyInput
  settings: Json
  workflows: WorkflowCreateManyInput
  invites: InviteCreateManyInput
  name: String!
}

input WorkspaceCreateOneWithoutJobsInput {
  create: WorkspaceCreateWithoutJobsInput
  connect: WorkspaceWhereUniqueInput
}

input WorkspaceCreateWithoutJobsInput {
  users: UserCreateManyInput
  candidates: CandidateCreateManyInput
  settings: Json
  workflows: WorkflowCreateManyInput
  invites: InviteCreateManyInput
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
  settings_ASC
  settings_DESC
  name_ASC
  name_DESC
}

type WorkspacePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  settings: Json
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
  users: UserUpdateManyInput
  jobs: JobUpdateManyWithoutWorkspaceInput
  candidates: CandidateUpdateManyInput
  settings: Json
  workflows: WorkflowUpdateManyInput
  invites: InviteUpdateManyInput
  name: String
}

input WorkspaceUpdateManyMutationInput {
  settings: Json
  name: String
}

input WorkspaceUpdateOneRequiredWithoutJobsInput {
  create: WorkspaceCreateWithoutJobsInput
  update: WorkspaceUpdateWithoutJobsDataInput
  upsert: WorkspaceUpsertWithoutJobsInput
  connect: WorkspaceWhereUniqueInput
}

input WorkspaceUpdateWithoutJobsDataInput {
  users: UserUpdateManyInput
  candidates: CandidateUpdateManyInput
  settings: Json
  workflows: WorkflowUpdateManyInput
  invites: InviteUpdateManyInput
  name: String
}

input WorkspaceUpsertWithoutJobsInput {
  update: WorkspaceUpdateWithoutJobsDataInput!
  create: WorkspaceCreateWithoutJobsInput!
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
  invites_every: InviteWhereInput
  invites_some: InviteWhereInput
  invites_none: InviteWhereInput
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

export type ApplicationType =   'QUALIFIED' |
  'DISQUALIFIED'

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
  'company_ASC' |
  'company_DESC' |
  'headline_ASC' |
  'headline_DESC' |
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

export type DisqualificationInstanceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'content_ASC' |
  'content_DESC'

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

export type FieldInstanceOrderByInput =   'id_ASC' |
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
  'label_DESC' |
  'description_ASC' |
  'description_DESC'

export type FieldType =   'INT' |
  'FLOAT' |
  'TEXT' |
  'PARAGRAPH' |
  'BOOLEAN' |
  'DATETIME'

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
  'excerpt_ASC' |
  'excerpt_DESC' |
  'companyDescription_ASC' |
  'companyDescription_DESC' |
  'description_ASC' |
  'description_DESC' |
  'requirements_ASC' |
  'requirements_DESC'

export type JobType =   'DRAFT' |
  'PUBLISHED' |
  'ARCHIVED'

export type LocationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'country_ASC' |
  'country_DESC' |
  'region_ASC' |
  'region_DESC' |
  'city_ASC' |
  'city_DESC' |
  'zip_ASC' |
  'zip_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type SourceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'label_ASC' |
  'label_DESC' |
  'description_ASC' |
  'description_DESC'

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

export type StageType =   'NEW' |
  'PIPELINE' |
  'FINAL'

export type TagOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'label_ASC' |
  'label_DESC' |
  'description_ASC' |
  'description_DESC'

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
  'settings_ASC' |
  'settings_DESC' |
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
  'settings_ASC' |
  'settings_DESC' |
  'name_ASC' |
  'name_DESC'

export interface ApplicationCreateInput {
  type: ApplicationType
  disqualification?: DisqualificationInstanceCreateOneInput | null
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
  disqualification?: DisqualificationInstanceCreateOneInput | null
  stage: StageCreateOneInput
  job: JobCreateOneWithoutApplicationsInput
}

export interface ApplicationCreateWithoutJobInput {
  type: ApplicationType
  disqualification?: DisqualificationInstanceCreateOneInput | null
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
  disqualification?: DisqualificationInstanceUpdateOneInput | null
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
  disqualification?: DisqualificationInstanceUpdateOneInput | null
  stage?: StageUpdateOneRequiredInput | null
  job?: JobUpdateOneRequiredWithoutApplicationsInput | null
}

export interface ApplicationUpdateWithoutJobDataInput {
  type?: ApplicationType | null
  disqualification?: DisqualificationInstanceUpdateOneInput | null
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
  disqualification?: DisqualificationInstanceWhereInput | null
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
  firstName: String
  lastName: String
  emails?: CandidateCreateemailsInput | null
  phones?: CandidateCreatephonesInput | null
  links?: CandidateCreatelinksInput | null
  avatar?: FileCreateOneInput | null
  company?: String | null
  headline?: String | null
  position?: String | null
  resumesString?: CandidateCreateresumesStringInput | null
  resumesFile?: FileCreateManyInput | null
  coverLettersString?: CandidateCreatecoverLettersStringInput | null
  coverLettersFile?: FileCreateManyInput | null
  tags?: TagCreateManyInput | null
  sources?: SourceCreateManyInput | null
  fields?: FieldInstanceCreateManyInput | null
  tasks?: TaskCreateManyWithoutCandidateInput | null
  applications?: ApplicationCreateManyWithoutCandidateInput | null
  comments?: CommentCreateManyInput | null
}

export interface CandidateCreatelinksInput {
  set?: String[] | String | null
}

export interface CandidateCreateManyInput {
  create?: CandidateCreateInput[] | CandidateCreateInput | null
  connect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput | null
}

export interface CandidateCreateOneWithoutApplicationsInput {
  create?: CandidateCreateWithoutApplicationsInput | null
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

export interface CandidateCreateWithoutApplicationsInput {
  firstName: String
  lastName: String
  emails?: CandidateCreateemailsInput | null
  phones?: CandidateCreatephonesInput | null
  links?: CandidateCreatelinksInput | null
  avatar?: FileCreateOneInput | null
  company?: String | null
  headline?: String | null
  position?: String | null
  resumesString?: CandidateCreateresumesStringInput | null
  resumesFile?: FileCreateManyInput | null
  coverLettersString?: CandidateCreatecoverLettersStringInput | null
  coverLettersFile?: FileCreateManyInput | null
  tags?: TagCreateManyInput | null
  sources?: SourceCreateManyInput | null
  fields?: FieldInstanceCreateManyInput | null
  tasks?: TaskCreateManyWithoutCandidateInput | null
  comments?: CommentCreateManyInput | null
}

export interface CandidateCreateWithoutTasksInput {
  firstName: String
  lastName: String
  emails?: CandidateCreateemailsInput | null
  phones?: CandidateCreatephonesInput | null
  links?: CandidateCreatelinksInput | null
  avatar?: FileCreateOneInput | null
  company?: String | null
  headline?: String | null
  position?: String | null
  resumesString?: CandidateCreateresumesStringInput | null
  resumesFile?: FileCreateManyInput | null
  coverLettersString?: CandidateCreatecoverLettersStringInput | null
  coverLettersFile?: FileCreateManyInput | null
  tags?: TagCreateManyInput | null
  sources?: SourceCreateManyInput | null
  fields?: FieldInstanceCreateManyInput | null
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
  company?: String | null
  company_not?: String | null
  company_in?: String[] | String | null
  company_not_in?: String[] | String | null
  company_lt?: String | null
  company_lte?: String | null
  company_gt?: String | null
  company_gte?: String | null
  company_contains?: String | null
  company_not_contains?: String | null
  company_starts_with?: String | null
  company_not_starts_with?: String | null
  company_ends_with?: String | null
  company_not_ends_with?: String | null
  headline?: String | null
  headline_not?: String | null
  headline_in?: String[] | String | null
  headline_not_in?: String[] | String | null
  headline_lt?: String | null
  headline_lte?: String | null
  headline_gt?: String | null
  headline_gte?: String | null
  headline_contains?: String | null
  headline_not_contains?: String | null
  headline_starts_with?: String | null
  headline_not_starts_with?: String | null
  headline_ends_with?: String | null
  headline_not_ends_with?: String | null
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
  firstName?: String | null
  lastName?: String | null
  emails?: CandidateUpdateemailsInput | null
  phones?: CandidateUpdatephonesInput | null
  links?: CandidateUpdatelinksInput | null
  avatar?: FileUpdateOneInput | null
  company?: String | null
  headline?: String | null
  position?: String | null
  resumesString?: CandidateUpdateresumesStringInput | null
  resumesFile?: FileUpdateManyInput | null
  coverLettersString?: CandidateUpdatecoverLettersStringInput | null
  coverLettersFile?: FileUpdateManyInput | null
  tags?: TagUpdateManyInput | null
  sources?: SourceUpdateManyInput | null
  fields?: FieldInstanceUpdateManyInput | null
  tasks?: TaskUpdateManyWithoutCandidateInput | null
  applications?: ApplicationUpdateManyWithoutCandidateInput | null
  comments?: CommentUpdateManyInput | null
}

export interface CandidateUpdateemailsInput {
  set?: String[] | String | null
}

export interface CandidateUpdateInput {
  firstName?: String | null
  lastName?: String | null
  emails?: CandidateUpdateemailsInput | null
  phones?: CandidateUpdatephonesInput | null
  links?: CandidateUpdatelinksInput | null
  avatar?: FileUpdateOneInput | null
  company?: String | null
  headline?: String | null
  position?: String | null
  resumesString?: CandidateUpdateresumesStringInput | null
  resumesFile?: FileUpdateManyInput | null
  coverLettersString?: CandidateUpdatecoverLettersStringInput | null
  coverLettersFile?: FileUpdateManyInput | null
  tags?: TagUpdateManyInput | null
  sources?: SourceUpdateManyInput | null
  fields?: FieldInstanceUpdateManyInput | null
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
  company?: String | null
  headline?: String | null
  position?: String | null
  resumesString?: CandidateUpdateresumesStringInput | null
  coverLettersString?: CandidateUpdatecoverLettersStringInput | null
}

export interface CandidateUpdateManyInput {
  create?: CandidateCreateInput[] | CandidateCreateInput | null
  update?: CandidateUpdateWithWhereUniqueNestedInput[] | CandidateUpdateWithWhereUniqueNestedInput | null
  upsert?: CandidateUpsertWithWhereUniqueNestedInput[] | CandidateUpsertWithWhereUniqueNestedInput | null
  delete?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput | null
  connect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput | null
  disconnect?: CandidateWhereUniqueInput[] | CandidateWhereUniqueInput | null
  deleteMany?: CandidateScalarWhereInput[] | CandidateScalarWhereInput | null
  updateMany?: CandidateUpdateManyWithWhereNestedInput[] | CandidateUpdateManyWithWhereNestedInput | null
}

export interface CandidateUpdateManyMutationInput {
  firstName?: String | null
  lastName?: String | null
  emails?: CandidateUpdateemailsInput | null
  phones?: CandidateUpdatephonesInput | null
  links?: CandidateUpdatelinksInput | null
  company?: String | null
  headline?: String | null
  position?: String | null
  resumesString?: CandidateUpdateresumesStringInput | null
  coverLettersString?: CandidateUpdatecoverLettersStringInput | null
}

export interface CandidateUpdateManyWithWhereNestedInput {
  where: CandidateScalarWhereInput
  data: CandidateUpdateManyDataInput
}

export interface CandidateUpdateOneRequiredWithoutApplicationsInput {
  create?: CandidateCreateWithoutApplicationsInput | null
  update?: CandidateUpdateWithoutApplicationsDataInput | null
  upsert?: CandidateUpsertWithoutApplicationsInput | null
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

export interface CandidateUpdateWithoutApplicationsDataInput {
  firstName?: String | null
  lastName?: String | null
  emails?: CandidateUpdateemailsInput | null
  phones?: CandidateUpdatephonesInput | null
  links?: CandidateUpdatelinksInput | null
  avatar?: FileUpdateOneInput | null
  company?: String | null
  headline?: String | null
  position?: String | null
  resumesString?: CandidateUpdateresumesStringInput | null
  resumesFile?: FileUpdateManyInput | null
  coverLettersString?: CandidateUpdatecoverLettersStringInput | null
  coverLettersFile?: FileUpdateManyInput | null
  tags?: TagUpdateManyInput | null
  sources?: SourceUpdateManyInput | null
  fields?: FieldInstanceUpdateManyInput | null
  tasks?: TaskUpdateManyWithoutCandidateInput | null
  comments?: CommentUpdateManyInput | null
}

export interface CandidateUpdateWithoutTasksDataInput {
  firstName?: String | null
  lastName?: String | null
  emails?: CandidateUpdateemailsInput | null
  phones?: CandidateUpdatephonesInput | null
  links?: CandidateUpdatelinksInput | null
  avatar?: FileUpdateOneInput | null
  company?: String | null
  headline?: String | null
  position?: String | null
  resumesString?: CandidateUpdateresumesStringInput | null
  resumesFile?: FileUpdateManyInput | null
  coverLettersString?: CandidateUpdatecoverLettersStringInput | null
  coverLettersFile?: FileUpdateManyInput | null
  tags?: TagUpdateManyInput | null
  sources?: SourceUpdateManyInput | null
  fields?: FieldInstanceUpdateManyInput | null
  applications?: ApplicationUpdateManyWithoutCandidateInput | null
  comments?: CommentUpdateManyInput | null
}

export interface CandidateUpdateWithWhereUniqueNestedInput {
  where: CandidateWhereUniqueInput
  data: CandidateUpdateDataInput
}

export interface CandidateUpsertWithoutApplicationsInput {
  update: CandidateUpdateWithoutApplicationsDataInput
  create: CandidateCreateWithoutApplicationsInput
}

export interface CandidateUpsertWithoutTasksInput {
  update: CandidateUpdateWithoutTasksDataInput
  create: CandidateCreateWithoutTasksInput
}

export interface CandidateUpsertWithWhereUniqueNestedInput {
  where: CandidateWhereUniqueInput
  update: CandidateUpdateDataInput
  create: CandidateCreateInput
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
  company?: String | null
  company_not?: String | null
  company_in?: String[] | String | null
  company_not_in?: String[] | String | null
  company_lt?: String | null
  company_lte?: String | null
  company_gt?: String | null
  company_gte?: String | null
  company_contains?: String | null
  company_not_contains?: String | null
  company_starts_with?: String | null
  company_not_starts_with?: String | null
  company_ends_with?: String | null
  company_not_ends_with?: String | null
  headline?: String | null
  headline_not?: String | null
  headline_in?: String[] | String | null
  headline_not_in?: String[] | String | null
  headline_lt?: String | null
  headline_lte?: String | null
  headline_gt?: String | null
  headline_gte?: String | null
  headline_contains?: String | null
  headline_not_contains?: String | null
  headline_starts_with?: String | null
  headline_not_starts_with?: String | null
  headline_ends_with?: String | null
  headline_not_ends_with?: String | null
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
  resumesFile_every?: FileWhereInput | null
  resumesFile_some?: FileWhereInput | null
  resumesFile_none?: FileWhereInput | null
  coverLettersFile_every?: FileWhereInput | null
  coverLettersFile_some?: FileWhereInput | null
  coverLettersFile_none?: FileWhereInput | null
  tags_every?: TagWhereInput | null
  tags_some?: TagWhereInput | null
  tags_none?: TagWhereInput | null
  sources_every?: SourceWhereInput | null
  sources_some?: SourceWhereInput | null
  sources_none?: SourceWhereInput | null
  fields_every?: FieldInstanceWhereInput | null
  fields_some?: FieldInstanceWhereInput | null
  fields_none?: FieldInstanceWhereInput | null
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

export interface DisqualificationInstanceCreateInput {
  disqualification: DisqualificationCreateOneInput
  createdBy: UserCreateOneInput
  content?: String | null
}

export interface DisqualificationInstanceCreateOneInput {
  create?: DisqualificationInstanceCreateInput | null
  connect?: DisqualificationInstanceWhereUniqueInput | null
}

export interface DisqualificationInstanceSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: DisqualificationInstanceWhereInput | null
  AND?: DisqualificationInstanceSubscriptionWhereInput[] | DisqualificationInstanceSubscriptionWhereInput | null
  OR?: DisqualificationInstanceSubscriptionWhereInput[] | DisqualificationInstanceSubscriptionWhereInput | null
  NOT?: DisqualificationInstanceSubscriptionWhereInput[] | DisqualificationInstanceSubscriptionWhereInput | null
}

export interface DisqualificationInstanceUpdateDataInput {
  disqualification?: DisqualificationUpdateOneRequiredInput | null
  createdBy?: UserUpdateOneRequiredInput | null
  content?: String | null
}

export interface DisqualificationInstanceUpdateInput {
  disqualification?: DisqualificationUpdateOneRequiredInput | null
  createdBy?: UserUpdateOneRequiredInput | null
  content?: String | null
}

export interface DisqualificationInstanceUpdateManyMutationInput {
  content?: String | null
}

export interface DisqualificationInstanceUpdateOneInput {
  create?: DisqualificationInstanceCreateInput | null
  update?: DisqualificationInstanceUpdateDataInput | null
  upsert?: DisqualificationInstanceUpsertNestedInput | null
  delete?: Boolean | null
  disconnect?: Boolean | null
  connect?: DisqualificationInstanceWhereUniqueInput | null
}

export interface DisqualificationInstanceUpsertNestedInput {
  update: DisqualificationInstanceUpdateDataInput
  create: DisqualificationInstanceCreateInput
}

export interface DisqualificationInstanceWhereInput {
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
  AND?: DisqualificationInstanceWhereInput[] | DisqualificationInstanceWhereInput | null
  OR?: DisqualificationInstanceWhereInput[] | DisqualificationInstanceWhereInput | null
  NOT?: DisqualificationInstanceWhereInput[] | DisqualificationInstanceWhereInput | null
}

export interface DisqualificationInstanceWhereUniqueInput {
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

export interface FieldCreateInput {
  type: FieldType
  label: String
  description?: String | null
}

export interface FieldCreateManyInput {
  create?: FieldCreateInput[] | FieldCreateInput | null
  connect?: FieldWhereUniqueInput[] | FieldWhereUniqueInput | null
}

export interface FieldCreateOneInput {
  create?: FieldCreateInput | null
  connect?: FieldWhereUniqueInput | null
}

export interface FieldInstanceCreateInput {
  field: FieldCreateOneInput
  value?: String | null
}

export interface FieldInstanceCreateManyInput {
  create?: FieldInstanceCreateInput[] | FieldInstanceCreateInput | null
  connect?: FieldInstanceWhereUniqueInput[] | FieldInstanceWhereUniqueInput | null
}

export interface FieldInstanceScalarWhereInput {
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
  AND?: FieldInstanceScalarWhereInput[] | FieldInstanceScalarWhereInput | null
  OR?: FieldInstanceScalarWhereInput[] | FieldInstanceScalarWhereInput | null
  NOT?: FieldInstanceScalarWhereInput[] | FieldInstanceScalarWhereInput | null
}

export interface FieldInstanceSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: FieldInstanceWhereInput | null
  AND?: FieldInstanceSubscriptionWhereInput[] | FieldInstanceSubscriptionWhereInput | null
  OR?: FieldInstanceSubscriptionWhereInput[] | FieldInstanceSubscriptionWhereInput | null
  NOT?: FieldInstanceSubscriptionWhereInput[] | FieldInstanceSubscriptionWhereInput | null
}

export interface FieldInstanceUpdateDataInput {
  field?: FieldUpdateOneRequiredInput | null
  value?: String | null
}

export interface FieldInstanceUpdateInput {
  field?: FieldUpdateOneRequiredInput | null
  value?: String | null
}

export interface FieldInstanceUpdateManyDataInput {
  value?: String | null
}

export interface FieldInstanceUpdateManyInput {
  create?: FieldInstanceCreateInput[] | FieldInstanceCreateInput | null
  update?: FieldInstanceUpdateWithWhereUniqueNestedInput[] | FieldInstanceUpdateWithWhereUniqueNestedInput | null
  upsert?: FieldInstanceUpsertWithWhereUniqueNestedInput[] | FieldInstanceUpsertWithWhereUniqueNestedInput | null
  delete?: FieldInstanceWhereUniqueInput[] | FieldInstanceWhereUniqueInput | null
  connect?: FieldInstanceWhereUniqueInput[] | FieldInstanceWhereUniqueInput | null
  disconnect?: FieldInstanceWhereUniqueInput[] | FieldInstanceWhereUniqueInput | null
  deleteMany?: FieldInstanceScalarWhereInput[] | FieldInstanceScalarWhereInput | null
  updateMany?: FieldInstanceUpdateManyWithWhereNestedInput[] | FieldInstanceUpdateManyWithWhereNestedInput | null
}

export interface FieldInstanceUpdateManyMutationInput {
  value?: String | null
}

export interface FieldInstanceUpdateManyWithWhereNestedInput {
  where: FieldInstanceScalarWhereInput
  data: FieldInstanceUpdateManyDataInput
}

export interface FieldInstanceUpdateWithWhereUniqueNestedInput {
  where: FieldInstanceWhereUniqueInput
  data: FieldInstanceUpdateDataInput
}

export interface FieldInstanceUpsertWithWhereUniqueNestedInput {
  where: FieldInstanceWhereUniqueInput
  update: FieldInstanceUpdateDataInput
  create: FieldInstanceCreateInput
}

export interface FieldInstanceWhereInput {
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
  AND?: FieldInstanceWhereInput[] | FieldInstanceWhereInput | null
  OR?: FieldInstanceWhereInput[] | FieldInstanceWhereInput | null
  NOT?: FieldInstanceWhereInput[] | FieldInstanceWhereInput | null
}

export interface FieldInstanceWhereUniqueInput {
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
  description?: String | null
}

export interface FieldUpdateInput {
  type?: FieldType | null
  label?: String | null
  description?: String | null
}

export interface FieldUpdateManyDataInput {
  type?: FieldType | null
  label?: String | null
  description?: String | null
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
  description?: String | null
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
  applications?: ApplicationCreateManyWithoutJobInput | null
  workflow: WorkflowCreateOneInput
  comments?: CommentCreateManyInput | null
  type: JobType
  department?: String | null
  locations?: LocationCreateManyInput | null
  name: String
  excerpt?: String | null
  companyDescription?: String | null
  description?: String | null
  requirements?: String | null
}

export interface JobCreateManyWithoutWorkspaceInput {
  create?: JobCreateWithoutWorkspaceInput[] | JobCreateWithoutWorkspaceInput | null
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
}

export interface JobCreateOneWithoutApplicationsInput {
  create?: JobCreateWithoutApplicationsInput | null
  connect?: JobWhereUniqueInput | null
}

export interface JobCreateWithoutApplicationsInput {
  workspace: WorkspaceCreateOneWithoutJobsInput
  workflow: WorkflowCreateOneInput
  comments?: CommentCreateManyInput | null
  type: JobType
  department?: String | null
  locations?: LocationCreateManyInput | null
  name: String
  excerpt?: String | null
  companyDescription?: String | null
  description?: String | null
  requirements?: String | null
}

export interface JobCreateWithoutWorkspaceInput {
  applications?: ApplicationCreateManyWithoutJobInput | null
  workflow: WorkflowCreateOneInput
  comments?: CommentCreateManyInput | null
  type: JobType
  department?: String | null
  locations?: LocationCreateManyInput | null
  name: String
  excerpt?: String | null
  companyDescription?: String | null
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
  excerpt?: String | null
  excerpt_not?: String | null
  excerpt_in?: String[] | String | null
  excerpt_not_in?: String[] | String | null
  excerpt_lt?: String | null
  excerpt_lte?: String | null
  excerpt_gt?: String | null
  excerpt_gte?: String | null
  excerpt_contains?: String | null
  excerpt_not_contains?: String | null
  excerpt_starts_with?: String | null
  excerpt_not_starts_with?: String | null
  excerpt_ends_with?: String | null
  excerpt_not_ends_with?: String | null
  companyDescription?: String | null
  companyDescription_not?: String | null
  companyDescription_in?: String[] | String | null
  companyDescription_not_in?: String[] | String | null
  companyDescription_lt?: String | null
  companyDescription_lte?: String | null
  companyDescription_gt?: String | null
  companyDescription_gte?: String | null
  companyDescription_contains?: String | null
  companyDescription_not_contains?: String | null
  companyDescription_starts_with?: String | null
  companyDescription_not_starts_with?: String | null
  companyDescription_ends_with?: String | null
  companyDescription_not_ends_with?: String | null
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
  applications?: ApplicationUpdateManyWithoutJobInput | null
  workflow?: WorkflowUpdateOneRequiredInput | null
  comments?: CommentUpdateManyInput | null
  type?: JobType | null
  department?: String | null
  locations?: LocationUpdateManyInput | null
  name?: String | null
  excerpt?: String | null
  companyDescription?: String | null
  description?: String | null
  requirements?: String | null
}

export interface JobUpdateManyDataInput {
  type?: JobType | null
  department?: String | null
  name?: String | null
  excerpt?: String | null
  companyDescription?: String | null
  description?: String | null
  requirements?: String | null
}

export interface JobUpdateManyMutationInput {
  type?: JobType | null
  department?: String | null
  name?: String | null
  excerpt?: String | null
  companyDescription?: String | null
  description?: String | null
  requirements?: String | null
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

export interface JobUpdateWithoutApplicationsDataInput {
  workspace?: WorkspaceUpdateOneRequiredWithoutJobsInput | null
  workflow?: WorkflowUpdateOneRequiredInput | null
  comments?: CommentUpdateManyInput | null
  type?: JobType | null
  department?: String | null
  locations?: LocationUpdateManyInput | null
  name?: String | null
  excerpt?: String | null
  companyDescription?: String | null
  description?: String | null
  requirements?: String | null
}

export interface JobUpdateWithoutWorkspaceDataInput {
  applications?: ApplicationUpdateManyWithoutJobInput | null
  workflow?: WorkflowUpdateOneRequiredInput | null
  comments?: CommentUpdateManyInput | null
  type?: JobType | null
  department?: String | null
  locations?: LocationUpdateManyInput | null
  name?: String | null
  excerpt?: String | null
  companyDescription?: String | null
  description?: String | null
  requirements?: String | null
}

export interface JobUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: JobWhereUniqueInput
  data: JobUpdateWithoutWorkspaceDataInput
}

export interface JobUpsertWithoutApplicationsInput {
  update: JobUpdateWithoutApplicationsDataInput
  create: JobCreateWithoutApplicationsInput
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
  excerpt?: String | null
  excerpt_not?: String | null
  excerpt_in?: String[] | String | null
  excerpt_not_in?: String[] | String | null
  excerpt_lt?: String | null
  excerpt_lte?: String | null
  excerpt_gt?: String | null
  excerpt_gte?: String | null
  excerpt_contains?: String | null
  excerpt_not_contains?: String | null
  excerpt_starts_with?: String | null
  excerpt_not_starts_with?: String | null
  excerpt_ends_with?: String | null
  excerpt_not_ends_with?: String | null
  companyDescription?: String | null
  companyDescription_not?: String | null
  companyDescription_in?: String[] | String | null
  companyDescription_not_in?: String[] | String | null
  companyDescription_lt?: String | null
  companyDescription_lte?: String | null
  companyDescription_gt?: String | null
  companyDescription_gte?: String | null
  companyDescription_contains?: String | null
  companyDescription_not_contains?: String | null
  companyDescription_starts_with?: String | null
  companyDescription_not_starts_with?: String | null
  companyDescription_ends_with?: String | null
  companyDescription_not_ends_with?: String | null
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
  region?: String | null
  city: String
  zip?: String | null
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

export interface SourceCreateInput {
  label: String
  description?: String | null
}

export interface SourceCreateManyInput {
  create?: SourceCreateInput[] | SourceCreateInput | null
  connect?: SourceWhereUniqueInput[] | SourceWhereUniqueInput | null
}

export interface SourceScalarWhereInput {
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
  AND?: SourceScalarWhereInput[] | SourceScalarWhereInput | null
  OR?: SourceScalarWhereInput[] | SourceScalarWhereInput | null
  NOT?: SourceScalarWhereInput[] | SourceScalarWhereInput | null
}

export interface SourceSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: SourceWhereInput | null
  AND?: SourceSubscriptionWhereInput[] | SourceSubscriptionWhereInput | null
  OR?: SourceSubscriptionWhereInput[] | SourceSubscriptionWhereInput | null
  NOT?: SourceSubscriptionWhereInput[] | SourceSubscriptionWhereInput | null
}

export interface SourceUpdateDataInput {
  label?: String | null
  description?: String | null
}

export interface SourceUpdateInput {
  label?: String | null
  description?: String | null
}

export interface SourceUpdateManyDataInput {
  label?: String | null
  description?: String | null
}

export interface SourceUpdateManyInput {
  create?: SourceCreateInput[] | SourceCreateInput | null
  update?: SourceUpdateWithWhereUniqueNestedInput[] | SourceUpdateWithWhereUniqueNestedInput | null
  upsert?: SourceUpsertWithWhereUniqueNestedInput[] | SourceUpsertWithWhereUniqueNestedInput | null
  delete?: SourceWhereUniqueInput[] | SourceWhereUniqueInput | null
  connect?: SourceWhereUniqueInput[] | SourceWhereUniqueInput | null
  disconnect?: SourceWhereUniqueInput[] | SourceWhereUniqueInput | null
  deleteMany?: SourceScalarWhereInput[] | SourceScalarWhereInput | null
  updateMany?: SourceUpdateManyWithWhereNestedInput[] | SourceUpdateManyWithWhereNestedInput | null
}

export interface SourceUpdateManyMutationInput {
  label?: String | null
  description?: String | null
}

export interface SourceUpdateManyWithWhereNestedInput {
  where: SourceScalarWhereInput
  data: SourceUpdateManyDataInput
}

export interface SourceUpdateWithWhereUniqueNestedInput {
  where: SourceWhereUniqueInput
  data: SourceUpdateDataInput
}

export interface SourceUpsertWithWhereUniqueNestedInput {
  where: SourceWhereUniqueInput
  update: SourceUpdateDataInput
  create: SourceCreateInput
}

export interface SourceWhereInput {
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
  AND?: SourceWhereInput[] | SourceWhereInput | null
  OR?: SourceWhereInput[] | SourceWhereInput | null
  NOT?: SourceWhereInput[] | SourceWhereInput | null
}

export interface SourceWhereUniqueInput {
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
  description?: String | null
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
  description?: String | null
}

export interface TagUpdateInput {
  label?: String | null
  description?: String | null
}

export interface TagUpdateManyDataInput {
  label?: String | null
  description?: String | null
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
  description?: String | null
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
  AND?: TagWhereInput[] | TagWhereInput | null
  OR?: TagWhereInput[] | TagWhereInput | null
  NOT?: TagWhereInput[] | TagWhereInput | null
}

export interface TagWhereUniqueInput {
  id?: ID_Input | null
}

export interface TaskCreateInput {
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

export interface TaskCreateWithoutCandidateInput {
  owners?: UserCreateManyWithoutTasksInput | null
  title?: String | null
  description?: String | null
  dueAt?: DateTime | null
}

export interface TaskCreateWithoutOwnersInput {
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

export interface TaskUpdateInput {
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

export interface TaskUpdateManyWithWhereNestedInput {
  where: TaskScalarWhereInput
  data: TaskUpdateManyDataInput
}

export interface TaskUpdateWithoutCandidateDataInput {
  owners?: UserUpdateManyWithoutTasksInput | null
  title?: String | null
  description?: String | null
  dueAt?: DateTime | null
}

export interface TaskUpdateWithoutOwnersDataInput {
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
  settings?: Json | null
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

export interface UserCreateManyInput {
  create?: UserCreateInput[] | UserCreateInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateManyWithoutTasksInput {
  create?: UserCreateWithoutTasksInput[] | UserCreateWithoutTasksInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateOneInput {
  create?: UserCreateInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutTasksInput {
  settings?: Json | null
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
  settings?: Json | null
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
  settings?: Json | null
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
  settings?: Json | null
  firstName?: String | null
  lastName?: String | null
  email?: String | null
  username?: String | null
  lastLogin?: DateTime | null
  deletedAt?: DateTime | null
  position?: String | null
}

export interface UserUpdateManyInput {
  create?: UserCreateInput[] | UserCreateInput | null
  update?: UserUpdateWithWhereUniqueNestedInput[] | UserUpdateWithWhereUniqueNestedInput | null
  upsert?: UserUpsertWithWhereUniqueNestedInput[] | UserUpsertWithWhereUniqueNestedInput | null
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput | null
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput | null
}

export interface UserUpdateManyMutationInput {
  settings?: Json | null
  firstName?: String | null
  lastName?: String | null
  email?: String | null
  username?: String | null
  lastLogin?: DateTime | null
  deletedAt?: DateTime | null
  position?: String | null
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

export interface UserUpdateWithoutTasksDataInput {
  settings?: Json | null
  firstName?: String | null
  lastName?: String | null
  email?: String | null
  username?: String | null
  lastLogin?: DateTime | null
  deletedAt?: DateTime | null
  position?: String | null
  avatar?: FileUpdateOneInput | null
}

export interface UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput
  data: UserUpdateDataInput
}

export interface UserUpdateWithWhereUniqueWithoutTasksInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutTasksDataInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserUpsertWithWhereUniqueWithoutTasksInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutTasksDataInput
  create: UserCreateWithoutTasksInput
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
  users?: UserCreateManyInput | null
  jobs?: JobCreateManyWithoutWorkspaceInput | null
  candidates?: CandidateCreateManyInput | null
  settings?: Json | null
  workflows?: WorkflowCreateManyInput | null
  invites?: InviteCreateManyInput | null
  name: String
}

export interface WorkspaceCreateOneWithoutJobsInput {
  create?: WorkspaceCreateWithoutJobsInput | null
  connect?: WorkspaceWhereUniqueInput | null
}

export interface WorkspaceCreateWithoutJobsInput {
  users?: UserCreateManyInput | null
  candidates?: CandidateCreateManyInput | null
  settings?: Json | null
  workflows?: WorkflowCreateManyInput | null
  invites?: InviteCreateManyInput | null
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
  users?: UserUpdateManyInput | null
  jobs?: JobUpdateManyWithoutWorkspaceInput | null
  candidates?: CandidateUpdateManyInput | null
  settings?: Json | null
  workflows?: WorkflowUpdateManyInput | null
  invites?: InviteUpdateManyInput | null
  name?: String | null
}

export interface WorkspaceUpdateManyMutationInput {
  settings?: Json | null
  name?: String | null
}

export interface WorkspaceUpdateOneRequiredWithoutJobsInput {
  create?: WorkspaceCreateWithoutJobsInput | null
  update?: WorkspaceUpdateWithoutJobsDataInput | null
  upsert?: WorkspaceUpsertWithoutJobsInput | null
  connect?: WorkspaceWhereUniqueInput | null
}

export interface WorkspaceUpdateWithoutJobsDataInput {
  users?: UserUpdateManyInput | null
  candidates?: CandidateUpdateManyInput | null
  settings?: Json | null
  workflows?: WorkflowUpdateManyInput | null
  invites?: InviteUpdateManyInput | null
  name?: String | null
}

export interface WorkspaceUpsertWithoutJobsInput {
  update: WorkspaceUpdateWithoutJobsDataInput
  create: WorkspaceCreateWithoutJobsInput
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
  invites_every?: InviteWhereInput | null
  invites_some?: InviteWhereInput | null
  invites_none?: InviteWhereInput | null
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

export interface AggregateDisqualificationInstance {
  count: Int
}

export interface AggregateField {
  count: Int
}

export interface AggregateFieldInstance {
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

export interface AggregateSource {
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
  disqualification?: DisqualificationInstance | null
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
  firstName: String
  lastName: String
  emails: Array<String>
  phones: Array<String>
  links: Array<String>
  avatar?: File | null
  company?: String | null
  headline?: String | null
  position?: String | null
  resumesString: Array<String>
  resumesFile?: Array<File> | null
  coverLettersString: Array<String>
  coverLettersFile?: Array<File> | null
  tags?: Array<Tag> | null
  sources?: Array<Source> | null
  fields?: Array<FieldInstance> | null
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
  company?: String | null
  headline?: String | null
  position?: String | null
  resumesString: Array<String>
  coverLettersString: Array<String>
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

export interface DisqualificationInstance {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  disqualification: Disqualification
  createdBy: User
  content?: String | null
}

export interface DisqualificationInstanceConnection {
  pageInfo: PageInfo
  edges: Array<DisqualificationInstanceEdge | null>
  aggregate: AggregateDisqualificationInstance
}

export interface DisqualificationInstanceEdge {
  node: DisqualificationInstance
  cursor: String
}

export interface DisqualificationInstancePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  content?: String | null
}

export interface DisqualificationInstanceSubscriptionPayload {
  mutation: MutationType
  node?: DisqualificationInstance | null
  updatedFields?: Array<String> | null
  previousValues?: DisqualificationInstancePreviousValues | null
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

export interface Field {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  type: FieldType
  label: String
  description?: String | null
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

export interface FieldInstance {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  field: Field
  value?: String | null
}

export interface FieldInstanceConnection {
  pageInfo: PageInfo
  edges: Array<FieldInstanceEdge | null>
  aggregate: AggregateFieldInstance
}

export interface FieldInstanceEdge {
  node: FieldInstance
  cursor: String
}

export interface FieldInstancePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  value?: String | null
}

export interface FieldInstanceSubscriptionPayload {
  mutation: MutationType
  node?: FieldInstance | null
  updatedFields?: Array<String> | null
  previousValues?: FieldInstancePreviousValues | null
}

export interface FieldPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  type: FieldType
  label: String
  description?: String | null
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
  applications?: Array<Application> | null
  workflow: Workflow
  comments?: Array<Comment> | null
  type: JobType
  department?: String | null
  locations?: Array<Location> | null
  name: String
  excerpt?: String | null
  companyDescription?: String | null
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
  excerpt?: String | null
  companyDescription?: String | null
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
  createdAt: DateTime
  updatedAt: DateTime
  country: String
  region?: String | null
  city: String
  zip?: String | null
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
  createdAt: DateTime
  updatedAt: DateTime
  country: String
  region?: String | null
  city: String
  zip?: String | null
}

export interface LocationSubscriptionPayload {
  mutation: MutationType
  node?: Location | null
  updatedFields?: Array<String> | null
  previousValues?: LocationPreviousValues | null
}

export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface Source {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  label: String
  description?: String | null
}

export interface SourceConnection {
  pageInfo: PageInfo
  edges: Array<SourceEdge | null>
  aggregate: AggregateSource
}

export interface SourceEdge {
  node: Source
  cursor: String
}

export interface SourcePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  label: String
  description?: String | null
}

export interface SourceSubscriptionPayload {
  mutation: MutationType
  node?: Source | null
  updatedFields?: Array<String> | null
  previousValues?: SourcePreviousValues | null
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
  description?: String | null
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
  description?: String | null
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
  settings?: Json | null
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
  settings?: Json | null
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
  users?: Array<User> | null
  jobs?: Array<Job> | null
  candidates?: Array<Candidate> | null
  settings?: Json | null
  workflows?: Array<Workflow> | null
  invites?: Array<Invite> | null
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
  settings?: Json | null
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

export type Json = any

export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string