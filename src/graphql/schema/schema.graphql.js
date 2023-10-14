import { createApplication } from "graphql-modules";

// Modules
import { BookModule } from "../../graphql/modules/book/book.module.graphql.js";
import { AuthorModule } from "../../graphql/modules/author/author.module.graphql.js";

// Application with modules
const application = createApplication({
  modules: [BookModule, AuthorModule],
});

// Schema
export default application.createSchemaForApollo();
