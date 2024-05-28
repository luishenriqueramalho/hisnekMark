import { gql } from "apollo-server";

export const typeDefs = gql`
  type Product {
    id: ID!
    title: String!
    libras: String!
    description: String!
    price: Float!
    descont: Boolean!
    priceDescont: Float!
    photo: String!
  }

  type Query {
    products: [Product]
  }
`;
