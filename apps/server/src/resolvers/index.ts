import { register } from './user/register';
import { login } from './user/login';
import { createChannelMessage } from './channel/createChannelMessage';
import { createChannel } from './channel/createChannel';

export const rootResolver = {
  Mutation: {
    register,
    login,
    createChannelMessage,
    createChannel
  }
};
