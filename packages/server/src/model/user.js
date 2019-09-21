import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: String,
  password: String,
  createdAt: {
    type: Date,
    default: () => new Date()
  },
  updatedAt: {
    type: Date,
    default: () => new Date()
  }
});

const setUpdatedAtDate = (user, next) => {
  user.updatedAt = new Date();
  next();
};

UserSchema.pre('save', setUpdatedAtDate);
UserSchema.pre('update', setUpdatedAtDate);

UserSchema.set('toJSON', {
  transform(doc) {
    return {
      id: doc._id.toString(),
      email: doc.email,
      name: doc.name,
      createdAt: doc.createdAt.toISOString(),
      updatedAt: doc.updatedAt.toISOString()
    };
  }
});

export const User = model('User', UserSchema);
