import Button from '#/common/components/button/Button';
import booksEmptyStateSrc from './assets/books-empty-state.svg';
import classes from './EmptyState.module.css';

type EmptyStateProps = {
  onClick?: () => void;
};

function EmptyState({ onClick }: EmptyStateProps) {
  return (
    <div className={classes.container}>
      <img className={classes.image} src={booksEmptyStateSrc} alt="Books empty state" />
      <p className={classes.description}>Looking for a read?</p>
      <p className={classes.description}>Add your first book!</p>
      <Button className={classes.button} onClick={onClick}>
        Add book
      </Button>
    </div>
  );
}

export default EmptyState;
