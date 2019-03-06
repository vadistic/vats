// Based on this:
// https://github.com/vadistic/graphql-cli-generate-fragments/blob/master/src/GenerateFragments.ts

import plugin from '@start/plugin'
import sequence from '@start/plugin-sequence'
import fs from 'fs-extra'
import {
  buildASTSchema,
  DocumentNode,
  GraphQLFieldMap,
  GraphQLNamedType,
  GraphQLObjectType,
  GraphQLSchema,
  parse,
} from 'graphql'
import { importSchema } from 'graphql-import'
import path from 'path'

export const generateFragments = async (args: string[]) => {
  return sequence(
    plugin('validate paths', ({ logPath }) => async () => {
      const input = path.resolve(process.cwd(), args[0])
      const output = path.resolve(process.cwd(), args[1] || 'src/generated/fragments.ts')

      console.log(input, output)

      if (!input || !output) {
        throw Error('invalid input/output')
      }

      logPath(input)

      return {
        input,
        output,
      }
    }),
    plugin('generate-fragments', ({ logMessage, logPath }) => async ({ input, output }) => {
      const generator = new GenerateFragments({
        generator: 'js',
        deepNesting: false,
      })

      await generator.handle({ input, output })

      logMessage('finished generating fragments')
      logPath(output)
    }),
  )
}

export interface GenerateFragmentsConfig {
  generator: 'js' | 'graphql'
  deepNesting: boolean
}

export interface GenerateFragmentsPaths {
  input: string
  output: string
}

class GenerateFragments {
  private fragmentType = {
    DEFAULT: '',
    NO_RELATIONS: 'NoNesting',
    DEEP: 'DeepNesting',
  }

  constructor(public config: GenerateFragmentsConfig) {}

  async fragments(schema: string) {
    return this.makeFragments(schema, this.config.generator, this.config.deepNesting)
  }

  async handle(paths: GenerateFragmentsPaths) {
    const inputPath = paths.input
    const outputPath = paths.output
    const extension = this.config.generator
    const deepNesting = this.config.deepNesting

    let schema: string
    let schemaContents: string

    try {
      schema = await fs.readFile(inputPath, 'utf-8')
    } catch (err) {
      throw new Error(`cannot find schema input \n ${err}`)
    }

    try {
      schemaContents = await importSchema(schema)
    } catch (err) {
      throw new Error(`import schema error \n ${err}`)
    }

    const fragments: string = this.makeFragments(schemaContents, extension, deepNesting)

    await fs.ensureDir(path.dirname(outputPath))
    await fs.writeFile(outputPath, fragments, 'utf-8')
  }

  /**
   *
   */

  private indentedLine(level: number) {
    let line = '\n'
    for (let i = 0; i < level; i++) {
      line += '  '
    }
    return line
  }

