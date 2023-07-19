import type { User } from '@prisma/client';
import request from 'supertest';
import { server } from '../../../application';

type SignUp = {
  email: User['email'];
  password: User['password'];
  firstName: User['firstName'];
  lastName: User['lastName'];
};

type SignIn = {
  email: User['email'];
  password: User['password'];
};

export const signUp = (payload: SignUp) => {
  return request(server).post('/v1/auth/sign-up').send(payload);
};

export const signIn = (payload: SignIn) => {
  return request(server).post('/v1/auth/sign-in').send(payload);
};
