import { Schema, model, Model, Document } from 'mongoose';

export interface IChannel extends Document {
  name: string;
  public: boolean;
  createdAt: Date;
  updatedAt: Date;
}

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
