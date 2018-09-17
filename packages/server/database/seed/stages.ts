import * as faker from 'faker'
import { StageCreateInput } from '../generated/prisma'

interface IStages {
  [index: string]: StageCreateInput[]
}

export const stageCreateMany: IStages = {
  default: [
    {
      name: `Applied`,
      description: `Application via Career Portal 🏠`,
      position: 0,
      type: 'NEW',
    },
    {
      name: `Sourced`,
      description: `Provided by internal sourcer 👍`,
      position: 0,
      type: 'NEW',
    },
    {
      name: `Screened`,
      description: `First application assesment 📝`,
      position: 0,
      type: 'QUALIFIED',
    },
    {
      name: `Review`,
      description: `Selecting candidates & scheduling for an interview `,
      position: 1,
      type: 'QUALIFIED',
    },
    {
      name: `First Interview`,
      description: `(Online) Interview with HR`,
      position: 2,
      type: 'QUALIFIED',
    },
    {
      name: `Technical Interview`,
      description: `On-site interview with department head`,
      position: 3,
      type: 'QUALIFIED',
    },
    {
      name: 'Hired',
      description: `Process to HRMS & celebrate 🎉`,
      position: 0,
      type: 'HIRED',
    },
    {
      name: `Low quality application`,
      description: `Does not meet minimum requirements ✋`,
      position: 0,
      type: 'DISQUALIFIED',
    },
    {
      name: `Future fit`,
      description: `Does not fit for current position`,
      position: 0,
      type: 'DISQUALIFIED',
    },
    {
      name: `Not a fit`,
      description: `Does satisfy requiremnts`,
      position: 0,
      type: 'DISQUALIFIED',
    },
  ],
  custom: [
    {
      name: `Applied`,
      description: `Application via Career Portal 🏠`,
      position: 0,
      type: 'NEW',
    },
    {
      name: `Agency lead`,
      description: `Provied by external agency 💰`,
      position: 0,
      type: 'NEW',
    },
    {
      name: 'Qualified',
      description: `Meets minimum requirements`,
      position: 0,
      type: 'QUALIFIED',
    },
    { name: `Interview`, description: `On-site interview`, position: 0, type: 'QUALIFIED' },
    { name: `Case Study`, description: `✒️✒️✒️`, position: 0, type: 'QUALIFIED' },
    {
      name: `Technical Interview`,
      description: `Interview with department's senior employee`,
      position: 0,
      type: 'QUALIFIED',
    },
    {
      name: 'Hired',
      description: `Process to HRMS & celebrate 🎉`,
      position: 0,
      type: 'HIRED',
    },
    {
      name: `Low quality application`,
      description: `Does not meet minimum requirements ✋`,
      position: 0,
      type: 'DISQUALIFIED',
    },
    {
      name: `Not a fit`,
      description: `Does satisfy requiremnts`,
      position: 0,
      type: 'DISQUALIFIED',
    },
  ],
}
