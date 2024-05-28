import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      title
      libras
      description
      price
      descont
      priceDescont
      photo
    }
  }
`;
