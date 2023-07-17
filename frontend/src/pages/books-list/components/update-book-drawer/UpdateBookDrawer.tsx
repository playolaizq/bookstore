import { DeleteOutlined } from '@ant-design/icons';
import { useI18n } from '#/common/hooks/i18n';
import { updateBook, deleteBook } from '#/common/services/books';
import Button from '#/common/components/button/Button';
import Drawer from '#/common/components/drawer/Drawer';
import PopConfirm from '#/common/components/pop-confirm/PopConfirm';
import { Book } from '#/common/types/book';
import BookForm from '../book-form/BookForm';

type UpdateBookDrawerProps = {
  visible: boolean;
  defaultValues?: Book | null;
  onFinish: () => void;
  onClose?: () => void;
};

function UpdateBookDrawer({ visible, defaultValues, onFinish, onClose }: UpdateBookDrawerProps) {
  const { t } = useI18n();

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
      title={t('pages.books-list.update-book-drawer.title')}
      onClose={handleClose}
      extra={
        <PopConfirm
          title={t('pages.books-list.update-book-drawer.delete-confirmation-title')}
          description={t('pages.books-list.update-book-drawer.delete-confirmation-description')}
          onConfirm={handleDelete}
          okType="danger"
          okText={t('common.actions.yes')}
          cancelText={t('common.actions.no')}
        >
          <Button variant="secondary" shape="circle">
            <DeleteOutlined />
          </Button>
        </PopConfirm>
      }
    >
      <BookForm
        defaultValues={defaultValues}
        onSubmit={handleSubmit}
        onClose={handleClose}
        submitText={t('common.actions.update')}
      />
    </Drawer>
  );
}

export default UpdateBookDrawer;
