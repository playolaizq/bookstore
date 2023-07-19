import { Outlet } from 'react-router-dom';
import { useUser } from '#/application/state/user';
import classes from './Initializer.module.css';

function Initializer() {
  const { initialLoading } = useUser();

  return initialLoading ? (
    <div className={classes.loadingContainer}>
      <img className={classes.loadingImg} src="/logo.svg" alt="Bookstore" />
      <h2>Loading Bookstore</h2>
    </div>
  ) : (
    <Outlet />
  );
}

export default Initializer;
