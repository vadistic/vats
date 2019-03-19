import { getMainDefinition } from 'apollo-utilities'
import { GraphqlRoots, StoreGraphqlConfig } from '../core'

export const getGraphqlRoots = (graphqlConfig: StoreGraphqlConfig) => {
  const roots: GraphqlRoots = {} as any

  Object.entries(graphqlConfig).forEach(([key, value]) => {
    const mainField = getMainDefinition(value).selectionSet.selections[0]

    if (mainField.kind === 'Field') {
      roots[key as keyof GraphqlRoots] = mainField.name.value
    }
  })

  return roots
}
