import { InterpolationWithTheme } from '@emotion/core'
import { ITheme } from '../styles'

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: InterpolationWithTheme<ITheme>
    }
  }
}

declare module 'react' {
  // tslint:disable-next-line:interface-name
  interface DOMAttributes<T> {
    css?: InterpolationWithTheme<ITheme>
  }
}
