const fs = require('fs')
const R = require('ramda')

const dir = './src/generated/server.ts'

// fixing windows/unix path generation issue in codemod
const data = R.pipe(
  path => fs.readFileSync(path, 'utf-8'),
  R.replace(/import schema from  '..\\schema\\schema'/, `import schema from  '../schema/schema'`),
  result => fs.writeFileSync(dir, result, 'utf-8')
)(dir)
