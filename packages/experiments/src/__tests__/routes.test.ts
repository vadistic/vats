import { routesProxy } from '../routes-proxy'

export const routesConfig = {
  home: {},
  jobs: {
    list: {
      surface: {
        params: ':id',
      },
    },
  },
  candidates: {
    table: {
      surface: {
        params: ':id',
      },
    },
    board: {
      surface: {
        params: ':id',
      },
    },
    list: {
      surface: {
        params: ':id',
      },
    },
  },
  job: {
    params: ':id',
  },
  candidate: {
    params: ':id',
  },
}

const routes = routesProxy(routesConfig)

describe('routesProxy', () => {
  it('returns correct routes for empty/non-nested', () => {
    expect(routes.home.PATH).toBe('/home')
    expect(routes.home.NAME).toBe('home')
    expect(routes.home.PARAMS).toBeUndefined()
    expect(routes.home.BASEPATH).toBe('/home')
  })

  it('returns correct routes for nested', () => {
    expect(routes.candidates.list.PATH).toBe('/candidates/list')
    expect(routes.candidates.list.BASEPATH).toBe('/candidates/list')
    expect(routes.candidates.list.PARAMS).toBeUndefined()
    expect(routes.candidates.list.NAME).toBe('list')
  })

  it('returns correct routes with params', () => {
    expect(routes.candidates.list.surface.PATH).toBe('/candidates/list/surface/:id')
    expect(routes.candidates.list.surface.BASEPATH).toBe('/candidates/list/surface')
    expect(routes.candidates.list.surface.PARAMS).toBe(':id')
    expect(routes.candidates.list.surface.NAME).toBe('surface')
  })
})
