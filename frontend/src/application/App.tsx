import { RouterProvider } from 'react-router-dom';
import { UserProvider } from './state/user/context';
import { configureI18n } from './i18n';
import { router } from './routes/router';
import ThemeProvider from './components/theme-provider/ThemeProvider';

configureI18n();

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
