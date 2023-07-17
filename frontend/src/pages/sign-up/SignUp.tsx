import { Link } from 'react-router-dom';
import { paths } from '#/application/routes/paths';
import { useI18n } from '#/common/hooks/i18n';

function SignUp() {
  const { t } = useI18n();

  return (
    <div>
      <h1>{t('pages.sign-up.title')}</h1>
      <nav>
        <Link to={paths.SIGN_IN}>Sign In</Link>
        <Link to={paths.BOOKS_LIST}>Books</Link>
      </nav>
    </div>
  );
}

export default SignUp;
