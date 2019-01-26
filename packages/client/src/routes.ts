import { getRoutes } from './utils'

// first level children are views
export const routerConfig = {
  test: {
    path: 'test',
    children: {
      persona: {
        path: 'persona'
      }
    }
  }
}

export const routes = getRoutes(routerConfig)
