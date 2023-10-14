// author.module.graphql.ts
import { Author } from "./author.type.graphql.js";
import { AuthorResolver } from "./author.resolver.graphql.js";
import { createModule } from "graphql-modules";

import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const AuthorModule = createModule({
  id: "author-module",
  dirname: __dirname,
  typeDefs: [Author],
  resolvers: [AuthorResolver],
});
