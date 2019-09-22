import { Channel } from '../../model/channel';

interface CreateChannelArgs {
  name: string;
  public: boolean;
}

export const createChannel = (obj: {}, args: CreateChannelArgs) => {
  return Channel.create({
    name: args.name,
    public: args.public
  });
};
