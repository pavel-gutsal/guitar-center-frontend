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

declare module '@mui/material/styles' {
  interface Palette {
    orange: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    orange?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    orange: true;
  }
}

declare module '@mui/material/Pagination' {
  interface PaginationPropsColorOverrides {
    orange: true;
  }
}

declare module '@mui/material/Select' {
  interface SelectPropsColorOverrides {
    orange: true;
  }
}

interface Props {
  children: React.ReactNode;
}

export const MUIThemeProvider = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
