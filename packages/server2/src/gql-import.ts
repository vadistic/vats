import { importSchema } from 'graphql-import'
import { gql } from './gql-tag'

export const gqlImport = {
  name: undefined as undefined | string,
  value: undefined as undefined | string,
  require(name: string) {
    this.name = name
    try {
      this.value = importSchema(gql`
    # import ${name} from 'src/generated/prisma.graphql'
    `)
    } catch (err) {
      throw Error(`gqlImport: could not find type: ${name} \n ${err}`)
    }
    return this
  },
  pick(names: string[] | string | RegExp) {
    if (!this.value) {
      throw Error(`gqlImport.pick: .require(name) before using other methods!`)
    }

    let fieldRegex: RegExp
    if (Array.isArray(names)) {
      fieldRegex = new RegExp(`((${names.join('|')}): .+)`, 'g')
    } else if (names instanceof RegExp) {
      fieldRegex = names
    } else {
      // simple string or regex-in-string expression
      fieldRegex = new RegExp(`(${names}: .+)`, 'g')
    }
    // match any number of (one line) directives and then typdef header
    const typeRegex = /(((@.+\n)+)?.+{)/

    // type definition top with directives
    const type = this.value.match(typeRegex)
    const fields = this.value.match(fieldRegex)

    if (!type) {
      throw Error(`gqlImport.pick: could not parse type '${this.name}'`)
    }

    if (!fields) {
      throw Error(`gqlImport.pick: could not find any fields.
        Type '${this.name}' matching regex/array: '${names}'`)
    }

    // after all validations
    let result = ''
    result += type[0]
    result += '\n'
    result += fields.join('\n')
    result += '\n'
    result += '}'
    this.value = result
    return this
  },
  exclude(names: string[] | string | RegExp) {
    if (!this.value) {
      throw Error(`gqlImport.exclude: .require(name) before using other methods!`)
    }

    let fieldRegex: RegExp
    if (Array.isArray(names)) {
      fieldRegex = new RegExp(`((${names.join('|')}): .+)`, 'g')
    } else if (names instanceof RegExp) {
      fieldRegex = names
    } else {
      // simple string or regex-in-string expression
      fieldRegex = new RegExp(`(${names}: .+)`, 'g')
    }
    // match any number of (one line) directives and then typdef header
    const typeRegex = /(((@.+\n)+)?.+{)/
    const allFieldsRegex = /([^\n ]+: .+)/g

    // type definition top with directives
    const type = this.value.match(typeRegex)
    const allFields = this.value.match(allFieldsRegex)
    const fields = this.value.match(fieldRegex)

    console.log('fields: ', fields)
    console.log('allFields: ', allFields)

    if (!type) {
      throw Error(`gqlImport.exclude: could not parse type '${this.name}'`)
    }

    if (!allFields) {
      throw Error(`gqlImport.pick: type is empty`)
    }

    if (!fields) {
      throw Error(`gqlImport.pick: could not find any fields.
        Type '${this.name}' matching regex/array: '${names}'`)
    }

    // after all validations
    let result = ''
    result += type[0]
    result += '\n'
    result += allFields.filter(field => !fields.includes(field)).join('\n')
    result += '\n'
    result += '}'
    this.value = result
    return this
  },
}
