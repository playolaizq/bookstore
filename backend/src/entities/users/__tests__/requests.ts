import type { User } from '@prisma/client';
import request from 'supertest';
import { server } from '../../../application';

type CreateUser = {
  email: User['email'];
  firstName: User['firstName'];
  lastName: User['lastName'];
};

export const createUser = (payload: CreateUser) => {
  return request(server).post('/v1/users').send(payload);
};

export const getUser = (userId: string) => {
  return request(server).get(`/v1/users/${userId}`);
};
