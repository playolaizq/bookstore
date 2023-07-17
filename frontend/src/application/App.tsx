import { RouterProvider } from 'react-router-dom';
import { configureI18n } from './i18n';
import { router } from './routes/router';
import ThemeProvider from './components/theme-provider/ThemeProvider';

configureI18n();

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
