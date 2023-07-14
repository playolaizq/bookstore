import { MouseEvent, ReactNode } from 'react';
import classes from './Button.module.css';

type ButtonProps = {
  children: ReactNode;
  onClick?: (event: MouseEvent) => void;
};

function Button({ children, onClick }: ButtonProps) {
  return (
    <button className={classes.container} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
