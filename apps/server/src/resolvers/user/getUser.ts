import jwt from 'jsonwebtoken';

import { User } from '../../model/user';
import { environment } from '../../environments/environment';

interface GetUserArgs {
  token: string;
}

interface UserData {
  id: string;
  username: string;
}

export const getUser = async (obj: {}, args: GetUserArgs) => {
  const decodedToken = jwt.verify(args.token, environment.jwtSigningKey, {
    algorithms: ['HS256'],
    issuer: 'slack-clone-server'
  }) as UserData;

  const foundUser = await User.findById(decodedToken.id);

  if (!foundUser) {
    throw new Error('Failed to find user.');
  }

  return foundUser.toJSON();
};
