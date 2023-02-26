import Button from '@mui/material/Button';
import { CartIcon } from '../../../assets/SVG/CartIcon';
import { Heart } from '../../../assets/SVG/Heart';
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
