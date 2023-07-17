import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import ThemeProvider from './components/theme-provider/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
