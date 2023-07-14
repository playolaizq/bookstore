import { Outlet } from 'react-router-dom';
import classes from './PublicLayout.module.css';

function PublicLayout() {
  return (
    <div className={classes.root}>
      <Outlet />
    </div>
  );
}

export default PublicLayout;
