import { NavigateOptions, RouteComponentProps } from '@reach/router'

export interface DefaultRouteProps extends RouteComponentProps {
  to: string
  options?: NavigateOptions<{}>
}

export const DefaultRoute: React.FC<DefaultRouteProps> = ({ navigate, to, options = {} }) => {
  if (navigate) {
    navigate(to, { replace: true, ...options })
  }

  return null
}
