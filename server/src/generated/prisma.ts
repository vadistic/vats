import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    posts: <T = Post[]>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    candidates: <T = Candidate[]>(args: { where?: CandidateWhereInput, orderBy?: CandidateOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    applications: <T = Application[]>(args: { where?: ApplicationWhereInput, orderBy?: ApplicationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    offers: <T = Offer[]>(args: { where?: OfferWhereInput, orderBy?: OfferOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    locations: <T = Location[]>(args: { where?: LocationWhereInput, orderBy?: LocationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    candidateMetas: <T = CandidateMeta[]>(args: { where?: CandidateMetaWhereInput, orderBy?: CandidateMetaOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    candidateBasics: <T = CandidateBasic[]>(args: { where?: CandidateBasicWhereInput, orderBy?: CandidateBasicOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    countries: <T = Country[]>(args: { where?: CountryWhereInput, orderBy?: CountryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    actions: <T = Action[]>(args: { where?: ActionWhereInput, orderBy?: ActionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stages: <T = Stage[]>(args: { where?: StageWhereInput, orderBy?: StageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    persons: <T = Person[]>(args: { where?: PersonWhereInput, orderBy?: PersonOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    post: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    candidate: <T = Candidate | null>(args: { where: CandidateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    offer: <T = Offer | null>(args: { where: OfferWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    country: <T = Country | null>(args: { where: CountryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    action: <T = Action | null>(args: { where: ActionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stage: <T = Stage | null>(args: { where: StageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    person: <T = Person | null>(args: { where: PersonWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    postsConnection: <T = PostConnection>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    candidatesConnection: <T = CandidateConnection>(args: { where?: CandidateWhereInput, orderBy?: CandidateOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    applicationsConnection: <T = ApplicationConnection>(args: { where?: ApplicationWhereInput, orderBy?: ApplicationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    offersConnection: <T = OfferConnection>(args: { where?: OfferWhereInput, orderBy?: OfferOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    locationsConnection: <T = LocationConnection>(args: { where?: LocationWhereInput, orderBy?: LocationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    candidateMetasConnection: <T = CandidateMetaConnection>(args: { where?: CandidateMetaWhereInput, orderBy?: CandidateMetaOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    candidateBasicsConnection: <T = CandidateBasicConnection>(args: { where?: CandidateBasicWhereInput, orderBy?: CandidateBasicOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    countriesConnection: <T = CountryConnection>(args: { where?: CountryWhereInput, orderBy?: CountryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    actionsConnection: <T = ActionConnection>(args: { where?: ActionWhereInput, orderBy?: ActionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stagesConnection: <T = StageConnection>(args: { where?: StageWhereInput, orderBy?: StageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    personsConnection: <T = PersonConnection>(args: { where?: PersonWhereInput, orderBy?: PersonOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createPost: <T = Post>(args: { data: PostCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCandidate: <T = Candidate>(args: { data: CandidateCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createApplication: <T = Application>(args: { data: ApplicationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createOffer: <T = Offer>(args: { data: OfferCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLocation: <T = Location>(args: { data: LocationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCandidateMeta: <T = CandidateMeta>(args: { data: CandidateMetaCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCandidateBasic: <T = CandidateBasic>(args: { data: CandidateBasicCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCountry: <T = Country>(args: { data: CountryCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAction: <T = Action>(args: { data: ActionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createStage: <T = Stage>(args: { data: StageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPerson: <T = Person>(args?: {}, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePost: <T = Post | null>(args: { data: PostUpdateInput, where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCandidate: <T = Candidate | null>(args: { data: CandidateUpdateInput, where: CandidateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateOffer: <T = Offer | null>(args: { data: OfferUpdateInput, where: OfferWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCountry: <T = Country | null>(args: { data: CountryUpdateInput, where: CountryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateAction: <T = Action | null>(args: { data: ActionUpdateInput, where: ActionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateStage: <T = Stage | null>(args: { data: StageUpdateInput, where: StageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePost: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCandidate: <T = Candidate | null>(args: { where: CandidateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteOffer: <T = Offer | null>(args: { where: OfferWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCountry: <T = Country | null>(args: { where: CountryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteAction: <T = Action | null>(args: { where: ActionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteStage: <T = Stage | null>(args: { where: StageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePerson: <T = Person | null>(args: { where: PersonWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPost: <T = Post>(args: { where: PostWhereUniqueInput, create: PostCreateInput, update: PostUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCandidate: <T = Candidate>(args: { where: CandidateWhereUniqueInput, create: CandidateCreateInput, update: CandidateUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertOffer: <T = Offer>(args: { where: OfferWhereUniqueInput, create: OfferCreateInput, update: OfferUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCountry: <T = Country>(args: { where: CountryWhereUniqueInput, create: CountryCreateInput, update: CountryUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAction: <T = Action>(args: { where: ActionWhereUniqueInput, create: ActionCreateInput, update: ActionUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertStage: <T = Stage>(args: { where: StageWhereUniqueInput, create: StageCreateInput, update: StageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPosts: <T = BatchPayload>(args: { data: PostUpdateInput, where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCandidates: <T = BatchPayload>(args: { data: CandidateUpdateInput, where?: CandidateWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyApplications: <T = BatchPayload>(args: { data: ApplicationUpdateInput, where?: ApplicationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyOffers: <T = BatchPayload>(args: { data: OfferUpdateInput, where?: OfferWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLocations: <T = BatchPayload>(args: { data: LocationUpdateInput, where?: LocationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCandidateMetas: <T = BatchPayload>(args: { data: CandidateMetaUpdateInput, where?: CandidateMetaWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCandidateBasics: <T = BatchPayload>(args: { data: CandidateBasicUpdateInput, where?: CandidateBasicWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCountries: <T = BatchPayload>(args: { data: CountryUpdateInput, where?: CountryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyActions: <T = BatchPayload>(args: { data: ActionUpdateInput, where?: ActionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyStages: <T = BatchPayload>(args: { data: StageUpdateInput, where?: StageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPosts: <T = BatchPayload>(args: { where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCandidates: <T = BatchPayload>(args: { where?: CandidateWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyApplications: <T = BatchPayload>(args: { where?: ApplicationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyOffers: <T = BatchPayload>(args: { where?: OfferWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLocations: <T = BatchPayload>(args: { where?: LocationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCandidateMetas: <T = BatchPayload>(args: { where?: CandidateMetaWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCandidateBasics: <T = BatchPayload>(args: { where?: CandidateBasicWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCountries: <T = BatchPayload>(args: { where?: CountryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyActions: <T = BatchPayload>(args: { where?: ActionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyStages: <T = BatchPayload>(args: { where?: StageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPersons: <T = BatchPayload>(args: { where?: PersonWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    post: <T = PostSubscriptionPayload | null>(args: { where?: PostSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    candidate: <T = CandidateSubscriptionPayload | null>(args: { where?: CandidateSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    application: <T = ApplicationSubscriptionPayload | null>(args: { where?: ApplicationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    offer: <T = OfferSubscriptionPayload | null>(args: { where?: OfferSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    location: <T = LocationSubscriptionPayload | null>(args: { where?: LocationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    candidateMeta: <T = CandidateMetaSubscriptionPayload | null>(args: { where?: CandidateMetaSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    candidateBasic: <T = CandidateBasicSubscriptionPayload | null>(args: { where?: CandidateBasicSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    country: <T = CountrySubscriptionPayload | null>(args: { where?: CountrySubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    action: <T = ActionSubscriptionPayload | null>(args: { where?: ActionSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    stage: <T = StageSubscriptionPayload | null>(args: { where?: StageSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    person: <T = PersonSubscriptionPayload | null>(args: { where?: PersonSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Post: (where?: PostWhereInput) => Promise<boolean>
  Candidate: (where?: CandidateWhereInput) => Promise<boolean>
  Application: (where?: ApplicationWhereInput) => Promise<boolean>
  Offer: (where?: OfferWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  Location: (where?: LocationWhereInput) => Promise<boolean>
  CandidateMeta: (where?: CandidateMetaWhereInput) => Promise<boolean>
  CandidateBasic: (where?: CandidateBasicWhereInput) => Promise<boolean>
  Country: (where?: CountryWhereInput) => Promise<boolean>
  Action: (where?: ActionWhereInput) => Promise<boolean>
  Stage: (where?: StageWhereInput) => Promise<boolean>
  Person: (where?: PersonWhereInput) => Promise<boolean>
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

const typeDefs = `type Action implements Node {
  id: ID!
  date: DateTime!
  owner(where: PersonWhereInput): Person!
  type: String!
}

"""A connection to a list of items."""
type ActionConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ActionEdge]!
  aggregate: AggregateAction!
}

input ActionCreateInput {
  date: DateTime!
  type: String!
  owner: PersonCreateOneInput!
}

input ActionCreateManyInput {
  create: [ActionCreateInput!]
  connect: [ActionWhereUniqueInput!]
}

"""An edge in a connection."""
type ActionEdge {
  """The item at the end of the edge."""
  node: Action!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ActionOrderByInput {
  id_ASC
  id_DESC
  date_ASC
  date_DESC
  type_ASC
  type_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ActionPreviousValues {
  id: ID!
  date: DateTime!
  type: String!
}

type ActionSubscriptionPayload {
  mutation: MutationType!
  node: Action
  updatedFields: [String!]
  previousValues: ActionPreviousValues
}

input ActionSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ActionSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ActionSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ActionSubscriptionWhereInput!]

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
  node: ActionWhereInput
}

input ActionUpdateDataInput {
  date: DateTime
  type: String
  owner: PersonUpdateOneInput
}

input ActionUpdateInput {
  date: DateTime
  type: String
  owner: PersonUpdateOneInput
}

input ActionUpdateManyInput {
  create: [ActionCreateInput!]
  connect: [ActionWhereUniqueInput!]
  disconnect: [ActionWhereUniqueInput!]
  delete: [ActionWhereUniqueInput!]
  update: [ActionUpdateWithWhereUniqueNestedInput!]
  upsert: [ActionUpsertWithWhereUniqueNestedInput!]
}

input ActionUpdateWithWhereUniqueNestedInput {
  where: ActionWhereUniqueInput!
  data: ActionUpdateDataInput!
}

input ActionUpsertWithWhereUniqueNestedInput {
  where: ActionWhereUniqueInput!
  update: ActionUpdateDataInput!
  create: ActionCreateInput!
}

input ActionWhereInput {
  """Logical AND on all given filters."""
  AND: [ActionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ActionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ActionWhereInput!]
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
  date: DateTime

  """All values that are not equal to given value."""
  date_not: DateTime

  """All values that are contained in given list."""
  date_in: [DateTime!]

  """All values that are not contained in given list."""
  date_not_in: [DateTime!]

  """All values less than the given value."""
  date_lt: DateTime

  """All values less than or equal the given value."""
  date_lte: DateTime

  """All values greater than the given value."""
  date_gt: DateTime

  """All values greater than or equal the given value."""
  date_gte: DateTime
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
  owner: PersonWhereInput
}

input ActionWhereUniqueInput {
  id: ID
}

type AggregateAction {
  count: Int!
}

type AggregateApplication {
  count: Int!
}

type AggregateCandidate {
  count: Int!
}

type AggregateCandidateBasic {
  count: Int!
}

type AggregateCandidateMeta {
  count: Int!
}

type AggregateCountry {
  count: Int!
}

type AggregateLocation {
  count: Int!
}

type AggregateOffer {
  count: Int!
}

type AggregatePerson {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateStage {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Application {
  offer(where: OfferWhereInput): Offer!
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
  offer: OfferCreateOneWithoutApplicationsInput!
  candidate: CandidateCreateOneWithoutApplicationsInput!
  stage: StageCreateOneInput!
}

input ApplicationCreateManyWithoutCandidateInput {
  create: [ApplicationCreateWithoutCandidateInput!]
}

input ApplicationCreateManyWithoutOfferInput {
  create: [ApplicationCreateWithoutOfferInput!]
}

input ApplicationCreateWithoutCandidateInput {
  offer: OfferCreateOneWithoutApplicationsInput!
  stage: StageCreateOneInput!
}

input ApplicationCreateWithoutOfferInput {
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
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ApplicationSubscriptionPayload {
  mutation: MutationType!
  node: Application
  updatedFields: [String!]
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
  offer: OfferUpdateOneWithoutApplicationsInput
  candidate: CandidateUpdateOneWithoutApplicationsInput
  stage: StageUpdateOneInput
}

input ApplicationUpdateManyWithoutCandidateInput {
  create: [ApplicationCreateWithoutCandidateInput!]
}

input ApplicationUpdateManyWithoutOfferInput {
  create: [ApplicationCreateWithoutOfferInput!]
}

input ApplicationWhereInput {
  """Logical AND on all given filters."""
  AND: [ApplicationWhereInput!]

  """Logical OR on all given filters."""
  OR: [ApplicationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ApplicationWhereInput!]
  offer: OfferWhereInput
  candidate: CandidateWhereInput
  stage: StageWhereInput
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Candidate implements Node {
  id: ID!
  tags: [String!]!
  createdAt: DateTime!
  updatedAt: DateTime!
  actions(where: ActionWhereInput, orderBy: ActionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Action!]
  basic(where: CandidateBasicWhereInput): CandidateBasic
  meta(where: CandidateMetaWhereInput): CandidateMeta
  applications(where: ApplicationWhereInput, orderBy: ApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Application!]
}

type CandidateBasic {
  firstName: String!
  lastName: String!
  emails: [String!]!
  phones: [String!]!
}

"""A connection to a list of items."""
type CandidateBasicConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CandidateBasicEdge]!
  aggregate: AggregateCandidateBasic!
}

input CandidateBasicCreateemailsInput {
  set: [String!]
}

input CandidateBasicCreateInput {
  firstName: String!
  lastName: String!
  emails: CandidateBasicCreateemailsInput
  phones: CandidateBasicCreatephonesInput
}

input CandidateBasicCreateOneInput {
  create: CandidateBasicCreateInput
}

input CandidateBasicCreatephonesInput {
  set: [String!]
}

"""An edge in a connection."""
type CandidateBasicEdge {
  """The item at the end of the edge."""
  node: CandidateBasic!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CandidateBasicOrderByInput {
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CandidateBasicPreviousValues {
  firstName: String!
  lastName: String!
  emails: [String!]!
  phones: [String!]!
}

type CandidateBasicSubscriptionPayload {
  mutation: MutationType!
  node: CandidateBasic
  updatedFields: [String!]
  previousValues: CandidateBasicPreviousValues
}

input CandidateBasicSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CandidateBasicSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CandidateBasicSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CandidateBasicSubscriptionWhereInput!]

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
  node: CandidateBasicWhereInput
}

input CandidateBasicUpdateDataInput {
  firstName: String
  lastName: String
  emails: CandidateBasicUpdateemailsInput
  phones: CandidateBasicUpdatephonesInput
}

input CandidateBasicUpdateemailsInput {
  set: [String!]
}

input CandidateBasicUpdateInput {
  firstName: String
  lastName: String
  emails: CandidateBasicUpdateemailsInput
  phones: CandidateBasicUpdatephonesInput
}

input CandidateBasicUpdateOneInput {
  create: CandidateBasicCreateInput
  disconnect: Boolean
  delete: Boolean
  update: CandidateBasicUpdateDataInput
  upsert: CandidateBasicUpsertNestedInput
}

input CandidateBasicUpdatephonesInput {
  set: [String!]
}

input CandidateBasicUpsertNestedInput {
  update: CandidateBasicUpdateDataInput!
  create: CandidateBasicCreateInput!
}

input CandidateBasicWhereInput {
  """Logical AND on all given filters."""
  AND: [CandidateBasicWhereInput!]

  """Logical OR on all given filters."""
  OR: [CandidateBasicWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CandidateBasicWhereInput!]
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
}

"""A connection to a list of items."""
type CandidateConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CandidateEdge]!
  aggregate: AggregateCandidate!
}

input CandidateCreateInput {
  tags: CandidateCreatetagsInput
  actions: ActionCreateManyInput
  basic: CandidateBasicCreateOneInput
  meta: CandidateMetaCreateOneInput
  applications: ApplicationCreateManyWithoutCandidateInput
}

input CandidateCreateOneWithoutApplicationsInput {
  create: CandidateCreateWithoutApplicationsInput
  connect: CandidateWhereUniqueInput
}

input CandidateCreatetagsInput {
  set: [String!]
}

input CandidateCreateWithoutApplicationsInput {
  tags: CandidateCreatetagsInput
  actions: ActionCreateManyInput
  basic: CandidateBasicCreateOneInput
  meta: CandidateMetaCreateOneInput
}

"""An edge in a connection."""
type CandidateEdge {
  """The item at the end of the edge."""
  node: Candidate!

  """A cursor for use in pagination."""
  cursor: String!
}

type CandidateMeta {
  source: String!
}

"""A connection to a list of items."""
type CandidateMetaConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CandidateMetaEdge]!
  aggregate: AggregateCandidateMeta!
}

input CandidateMetaCreateInput {
  source: String!
}

input CandidateMetaCreateOneInput {
  create: CandidateMetaCreateInput
}

"""An edge in a connection."""
type CandidateMetaEdge {
  """The item at the end of the edge."""
  node: CandidateMeta!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CandidateMetaOrderByInput {
  source_ASC
  source_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CandidateMetaPreviousValues {
  source: String!
}

type CandidateMetaSubscriptionPayload {
  mutation: MutationType!
  node: CandidateMeta
  updatedFields: [String!]
  previousValues: CandidateMetaPreviousValues
}

input CandidateMetaSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CandidateMetaSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CandidateMetaSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CandidateMetaSubscriptionWhereInput!]

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
  node: CandidateMetaWhereInput
}

input CandidateMetaUpdateDataInput {
  source: String
}

input CandidateMetaUpdateInput {
  source: String
}

input CandidateMetaUpdateOneInput {
  create: CandidateMetaCreateInput
  disconnect: Boolean
  delete: Boolean
  update: CandidateMetaUpdateDataInput
  upsert: CandidateMetaUpsertNestedInput
}

input CandidateMetaUpsertNestedInput {
  update: CandidateMetaUpdateDataInput!
  create: CandidateMetaCreateInput!
}

input CandidateMetaWhereInput {
  """Logical AND on all given filters."""
  AND: [CandidateMetaWhereInput!]

  """Logical OR on all given filters."""
  OR: [CandidateMetaWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CandidateMetaWhereInput!]
  source: String

  """All values that are not equal to given value."""
  source_not: String

  """All values that are contained in given list."""
  source_in: [String!]

  """All values that are not contained in given list."""
  source_not_in: [String!]

  """All values less than the given value."""
  source_lt: String

  """All values less than or equal the given value."""
  source_lte: String

  """All values greater than the given value."""
  source_gt: String

  """All values greater than or equal the given value."""
  source_gte: String

  """All values containing the given string."""
  source_contains: String

  """All values not containing the given string."""
  source_not_contains: String

  """All values starting with the given string."""
  source_starts_with: String

  """All values not starting with the given string."""
  source_not_starts_with: String

  """All values ending with the given string."""
  source_ends_with: String

  """All values not ending with the given string."""
  source_not_ends_with: String
}

enum CandidateOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CandidatePreviousValues {
  id: ID!
  tags: [String!]!
  createdAt: DateTime!
  updatedAt: DateTime!
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

input CandidateUpdateInput {
  tags: CandidateUpdatetagsInput
  actions: ActionUpdateManyInput
  basic: CandidateBasicUpdateOneInput
  meta: CandidateMetaUpdateOneInput
  applications: ApplicationUpdateManyWithoutCandidateInput
}

input CandidateUpdateOneWithoutApplicationsInput {
  create: CandidateCreateWithoutApplicationsInput
  connect: CandidateWhereUniqueInput
  delete: Boolean
  update: CandidateUpdateWithoutApplicationsDataInput
  upsert: CandidateUpsertWithoutApplicationsInput
}

input CandidateUpdatetagsInput {
  set: [String!]
}

input CandidateUpdateWithoutApplicationsDataInput {
  tags: CandidateUpdatetagsInput
  actions: ActionUpdateManyInput
  basic: CandidateBasicUpdateOneInput
  meta: CandidateMetaUpdateOneInput
}

input CandidateUpsertWithoutApplicationsInput {
  update: CandidateUpdateWithoutApplicationsDataInput!
  create: CandidateCreateWithoutApplicationsInput!
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
  actions_every: ActionWhereInput
  actions_some: ActionWhereInput
  actions_none: ActionWhereInput
  basic: CandidateBasicWhereInput
  meta: CandidateMetaWhereInput
  applications_every: ApplicationWhereInput
  applications_some: ApplicationWhereInput
  applications_none: ApplicationWhereInput
}

input CandidateWhereUniqueInput {
  id: ID
}

type Country implements Node {
  id: ID!
  name: String!
  code: String!
  telPrefix: Int!
}

"""A connection to a list of items."""
type CountryConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CountryEdge]!
  aggregate: AggregateCountry!
}

input CountryCreateInput {
  name: String!
  code: String!
  telPrefix: Int!
}

input CountryCreateOneInput {
  create: CountryCreateInput
  connect: CountryWhereUniqueInput
}

"""An edge in a connection."""
type CountryEdge {
  """The item at the end of the edge."""
  node: Country!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CountryOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  code_ASC
  code_DESC
  telPrefix_ASC
  telPrefix_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CountryPreviousValues {
  id: ID!
  name: String!
  code: String!
  telPrefix: Int!
}

type CountrySubscriptionPayload {
  mutation: MutationType!
  node: Country
  updatedFields: [String!]
  previousValues: CountryPreviousValues
}

input CountrySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CountrySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CountrySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CountrySubscriptionWhereInput!]

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
  node: CountryWhereInput
}

input CountryUpdateDataInput {
  name: String
  code: String
  telPrefix: Int
}

input CountryUpdateInput {
  name: String
  code: String
  telPrefix: Int
}

input CountryUpdateOneInput {
  create: CountryCreateInput
  connect: CountryWhereUniqueInput
  delete: Boolean
  update: CountryUpdateDataInput
  upsert: CountryUpsertNestedInput
}

input CountryUpsertNestedInput {
  update: CountryUpdateDataInput!
  create: CountryCreateInput!
}

input CountryWhereInput {
  """Logical AND on all given filters."""
  AND: [CountryWhereInput!]

  """Logical OR on all given filters."""
  OR: [CountryWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CountryWhereInput!]
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
  code: String

  """All values that are not equal to given value."""
  code_not: String

  """All values that are contained in given list."""
  code_in: [String!]

  """All values that are not contained in given list."""
  code_not_in: [String!]

  """All values less than the given value."""
  code_lt: String

  """All values less than or equal the given value."""
  code_lte: String

  """All values greater than the given value."""
  code_gt: String

  """All values greater than or equal the given value."""
  code_gte: String

  """All values containing the given string."""
  code_contains: String

  """All values not containing the given string."""
  code_not_contains: String

  """All values starting with the given string."""
  code_starts_with: String

  """All values not starting with the given string."""
  code_not_starts_with: String

  """All values ending with the given string."""
  code_ends_with: String

  """All values not ending with the given string."""
  code_not_ends_with: String
  telPrefix: Int

  """All values that are not equal to given value."""
  telPrefix_not: Int

  """All values that are contained in given list."""
  telPrefix_in: [Int!]

  """All values that are not contained in given list."""
  telPrefix_not_in: [Int!]

  """All values less than the given value."""
  telPrefix_lt: Int

  """All values less than or equal the given value."""
  telPrefix_lte: Int

  """All values greater than the given value."""
  telPrefix_gt: Int

  """All values greater than or equal the given value."""
  telPrefix_gte: Int
}

input CountryWhereUniqueInput {
  id: ID
}

scalar DateTime

type Location {
  country(where: CountryWhereInput): Country!
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
  region: String!
  city: String!
  zip: String!
  country: CountryCreateOneInput!
}

input LocationCreateOneInput {
  create: LocationCreateInput
}

"""An edge in a connection."""
type LocationEdge {
  """The item at the end of the edge."""
  node: Location!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LocationOrderByInput {
  region_ASC
  region_DESC
  city_ASC
  city_DESC
  zip_ASC
  zip_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type LocationPreviousValues {
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
  region: String
  city: String
  zip: String
  country: CountryUpdateOneInput
}

input LocationUpdateInput {
  region: String
  city: String
  zip: String
  country: CountryUpdateOneInput
}

input LocationUpdateOneInput {
  create: LocationCreateInput
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
  country: CountryWhereInput
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createPost(data: PostCreateInput!): Post!
  createCandidate(data: CandidateCreateInput!): Candidate!
  createApplication(data: ApplicationCreateInput!): Application!
  createOffer(data: OfferCreateInput!): Offer!
  createUser(data: UserCreateInput!): User!
  createLocation(data: LocationCreateInput!): Location!
  createCandidateMeta(data: CandidateMetaCreateInput!): CandidateMeta!
  createCandidateBasic(data: CandidateBasicCreateInput!): CandidateBasic!
  createCountry(data: CountryCreateInput!): Country!
  createAction(data: ActionCreateInput!): Action!
  createStage(data: StageCreateInput!): Stage!
  createPerson: Person!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateCandidate(data: CandidateUpdateInput!, where: CandidateWhereUniqueInput!): Candidate
  updateOffer(data: OfferUpdateInput!, where: OfferWhereUniqueInput!): Offer
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateCountry(data: CountryUpdateInput!, where: CountryWhereUniqueInput!): Country
  updateAction(data: ActionUpdateInput!, where: ActionWhereUniqueInput!): Action
  updateStage(data: StageUpdateInput!, where: StageWhereUniqueInput!): Stage
  deletePost(where: PostWhereUniqueInput!): Post
  deleteCandidate(where: CandidateWhereUniqueInput!): Candidate
  deleteOffer(where: OfferWhereUniqueInput!): Offer
  deleteUser(where: UserWhereUniqueInput!): User
  deleteCountry(where: CountryWhereUniqueInput!): Country
  deleteAction(where: ActionWhereUniqueInput!): Action
  deleteStage(where: StageWhereUniqueInput!): Stage
  deletePerson(where: PersonWhereUniqueInput!): Person
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  upsertCandidate(where: CandidateWhereUniqueInput!, create: CandidateCreateInput!, update: CandidateUpdateInput!): Candidate!
  upsertOffer(where: OfferWhereUniqueInput!, create: OfferCreateInput!, update: OfferUpdateInput!): Offer!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertCountry(where: CountryWhereUniqueInput!, create: CountryCreateInput!, update: CountryUpdateInput!): Country!
  upsertAction(where: ActionWhereUniqueInput!, create: ActionCreateInput!, update: ActionUpdateInput!): Action!
  upsertStage(where: StageWhereUniqueInput!, create: StageCreateInput!, update: StageUpdateInput!): Stage!
  updateManyPosts(data: PostUpdateInput!, where: PostWhereInput): BatchPayload!
  updateManyCandidates(data: CandidateUpdateInput!, where: CandidateWhereInput): BatchPayload!
  updateManyApplications(data: ApplicationUpdateInput!, where: ApplicationWhereInput): BatchPayload!
  updateManyOffers(data: OfferUpdateInput!, where: OfferWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyLocations(data: LocationUpdateInput!, where: LocationWhereInput): BatchPayload!
  updateManyCandidateMetas(data: CandidateMetaUpdateInput!, where: CandidateMetaWhereInput): BatchPayload!
  updateManyCandidateBasics(data: CandidateBasicUpdateInput!, where: CandidateBasicWhereInput): BatchPayload!
  updateManyCountries(data: CountryUpdateInput!, where: CountryWhereInput): BatchPayload!
  updateManyActions(data: ActionUpdateInput!, where: ActionWhereInput): BatchPayload!
  updateManyStages(data: StageUpdateInput!, where: StageWhereInput): BatchPayload!
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  deleteManyCandidates(where: CandidateWhereInput): BatchPayload!
  deleteManyApplications(where: ApplicationWhereInput): BatchPayload!
  deleteManyOffers(where: OfferWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyLocations(where: LocationWhereInput): BatchPayload!
  deleteManyCandidateMetas(where: CandidateMetaWhereInput): BatchPayload!
  deleteManyCandidateBasics(where: CandidateBasicWhereInput): BatchPayload!
  deleteManyCountries(where: CountryWhereInput): BatchPayload!
  deleteManyActions(where: ActionWhereInput): BatchPayload!
  deleteManyStages(where: StageWhereInput): BatchPayload!
  deleteManyPersons(where: PersonWhereInput): BatchPayload!
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

type Offer implements Node {
  id: ID!
  title: String!
  department: String
  location(where: LocationWhereInput): Location
  description: String
  requirements: String
  applications(where: ApplicationWhereInput, orderBy: ApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Application!]
  stages(where: StageWhereInput, orderBy: StageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stage!]
}

"""A connection to a list of items."""
type OfferConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [OfferEdge]!
  aggregate: AggregateOffer!
}

input OfferCreateInput {
  title: String!
  department: String
  description: String
  requirements: String
  location: LocationCreateOneInput
  applications: ApplicationCreateManyWithoutOfferInput
  stages: StageCreateManyInput
}

input OfferCreateOneWithoutApplicationsInput {
  create: OfferCreateWithoutApplicationsInput
  connect: OfferWhereUniqueInput
}

input OfferCreateWithoutApplicationsInput {
  title: String!
  department: String
  description: String
  requirements: String
  location: LocationCreateOneInput
  stages: StageCreateManyInput
}

"""An edge in a connection."""
type OfferEdge {
  """The item at the end of the edge."""
  node: Offer!

  """A cursor for use in pagination."""
  cursor: String!
}

enum OfferOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  department_ASC
  department_DESC
  description_ASC
  description_DESC
  requirements_ASC
  requirements_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type OfferPreviousValues {
  id: ID!
  title: String!
  department: String
  description: String
  requirements: String
}

type OfferSubscriptionPayload {
  mutation: MutationType!
  node: Offer
  updatedFields: [String!]
  previousValues: OfferPreviousValues
}

input OfferSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [OfferSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [OfferSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OfferSubscriptionWhereInput!]

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
  node: OfferWhereInput
}

input OfferUpdateInput {
  title: String
  department: String
  description: String
  requirements: String
  location: LocationUpdateOneInput
  applications: ApplicationUpdateManyWithoutOfferInput
  stages: StageUpdateManyInput
}

input OfferUpdateOneWithoutApplicationsInput {
  create: OfferCreateWithoutApplicationsInput
  connect: OfferWhereUniqueInput
  delete: Boolean
  update: OfferUpdateWithoutApplicationsDataInput
  upsert: OfferUpsertWithoutApplicationsInput
}

input OfferUpdateWithoutApplicationsDataInput {
  title: String
  department: String
  description: String
  requirements: String
  location: LocationUpdateOneInput
  stages: StageUpdateManyInput
}

input OfferUpsertWithoutApplicationsInput {
  update: OfferUpdateWithoutApplicationsDataInput!
  create: OfferCreateWithoutApplicationsInput!
}

input OfferWhereInput {
  """Logical AND on all given filters."""
  AND: [OfferWhereInput!]

  """Logical OR on all given filters."""
  OR: [OfferWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OfferWhereInput!]
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
  location: LocationWhereInput
  applications_every: ApplicationWhereInput
  applications_some: ApplicationWhereInput
  applications_none: ApplicationWhereInput
  stages_every: StageWhereInput
  stages_some: StageWhereInput
  stages_none: StageWhereInput
}

input OfferWhereUniqueInput {
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

type Person implements Node {
  id: ID!
}

"""A connection to a list of items."""
type PersonConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PersonEdge]!
  aggregate: AggregatePerson!
}

input PersonCreateOneInput {
  connect: PersonWhereUniqueInput
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
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PersonPreviousValues {
  id: ID!
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

input PersonUpdateOneInput {
  connect: PersonWhereUniqueInput
  delete: Boolean
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
}

input PersonWhereUniqueInput {
  id: ID
}

type Post implements Node {
  id: ID!
  title: String!
  content: String
  author(where: UserWhereInput): User!
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
  content: String
  author: UserCreateOneInput!
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
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PostPreviousValues {
  id: ID!
  title: String!
  content: String
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
  author: UserUpdateOneInput
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
  author: UserWhereInput
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  candidates(where: CandidateWhereInput, orderBy: CandidateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Candidate]!
  applications(where: ApplicationWhereInput, orderBy: ApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Application]!
  offers(where: OfferWhereInput, orderBy: OfferOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Offer]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  candidateMetas(where: CandidateMetaWhereInput, orderBy: CandidateMetaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CandidateMeta]!
  candidateBasics(where: CandidateBasicWhereInput, orderBy: CandidateBasicOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CandidateBasic]!
  countries(where: CountryWhereInput, orderBy: CountryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Country]!
  actions(where: ActionWhereInput, orderBy: ActionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Action]!
  stages(where: StageWhereInput, orderBy: StageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stage]!
  persons(where: PersonWhereInput, orderBy: PersonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Person]!
  post(where: PostWhereUniqueInput!): Post
  candidate(where: CandidateWhereUniqueInput!): Candidate
  offer(where: OfferWhereUniqueInput!): Offer
  user(where: UserWhereUniqueInput!): User
  country(where: CountryWhereUniqueInput!): Country
  action(where: ActionWhereUniqueInput!): Action
  stage(where: StageWhereUniqueInput!): Stage
  person(where: PersonWhereUniqueInput!): Person
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  candidatesConnection(where: CandidateWhereInput, orderBy: CandidateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CandidateConnection!
  applicationsConnection(where: ApplicationWhereInput, orderBy: ApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ApplicationConnection!
  offersConnection(where: OfferWhereInput, orderBy: OfferOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OfferConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  candidateMetasConnection(where: CandidateMetaWhereInput, orderBy: CandidateMetaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CandidateMetaConnection!
  candidateBasicsConnection(where: CandidateBasicWhereInput, orderBy: CandidateBasicOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CandidateBasicConnection!
  countriesConnection(where: CountryWhereInput, orderBy: CountryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CountryConnection!
  actionsConnection(where: ActionWhereInput, orderBy: ActionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ActionConnection!
  stagesConnection(where: StageWhereInput, orderBy: StageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StageConnection!
  personsConnection(where: PersonWhereInput, orderBy: PersonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PersonConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Stage implements Node {
  id: ID!
  name: String!
  position: Int!
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
  position: Int!
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
  name_ASC
  name_DESC
  position_ASC
  position_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type StagePreviousValues {
  id: ID!
  name: String!
  position: Int!
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

input StageUpdateDataInput {
  name: String
  position: Int
}

input StageUpdateInput {
  name: String
  position: Int
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
}

input StageWhereUniqueInput {
  id: ID
}

type Subscription {
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  candidate(where: CandidateSubscriptionWhereInput): CandidateSubscriptionPayload
  application(where: ApplicationSubscriptionWhereInput): ApplicationSubscriptionPayload
  offer(where: OfferSubscriptionWhereInput): OfferSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  candidateMeta(where: CandidateMetaSubscriptionWhereInput): CandidateMetaSubscriptionPayload
  candidateBasic(where: CandidateBasicSubscriptionWhereInput): CandidateBasicSubscriptionPayload
  country(where: CountrySubscriptionWhereInput): CountrySubscriptionPayload
  action(where: ActionSubscriptionWhereInput): ActionSubscriptionPayload
  stage(where: StageSubscriptionWhereInput): StageSubscriptionPayload
  person(where: PersonSubscriptionWhereInput): PersonSubscriptionPayload
}

type User {
  firstName: String!
  lastName: String!
  username: String!
  email: String!
  password: String!
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
  username: String!
  email: String!
  password: String!
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  username_ASC
  username_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  firstName: String!
  lastName: String!
  username: String!
  email: String!
  password: String!
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
  username: String
  email: String
  password: String
}

input UserUpdateInput {
  firstName: String
  lastName: String
  username: String
  email: String
  password: String
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
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
}

input UserWhereUniqueInput {
  username: String
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type LocationOrderByInput =   'region_ASC' |
  'region_DESC' |
  'city_ASC' |
  'city_DESC' |
  'zip_ASC' |
  'zip_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type CandidateOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type UserOrderByInput =   'firstName_ASC' |
  'firstName_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'username_ASC' |
  'username_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PersonOrderByInput =   'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ActionOrderByInput =   'id_ASC' |
  'id_DESC' |
  'date_ASC' |
  'date_DESC' |
  'type_ASC' |
  'type_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ApplicationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type StageOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'position_ASC' |
  'position_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type OfferOrderByInput =   'id_ASC' |
  'id_DESC' |
  'title_ASC' |
  'title_DESC' |
  'department_ASC' |
  'department_DESC' |
  'description_ASC' |
  'description_DESC' |
  'requirements_ASC' |
  'requirements_DESC' |
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
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type CandidateMetaOrderByInput =   'source_ASC' |
  'source_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type CandidateBasicOrderByInput =   'firstName_ASC' |
  'firstName_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type CountryOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'code_ASC' |
  'code_DESC' |
  'telPrefix_ASC' |
  'telPrefix_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export interface ApplicationCreateWithoutCandidateInput {
  offer: OfferCreateOneWithoutApplicationsInput
  stage: StageCreateOneInput
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
  author?: UserWhereInput
}

export interface StageCreateManyInput {
  create?: StageCreateInput[] | StageCreateInput
  connect?: StageWhereUniqueInput[] | StageWhereUniqueInput
}

export interface ApplicationWhereInput {
  AND?: ApplicationWhereInput[] | ApplicationWhereInput
  OR?: ApplicationWhereInput[] | ApplicationWhereInput
  NOT?: ApplicationWhereInput[] | ApplicationWhereInput
  offer?: OfferWhereInput
  candidate?: CandidateWhereInput
  stage?: StageWhereInput
}

export interface StageCreateInput {
  name: String
  position: Int
}

export interface LocationWhereInput {
  AND?: LocationWhereInput[] | LocationWhereInput
  OR?: LocationWhereInput[] | LocationWhereInput
  NOT?: LocationWhereInput[] | LocationWhereInput
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
  country?: CountryWhereInput
}

export interface StageCreateOneInput {
  create?: StageCreateInput
  connect?: StageWhereUniqueInput
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
  position?: Int
  position_not?: Int
  position_in?: Int[] | Int
  position_not_in?: Int[] | Int
  position_lt?: Int
  position_lte?: Int
  position_gt?: Int
  position_gte?: Int
}

export interface LocationUpdateOneInput {
  create?: LocationCreateInput
  disconnect?: Boolean
  delete?: Boolean
  update?: LocationUpdateDataInput
  upsert?: LocationUpsertNestedInput
}

export interface ActionUpdateWithWhereUniqueNestedInput {
  where: ActionWhereUniqueInput
  data: ActionUpdateDataInput
}

export interface OfferUpdateInput {
  title?: String
  department?: String
  description?: String
  requirements?: String
  location?: LocationUpdateOneInput
  applications?: ApplicationUpdateManyWithoutOfferInput
  stages?: StageUpdateManyInput
}

export interface ApplicationCreateInput {
  offer: OfferCreateOneWithoutApplicationsInput
  candidate: CandidateCreateOneWithoutApplicationsInput
  stage: StageCreateOneInput
}

export interface ApplicationUpdateManyWithoutCandidateInput {
  create?: ApplicationCreateWithoutCandidateInput[] | ApplicationCreateWithoutCandidateInput
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

export interface CandidateMetaUpsertNestedInput {
  update: CandidateMetaUpdateDataInput
  create: CandidateMetaCreateInput
}

export interface CountrySubscriptionWhereInput {
  AND?: CountrySubscriptionWhereInput[] | CountrySubscriptionWhereInput
  OR?: CountrySubscriptionWhereInput[] | CountrySubscriptionWhereInput
  NOT?: CountrySubscriptionWhereInput[] | CountrySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CountryWhereInput
}

export interface CandidateMetaUpdateDataInput {
  source?: String
}

export interface CandidateBasicSubscriptionWhereInput {
  AND?: CandidateBasicSubscriptionWhereInput[] | CandidateBasicSubscriptionWhereInput
  OR?: CandidateBasicSubscriptionWhereInput[] | CandidateBasicSubscriptionWhereInput
  NOT?: CandidateBasicSubscriptionWhereInput[] | CandidateBasicSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CandidateBasicWhereInput
}

export interface CandidateMetaUpdateOneInput {
  create?: CandidateMetaCreateInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CandidateMetaUpdateDataInput
  upsert?: CandidateMetaUpsertNestedInput
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

export interface CandidateBasicUpsertNestedInput {
  update: CandidateBasicUpdateDataInput
  create: CandidateBasicCreateInput
}

export interface ActionWhereInput {
  AND?: ActionWhereInput[] | ActionWhereInput
  OR?: ActionWhereInput[] | ActionWhereInput
  NOT?: ActionWhereInput[] | ActionWhereInput
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
  date?: DateTime
  date_not?: DateTime
  date_in?: DateTime[] | DateTime
  date_not_in?: DateTime[] | DateTime
  date_lt?: DateTime
  date_lte?: DateTime
  date_gt?: DateTime
  date_gte?: DateTime
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
  owner?: PersonWhereInput
}

export interface CandidateBasicUpdatephonesInput {
  set?: String[] | String
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

export interface CandidateBasicUpdateemailsInput {
  set?: String[] | String
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

export interface CandidateBasicUpdateDataInput {
  firstName?: String
  lastName?: String
  emails?: CandidateBasicUpdateemailsInput
  phones?: CandidateBasicUpdatephonesInput
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

export interface CandidateBasicUpdateOneInput {
  create?: CandidateBasicCreateInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CandidateBasicUpdateDataInput
  upsert?: CandidateBasicUpsertNestedInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
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
}

export interface ActionUpsertWithWhereUniqueNestedInput {
  where: ActionWhereUniqueInput
  update: ActionUpdateDataInput
  create: ActionCreateInput
}

export interface CandidateWhereUniqueInput {
  id?: ID_Input
}

export interface PersonUpdateOneInput {
  connect?: PersonWhereUniqueInput
  delete?: Boolean
}

export interface UserWhereUniqueInput {
  username?: String
  email?: String
}

export interface PostCreateInput {
  title: String
  content?: String
  author: UserCreateOneInput
}

export interface ActionWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface PersonWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateInput {
  firstName: String
  lastName: String
  username: String
  email: String
  password: String
}

export interface LocationUpdateInput {
  region?: String
  city?: String
  zip?: String
  country?: CountryUpdateOneInput
}

export interface CandidateCreateInput {
  tags?: CandidateCreatetagsInput
  actions?: ActionCreateManyInput
  basic?: CandidateBasicCreateOneInput
  meta?: CandidateMetaCreateOneInput
  applications?: ApplicationCreateManyWithoutCandidateInput
}

export interface StageUpdateOneInput {
  create?: StageCreateInput
  connect?: StageWhereUniqueInput
  delete?: Boolean
  update?: StageUpdateDataInput
  upsert?: StageUpsertNestedInput
}

export interface CandidateCreatetagsInput {
  set?: String[] | String
}

export interface CandidateUpdateWithoutApplicationsDataInput {
  tags?: CandidateUpdatetagsInput
  actions?: ActionUpdateManyInput
  basic?: CandidateBasicUpdateOneInput
  meta?: CandidateMetaUpdateOneInput
}

export interface ActionCreateManyInput {
  create?: ActionCreateInput[] | ActionCreateInput
  connect?: ActionWhereUniqueInput[] | ActionWhereUniqueInput
}

export interface OfferUpsertWithoutApplicationsInput {
  update: OfferUpdateWithoutApplicationsDataInput
  create: OfferCreateWithoutApplicationsInput
}

export interface ActionCreateInput {
  date: DateTime
  type: String
  owner: PersonCreateOneInput
}

export interface OfferUpdateOneWithoutApplicationsInput {
  create?: OfferCreateWithoutApplicationsInput
  connect?: OfferWhereUniqueInput
  delete?: Boolean
  update?: OfferUpdateWithoutApplicationsDataInput
  upsert?: OfferUpsertWithoutApplicationsInput
}

export interface PersonCreateOneInput {
  connect?: PersonWhereUniqueInput
}

export interface StageUpdateInput {
  name?: String
  position?: Int
}

export interface CandidateBasicCreateOneInput {
  create?: CandidateBasicCreateInput
}

export interface CountryUpdateInput {
  name?: String
  code?: String
  telPrefix?: Int
}

export interface CandidateBasicCreateInput {
  firstName: String
  lastName: String
  emails?: CandidateBasicCreateemailsInput
  phones?: CandidateBasicCreatephonesInput
}

export interface StageUpsertWithWhereUniqueNestedInput {
  where: StageWhereUniqueInput
  update: StageUpdateDataInput
  create: StageCreateInput
}

export interface CandidateBasicCreateemailsInput {
  set?: String[] | String
}

export interface StageUpdateWithWhereUniqueNestedInput {
  where: StageWhereUniqueInput
  data: StageUpdateDataInput
}

export interface CandidateBasicCreatephonesInput {
  set?: String[] | String
}

export interface ApplicationUpdateManyWithoutOfferInput {
  create?: ApplicationCreateWithoutOfferInput[] | ApplicationCreateWithoutOfferInput
}

export interface CandidateMetaCreateOneInput {
  create?: CandidateMetaCreateInput
}

export interface CountryUpsertNestedInput {
  update: CountryUpdateDataInput
  create: CountryCreateInput
}

export interface CandidateMetaCreateInput {
  source: String
}

export interface CountryUpdateOneInput {
  create?: CountryCreateInput
  connect?: CountryWhereUniqueInput
  delete?: Boolean
  update?: CountryUpdateDataInput
  upsert?: CountryUpsertNestedInput
}

export interface ApplicationCreateManyWithoutCandidateInput {
  create?: ApplicationCreateWithoutCandidateInput[] | ApplicationCreateWithoutCandidateInput
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

export interface ActionUpdateDataInput {
  date?: DateTime
  type?: String
  owner?: PersonUpdateOneInput
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
}

export interface OfferCreateOneWithoutApplicationsInput {
  create?: OfferCreateWithoutApplicationsInput
  connect?: OfferWhereUniqueInput
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

export interface OfferCreateWithoutApplicationsInput {
  title: String
  department?: String
  description?: String
  requirements?: String
  location?: LocationCreateOneInput
  stages?: StageCreateManyInput
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
  actions_every?: ActionWhereInput
  actions_some?: ActionWhereInput
  actions_none?: ActionWhereInput
  basic?: CandidateBasicWhereInput
  meta?: CandidateMetaWhereInput
  applications_every?: ApplicationWhereInput
  applications_some?: ApplicationWhereInput
  applications_none?: ApplicationWhereInput
}

export interface LocationCreateOneInput {
  create?: LocationCreateInput
}

export interface CandidateBasicUpdateInput {
  firstName?: String
  lastName?: String
  emails?: CandidateBasicUpdateemailsInput
  phones?: CandidateBasicUpdatephonesInput
}

export interface LocationCreateInput {
  region: String
  city: String
  zip: String
  country: CountryCreateOneInput
}

export interface OfferWhereUniqueInput {
  id?: ID_Input
}

export interface CountryCreateOneInput {
  create?: CountryCreateInput
  connect?: CountryWhereUniqueInput
}

export interface StageWhereUniqueInput {
  id?: ID_Input
}

export interface CountryCreateInput {
  name: String
  code: String
  telPrefix: Int
}

export interface StageUpsertNestedInput {
  update: StageUpdateDataInput
  create: StageCreateInput
}

export interface OfferWhereInput {
  AND?: OfferWhereInput[] | OfferWhereInput
  OR?: OfferWhereInput[] | OfferWhereInput
  NOT?: OfferWhereInput[] | OfferWhereInput
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
  location?: LocationWhereInput
  applications_every?: ApplicationWhereInput
  applications_some?: ApplicationWhereInput
  applications_none?: ApplicationWhereInput
  stages_every?: StageWhereInput
  stages_some?: StageWhereInput
  stages_none?: StageWhereInput
}

export interface CandidateUpdateOneWithoutApplicationsInput {
  create?: CandidateCreateWithoutApplicationsInput
  connect?: CandidateWhereUniqueInput
  delete?: Boolean
  update?: CandidateUpdateWithoutApplicationsDataInput
  upsert?: CandidateUpsertWithoutApplicationsInput
}

export interface CountryWhereInput {
  AND?: CountryWhereInput[] | CountryWhereInput
  OR?: CountryWhereInput[] | CountryWhereInput
  NOT?: CountryWhereInput[] | CountryWhereInput
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
  code?: String
  code_not?: String
  code_in?: String[] | String
  code_not_in?: String[] | String
  code_lt?: String
  code_lte?: String
  code_gt?: String
  code_gte?: String
  code_contains?: String
  code_not_contains?: String
  code_starts_with?: String
  code_not_starts_with?: String
  code_ends_with?: String
  code_not_ends_with?: String
  telPrefix?: Int
  telPrefix_not?: Int
  telPrefix_in?: Int[] | Int
  telPrefix_not_in?: Int[] | Int
  telPrefix_lt?: Int
  telPrefix_lte?: Int
  telPrefix_gt?: Int
  telPrefix_gte?: Int
}

export interface ApplicationUpdateInput {
  offer?: OfferUpdateOneWithoutApplicationsInput
  candidate?: CandidateUpdateOneWithoutApplicationsInput
  stage?: StageUpdateOneInput
}

export interface CandidateMetaWhereInput {
  AND?: CandidateMetaWhereInput[] | CandidateMetaWhereInput
  OR?: CandidateMetaWhereInput[] | CandidateMetaWhereInput
  NOT?: CandidateMetaWhereInput[] | CandidateMetaWhereInput
  source?: String
  source_not?: String
  source_in?: String[] | String
  source_not_in?: String[] | String
  source_lt?: String
  source_lte?: String
  source_gt?: String
  source_gte?: String
  source_contains?: String
  source_not_contains?: String
  source_starts_with?: String
  source_not_starts_with?: String
  source_ends_with?: String
  source_not_ends_with?: String
}

export interface UserUpdateInput {
  firstName?: String
  lastName?: String
  username?: String
  email?: String
  password?: String
}

export interface CandidateBasicWhereInput {
  AND?: CandidateBasicWhereInput[] | CandidateBasicWhereInput
  OR?: CandidateBasicWhereInput[] | CandidateBasicWhereInput
  NOT?: CandidateBasicWhereInput[] | CandidateBasicWhereInput
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
}

export interface StageUpdateManyInput {
  create?: StageCreateInput[] | StageCreateInput
  connect?: StageWhereUniqueInput[] | StageWhereUniqueInput
  disconnect?: StageWhereUniqueInput[] | StageWhereUniqueInput
  delete?: StageWhereUniqueInput[] | StageWhereUniqueInput
  update?: StageUpdateWithWhereUniqueNestedInput[] | StageUpdateWithWhereUniqueNestedInput
  upsert?: StageUpsertWithWhereUniqueNestedInput[] | StageUpsertWithWhereUniqueNestedInput
}

export interface CandidateCreateOneWithoutApplicationsInput {
  create?: CandidateCreateWithoutApplicationsInput
  connect?: CandidateWhereUniqueInput
}

export interface CountryUpdateDataInput {
  name?: String
  code?: String
  telPrefix?: Int
}

export interface CandidateCreateWithoutApplicationsInput {
  tags?: CandidateCreatetagsInput
  actions?: ActionCreateManyInput
  basic?: CandidateBasicCreateOneInput
  meta?: CandidateMetaCreateOneInput
}

export interface ActionSubscriptionWhereInput {
  AND?: ActionSubscriptionWhereInput[] | ActionSubscriptionWhereInput
  OR?: ActionSubscriptionWhereInput[] | ActionSubscriptionWhereInput
  NOT?: ActionSubscriptionWhereInput[] | ActionSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ActionWhereInput
}

export interface OfferCreateInput {
  title: String
  department?: String
  description?: String
  requirements?: String
  location?: LocationCreateOneInput
  applications?: ApplicationCreateManyWithoutOfferInput
  stages?: StageCreateManyInput
}

export interface OfferSubscriptionWhereInput {
  AND?: OfferSubscriptionWhereInput[] | OfferSubscriptionWhereInput
  OR?: OfferSubscriptionWhereInput[] | OfferSubscriptionWhereInput
  NOT?: OfferSubscriptionWhereInput[] | OfferSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: OfferWhereInput
}

export interface ApplicationCreateManyWithoutOfferInput {
  create?: ApplicationCreateWithoutOfferInput[] | ApplicationCreateWithoutOfferInput
}

export interface PostWhereUniqueInput {
  id?: ID_Input
}

export interface ApplicationCreateWithoutOfferInput {
  candidate: CandidateCreateOneWithoutApplicationsInput
  stage: StageCreateOneInput
}

export interface CandidateMetaUpdateInput {
  source?: String
}

export interface PostUpdateInput {
  title?: String
  content?: String
  author?: UserUpdateOneInput
}

export interface OfferUpdateWithoutApplicationsDataInput {
  title?: String
  department?: String
  description?: String
  requirements?: String
  location?: LocationUpdateOneInput
  stages?: StageUpdateManyInput
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface StageUpdateDataInput {
  name?: String
  position?: Int
}

export interface UserUpdateDataInput {
  firstName?: String
  lastName?: String
  username?: String
  email?: String
  password?: String
}

export interface LocationUpdateDataInput {
  region?: String
  city?: String
  zip?: String
  country?: CountryUpdateOneInput
}

export interface ActionUpdateManyInput {
  create?: ActionCreateInput[] | ActionCreateInput
  connect?: ActionWhereUniqueInput[] | ActionWhereUniqueInput
  disconnect?: ActionWhereUniqueInput[] | ActionWhereUniqueInput
  delete?: ActionWhereUniqueInput[] | ActionWhereUniqueInput
  update?: ActionUpdateWithWhereUniqueNestedInput[] | ActionUpdateWithWhereUniqueNestedInput
  upsert?: ActionUpsertWithWhereUniqueNestedInput[] | ActionUpsertWithWhereUniqueNestedInput
}

export interface CandidateUpdatetagsInput {
  set?: String[] | String
}

export interface CandidateUpdateInput {
  tags?: CandidateUpdatetagsInput
  actions?: ActionUpdateManyInput
  basic?: CandidateBasicUpdateOneInput
  meta?: CandidateMetaUpdateOneInput
  applications?: ApplicationUpdateManyWithoutCandidateInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface CountryWhereUniqueInput {
  id?: ID_Input
}

export interface CandidateMetaSubscriptionWhereInput {
  AND?: CandidateMetaSubscriptionWhereInput[] | CandidateMetaSubscriptionWhereInput
  OR?: CandidateMetaSubscriptionWhereInput[] | CandidateMetaSubscriptionWhereInput
  NOT?: CandidateMetaSubscriptionWhereInput[] | CandidateMetaSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CandidateMetaWhereInput
}

export interface LocationUpsertNestedInput {
  update: LocationUpdateDataInput
  create: LocationCreateInput
}

export interface ActionUpdateInput {
  date?: DateTime
  type?: String
  owner?: PersonUpdateOneInput
}

export interface CandidateUpsertWithoutApplicationsInput {
  update: CandidateUpdateWithoutApplicationsDataInput
  create: CandidateCreateWithoutApplicationsInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface PersonPreviousValues {
  id: ID_Output
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

export interface Candidate extends Node {
  id: ID_Output
  tags: String[]
  createdAt: DateTime
  updatedAt: DateTime
  actions?: Action[]
  basic?: CandidateBasic
  meta?: CandidateMeta
  applications?: Application[]
}

/*
 * A connection to a list of items.

 */
export interface PostConnection {
  pageInfo: PageInfo
  edges: PostEdge[]
  aggregate: AggregatePost
}

/*
 * An edge in a connection.

 */
export interface PersonEdge {
  node: Person
  cursor: String
}

export interface AggregatePerson {
  count: Int
}

export interface Person extends Node {
  id: ID_Output
}

/*
 * A connection to a list of items.

 */
export interface PersonConnection {
  pageInfo: PageInfo
  edges: PersonEdge[]
  aggregate: AggregatePerson
}

export interface AggregateStage {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface StageEdge {
  node: Stage
  cursor: String
}

export interface AggregateAction {
  count: Int
}

export interface Post extends Node {
  id: ID_Output
  title: String
  content?: String
  author: User
}

/*
 * A connection to a list of items.

 */
export interface ActionConnection {
  pageInfo: PageInfo
  edges: ActionEdge[]
  aggregate: AggregateAction
}

export interface StagePreviousValues {
  id: ID_Output
  name: String
  position: Int
}

/*
 * An edge in a connection.

 */
export interface CountryEdge {
  node: Country
  cursor: String
}

export interface PostSubscriptionPayload {
  mutation: MutationType
  node?: Post
  updatedFields?: String[]
  previousValues?: PostPreviousValues
}

export interface AggregateCandidateBasic {
  count: Int
}

export interface PostPreviousValues {
  id: ID_Output
  title: String
  content?: String
}

/*
 * A connection to a list of items.

 */
export interface CandidateBasicConnection {
  pageInfo: PageInfo
  edges: CandidateBasicEdge[]
  aggregate: AggregateCandidateBasic
}

export interface User {
  firstName: String
  lastName: String
  username: String
  email: String
  password: String
}

/*
 * An edge in a connection.

 */
export interface CandidateMetaEdge {
  node: CandidateMeta
  cursor: String
}

export interface CandidateSubscriptionPayload {
  mutation: MutationType
  node?: Candidate
  updatedFields?: String[]
  previousValues?: CandidatePreviousValues
}

export interface AggregateLocation {
  count: Int
}

export interface CandidatePreviousValues {
  id: ID_Output
  tags: String[]
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface LocationConnection {
  pageInfo: PageInfo
  edges: LocationEdge[]
  aggregate: AggregateLocation
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

export interface ApplicationSubscriptionPayload {
  mutation: MutationType
  node?: Application
  updatedFields?: String[]
}

export interface AggregateOffer {
  count: Int
}

export interface Stage extends Node {
  id: ID_Output
  name: String
  position: Int
}

/*
 * A connection to a list of items.

 */
export interface OfferConnection {
  pageInfo: PageInfo
  edges: OfferEdge[]
  aggregate: AggregateOffer
}

export interface OfferSubscriptionPayload {
  mutation: MutationType
  node?: Offer
  updatedFields?: String[]
  previousValues?: OfferPreviousValues
}

export interface PersonSubscriptionPayload {
  mutation: MutationType
  node?: Person
  updatedFields?: String[]
  previousValues?: PersonPreviousValues
}

export interface OfferPreviousValues {
  id: ID_Output
  title: String
  department?: String
  description?: String
  requirements?: String
}

/*
 * An edge in a connection.

 */
export interface ApplicationEdge {
  node: Application
  cursor: String
}

export interface Country extends Node {
  id: ID_Output
  name: String
  code: String
  telPrefix: Int
}

export interface AggregateCandidate {
  count: Int
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface CandidateConnection {
  pageInfo: PageInfo
  edges: CandidateEdge[]
  aggregate: AggregateCandidate
}

export interface UserPreviousValues {
  firstName: String
  lastName: String
  username: String
  email: String
  password: String
}

/*
 * An edge in a connection.

 */
export interface PostEdge {
  node: Post
  cursor: String
}

export interface Location {
  country: Country
  region: String
  city: String
  zip: String
}

/*
 * A connection to a list of items.

 */
export interface StageConnection {
  pageInfo: PageInfo
  edges: StageEdge[]
  aggregate: AggregateStage
}

export interface LocationSubscriptionPayload {
  mutation: MutationType
  node?: Location
  updatedFields?: String[]
  previousValues?: LocationPreviousValues
}

export interface AggregateCountry {
  count: Int
}

export interface LocationPreviousValues {
  region: String
  city: String
  zip: String
}

/*
 * An edge in a connection.

 */
export interface CandidateBasicEdge {
  node: CandidateBasic
  cursor: String
}

export interface Offer extends Node {
  id: ID_Output
  title: String
  department?: String
  location?: Location
  description?: String
  requirements?: String
  applications?: Application[]
  stages?: Stage[]
}

/*
 * A connection to a list of items.

 */
export interface CandidateMetaConnection {
  pageInfo: PageInfo
  edges: CandidateMetaEdge[]
  aggregate: AggregateCandidateMeta
}

export interface CandidateMetaSubscriptionPayload {
  mutation: MutationType
  node?: CandidateMeta
  updatedFields?: String[]
  previousValues?: CandidateMetaPreviousValues
}

export interface AggregateUser {
  count: Int
}

export interface CandidateMetaPreviousValues {
  source: String
}

/*
 * An edge in a connection.

 */
export interface OfferEdge {
  node: Offer
  cursor: String
}

export interface Application {
  offer: Offer
  candidate: Candidate
  stage: Stage
}

export interface AggregateApplication {
  count: Int
}

export interface CandidateBasicSubscriptionPayload {
  mutation: MutationType
  node?: CandidateBasic
  updatedFields?: String[]
  previousValues?: CandidateBasicPreviousValues
}

/*
 * An edge in a connection.

 */
export interface CandidateEdge {
  node: Candidate
  cursor: String
}

export interface CandidateBasicPreviousValues {
  firstName: String
  lastName: String
  emails: String[]
  phones: String[]
}

export interface Action extends Node {
  id: ID_Output
  date: DateTime
  owner: Person
  type: String
}

export interface CandidateMeta {
  source: String
}

/*
 * A connection to a list of items.

 */
export interface CountryConnection {
  pageInfo: PageInfo
  edges: CountryEdge[]
  aggregate: AggregateCountry
}

export interface CountrySubscriptionPayload {
  mutation: MutationType
  node?: Country
  updatedFields?: String[]
  previousValues?: CountryPreviousValues
}

/*
 * An edge in a connection.

 */
export interface LocationEdge {
  node: Location
  cursor: String
}

export interface BatchPayload {
  count: Long
}

export interface ActionPreviousValues {
  id: ID_Output
  date: DateTime
  type: String
}

export interface ActionSubscriptionPayload {
  mutation: MutationType
  node?: Action
  updatedFields?: String[]
  previousValues?: ActionPreviousValues
}

export interface CandidateBasic {
  firstName: String
  lastName: String
  emails: String[]
  phones: String[]
}

export interface CountryPreviousValues {
  id: ID_Output
  name: String
  code: String
  telPrefix: Int
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
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface AggregateCandidateMeta {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface ActionEdge {
  node: Action
  cursor: String
}

export interface AggregatePost {
  count: Int
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export type DateTime = Date | string