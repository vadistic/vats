import { Indexed } from '.'
import { IMutation, IQuery } from './types'

export interface ISchemaQueryFieldConfig {
  single?: boolean
  multi?: boolean
  connections?: boolean
}

export interface ISchemaMutationFieldConfig {
  create?: boolean
  update?: boolean
  upsert?: boolean
  delete?: boolean
  createMany?: boolean
  updateMany?: boolean
  upsertMany?: boolean
  deleteMany?: boolean
}

export interface ISchemaFieldConfig {
  query: ISchemaQueryFieldConfig | boolean
  mutation: ISchemaMutationFieldConfig | boolean
}

export interface IObjSchemaFieldConfig {
  query: ISchemaQueryFieldConfig
  mutation: ISchemaMutationFieldConfig
}

export type SchemaConfig = Partial<
  { [K in keyof (IQuery | IMutation)]: ISchemaFieldConfig | boolean }
>

export const buildSchemaConfig = (
  schemaConfig: SchemaConfig,
  defaultFieldConfig: IObjSchemaFieldConfig,
) => {
  const queryList: string[] = []
  const mutationList: string[] = []

  // TODO: maybe get rid of this crazy fn
  const objectifyFieldConfig = (fieldConfig: ISchemaFieldConfig | boolean) => {
    const objFieldConfig: Partial<Indexed<IObjSchemaFieldConfig>> = {}

    const falsedFieldConfig: IObjSchemaFieldConfig = {
      query: {
        single: false,
        multi: false,
        connections: false,
      },
      mutation: {
        create: false,
        createMany: false,
        delete: false,
        deleteMany: false,
        update: false,
        updateMany: false,
        upsert: false,
        upsertMany: false,
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
      const _field = field as keyof ISchemaFieldConfig
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
          const _subfield = subfield as keyof (ISchemaQueryFieldConfig | ISchemaMutationFieldConfig)
          const configVal = fieldValue[_subfield]
          // undefined to false
          objFieldConfig[_field] = {}
          objFieldConfig[field][subfield] = !!configVal
        })
      }
    })

    return objFieldConfig as IObjSchemaFieldConfig
  }

  Object.entries(schemaConfig).forEach(([name, config]) => {
    if (config) {
      const conf = objectifyFieldConfig(config)

      const uppercaseName = name[0].toUpperCase() + name.substring(1)

      // tslint:disable:no-unused-expression
      conf.query.single && queryList.push(name)
      conf.query.multi && queryList.push(name + 's')

      conf.mutation.create && mutationList.push(`create${uppercaseName}`)
      conf.mutation.upsert && mutationList.push(`upsert${uppercaseName}`)
      conf.mutation.update && mutationList.push(`update${uppercaseName}`)
      conf.mutation.delete && mutationList.push(`delete${uppercaseName}`)
      conf.mutation.createMany && mutationList.push(`createMany${uppercaseName}s`)
      conf.mutation.upsertMany && mutationList.push(`upsertMany${uppercaseName}s`)
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