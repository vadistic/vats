import { capitalise } from './random'
import { NonUndefined } from './types'

/*
 * config types
 */

export interface IRoutesConfigMap {
  [name: string]: IRouteConfig
}

interface IRouteConfig {
  path: string
  children?: IRoutesConfigMap
}

/*
 * and result routes
 */

interface IRoute<
  T extends IRouteConfig,
  Children extends IRoutesConfigMap | undefined = T['children']
> {
  path: string
  url: string
  key: string
  name: string
  basepath: string
  children: Children extends undefined ? never : RoutesMap<NonUndefined<Children>>
}

/**
 * util types for recursive fn
 */
interface IRoutesMap {
  [name: string]: IRoute<IRouteConfig>
}

export type RoutesMap<T extends IRoutesConfigMap> = { [K in keyof T]: IRoute<T[K]> }

export const getRoutes = <T extends IRoutesConfigMap>(rootConfig: T) => {
  const recursiveRoutes = (children: IRoutesConfigMap, parentUrl: string) => {
    const _children = children as IRoutesMap

    Object.entries(children).forEach(([key, val]) => {
      const url = `${parentUrl}/${val.path}`
      _children[key].url = url
      _children[key].key = url
      _children[key].name = capitalise(key)

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
