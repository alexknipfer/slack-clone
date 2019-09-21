import bcrypt from 'bcrypt';
import { AuthenticationError } from 'apollo-server';

import { User } from '../../model/user';

export const register = async (obj, args) => {
  const hash = bcrypt.hashSync(args.password, 10);

  const createdUser = await User.updateOne(
    { email: args.email },
    { email: args.email, name: args.name, password: hash },
    { upsert: true }
  );

  if (!createdUser || !createdUser.ok) {
    throw new AuthenticationError(
      `Failed to create user with email ${args.email}`
    );
  }

  const udpatedUser = await User.findOne({ email: args.email });

  if (!udpatedUser) {
    throw new AuthenticationError(
      `Failed to find user with email ${args.email}`
    );
  }

  return udpatedUser;
};
