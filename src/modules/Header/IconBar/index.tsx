import Button from '@mui/material/Button';
import { useAppSelector } from '../../../app/hooks';
import { CartIcon } from '../../../assets/SVG/CartIcon';
import { Heart } from '../../../assets/SVG/Heart';
import { useLikedCartRoute } from '../../../hooks/useLikeCartRoute.hook';
import AccountMenu from '../AccountMenu';
import { StyleIconBar, ButtonSX, SLabel } from './IconBar.styles';

export const IconBar = () => {
  const { userCartExist, cartArray, likedArray } = useAppSelector(
    (state) => state.userCart
  );
  const { likedSectionNavigate, inCartSectionNavigate } = useLikedCartRoute();

  return (
    <StyleIconBar>
      <AccountMenu />
      <Button variant="text" sx={ButtonSX} onClick={inCartSectionNavigate}>
        {userCartExist && cartArray && cartArray.length > 0 && (
          <SLabel>{cartArray.length}</SLabel>
        )}
        <CartIcon />
      </Button>
      <Button variant="text" sx={ButtonSX} onClick={likedSectionNavigate}>
        {userCartExist && likedArray && likedArray.length > 0 && (
          <SLabel>{likedArray.length}</SLabel>
        )}
        <Heart />
      </Button>
    </StyleIconBar>
  );
};
