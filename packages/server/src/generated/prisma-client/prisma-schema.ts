export const typeDefs = /* GraphQL */ `type AggregateApplication {
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