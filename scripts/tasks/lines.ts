import plugin from '@start/plugin'
import find from '@start/plugin-find'
import read from '@start/plugin-read'
import sequence from '@start/plugin-sequence'
import fs from 'fs-extra'
import path from 'path'

// tslint:disable-next-line: no-implicit-dependencies
// @ts-ignore
import sloc from 'sloc'

/**
 * try to find out how many lines of code I have here
 */
export const lines = async (args: string[]) => {
  const list = ['packages', 'deployables']
    .map(dir =>
      fs
        .readdirSync(path.resolve(process.cwd(), dir))
        .map(subdir => dir + '/' + subdir + '/**/*.{ts,tsx,js,graphql}'),
    )
    .flat(1)

  const ignore = ['node_modules', 'build', 'dist'].map(el => `!**/${el}/**`)

  const init = {
    total: 0,
    source: 0,
    comment: 0,
    single: 0,
    block: 0,
    mixed: 0,
    empty: 0,
    todo: 0,
    blockEmpty: 0,
    generated: 0,
  }

  type LisesData = typeof init & {
    [index: string]: number
  }

  const total: any = {}

  interface LinesMap {
    [index: string]: LisesData
  }

  interface Projects {
    [projects: string]: LinesMap
  }

  const extnames: LinesMap = {}

  const projects: Projects = {}

  return sequence(
    find([...list, ...ignore]),
    read,
    plugin('sloc', ({ logMessage, logPath }) => async ({ files }) => {
      files.forEach(file => {
        const extname = path.extname(file.path).replace('.', '')

        const relativePath = path.relative(process.cwd(), file.path).split('/')

        const projectname =
          relativePath[0] === 'scripts' ? 'scripts' : relativePath.slice(0, 2).join('/')

        const slocExtname = extname === 'graphql' ? 'css' : extname

        const isGenerated = file.path.includes('generated')

        const meta = sloc(file.data, slocExtname) as {
          [key: string]: number
        }

        Object.entries(meta).forEach(([key, value]) => {
          const _key = isGenerated ? 'generated' : key

          total[_key] = (total[_key] || 0) + value

          if (!extnames[extname]) {
            extnames[extname] = {} as any
          }

          extnames[extname][_key] = (extnames[extname][_key] || 0) + value

          if (!projects[projectname]) {
            projects[projectname] = {
              total: {},
            } as any
          }

          if (!projects[projectname][extname]) {
            projects[projectname][extname] = {} as any
          }

          projects[projectname][extname][_key] = (projects[projectname][extname][_key] || 0) + value
          projects[projectname].total[_key] = (projects[projectname].total[_key] || 0) + value
        })
      })
    }),
    plugin('report', ({ logMessage, logPath }) => async ({ files }) => {
      logMessage(`TOTAL\n  ${JSON.stringify(total, null, 2)}`)
      logMessage(`TOTAL\n  ${JSON.stringify(extnames, null, 2)}`)
      logMessage(`TOTAL\n  ${JSON.stringify(projects, null, 2)}`)

      fs.writeJson(
        path.resolve(process.cwd(), 'sloc.json'),
        {
          name: 'Source Lines of Code',
          date: new Date().toISOString(),
          total,
          extnames,
          projects,
        },
        { spaces: 2 },
      )
    }),
  )
}
