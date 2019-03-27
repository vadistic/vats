# vats

> Cool app architecture for Applications Tracking System [🚧wip]

As recruiter this is was an obvious choice for pet project. It's mostly playground for utils and architecture patterns - I'm trying to keep features limited for quick refactors.

My goal is to strongly couple client with server, but redirect implementation to a few abstract/ semi-automated modules - so I can have keep adding arbitrary data-models and APIs without having to maintain most of them (and the rest should be strongly typed with graphql&ts code generation for quick refactors).

To achieve it - I'm reusing tons of auto-generated code and with generic adapters on each step - so most features can be generalised as some new module/middleware.

## App / client

[**SOURCE**](./deployables/app)

[**LIVE**](https://vats.now.sh/app)

### Tech

- [`react`](https://github.com/facebook/react) (with hooks)
- [`apollo-client`](https://github.com/apollographql/apollo-client) (with hooks)
- [`typescript`](https://github.com/Microsoft/TypeScript) (no hooks, but lots of other ways to abuse it)
- [`office-ui-fabric-react`](https://github.com/OfficeDev/office-ui-fabric-react)
- [`emotion`](https://github.com/emotion-js/emotion)
- [`mobx`](https://github.com/mobxjs/mobx)
- [`@reach/router`](https://github.com/reach/router)

## Server/ API

[**SOURCE** ](./deployables/server/)

[**ENDPOINT**](https://vats.now.sh/graphql)

### Tech

- `typescript` / `node`
- `prisma`
- `apollo-server`
- `graphql`
- `gql-import` ([https://github.com/vadistic/gql-import](https://github.com/vadistic/gql-import))
- `graphql-shield`
- `aws-amplify` (for auth)

## Packages

### `@vats/store`

Something I rewrote about 10 times 🙃

Store factory with automated & strongly typed graphql transport layer.

- `./auto`
  Favourite idea ever - recursive prisma create/update data builder from mutated query data.

  Instead of using different graphql apis for update/create/scalars/relations/one-to-one/one-to-many etc... - just take query data and send it back as mutation. (it builds prisma mutation data to deeply update relations)

- `./core`
  Mobx store & utils factory. Instead of using classes, I've decided for functions used simmilary to hooks/mixin classes to create cross-dependant & composable store plugins/mixings

  Strongly typed with generic typing on whole factory & adapter for (also typed)apollo client operations.

  More or less automate data-fetching, merges utils with state & apollo-client in imo nicely fashion.

  Two variants: `createSinglestore` for managing single object and `createMultiStore` from collections.

- `./utils`
  Sorting & ordering utils to merge new data into store without loosing local ordering and with minimal number of mobx mutations. (because obervables are great, but quite expensive in large quantity)

- `./react`
  Collection of `Mobx` hooks & react components - esspecially`useStore`&`StoreProvider` with imo nice instantation.

  Cool mobx computed/ react useMemo compatible, composable `partialSelector` for reusing memoized subset of props from a set of simmilar but not identical typescript interfaces.

### `@vats/forms`

- `./formik`

  Adapters for `office-ui-fabric-react` input components & formik@gamme (hooks version).

- `./editable`

  Replacement context and adapters for gracefully switching between editable formik context and display mode.

- `./editor`
  `react-slate` based markdown editor with dynamic highlighting

### `@vats/prisma`

Prisma datamodel & seeding script. With custom/lightweigth prisma-bindings to cut outdated `graphql-cli` dependency & use resolver forwarding.

[**DATAMODEL VISUALISATION**](https://app.graphqleditor.com/vats/vats-datamodel)

### `@vats/styling`

Reusable theming.

### `@vats/utils`

Growing collection of cool things. My favourite - `pathProxy` from typesafe lodash paths.

### `@vats/stripts`

Monorepo build/dev toolchain based on `deepsweet/start` task runner. Inspired & based on heavily edited `react-scripts`.
