import { Link as RouterLink, LinkProps as IRouterLinkProps } from '@reach/router'
import { ILinkProps, Link } from 'office-ui-fabric-react/lib/Link'
import * as React from 'react'

export type ILinkButtonProps<TState = any> = ILinkProps & IRouterLinkProps<TState>

export const LinkButton: React.SFC<ILinkButtonProps> = props => <Link as={RouterLink} {...props} />
