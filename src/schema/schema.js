import { makeExecutableSchema } from "graphql-tools";

// Module TypeDefs and Resolvers
import { typeDefs, resolvers } from "./resolvers/index.resolver.js";

const RootDefs = `
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;

// Schema TypeDefs
export default makeExecutableSchema({
  typeDefs: [RootDefs, ...typeDefs],
  resolvers,
});
