import { Link } from 'react-router-dom';
import { paths } from '#/application/routes/paths';

function SignIn() {
  return (
    <div>
      <h1>Sign In</h1>
      <nav>
        <Link to={paths.SIGN_UP}>Sign Up</Link>
        <Link to={paths.BOOKS_LIST}>Books</Link>
      </nav>
    </div>
  );
}

export default SignIn;
