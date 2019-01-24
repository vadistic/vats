import * as fs from 'fs'
import { importSchema } from 'graphql-import'
import * as path from 'path'

import { gql } from './gql-tag'

type GqlImportSelection = string | string[] | RegExp

let gqlImportDefaultSource = path.resolve(__dirname, '../generated/prisma.graphql')

export const changeGqlImportDefaultSource = (sourcePath: string) => {
  gqlImportDefaultSource = sourcePath
}

let gqlImportSourceCache: string | undefined

export const loadCache = () => {
  gqlImportSourceCache = fs.readFileSync(path.resolve(__dirname, gqlImportDefaultSource), 'utf-8')
  return gqlImportSourceCache
}

export const resetCache = () => {
  gqlImportSourceCache = undefined
}

export class GqlImport {
  typeName = ''
  body = ''
  source = gqlImportDefaultSource
  get fields() {
    this.validate()

    return this.deconstruct().fields.join('\n')
  }

  /** change type source */
  from(source: string) {
    this.source = source
    return this
  }

  /** Imports type by name */
  require(name: string) {
    this.typeName = name

    // in case of Query.name or Mutation.otherName subfields selection
    const subFieldsNameRegex = /[A-z]+\.[A-z]+/
    let normalisedName = name

    if (subFieldsNameRegex.test(name)) {
      normalisedName = name.replace(/(?![A-z]+)\.[A-z]+/, '').trim()
    }

    let rawBody: string

    // use graph-gql import in case of nons tandard source or subfields import
    if (this.source === gqlImportDefaultSource && normalisedName === name) {
      try {
        rawBody = gqlImportSourceCache ? gqlImportSourceCache : loadCache()
      } catch (err) {
        throw Error(`gqlImport: could not load schema from default source \n ${err}`)
      }
    } else {
      try {
        rawBody = importSchema(gql`
        # import ${name} from '${this.source}'
        `)
      } catch (err) {
        throw Error(`gqlImport: could not find type (graphql-import error): ${name} \n ${err}`)
      }
    }

    const bodyRegex = new RegExp(`(type|input) ${normalisedName} (implements [A-z, ]+ )?{\n(.+\n)+}`, 'g')

    const bodyMatch = rawBody.match(bodyRegex)

    if (!bodyMatch) {
      throw Error(`gqlImport: could not parse type: ${name} \n`)
    }

    this.body = bodyMatch[0]

    return this
  }

  pick(names: GqlImportSelection) {
    this.validate()

    const node = this.deconstruct()
    const selectionRegex = this.getSelectionRegex(names)

    const pickedFields = this.body.match(selectionRegex)

    if (!pickedFields) {
      throw Error(`gqlImport.pick: could not match any fields.
        Type '${this.typeName}' matching provided: '${names}'`)
    }

    // rebuild
    this.body = gql`
      ${node.heading}
        ${pickedFields.join('\n')}
      }
    `
    return this
  }

  exclude(names: string[] | string | RegExp) {
    this.validate()

    const node = this.deconstruct()
    const selectionRegex = this.getSelectionRegex(names)

    const excludedFields = this.body.match(selectionRegex)

    if (!excludedFields) {
      throw Error(`gqlImport.exclude: could not match any fields.
        Type '${this.typeName}' matching provided: '${names}'`)
    }

    this.body = gql`
    ${node.heading}
      ${node.fields.filter(field => !excludedFields.includes(field)).join('\n')}
    }
  `
    return this
  }

  /** validate before using other methods */
  private validate() {
    if (this.body === '') {
      throw Error(`gqlImport: .require(name) before using other methods!`)
    }
  }

  private getSelectionRegex(selection: GqlImportSelection) {
    const getFieldbyNameRegex = (name: string) => new RegExp(`((${name})(\([^\)]+\))?: .+)`, 'g')

    if (Array.isArray(selection)) {
      return getFieldbyNameRegex(selection.join('|'))
    } else if (selection instanceof RegExp) {
      return selection
    } else {
      // simple string or regex-in-string expression for field name
      return getFieldbyNameRegex(selection)
    }
  }

  private deconstruct() {
    this.validate()

    // match any number of (one line) directives and then typdef header
    const typeHeadingRegex = /(((@.+\n)+)?.+{)/g
    // match all fields
    const allFieldsRegex = /([A-z]+(\([^\)]+\))?: .+)/g

    const heading = this.body.match(typeHeadingRegex)
    const fields = this.body.match(allFieldsRegex)

    if (!heading) {
      throw Error(`gqlImport: cannot parse type ${this.typeName}`)
    }

    if (!fields) {
      throw Error(`gqlImport: type ${this.typeName} appear to have no fields`)
    }

    return {
      heading: heading[0],
      // assertion because it's global regex anyway
      fields: fields as string[],
    }
  }
}

export const gqlImport = new GqlImport()
