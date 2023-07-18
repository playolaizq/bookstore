import { createContext, ReactNode, useState } from 'react';
import { User } from '#/common/types/user';

export type UserContextType = {
  user: User;
  setUser: (user: User) => void;
};

const DEFAULT_USER = {
  id: '',
  email: '',
  firstName: '',
  lastName: '',
};

export const UserContext = createContext<UserContextType>({
  user: DEFAULT_USER,
  setUser: () => {
    /**/
  },
});

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserContextType['user']>(DEFAULT_USER);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
