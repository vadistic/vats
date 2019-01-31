import { getRoutes } from './utils'

// first level children are views
export const routesConfig = {
  home: {
    path: '',
  },
  jobs: {
    path: 'jobs',
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
