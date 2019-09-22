import { Schema, model, Model } from 'mongoose';
import { IChannel } from '@slack-clone/data';

const ChannelSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    public: Boolean
  },
  { timestamps: true }
);

ChannelSchema.set('toJSON', {
  transform(doc: IChannel) {
    return {
      id: doc._id.toString(),
      name: doc.name,
      public: doc.public,
      createdAt: doc.createdAt.toISOString(),
      updatedAt: doc.updatedAt.toISOString()
    };
  }
});

export const Channel: Model<IChannel> = model<IChannel>(
  'Channel',
  ChannelSchema
);
