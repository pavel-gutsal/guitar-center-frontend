import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom'; // change for hash
import { ThemeProvider } from 'styled-components';
import { RouterContainer } from './navigation/RouterContainer';
import { theme } from './Theme/Theme';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <RouterContainer />
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};
