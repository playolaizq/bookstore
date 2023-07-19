import { createBrowserRouter, Navigate } from 'react-router-dom';
import Initializer from '#/application/components/initializer/Initializer';
import PrivateRoute from '#/application/components/private-route/PrivateRoute';
import PublicRoute from '#/application/components/public-route/PublicRoute';
import BooksList from '#/pages/books-list/BooksList';
import SignIn from '#/pages/sign-in/SignIn';
import SignUp from '#/pages/sign-up/SignUp';
import UnexpectedError from '#/pages/unexpected-error/UnexpectedError';
import { paths } from './paths';

export const router = createBrowserRouter([
  {
    path: paths.BASE,
    element: <Initializer />,
    errorElement: <UnexpectedError />,
    children: [
      {
        path: paths.BASE,
        element: <Navigate to={paths.BOOKS_LIST} replace={true} />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: paths.BOOKS_LIST,
            element: <BooksList />,
          },
        ],
      },
      {
        element: <PublicRoute />,
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
