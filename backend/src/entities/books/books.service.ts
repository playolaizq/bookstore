import { PrismaClient } from '@prisma/client';
import type { Book } from '@prisma/client';

const prisma = new PrismaClient();

export const create = async (data: Book) => {
  return prisma.book.create({ data });
};

export const findAll = async () => {
  return prisma.book.findMany();
};

export const findOne = async (id: string) => {
  return prisma.book.findUnique({
    where: {
      id,
    },
  });
};

export const updateOne = async (id: string, data: Book) => {
  return prisma.book.update({
    where: {
      id,
    },
    data,
  });
};

export const deleteOne = async (id: string) => {
  return prisma.book.delete({
    where: {
      id,
    },
  });
};
