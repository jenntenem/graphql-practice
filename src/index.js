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
