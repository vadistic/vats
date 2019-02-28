import { css } from '@emotion/core'
import { Link as RouterLink, LinkGetProps, NavigateOptions } from '@reach/router'
import { Omit } from '@vats/utils'
import { Link as FabricLink } from 'office-ui-fabric-react'

export interface LinkState {
  tab?: string
}

export type LinkArg =
  | string
  | {
      to: string
      options?: NavigateOptions<LinkState>
    }

type AnchorProps = Omit<JSX.IntrinsicElements['a'], 'ref' | 'href'>

export interface LinkToProps {
  to?: string
  replace?: boolean
  getProps?: (props: LinkGetProps) => {}
  state?: LinkState
}

export interface LinkProps extends AnchorProps {
  to?: string | LinkToProps
  plain?: boolean
}

const plainLinkStyles = css`
  color: inherit;
  text-decoration: inherit;
`

export const Link: React.FC<LinkProps> = ({ plain, to = '', ...rest }) => {
  const props =
    typeof to === 'string'
      ? {
          to,
        }
      : to

  if (plain) {
    // ref typing somehow inc
    return <RouterLink {...props} {...rest} css={plainLinkStyles} />
  }

  return <FabricLink as={RouterLink} {...props} {...rest} />
}
