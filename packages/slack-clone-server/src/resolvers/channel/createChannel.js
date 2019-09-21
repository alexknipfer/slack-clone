import { Channel } from '../../model/channel';

export const createChannel = (obj, args) => {
  return Channel.create({
    name: args.name,
    public: args.public
  });
};
