import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://192.168.100.144:4000", // Substitua pelo URL do seu servidor GraphQL, se diferente
  cache: new InMemoryCache(),
});

export default client;
