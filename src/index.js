import express from "express";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";

// Process env
dotenv.config();

// GraphQL-Server Schema
import schema from "./schema/schema.js";
import schemaPractice from "./practice/schema.js";

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
