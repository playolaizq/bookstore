import { Link } from 'react-router-dom';
import { paths } from '#/application/routes/paths';
import { useI18n } from '#/common/hooks/i18n';

function SignIn() {
  const { t } = useI18n();

  return (
    <div>
      <h1>{t('pages.sign-in.title')}</h1>
      <nav>
        <Link to={paths.SIGN_UP}>Sign Up</Link>
        <Link to={paths.BOOKS_LIST}>Books</Link>
      </nav>
    </div>
  );
}

export default SignIn;
