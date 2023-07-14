import { useRouteError } from 'react-router-dom';
import { formatError } from './utils/format';

function UnexpectedError() {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{formatError(error)}</i>
      </p>
    </div>
  );
}

export default UnexpectedError;
