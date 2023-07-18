import { Navigate, Outlet } from 'react-router-dom';
import { paths } from '#/application/routes/paths';
import { useUser } from '#/application/state/user';
import classes from './PublicRoute.module.css';

function PublicLayout() {
  return (
    <div className={classes.root}>
      <Outlet />
    </div>
  );
}

function PublicRoute() {
  const { user } = useUser();

  if (user.id) {
    return <Navigate to={paths.BOOKS_LIST} replace={true} />;
  }

  return <PublicLayout />;
}

export default PublicRoute;
