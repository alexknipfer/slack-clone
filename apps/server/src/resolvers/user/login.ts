import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { AuthenticationError } from 'apollo-server';

import { User } from '../../model/user';
import { environment } from '../../environments/environment';

interface LoginArgs {
  email: string;
  password: string;
}

export const login = async (obj: {}, args: LoginArgs) => {
  const foundUser = await User.findOne({ email: args.email });

  if (!foundUser) {
    throw new AuthenticationError(
      `Couldn't find user with email ${args.email}`
    );
  }

  const passwordsMatch = bcrypt.compareSync(args.password, foundUser.password);

  if (!passwordsMatch) {
    throw new AuthenticationError('Invalid password');
  }

  const token = jwt.sign(
    { id: foundUser.id, username: foundUser.email },
    environment.jwtSigningKey,
    { expiresIn: '30d' }
  );

  return {
    user: foundUser,
    token
  };
};
