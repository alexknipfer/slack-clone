import { Schema, model } from 'mongoose';

const ChannelSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  public: Boolean,
  createdAt: {
    type: Date,
    default: () => new Date()
  },
  updatedAt: {
    type: Date,
    default: () => new Date()
  }
});

ChannelSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

ChannelSchema.pre('update', function(next) {
  this.updatedAt = new Date();
  next();
});

ChannelSchema.set('toJSON', {
  transform(doc) {
    return {
      id: doc._id.toString(),
      name: doc.name,
      public: doc.public,
      createdAt: doc.createdAt.toISOString(),
      updatedAt: doc.updatedAt.toISOString()
    };
  }
});

export const Channel = model('Channel', ChannelSchema);
