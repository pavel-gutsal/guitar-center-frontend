import Button from '@mui/material/Button';
import { CartIcon } from '../../../SVG/CartIcon';
import { Heart } from '../../../SVG/Heart';
import AccountMenu from '../RegisterModal';
import { StyleIconBar, ButtonSX } from './IconBar.styles';

export const IconBar = () => {
  return (
    <StyleIconBar>
      <AccountMenu />
      <Button variant="text" sx={ButtonSX}>
        <CartIcon />
      </Button>
      <Button variant="text" sx={ButtonSX}>
        <Heart />
      </Button>
    </StyleIconBar>
  );
};
