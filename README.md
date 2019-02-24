# vats

> Applications Tracking System build with cool tech [🚧wip]

As I'm (ex-) recruiter this is an obvious choice for pet project^^. It's mostly playground for utils and architecture patterns, that kind of grew to ~20k of source LOC and few packages (despite my honest efforts to trim it).

I'm trying to come up with an architecture that strongly couple client with server, but redirects implementation to a few abstract modules - so I can have keep adding arbitrary data-models and APIs without having to maintain most of them (and the rest should be strongly typed with graphql-ts code generation for quick fix-ability).

To achieve it - I plan on reusing auto-generated Prisma API and writing set of adapters on each step (form public API, through creating auto-updates to level of fabric components) - so most features can be generalised as some new module/middleware. I'm thinking I'm halfway there, the next step would be actually try to finish some parts of this app :)

## Client/ app

[**README** 📃](./packages/client/README.md)

[**Favourite component** ⭐](./packages/client/src/components/host/README.md)

[TODO:LIVE]

### Tech

- [`react`](https://github.com/facebook/react) (with hooks)
- [`apollo-client`](https://github.com/apollographql/apollo-client) (with hooks)
- [`typescript`](https://github.com/Microsoft/TypeScript) (no hooks, but lots of other ways to abuse it)
- [`office-ui-fabric-react`](https://github.com/OfficeDev/office-ui-fabric-react)
- [`emotion`](https://github.com/emotion-js/emotion)

## Server/ API

[**SOURCE** ](./packages/server/)

[**ENDPOINT** ](https://vats-server.now.sh)

### Tech

- `typescript` / `node`
- `prisma`
- `apollo-server`
- `graphql`
- `gql-import` ([https://github.com/vadistic/gql-import](https://github.com/vadistic/gql-import))
- `graphql-shield`
- `aws-amplify` (for auth)
