// tslint:disable-next-line:no-implicit-dependencies
import * as f from 'faker'
// tslint:disable-next-line:no-implicit-dependencies
import * as R from 'ramda'

import {
  Application,
  ApplicationType,
  Candidate,
  Comment,
  FileCreateInput,
  Job,
  JobType,
  Location,
  Tag,
  Task,
  User,
  Workflow,
} from '../../src/generated/prisma-binding'
import { db } from './setup'
import { attempt, fakeEmoji, fakeSocialLink, List, randomConnectMany, randomFn } from './utils'
import { workflowsData } from './workflows'

// Because generated bindings are not nominally compatible with original class

const config = {
  USERS_NUMBER: 10,
  LOCATIONS_NUMBER: 5,
  JOBS_NUMBER: 10,
  TAGS_NUMBER: 50,
  CANDIDATES_NUMBER: 100,
  COMMENTS_NUMBER: 300,
  APPLICATIONS_NUMBER: 200,
  TASKS_NUMBER: 50,
}

const seed = async () => {
  // seed workspace
  const workspace = await db.mutation.createWorkspace({
    data: {
      name: 'Vadistic Recruitment',
    },
  })
  console.log('Seeded workspace')

  // seed users
  console.log('Seeding users start')
  const users = new List<User>()
  for (let i = 0; i < config.USERS_NUMBER; i++) {
    const gender = f.random.number(1)
    const firstName = f.name.firstName(gender)
    const lastName = f.name.lastName(gender)
    const username = f.internet.userName(firstName, lastName)
    const email = f.internet.email(firstName, lastName, 'vadistic-recruitment.com')

    const avatarFile: FileCreateInput = {
      name: `${firstName}-${lastName}-profile-96x96`,
      size: 27500,
      type: 'image/png',
      url: `https://api.adorable.io/avatars/96/${email}.png`,
    }

    users.arr[i] = await attempt(db.mutation.createUser, {
      data: {
        // info
        firstName,
        lastName,
        email,
        username,
        // half of guys would have avatars
        avatar: f.random.boolean ? { create: avatarFile } : undefined,
        position: f.name.jobTitle(),
      },
    })
  }
  console.log('Seeding users end')

  // seed my account
  console.log('Seeding myself?')
  users.arr.push(
    await attempt(db.mutation.createUser, {
      data: {
        firstName: 'Jakub',
        lastName: 'Wadas',
        email: 'vadistic@gmail.com',
        username: 'vadistic',
        position: f.name.jobTitle(),
      },
    }),
  )
  console.log('Succesfuly ended')

  // seed locations
  console.log('Seeding locations start')
  const locations = new List<Location>()
  for (let i = 0; i < config.JOBS_NUMBER; i++) {
    locations.arr[i] = await attempt(db.mutation.createLocation, {
      data: {
        city: f.address.city(),
        country: f.address.country(),
        region: f.address.state(),
        zip: f.address.zipCode(),
      },
    })
  }
  console.log('Seeding locations end')

  // create workflows & stages
  console.log('Seeding workflows start')
  const workflows = new List<Workflow>()
  workflows.arr[0] = await db.mutation.createWorkflow({
    data: workflowsData.default,
  })

  workflows.arr[1] = await db.mutation.createWorkflow({
    data: workflowsData.custom,
  })
  console.log('Seeding workflows end')

  // seed jobs
  console.log('Seeding jobs start')
  const jobs = new List<Job>()
  for (let i = 0; i < config.JOBS_NUMBER; i++) {
    jobs.arr[i] = await attempt(db.mutation.createJob, {
      data: {
        name: f.name.jobDescriptor() + ' ' + f.name.jobTitle(),
        description: f.lorem.paragraphs(f.random.number(4)),
        requirements: f.lorem.paragraphs(f.random.number(4)),
        department: f.name.jobArea(),
        type: f.random.arrayElement(['Draft', 'Published', 'Archived'] as JobType[]),
        locations: { connect: randomConnectMany(locations, 3) },
        workspace: { connect: { id: workspace.id } },
        workflow: { connect: { id: workflows.random().id } },
      },
    })
  }
  console.log('Seeding jobs end')

  // seed tags
  console.log('Seeding tags start')
  const tags = new List<Tag>()
  for (let i = 0; i < config.TAGS_NUMBER; i++) {
    tags.arr[i] = await attempt(db.mutation.createTag, {
      data: {
        label: f.random.word().toLocaleLowerCase(),
      },
    })
  }
  console.log('Seeding jobs end')

  // seed candidates
  console.log('Seeding candidates start')
  const candidates = new List<Candidate>()
  for (let i = 0; i < config.CANDIDATES_NUMBER; i++) {
    const firstName = f.name.firstName()
    const lastName = f.name.lastName()
    const emails = R.times(() => f.internet.email(firstName, lastName), f.random.number(2))
    const links = R.times(() => fakeSocialLink(), f.random.number(4))
    const phones = R.times(() => f.phone.phoneNumber(), f.random.number(2))

    const avatarFile: FileCreateInput = {
      name: `${firstName}-${lastName}-profile-96x96`,
      size: 27500,
      type: 'image/png',
      url: `https://api.adorable.io/avatars/96/${emails[0] || firstName + '@' + lastName}.png`,
    }

    const resumeFile: FileCreateInput = {
      name: `${firstName}-${lastName}-resume-${f.date.past(0)}`,
      size: f.random.number({ min: 200000, max: 7000000 }),
      type: 'application/pdf',
      // TODO: My template
      url:
        'https://www.overleaf.com/latex/templates/cv-template/gsztvcrdvvbj.pdf?random=' +
        f.random.uuid(),
    }

    const hasResume = f.random.boolean

    const coverLetter = f.lorem.paragraphs(f.random.number({ min: 1, max: 8 }))

    candidates.arr[i] = await attempt(db.mutation.createCandidate, {
      data: {
        tags: { connect: randomConnectMany(tags, 8) },
        emails: { set: emails },
        phones: { set: phones },
        firstName,
        lastName,
        links: { set: links },
        avatar: f.random.boolean ? { create: avatarFile } : undefined,
        metaCompany: f.random.boolean ? f.company.companyName() : undefined,
        metaHeadline: f.random.boolean ? f.name.jobDescriptor() : undefined,
        resumesFile: hasResume ? { create: resumeFile } : undefined,
        coverLettersString: hasResume ? { set: coverLetter } : undefined,
      },
    })
  }
  console.log('Seeding candidates end')

  // seed comments
  console.log('Seeding comments start')
  const comments = new List<Comment>()
  for (let i = 0; i < config.COMMENTS_NUMBER; i++) {
    const content = R.times(
      () => randomFn(fakeEmoji, f.lorem.sentence)(),
      f.random.number({ min: 1, max: 8 }),
    ).join(' ')

    comments.arr[i] = await attempt(db.mutation.createComment, {
      data: {
        content,
        createdBy: { connect: { id: users.random().id } },
      },
    })
  }

  console.log('Seeding comments end')

  // seed tasks
  console.log('Seeding tasks start')
  const tasks = new List<Task>()
  for (let i = 0; i < config.TASKS_NUMBER; i++) {
    const title = f.lorem.sentence() + f.random.boolean && ' ' + fakeEmoji()

    const description = f.random.boolean()
      ? R.times(() => randomFn(fakeEmoji, f.lorem.sentence)(), f.random.number(4)).join(' ')
      : undefined

    tasks.arr[i] = await attempt(db.mutation.createTask, {
      data: {
        candidate: { connect: { id: candidates.random().id } },
        title,
        description,
        owners: { connect: randomConnectMany(users, 3) },
        dueAt: f.random.boolean && f.date.future(0),
      },
    })
  }
  console.log('Seeding tasks end')

  // seed applications
  console.log('Seeding applications start')
  const applications = new List<Application>()
  for (let i = 0; i < config.APPLICATIONS_NUMBER; i++) {
    const job = await attempt(
      db.query.job,
      { where: { id: jobs.random().id } },
      `{ id, workflow { stages { id, type }, disqualifications { id }}}`,
    )

    if (!job) {
      throw Error('Could not query jobs')
    }

    const stage = f.random.arrayElement(job.workflow.stages || [])

    const type = f.random.arrayElement(['Qualified', 'Disqualified'] as ApplicationType[])

    const disqualificationInstance = {
      disqualification: {
        connect: { id: f.random.arrayElement(job.workflow.disqualifications || []).id },
      },
      createdBy: { connect: { id: users.random().id } },
    }

    applications.arr[i] = await attempt(db.mutation.createApplication, {
      data: {
        candidate: { connect: { id: candidates.random().id } },
        job: { connect: { id: job.id } },
        stage: { connect: { id: stage.id } },
        type,
        disqualification:
          type === 'Disqualified' ? { create: disqualificationInstance } : undefined,
      },
    })
  }
  console.log('Script confirms that seeding was a success 👍')
}

seed()
