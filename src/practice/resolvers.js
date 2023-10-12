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
    updatePerson: async (root, args) => {
      if (!args.name) return null; // name is required - Validate that name is not empty

      const url = process.env.servicePersons;
      let person = await axios
        .get(url)
        .then((response) => response.data)
        .then((response) =>
          response.find((person) => person.name === args.name)
        );
      if (!person) return null;
      
      return await axios
        .put(`${url}/${person.id}`, {
          ...person,
          ...args,
        })
        .then((response) => response.data);
    },
  },

  Person: {
    address: ({ street, city }) => ({ street, city }),
    address_string: ({ street, city }) => `${street}, ${city}`,
  },
};

export default resolvers;
