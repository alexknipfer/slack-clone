import { Schema, model } from 'mongoose';

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
  transform(doc) {
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

export const Message = model('Message', MessageSchema);
