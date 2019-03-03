import { InterpolationWithTheme } from '@emotion/core'
import { Theme } from '../styles'

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: InterpolationWithTheme<Theme>
    }
  }
}

declare module 'react' {
  // tslint:disable-next-line:interface-name
  interface DOMAttributes<T> {
    css?: InterpolationWithTheme<Theme>
  }
}
