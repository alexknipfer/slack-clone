import { createContext } from 'react';

import { User } from '../../models/User';

interface UserContextProps {
  user: User;
}

export const UserContext = createContext<UserContextProps>({
  user: {
    id: '',
    name: '',
    email: ''
  }
});
