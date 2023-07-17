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
        <label className={classes.formLabel}>{t('pages.books-list.book-form.labels.name')}</label>
        <Input
          {...register('name', { required: true })}
          placeholder={t('pages.books-list.book-form.placeholders.name')}
        />
      </div>

      <div className={classes.formItem}>
        <label className={classes.formLabel}>{t('pages.books-list.book-form.labels.author')}</label>
        <Input
          {...register('author', { required: true })}
          placeholder={t('pages.books-list.book-form.placeholders.author')}
        />
      </div>

      <div className={classes.formItem}>
        <label className={classes.formLabel}>
          {t('pages.books-list.book-form.labels.description')}
        </label>
        <Input
          {...register('description')}
          placeholder={t('pages.books-list.book-form.placeholders.description')}
        />
      </div>

      <div className={classes.formItem}>
        <label className={classes.formLabel}>
          {t('pages.books-list.book-form.labels.category')}
        </label>
        <Controller
          control={control}
          name="category"
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <Select
                placeholder={t('pages.books-list.book-form.placeholders.category')}
                onChange={onChange}
                onBlur={onBlur}
                options={[
                  {
                    value: 'programming',
                    label: t('common.book.category.programming'),
                  },
                  { value: 'mystery', label: t('common.book.category.mystery') },
                  { value: 'fiction', label: t('common.book.category.fiction') },
                  { value: 'thriller', label: t('common.book.category.thriller') },
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
