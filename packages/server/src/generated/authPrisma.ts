import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    persons: <T = Person[]>(args: { where?: PersonWhereInput, orderBy?: PersonOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    apiTokens: <T = ApiToken[]>(args: { where?: ApiTokenWhereInput, orderBy?: ApiTokenOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    refreshTokens: <T = RefreshToken[]>(args: { where?: RefreshTokenWhereInput, orderBy?: RefreshTokenOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    companies: <T = Company[]>(args: { where?: CompanyWhereInput, orderBy?: CompanyOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    invitations: <T = Invitation[]>(args: { where?: InvitationWhereInput, orderBy?: InvitationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    person: <T = Person | null>(args: { where: PersonWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    apiToken: <T = ApiToken | null>(args: { where: ApiTokenWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    refreshToken: <T = RefreshToken | null>(args: { where: RefreshTokenWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    company: <T = Company | null>(args: { where: CompanyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    invitation: <T = Invitation | null>(args: { where: InvitationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    personsConnection: <T = PersonConnection>(args: { where?: PersonWhereInput, orderBy?: PersonOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    apiTokensConnection: <T = ApiTokenConnection>(args: { where?: ApiTokenWhereInput, orderBy?: ApiTokenOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    refreshTokensConnection: <T = RefreshTokenConnection>(args: { where?: RefreshTokenWhereInput, orderBy?: RefreshTokenOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    companiesConnection: <T = CompanyConnection>(args: { where?: CompanyWhereInput, orderBy?: CompanyOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    invitationsConnection: <T = InvitationConnection>(args: { where?: InvitationWhereInput, orderBy?: InvitationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createPerson: <T = Person>(args: { data: PersonCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createApiToken: <T = ApiToken>(args: { data: ApiTokenCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createRefreshToken: <T = RefreshToken>(args: { data: RefreshTokenCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCompany: <T = Company>(args: { data: CompanyCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createInvitation: <T = Invitation>(args: { data: InvitationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePerson: <T = Person | null>(args: { data: PersonUpdateInput, where: PersonWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateApiToken: <T = ApiToken | null>(args: { data: ApiTokenUpdateInput, where: ApiTokenWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateRefreshToken: <T = RefreshToken | null>(args: { data: RefreshTokenUpdateInput, where: RefreshTokenWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCompany: <T = Company | null>(args: { data: CompanyUpdateInput, where: CompanyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateInvitation: <T = Invitation | null>(args: { data: InvitationUpdateInput, where: InvitationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePerson: <T = Person | null>(args: { where: PersonWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteApiToken: <T = ApiToken | null>(args: { where: ApiTokenWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteRefreshToken: <T = RefreshToken | null>(args: { where: RefreshTokenWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCompany: <T = Company | null>(args: { where: CompanyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteInvitation: <T = Invitation | null>(args: { where: InvitationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPerson: <T = Person>(args: { where: PersonWhereUniqueInput, create: PersonCreateInput, update: PersonUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertApiToken: <T = ApiToken>(args: { where: ApiTokenWhereUniqueInput, create: ApiTokenCreateInput, update: ApiTokenUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertRefreshToken: <T = RefreshToken>(args: { where: RefreshTokenWhereUniqueInput, create: RefreshTokenCreateInput, update: RefreshTokenUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCompany: <T = Company>(args: { where: CompanyWhereUniqueInput, create: CompanyCreateInput, update: CompanyUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertInvitation: <T = Invitation>(args: { where: InvitationWhereUniqueInput, create: InvitationCreateInput, update: InvitationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPersons: <T = BatchPayload>(args: { data: PersonUpdateInput, where?: PersonWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyApiTokens: <T = BatchPayload>(args: { data: ApiTokenUpdateInput, where?: ApiTokenWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyRefreshTokens: <T = BatchPayload>(args: { data: RefreshTokenUpdateInput, where?: RefreshTokenWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCompanies: <T = BatchPayload>(args: { data: CompanyUpdateInput, where?: CompanyWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyInvitations: <T = BatchPayload>(args: { data: InvitationUpdateInput, where?: InvitationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPersons: <T = BatchPayload>(args: { where?: PersonWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyApiTokens: <T = BatchPayload>(args: { where?: ApiTokenWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRefreshTokens: <T = BatchPayload>(args: { where?: RefreshTokenWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCompanies: <T = BatchPayload>(args: { where?: CompanyWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyInvitations: <T = BatchPayload>(args: { where?: InvitationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    person: <T = PersonSubscriptionPayload | null>(args: { where?: PersonSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    apiToken: <T = ApiTokenSubscriptionPayload | null>(args: { where?: ApiTokenSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    refreshToken: <T = RefreshTokenSubscriptionPayload | null>(args: { where?: RefreshTokenSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    company: <T = CompanySubscriptionPayload | null>(args: { where?: CompanySubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    invitation: <T = InvitationSubscriptionPayload | null>(args: { where?: InvitationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Person: (where?: PersonWhereInput) => Promise<boolean>
  ApiToken: (where?: ApiTokenWhereInput) => Promise<boolean>
  RefreshToken: (where?: RefreshTokenWhereInput) => Promise<boolean>
  Company: (where?: CompanyWhereInput) => Promise<boolean>
  Invitation: (where?: InvitationWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
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

const typeDefs = `type AggregateApiToken {
  count: Int!
}

type AggregateCompany {
  count: Int!
}

type AggregateInvitation {
  count: Int!
}

type AggregatePerson {
  count: Int!
}

type AggregateRefreshToken {
  count: Int!
}

type AggregateUser {
  count: Int!
}

enum ApiPermisionEnum {
  READ
  ADD
  MODIFY
  ADMIN
}

type ApiToken implements Node {
  id: ID!
  createdAt: DateTime!
  permissions: [ApiPermisionEnum!]!
  name: String!
  createdBy(where: UserWhereInput): User!
}

"""A connection to a list of items."""
type ApiTokenConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ApiTokenEdge]!
  aggregate: AggregateApiToken!
}

input ApiTokenCreateInput {
  name: String!
  permissions: ApiTokenCreatepermissionsInput
  createdBy: UserCreateOneWithoutApiTokensInput!
}

input ApiTokenCreateManyWithoutCreatedByInput {
  create: [ApiTokenCreateWithoutCreatedByInput!]
  connect: [ApiTokenWhereUniqueInput!]
}

input ApiTokenCreatepermissionsInput {
  set: [ApiPermisionEnum!]
}

input ApiTokenCreateWithoutCreatedByInput {
  name: String!
  permissions: ApiTokenCreatepermissionsInput
}

"""An edge in a connection."""
type ApiTokenEdge {
  """The item at the end of the edge."""
  node: ApiToken!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ApiTokenOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ApiTokenPreviousValues {
  id: ID!
  createdAt: DateTime!
  permissions: [ApiPermisionEnum!]!
  name: String!
}

type ApiTokenSubscriptionPayload {
  mutation: MutationType!
  node: ApiToken
  updatedFields: [String!]
  previousValues: ApiTokenPreviousValues
}

input ApiTokenSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ApiTokenSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ApiTokenSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ApiTokenSubscriptionWhereInput!]

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
  node: ApiTokenWhereInput
}

input ApiTokenUpdateInput {
  name: String
  permissions: ApiTokenUpdatepermissionsInput
  createdBy: UserUpdateOneWithoutApiTokensInput
}

input ApiTokenUpdateManyWithoutCreatedByInput {
  create: [ApiTokenCreateWithoutCreatedByInput!]
  connect: [ApiTokenWhereUniqueInput!]
  disconnect: [ApiTokenWhereUniqueInput!]
  delete: [ApiTokenWhereUniqueInput!]
  update: [ApiTokenUpdateWithWhereUniqueWithoutCreatedByInput!]
  upsert: [ApiTokenUpsertWithWhereUniqueWithoutCreatedByInput!]
}

input ApiTokenUpdatepermissionsInput {
  set: [ApiPermisionEnum!]
}

input ApiTokenUpdateWithoutCreatedByDataInput {
  name: String
  permissions: ApiTokenUpdatepermissionsInput
}

input ApiTokenUpdateWithWhereUniqueWithoutCreatedByInput {
  where: ApiTokenWhereUniqueInput!
  data: ApiTokenUpdateWithoutCreatedByDataInput!
}

input ApiTokenUpsertWithWhereUniqueWithoutCreatedByInput {
  where: ApiTokenWhereUniqueInput!
  update: ApiTokenUpdateWithoutCreatedByDataInput!
  create: ApiTokenCreateWithoutCreatedByInput!
}

input ApiTokenWhereInput {
  """Logical AND on all given filters."""
  AND: [ApiTokenWhereInput!]

  """Logical OR on all given filters."""
  OR: [ApiTokenWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ApiTokenWhereInput!]
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
  createdBy: UserWhereInput
}

input ApiTokenWhereUniqueInput {
  id: ID
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Company implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  country: String!
  url: String!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  invitations(where: InvitationWhereInput, orderBy: InvitationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invitation!]
}

"""A connection to a list of items."""
type CompanyConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CompanyEdge]!
  aggregate: AggregateCompany!
}

input CompanyCreateInput {
  name: String!
  country: String!
  url: String!
  users: UserCreateManyWithoutCompanyInput
  invitations: InvitationCreateManyInput
}

input CompanyCreateOneInput {
  create: CompanyCreateInput
  connect: CompanyWhereUniqueInput
}

input CompanyCreateOneWithoutUsersInput {
  create: CompanyCreateWithoutUsersInput
  connect: CompanyWhereUniqueInput
}

input CompanyCreateWithoutUsersInput {
  name: String!
  country: String!
  url: String!
  invitations: InvitationCreateManyInput
}

"""An edge in a connection."""
type CompanyEdge {
  """The item at the end of the edge."""
  node: Company!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CompanyOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  country_ASC
  country_DESC
  url_ASC
  url_DESC
}

type CompanyPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  country: String!
  url: String!
}

type CompanySubscriptionPayload {
  mutation: MutationType!
  node: Company
  updatedFields: [String!]
  previousValues: CompanyPreviousValues
}

input CompanySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CompanySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CompanySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CompanySubscriptionWhereInput!]

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
  node: CompanyWhereInput
}

input CompanyUpdateDataInput {
  name: String
  country: String
  url: String
  users: UserUpdateManyWithoutCompanyInput
  invitations: InvitationUpdateManyInput
}

input CompanyUpdateInput {
  name: String
  country: String
  url: String
  users: UserUpdateManyWithoutCompanyInput
  invitations: InvitationUpdateManyInput
}

input CompanyUpdateOneInput {
  create: CompanyCreateInput
  connect: CompanyWhereUniqueInput
  delete: Boolean
  update: CompanyUpdateDataInput
  upsert: CompanyUpsertNestedInput
}

input CompanyUpdateOneWithoutUsersInput {
  create: CompanyCreateWithoutUsersInput
  connect: CompanyWhereUniqueInput
  delete: Boolean
  update: CompanyUpdateWithoutUsersDataInput
  upsert: CompanyUpsertWithoutUsersInput
}

input CompanyUpdateWithoutUsersDataInput {
  name: String
  country: String
  url: String
  invitations: InvitationUpdateManyInput
}

input CompanyUpsertNestedInput {
  update: CompanyUpdateDataInput!
  create: CompanyCreateInput!
}

input CompanyUpsertWithoutUsersInput {
  update: CompanyUpdateWithoutUsersDataInput!
  create: CompanyCreateWithoutUsersInput!
}

input CompanyWhereInput {
  """Logical AND on all given filters."""
  AND: [CompanyWhereInput!]

  """Logical OR on all given filters."""
  OR: [CompanyWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CompanyWhereInput!]
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
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  invitations_every: InvitationWhereInput
  invitations_some: InvitationWhereInput
  invitations_none: InvitationWhereInput
}

input CompanyWhereUniqueInput {
  id: ID
  url: String
}

scalar DateTime

type Invitation implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  token: String!
  email: String!
  expireAt: DateTime!
  createdBy(where: UserWhereInput): User!
}

"""A connection to a list of items."""
type InvitationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [InvitationEdge]!
  aggregate: AggregateInvitation!
}

input InvitationCreateInput {
  token: String!
  email: String!
  expireAt: DateTime!
  createdBy: UserCreateOneInput!
}

input InvitationCreateManyInput {
  create: [InvitationCreateInput!]
  connect: [InvitationWhereUniqueInput!]
}

"""An edge in a connection."""
type InvitationEdge {
  """The item at the end of the edge."""
  node: Invitation!

  """A cursor for use in pagination."""
  cursor: String!
}

enum InvitationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  token_ASC
  token_DESC
  email_ASC
  email_DESC
  expireAt_ASC
  expireAt_DESC
}

type InvitationPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  token: String!
  email: String!
  expireAt: DateTime!
}

type InvitationSubscriptionPayload {
  mutation: MutationType!
  node: Invitation
  updatedFields: [String!]
  previousValues: InvitationPreviousValues
}

input InvitationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [InvitationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [InvitationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [InvitationSubscriptionWhereInput!]

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
  node: InvitationWhereInput
}

input InvitationUpdateDataInput {
  token: String
  email: String
  expireAt: DateTime
  createdBy: UserUpdateOneInput
}

input InvitationUpdateInput {
  token: String
  email: String
  expireAt: DateTime
  createdBy: UserUpdateOneInput
}

input InvitationUpdateManyInput {
  create: [InvitationCreateInput!]
  connect: [InvitationWhereUniqueInput!]
  disconnect: [InvitationWhereUniqueInput!]
  delete: [InvitationWhereUniqueInput!]
  update: [InvitationUpdateWithWhereUniqueNestedInput!]
  upsert: [InvitationUpsertWithWhereUniqueNestedInput!]
}

input InvitationUpdateWithWhereUniqueNestedInput {
  where: InvitationWhereUniqueInput!
  data: InvitationUpdateDataInput!
}

input InvitationUpsertWithWhereUniqueNestedInput {
  where: InvitationWhereUniqueInput!
  update: InvitationUpdateDataInput!
  create: InvitationCreateInput!
}

input InvitationWhereInput {
  """Logical AND on all given filters."""
  AND: [InvitationWhereInput!]

  """Logical OR on all given filters."""
  OR: [InvitationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [InvitationWhereInput!]
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
  token: String

  """All values that are not equal to given value."""
  token_not: String

  """All values that are contained in given list."""
  token_in: [String!]

  """All values that are not contained in given list."""
  token_not_in: [String!]

  """All values less than the given value."""
  token_lt: String

  """All values less than or equal the given value."""
  token_lte: String

  """All values greater than the given value."""
  token_gt: String

  """All values greater than or equal the given value."""
  token_gte: String

  """All values containing the given string."""
  token_contains: String

  """All values not containing the given string."""
  token_not_contains: String

  """All values starting with the given string."""
  token_starts_with: String

  """All values not starting with the given string."""
  token_not_starts_with: String

  """All values ending with the given string."""
  token_ends_with: String

  """All values not ending with the given string."""
  token_not_ends_with: String
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
  createdBy: UserWhereInput
}

input InvitationWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createPerson(data: PersonCreateInput!): Person!
  createApiToken(data: ApiTokenCreateInput!): ApiToken!
  createRefreshToken(data: RefreshTokenCreateInput!): RefreshToken!
  createCompany(data: CompanyCreateInput!): Company!
  createInvitation(data: InvitationCreateInput!): Invitation!
  createUser(data: UserCreateInput!): User!
  updatePerson(data: PersonUpdateInput!, where: PersonWhereUniqueInput!): Person
  updateApiToken(data: ApiTokenUpdateInput!, where: ApiTokenWhereUniqueInput!): ApiToken
  updateRefreshToken(data: RefreshTokenUpdateInput!, where: RefreshTokenWhereUniqueInput!): RefreshToken
  updateCompany(data: CompanyUpdateInput!, where: CompanyWhereUniqueInput!): Company
  updateInvitation(data: InvitationUpdateInput!, where: InvitationWhereUniqueInput!): Invitation
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deletePerson(where: PersonWhereUniqueInput!): Person
  deleteApiToken(where: ApiTokenWhereUniqueInput!): ApiToken
  deleteRefreshToken(where: RefreshTokenWhereUniqueInput!): RefreshToken
  deleteCompany(where: CompanyWhereUniqueInput!): Company
  deleteInvitation(where: InvitationWhereUniqueInput!): Invitation
  deleteUser(where: UserWhereUniqueInput!): User
  upsertPerson(where: PersonWhereUniqueInput!, create: PersonCreateInput!, update: PersonUpdateInput!): Person!
  upsertApiToken(where: ApiTokenWhereUniqueInput!, create: ApiTokenCreateInput!, update: ApiTokenUpdateInput!): ApiToken!
  upsertRefreshToken(where: RefreshTokenWhereUniqueInput!, create: RefreshTokenCreateInput!, update: RefreshTokenUpdateInput!): RefreshToken!
  upsertCompany(where: CompanyWhereUniqueInput!, create: CompanyCreateInput!, update: CompanyUpdateInput!): Company!
  upsertInvitation(where: InvitationWhereUniqueInput!, create: InvitationCreateInput!, update: InvitationUpdateInput!): Invitation!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyPersons(data: PersonUpdateInput!, where: PersonWhereInput): BatchPayload!
  updateManyApiTokens(data: ApiTokenUpdateInput!, where: ApiTokenWhereInput): BatchPayload!
  updateManyRefreshTokens(data: RefreshTokenUpdateInput!, where: RefreshTokenWhereInput): BatchPayload!
  updateManyCompanies(data: CompanyUpdateInput!, where: CompanyWhereInput): BatchPayload!
  updateManyInvitations(data: InvitationUpdateInput!, where: InvitationWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  deleteManyPersons(where: PersonWhereInput): BatchPayload!
  deleteManyApiTokens(where: ApiTokenWhereInput): BatchPayload!
  deleteManyRefreshTokens(where: RefreshTokenWhereInput): BatchPayload!
  deleteManyCompanies(where: CompanyWhereInput): BatchPayload!
  deleteManyInvitations(where: InvitationWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
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

type Person implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  refreshTokens(where: RefreshTokenWhereInput, orderBy: RefreshTokenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RefreshToken!]
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  activeUser(where: UserWhereInput): User!
}

"""A connection to a list of items."""
type PersonConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PersonEdge]!
  aggregate: AggregatePerson!
}

input PersonCreateInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  refreshTokens: RefreshTokenCreateManyInput
  users: UserCreateManyWithoutPersonInput
  activeUser: UserCreateOneInput!
}

input PersonCreateOneWithoutUsersInput {
  create: PersonCreateWithoutUsersInput
  connect: PersonWhereUniqueInput
}

input PersonCreateWithoutUsersInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  refreshTokens: RefreshTokenCreateManyInput
  activeUser: UserCreateOneInput!
}

"""An edge in a connection."""
type PersonEdge {
  """The item at the end of the edge."""
  node: Person!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PersonOrderByInput {
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
  password_ASC
  password_DESC
}

type PersonPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  firstName: String!
  lastName: String!
  email: String!
  password: String!
}

type PersonSubscriptionPayload {
  mutation: MutationType!
  node: Person
  updatedFields: [String!]
  previousValues: PersonPreviousValues
}

input PersonSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PersonSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PersonSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PersonSubscriptionWhereInput!]

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
  node: PersonWhereInput
}

input PersonUpdateInput {
  firstName: String
  lastName: String
  email: String
  password: String
  refreshTokens: RefreshTokenUpdateManyInput
  users: UserUpdateManyWithoutPersonInput
  activeUser: UserUpdateOneInput
}

input PersonUpdateOneWithoutUsersInput {
  create: PersonCreateWithoutUsersInput
  connect: PersonWhereUniqueInput
  delete: Boolean
  update: PersonUpdateWithoutUsersDataInput
  upsert: PersonUpsertWithoutUsersInput
}

input PersonUpdateWithoutUsersDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
  refreshTokens: RefreshTokenUpdateManyInput
  activeUser: UserUpdateOneInput
}

input PersonUpsertWithoutUsersInput {
  update: PersonUpdateWithoutUsersDataInput!
  create: PersonCreateWithoutUsersInput!
}

input PersonWhereInput {
  """Logical AND on all given filters."""
  AND: [PersonWhereInput!]

  """Logical OR on all given filters."""
  OR: [PersonWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PersonWhereInput!]
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
  refreshTokens_every: RefreshTokenWhereInput
  refreshTokens_some: RefreshTokenWhereInput
  refreshTokens_none: RefreshTokenWhereInput
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  activeUser: UserWhereInput
}

input PersonWhereUniqueInput {
  id: ID
  email: String
}

type Query {
  persons(where: PersonWhereInput, orderBy: PersonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Person]!
  apiTokens(where: ApiTokenWhereInput, orderBy: ApiTokenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ApiToken]!
  refreshTokens(where: RefreshTokenWhereInput, orderBy: RefreshTokenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RefreshToken]!
  companies(where: CompanyWhereInput, orderBy: CompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Company]!
  invitations(where: InvitationWhereInput, orderBy: InvitationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invitation]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  person(where: PersonWhereUniqueInput!): Person
  apiToken(where: ApiTokenWhereUniqueInput!): ApiToken
  refreshToken(where: RefreshTokenWhereUniqueInput!): RefreshToken
  company(where: CompanyWhereUniqueInput!): Company
  invitation(where: InvitationWhereUniqueInput!): Invitation
  user(where: UserWhereUniqueInput!): User
  personsConnection(where: PersonWhereInput, orderBy: PersonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PersonConnection!
  apiTokensConnection(where: ApiTokenWhereInput, orderBy: ApiTokenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ApiTokenConnection!
  refreshTokensConnection(where: RefreshTokenWhereInput, orderBy: RefreshTokenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RefreshTokenConnection!
  companiesConnection(where: CompanyWhereInput, orderBy: CompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CompanyConnection!
  invitationsConnection(where: InvitationWhereInput, orderBy: InvitationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): InvitationConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type RefreshToken implements Node {
  id: ID!
  createdAt: DateTime!
  ip: String!
  company(where: CompanyWhereInput): Company!
  expireAt: DateTime!
}

"""A connection to a list of items."""
type RefreshTokenConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [RefreshTokenEdge]!
  aggregate: AggregateRefreshToken!
}

input RefreshTokenCreateInput {
  ip: String!
  expireAt: DateTime!
  company: CompanyCreateOneInput!
}

input RefreshTokenCreateManyInput {
  create: [RefreshTokenCreateInput!]
  connect: [RefreshTokenWhereUniqueInput!]
}

"""An edge in a connection."""
type RefreshTokenEdge {
  """The item at the end of the edge."""
  node: RefreshToken!

  """A cursor for use in pagination."""
  cursor: String!
}

enum RefreshTokenOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  ip_ASC
  ip_DESC
  expireAt_ASC
  expireAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RefreshTokenPreviousValues {
  id: ID!
  createdAt: DateTime!
  ip: String!
  expireAt: DateTime!
}

type RefreshTokenSubscriptionPayload {
  mutation: MutationType!
  node: RefreshToken
  updatedFields: [String!]
  previousValues: RefreshTokenPreviousValues
}

input RefreshTokenSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [RefreshTokenSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RefreshTokenSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RefreshTokenSubscriptionWhereInput!]

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
  node: RefreshTokenWhereInput
}

input RefreshTokenUpdateDataInput {
  ip: String
  expireAt: DateTime
  company: CompanyUpdateOneInput
}

input RefreshTokenUpdateInput {
  ip: String
  expireAt: DateTime
  company: CompanyUpdateOneInput
}

input RefreshTokenUpdateManyInput {
  create: [RefreshTokenCreateInput!]
  connect: [RefreshTokenWhereUniqueInput!]
  disconnect: [RefreshTokenWhereUniqueInput!]
  delete: [RefreshTokenWhereUniqueInput!]
  update: [RefreshTokenUpdateWithWhereUniqueNestedInput!]
  upsert: [RefreshTokenUpsertWithWhereUniqueNestedInput!]
}

input RefreshTokenUpdateWithWhereUniqueNestedInput {
  where: RefreshTokenWhereUniqueInput!
  data: RefreshTokenUpdateDataInput!
}

input RefreshTokenUpsertWithWhereUniqueNestedInput {
  where: RefreshTokenWhereUniqueInput!
  update: RefreshTokenUpdateDataInput!
  create: RefreshTokenCreateInput!
}

input RefreshTokenWhereInput {
  """Logical AND on all given filters."""
  AND: [RefreshTokenWhereInput!]

  """Logical OR on all given filters."""
  OR: [RefreshTokenWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RefreshTokenWhereInput!]
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
  ip: String

  """All values that are not equal to given value."""
  ip_not: String

  """All values that are contained in given list."""
  ip_in: [String!]

  """All values that are not contained in given list."""
  ip_not_in: [String!]

  """All values less than the given value."""
  ip_lt: String

  """All values less than or equal the given value."""
  ip_lte: String

  """All values greater than the given value."""
  ip_gt: String

  """All values greater than or equal the given value."""
  ip_gte: String

  """All values containing the given string."""
  ip_contains: String

  """All values not containing the given string."""
  ip_not_contains: String

  """All values starting with the given string."""
  ip_starts_with: String

  """All values not starting with the given string."""
  ip_not_starts_with: String

  """All values ending with the given string."""
  ip_ends_with: String

  """All values not ending with the given string."""
  ip_not_ends_with: String
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
  company: CompanyWhereInput
}

input RefreshTokenWhereUniqueInput {
  id: ID
}

type Subscription {
  person(where: PersonSubscriptionWhereInput): PersonSubscriptionPayload
  apiToken(where: ApiTokenSubscriptionWhereInput): ApiTokenSubscriptionPayload
  refreshToken(where: RefreshTokenSubscriptionWhereInput): RefreshTokenSubscriptionPayload
  company(where: CompanySubscriptionWhereInput): CompanySubscriptionPayload
  invitation(where: InvitationSubscriptionWhereInput): InvitationSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  status: UserStatus!
  email: String
  apiTokens(where: ApiTokenWhereInput, orderBy: ApiTokenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ApiToken!]
  instanceId: ID!
  company(where: CompanyWhereInput): Company!
  person(where: PersonWhereInput): Person!
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
  status: UserStatus!
  email: String
  instanceId: ID!
  apiTokens: ApiTokenCreateManyWithoutCreatedByInput
  company: CompanyCreateOneWithoutUsersInput!
  person: PersonCreateOneWithoutUsersInput!
}

input UserCreateManyWithoutCompanyInput {
  create: [UserCreateWithoutCompanyInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutPersonInput {
  create: [UserCreateWithoutPersonInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutApiTokensInput {
  create: UserCreateWithoutApiTokensInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutApiTokensInput {
  status: UserStatus!
  email: String
  instanceId: ID!
  company: CompanyCreateOneWithoutUsersInput!
  person: PersonCreateOneWithoutUsersInput!
}

input UserCreateWithoutCompanyInput {
  status: UserStatus!
  email: String
  instanceId: ID!
  apiTokens: ApiTokenCreateManyWithoutCreatedByInput
  person: PersonCreateOneWithoutUsersInput!
}

input UserCreateWithoutPersonInput {
  status: UserStatus!
  email: String
  instanceId: ID!
  apiTokens: ApiTokenCreateManyWithoutCreatedByInput
  company: CompanyCreateOneWithoutUsersInput!
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
  status_ASC
  status_DESC
  email_ASC
  email_DESC
  instanceId_ASC
  instanceId_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  status: UserStatus!
  email: String
  instanceId: ID!
}

enum UserStatus {
  ACTIVE
  SUSPENDED
  DELETED
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
  status: UserStatus
  email: String
  instanceId: ID
  apiTokens: ApiTokenUpdateManyWithoutCreatedByInput
  company: CompanyUpdateOneWithoutUsersInput
  person: PersonUpdateOneWithoutUsersInput
}

input UserUpdateInput {
  status: UserStatus
  email: String
  instanceId: ID
  apiTokens: ApiTokenUpdateManyWithoutCreatedByInput
  company: CompanyUpdateOneWithoutUsersInput
  person: PersonUpdateOneWithoutUsersInput
}

input UserUpdateManyWithoutCompanyInput {
  create: [UserCreateWithoutCompanyInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutCompanyInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutCompanyInput!]
}

input UserUpdateManyWithoutPersonInput {
  create: [UserCreateWithoutPersonInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutPersonInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutPersonInput!]
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneWithoutApiTokensInput {
  create: UserCreateWithoutApiTokensInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutApiTokensDataInput
  upsert: UserUpsertWithoutApiTokensInput
}

input UserUpdateWithoutApiTokensDataInput {
  status: UserStatus
  email: String
  instanceId: ID
  company: CompanyUpdateOneWithoutUsersInput
  person: PersonUpdateOneWithoutUsersInput
}

input UserUpdateWithoutCompanyDataInput {
  status: UserStatus
  email: String
  instanceId: ID
  apiTokens: ApiTokenUpdateManyWithoutCreatedByInput
  person: PersonUpdateOneWithoutUsersInput
}

input UserUpdateWithoutPersonDataInput {
  status: UserStatus
  email: String
  instanceId: ID
  apiTokens: ApiTokenUpdateManyWithoutCreatedByInput
  company: CompanyUpdateOneWithoutUsersInput
}

input UserUpdateWithWhereUniqueWithoutCompanyInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutCompanyDataInput!
}

input UserUpdateWithWhereUniqueWithoutPersonInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutPersonDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutApiTokensInput {
  update: UserUpdateWithoutApiTokensDataInput!
  create: UserCreateWithoutApiTokensInput!
}

input UserUpsertWithWhereUniqueWithoutCompanyInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutCompanyDataInput!
  create: UserCreateWithoutCompanyInput!
}

input UserUpsertWithWhereUniqueWithoutPersonInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutPersonDataInput!
  create: UserCreateWithoutPersonInput!
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
  status: UserStatus

  """All values that are not equal to given value."""
  status_not: UserStatus

  """All values that are contained in given list."""
  status_in: [UserStatus!]

  """All values that are not contained in given list."""
  status_not_in: [UserStatus!]
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
  instanceId: ID

  """All values that are not equal to given value."""
  instanceId_not: ID

  """All values that are contained in given list."""
  instanceId_in: [ID!]

  """All values that are not contained in given list."""
  instanceId_not_in: [ID!]

  """All values less than the given value."""
  instanceId_lt: ID

  """All values less than or equal the given value."""
  instanceId_lte: ID

  """All values greater than the given value."""
  instanceId_gt: ID

  """All values greater than or equal the given value."""
  instanceId_gte: ID

  """All values containing the given string."""
  instanceId_contains: ID

  """All values not containing the given string."""
  instanceId_not_contains: ID

  """All values starting with the given string."""
  instanceId_starts_with: ID

  """All values not starting with the given string."""
  instanceId_not_starts_with: ID

  """All values ending with the given string."""
  instanceId_ends_with: ID

  """All values not ending with the given string."""
  instanceId_not_ends_with: ID
  apiTokens_every: ApiTokenWhereInput
  apiTokens_some: ApiTokenWhereInput
  apiTokens_none: ApiTokenWhereInput
  company: CompanyWhereInput
  person: PersonWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type PersonOrderByInput =   'id_ASC' |
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
  'password_ASC' |
  'password_DESC'

export type RefreshTokenOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'ip_ASC' |
  'ip_DESC' |
  'expireAt_ASC' |
  'expireAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'status_ASC' |
  'status_DESC' |
  'email_ASC' |
  'email_DESC' |
  'instanceId_ASC' |
  'instanceId_DESC'

export type UserStatus =   'ACTIVE' |
  'SUSPENDED' |
  'DELETED'

export type ApiTokenOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type ApiPermisionEnum =   'READ' |
  'ADD' |
  'MODIFY' |
  'ADMIN'

export type InvitationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'token_ASC' |
  'token_DESC' |
  'email_ASC' |
  'email_DESC' |
  'expireAt_ASC' |
  'expireAt_DESC'

export type CompanyOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC' |
  'country_ASC' |
  'country_DESC' |
  'url_ASC' |
  'url_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface InvitationCreateInput {
  token: String
  email: String
  expireAt: DateTime
  createdBy: UserCreateOneInput
}

export interface PersonWhereInput {
  AND?: PersonWhereInput[] | PersonWhereInput
  OR?: PersonWhereInput[] | PersonWhereInput
  NOT?: PersonWhereInput[] | PersonWhereInput
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
  refreshTokens_every?: RefreshTokenWhereInput
  refreshTokens_some?: RefreshTokenWhereInput
  refreshTokens_none?: RefreshTokenWhereInput
  users_every?: UserWhereInput
  users_some?: UserWhereInput
  users_none?: UserWhereInput
  activeUser?: UserWhereInput
}

export interface RefreshTokenCreateInput {
  ip: String
  expireAt: DateTime
  company: CompanyCreateOneInput
}

export interface CompanyUpdateWithoutUsersDataInput {
  name?: String
  country?: String
  url?: String
  invitations?: InvitationUpdateManyInput
}

export interface CompanyCreateOneInput {
  create?: CompanyCreateInput
  connect?: CompanyWhereUniqueInput
}

export interface PersonUpdateInput {
  firstName?: String
  lastName?: String
  email?: String
  password?: String
  refreshTokens?: RefreshTokenUpdateManyInput
  users?: UserUpdateManyWithoutPersonInput
  activeUser?: UserUpdateOneInput
}

export interface CompanyCreateInput {
  name: String
  country: String
  url: String
  users?: UserCreateManyWithoutCompanyInput
  invitations?: InvitationCreateManyInput
}

export interface InvitationWhereInput {
  AND?: InvitationWhereInput[] | InvitationWhereInput
  OR?: InvitationWhereInput[] | InvitationWhereInput
  NOT?: InvitationWhereInput[] | InvitationWhereInput
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
  token?: String
  token_not?: String
  token_in?: String[] | String
  token_not_in?: String[] | String
  token_lt?: String
  token_lte?: String
  token_gt?: String
  token_gte?: String
  token_contains?: String
  token_not_contains?: String
  token_starts_with?: String
  token_not_starts_with?: String
  token_ends_with?: String
  token_not_ends_with?: String
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
  createdBy?: UserWhereInput
}

export interface UserCreateManyWithoutCompanyInput {
  create?: UserCreateWithoutCompanyInput[] | UserCreateWithoutCompanyInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface InvitationSubscriptionWhereInput {
  AND?: InvitationSubscriptionWhereInput[] | InvitationSubscriptionWhereInput
  OR?: InvitationSubscriptionWhereInput[] | InvitationSubscriptionWhereInput
  NOT?: InvitationSubscriptionWhereInput[] | InvitationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: InvitationWhereInput
}

export interface UserCreateWithoutCompanyInput {
  status: UserStatus
  email?: String
  instanceId: ID_Input
  apiTokens?: ApiTokenCreateManyWithoutCreatedByInput
  person: PersonCreateOneWithoutUsersInput
}

export interface CompanySubscriptionWhereInput {
  AND?: CompanySubscriptionWhereInput[] | CompanySubscriptionWhereInput
  OR?: CompanySubscriptionWhereInput[] | CompanySubscriptionWhereInput
  NOT?: CompanySubscriptionWhereInput[] | CompanySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CompanyWhereInput
}

export interface ApiTokenCreateManyWithoutCreatedByInput {
  create?: ApiTokenCreateWithoutCreatedByInput[] | ApiTokenCreateWithoutCreatedByInput
  connect?: ApiTokenWhereUniqueInput[] | ApiTokenWhereUniqueInput
}

export interface RefreshTokenSubscriptionWhereInput {
  AND?: RefreshTokenSubscriptionWhereInput[] | RefreshTokenSubscriptionWhereInput
  OR?: RefreshTokenSubscriptionWhereInput[] | RefreshTokenSubscriptionWhereInput
  NOT?: RefreshTokenSubscriptionWhereInput[] | RefreshTokenSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: RefreshTokenWhereInput
}

export interface ApiTokenCreateWithoutCreatedByInput {
  name: String
  permissions?: ApiTokenCreatepermissionsInput
}

export interface RefreshTokenWhereInput {
  AND?: RefreshTokenWhereInput[] | RefreshTokenWhereInput
  OR?: RefreshTokenWhereInput[] | RefreshTokenWhereInput
  NOT?: RefreshTokenWhereInput[] | RefreshTokenWhereInput
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
  ip?: String
  ip_not?: String
  ip_in?: String[] | String
  ip_not_in?: String[] | String
  ip_lt?: String
  ip_lte?: String
  ip_gt?: String
  ip_gte?: String
  ip_contains?: String
  ip_not_contains?: String
  ip_starts_with?: String
  ip_not_starts_with?: String
  ip_ends_with?: String
  ip_not_ends_with?: String
  expireAt?: DateTime
  expireAt_not?: DateTime
  expireAt_in?: DateTime[] | DateTime
  expireAt_not_in?: DateTime[] | DateTime
  expireAt_lt?: DateTime
  expireAt_lte?: DateTime
  expireAt_gt?: DateTime
  expireAt_gte?: DateTime
  company?: CompanyWhereInput
}

export interface ApiTokenCreatepermissionsInput {
  set?: ApiPermisionEnum[] | ApiPermisionEnum
}

export interface PersonSubscriptionWhereInput {
  AND?: PersonSubscriptionWhereInput[] | PersonSubscriptionWhereInput
  OR?: PersonSubscriptionWhereInput[] | PersonSubscriptionWhereInput
  NOT?: PersonSubscriptionWhereInput[] | PersonSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PersonWhereInput
}

export interface PersonCreateOneWithoutUsersInput {
  create?: PersonCreateWithoutUsersInput
  connect?: PersonWhereUniqueInput
}

export interface ApiTokenWhereUniqueInput {
  id?: ID_Input
}

export interface PersonCreateWithoutUsersInput {
  firstName: String
  lastName: String
  email: String
  password: String
  refreshTokens?: RefreshTokenCreateManyInput
  activeUser: UserCreateOneInput
}

export interface CompanyWhereUniqueInput {
  id?: ID_Input
  url?: String
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface UserCreateInput {
  status: UserStatus
  email?: String
  instanceId: ID_Input
  apiTokens?: ApiTokenCreateManyWithoutCreatedByInput
  company: CompanyCreateOneWithoutUsersInput
  person: PersonCreateOneWithoutUsersInput
}

export interface InvitationUpdateInput {
  token?: String
  email?: String
  expireAt?: DateTime
  createdBy?: UserUpdateOneInput
}

export interface CompanyCreateOneWithoutUsersInput {
  create?: CompanyCreateWithoutUsersInput
  connect?: CompanyWhereUniqueInput
}

export interface RefreshTokenUpdateInput {
  ip?: String
  expireAt?: DateTime
  company?: CompanyUpdateOneInput
}

export interface CompanyCreateWithoutUsersInput {
  name: String
  country: String
  url: String
  invitations?: InvitationCreateManyInput
}

export interface UserUpdateWithoutApiTokensDataInput {
  status?: UserStatus
  email?: String
  instanceId?: ID_Input
  company?: CompanyUpdateOneWithoutUsersInput
  person?: PersonUpdateOneWithoutUsersInput
}

export interface InvitationCreateManyInput {
  create?: InvitationCreateInput[] | InvitationCreateInput
  connect?: InvitationWhereUniqueInput[] | InvitationWhereUniqueInput
}

export interface ApiTokenUpdateInput {
  name?: String
  permissions?: ApiTokenUpdatepermissionsInput
  createdBy?: UserUpdateOneWithoutApiTokensInput
}

export interface InvitationUpdateWithWhereUniqueNestedInput {
  where: InvitationWhereUniqueInput
  data: InvitationUpdateDataInput
}

export interface UserUpdateWithoutPersonDataInput {
  status?: UserStatus
  email?: String
  instanceId?: ID_Input
  apiTokens?: ApiTokenUpdateManyWithoutCreatedByInput
  company?: CompanyUpdateOneWithoutUsersInput
}

export interface UserCreateManyWithoutPersonInput {
  create?: UserCreateWithoutPersonInput[] | UserCreateWithoutPersonInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface UserUpdateManyWithoutPersonInput {
  create?: UserCreateWithoutPersonInput[] | UserCreateWithoutPersonInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutPersonInput[] | UserUpdateWithWhereUniqueWithoutPersonInput
  upsert?: UserUpsertWithWhereUniqueWithoutPersonInput[] | UserUpsertWithWhereUniqueWithoutPersonInput
}

export interface UserCreateWithoutPersonInput {
  status: UserStatus
  email?: String
  instanceId: ID_Input
  apiTokens?: ApiTokenCreateManyWithoutCreatedByInput
  company: CompanyCreateOneWithoutUsersInput
}

export interface CompanyUpsertNestedInput {
  update: CompanyUpdateDataInput
  create: CompanyCreateInput
}

export interface ApiTokenCreateInput {
  name: String
  permissions?: ApiTokenCreatepermissionsInput
  createdBy: UserCreateOneWithoutApiTokensInput
}

export interface PersonUpsertWithoutUsersInput {
  update: PersonUpdateWithoutUsersDataInput
  create: PersonCreateWithoutUsersInput
}

export interface UserCreateOneWithoutApiTokensInput {
  create?: UserCreateWithoutApiTokensInput
  connect?: UserWhereUniqueInput
}

export interface CompanyUpsertWithoutUsersInput {
  update: CompanyUpdateWithoutUsersDataInput
  create: CompanyCreateWithoutUsersInput
}

export interface UserCreateWithoutApiTokensInput {
  status: UserStatus
  email?: String
  instanceId: ID_Input
  company: CompanyCreateOneWithoutUsersInput
  person: PersonCreateOneWithoutUsersInput
}

export interface InvitationUpdateDataInput {
  token?: String
  email?: String
  expireAt?: DateTime
  createdBy?: UserUpdateOneInput
}

export interface InvitationUpdateManyInput {
  create?: InvitationCreateInput[] | InvitationCreateInput
  connect?: InvitationWhereUniqueInput[] | InvitationWhereUniqueInput
  disconnect?: InvitationWhereUniqueInput[] | InvitationWhereUniqueInput
  delete?: InvitationWhereUniqueInput[] | InvitationWhereUniqueInput
  update?: InvitationUpdateWithWhereUniqueNestedInput[] | InvitationUpdateWithWhereUniqueNestedInput
  upsert?: InvitationUpsertWithWhereUniqueNestedInput[] | InvitationUpsertWithWhereUniqueNestedInput
}

export interface RefreshTokenCreateManyInput {
  create?: RefreshTokenCreateInput[] | RefreshTokenCreateInput
  connect?: RefreshTokenWhereUniqueInput[] | RefreshTokenWhereUniqueInput
}

export interface RefreshTokenUpdateManyInput {
  create?: RefreshTokenCreateInput[] | RefreshTokenCreateInput
  connect?: RefreshTokenWhereUniqueInput[] | RefreshTokenWhereUniqueInput
  disconnect?: RefreshTokenWhereUniqueInput[] | RefreshTokenWhereUniqueInput
  delete?: RefreshTokenWhereUniqueInput[] | RefreshTokenWhereUniqueInput
  update?: RefreshTokenUpdateWithWhereUniqueNestedInput[] | RefreshTokenUpdateWithWhereUniqueNestedInput
  upsert?: RefreshTokenUpsertWithWhereUniqueNestedInput[] | RefreshTokenUpsertWithWhereUniqueNestedInput
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

export interface RefreshTokenUpdateWithWhereUniqueNestedInput {
  where: RefreshTokenWhereUniqueInput
  data: RefreshTokenUpdateDataInput
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
  status?: UserStatus
  status_not?: UserStatus
  status_in?: UserStatus[] | UserStatus
  status_not_in?: UserStatus[] | UserStatus
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
  instanceId?: ID_Input
  instanceId_not?: ID_Input
  instanceId_in?: ID_Input[] | ID_Input
  instanceId_not_in?: ID_Input[] | ID_Input
  instanceId_lt?: ID_Input
  instanceId_lte?: ID_Input
  instanceId_gt?: ID_Input
  instanceId_gte?: ID_Input
  instanceId_contains?: ID_Input
  instanceId_not_contains?: ID_Input
  instanceId_starts_with?: ID_Input
  instanceId_not_starts_with?: ID_Input
  instanceId_ends_with?: ID_Input
  instanceId_not_ends_with?: ID_Input
  apiTokens_every?: ApiTokenWhereInput
  apiTokens_some?: ApiTokenWhereInput
  apiTokens_none?: ApiTokenWhereInput
  company?: CompanyWhereInput
  person?: PersonWhereInput
}

export interface RefreshTokenUpdateDataInput {
  ip?: String
  expireAt?: DateTime
  company?: CompanyUpdateOneInput
}

export interface ApiTokenSubscriptionWhereInput {
  AND?: ApiTokenSubscriptionWhereInput[] | ApiTokenSubscriptionWhereInput
  OR?: ApiTokenSubscriptionWhereInput[] | ApiTokenSubscriptionWhereInput
  NOT?: ApiTokenSubscriptionWhereInput[] | ApiTokenSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ApiTokenWhereInput
}

export interface CompanyUpdateOneInput {
  create?: CompanyCreateInput
  connect?: CompanyWhereUniqueInput
  delete?: Boolean
  update?: CompanyUpdateDataInput
  upsert?: CompanyUpsertNestedInput
}

export interface RefreshTokenWhereUniqueInput {
  id?: ID_Input
}

export interface CompanyUpdateDataInput {
  name?: String
  country?: String
  url?: String
  users?: UserUpdateManyWithoutCompanyInput
  invitations?: InvitationUpdateManyInput
}

export interface UserUpdateInput {
  status?: UserStatus
  email?: String
  instanceId?: ID_Input
  apiTokens?: ApiTokenUpdateManyWithoutCreatedByInput
  company?: CompanyUpdateOneWithoutUsersInput
  person?: PersonUpdateOneWithoutUsersInput
}

export interface UserUpdateManyWithoutCompanyInput {
  create?: UserCreateWithoutCompanyInput[] | UserCreateWithoutCompanyInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutCompanyInput[] | UserUpdateWithWhereUniqueWithoutCompanyInput
  upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput[] | UserUpsertWithWhereUniqueWithoutCompanyInput
}

export interface UserUpsertWithoutApiTokensInput {
  update: UserUpdateWithoutApiTokensDataInput
  create: UserCreateWithoutApiTokensInput
}

export interface UserUpdateWithWhereUniqueWithoutCompanyInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutCompanyDataInput
}

export interface UserUpsertWithWhereUniqueWithoutPersonInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutPersonDataInput
  create: UserCreateWithoutPersonInput
}

export interface UserUpdateWithoutCompanyDataInput {
  status?: UserStatus
  email?: String
  instanceId?: ID_Input
  apiTokens?: ApiTokenUpdateManyWithoutCreatedByInput
  person?: PersonUpdateOneWithoutUsersInput
}

export interface RefreshTokenUpsertWithWhereUniqueNestedInput {
  where: RefreshTokenWhereUniqueInput
  update: RefreshTokenUpdateDataInput
  create: RefreshTokenCreateInput
}

export interface ApiTokenUpdateManyWithoutCreatedByInput {
  create?: ApiTokenCreateWithoutCreatedByInput[] | ApiTokenCreateWithoutCreatedByInput
  connect?: ApiTokenWhereUniqueInput[] | ApiTokenWhereUniqueInput
  disconnect?: ApiTokenWhereUniqueInput[] | ApiTokenWhereUniqueInput
  delete?: ApiTokenWhereUniqueInput[] | ApiTokenWhereUniqueInput
  update?: ApiTokenUpdateWithWhereUniqueWithoutCreatedByInput[] | ApiTokenUpdateWithWhereUniqueWithoutCreatedByInput
  upsert?: ApiTokenUpsertWithWhereUniqueWithoutCreatedByInput[] | ApiTokenUpsertWithWhereUniqueWithoutCreatedByInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface ApiTokenUpdateWithWhereUniqueWithoutCreatedByInput {
  where: ApiTokenWhereUniqueInput
  data: ApiTokenUpdateWithoutCreatedByDataInput
}

export interface PersonCreateInput {
  firstName: String
  lastName: String
  email: String
  password: String
  refreshTokens?: RefreshTokenCreateManyInput
  users?: UserCreateManyWithoutPersonInput
  activeUser: UserCreateOneInput
}

export interface ApiTokenUpdateWithoutCreatedByDataInput {
  name?: String
  permissions?: ApiTokenUpdatepermissionsInput
}

export interface ApiTokenWhereInput {
  AND?: ApiTokenWhereInput[] | ApiTokenWhereInput
  OR?: ApiTokenWhereInput[] | ApiTokenWhereInput
  NOT?: ApiTokenWhereInput[] | ApiTokenWhereInput
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
  createdBy?: UserWhereInput
}

export interface ApiTokenUpdatepermissionsInput {
  set?: ApiPermisionEnum[] | ApiPermisionEnum
}

export interface PersonWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface ApiTokenUpsertWithWhereUniqueWithoutCreatedByInput {
  where: ApiTokenWhereUniqueInput
  update: ApiTokenUpdateWithoutCreatedByDataInput
  create: ApiTokenCreateWithoutCreatedByInput
}

export interface CompanyUpdateInput {
  name?: String
  country?: String
  url?: String
  users?: UserUpdateManyWithoutCompanyInput
  invitations?: InvitationUpdateManyInput
}

export interface PersonUpdateOneWithoutUsersInput {
  create?: PersonCreateWithoutUsersInput
  connect?: PersonWhereUniqueInput
  delete?: Boolean
  update?: PersonUpdateWithoutUsersDataInput
  upsert?: PersonUpsertWithoutUsersInput
}

export interface UserUpdateWithWhereUniqueWithoutPersonInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutPersonDataInput
}

export interface InvitationUpsertWithWhereUniqueNestedInput {
  where: InvitationWhereUniqueInput
  update: InvitationUpdateDataInput
  create: InvitationCreateInput
}

export interface CompanyUpdateOneWithoutUsersInput {
  create?: CompanyCreateWithoutUsersInput
  connect?: CompanyWhereUniqueInput
  delete?: Boolean
  update?: CompanyUpdateWithoutUsersDataInput
  upsert?: CompanyUpsertWithoutUsersInput
}

export interface UserUpdateDataInput {
  status?: UserStatus
  email?: String
  instanceId?: ID_Input
  apiTokens?: ApiTokenUpdateManyWithoutCreatedByInput
  company?: CompanyUpdateOneWithoutUsersInput
  person?: PersonUpdateOneWithoutUsersInput
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface PersonUpdateWithoutUsersDataInput {
  firstName?: String
  lastName?: String
  email?: String
  password?: String
  refreshTokens?: RefreshTokenUpdateManyInput
  activeUser?: UserUpdateOneInput
}

export interface UserUpsertWithWhereUniqueWithoutCompanyInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutCompanyDataInput
  create: UserCreateWithoutCompanyInput
}

export interface UserUpdateOneWithoutApiTokensInput {
  create?: UserCreateWithoutApiTokensInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutApiTokensDataInput
  upsert?: UserUpsertWithoutApiTokensInput
}

export interface InvitationWhereUniqueInput {
  id?: ID_Input
}

export interface CompanyWhereInput {
  AND?: CompanyWhereInput[] | CompanyWhereInput
  OR?: CompanyWhereInput[] | CompanyWhereInput
  NOT?: CompanyWhereInput[] | CompanyWhereInput
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
  users_every?: UserWhereInput
  users_some?: UserWhereInput
  users_none?: UserWhereInput
  invitations_every?: InvitationWhereInput
  invitations_some?: InvitationWhereInput
  invitations_none?: InvitationWhereInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface UserPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  status: UserStatus
  email?: String
  instanceId: ID_Output
}

/*
 * A connection to a list of items.

 */
export interface PersonConnection {
  pageInfo: PageInfo
  edges: PersonEdge[]
  aggregate: AggregatePerson
}

export interface Person extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  firstName: String
  lastName: String
  email: String
  password: String
  refreshTokens?: RefreshToken[]
  users?: User[]
  activeUser: User
}

export interface BatchPayload {
  count: Long
}

export interface AggregateUser {
  count: Int
}

export interface RefreshToken extends Node {
  id: ID_Output
  createdAt: DateTime
  ip: String
  company: Company
  expireAt: DateTime
}

export interface Company extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  country: String
  url: String
  users?: User[]
  invitations?: Invitation[]
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface AggregateInvitation {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface InvitationConnection {
  pageInfo: PageInfo
  edges: InvitationEdge[]
  aggregate: AggregateInvitation
}

export interface InvitationPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  token: String
  email: String
  expireAt: DateTime
}

/*
 * An edge in a connection.

 */
export interface CompanyEdge {
  node: Company
  cursor: String
}

export interface InvitationSubscriptionPayload {
  mutation: MutationType
  node?: Invitation
  updatedFields?: String[]
  previousValues?: InvitationPreviousValues
}

export interface AggregateRefreshToken {
  count: Int
}

export interface PersonSubscriptionPayload {
  mutation: MutationType
  node?: Person
  updatedFields?: String[]
  previousValues?: PersonPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface RefreshTokenConnection {
  pageInfo: PageInfo
  edges: RefreshTokenEdge[]
  aggregate: AggregateRefreshToken
}

export interface PersonPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  firstName: String
  lastName: String
  email: String
  password: String
}

/*
 * An edge in a connection.

 */
export interface ApiTokenEdge {
  node: ApiToken
  cursor: String
}

export interface Invitation extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  token: String
  email: String
  expireAt: DateTime
  createdBy: User
}

export interface AggregatePerson {
  count: Int
}

export interface ApiTokenSubscriptionPayload {
  mutation: MutationType
  node?: ApiToken
  updatedFields?: String[]
  previousValues?: ApiTokenPreviousValues
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface ApiTokenPreviousValues {
  id: ID_Output
  createdAt: DateTime
  permissions: ApiPermisionEnum[]
  name: String
}

/*
 * An edge in a connection.

 */
export interface InvitationEdge {
  node: Invitation
  cursor: String
}

export interface ApiToken extends Node {
  id: ID_Output
  createdAt: DateTime
  permissions: ApiPermisionEnum[]
  name: String
  createdBy: User
}

/*
 * A connection to a list of items.

 */
export interface CompanyConnection {
  pageInfo: PageInfo
  edges: CompanyEdge[]
  aggregate: AggregateCompany
}

export interface RefreshTokenSubscriptionPayload {
  mutation: MutationType
  node?: RefreshToken
  updatedFields?: String[]
  previousValues?: RefreshTokenPreviousValues
}

export interface AggregateApiToken {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface PersonEdge {
  node: Person
  cursor: String
}

export interface CompanyPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  country: String
  url: String
}

export interface CompanySubscriptionPayload {
  mutation: MutationType
  node?: Company
  updatedFields?: String[]
  previousValues?: CompanyPreviousValues
}

export interface User extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  status: UserStatus
  email?: String
  apiTokens?: ApiToken[]
  instanceId: ID_Output
  company: Company
  person: Person
}

export interface RefreshTokenPreviousValues {
  id: ID_Output
  createdAt: DateTime
  ip: String
  expireAt: DateTime
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

/*
 * A connection to a list of items.

 */
export interface ApiTokenConnection {
  pageInfo: PageInfo
  edges: ApiTokenEdge[]
  aggregate: AggregateApiToken
}

/*
 * An edge in a connection.

 */
export interface RefreshTokenEdge {
  node: RefreshToken
  cursor: String
}

export interface AggregateCompany {
  count: Int
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

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
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export type DateTime = Date | string