import { Outlet } from 'react-router-dom';
import Avatar from '#/common/components/avatar/Avatar';
import classes from './PrivateLayout.module.css';

function PrivateLayout() {
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <div className={classes.titleContainer}>
          <img className={classes.logo} src="/logo.svg" alt="Bookstore logo" />
          <span className={classes.title}>Bookstore</span>
        </div>
        <div>
          <Avatar size="large">AA</Avatar>
        </div>
      </header>
      <main className={classes.content}>
        <Outlet />
      </main>
    </div>
  );
}

export default PrivateLayout;
