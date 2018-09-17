

const db: Prisma = new Prisma({
  secret: process.env.PRISMA_SECRET,
  endpoint: process.env.PRISMA_ENDPOINT,
});

const seedConfig = {
  numberOfUsers: 10,
  numberOfJobs: 5,
  numberCandidates: 100,
  numberOfApplications: 200,
};

const setup = async () => {
  // Add Workspace

  // Add users

  // Add jobs

  // Add candidates

  // Add applications


}

setup();
