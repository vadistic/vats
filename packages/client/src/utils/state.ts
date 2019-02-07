const compareFn = <T extends string | number | null>(a: T, b: T) => (a < b ? -1 : b < a ? 1 : 0)

type SortableObject<T, Prop extends string> = T & { [K in Prop]: string | number | null }

export enum SortDirection {
  ASCENDING = 1,
  DESCENDING = -1,
}

export const mutableSortByProp = <T, Prop extends string>(
  arr: Array<SortableObject<T, Prop>>,
  direction: SortDirection,
  prop: Prop,
) => arr.sort((elA, elB) => direction * compareFn(elA[prop], elB[prop]))

export const mutableSortByGetter = <T>(
  arr: T[],
  direction: SortDirection,
  getter: (element: T) => string | number | null,
) => arr.sort((elA, elB) => direction * compareFn(getter(elA), getter(elB)))
