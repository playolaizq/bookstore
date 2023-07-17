import { createBook } from '#/common/services/books';
import Drawer from '#/common/components/drawer/Drawer';
import { Book } from '#/common/types/book';
import BookForm from '../book-form/BookForm';

type CreateBookDrawerProps = {
  visible: boolean;
  onFinish: (book: Book) => void;
  onClose?: () => void;
};

function CreateBookDrawer({ visible, onFinish, onClose }: CreateBookDrawerProps) {
  const handleClose = () => {
    if (onClose) onClose();
  };

  const handleSubmit = (book: Book) => {
    const newBook = createBook(book);
    // TODO: Create book in the database (async).

    onFinish(newBook);
    handleClose();
  };

  return (
    <Drawer open={visible} title="Add book" onClose={handleClose}>
      <BookForm onSubmit={handleSubmit} onClose={handleClose} submitText="Add book" />
    </Drawer>
  );
}

export default CreateBookDrawer;
