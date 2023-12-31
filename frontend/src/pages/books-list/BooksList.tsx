import { useEffect, useState } from 'react';
import { useI18n } from '#/common/hooks/i18n';
import { getBooks } from '#/common/services/books';
import Button from '#/common/components/button/Button';
import Skeleton from '#/common/components/skeleton/Skeleton';
import Spinner from '#/common/components/spinner/Spinner';
import { Book } from '#/common/types/book';
import BookCard from './components/book-card/BookCard';
import EmptyState from './components/empty-state/EmptyState';
import CreateBookDrawer from './components/create-book-drawer/CreateBookDrawer';
import UpdateBookDrawer from './components/update-book-drawer/UpdateBookDrawer';
import { skeletonButtonStyle, skeletonCardStyle } from './config/loading';
import classes from './BooksList.module.css';

function BooksList() {
  const { t } = useI18n();
  const [books, setBooks] = useState<Book[]>([]);
  const [createBook, setCreateBookDrawer] = useState({ visible: false });
  const [updateBook, setUpdateBookDrawer] = useState<{
    visible: boolean;
    defaultValues?: Book | null;
  }>({ visible: false, defaultValues: null });
  const [loading, setLoading] = useState(true);
  const [innerLoading, setInnerLoading] = useState(false);

  const retrieveBooks = async () => {
    try {
      setInnerLoading(true);
      const booksList = await getBooks();
      setBooks(booksList);
    } catch (error) {
      console.log('BooksList - getBooks', error);
    } finally {
      setTimeout(() => {
        setLoading(false);
        setInnerLoading(false);
      }, 500);
    }
  };

  const handleBookDrawer = (bookId?: Book['id']) => {
    if (bookId) {
      const defaultValues = books.find((book) => book.id == bookId);
      setUpdateBookDrawer((prevDrawer) => ({ ...prevDrawer, visible: true, defaultValues }));
    } else {
      setCreateBookDrawer((prevDrawer) => ({ ...prevDrawer, visible: true }));
    }
  };

  const handleFinish = () => {
    retrieveBooks();
  };

  useEffect(() => {
    retrieveBooks();
  }, []);

  return loading ? (
    <section>
      <header className={classes.header}>
        <Skeleton.Button style={skeletonButtonStyle} active />
      </header>
      <div className={classes.gridList}>
        <Skeleton.Image style={skeletonCardStyle} active />
        <Skeleton.Image style={skeletonCardStyle} active />
        <Skeleton.Image style={skeletonCardStyle} active />
        <Skeleton.Image style={skeletonCardStyle} active />
        <Skeleton.Image style={skeletonCardStyle} active />
        <Skeleton.Image style={skeletonCardStyle} active />
      </div>
    </section>
  ) : (
    <Spinner spinning={innerLoading} size="large">
      {books?.length == 0 ? (
        <EmptyState onClick={() => handleBookDrawer()} />
      ) : (
        <section>
          <header className={classes.header}>
            <Button onClick={() => handleBookDrawer()}>{t('pages.books-list.add-action')}</Button>
          </header>
          <ul className={classes.gridList}>
            {books.map((book) => {
              return (
                <BookCard
                  key={book.id}
                  book={book}
                  onClick={(bookId) => handleBookDrawer(bookId)}
                />
              );
            })}
          </ul>
        </section>
      )}
      <CreateBookDrawer
        visible={createBook.visible}
        onFinish={handleFinish}
        onClose={() => setCreateBookDrawer((prevDrawer) => ({ ...prevDrawer, visible: false }))}
      />
      <UpdateBookDrawer
        visible={updateBook.visible}
        defaultValues={updateBook.defaultValues}
        onFinish={handleFinish}
        onClose={() =>
          setUpdateBookDrawer((prevDrawer) => ({
            ...prevDrawer,
            visible: false,
            defaultValues: null,
          }))
        }
      />
    </Spinner>
  );
}

export default BooksList;
