// book.resolver.graphql
export const BookResolver = {
  Query: {
    book(root, { id }) {
      return {
        _id: id,
        title: "To The Lighthouse",
        author: "Virginia Woolf",
        summary: "Book summary",
        isbn: "12345678EDB",
        // genre: ["ficton"],
        url: "http://lighouse.com",
      };
    },
  },
  Book: {
    id(book) {
      return book._id;
    },
    title(book) {
      return book.title;
    },
    author(book) {
      return book.author;
    },
    summary(book) {
      return book.summary;
    },
    isbn(book) {
      return book.isbn;
    },
    // genre(book) {
    //   return book.genre;
    // },
    url(book) {
      return book.url;
    },
  },
};
