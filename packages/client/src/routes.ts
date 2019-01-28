import { getRoutes } from './utils'

// first level children are views
export const routesConfig = {
  home: {
    path: '',
  },
  test: {
    path: 'dev',
    children: {
      persona: {
        path: 'persona',
      },
      table: {
        path: 'table',
      },
      candidateProfile: {
        path: 'candidate',
      },
    },
  },
}

export const routes = getRoutes(routesConfig)
