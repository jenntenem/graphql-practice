export const AuthorResolver = {
  Query: {
    author(root, { id }) {
      return { _id: id, name: "Virginia Woolf" };
    },
    allAuthors() {
      return [
        { _id: "1", name: "Virginia Woolf" },
        { _id: "2", name: "J. K. Rowling" },
      ];
    },
  },
  Author: {
    id: (book) => book._id,
  },
};
