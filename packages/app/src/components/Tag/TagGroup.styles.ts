import { css } from 'emotion'

import { ITagGroupStyleProps, ITagGroupStyles } from './TagGroup.types'

export const getStyles = (props: ITagGroupStyleProps): ITagGroupStyles => {
  const {
    className,
    wrap,
    theme: { typography, spacing },
  } = props

  return {
    root: [
      'ms-TagGroup',
      css`
        width: 100%;
        overflow-y: hidden;
        overflow-x: hidden;
      `,
      wrap &&
        css`
          white-space: nowrap;

          /* cross-browser hide scrollbars */
          overflow: '-moz-scrollbars-none';
          -ms-overflow-style: none;
          &::-webkit-scrollbar {
            display: none;
          }

          &:hover {
            overflow-x: scroll;
          }
        `,
      className,
    ],
    subComponentStyles: {
      tag: {
        root: [
          css`
            margin: 0 2px;
            overflow: visible;
            user-select: none;
          `,
        ],
      },
    },
  }
}
