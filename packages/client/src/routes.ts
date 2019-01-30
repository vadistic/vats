import { getRoutes } from './utils'

// first level children are views
export const routesConfig = {
  home: {
    path: '',
  },
  test: {
    path: 'dev',
  },
}

export const routes = getRoutes(routesConfig)
