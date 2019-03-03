import { PrismaClient } from '@vats/prisma'
import { ApolloServer, gql } from 'apollo-server'
import { importSchema } from 'graphql-import'
import path from 'path'

const PRISMA_URL = `${process.env.PRISMA_ENDPOINT}/${process.env.PRISMA_SERVICE}/${
  process.env.PRISMA_STAGE
}`

const prismaClient = new PrismaClient({
  endpoint: PRISMA_URL,
  secret: process.env.PRISMA_SECRET,
})

const books = [
  { id: 1, title: 'The Trials of Brother Jero', rating: 8, authorId: 1 },
  { id: 2, title: 'Half of a Yellow Sun', rating: 9, authorId: 3 },
  { id: 3, title: 'Americanah', rating: 9, authorId: 3 },
  { id: 4, title: 'King Baabu', rating: 9, authorId: 1 },
  { id: 5, title: 'Children of Blood and Bone', rating: 8, authorId: 2 },
]

const authors = [
  { id: 1, firstName: 'Wole', lastName: 'Soyinka' },
  { id: 2, firstName: 'Tomi', lastName: 'Adeyemi' },
  { id: 3, firstName: 'Chimamanda', lastName: 'Adichie' },
]

let bookId = 5

interface Resolvers {
  [operation: string]: {
    [field: string]: (root: any, args: any) => any
  }
}

const resolvers: Resolvers = {
  Query: {
    books: () => books,
    book: (_, { id }) => books.find(book => book.id === id),
    author: (_, { id }) => authors.find(author => author.id === id),
    tags: (_, { id }) => prismaClient.tags().then(tags => tags.map(tag => tag.label)),
  },
  Mutation: {
    addBook: (_, { title, rating, authorId }) => {
      bookId++

      const newBook = {
        id: bookId,
        title,
        rating,
        authorId,
      }

      books.push(newBook)
      return newBook
    },
  },
  Author: {
    books: author => books.filter(book => book.authorId === author.id),
  },
  Book: {
    author: book => authors.find(author => author.id === book.authorId),
  },
}

const typeDefs = gql(importSchema(path.join(__dirname, '/schema.graphql')))

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  debug: process.env.NODE_ENV === 'development',
})

server.listen({ port: process.env.APOLLO_PORT }).then(({ url }) => {
  console.log(`🚀 (apollo) server ready at ${url}`)
})
