import { css } from '@emotion/core'
import { Link as RouterLink, LinkProps as RouterLinkProps } from '@reach/router'
import { ILinkProps as FabricLinkProps, Link as FabricLink } from 'office-ui-fabric-react'

export interface ILinkState {}

export type ILinkProps =
  | RouterLinkProps<ILinkState> & {
      plain: true
    }
  | RouterLinkProps<ILinkState> &
      FabricLinkProps & {
        plain?: false
      }

const plainLinkStyles = css`
  color: inherit;
  text-decoration: inherit;
`

export const Link: React.FC<ILinkProps> = ({ plain, ref, ...rest }) => {
  if (plain) {
    // ref typing somehow inc
    return <RouterLink {...rest} css={plainLinkStyles} />
  }

  return <FabricLink as={RouterLink} ref={ref} {...rest} />
}
