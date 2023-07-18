import { instance } from './config';

type User = {
  email: string;
  firstName: string;
  lastName: string;
};

export const createUser = async (user: User) => {
  return instance.post('/users', user);
};

export const getUser = async (userId: string) => {
  return instance.get(`/users/${userId}`);
};
