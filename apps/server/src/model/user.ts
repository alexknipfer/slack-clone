import { Schema, model, Model } from 'mongoose';
import { IUser } from '@slack-clone/data';

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    name: String,
    password: String
  },
  { timestamps: true }
);

UserSchema.set('toJSON', {
  transform(doc: IUser) {
    return {
      id: doc._id.toString(),
      email: doc.email,
      name: doc.name,
      createdAt: doc.createdAt.toISOString(),
      updatedAt: doc.updatedAt.toISOString()
    };
  }
});

export const User: Model<IUser> = model<IUser>('User', UserSchema);
