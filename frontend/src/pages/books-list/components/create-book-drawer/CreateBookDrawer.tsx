import { useUser } from '#/application/state/user';
import { useI18n } from '#/common/hooks/i18n';
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
  const { t } = useI18n();
  const { user } = useUser();

  const handleClose = () => {
    if (onClose) onClose();
  };

  const handleSubmit = async (book: Book) => {
    try {
      const newBook = await createBook({ ...book, createdBy: user.id });
      onFinish(newBook);
      handleClose();
    } catch (err) {
      console.log('err', err);
    }
  };

  return (
    <Drawer
      open={visible}
      title={t('pages.books-list.create-book-drawer.title')}
      onClose={handleClose}
    >
      <BookForm
        onSubmit={handleSubmit}
        onClose={handleClose}
        submitText={t('common.actions.add')}
      />
    </Drawer>
  );
}

export default CreateBookDrawer;
