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
