// tslint:disable-next-line:no-implicit-dependencies
import * as f from 'faker'

import { WorkflowCreateInput } from '../generated/prisma'

export interface IWorkflows {
  [index: string]: WorkflowCreateInput
}

export const workflowsData: IWorkflows = {
  default: {
    name: 'Default workflow',
    description: f.lorem.sentences(3),
    disqualifications: {
      create: [
        {
          name: `Low quality application`,
          description: `Does not meet minimum requirements ✋`,
        },
        {
          name: `Not a fit`,
          description: `Does satisfy requiremnts`,
        },
      ],
    },
    stages: {
      create: [
        {
          name: `Applied`,
          description: `Application via Career Portal 🏠`,
          type: 'New',
        },
        {
          name: `Sourced`,
          description: `Provided by internal sourcer 👍`,
          type: 'New',
        },
        {
          name: `Screened`,
          description: `First application assesment 📝`,
          type: 'Pipeline',
        },
        {
          name: `Review`,
          description: `Selecting candidates & scheduling for an interview `,
          type: 'Pipeline',
        },
        {
          name: `First Interview`,
          description: `(Online) Interview with HR`,
          type: 'Pipeline',
        },
        {
          name: `Technical Interview`,
          description: `On-site interview with department head`,
          type: 'Pipeline',
        },
        {
          name: 'Hired',
          description: `Process to HRMS & celebrate 🎉`,
          type: 'Final',
        },
      ],
    },
  },
  custom: {
    name: 'In situ workflow',
    description: f.lorem.sentences(2),
    disqualifications: {
      create: [
        {
          name: `Low quality application`,
          description: `Does not meet minimum requirements ✋`,
        },
        {
          name: `Not a fit`,
          description: `Does satisfy requiremnts`,
        },
        {
          name: `Not on site`,
          description: `Application from outside location`,
        },
      ],
    },
    stages: {
      create: [
        {
          name: `Applied`,
          description: `Application via Career Portal 🏠`,
          type: 'New',
        },
        {
          name: `Agency lead`,
          description: `Provied by external agency 💰`,
          type: 'New',
        },
        {
          name: 'Qualified',
          description: `Meets minimum requirements`,
          type: 'Pipeline',
        },
        { name: `Interview`, description: `On-site interview`, type: 'Pipeline' },
        { name: `Case Study`, description: `✒️✒️✒️`, type: 'Pipeline' },
        {
          name: `Technical Interview`,
          description: `Interview with department's senior employee`,
          type: 'Pipeline',
        },
        {
          name: 'Hired',
          description: `Process to HRMS & celebrate 🎉`,
          type: 'Pipeline',
        },
      ],
    },
  },
}
