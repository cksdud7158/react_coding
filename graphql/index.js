import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
});

server.start(() => console.log("Graphl Server Running"));

// for Schema -> 어떤 정보를 주고 받을것인가
