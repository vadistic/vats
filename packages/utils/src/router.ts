import { capitalise } from './string'
import { NonUndefined } from './types'

/*
 * config types
 */

export interface RoutesConfigMap {
  [name: string]: RouteConfig
}

interface RouteConfig {
  path: string
  children?: RoutesConfigMap
}

/*
 * and result routes
 */

interface Route<
  T extends RouteConfig,
  Children extends RoutesConfigMap | undefined = T['children']
> {
  path: string
  url: string
  key: string
  name: string
  basepath: string
  children: Children extends undefined ? never : RoutesMapType<NonUndefined<Children>>
}

/**
 * util types for recursive fn
 */
interface RoutesMap {
  [name: string]: Route<RouteConfig>
}

export type RoutesMapType<T extends RoutesConfigMap> = { [K in keyof T]: Route<T[K]> }

export const getRoutes = <T extends RoutesConfigMap>(rootConfig: T) => {
  const recursiveRoutes = (children: RoutesConfigMap, parentUrl: string) => {
    const _children = children as RoutesMap

    Object.entries(children).forEach(([key, val]) => {
      const url = `${parentUrl}/${val.path}`
      _children[key].url = url
      _children[key].key = url
      _children[key].name = capitalise(key)
      _children[key].basepath = val.path

      if (val.children) {
        _children[key].path = `${val.path}/*`
        _children[key].children = recursiveRoutes(val.children, url)
      }
    })
    return _children
  }

  const rootRoutes = recursiveRoutes(rootConfig, '')

  return rootRoutes as RoutesMapType<T>
}
