import { importSchema } from 'graphql-import'
import * as fs from 'fs'

const typeDefs = importSchema(__dirname + '/src/schema/schema.graphql')

fs.appendFileSync('typeDefs.graphql', typeDefs, 'utf-8')

console.log('TypeDefs compiled')

/* const types = [
  'auth',
  'candidate',
  'comment',
  'invite',
  'offer',
  'stage',
  'task',
  'types',
  'user',
  'workspace',
]

const importTypeDefs = (file: string) => importSchema(__dirname + `/src/schema/${file}.graphql`)

types.forEach(file => {
  console.log(`${file} started`)
  const data = importTypeDefs(file)
  fs.writeFileSync(`typeDefs/${file}.graphql`, data, 'utf-8')
  console.log(`${file} compiled`)
})

console.log('All TypeDefs compiled!') */
