import { css, SerializedStyles } from '@emotion/core'
import { Theme } from './theme'

/**
 * I'm almost afraid to use it because performance and potential babel plugin issues but it seems cool
 * thunks/ classnames for styles?
 */
export const cssx = (
  ...styles: Array<SerializedStyles | ((theme: Theme) => SerializedStyles) | undefined | false>
) => (theme: Theme) =>
  css(...styles.map(style => (style instanceof Function ? style(theme) : style)))

/**
 * traditional alternative
 */
export const cx = (...classNames: Array<string | null | undefined | false>) =>
  classNames.filter(Boolean).join(' ')
