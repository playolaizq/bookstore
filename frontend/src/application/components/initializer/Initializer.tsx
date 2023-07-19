import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useUser } from '#/application/state/user';
import { getLocalStorageItem } from '#/common/utils/local-storage';
import { getUser } from '#/common/services/users';
import classes from './Initializer.module.css';

function Initializer() {
  const { setUser } = useUser();
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const userId = getLocalStorageItem('bookstore-userid', null);
    if (userId) {
      getUser(userId)
        .then((userData) => setUser(userData))
        .finally(() => {
          setTimeout(() => {
            setInitialLoading(false);
          }, 500);
        });
    } else {
      setInitialLoading(false);
    }
  }, []);

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
