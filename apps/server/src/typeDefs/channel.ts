import { gql } from 'apollo-server';

export const channel = gql`
  type Channel {
    id: ID!
    name: String!
    public: Boolean!
    createdAt: String!
    updatedAt: String!
  }
  extend type Mutation {
    createChannel(name: String!, public: Boolean!): Channel!
  }
`;
