import { useForm } from 'react-hook-form';
import { getLocalStorageItem, setLocalStorageItem } from '#/common/utils/local-storage';
import Button from '#/common/components/button/Button';
import Drawer from '#/common/components/drawer/Drawer';
import Input from '#/common/components/input/Input';
import Select from '#/common/components/select/Select';
import { Book } from '../../BooksList';
import { DEFAULT_VALUES } from './config/form';
import classes from './ManageBookDrawer.module.css';
import { useEffect } from 'react';

type ManageBookDrawerProps = {
  visible: boolean;
  bookId?: Book['id'] | null;
  defaultValues?: Book | null;
  onSubmit?: (book: Book) => void;
  onClose?: () => void;
};

function ManageBookDrawer({ visible, bookId, defaultValues, onSubmit, onClose }: ManageBookDrawerProps) {
  const { handleSubmit, register, reset, setValue } = useForm({ defaultValues: DEFAULT_VALUES });

  // Manually set the value of Select due to Ant Design incompatibility with React Hook Form.
  const handleSelectChange = (value: Book['category']) => {
    setValue('category', value);
  };

  const handleClose = () => {
    if (onClose) onClose();
    reset(DEFAULT_VALUES);
  };

  const handleFormSubmit = (newBook: Book) => {
    const books = getLocalStorageItem<Book[]>('books', []);
    const newBooks = [...books, { ...newBook, id: crypto.randomUUID() }];

    setLocalStorageItem('books', newBooks);

    if (onSubmit) onSubmit(newBook);
    handleClose();
  };

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues)

      // TODO: Properly set category initial value
      handleSelectChange(defaultValues.category);
    }
  }, [defaultValues]);

  return (
    <Drawer open={visible} title={bookId ? 'Update book' : 'Add book'} onClose={handleClose}>
      <form
        className={classes.form}
        onSubmit={(...args) => void handleSubmit(handleFormSubmit)(...args)}
      >
        <div className={classes.formItem}>
          <label className={classes.formLabel}>Name</label>
          <Input {...register('name', { required: true })} placeholder="Type book name" />
        </div>

        <div className={classes.formItem}>
          <label className={classes.formLabel}>Author</label>
          <Input {...register('author', { required: true })} placeholder="Type book author" />
        </div>

        <div className={classes.formItem}>
          <label className={classes.formLabel}>Description</label>
          <Input {...register('description')} placeholder="What's the book about?" />
        </div>

        <div className={classes.formItem}>
          <label className={classes.formLabel}>Category</label>
          <Select
            onChange={handleSelectChange}
            placeholder="Select a category"
            defaultValue="programming"
            options={[
              { value: 'programming', label: 'Programming' },
              { value: 'mystery', label: 'Mystery' },
              { value: 'fiction', label: 'Fiction' },
              { value: 'thriller', label: 'Thriller' },
            ]}
          />
        </div>

        <footer className={classes.formFooter}>
          <Button type="submit">{bookId ? 'Update book' : 'Add book'}</Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </footer>
      </form>
    </Drawer>
  );
}

export default ManageBookDrawer;
