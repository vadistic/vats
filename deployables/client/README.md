# vats/client

## Tech stack

- [react](https://github.com/facebook/react) (with hooks)
- [apollo-client](https://github.com/apollographql/apollo-client) (with hooks)
- [TypeScript](https://github.com/Microsoft/TypeScript) (no hooks, but lots of other ways to abuse it)
- [office-ui-fabric-react](https://github.com/OfficeDev/office-ui-fabric-react)
- [emotion](https://github.com/emotion-js/emotion)

And formik, immer, 18n, jest, 3 or 4 codegens...

## Cool parts

### React (redux-like state) & apollo-client integration with host component.

- Typed factory with improvised higher-kindred typing
- Thunks & query/mutation helpers
- Data context & separation of data & state
- Automated serialization of GraphQL Mutations (diff autoUpdate)

**Long description**: [`src/components/host/README.md`](src/components/host/README.md)

### Input components setup

- Hook driven fabric inputs adapters for `formik@gamma`

[`src/components/formik/adapters.tsx`](src/components/formik/adapters.tsx)

- Context for editable/ non-editable ready components

[`src/components/editable/editable.tsx`](src/components/editable/editable.tsx)
[`src/components/display/index.ts`](src/components/editable/editable.tsx)

### Some utils

Typesafe lodash-like paths builder (and proxies)

[`src/utils/path.ts`](src/components/path.ts)

i18n with typed paths (proxies!) & json generation
(it's great because I can even rename translation keys from source)

[`src/i18n/hook.ts`](src/i18n/hook.ts)

[`scripts/i18n-json.ts`](scripts/i18n-json.ts)

Object get/set/traverse/transform

[`src/utils/object.ts`](src/utils/object.ts)
