import fs from 'fs'
import { print } from 'graphql'
import path from 'path'
import { schema } from '../src/apollo/schema'

const CLIENT_SCHEMA_PATH = 'src/generated/client.graphql'

const genClientSdl = async () => {
  const stringSchema = print(schema)

  fs.writeFileSync(path.resolve(CLIENT_SCHEMA_PATH), stringSchema, 'utf-8')

  console.log('client sdl ts => graphql generated')
}

genClientSdl()
