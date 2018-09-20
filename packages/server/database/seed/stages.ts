import { StageCreateInput } from '../generated/prisma'

export interface IStages {
  [index: string]: StageCreateInput[]
}

export const stageCreateMany: IStages = {
  default: [
    {
      name: `Applied`,
      description: `Application via Career Portal 🏠`,
      type: 'NEW',
    },
    {
      name: `Sourced`,
      description: `Provided by internal sourcer 👍`,
      type: 'NEW',
    },
    {
      name: `Screened`,
      description: `First application assesment 📝`,
      type: 'QUALIFIED',
    },
    {
      name: `Review`,
      description: `Selecting candidates & scheduling for an interview `,
      type: 'QUALIFIED',
    },
    {
      name: `First Interview`,
      description: `(Online) Interview with HR`,
      type: 'QUALIFIED',
    },
    {
      name: `Technical Interview`,
      description: `On-site interview with department head`,
      type: 'QUALIFIED',
    },
    {
      name: 'Hired',
      description: `Process to HRMS & celebrate 🎉`,
      type: 'HIRED',
    },
    {
      name: `Low quality application`,
      description: `Does not meet minimum requirements ✋`,
      type: 'DISQUALIFIED',
    },
    {
      name: `Future fit`,
      description: `Does not fit for current position`,
      type: 'DISQUALIFIED',
    },
    {
      name: `Not a fit`,
      description: `Does satisfy requiremnts`,
      type: 'DISQUALIFIED',
    },
  ],
  custom: [
    {
      name: `Applied`,
      description: `Application via Career Portal 🏠`,
      type: 'NEW',
    },
    {
      name: `Agency lead`,
      description: `Provied by external agency 💰`,
      type: 'NEW',
    },
    {
      name: 'Qualified',
      description: `Meets minimum requirements`,
      type: 'QUALIFIED',
    },
    { name: `Interview`, description: `On-site interview`, type: 'QUALIFIED' },
    { name: `Case Study`, description: `✒️✒️✒️`, type: 'QUALIFIED' },
    {
      name: `Technical Interview`,
      description: `Interview with department's senior employee`,
      type: 'QUALIFIED',
    },
    {
      name: 'Hired',
      description: `Process to HRMS & celebrate 🎉`,
      type: 'HIRED',
    },
    {
      name: `Low quality application`,
      description: `Does not meet minimum requirements ✋`,
      type: 'DISQUALIFIED',
    },
    {
      name: `Not a fit`,
      description: `Does satisfy requiremnts`,
      type: 'DISQUALIFIED',
    },
  ],
}
