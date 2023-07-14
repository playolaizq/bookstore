import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react';
import classes from './Input.module.css';

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input className={classes.container} ref={ref} {...props} />;
});

export default Input;
