import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
import { v1 } from "uuid";

const resolvers = {
  Query: {
    hello: () => "Hello world!",
    greet: (root, { name }) => `Hello ${name}!`,

    personCount: () => {
      const url = process.env.servicePersons;
      return axios.get(url).then((response) => response.data.length);
    },
    allPersons: async (root, { active }) => {
      const url = process.env.servicePersons;
      const persons = await axios.get(url).then((response) => response.data);
      if (!active) return persons;
      return persons.filter((person) =>
        active === "YES" ? person.active : !person.active
      );
    },
    findPerson: async (root, { name }) => {
      const url = process.env.servicePersons;
      const persons = await axios.get(url).then((response) => response.data);
      return persons.find((person) => person.name === name);
    },

    addPersonx: async (root, args) => {
      const url = process.env.servicePersons;
      const person = { ...args, id: v1() };
      await axios.post(url, person);
      return person;
    },
  },

  Mutation: {
    addPerson: async (root, args) => {
      const url = process.env.servicePersons;
      const person = { ...args, id: v1() };
      await axios.post(url, person);
      return person;
    },
  },

  Person: {
    address: ({ street, city }) => ({ street, city }),
    address_string: ({ street, city }) => `${street}, ${city}`,
  },
};

export default resolvers;
