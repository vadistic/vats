import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    userRoles: <T = UserRole[]>(args: { where?: UserRoleWhereInput, orderBy?: UserRoleOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    roles: <T = Role[]>(args: { where?: RoleWhereInput, orderBy?: RoleOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    posts: <T = Post[]>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    userRole: <T = UserRole | null>(args: { where: UserRoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    role: <T = Role | null>(args: { where: RoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    post: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    userRolesConnection: <T = UserRoleConnection>(args: { where?: UserRoleWhereInput, orderBy?: UserRoleOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    rolesConnection: <T = RoleConnection>(args: { where?: RoleWhereInput, orderBy?: RoleOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    postsConnection: <T = PostConnection>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUserRole: <T = UserRole>(args: { data: UserRoleCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createRole: <T = Role>(args: { data: RoleCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPost: <T = Post>(args: { data: PostCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUserRole: <T = UserRole | null>(args: { data: UserRoleUpdateInput, where: UserRoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateRole: <T = Role | null>(args: { data: RoleUpdateInput, where: RoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePost: <T = Post | null>(args: { data: PostUpdateInput, where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUserRole: <T = UserRole | null>(args: { where: UserRoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteRole: <T = Role | null>(args: { where: RoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePost: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUserRole: <T = UserRole>(args: { where: UserRoleWhereUniqueInput, create: UserRoleCreateInput, update: UserRoleUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertRole: <T = Role>(args: { where: RoleWhereUniqueInput, create: RoleCreateInput, update: RoleUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPost: <T = Post>(args: { where: PostWhereUniqueInput, create: PostCreateInput, update: PostUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUserRoles: <T = BatchPayload>(args: { data: UserRoleUpdateInput, where?: UserRoleWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyRoles: <T = BatchPayload>(args: { data: RoleUpdateInput, where?: RoleWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPosts: <T = BatchPayload>(args: { data: PostUpdateInput, where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUserRoles: <T = BatchPayload>(args: { where?: UserRoleWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRoles: <T = BatchPayload>(args: { where?: RoleWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPosts: <T = BatchPayload>(args: { where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    userRole: <T = UserRoleSubscriptionPayload | null>(args: { where?: UserRoleSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    role: <T = RoleSubscriptionPayload | null>(args: { where?: RoleSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    post: <T = PostSubscriptionPayload | null>(args: { where?: PostSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  UserRole: (where?: UserRoleWhereInput) => Promise<boolean>
  Role: (where?: RoleWhereInput) => Promise<boolean>
  Post: (where?: PostWhereInput) => Promise<boolean>
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

const typeDefs = `type AggregatePost {
  count: Int!
}

type AggregateRole {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateUserRole {
  count: Int!
}

enum AvailableRoles {
  USER
  AUTHOR
  EDITOR
  ADMIN
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createUserRole(data: UserRoleCreateInput!): UserRole!
  createRole(data: RoleCreateInput!): Role!
  createPost(data: PostCreateInput!): Post!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateUserRole(data: UserRoleUpdateInput!, where: UserRoleWhereUniqueInput!): UserRole
  updateRole(data: RoleUpdateInput!, where: RoleWhereUniqueInput!): Role
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  deleteUser(where: UserWhereUniqueInput!): User
  deleteUserRole(where: UserRoleWhereUniqueInput!): UserRole
  deleteRole(where: RoleWhereUniqueInput!): Role
  deletePost(where: PostWhereUniqueInput!): Post
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertUserRole(where: UserRoleWhereUniqueInput!, create: UserRoleCreateInput!, update: UserRoleUpdateInput!): UserRole!
  upsertRole(where: RoleWhereUniqueInput!, create: RoleCreateInput!, update: RoleUpdateInput!): Role!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyUserRoles(data: UserRoleUpdateInput!, where: UserRoleWhereInput): BatchPayload!
  updateManyRoles(data: RoleUpdateInput!, where: RoleWhereInput): BatchPayload!
  updateManyPosts(data: PostUpdateInput!, where: PostWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyUserRoles(where: UserRoleWhereInput): BatchPayload!
  deleteManyRoles(where: RoleWhereInput): BatchPayload!
  deleteManyPosts(where: PostWhereInput): BatchPayload!
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

type Post implements Node {
  id: ID!
  title: String!
  content: String!
  createdAt: DateTime!
  user(where: UserWhereInput): User!
}

"""A connection to a list of items."""
type PostConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  title: String!
  content: String!
  user: UserCreateOneWithoutPostsInput!
}

input PostCreateManyWithoutUserInput {
  create: [PostCreateWithoutUserInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutUserInput {
  title: String!
  content: String!
}

"""An edge in a connection."""
type PostEdge {
  """The item at the end of the edge."""
  node: Post!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  content_ASC
  content_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PostPreviousValues {
  id: ID!
  title: String!
  content: String!
  createdAt: DateTime!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PostSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostSubscriptionWhereInput!]

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
  node: PostWhereInput
}

input PostUpdateInput {
  title: String
  content: String
  user: UserUpdateOneWithoutPostsInput
}

input PostUpdateManyWithoutUserInput {
  create: [PostCreateWithoutUserInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  delete: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutUserInput!]
}

input PostUpdateWithoutUserDataInput {
  title: String
  content: String
}

input PostUpdateWithWhereUniqueWithoutUserInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutUserDataInput!
}

input PostUpsertWithWhereUniqueWithoutUserInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutUserDataInput!
  create: PostCreateWithoutUserInput!
}

input PostWhereInput {
  """Logical AND on all given filters."""
  AND: [PostWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostWhereInput!]
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
  user: UserWhereInput
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  userRoles(where: UserRoleWhereInput, orderBy: UserRoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserRole]!
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role]!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  user(where: UserWhereUniqueInput!): User
  userRole(where: UserRoleWhereUniqueInput!): UserRole
  role(where: RoleWhereUniqueInput!): Role
  post(where: PostWhereUniqueInput!): Post
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  userRolesConnection(where: UserRoleWhereInput, orderBy: UserRoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserRoleConnection!
  rolesConnection(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoleConnection!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Role implements Node {
  id: ID!
  name: AvailableRoles!
  users(where: UserRoleWhereInput, orderBy: UserRoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserRole!]
}

"""A connection to a list of items."""
type RoleConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [RoleEdge]!
  aggregate: AggregateRole!
}

input RoleCreateInput {
  name: AvailableRoles!
  users: UserRoleCreateManyWithoutRoleInput
}

input RoleCreateOneWithoutUsersInput {
  create: RoleCreateWithoutUsersInput
  connect: RoleWhereUniqueInput
}

input RoleCreateWithoutUsersInput {
  name: AvailableRoles!
}

"""An edge in a connection."""
type RoleEdge {
  """The item at the end of the edge."""
  node: Role!

  """A cursor for use in pagination."""
  cursor: String!
}

enum RoleOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type RolePreviousValues {
  id: ID!
  name: AvailableRoles!
}

type RoleSubscriptionPayload {
  mutation: MutationType!
  node: Role
  updatedFields: [String!]
  previousValues: RolePreviousValues
}

input RoleSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [RoleSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RoleSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RoleSubscriptionWhereInput!]

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
  node: RoleWhereInput
}

input RoleUpdateInput {
  name: AvailableRoles
  users: UserRoleUpdateManyWithoutRoleInput
}

input RoleUpdateOneWithoutUsersInput {
  create: RoleCreateWithoutUsersInput
  connect: RoleWhereUniqueInput
  delete: Boolean
  update: RoleUpdateWithoutUsersDataInput
  upsert: RoleUpsertWithoutUsersInput
}

input RoleUpdateWithoutUsersDataInput {
  name: AvailableRoles
}

input RoleUpsertWithoutUsersInput {
  update: RoleUpdateWithoutUsersDataInput!
  create: RoleCreateWithoutUsersInput!
}

input RoleWhereInput {
  """Logical AND on all given filters."""
  AND: [RoleWhereInput!]

  """Logical OR on all given filters."""
  OR: [RoleWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RoleWhereInput!]
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
  name: AvailableRoles

  """All values that are not equal to given value."""
  name_not: AvailableRoles

  """All values that are contained in given list."""
  name_in: [AvailableRoles!]

  """All values that are not contained in given list."""
  name_not_in: [AvailableRoles!]
  users_every: UserRoleWhereInput
  users_some: UserRoleWhereInput
  users_none: UserRoleWhereInput
}

input RoleWhereUniqueInput {
  id: ID
  name: AvailableRoles
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  userRole(where: UserRoleSubscriptionWhereInput): UserRoleSubscriptionPayload
  role(where: RoleSubscriptionWhereInput): RoleSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
}

type User implements Node {
  id: ID!
  username: String!
  email: String!
  password: String!
  createdAt: DateTime!
  roles(where: UserRoleWhereInput, orderBy: UserRoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserRole!]
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
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
  username: String!
  email: String!
  password: String!
  roles: UserRoleCreateManyWithoutUserInput
  posts: PostCreateManyWithoutUserInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutRolesInput {
  create: UserCreateWithoutRolesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutPostsInput {
  username: String!
  email: String!
  password: String!
  roles: UserRoleCreateManyWithoutUserInput
}

input UserCreateWithoutRolesInput {
  username: String!
  email: String!
  password: String!
  posts: PostCreateManyWithoutUserInput
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
  username_ASC
  username_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  username: String!
  email: String!
  password: String!
  createdAt: DateTime!
}

type UserRole implements Node {
  id: ID!
  user(where: UserWhereInput): User!
  role(where: RoleWhereInput): Role!
}

"""A connection to a list of items."""
type UserRoleConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserRoleEdge]!
  aggregate: AggregateUserRole!
}

input UserRoleCreateInput {
  user: UserCreateOneWithoutRolesInput!
  role: RoleCreateOneWithoutUsersInput!
}

input UserRoleCreateManyWithoutRoleInput {
  create: [UserRoleCreateWithoutRoleInput!]
  connect: [UserRoleWhereUniqueInput!]
}

input UserRoleCreateManyWithoutUserInput {
  create: [UserRoleCreateWithoutUserInput!]
  connect: [UserRoleWhereUniqueInput!]
}

input UserRoleCreateWithoutRoleInput {
  user: UserCreateOneWithoutRolesInput!
}

input UserRoleCreateWithoutUserInput {
  role: RoleCreateOneWithoutUsersInput!
}

"""An edge in a connection."""
type UserRoleEdge {
  """The item at the end of the edge."""
  node: UserRole!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserRoleOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserRolePreviousValues {
  id: ID!
}

type UserRoleSubscriptionPayload {
  mutation: MutationType!
  node: UserRole
  updatedFields: [String!]
  previousValues: UserRolePreviousValues
}

input UserRoleSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserRoleSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserRoleSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserRoleSubscriptionWhereInput!]

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
  node: UserRoleWhereInput
}

input UserRoleUpdateInput {
  user: UserUpdateOneWithoutRolesInput
  role: RoleUpdateOneWithoutUsersInput
}

input UserRoleUpdateManyWithoutRoleInput {
  create: [UserRoleCreateWithoutRoleInput!]
  connect: [UserRoleWhereUniqueInput!]
  disconnect: [UserRoleWhereUniqueInput!]
  delete: [UserRoleWhereUniqueInput!]
  update: [UserRoleUpdateWithWhereUniqueWithoutRoleInput!]
  upsert: [UserRoleUpsertWithWhereUniqueWithoutRoleInput!]
}

input UserRoleUpdateManyWithoutUserInput {
  create: [UserRoleCreateWithoutUserInput!]
  connect: [UserRoleWhereUniqueInput!]
  disconnect: [UserRoleWhereUniqueInput!]
  delete: [UserRoleWhereUniqueInput!]
  update: [UserRoleUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [UserRoleUpsertWithWhereUniqueWithoutUserInput!]
}

input UserRoleUpdateWithoutRoleDataInput {
  user: UserUpdateOneWithoutRolesInput
}

input UserRoleUpdateWithoutUserDataInput {
  role: RoleUpdateOneWithoutUsersInput
}

input UserRoleUpdateWithWhereUniqueWithoutRoleInput {
  where: UserRoleWhereUniqueInput!
  data: UserRoleUpdateWithoutRoleDataInput!
}

input UserRoleUpdateWithWhereUniqueWithoutUserInput {
  where: UserRoleWhereUniqueInput!
  data: UserRoleUpdateWithoutUserDataInput!
}

input UserRoleUpsertWithWhereUniqueWithoutRoleInput {
  where: UserRoleWhereUniqueInput!
  update: UserRoleUpdateWithoutRoleDataInput!
  create: UserRoleCreateWithoutRoleInput!
}

input UserRoleUpsertWithWhereUniqueWithoutUserInput {
  where: UserRoleWhereUniqueInput!
  update: UserRoleUpdateWithoutUserDataInput!
  create: UserRoleCreateWithoutUserInput!
}

input UserRoleWhereInput {
  """Logical AND on all given filters."""
  AND: [UserRoleWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserRoleWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserRoleWhereInput!]
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
  user: UserWhereInput
  role: RoleWhereInput
}

input UserRoleWhereUniqueInput {
  id: ID
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

input UserUpdateInput {
  username: String
  email: String
  password: String
  roles: UserRoleUpdateManyWithoutUserInput
  posts: PostUpdateManyWithoutUserInput
}

input UserUpdateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
}

input UserUpdateOneWithoutRolesInput {
  create: UserCreateWithoutRolesInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutRolesDataInput
  upsert: UserUpsertWithoutRolesInput
}

input UserUpdateWithoutPostsDataInput {
  username: String
  email: String
  password: String
  roles: UserRoleUpdateManyWithoutUserInput
}

input UserUpdateWithoutRolesDataInput {
  username: String
  email: String
  password: String
  posts: PostUpdateManyWithoutUserInput
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserUpsertWithoutRolesInput {
  update: UserUpdateWithoutRolesDataInput!
  create: UserCreateWithoutRolesInput!
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
  roles_every: UserRoleWhereInput
  roles_some: UserRoleWhereInput
  roles_none: UserRoleWhereInput
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
}

input UserWhereUniqueInput {
  id: ID
  username: String
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'username_ASC' |
  'username_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type AvailableRoles =   'USER' |
  'AUTHOR' |
  'EDITOR' |
  'ADMIN'

export type UserRoleOrderByInput =   'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PostOrderByInput =   'id_ASC' |
  'id_DESC' |
  'title_ASC' |
  'title_DESC' |
  'content_ASC' |
  'content_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type RoleOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface RoleCreateInput {
  name: AvailableRoles
  users?: UserRoleCreateManyWithoutRoleInput
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
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  roles_every?: UserRoleWhereInput
  roles_some?: UserRoleWhereInput
  roles_none?: UserRoleWhereInput
  posts_every?: PostWhereInput
  posts_some?: PostWhereInput
  posts_none?: PostWhereInput
}

export interface UserCreateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput
  connect?: UserWhereUniqueInput
}

export interface PostWhereInput {
  AND?: PostWhereInput[] | PostWhereInput
  OR?: PostWhereInput[] | PostWhereInput
  NOT?: PostWhereInput[] | PostWhereInput
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
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  user?: UserWhereInput
}

export interface UserCreateInput {
  username: String
  email: String
  password: String
  roles?: UserRoleCreateManyWithoutUserInput
  posts?: PostCreateManyWithoutUserInput
}

export interface PostUpdateManyWithoutUserInput {
  create?: PostCreateWithoutUserInput[] | PostCreateWithoutUserInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  disconnect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  delete?: PostWhereUniqueInput[] | PostWhereUniqueInput
  update?: PostUpdateWithWhereUniqueWithoutUserInput[] | PostUpdateWithWhereUniqueWithoutUserInput
  upsert?: PostUpsertWithWhereUniqueWithoutUserInput[] | PostUpsertWithWhereUniqueWithoutUserInput
}

export interface UserRoleCreateManyWithoutUserInput {
  create?: UserRoleCreateWithoutUserInput[] | UserRoleCreateWithoutUserInput
  connect?: UserRoleWhereUniqueInput[] | UserRoleWhereUniqueInput
}

export interface UserCreateWithoutPostsInput {
  username: String
  email: String
  password: String
  roles?: UserRoleCreateManyWithoutUserInput
}

export interface UserRoleCreateWithoutUserInput {
  role: RoleCreateOneWithoutUsersInput
}

export interface PostSubscriptionWhereInput {
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PostWhereInput
}

export interface RoleCreateOneWithoutUsersInput {
  create?: RoleCreateWithoutUsersInput
  connect?: RoleWhereUniqueInput
}

export interface UserRoleWhereInput {
  AND?: UserRoleWhereInput[] | UserRoleWhereInput
  OR?: UserRoleWhereInput[] | UserRoleWhereInput
  NOT?: UserRoleWhereInput[] | UserRoleWhereInput
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
  user?: UserWhereInput
  role?: RoleWhereInput
}

export interface RoleCreateWithoutUsersInput {
  name: AvailableRoles
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

export interface PostCreateManyWithoutUserInput {
  create?: PostCreateWithoutUserInput[] | PostCreateWithoutUserInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
}

export interface UserRoleWhereUniqueInput {
  id?: ID_Input
}

export interface PostCreateWithoutUserInput {
  title: String
  content: String
}

export interface PostWhereUniqueInput {
  id?: ID_Input
}

export interface UserRoleCreateInput {
  user: UserCreateOneWithoutRolesInput
  role: RoleCreateOneWithoutUsersInput
}

export interface UserUpdateWithoutPostsDataInput {
  username?: String
  email?: String
  password?: String
  roles?: UserRoleUpdateManyWithoutUserInput
}

export interface UserCreateOneWithoutRolesInput {
  create?: UserCreateWithoutRolesInput
  connect?: UserWhereUniqueInput
}

export interface PostUpdateInput {
  title?: String
  content?: String
  user?: UserUpdateOneWithoutPostsInput
}

export interface UserCreateWithoutRolesInput {
  username: String
  email: String
  password: String
  posts?: PostCreateManyWithoutUserInput
}

export interface UserRoleUpdateWithoutRoleDataInput {
  user?: UserUpdateOneWithoutRolesInput
}

export interface PostUpdateWithoutUserDataInput {
  title?: String
  content?: String
}

export interface UserRoleUpdateManyWithoutRoleInput {
  create?: UserRoleCreateWithoutRoleInput[] | UserRoleCreateWithoutRoleInput
  connect?: UserRoleWhereUniqueInput[] | UserRoleWhereUniqueInput
  disconnect?: UserRoleWhereUniqueInput[] | UserRoleWhereUniqueInput
  delete?: UserRoleWhereUniqueInput[] | UserRoleWhereUniqueInput
  update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput[] | UserRoleUpdateWithWhereUniqueWithoutRoleInput
  upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput[] | UserRoleUpsertWithWhereUniqueWithoutRoleInput
}

export interface UserRoleCreateManyWithoutRoleInput {
  create?: UserRoleCreateWithoutRoleInput[] | UserRoleCreateWithoutRoleInput
  connect?: UserRoleWhereUniqueInput[] | UserRoleWhereUniqueInput
}

export interface UserUpsertWithoutRolesInput {
  update: UserUpdateWithoutRolesDataInput
  create: UserCreateWithoutRolesInput
}

export interface UserRoleCreateWithoutRoleInput {
  user: UserCreateOneWithoutRolesInput
}

export interface UserUpdateOneWithoutRolesInput {
  create?: UserCreateWithoutRolesInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutRolesDataInput
  upsert?: UserUpsertWithoutRolesInput
}

export interface PostCreateInput {
  title: String
  content: String
  user: UserCreateOneWithoutPostsInput
}

export interface PostUpsertWithWhereUniqueWithoutUserInput {
  where: PostWhereUniqueInput
  update: PostUpdateWithoutUserDataInput
  create: PostCreateWithoutUserInput
}

export interface PostUpdateWithWhereUniqueWithoutUserInput {
  where: PostWhereUniqueInput
  data: PostUpdateWithoutUserDataInput
}

export interface RoleSubscriptionWhereInput {
  AND?: RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput
  OR?: RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput
  NOT?: RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: RoleWhereInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  username?: String
  email?: String
}

export interface UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput
  create: UserCreateWithoutPostsInput
}

export interface UserUpdateInput {
  username?: String
  email?: String
  password?: String
  roles?: UserRoleUpdateManyWithoutUserInput
  posts?: PostUpdateManyWithoutUserInput
}

export interface UserRoleUpsertWithWhereUniqueWithoutRoleInput {
  where: UserRoleWhereUniqueInput
  update: UserRoleUpdateWithoutRoleDataInput
  create: UserRoleCreateWithoutRoleInput
}

export interface UserRoleUpdateManyWithoutUserInput {
  create?: UserRoleCreateWithoutUserInput[] | UserRoleCreateWithoutUserInput
  connect?: UserRoleWhereUniqueInput[] | UserRoleWhereUniqueInput
  disconnect?: UserRoleWhereUniqueInput[] | UserRoleWhereUniqueInput
  delete?: UserRoleWhereUniqueInput[] | UserRoleWhereUniqueInput
  update?: UserRoleUpdateWithWhereUniqueWithoutUserInput[] | UserRoleUpdateWithWhereUniqueWithoutUserInput
  upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput[] | UserRoleUpsertWithWhereUniqueWithoutUserInput
}

export interface RoleUpdateInput {
  name?: AvailableRoles
  users?: UserRoleUpdateManyWithoutRoleInput
}

export interface UserRoleUpdateWithWhereUniqueWithoutUserInput {
  where: UserRoleWhereUniqueInput
  data: UserRoleUpdateWithoutUserDataInput
}

export interface UserRoleUpdateInput {
  user?: UserUpdateOneWithoutRolesInput
  role?: RoleUpdateOneWithoutUsersInput
}

export interface UserRoleUpdateWithoutUserDataInput {
  role?: RoleUpdateOneWithoutUsersInput
}

export interface UserRoleSubscriptionWhereInput {
  AND?: UserRoleSubscriptionWhereInput[] | UserRoleSubscriptionWhereInput
  OR?: UserRoleSubscriptionWhereInput[] | UserRoleSubscriptionWhereInput
  NOT?: UserRoleSubscriptionWhereInput[] | UserRoleSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserRoleWhereInput
}

export interface UserRoleUpsertWithWhereUniqueWithoutUserInput {
  where: UserRoleWhereUniqueInput
  update: UserRoleUpdateWithoutUserDataInput
  create: UserRoleCreateWithoutUserInput
}

export interface RoleUpsertWithoutUsersInput {
  update: RoleUpdateWithoutUsersDataInput
  create: RoleCreateWithoutUsersInput
}

export interface RoleUpdateWithoutUsersDataInput {
  name?: AvailableRoles
}

export interface RoleUpdateOneWithoutUsersInput {
  create?: RoleCreateWithoutUsersInput
  connect?: RoleWhereUniqueInput
  delete?: Boolean
  update?: RoleUpdateWithoutUsersDataInput
  upsert?: RoleUpsertWithoutUsersInput
}

export interface RoleWhereUniqueInput {
  id?: ID_Input
  name?: AvailableRoles
}

export interface RoleWhereInput {
  AND?: RoleWhereInput[] | RoleWhereInput
  OR?: RoleWhereInput[] | RoleWhereInput
  NOT?: RoleWhereInput[] | RoleWhereInput
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
  name?: AvailableRoles
  name_not?: AvailableRoles
  name_in?: AvailableRoles[] | AvailableRoles
  name_not_in?: AvailableRoles[] | AvailableRoles
  users_every?: UserRoleWhereInput
  users_some?: UserRoleWhereInput
  users_none?: UserRoleWhereInput
}

export interface UserUpdateWithoutRolesDataInput {
  username?: String
  email?: String
  password?: String
  posts?: PostUpdateManyWithoutUserInput
}

export interface UserRoleUpdateWithWhereUniqueWithoutRoleInput {
  where: UserRoleWhereUniqueInput
  data: UserRoleUpdateWithoutRoleDataInput
}

export interface UserUpdateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutPostsDataInput
  upsert?: UserUpsertWithoutPostsInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface PostPreviousValues {
  id: ID_Output
  title: String
  content: String
  createdAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface User extends Node {
  id: ID_Output
  username: String
  email: String
  password: String
  createdAt: DateTime
  roles?: UserRole[]
  posts?: Post[]
}

export interface BatchPayload {
  count: Long
}

export interface AggregatePost {
  count: Int
}

export interface UserRole extends Node {
  id: ID_Output
  user: User
  role: Role
}

export interface Role extends Node {
  id: ID_Output
  name: AvailableRoles
  users?: UserRole[]
}

/*
 * An edge in a connection.

 */
export interface PostEdge {
  node: Post
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface PostConnection {
  pageInfo: PageInfo
  edges: PostEdge[]
  aggregate: AggregatePost
}

export interface AggregateRole {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface RoleConnection {
  pageInfo: PageInfo
  edges: RoleEdge[]
  aggregate: AggregateRole
}

export interface RolePreviousValues {
  id: ID_Output
  name: AvailableRoles
}

/*
 * An edge in a connection.

 */
export interface UserRoleEdge {
  node: UserRole
  cursor: String
}

export interface RoleSubscriptionPayload {
  mutation: MutationType
  node?: Role
  updatedFields?: String[]
  previousValues?: RolePreviousValues
}

export interface AggregateUser {
  count: Int
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface PostSubscriptionPayload {
  mutation: MutationType
  node?: Post
  updatedFields?: String[]
  previousValues?: PostPreviousValues
}

/*
 * An edge in a connection.

 */
export interface RoleEdge {
  node: Role
  cursor: String
}

export interface UserRolePreviousValues {
  id: ID_Output
}

export interface UserRoleSubscriptionPayload {
  mutation: MutationType
  node?: UserRole
  updatedFields?: String[]
  previousValues?: UserRolePreviousValues
}

export interface Post extends Node {
  id: ID_Output
  title: String
  content: String
  createdAt: DateTime
  user: User
}

export interface UserPreviousValues {
  id: ID_Output
  username: String
  email: String
  password: String
  createdAt: DateTime
}

export interface AggregateUserRole {
  count: Int
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
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface UserRoleConnection {
  pageInfo: PageInfo
  edges: UserRoleEdge[]
  aggregate: AggregateUserRole
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

export type DateTime = Date | string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string