import { createContext, ReactNode, useState, useEffect } from 'react';
import { User } from '#/common/types/user';
import { instance } from '#/common/services/config';
import { getUser } from '#/common/services/users';
import { getLocalStorageItem, setLocalStorageItem } from '#/common/utils/local-storage';

export type UserContextType = {
  user: User;
  updateUser: (user: User) => void;
  removeUser: () => void;
  initialLoading: boolean;
};

const DEFAULT_USER = {
  id: '',
  email: '',
  firstName: '',
  lastName: '',
};

export const UserContext = createContext<UserContextType>({
  user: DEFAULT_USER,
  updateUser: () => {
    /**/
  },
  removeUser: () => {
    /**/
  },
  initialLoading: true,
});

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserContextType['user']>(DEFAULT_USER);
  const [initialLoading, setInitialLoading] = useState(true);

  const updateUser = (user: User) => {
    instance.defaults.headers['X-Authenticated-Userid'] = user.id;
    setLocalStorageItem('bookstore-userid', user.id);
    setUser(user);
  };

  const removeUser = () => {
    instance.defaults.headers['X-Authenticated-Userid'] = null;
    setLocalStorageItem('bookstore-userid', null);
    setUser(DEFAULT_USER);
  };

  useEffect(() => {
    const userId = getLocalStorageItem('bookstore-userid', null);
    if (userId) {
      getUser(userId)
        .then((userData) => updateUser(userData))
        .finally(() => setInitialLoading(false));
    } else {
      setInitialLoading(false);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, updateUser, removeUser, initialLoading }}>
      {children}
    </UserContext.Provider>
  );
};
