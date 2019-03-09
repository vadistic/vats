import { HostConfig, HostGraphql, HostGraphqlRoots } from './types'

export const getGraphqlRoots = (config: HostConfig<any>) => {
  const graphql = config.graphql

  if (!graphql) {
    return
  }

  const graphqlRoots: Partial<HostGraphqlRoots> = {}

  Object.keys(graphql).forEach(operation => {
    const node = graphql[operation as keyof HostGraphql]
    if (node) {
      const opNode = node.definitions.find(n => n.kind === 'OperationDefinition')

      if (opNode && opNode.kind === 'OperationDefinition') {
        // only support first/only selection for now
        const fieldNode = opNode.selectionSet.selections[0]

        if (fieldNode.kind === 'Field') {
          graphqlRoots[operation as keyof HostGraphqlRoots] = fieldNode.name.value
        }
      }
    }
  })

  return graphqlRoots
}
