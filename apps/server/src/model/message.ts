import { Schema, model, Model } from 'mongoose';
import { IMessage } from '@slack-clone/data';

const MessageSchema = new Schema(
  {
    text: {
      type: String,
      required: true
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    channelId: {
      type: Schema.Types.ObjectId,
      ref: 'Channel'
    }
  },
  { timestamps: true }
);

MessageSchema.set('toJSON', {
  transform(doc: IMessage) {
    return {
      id: doc._id.toString(),
      text: doc.text,
      userId: doc.userId,
      channelId: doc.channelId,
      createdAt: doc.createdAt.toISOString(),
      updatedAt: doc.updatedAt.toISOString()
    };
  }
});

export const Message: Model<IMessage> = model<IMessage>(
  'Message',
  MessageSchema
);
