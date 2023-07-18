import { User } from '#/common/types/user';
import { instance } from './config';

type SignInBody = {
  email: string;
  password: string;
};

type SignUpBody = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

export const signIn = async (body: SignInBody) => {
  return instance.post<User>('/auth/sign-in', body).then((response) => response.data);
};

export const signUp = async (body: SignUpBody) => {
  return instance.post<User>('/auth/sign-up', body).then((response) => response.data);
};
