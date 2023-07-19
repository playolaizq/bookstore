import { useI18n } from '#/common/hooks/i18n';
import { Book } from '#/common/types/book';
import Dropdown from '#/common/components/dropdown/Dropdown';
import classes from './BookCard.module.css';

type BookCardProps = {
  book: Book;
  onClick?: (bookId: Book['id']) => void;
};

function BookCard({ book, onClick }: BookCardProps) {
  const { t } = useI18n();

  return (
    <Dropdown
      menu={{
        items: [{ key: 'update', label: 'Update', onClick: () => onClick && onClick(book.id) }],
      }}
      trigger={['contextMenu']}
    >
      <li className={classes.container} onClick={() => onClick && onClick(book.id)}>
        <p className={classes.title}>{book.title}</p>
        <p className={classes.author}>{book.author}</p>
        {book.description && <p className={classes.description}>{book.description}</p>}
        <div className={classes.category}>{t(`common.book.category.${book.category}`)}</div>
      </li>
    </Dropdown>
  );
}

export default BookCard;
