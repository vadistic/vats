export type NonNullArray<T extends any[]> = T extends Array<infer U> ? Array<NonNullable<U>> : never

export type ElementType<T> = T extends Array<infer U> ? U : never

export type FirstArgument<T> = T extends (arg1: infer U, ...args: any[]) => any ? U : any
