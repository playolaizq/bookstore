import { MouseEvent, ReactNode } from 'react';
import { classNames } from '#/common/utils/styles';
import classes from './Button.module.css';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: (event: MouseEvent) => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

function Button({ children, variant = 'primary', onClick, className, type }: ButtonProps) {
  return (
    <button
      className={classNames(
        classes.container,
        variant == 'secondary' && classes.secondaryVariant,
        className,
      )}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
