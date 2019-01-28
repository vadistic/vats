interface IRouteConfig {
  path: string
  children: IRoutesConfigMap
}

interface ISubRouteConfig {
  path: string
  children?: never
}

interface IRoutesConfigMap {
  [name: string]: IRouteConfig | ISubRouteConfig
}

interface ISubRoute {
  path: string
  url: string
  basepath: never
  children: never
}

interface IRoutesMap {
  [name: string]: ISubRoute | IRoute
}

// hack, but only thing that allow recursive, conditional & strict transform
interface IRouteIndicies {
  path: unknown
  basepath: unknown
  url: unknown
  children: unknown
}

type WithRouteIndicies<T> = T & IRouteIndicies

interface IRoute<T = IRoutesMap> {
  path: string
  basepath: string
  url: string
  children: RoutesMap<WithRouteIndicies<T>['children']>
}

export type RoutesMap<T> = { [K in keyof T]: T[K] extends IRouteConfig ? IRoute<T[K]> : ISubRoute }

export const getRoutes = <T extends IRoutesConfigMap>(rootConfig: T) => {
  const recursiveRoutes = (children: IRoutesConfigMap, parentUrl: string) => {
    const _children = (children as unknown) as IRoutesMap
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
