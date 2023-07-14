import { Link } from 'react-router-dom';
import { paths } from '#/application/routes/paths';

function BooksList() {
  return (
    <div>
      <h1>Books List</h1>
      <nav>
        <Link to={paths.SIGN_IN}>Sign In</Link>
        <Link to={paths.SIGN_UP}>Sign Up</Link>
      </nav>
    </div>
  );
}

export default BooksList;