  private makeFragments(schemaContents: string, generator: string, deepNesting: boolean) {
    const document: DocumentNode = parse(schemaContents, { noLocation: true })
    const ast: GraphQLSchema = buildASTSchema(document)

    const typeNames = Object.keys(ast.getTypeMap())
      .filter(typeName => ast.getType(typeName) !== undefined)
      .filter(
        typeName =>
          (ast.getType(typeName) as GraphQLNamedType).constructor.name === 'GraphQLObjectType',
      )
      .filter(typeName => !typeName.startsWith('__'))
      .filter(typeName => typeName !== (ast.getQueryType() as GraphQLObjectType).name)
      .filter(typeName =>
        ast.getMutationType()
          ? typeName !== (ast.getMutationType() as GraphQLObjectType)!.name
          : true,
      )
      .filter(typeName =>
        ast.getSubscriptionType()
          ? typeName !== (ast.getSubscriptionType() as GraphQLObjectType)!.name
          : true,
      )
      .sort((a, b) =>
        (ast.getType(a) as GraphQLNamedType).constructor.name <
        (ast.getType(b) as GraphQLNamedType).constructor.name
          ? -1
          : 1,
      )

    interface Fragment {
      name: string
      fragment: string
    }

    const standardFragments = typeNames
      .map(typeName => {
        const type = ast.getType(typeName)

        if (!type) {
          return null
        }

        const { name } = type
        const fields = this.generateFragments(type, ast)

        if (fields.length === 0) {
          return null
        }

        const fragment = [
          `fragment ${name} on ${name} {`,
          `  ${fields.join(this.indentedLine(1))}`,
          `}`,
        ].join('\n')

        return {
          name,
          fragment,
        }
      })
      .filter(frag => frag != null) as Fragment[]

    const noRelationsFragments = typeNames
      .map(typeName => {
        const type = ast.getType(typeName)

        if (!type) {
          return null
        }

        const { name } = type
        const fields = this.generateFragments(type, ast, this.fragmentType.NO_RELATIONS)

        if (fields.length === 0) {
          return null
        }

        const fragment = [
          `fragment ${name}${this.fragmentType.NO_RELATIONS} on ${name} {`,
          `  ${fields.join(this.indentedLine(1))}`,
          `}`,
        ].join('\n')

        return {
          name,
          fragment,
        }
      })
      .filter(frag => frag != null) as Fragment[]

    const deepFragments = !deepNesting
      ? []
      : (typeNames
          .map(typeName => {
            const type = ast.getType(typeName)

            if (!type) {
              return null
            }

            const { name } = type
            const fields = this.generateFragments(type, ast, this.fragmentType.DEEP)

            if (fields.length === 0) {
              return null
            }

            const fragment = [
              `fragment ${name}${this.fragmentType.DEEP} on ${name} {`,
              `  ${fields.join(this.indentedLine(1))}`,
              `}`,
            ].join('\n')

            return {
              name,
              fragment,
            }
          })
          .filter(frag => frag != null) as Fragment[])

    if (generator === 'js') {
      return `// THIS FILE HAS BEEN AUTO-GENERATED BY "graphql-cli-generate-fragments"
// DO NOT EDIT THIS FILE DIRECTLY
import gql from 'graphql-tag'

${standardFragments
  .map(
    ({ name, fragment }) => `
export const ${name}Fragment = gql\`${fragment}\`
`,
  )
  .join('')}
${noRelationsFragments
  .map(
    ({ name, fragment }) => `
export const ${name}${this.fragmentType.NO_RELATIONS}Fragment = gql\`${fragment}\`
`,
  )
  .join('')}
${deepFragments
  .map(
    ({ name, fragment }) => `
export const ${name}${this.fragmentType.DEEP}Fragment = gql\`${fragment}\`
`,
  )
  .join('')}
`
    } else {
      return `# THIS FILE HAS BEEN AUTO-GENERATED BY "graphql-cli-generate-fragments"
# DO NOT EDIT THIS FILE DIRECTLY
# Standard Fragments
# Nested fragments will spread one layer deep
${standardFragments
  .map(
    ({ fragment }) => `
${fragment}`,
  )
  .join('')}
# No Relational objects
# No nested fragments
${noRelationsFragments
  .map(
    ({ fragment }) => `
${fragment}`,
  )
  .join('')}
# Deeply nested Fragments
# Will include n nested fragments
# If there is a recursive relation you will receive a
# "Cannot spread fragment within itself" error when using
${deepFragments
  .map(
    ({ fragment }) => `
${fragment}`,
  )
  .join('')}
`
    }
  }

  private generateFragments(
    type: any,
    ast: GraphQLSchema,
    fragmentType = this.fragmentType.DEFAULT,
  ) {
    const fields: GraphQLFieldMap<any, any> = type.getFields()
    const fragmentFields = Object.keys(fields)
      .map(field => {
        return this.printField(field, fields[field], ast, fragmentType)
      })
      // Some fields should not be printed, ie. fields with relations.
      // Remove those from the output by returning null from printField.
      .filter(field => field != null)
    return fragmentFields
  }

  private printField(
    fieldName: string,
    field: any,
    ast: GraphQLSchema,
    fragmentType: string,
    indent = 1,
  ) {
    let constructorName = field.type.constructor.name && field.type.constructor.name

    if (constructorName === 'Object') {
      constructorName =
        (field.type.name &&
          (ast.getType(field.type.name.value) as GraphQLNamedType).constructor.name) ||
        null
    }

    if (constructorName === 'GraphQLList') {
      field =
        (field.astNode.type.type.type && field.astNode.type.type.type) ||
        ((field.astNode.type.type && field.astNode.type.type) || null)

      if (field === null) {
        throw new Error(`Schema malformed - list`)
      }
      constructorName = (ast.getType(field.name.value) as GraphQLNamedType).constructor.name
    }

    if (constructorName === 'GraphQLNonNull' || field.kind === 'NonNullType') {
      field = (field.astNode.type && field.astNode.type) || field.type
      constructorName =
        (field.type.name &&
          (ast.getType(field.type.name.value) as GraphQLNamedType).constructor.name) ||
        null
      if (constructorName === null) {
        field = (field.type && field.type) || null
        constructorName =
          (field.type.name &&
            (ast.getType(field.type.name.value) as GraphQLNamedType).constructor.name) ||
          null
      }
    }

    if (constructorName === 'GraphQLScalarType' || constructorName === 'GraphQLEnumType') {
      return fieldName
    }

    if (constructorName === 'GraphQLObjectType') {
      if (fragmentType === this.fragmentType.NO_RELATIONS) {
        return null
      }
      let typeName = null
      // if(field.name !== undefined)
      typeName =
        (field.name && field.name.value) ||
        ((field.type.name.value && field.type.name.value) || field.type.name)

      return (
        fieldName +
        ' {' +
        this.indentedLine(indent + 1) +
        '...' +
        `${(fragmentType === this.fragmentType.DEEP && typeName + this.fragmentType.DEEP) ||
          (fragmentType === this.fragmentType.DEFAULT &&
            typeName + this.fragmentType.NO_RELATIONS) ||
          typeName + this.fragmentType.DEFAULT}` +
        this.indentedLine(indent) +
        '}'
      )
    }

    return null
  }
}
