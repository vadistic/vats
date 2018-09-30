import { LinkGetProps, Router as _Router } from '@reach/router'
import queryString from 'query-string'
import * as R from 'ramda'

import { styled } from '../styles'

export interface ILinkSelfProps<TState> {
  to?: string
  replace?: boolean
  getProps?: (props: LinkGetProps) => {}
  state?: TState
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
