// Module TypeDefs and Resolvers
import user from "./auth/user.resolver.js";

// Type definitions
export const typeDefs = [ 
  // Array of type definitions
  user.typeDefs,
];

// Resolvers
export const resolvers = [
  // Array of resolvers
  user.resolvers,
];
