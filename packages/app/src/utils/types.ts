export type NonNullArray<T extends any[]> = T extends Array<infer U> ? Array<NonNullable<U>> : never

export type ElementType<T> = T extends Array<infer ElementType> ? ElementType : never
