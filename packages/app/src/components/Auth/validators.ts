export const emailValidator = (value: string): string | undefined =>
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email addres' : undefined

export const passwordValidator = (value: string): string | undefined =>
  value.length < 10 ? `The password is too short.` : undefined
