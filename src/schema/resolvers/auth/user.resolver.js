import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    username: String!
    password: String!
    email: String!
    id: ID
  }

  extend type Query {
    allUsers: [User!]!
  }
`;

const resolvers = {
  Query: {
    allUsers: () => {
      return [];
    },
  },
};

export default { typeDefs, resolvers };
