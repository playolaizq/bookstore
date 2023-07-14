import { createBrowserRouter, Navigate } from 'react-router-dom';
import AuthLayout from '#/application/components/auth-layout/AuthLayout';
import Layout from '#/application/components/layout/Layout';
import BooksList from '#/pages/books-list/BooksList';
import SignIn from '#/pages/sign-in/SignIn';
import SignUp from '#/pages/sign-up/SignUp';
import UnexpectedError from '#/pages/unexpected-error/UnexpectedError';
import { paths } from './paths';

export const router = createBrowserRouter([
  {
    path: paths.BASE,
    element: <Layout />,
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
        element: <AuthLayout />,
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
