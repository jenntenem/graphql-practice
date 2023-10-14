import { gql } from 'graphql-modules';

export const Author = gql`
  type Query {
      author(id: ID!): Author
      allAuthors: [Author!]!
  }
  type Author {
    id: String
    name: String
    # books: [Book]
  }
`;