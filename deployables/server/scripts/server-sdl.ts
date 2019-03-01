import * as fs from 'fs'
import * as path from 'path'
// tslint:disable-next-line:no-implicit-dependencies
import * as prettier from 'prettier'

import { allSchema } from '../src/schema'

const SERVER_SCHEMA_PATH = 'src/generated/server.graphql'

const generatedServerGraphql = async () => {
  const config = await prettier.resolveConfig('.')
  const formattedSchema = prettier.format(allSchema, { ...config, parser: 'graphql' })
  fs.writeFileSync(path.resolve(SERVER_SCHEMA_PATH), formattedSchema, 'utf-8')
  console.log('Server graphql schema generated')
}

generatedServerGraphql()
