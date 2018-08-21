import { rule, shield, allow, deny } from 'graphql-shield'

export default shield({
  Query: {
    // Workspace
    workspace: allow,
    workspaces: allow,

    // User
    user: deny,
    users: allow,

    // Offer
    offer: allow,
    offers: allow,

    // Stage
    stage: allow,
    stages: allow,

    // Application
    application: allow,
    applications: allow,

    // Candidate
    candidate: allow,
    candidates: allow,

    // Comment
    comment: allow,
    comments: allow,

    // Task
    task: allow,
    tasks: allow,
  },
  Mutation: {
    // Workspace
    createWorkspace: allow,
    updateWorkspace: allow,
    deleteWorkspace: allow,

    // User
    createUser: allow,
    updateUser: allow,
    deleteUser: allow,

    // Offer
    createOffer: allow,
    updateOffer: allow,
    deleteOffer: allow,

    // Stage
    createStage: allow,
    updateStage: allow,
    deleteStage: allow,

    // Application
    createApplication: allow,
    updateApplication: allow,
    deleteApplication: allow,

    // Candidate
    createCandidate: allow,
    updateCandidate: allow,
    deleteCandidate: allow,

    // Comment
    createComment: allow,
    updateComment: allow,
    deleteComment: allow,

    // Task
    createTask: allow,
    updateTask: allow,
    deleteTask: allow,
  },
})
