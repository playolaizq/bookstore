import { getLocalStorageItem, setLocalStorageItem } from '#/common/utils/local-storage';
import { Book } from '#/common/types/book';

export const createBook = (book: Book) => {
  const books = getLocalStorageItem<Book[]>('books', []);
  const newBook = { ...book, id: crypto.randomUUID() };
  const newBooks = [...books, newBook];

  setLocalStorageItem('books', newBooks);

  return newBook;
};

export const getBooks = async (): Promise<Book[]> => {
  return new Promise((resolve) => {
    resolve(getLocalStorageItem<Book[]>('books', []));
  });
};

export const getBook = (bookId: Book['id']) => {
  const books = getLocalStorageItem<Book[]>('books', []);
  return books.find((book) => book.id == bookId);
};

export const updateBook = (bookId: Book['id'], updatedBook: Book) => {
  const books = getLocalStorageItem<Book[]>('books', []);
  const updatedBooks = books.map((book) => {
    if (book.id == bookId) {
      return { ...book, ...updatedBook };
    }
    return book;
  });

  setLocalStorageItem('books', updatedBooks);

  return updatedBook;
};

export const deleteBook = () => {
  // TODO
};
