import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useI18n } from '#/common/hooks/i18n';
import Button from '#/common/components/button/Button';
import Input from '#/common/components/input/Input';
import Select from '#/common/components/select/Select';
import { Book } from '#/common/types/book';
import { DEFAULT_VALUES } from './config/form';
import classes from './BookForm.module.css';

type BookFormProps = {
  defaultValues?: Book | null;
  onSubmit?: (book: Book) => void;
  onClose?: () => void;
  submitText?: string;
  cancelText?: string;
};

function BookForm({ defaultValues, onSubmit, onClose, submitText, cancelText }: BookFormProps) {
  const { t } = useI18n();
  const { control, handleSubmit, register, reset } = useForm({
    defaultValues: DEFAULT_VALUES,
  });

  const handleClose = () => {
    if (onClose) onClose();
    reset(DEFAULT_VALUES);
  };

  const handleFormSubmit = (book: Book) => {
    if (onSubmit) onSubmit(book);
    handleClose();
  };

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues]);

  return (
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
        <Button type="submit">{submitText || t('common.actions.add')}</Button>
        <Button variant="secondary" onClick={handleClose}>
          {cancelText || t('common.actions.cancel')}
        </Button>
      </footer>
    </form>
  );
}

export default BookForm;
