import { ILinkProps, Link } from 'office-ui-fabric-react/lib/Link'
import * as React from 'react'
import { LinkProps, RouteComponentProps, withRouter } from 'react-router-dom'

// Idea from here: https://stackoverflow.com/questions/42463263/wrapping-a-react-router-link-in-an-html-button

type ILinkButtonBaseProps = ILinkProps & LinkProps & RouteComponentProps<any>
export type ILinkButtonProps = ILinkProps & LinkProps

const LinkButtonBase: React.SFC<ILinkButtonBaseProps> = ({
  // Link props
  replace,
  to,
  // Router props
  history,
  location,
  match,
  staticContext,
  // rest
  onClick,
  ...rest
}) => (
  <Link
    onClick={event => {
      // tslint:disable-next-line:no-unused-expression
      onClick && onClick(event)

      if (typeof to === 'string') {
        to = {
          pathname: to,
        }
      }

      if (replace) {
        history.replace(to)
      } else {
        history.push(to)
      }
    }}
    {...rest}
  />
)

export const LinkButton = withRouter(LinkButtonBase) as React.ComponentType<ILinkButtonProps>
