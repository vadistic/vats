import * as fs from 'fs'
import { print } from 'graphql'
import * as path from 'path'
// tslint:disable-next-line:no-implicit-dependencies
import * as prettier from 'prettier'

import { schema } from '../src/apollo/schema'

const CLIENT_SCHEMA_PATH = 'src/generated/client.graphql'

const generatedServerGraphql = async () => {
  const config = await prettier.resolveConfig('.')
  const stringSchema = print(schema)
  const formattedSchema = prettier.format(stringSchema, {
    ...config,
    parser: 'graphql',
  })
  fs.writeFileSync(path.resolve(CLIENT_SCHEMA_PATH), formattedSchema, 'utf-8')
  console.log('Client graphql schema generated')
}

generatedServerGraphql()
