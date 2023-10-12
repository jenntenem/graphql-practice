import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const resolvers = {
  Query: {
    hello: () => "Hello world!",
    greet: (root, { name }) => `Hello ${name}!`,

    personCount: () => {
      const url = process.env.servicePersons;
      return axios.get(url).then((response) => response.data.length);
    },
    allPersons: () => {
      const url = process.env.servicePersons;
      return axios.get(url).then((response) => response.data);
    },
    findPerson: async (root, { name }) => {
      const url = process.env.servicePersons;
      const persons = await axios.get(url).then((response) => response.data);
      return persons.find((person) => person.name === name);
    },
  },

  Person: {
    address: ({ street, city }) => ({ street, city }),
    address_string: ({ street, city }) => `${street}, ${city}`,
  },
};

export default resolvers;
