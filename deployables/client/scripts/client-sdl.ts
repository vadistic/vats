import fs from 'fs'
import { print } from 'graphql'
import path from 'path'
// tslint:disable-next-line:no-implicit-dependencies
import * as prettier from 'prettier'

import { schema } from '../src/apollo/schema'

const CLIENT_SCHEMA_PATH = 'src/generated/client.graphql'
const SERVER_SCHEMA_PATH = 'src/generated/server.graphql'
const MERGED_SCHEMA_PATH = 'src/generated/merged.graphql'

const genClientSdl = async () => {
  const config = await prettier.resolveConfig('.')
  const stringSchema = print(schema)
  const formattedSchema = prettier.format(stringSchema, {
    ...config,
    parser: 'graphql',
  })

  const serverSchema = fs.readFileSync(path.resolve(SERVER_SCHEMA_PATH), 'utf-8')

  const mergedSchema = [serverSchema, formattedSchema].join('\n\n\n')

  fs.writeFileSync(path.resolve(CLIENT_SCHEMA_PATH), formattedSchema, 'utf-8')
  fs.writeFileSync(path.resolve(MERGED_SCHEMA_PATH), mergedSchema, 'utf-8')

  console.log('Client graphql schema generated')
}

genClientSdl()
