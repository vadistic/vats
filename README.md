# vats

> Applications Tracking System built with cool tech [🚧wip]

As I'm (ex-) recruiter this is an obvious choice for pet project^^. It's mostly playground for utils and architecture patterns - I'm trying to keep features limited for quick refactors.

My goal is to strongly couple client with server, but redirect implementation to a few abstract/ semi-automated modules - so I can have keep adding arbitrary data-models and APIs without having to maintain most of them (and the rest should be strongly typed with graphql-ts code generation for quick refactors).

To achieve it - I plan on reusing tons of auto-generated code and writing set of adapters on each step (form public API, through creating auto-updates to level of fabric components) - so most features can be generalised as some new module/middleware. I'm thinking I'm halfway there, the next step would be actually try to finish some parts of this app :)

## App / client

[**SOURCE**](./deployables/app)

[**README** 📃](./deployables/app/README.md)

[**LIVE**](https://vats.now.sh/app)

### Tech

- [`react`](https://github.com/facebook/react) (with hooks)
- [`apollo-client`](https://github.com/apollographql/apollo-client) (with hooks)
- [`typescript`](https://github.com/Microsoft/TypeScript) (no hooks, but lots of other ways to abuse it)
- [`office-ui-fabric-react`](https://github.com/OfficeDev/office-ui-fabric-react)
- [`emotion`](https://github.com/emotion-js/emotion)

## Server/ API

[**SOURCE** ](./deployables/server/)

[**README** 📃](./deployables/server/README.md)

[**ENDPOINT**](https://vats.now.sh/server)

### Tech

- `typescript` / `node`
- `prisma`
- `apollo-server`
- `graphql`
- `gql-import` ([https://github.com/vadistic/gql-import](https://github.com/vadistic/gql-import))
- `graphql-shield`
- `aws-amplify` (for auth)
