import { isRouteErrorResponse } from 'react-router-dom';

export function formatError(error: unknown) {
  if (isRouteErrorResponse(error)) {
    return error.statusText;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'Unexpected error';
}
