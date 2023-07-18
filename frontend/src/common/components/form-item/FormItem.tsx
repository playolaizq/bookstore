import { ReactNode } from 'react';
import classes from './FormItem.module.css';

type FormItemProps = {
  children: ReactNode;
  label: string;
};

function FormItem({ children, label }: FormItemProps) {
  return (
    <div className={classes.formItem}>
      <label className={classes.formLabel}>{label}</label>
      {children}
    </div>
  );
}

export default FormItem;
