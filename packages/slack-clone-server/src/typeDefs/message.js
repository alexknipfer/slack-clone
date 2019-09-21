import { gql } from 'apollo-server';

export const message = gql`
  type Message {
    id: ID!
    text: String!
    userId: String!
    channelId: String!
    createdAt: String!
    updatedAt: String!
  }

  extend type Mutation {
    createChannelMessage(
      text: String!
      fromUserId: String!
      fromChannelId: String!
    ): Message!
  }
`;
