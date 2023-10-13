import { gql } from "apollo-server";
import { makeExecutableSchema } from "graphql-tools";

// Module TypeDefs and Resolvers
import { typeDefs, resolvers } from "./resolvers/index.resolver.js";

// Root TypeDefs and Mutation
const RootDefs = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;

// Schema TypeDefs
export default makeExecutableSchema({
  typeDefs: [RootDefs, typeDefs],
  resolvers,
});
