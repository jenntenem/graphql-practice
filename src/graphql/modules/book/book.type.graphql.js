import { gql } from 'graphql-modules';

export const Book = gql`
  type Query {
      book(id: ID!): Book
  }
  type Book {
    id: String
    title: String
    author: String
    summary: String
    isbn: String
    # genre: [Genre]
    url: String
  }
`;