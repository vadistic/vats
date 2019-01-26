interface IRouteConfig {
  path: string
  children: IRoutesChildrenConfig
}

interface ISubRouteConfig {
  path: string
  children?: never
}

interface IRoutesChildrenConfig {
  [name: string]: IRouteConfig | ISubRouteConfig
}

interface ISubRoute {
  path: string
  url: string
  basepath: never
  children: never
}

interface IRoute {
  path: string
  basepath: string
  url: string
  children: IChildrenRoutes
}

interface IChildrenRoutes {
  [name: string]: ISubRoute | IRoute
}

export type RoutesMap<T> = { [K in keyof T]: ISubRoute | IRoute }

export const getRoutes = <T extends IRoutesChildrenConfig>(rootConfig: T) => {
  const recursiveRoutes = (
    children: IRoutesChildrenConfig,
    parentUrl: string
  ) => {
    const _children = (children as unknown) as IChildrenRoutes
    Object.entries(children).forEach(([key, val]) => {
      const url = `${parentUrl}/${val.path}`
      _children[key].url = url
      if (val.children) {
        // transform path/basepath and traverse all children
        _children[key].basepath = val.path
        _children[key].path = `${val.path}/*`
        _children[key].children = recursiveRoutes(val.children, url)
      }
    })
    return _children
  }

  const rootRoutes = recursiveRoutes(rootConfig, '')

  return rootRoutes as RoutesMap<T>
}
