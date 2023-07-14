import { useForm } from 'react-hook-form';
import Button from '#/common/components/button/Button';
import Drawer from '#/common/components/drawer/Drawer';
import Input from '#/common/components/input/Input';
import Select from '#/common/components/select/Select';
import { Book } from '../../BooksList';
import { defaultValues } from './config/form';
import classes from './ManageBookDrawer.module.css';

type ManageBookDrawerProps = {
  visible: boolean;
  bookId?: string;
  onSubmit?: (book: Book) => void;
  onClose?: () => void;
};

function ManageBookDrawer({ visible, bookId, onSubmit, onClose }: ManageBookDrawerProps) {
  const { register, handleSubmit } = useForm({ defaultValues });

  const handleFormSubmit = (values: Book) => {
    console.log('values', values);
    if (onSubmit) {
      onSubmit(values);
    }
  };

  return (
    <Drawer open={visible} title={bookId ? 'Update book' : 'Add book'} onClose={onClose}>
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
            {...register('category', { required: true })}
            placeholder="Select a category"
            options={[
              { value: 'mystery', label: 'Mystery' },
              { value: 'fiction', label: 'Fiction' },
              { value: 'thriller', label: 'Thriller' },
            ]}
          />
        </div>

        <footer className={classes.formFooter}>
          <Button type="submit">Add book</Button>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
        </footer>
      </form>
    </Drawer>
  );
}

export default ManageBookDrawer;
