import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useUser } from '#/application/state/user';
import { getLocalStorageItem } from '#/common/utils/local-storage';
import { getUser } from '#/common/services/users';

function Initializer() {
  const { setUser } = useUser();
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const userId = getLocalStorageItem('bookstore-userid', null);
    if (userId) {
      getUser(userId)
        .then((userData) => setUser(userData))
        .finally(() => setInitialLoading(false));
    } else {
      setInitialLoading(false);
    }
  }, []);

  return initialLoading ? <div>Loading...</div> : <Outlet />;
}

export default Initializer;
