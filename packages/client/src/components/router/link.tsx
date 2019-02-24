import { css } from '@emotion/core'
import { Link as RouterLink, LinkGetProps, NavigateOptions } from '@reach/router'
import { Link as FabricLink } from 'office-ui-fabric-react'
import { Omit } from '../../utils'

export interface ILinkState {
  tab?: string
}

export type LinkArg =
  | string
  | {
      to: string
      options?: NavigateOptions<ILinkState>
    }

type AnchorProps = Omit<
  JSX.IntrinsicElements['a'] & JSX.IntrinsicElements['button'],
  'ref' | 'href'
>

export interface ILinkToProps {
  to?: string
  replace?: boolean
  getProps?: (props: LinkGetProps) => {}
  state?: ILinkState
}

export interface ILinkProps extends AnchorProps {
  to?: string | ILinkToProps
  plain?: boolean
}

const plainLinkStyles = css`
  color: inherit;
  text-decoration: inherit;
`

export const Link: React.FC<ILinkProps> = ({ plain, to = '', ...rest }) => {
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
