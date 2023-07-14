import { Outlet } from 'react-router-dom';
import classes from './PrivateLayout.module.css';

function PrivateLayout() {
  return (
    <div className={classes.root}>
      <header>
        <img src="/logo.svg" alt="Bookstore logo" />
        <span>Bookstore</span>
      </header>
      <Outlet />
    </div>
  );
}

export default PrivateLayout;
