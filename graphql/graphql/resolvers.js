const people = [
  {
    name: "Nicolas",
    age: 18,
    gender: "female",
  },
];

const resolvers = {
  Query: {
    people: () => people,
  },
};

export default resolvers;
