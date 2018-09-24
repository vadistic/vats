import { ITagStyleProps, ITagStyles } from './Tag.types'

export const getStyles = (props: ITagStyleProps): ITagStyles => {
  const {
    className,
    theme: { typography, palette, semanticColors },
  } = props

  return {
    root: [
      'ms-Tag',
      {
        color: semanticColors.buttonText,
        backgroundColor: semanticColors.buttonBackground,
        borderRadius: '2px',
        display: 'inline-block',
        fontSize: typography.sizes.small,
        margin: '0 2px',
        padding: '1px 4px',
        selectors: {
          '&:hover': {
            color: semanticColors.buttonTextHovered,
            backgroundColor: semanticColors.buttonBackgroundHovered,
          },
          '&:active,  &:active:hover': {
            color: semanticColors.buttonTextPressed,
            backgroundColor: semanticColors.buttonBackgroundPressed,
          },
          '&:focus': {
            color: 'inherit',
          },
        },
      },
      className,
    ],
  }
}
