import type { Book } from '@prisma/client';
import { client } from '../../application/database/client';

export const create = async (data: Book) => {
  const { title, author, description, category, createdBy } = data;

  return client.book.create({ data: { title, author, description, category, createdBy } });
};

export const findAll = async ({ createdBy }: { createdBy?: string }) => {
  return client.book.findMany({
    where: {
      createdBy,
    },
  });
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
