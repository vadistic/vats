// TODO: think about how ascending/descending should work on different types
const compareFn = <T extends string | number | null>(a: T, b: T) => (a < b ? -1 : b < a ? 1 : 0)

export enum SortDirection {
  ASCENDING = 1,
  DESCENDING = -1,
}

// does not need index signatures becuase on first level is just undef
export const mutableSortByProp = <T, Prop>(arr: T[], direction: SortDirection, prop: Prop): T[] =>
  arr.sort((elA: any, elB: any) => direction * compareFn(elA[prop], elB[prop]))

export const mutableSortByGetter = <T>(
  arr: T[],
  direction: SortDirection,
  getter: (element: T) => string | number | null,
) => arr.sort((elA, elB) => direction * compareFn(getter(elA), getter(elB)))

export type SortGetter<T> = (job: T) => string | number | null

export const sortByGetter = <T>(arr: T[], direction: SortDirection, getter: SortGetter<T>) =>
  arr.slice().sort((elA, elB) => direction * compareFn(getter(elA), getter(elB)))
