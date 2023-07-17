import { useI18n } from '#/common/hooks/i18n';
import Button from '#/common/components/button/Button';
import booksEmptyStateSrc from './assets/books-empty-state.svg';
import classes from './EmptyState.module.css';

type EmptyStateProps = {
  onClick?: () => void;
};

function EmptyState({ onClick }: EmptyStateProps) {
  const { t } = useI18n();

  return (
    <div className={classes.container}>
      <img
        className={classes.image}
        src={booksEmptyStateSrc}
        alt={t('pages.books-list.empty-state.title')}
      />
      <p className={classes.description}>{t('pages.books-list.empty-state.title')}</p>
      <p className={classes.description}>{t('pages.books-list.empty-state.description')}</p>
      <Button className={classes.button} onClick={onClick}>
        {t('pages.books-list.add-action')}
      </Button>
    </div>
  );
}

export default EmptyState;
