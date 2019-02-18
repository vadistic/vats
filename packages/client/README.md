# vats/client

## Tech stack

> alphas/ betas/ (also one gamma) and forks^^

- [react](https://github.com/facebook/react) (with hooks)
- [apollo-client](https://github.com/apollographql/apollo-client) (with hooks)
- [TypeScript](https://github.com/Microsoft/TypeScript) (no hooks, but lots of other ways to abuse it)
- [office-ui-fabric-react](https://github.com/OfficeDev/office-ui-fabric-react)
- [emotion](https://github.com/emotion-js/emotion)

And formik, immer, 18n, jest, 3 or 4 codegens...

## Cool parts

### React (redux-like state) & apollo-client integration with host component.

- Typed factory with improvised higher-kindred typing
- Thunks & binding-like query/mutation helper
- Data context & separation of data & state
- Automated serialization of GraphQL Mutations

**Long description**: [`src/components/host/README.md`](src/components/host/README.md)

### Input components setup

- Hook driven fabric inputs adapters for `formik@gamma`

[`src/components/formik/adapters.tsx`](src/components/formik/adapters.tsx)

- Context of editable/ non-editable components

[`src/components/editable/editable.tsx`](src/components/editable/editable.tsx)

- Factory for display fields
  [`src/components/display/factory.tsx`](src/components/display/factory.tsx)

### Some utils

Typesafe lodash-like paths builder

[`src/utils/path.ts`](src/components/path.ts)

i18n with typed paths & json generation

[`src/i18n/hook.ts`](src/i18n/hook.ts)

[`scripts/i18n-json.ts`](scripts/i18n-json.ts)

Object get/set/traverse/transform

[`src/utils/object.ts`](src/utils/object.ts)
