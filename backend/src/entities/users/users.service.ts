import { Prisma } from '@prisma/client';
import type { User } from '@prisma/client';
import { client } from '../../application/database/client';
import { PrismaErrors } from '../../common/constants/error';
import { Error } from './constants/error';

export const create = async (data: User) => {
  try {
    const { email, password, firstName, lastName } = data;
    const createdUser = await client.user.create({
      data: { email, password, firstName, lastName },
    });
    return createdUser;
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === PrismaErrors.UNIQUE_CONSTRAINT) {
        return { error: Error.CONFLICT };
      }
    }
    throw err;
  }
};

export const findOne = async (id: string) => {
  return client.user.findUnique({
    where: {
      id,
    },
  });
};

export const findByEmail = async (email: string) => {
  return client.user.findUnique({
    where: {
      email,
    },
  });
};
