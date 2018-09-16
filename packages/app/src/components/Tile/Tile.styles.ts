import { ITileStyleProps, ITileStyles } from './Tile.types'

export const getStyles = (props: ITileStyleProps): ITileStyles => {
  const { className, theme } = props

  const { palette } = theme

  return {
    root: [
      'ms-Tile',
      {
        width: '100%',
        background: palette.white,
        padding: '24px',
      },
      className,
    ],

    // Insert className styles
  }
}
