import { updateBook } from '#/common/services/books';
import Drawer from '#/common/components/drawer/Drawer';
import { Book } from '#/common/types/book';
import BookForm from '../book-form/BookForm';

type UpdateBookDrawerProps = {
  visible: boolean;
  defaultValues?: Book | null;
  onFinish: (book: Book) => void;
  onClose?: () => void;
};

function UpdateBookDrawer({ visible, defaultValues, onFinish, onClose }: UpdateBookDrawerProps) {
  const handleClose = () => {
    if (onClose) onClose();
  };

  const handleSubmit = (updatedBook: Book) => {
    if (defaultValues) {
      updateBook(defaultValues.id, updatedBook);
      // TODO: Update book in the database (async).
    }

    onFinish(updatedBook);
    handleClose();
  };

  return (
    <Drawer open={visible} title="Update book" onClose={handleClose}>
      <BookForm
        defaultValues={defaultValues}
        onSubmit={handleSubmit}
        onClose={handleClose}
        submitText="Update book"
      />
    </Drawer>
  );
}

export default UpdateBookDrawer;
