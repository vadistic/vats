import { ApolloServer, gql } from 'apollo-server'

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

const typeDefs = gql`
  type Author {
    id: Int!
    firstName: String!
    lastName: String!
    books: [Book]! # the list of books by this author
  }
  type Book {
    id: Int!
    title: String!
    rating: Int!
    author: Author!
  }
  # the schema allows the following query
  type Query {
    books: [Book!]!
    book(id: Int!): Book!
    author(id: Int!): Author!
  }
  # this schema allows the following mutation
  type Mutation {
    addBook(title: String!, rating: Int!, authorId: Int!): Book!
  }
`

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

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
