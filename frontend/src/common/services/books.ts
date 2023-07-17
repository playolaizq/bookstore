import { getLocalStorageItem, setLocalStorageItem } from '#/common/utils/local-storage';
import { Book } from '#/common/types/book';

// TODO: Create book in the database async.
export const createBook = (book: Book) => {
  const books = getLocalStorageItem<Book[]>('books', []);
  const newBook = { ...book, id: crypto.randomUUID() };
  const newBooks = [...books, newBook];

  setLocalStorageItem('books', newBooks);

  return newBook;
};

// TODO: Get books from the database async.
export const getBooks = async (): Promise<Book[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getLocalStorageItem<Book[]>('books', []));
    }, 1000);
  });
};

// TODO: Get book from the database async.
export const getBook = (bookId: Book['id']) => {
  const books = getLocalStorageItem<Book[]>('books', []);
  return books.find((book) => book.id == bookId);
};

// TODO: Update book from the database async.
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

// TODO: Delete book from the database async.
export const deleteBook = (bookId: Book['id']) => {
  const books = getLocalStorageItem<Book[]>('books', []);
  const updatedBooks = books.filter((book) => book.id != bookId);

  setLocalStorageItem('books', updatedBooks);
};
