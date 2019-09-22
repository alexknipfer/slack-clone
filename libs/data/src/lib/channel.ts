import { Document } from 'mongoose';

export interface IChannel extends Document {
  name: string;
  public: boolean;
  createdAt: Date;
  updatedAt: Date;
}
