module.exports = {
  schemas: {
    app: {
      schema: 'src/generated/schema.json',
      endpoint: {
        url: `${process.env.PRISMA_ENDPOINT}/${process.env.PRISMA_SERVICE}/${
          process.env.PRISMA_STAGE
        }`,
        headers: {
          Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
        },
      },
    },
  },
}
