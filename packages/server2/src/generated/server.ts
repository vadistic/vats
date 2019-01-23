export type Maybe<T> = T | null;


export interface UserWhereUniqueInput {

  id?: Maybe<string>;
}

export interface UserWhereInput {

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;

  name_not?: Maybe<string>;

  name_in?: Maybe<string[]>;

  name_not_in?: Maybe<string[]>;

  name_lt?: Maybe<string>;

  name_lte?: Maybe<string>;

  name_gt?: Maybe<string>;

  name_gte?: Maybe<string>;

  name_contains?: Maybe<string>;

  name_not_contains?: Maybe<string>;

  name_starts_with?: Maybe<string>;

  name_not_starts_with?: Maybe<string>;

  name_ends_with?: Maybe<string>;

  name_not_ends_with?: Maybe<string>;

  AND?: Maybe<UserWhereInput[]>;

  OR?: Maybe<UserWhereInput[]>;

  NOT?: Maybe<UserWhereInput[]>;
}

  export enum UserOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    NameAsc = "name_ASC",
    NameDesc = "name_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
  }

  export enum CacheControlScope {
    Public = "PUBLIC",
    Private = "PRIVATE",
  }

/** The `Upload` scalar type represents a file upload. */
export type Upload = any;



// ====================================================
// Scalars
// ====================================================







// ====================================================
// Types
// ====================================================



export interface Query {

  user?: Maybe<User>;

  users: (Maybe<User>)[];

  me: User;
}


export interface User {

  id: string;

  name: string;
}



// ====================================================
// Arguments
// ====================================================

export interface UserQueryArgs {

  where: UserWhereUniqueInput;
}
export interface UsersQueryArgs {

  where?: Maybe<UserWhereInput>;

  orderBy?: Maybe<UserOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}


import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';





export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<Result, Parent = {}, Context = {}, Args = {}> =
  | ((...args: any[]) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

export type TypeResolveFn<Types, Parent = {}, Context = {}> = (
  parent: Parent,
  context: Context,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;


export namespace QueryResolvers {
  export interface Resolvers<Context = {}, TypeParent = {}> {

    user?: UserResolver<Maybe<User>, TypeParent, Context>;

    users?: UsersResolver<(Maybe<User>)[], TypeParent, Context>;

    me?: MeResolver<User, TypeParent, Context>;
  }


  export type UserResolver<R = Maybe<User>, Parent = {}, Context = {}> = Resolver<R, Parent, Context, UserArgs>;
  export interface UserArgs {

    where: UserWhereUniqueInput;
  }


  export type UsersResolver<R = (Maybe<User>)[], Parent = {}, Context = {}> = Resolver<R, Parent, Context, UsersArgs>;
  export interface UsersArgs {

    where?: Maybe<UserWhereInput>;

    orderBy?: Maybe<UserOrderByInput>;

    skip?: Maybe<number>;

    after?: Maybe<string>;

    before?: Maybe<string>;

    first?: Maybe<number>;

    last?: Maybe<number>;
  }


  export type MeResolver<R = User, Parent = {}, Context = {}> = Resolver<R, Parent, Context>;
}

export namespace UserResolvers {
  export interface Resolvers<Context = {}, TypeParent = User> {

    id?: IdResolver<string, TypeParent, Context>;

    name?: NameResolver<string, TypeParent, Context>;
  }


  export type IdResolver<R = string, Parent = User, Context = {}> = Resolver<R, Parent, Context>;
  export type NameResolver<R = string, Parent = User, Context = {}> = Resolver<R, Parent, Context>;
}




export type CacheControlDirectiveResolver<Result> = DirectiveResolverFn<Result, CacheControlDirectiveArgs, {}>;
export interface CacheControlDirectiveArgs {

  maxAge?: Maybe<number>;

  scope?: Maybe<CacheControlScope>;
}

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<Result, SkipDirectiveArgs, {}>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<Result, IncludeDirectiveArgs, {}>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<Result, DeprecatedDirectiveArgs, {}>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}


export interface UploadScalarConfig extends GraphQLScalarTypeConfig<Upload, any> {
  name: 'Upload'
}

export interface IResolvers<Context = {}> {
    Query?: QueryResolvers.Resolvers<Context>;
    User?: UserResolvers.Resolvers<Context>;
    Upload?: GraphQLScalarType;
}

export interface IDirectiveResolvers<Result> {
    cacheControl?: CacheControlDirectiveResolver<Result>;
    skip?: SkipDirectiveResolver<Result>;
    include?: IncludeDirectiveResolver<Result>;
    deprecated?: DeprecatedDirectiveResolver<Result>;
}
