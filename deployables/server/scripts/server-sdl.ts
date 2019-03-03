import * as fs from 'fs'
import * as path from 'path'
// tslint:disable-next-line:no-implicit-dependencies
import * as prettier from 'prettier'

import { getTypeDefs } from '../src/schema'

const SERVER_SCHEMA_PATH = 'src/generated/server.graphql'

export const genServerSdl = async () => {
  const config = await prettier.resolveConfig('.')

  const formattedSchema = prettier.format(getTypeDefs(), { ...config, parser: 'graphql' })
  fs.writeFileSync(path.resolve(SERVER_SCHEMA_PATH), formattedSchema, 'utf-8')
  console.log('Server graphql schema generated')
}
