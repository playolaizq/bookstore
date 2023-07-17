import { DeleteOutlined } from '@ant-design/icons';
import { updateBook, deleteBook } from '#/common/services/books';
import Button from '#/common/components/button/Button';
import Drawer from '#/common/components/drawer/Drawer';
import Popconfirm from '#/common/components/popconfirm/Popconfirm';
import { Book } from '#/common/types/book';
import BookForm from '../book-form/BookForm';

type UpdateBookDrawerProps = {
  visible: boolean;
  defaultValues?: Book | null;
  onFinish: () => void;
  onClose?: () => void;
};

function UpdateBookDrawer({ visible, defaultValues, onFinish, onClose }: UpdateBookDrawerProps) {
  const handleClose = () => {
    if (onClose) onClose();
  };

  const handleSubmit = (updatedBook: Book) => {
    if (defaultValues) {
      updateBook(defaultValues.id, updatedBook);
    }

    onFinish();
    handleClose();
  };

  const handleDelete = () => {
    if (defaultValues) {
      deleteBook(defaultValues.id);
    }

    onFinish();
    handleClose();
  };

  return (
    <Drawer
      open={visible}
      title="Update book"
      onClose={handleClose}
      extra={
        <Popconfirm
          title="Delete the book"
          description="Are you sure to delete this book?"
          onConfirm={handleDelete}
          okText="Yes"
          cancelText="No"
        >
          <Button variant="secondary" shape="circle">
            <DeleteOutlined />
          </Button>
        </Popconfirm>
      }
    >
      <BookForm
        defaultValues={defaultValues}
        onSubmit={handleSubmit}
        onClose={handleClose}
        submitText="Update"
      />
    </Drawer>
  );
}

export default UpdateBookDrawer;
