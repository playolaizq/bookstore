import type { Book } from '@prisma/client';
import { client } from '../../application/database/client';

export const create = async (data: Book) => {
  return client.book.create({ data });
};

export const findAll = async () => {
  return client.book.findMany();
};

export const findOne = async (id: string) => {
  return client.book.findUnique({
    where: {
      id,
    },
  });
};

export const updateOne = async (id: string, data: Book) => {
  return client.book.update({
    where: {
      id,
    },
    data,
  });
};

export const deleteOne = async (id: string) => {
  return client.book.delete({
    where: {
      id,
    },
  });
};
