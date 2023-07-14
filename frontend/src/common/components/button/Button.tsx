import { MouseEvent, ReactNode } from 'react';
import { classNames } from '#/common/utils/styles';
import classes from './Button.module.css';

type ButtonProps = {
  children: ReactNode;
  onClick?: (event: MouseEvent) => void;
  className?: string;
};

function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button className={classNames(classes.container, className)} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
