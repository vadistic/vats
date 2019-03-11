import { getMainDefinition } from 'apollo-utilities'
import { StoreGraphqlConfig, StoreGraphqlRoots } from './types'

export const getGraphqlRoots = (graphqlConfig: StoreGraphqlConfig) => {
  const roots: StoreGraphqlRoots = {} as any

  Object.entries(graphqlConfig).forEach(([key, value]) => {
    const mainField = getMainDefinition(value).selectionSet.selections[0]

    if (mainField.kind === 'Field') {
      roots[key as keyof StoreGraphqlRoots] = mainField.name.value
    }
  })

  return roots
}
