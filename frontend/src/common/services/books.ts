import { Book } from '#/common/types/book';
import { instance } from './config';

export const createBook = async (book: Book) => {
  return instance.post<Book>('/books', book).then((response) => response.data);
};

export const getBooks = async (): Promise<Book[]> => {
  return instance.get<Book[]>('/books').then((response) => response.data);
};

export const updateBook = async (bookId: Book['id'], book: Book) => {
  return instance.patch<Book>(`/books/${bookId}`, book).then((response) => response.data);
};

export const deleteBook = async (bookId: Book['id']) => {
  return instance.delete<Book>(`/books/${bookId}`).then((response) => response.data);
};
