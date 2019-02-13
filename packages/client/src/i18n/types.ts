export interface ITranslationTypingConfig {
  single: string
  plural?: string
  interval?: string
}

export type TranslationTyping<T> = { [K in keyof T]: ITranslationTypingConfig | string }
