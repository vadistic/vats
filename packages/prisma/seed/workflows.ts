// tslint:disable-next-line:no-implicit-dependencies
import * as f from 'faker'

import { WorkflowCreateInput } from '../src/generated/prisma-client'

export interface Workflows {
  [index: string]: WorkflowCreateInput
}

export const workflowsData: Workflows = {
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
          type: 'NEW',
          index: 0,
        },
        {
          name: `Sourced`,
          description: `Provided by internal sourcer 👍`,
          type: 'NEW',
          index: 1,
        },
        {
          name: `Screened`,
          description: `First application assesment 📝`,
          type: 'PIPELINE',
          index: 2,
        },
        {
          name: `Review`,
          description: `Selecting candidates & scheduling for an interview `,
          type: 'PIPELINE',
          index: 3,
        },
        {
          name: `First Interview`,
          description: `(Online) Interview with HR`,
          type: 'PIPELINE',
          index: 4,
        },
        {
          name: `Technical Interview`,
          description: `On-site interview with department head`,
          type: 'PIPELINE',
          index: 5,
        },
        {
          name: 'Hired',
          description: `Process to HRMS & celebrate 🎉`,
          type: 'FINAL',
          index: 6,
        },
      ],
    },
    reviews: {
      create: [
        {
          name: 'Quick review',
          fields: { create: [{ label: 'General impression', type: 'TEXT' }] },
        },
        {
          name: 'Post interview',
          fields: {
            create: [{ label: 'Task', type: 'PARAGRAPH' }, { label: 'Duration', type: 'INT' }],
          },
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
          type: 'NEW',
          index: 0,
        },
        {
          name: `Agency lead`,
          description: `Provied by external agency 💰`,
          type: 'NEW',
          index: 1,
        },
        {
          name: 'Qualified',
          description: `Meets minimum requirements`,
          type: 'PIPELINE',
          index: 2,
        },
        { name: `Interview`, description: `On-site interview`, type: 'PIPELINE', index: 3 },
        { name: `Case Study`, description: `✒️✒️✒️`, type: 'PIPELINE', index: 4 },
        {
          name: `Technical Interview`,
          description: `Interview with department's senior employee`,
          type: 'PIPELINE',
          index: 5,
        },
        {
          name: 'Hired',
          description: `Process to HRMS & celebrate 🎉`,
          type: 'PIPELINE',
          index: 6,
        },
      ],
    },
  },
}
