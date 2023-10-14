
// book.module.graphql.ts
import{ Book } from './book.type.graphql.js';
import { BookResolver } from './book.resolver.graphql.js';
import { createModule } from 'graphql-modules';

import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const BookModule = createModule({
  id: 'book-module',
  dirname: __dirname,
  typeDefs: [Book],
  resolvers: [BookResolver]
});


