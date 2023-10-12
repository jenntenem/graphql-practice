import express from "express";
import dotenv from "dotenv";
dotenv.config();

import schema from "./schema.js";
import { graphqlHTTP } from "express-graphql";

const app = express();
const port = process.env.indexPort ?? 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

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
