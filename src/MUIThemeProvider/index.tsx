import { createTheme, ThemeProvider } from '@mui/material/styles';
import { colors } from '../Theme';

const theme = createTheme({
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: `${colors.whitish}`,
          },
          '&.Mui-selected': {
            backgroundColor: `${colors.brightOrange}`,
            color: 'white',
          },
          '&.Mui-selected:hover': {
            backgroundColor: `${colors.brightOrange}`,
            color: 'white',
          },
        },
      },
    },
  },
  palette: {
    orange: {
      main: `${colors.brightOrange}`,
    },
  },
});

interface Props {
  children: React.ReactNode;
}

export const MUIThemeProvider = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
