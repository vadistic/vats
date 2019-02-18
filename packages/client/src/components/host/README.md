# Host

Host component is more or less a playground for few ideas. It's a set of separate factories, for one host instance. with set of functionalities.

- DataProvider => `component.tsx`
- Catch-it-all typing `graphql-types.ts` & `types.ts`
- Custom reducer/useReducer with thunk support => `reducer.ts`
- Graphql binding => `helper.ts`
- Actions, action creators, reducers and mostly typing => `actions.ts`
- Centralised factory => `host.ts`
- Mutation serialisation => `diff.ts`

## Improvised higher-kindred typing

As of now, typescript does not allow for higher-kindred types and, that's exactly what I needed to create constructor for all possible data types of instance of host component.

I've created two catch-it-all interfaces `IHostTyping` & `IGraphQLTyping` that can be used as generic argument for host factory and strictly type all of produced components based on specific instance data shape and actions.

The one downside is that I still needed to declare quite a lot duplicated interfaces for some of public types :/

## Thunks & Binding-like query/mutation helper

I really like the way `prisma-client` or `prisma binding` abstract actual graphql queries to a set of typed methods. And I really wanted to be able to write simple async functions (and without suspense/ loading state).

So I made my custom dispatch function to accepts thunks (inspired by this: https://medium.com/yld-engineering-blog/rolling-your-own-redux-with-react-hooks-and-context-bbeea18b1253)

And having all graphQl types provided by host typing interface I've put `helper` argument to my thunk dispatch function that provide typed client operation driven by host's base typing, and provide default variables from host state.

```ts
const deleteUser: Thunk = async (state, dispatch, helper) => {
  const res = await helper.deleteMutation()

  if (res && res.data) {
    navigate('/')
  }

  if (res && res.error) {
    handleError()
  }
}
```

## Data context & separation of data & state

First thing: Instead of using (still convenient) apollo-client `Query` or `useQuery` hook, I want to query bigger chunk of data in one host component and send values down the context.

It allows to keep data validation, error handling etc. to one place. Data contexts can be also arbitrary nested within each other.

The second thing is separation of state & data. It's my take of mixing apollo with redux-like react state.

- apollo cache is single source of data truth
- I'm creating global-like store, but limited to host - the slice of application (view or part of the view)
- query data is selected with `state.variables`
- mutation's & local actions get dispatched

```tsx

// configuring host (TODO: make most of otions optional)
const hostConfig: IHostConfig<HostTyping, GraphqlTyping> = {
  displayName: 'MY_HOST',
  type: HostType.Single,
  reducer: (state, action) => state,
  initState: () => ({}),
  initVariables: ({ id }) => ({ where: { id } }),
  resetOnInitArgPropChange: true,
  graphql: {
    ...
  },
}

// produce configured & typed components
export const {
  Host,
  useContext,
  Actions,
} = hostFactory<HostTyping, GraphqlTyping>(hostConfig)

// provide host contexts
const SomeImportantComponent: React.FC = () => {
  return (
    <Host>
      <SectionOne />
      <SectionOne />
      <SectionOne />
    </Host>
  )
}

const SectionOne: React.FC = () => {
  const {value: user, state, dispatch} = useContext()

  const handleClick = () => dispatch(SomeHostOrInstanceActionOrThunk)
  return (
    <div>
      <p> Hello {user.name} </p>
      <button onClick={handleClick}>Hello</button>
    </div>
  )
}

```

## Automated serialization of GraphQL Mutations

There is interesting blog post on prisma https://www.prisma.io/blog/experimental-graphql-106b07424435.

Author explains how GraphQL mutations fields actually execute in series (as opposite to parallel execution of `Query`) and propose a way to parallelize it (a bit akin to redux thunks)

```graphql
mutation BatchUserCreate {
  batch {
    createUser1: createUser(user: { name: "Mike" }) {
      id
    }
    createUser2: createUser(user: { name: "Nick" }) {
      id
    }
  }
}
```

But it's another bit of information there that got me thinking.

> At last fall's GraphQL Summit, one of the spec-writers, Lee Byron, hinted at the fact that when they introduced mutations to the spec, they later regretted not calling it 'actions'.

Mutations are actually actions. And while this concept works well for dispatching simple actions (login, create type x, ...) the main reason of using GraphQL is a possibility of easily query connected models of information in single request, without over-fetching.

### Why

In my data-driven application the graphql acts as data-access-layer, not a state machine - I'm querying related data **and I want to simply query it back**.

There is already a pattern of nested nested mutations in prisma, that allow to specify nested operation in one `data` variable.

```graphql
mutation UpdateUser {
  updateUser(where: {id: '123}, data: {
    # non nested
    first: 'Jakub',
    # nested
    posts: {
      delete: {
        id: '123'
      }
    }
  }) {
    id
  }
}

```

It's ok but thinking about sufficiently complex data, this will quickly become bothersome. What if I could just use my query data like active-record?

```ts
// 1. get data from graphql/ host
const { state, value: user, dispatch } = useHostcontext()

// 2. simply mutate changes
// ! this can be done in countless controlled inputs down the host context
user.posts.filter(post => post.id !== '123')

// 3. update, not only local data bank (apollo cache), but also database
dispatch(Actions.update(user))
```

### How to get it working...

Currently I'm using it client-side and only scalar fields or create/delete/connect/disconnect of top level fields relations.

1. Query data with apollo-client and send it down the context. One host component for one type, in one place - that handles response validation, loading state etc. Those can be also nested.

2. Create snapshot for dirty state. I'm just initializing `formik` with context values as `initalValue`, but it could be just `deepClone`'d and sent down the context.

3. Edit state. Dirty state (active-record) is changed. The changes can be kept immutable to re-render UI (i.e. with `immer`)

4. Dispatch update/save action

5. Active state gets `deep-diff`'ed against original value.

6. Diff result is processed client-side (But it can also be simply sent to server as simple JSON scalar. This way it's a bit more lightweight on client and also I could just reuse auto-generated prisma API, without actually exposing any of it.)

   - (Easy part) build cache update & mutation `data` for scalar properties changes.

   - (Trickier part) build cache update (still easy) and nested reflations's mutation `data` for create/delete of top level relation fields. The info how to handle relations (create vs. connect) can be provided as simple map or extracted from graphql schema directives.

   - (Tricky part, [WIP]) Resolve nested relations changes & node updates.

7. Simultaneously update UI and database

So it is a bit complex, but in the core of it I just need one smart diff function to build mutations for me and then I can keep easily my application data in sync with the server, both ways.
