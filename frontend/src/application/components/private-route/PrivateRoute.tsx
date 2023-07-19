import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import i18n from 'i18next';
import { locale } from '#/application/i18n';
import { paths } from '#/application/routes/paths';
import { useUser } from '#/application/state/user';
import { useI18n } from '#/common/hooks/i18n';
import { setLocalStorageItem } from '#/common/utils/local-storage';
import Avatar from '#/common/components/avatar/Avatar';
import Select from '#/common/components/select/Select';
import classes from './PrivateRoute.module.css';

function PrivateLayout() {
  const { t } = useI18n();
  const { DEFAULT_USER, setUser } = useUser();
  const [language, setLanguage] = useState(i18n.language);

  const handleLocaleChange = (locale: string) => {
    i18n.changeLanguage(locale);
    setLanguage(locale);
  };

  const handleLogout = () => {
    setLocalStorageItem('bookstore-userid', null);
    setUser(DEFAULT_USER);
  };

  return (
    <div className={classes.root}>
      <div className={classes.innerRoot}>
        <header className={classes.header}>
          <div className={classes.titleContainer}>
            <img className={classes.logo} src="/logo.svg" alt={t('application.title')} />
            <span className={classes.title}>{t('application.title')}</span>
          </div>
          <div className={classes.userContainer}>
            <Select
              onChange={handleLocaleChange}
              options={Object.values(locale).map((locale) => ({
                value: locale,
                label: t(`application.locale.${locale}`),
              }))}
              value={language}
            />
            <div>
              <Avatar className={classes.avatar} size="large" onClick={handleLogout}>
                AA
              </Avatar>
            </div>
          </div>
        </header>
        <main className={classes.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function PrivateRoute() {
  const { user } = useUser();

  if (!user.id) {
    return <Navigate to={paths.SIGN_IN} replace={true} />;
  }

  return <PrivateLayout />;
}

export default PrivateRoute;
