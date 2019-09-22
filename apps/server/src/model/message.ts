import { Schema, model, Model, Types, Document } from 'mongoose';

export interface IMessage extends Document {
  _id: Types.ObjectId;
  id: string;
  text: string;
  userId: string;
  channelId: string;
  updatedAt: Date;
  createdAt: Date;
}

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
