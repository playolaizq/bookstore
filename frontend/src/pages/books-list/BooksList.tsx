import { useEffect, useState } from 'react';
import { getLocalStorageItem } from '#/common/utils/local-storage';
import Button from '#/common/components/button/Button';
import BookCard from './components/book-card/BookCard';
import EmptyState from './components/empty-state/EmptyState';
import ManageBookDrawer from './components/manage-book-drawer/ManageBookDrawer';
import classes from './BooksList.module.css';

export type Book = {
  id: string;
  name: string;
  author: string;
  description?: string;
  category: 'programming' | 'thriller' | 'fiction' | 'mystery';
};

function BooksList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [manageBookDrawer, setManageBookDrawer] = useState<{
    visible: boolean;
    defaultValues?: Book | null;
  }>({ visible: false, defaultValues: null });
  const [loading, setLoading] = useState(true);

  const openManageBook = (bookId?: Book['id']) => {
    const defaultValues = books.find((book) => book.id == bookId);
    setManageBookDrawer((prevDrawer) => ({ ...prevDrawer, visible: true, defaultValues }));
  };

  const closeManageBook = () => {
    setManageBookDrawer((prevDrawer) => ({ ...prevDrawer, visible: false, defaultValues: null }));
  };

  const handleSubmit = (book: Book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  useEffect(() => {
    const localBooks = getLocalStorageItem('books', []);
    setBooks(localBooks);
    setLoading(false);
  }, []);

  return (
    <>
      {books?.length == 0 ? (
        <EmptyState onClick={() => openManageBook()} />
      ) : (
        <section>
          <header className={classes.header}>
            <Button onClick={() => openManageBook()}>Add book</Button>
          </header>
          <ul className={classes.gridList}>
            {books.map((book) => {
              return (
                <BookCard key={book.id} book={book} onClick={(bookId) => openManageBook(bookId)} />
              );
            })}
          </ul>
        </section>
      )}
      <ManageBookDrawer
        visible={manageBookDrawer.visible}
        defaultValues={manageBookDrawer.defaultValues}
        onSubmit={handleSubmit}
        onClose={closeManageBook}
      />
    </>
  );
}

export default BooksList;
