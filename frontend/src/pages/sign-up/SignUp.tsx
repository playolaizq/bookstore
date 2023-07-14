import { Link } from 'react-router-dom';
import { paths } from '#/application/routes/paths';

function SignUp() {
  return (
    <div>
      <h1>Sign Up</h1>
      <nav>
        <Link to={paths.SIGN_IN}>Sign In</Link>
        <Link to={paths.BOOKS_LIST}>Books</Link>
      </nav>
    </div>
  );
}

export default SignUp;
