import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HashRouter } from 'react-router-dom'; // change for hash
import { ThemeProvider } from 'styled-components';
import { MUIThemeProvider } from './MUIThemeProvider';
import { RouterContainer } from './navigation/RouterContainer';
import { theme } from './Theme/Theme';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MUIThemeProvider>
        <HashRouter>
          <QueryClientProvider client={queryClient}>
            <RouterContainer />
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
          </QueryClientProvider>
        </HashRouter>
      </MUIThemeProvider>
    </ThemeProvider>
  );
};
