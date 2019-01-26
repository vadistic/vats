export interface IRouterConfig {
  [name: string]: {
    path: string
    children?: IRouterConfig
  }
  [index: number]: never
}

export interface IRoutes {
  [name: string]: {
    path: string
    basepath?: string
    children?: IRoutes
  }
}

interface ISubRoute {
  path: string
  basepath: never
  children: never
}

interface IRoute<Children extends {}> {
  path: string
  basepath: string
  children: Children
}

export type Routes<
  T extends IRoutes,
  Keys extends keyof T = keyof T
> = T[Keys]['children'] extends undefined
  ? { [Key in Keys]: ISubRoute }
  : { [Key in Keys]: IRoute<NonNullable<T[Key]['children']>> }

export const getRoutes = <T extends IRouterConfig>(rootConfig: T) => {
  const recursiveRoutes = (children: IRoutes) => {
    const _children = children
    Object.entries(_children).forEach(([key, val]) => {
      if (val.children === undefined) {
        return val
      } else {
        // transform path/basepath and traverse all children
        _children[key].basepath = val.path
        _children[key].path = `${val.path}/*`
        _children[key].children = recursiveRoutes(val.children)
      }
    })
    return _children
  }

  const rootRoutes = recursiveRoutes(rootConfig)

  return rootRoutes as Routes<T>
}
