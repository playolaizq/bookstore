import { DeleteOutlined } from '@ant-design/icons';
import { useI18n } from '#/common/hooks/i18n';
import { useMessage } from '#/common/hooks/useMessage';
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
  const [message, contextHolder] = useMessage();

  const handleClose = () => {
    if (onClose) onClose();
  };

  const handleSubmit = async (updatedBook: Book) => {
    try {
      if (defaultValues) {
        await updateBook(defaultValues.id, updatedBook);
      }

      onFinish();
      handleClose();
      message.open({
        type: 'success',
        content: 'Book updated successfully.',
      });
    } catch (err) {
      console.log('err', err);
      message.open({
        type: 'error',
        content: 'Error updating the book.',
      });
    }
  };

  const handleDelete = async () => {
    try {
      if (defaultValues) {
        await deleteBook(defaultValues.id);
      }

      onFinish();
      handleClose();
      message.open({
        type: 'success',
        content: 'Book deleted successfully.',
      });
    } catch (err) {
      message.open({
        type: 'error',
        content: 'Error deleting the book.',
      });
      console.log('err', err);
    }
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
      {contextHolder}
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
