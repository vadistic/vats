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
  Source,
  Tag,
  Task,
  User,
  Workflow,
} from '../../src/generated/prisma-binding'
import { db } from './setup'
import {
  attempt,
  fakeEmoji,
  fakeSocialLink,
  halfTimes,
  List,
  randomConnectMany,
  randomFn,
} from './utils'
import { workflowsData } from './workflows'

// Because generated bindings are not nominally compatible with original class

const config = {
  USERS_NUMBER: 10,
  LOCATIONS_NUMBER: 5,
  JOBS_NUMBER: 10,
  TAGS_NUMBER: 50,
  SOURCES_NUMBER: 50,
  CANDIDATES_NUMBER: 100,
  COMMENTS_NUMBER: 300,
  APPLICATIONS_NUMBER: 200,
  TASKS_NUMBER: 50,
}

const seed = async () => {
  // seed workspace
  console.log('Seeding workspace')
  const workspace = await db.mutation.createWorkspace({
    data: {
      name: 'Vadistic Recruitment',
    },
  })

  console.log('Seeding users')
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

        avatar: halfTimes({ create: avatarFile }),
        position: f.name.jobTitle(),
      },
    })
  }

  // seed my account
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

  console.log('Seeding locations')
  const locations = new List<Location>()
  for (let i = 0; i < config.JOBS_NUMBER; i++) {
    locations.arr[i] = await attempt(db.mutation.createLocation, {
      data: {
        city: f.address.city(),
        country: f.address.country(),
        region: halfTimes(f.address.state()),
        zip: halfTimes(f.address.zipCode()),
      },
    })
  }

  console.log('Seeding workflows')
  const workflows = new List<Workflow>()
  workflows.arr[0] = await db.mutation.createWorkflow({
    data: workflowsData.default,
  })

  workflows.arr[1] = await db.mutation.createWorkflow({
    data: workflowsData.custom,
  })

  console.log('Seeding jobs')
  const jobs = new List<Job>()
  for (let i = 0; i < config.JOBS_NUMBER; i++) {
    jobs.arr[i] = await attempt(db.mutation.createJob, {
      data: {
        name: f.name.jobDescriptor() + ' ' + f.name.jobTitle(),
        description: f.lorem.paragraphs(f.random.number(4)),
        requirements: f.lorem.paragraphs(f.random.number(4)),
        department: f.name.jobArea(),
        type: f.random.arrayElement(['DRAFT', 'PUBLISHED', 'ARCHIVED'] as JobType[]),
        locations: { connect: randomConnectMany(locations, 3) },
        workspace: { connect: { id: workspace.id } },
        workflow: { connect: { id: workflows.random().id } },
      },
    })
  }

  console.log('Seeding tags')
  const tags = new List<Tag>()
  for (let i = 0; i < config.TAGS_NUMBER; i++) {
    tags.arr[i] = await attempt(db.mutation.createTag, {
      data: {
        label: f.random.word().toLocaleLowerCase(),
      },
    })
  }

  console.log('Seeding sources')
  const sources = new List<Source>()
  for (let i = 0; i < config.SOURCES_NUMBER; i++) {
    sources.arr[i] = await attempt(db.mutation.createSource, {
      data: {
        label: f.random.word().toLocaleLowerCase(),
        description: halfTimes(f.random.words(f.random.number(10))),
      },
    })
  }

  // seed candidates
  console.log('Seeding candidates')
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
        sources: { connect: randomConnectMany(sources, 2) },
        emails: { set: emails },
        phones: { set: phones },
        firstName,
        lastName,
        links: { set: links },
        avatar: halfTimes({ create: avatarFile }),
        company: halfTimes(f.company.companyName()),
        position: halfTimes(f.name.jobTitle()),
        headline: halfTimes(f.name.jobDescriptor()),
        resumesFile: hasResume ? { create: resumeFile } : undefined,
        coverLettersString: hasResume ? { set: coverLetter } : undefined,
      },
    })
  }

  console.log('Seeding comments')
  // seed comments
  const comments = new List<Comment>()
  const getComment = () =>
    R.times(
      () => randomFn(fakeEmoji, f.lorem.sentence)(),
      f.random.number({ min: 1, max: 8 }),
    ).join(' ')
  for (let i = 0; i < config.COMMENTS_NUMBER / 2; i++) {
    comments.arr[i] = await attempt(db.mutation.createComment, {
      data: {
        content: getComment(),
        createdBy: { connect: { id: users.random().id } },
      },
    })
  }
  // seed nested comments
  for (let i = 0; i < config.COMMENTS_NUMBER / 2; i++) {
    comments.arr[i] = await attempt(db.mutation.createComment, {
      data: {
        content: getComment(),
        parent: { connect: { id: comments.random().id } },
        createdBy: { connect: { id: users.random().id } },
      },
    })
  }

  console.log('Seeding tasks')
  const getTaskTitle = () => f.lorem.sentence() + f.random.boolean && ' ' + fakeEmoji()
  const getTaskDescription = () =>
    f.random.boolean()
      ? R.times(() => randomFn(fakeEmoji, f.lorem.sentence)(), f.random.number(4)).join(' ')
      : undefined
  const tasks = new List<Task>()
  for (let i = 0; i < config.TASKS_NUMBER; i++) {
    tasks.arr[i] = await attempt(db.mutation.createTask, {
      data: {
        candidate: { connect: { id: candidates.random().id } },
        title: halfTimes(getTaskTitle()),
        description: halfTimes(getTaskDescription()),
        owners: { connect: randomConnectMany(users, 3) },
        dueAt: f.random.boolean && f.date.future(0),
      },
    })
  }

  console.log('Seeding applications')
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

    const type = f.random.arrayElement(['QUALIFIED', 'DISQUALIFIED'] as ApplicationType[])

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
          type === 'DISQUALIFIED' ? { create: disqualificationInstance } : undefined,
      },
    })
  }
  console.log('Script confirms that seeding was a success 👍')
}

seed()
