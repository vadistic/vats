import { getRoutes, IRoutesConfigMap } from './utils'

// first level children are views
const routesConfig: IRoutesConfigMap = {
  home: {
    path: '',
  },
  jobs: {
    path: 'jobs',
    children: {
      jobSurface: {
        path: ':id',
      },
    },
  },
  candidates: {
    path: 'candidates',
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
