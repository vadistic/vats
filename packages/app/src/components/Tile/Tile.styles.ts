import { css } from 'emotion'

import { ITileStyleProps, ITileStyles } from './Tile.types'

export const getStyles = (props: ITileStyleProps): ITileStyles => {
  const { className, theme } = props

  const { palette } = theme

  return {
    root: [
      'ms-Tile',
      css`
        /* focus clear? */
        display: block;

        /* temp */
        width: 200px;
        height: 100px;

        z-index: 0;
        background-color: ${palette.white};
        transition: transform 0.1s linear;
        color: ${palette.neutralPrimary};

        user-select: none;
      `,
      className,
    ],
  }
}
