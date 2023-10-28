import express from "express";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";

// Process env
dotenv.config();

// GraphQL-Server Schema
import schema from "./schema/schema.js";
import schemaPractice from "./practice/schema.js";
import schemaModules from "./graphql/schema/schema.graphql.js";
import schemaPizza from "./practice/pizza.js";

const app = express();
const port = process.env.indexPort ?? 3000;

// GraphQL Server
app.use(
  "/graphql-practice",
  graphqlHTTP({
    graphiql: true,
    schema: schemaPractice,
  })
);

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);

app.use(
  "/graphql-modules",
  graphqlHTTP({
    graphiql: true,
    schema: schemaModules,
  })
);

app.use(
  "/graphql-pizza",
  graphqlHTTP({
    graphiql: true,
    schema: schemaPizza,
  })
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/*
API-Wide authorization

const server = new ApolloServer({
 typeDefs,
 resolvers,
 context: ({ req }) => {
 // get the user token from the headers
 const token = req.headers.authorization || '';

 // try to retrieve a user with the token
 // this function could decode the token and look up the user in the actual database
 const user = getUser(token);

 // optionally block the user
 // you could also check user roles/permissions here
 if (!user) throw new AuthenticationError('you must be logged in');

 // add the user object to the context
 return { user };
},
*/