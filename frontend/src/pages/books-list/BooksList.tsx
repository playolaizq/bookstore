import { useEffect, useState } from 'react';
import EmptyState from './components/empty-state/EmptyState';
import ManageBookDrawer from './components/manage-book-drawer/ManageBookDrawer';
import { getLocalStorageItem } from '#/common/utils/local-storage';

export type Book = {
  id: string;
  name: string;
  author: string;
  description?: string;
  category: 'programming' | 'thriller' | 'fiction' | 'mystery';
};

function BooksList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [manageBookVisible, setManageBookVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  const openManageBook = () => setManageBookVisible(true);
  const closeManageBook = () => setManageBookVisible(false);

  const handleSubmit = (book: Book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  useEffect(() => {
    const localBooks = getLocalStorageItem('books', []);
    setBooks(localBooks);
    setLoading(false);
  }, []);

  return (
    <div>
      {books?.length == 0 ? (
        <EmptyState onClick={openManageBook} />
      ) : (
        <div>
          <ul>
            {books.map((book) => {
              return (
                <li key={book.id}>
                  <p>{book.name}</p>
                  <p>
                    <i>{book.author}</i>
                  </p>
                  {book.description && <p>{book.description}</p>}
                  <p>{book.category}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <ManageBookDrawer
        visible={manageBookVisible}
        onSubmit={handleSubmit}
        onClose={closeManageBook}
      />
    </div>
  );
}

export default BooksList;
