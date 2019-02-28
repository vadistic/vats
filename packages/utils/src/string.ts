export const capitalise = (input: string) => input.charAt(0).toUpperCase() + input.slice(1)

export const sentenceCase = (input: string) =>
  input.charAt(0).toUpperCase() + input.slice(1).toLocaleLowerCase()
