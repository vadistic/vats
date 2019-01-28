import { getRoutes } from './utils'

// first level children are views
export const routesConfig = {
  home: {
    path: ''
  },
  test: {
    path: 'test',
    children: {
      persona: {
        path: 'persona'
      },
      table: {
        path: 'table'
      }
    }
  }
}

export const routes = getRoutes(routesConfig)
