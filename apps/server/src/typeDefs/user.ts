import { gql } from 'apollo-server';

export const user = gql`
  type User {
    id: ID!
    email: String!
    name: String
  }
  type UserCredentials {
    token: String!
    user: User!
  }
  extend type Mutation {
    register(email: String!, password: String!, name: String): User!
    login(email: String!, password: String!): UserCredentials!
  }
`;
