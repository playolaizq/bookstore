import { useState } from 'react';
import EmptyState from './components/empty-state/EmptyState';
import ManageBookDrawer from './components/manage-book-drawer/ManageBookDrawer';

export type Book = {
  name: string;
  author: string;
  description?: string;
  category: 'programming' | 'thriller' | 'fiction' | 'mystery';
};

function BooksList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [manageBookVisible, setManageBookVisible] = useState(false);

  const openManageBook = () => setManageBookVisible(true);
  const closeManageBook = () => setManageBookVisible(false);

  return (
    <div>
      {books?.length == 0 ? (
        <EmptyState onClick={openManageBook} />
      ) : (
        <div>
          <ul>
            {books.map((book) => {
              return (
                <li>
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
      <ManageBookDrawer visible={manageBookVisible} onClose={closeManageBook} />
    </div>
  );
}

export default BooksList;
