// path getter
export interface RoutesProxyValue {
  /**
   * path without params
   */
  BASEPATH: string
  /**
   * path with params
   */
  PATH: string
  /**
   * path params
   */
  PARAMS: string | undefined
  /**
   * path last element name
   */
  NAME: string
}

export type RoutesProxy<S> = S extends object ? RoutesProxyObject<S> : RoutesProxyValue

type RoutesProxyObject<S extends object> = { [K in keyof S]: RoutesProxy<S[K]> } & RoutesProxyValue

const idRoute = { BASEPATH: '', PATH: '', PARAMS: undefined, NAME: '' }

export const routesProxy = <S>(
  routes: S,
  parent: RoutesProxyValue = idRoute as any,
): RoutesProxy<S> => {
  return new Proxy(parent as any, {
    get(target: any, key: any) {
      if (key in target) {
        return target[key]
      }

      const config = ((!!routes ? routes : {}) as any)[key]

      const NAME = key
      const BASEPATH = `${parent.BASEPATH}/${NAME}`
      const PARAMS = config.params
      const PATH = `${parent.BASEPATH}/${NAME}${PARAMS ? '/' + PARAMS : ''}`

      return routesProxy<any>((routes as any)[key], {
        NAME,
        PARAMS,
        BASEPATH,
        PATH,
      } as any)
    },
  })
}
