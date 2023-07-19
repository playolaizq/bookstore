import { ReactNode } from 'react';
import { FieldError } from 'react-hook-form';
import classes from './FormItem.module.css';

type FormItemProps = {
  children: ReactNode;
  label: string;
  error?: FieldError;
};

function FormItem({ children, label, error }: FormItemProps) {
  return (
    <div className={classes.formItem}>
      <label className={classes.formLabel}>{label}</label>
      {children}
      {error && (
        <p className={classes.errorMessage} role="alert">
          {error.message}
        </p>
      )}
    </div>
  );
}

export default FormItem;
