import { makeExecutableSchema } from "graphql-tools";
import { gql } from "apollo-server";
import resolvers from "./resolvers.js";
// A GraphQL schema is a collection of type definitions (hence "typeDefs")
const typeDefs = gql`
  enum YesNo {
    YES
    NO
  }

  type Person {
    name: String!
    phone: String
    street: String!
    city: String
    address: Address
    address_string: String
    id: ID
  }

  type Address {
    street: String!
    city: String!
  }

  type Query {
    hello: String
    greet(name: String!): String
    personCount: Int!
    allPersons(active: YesNo): [Person!]!
    findPerson(name: String!): Person
    addPersonx(
      name: String!
      phone: String
      street: String!
      city: String!
    ): Person
  }

  type Mutation {
    addPerson(
      name: String!
      phone: String
      street: String!
      city: String!
    ): Person
    updatePerson(
      name: String!
      phone: String
      street: String
      city: String
    ): Person
  }
`;

export default makeExecutableSchema({
  typeDefs, // Type definitions to be used by GraphQL
  resolvers, // Functions or values to be used by GraphQL
});
