import { Message } from '../../model/message';

export const createChannelMessage = async (obj, args) => {
  return Message.create({
    text: args.text,
    userId: args.fromUserId,
    channelId: args.fromChannelId
  });
};
