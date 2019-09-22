import { Message } from '../../model/message';

interface CreateMessageArgs {
  text: string;
  fromUserId: string;
  fromChannelId: string;
}

export const createChannelMessage = async (
  obj: any,
  args: CreateMessageArgs
) => {
  return Message.create({
    text: args.text,
    userId: args.fromUserId,
    channelId: args.fromChannelId
  });
};
