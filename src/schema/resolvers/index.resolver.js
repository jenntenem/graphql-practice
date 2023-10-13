import path from "path";
import url from "url";
import { fileURLToPath } from "url";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";

// Module TypeDefs and Resolvers
// Load all typeDefs and resolvers from resolvers folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let arraysValues = await loadFilesSync(
  path.join(__dirname, "./**/*.resolver.js"),
  {
    ignoreIndex: true,
    requireMethod: async (path) =>
      await import(url.pathToFileURL(path)).then((module) => module.default),
  }
);
arraysValues = await Promise.all(arraysValues);

// Export TypeDefs and Resolvers
export const typeDefs = mergeTypeDefs(
  arraysValues.map((value) => value.typeDefs)
);
export const resolvers = mergeResolvers(
  arraysValues.map((value) => value.resolvers)
);
