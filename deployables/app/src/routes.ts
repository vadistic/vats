import { getRoutes, RoutesConfigMap } from './utils'

// first level children are views
const routesConfig: RoutesConfigMap = {
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
      list: {
        path: 'list',
        children: {
          surface: {
            path: ':id',
          },
        },
      },
      board: {
        path: 'board',
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
