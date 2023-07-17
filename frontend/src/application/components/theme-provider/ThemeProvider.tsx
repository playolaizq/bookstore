import { ReactNode } from 'react';
import { ConfigProvider } from 'antd';

type ThemeProviderProps = {
  children: ReactNode;
};

function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#e69e19',
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default ThemeProvider;
