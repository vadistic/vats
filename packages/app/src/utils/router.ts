import { NavigateFn, Router as _Router, WindowLocation } from '@reach/router'
import queryString from 'query-string'
import * as R from 'ramda'

import { styled } from '../styles'

export type InjectedRouteComponentProps<TParams = {}> = Partial<TParams> & {
  path: string
  default: boolean
  location: WindowLocation
  navigate: NavigateFn
  uri: string
}

export const Router = styled(_Router)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const qStringify = (queriesObj: { [index: string]: string | string[] }) => {
  return R.pipe(
    R.pickBy((val, key) => val !== undefined && val !== ''),
    queryString.stringify,
    res => (res && '?' + res) || ''
  )(queriesObj)
}

export const qParse = (search?: string) => {
  return search ? queryString.parse(search) || {} : {}
}
