import { User } from '#/common/types/user';
import { instance } from './config';

type CreateUserBody = {
  email: string;
  firstName: string;
  lastName: string;
};

export const createUser = async (body: CreateUserBody) => {
  return instance.post<User>('/users', body).then((response) => response.data);
};

export const getUser = async (userId: string) => {
  return instance.get<User>(`/users/${userId}`);
};
