import { PrismaClient } from '@prisma/client';
import type { User } from '@prisma/client';

const prisma = new PrismaClient();

export const create = async (data: User) => {
  return prisma.user.create({ data });
};

export const findAll = async () => {
  return prisma.user.findMany();
};

export const findOne = async (id: string) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
};
