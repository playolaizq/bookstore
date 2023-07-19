import { User } from '#/common/types/user';
import { instance } from './config';

export const getUser = async (userId: string) => {
  return instance.get<User>(`/users/${userId}`).then((response) => response.data);
};
