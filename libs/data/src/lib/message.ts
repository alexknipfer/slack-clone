import { Document, Types } from 'mongoose';

export interface IMessage extends Document {
  _id: Types.ObjectId;
  id: string;
  text: string;
  userId: string;
  channelId: string;
  updatedAt: Date;
  createdAt: Date;
}
