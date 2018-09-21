import { Link as RouterLink, LinkProps as IRouterLinkProps } from '@reach/router'
import * as React from 'react'

import { ILinkProps, Link } from 'office-ui-fabric-react/lib/Link'

export type ILinkButtonProps<TState = any> = ILinkProps & IRouterLinkProps<TState>

export const LinkButton: React.SFC<ILinkButtonProps> = props => <Link as={RouterLink} {...props} />
