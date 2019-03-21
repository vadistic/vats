export const removeElOnIndex = <T>(arr: T[], index: number) => [
  ...arr.slice(0, index),
  ...arr.slice(index + 1),
]

export const updateElOnIndex = <T>(arr: T[], index: number, value: T) => [
  ...arr.slice(0, index),
  value,
  ...arr.slice(index + 1),
]

export const transformElOnIndex = <T>(arr: T[], index: number, transform: (prev: T) => T) => [
  ...arr.slice(0, index),
  transform(arr[index]),
  ...arr.slice(index + 1),
]

export const insertElOnIndex = <T>(arr: T[], index: number, value: T) => [
  ...arr.slice(0, index),
  value,
  ...arr.slice(index),
]

export const moveElementSlice = <T>(arr: T[], from: number, to: number) => {
  if (from < to) {
    return [...arr.slice(0, from), ...arr.slice(from + 1, to + 1), arr[from], ...arr.slice(to + 1)]
  }

  if (from > to) {
    return [...arr.slice(0, to), arr[from], ...arr.slice(to, from), ...arr.slice(from + 1)]
  }

  return arr
}

export const moveElement = (arr: any[], from: number, to: number) => {
  const copy = arr.slice()
  copy.splice(to, 0, copy.splice(from, 1)[0])
  return copy
}

export const mutableMoveElement = (arr: any[], from: number, to: number) =>
  arr.splice(to, 0, arr.splice(from, 1)[0])
