import { createBrowserRouter, Navigate } from 'react-router-dom';
import PrivateLayout from '#/application/components/private-layout/PrivateLayout';
import PublicLayout from '#/application/components/public-layout/PublicLayout';
import BooksList from '#/pages/books-list/BooksList';
import SignIn from '#/pages/sign-in/SignIn';
import SignUp from '#/pages/sign-up/SignUp';
import UnexpectedError from '#/pages/unexpected-error/UnexpectedError';
import { paths } from './paths';

export const router = createBrowserRouter([
  {
    path: paths.BASE,
    element: <PrivateLayout />,
    errorElement: <UnexpectedError />,
    children: [
      {
        path: paths.BASE,
        element: <Navigate to={paths.BOOKS_LIST} replace={true} />,
      },
      {
        path: paths.BOOKS_LIST,
        element: <BooksList />,
      },
      {
        element: <PublicLayout />,
        children: [
          {
            path: paths.SIGN_IN,
            element: <SignIn />,
          },
          {
            path: paths.SIGN_UP,
            element: <SignUp />,
          },
        ],
      },
    ],
  },
]);
