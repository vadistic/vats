import { Indexed } from '.'
import { IMutation, IQuery } from './types'

export interface SchemaQueryFieldConfig {
  single?: boolean
  multi?: boolean
  connection?: boolean
}

export interface SchemaMutationFieldConfig {
  create?: boolean
  update?: boolean
  upsert?: boolean
  delete?: boolean
  // there is no createMany & upsertMany as root field
  // https://github.com/prisma/prisma/issues/2160
  updateMany?: boolean
  deleteMany?: boolean
}

export interface SchemaFieldConfig {
  query: SchemaQueryFieldConfig | boolean
  mutation: SchemaMutationFieldConfig | boolean
}

export interface ObjSchemaFieldConfig {
  query: SchemaQueryFieldConfig
  mutation: SchemaMutationFieldConfig
}

export type SchemaConfig = Partial<
  { [K in keyof (IQuery | IMutation)]: SchemaFieldConfig | boolean }
>

export const buildSchemaConfig = (
  schemaConfig: SchemaConfig,
  defaultFieldConfig: ObjSchemaFieldConfig,
) => {
  const queryList: string[] = []
  const mutationList: string[] = []

  // TODO: maybe get rid of this crazy fn
  const objectifyFieldConfig = (fieldConfig: SchemaFieldConfig | boolean) => {
    const objFieldConfig: Partial<Indexed<ObjSchemaFieldConfig>> = {}

    const falsedFieldConfig: ObjSchemaFieldConfig = {
      query: {
        single: false,
        multi: false,
        connection: false,
      },
      mutation: {
        create: false,
        delete: false,
        deleteMany: false,
        update: false,
        updateMany: false,
        upsert: false,
      },
    }

    if (fieldConfig === true) {
      return defaultFieldConfig
    }

    if (fieldConfig === false) {
      return falsedFieldConfig
    }

    Object.keys(fieldConfig).forEach(field => {
      // https://github.com/Microsoft/TypeScript/pull/12253#issuecomment-263132208
      const _field = field as keyof SchemaFieldConfig
      const fieldValue = fieldConfig[_field]
      // assign for boolean values
      if (fieldValue === true) {
        objFieldConfig[_field] = defaultFieldConfig[_field]
      }
      if (fieldValue === false) {
        objFieldConfig[_field] = falsedFieldConfig[_field]
      }
      if (typeof fieldValue !== 'boolean') {
        // handle detailed object
        Object.keys(defaultFieldConfig[_field]).forEach(subfield => {
          const _subfield = subfield as keyof (SchemaQueryFieldConfig | SchemaMutationFieldConfig)
          const configVal = fieldValue[_subfield]
          // undefined to false
          objFieldConfig[_field] = {}
          objFieldConfig[field][subfield] = !!configVal
        })
      }
    })

    return objFieldConfig as ObjSchemaFieldConfig
  }

  Object.entries(schemaConfig).forEach(([name, config]) => {
    if (config) {
      const conf = objectifyFieldConfig(config)

      const uppercaseName = name[0].toUpperCase() + name.substring(1)

      // tslint:disable:no-unused-expression
      conf.query.single && queryList.push(name)
      conf.query.multi && queryList.push(name + 's')
      conf.query.connection && queryList.push(name + 's' + 'Connection')

      conf.mutation.create && mutationList.push(`create${uppercaseName}`)
      conf.mutation.upsert && mutationList.push(`upsert${uppercaseName}`)
      conf.mutation.update && mutationList.push(`update${uppercaseName}`)
      conf.mutation.delete && mutationList.push(`delete${uppercaseName}`)
      conf.mutation.updateMany && mutationList.push(`updateMany${uppercaseName}s`)
      conf.mutation.deleteMany && mutationList.push(`deleteMany${uppercaseName}s`)
      // tslint:enable:no-unused-expression
    }
  })

  return {
    queryList,
    mutationList,
  }
}
