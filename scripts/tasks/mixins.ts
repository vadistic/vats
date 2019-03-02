import plugin, { StartPlugin } from '@start/plugin'

/*
 * runs plugin/ sequence without passing output
 */
export const sub = <In, Out>(fn: StartPlugin<In, Out>) =>
  plugin<In, In>('sub', ({ reporter }) => async input => {
    const pluginRunner = await fn

    await pluginRunner(reporter)(input)

    return input
  })

/**
 * transforms input
 */
export const filter = <In>(transform: (input: In) => In) =>
  plugin<In, In>('filter', () => async input => transform(input))

/**
 * runs plugin/sequence depending on input condition
 */
export const cond = <In, Out>(condition: (input: In) => boolean, fn: StartPlugin<In, Out>) =>
  plugin<In, In>('cond', ({ reporter, logMessage }) => async input => {
    if (condition(input)) {
      const pluginRunner = await fn

      await pluginRunner(reporter)(input)
    } else {
      logMessage('skipping')
    }

    return input
  })
