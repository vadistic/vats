import { IBoxStyleProps, IBoxStyles } from './Box.types'

export const getStyles = (props: IBoxStyleProps): IBoxStyles => {
  const { className } = props

  return {
    root: [
      'ms-Box',
      {
        width: '100%',
      },
      className,
    ],
  }
}
