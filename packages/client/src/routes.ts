import { getRoutes, IRoutesConfigMap } from './utils'

// first level children are views
const routesConfig: IRoutesConfigMap = {
  home: {
    path: '',
  },
  jobs: {
    path: 'jobs',
    children: {
      list: {
        path: 'list',
        children: {
          surface: {
            path: ':id',
          },
        },
      },
    },
  },
  candidates: {
    path: 'candidates',
    children: {
      table: {
        path: 'table',
        children: {
          surface: {
            path: ':id',
          },
        },
      },
    },
  },
  job: {
    path: 'job',
  },
  candidate: {
    path: 'candidate',
  },
  dev: {
    path: 'dev',
  },
}

export const routes = getRoutes(routesConfig)
