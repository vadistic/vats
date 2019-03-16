import { ElementTypeOr } from './types'

// let's hope it's not slow
const dateRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2})\:(\d{2})\:(\d{2})[+-\.](.{2,6})$/

// universal compare fn for string, numbers & dates, accepting nulls
// TODO: optimise/benchmark, I'm esspecially afraid of this date regex
const compareFn = <T extends string | number | null>(a: T, b: T) => {
  // normalise values
  let normA: any = a
  let normB: any = b

  if (dateRegex.test('' + a) || dateRegex.test('' + b)) {
    if (typeof a === 'string') {
      normA = new Date(a)
    }
    if (typeof b === 'string') {
      normA = new Date(b)
    }
  } else {
    if (typeof a === 'string') {
      normA = a.toLowerCase()
    }

    if (typeof b === 'string') {
      normB = b.toLowerCase()
    }
  }

  return normA < normB ? -1 : normB < normA ? 1 : 0
}

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

export type SortGetter<T> = (job: ElementTypeOr<T>) => string | number | null

export const sortByGetter = <T>(arr: T[], direction: SortDirection, getter: SortGetter<T[]>) =>
  arr.slice().sort((elA, elB) => direction * compareFn(getter(elA), getter(elB)))
