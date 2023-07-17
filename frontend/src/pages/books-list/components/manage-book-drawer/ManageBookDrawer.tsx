import { Controller, useForm } from 'react-hook-form';
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

function ManageBookDrawer({
  visible,
  bookId,
  defaultValues,
  onSubmit,
  onClose,
}: ManageBookDrawerProps) {
  const { control, handleSubmit, register, reset } = useForm({
    defaultValues: DEFAULT_VALUES,
  });

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
      reset(defaultValues);
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
          <Controller
            control={control}
            name="category"
            render={({ field: { onChange, onBlur, value } }) => {
              return (
                <Select
                  placeholder="Select a category"
                  onChange={onChange}
                  onBlur={onBlur}
                  options={[
                    { value: 'programming', label: 'Programming' },
                    { value: 'mystery', label: 'Mystery' },
                    { value: 'fiction', label: 'Fiction' },
                    { value: 'thriller', label: 'Thriller' },
                  ]}
                  value={value}
                />
              );
            }}
            rules={{ required: true }}
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
