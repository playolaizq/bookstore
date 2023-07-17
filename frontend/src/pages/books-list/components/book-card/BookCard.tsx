import { Book } from '#/common/types/book';
import classes from './BookCard.module.css';

type BookCardProps = {
  book: Book;
  onClick?: (bookId: Book['id']) => void;
};

function BookCard({ book, onClick }: BookCardProps) {
  return (
    <li className={classes.container} onClick={() => onClick && onClick(book.id)}>
      <p className={classes.name}>{book.name}</p>
      <p className={classes.author}>{book.author}</p>
      {book.description && <p className={classes.description}>{book.description}</p>}
      <div className={classes.category}>{book.category}</div>
    </li>
  );
}

export default BookCard;
