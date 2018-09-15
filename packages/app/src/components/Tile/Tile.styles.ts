import { ITileStyleProps, ITileStyles } from './Tile.types'

export const getStyles = (props: ITileStyleProps): ITileStyles => {
  const { className, theme } = props
  const { background } = props

  const { palette } = theme

  const backgroundColorDefault = palette.tealLight

  return {
    root: [
      'ms-Tile',
      {
        width: '100%',
        background: theme.palette[background!] || background || backgroundColorDefault,
      },
      className,
    ],

    // Insert className styles
  }
}
