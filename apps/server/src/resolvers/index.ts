import { register } from './user/register';
import { login } from './user/login';
import { getUser } from './user/getUser';
import { createChannelMessage } from './channel/createChannelMessage';
import { createChannel } from './channel/createChannel';

export const rootResolver = {
  Mutation: {
    register,
    login,
    createChannelMessage,
    createChannel
  },
  Query: {
    getUser
  }
};
