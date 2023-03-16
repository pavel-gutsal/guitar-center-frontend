import Button from '@mui/material/Button';
import { isNil } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { CartIcon } from '../../../assets/SVG/CartIcon';
import { Heart } from '../../../assets/SVG/Heart';
import { ROUTES } from '../../../constants';
import { modalHandle } from '../../../features/Auth/AuthReducer';
import AccountMenu from '../AccountMenu';
import { StyleIconBar, ButtonSX, SLabel } from './IconBar.styles';

export const IconBar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { userCartExist, cartArray, likedArray } = useAppSelector(
    (state) => state.userCart
  );
  const openModalHandler = () => {
    dispatch(modalHandle(true));
    document.body.style.overflowY = ' hidden';
  };

  const likedSectionNavigate = () => {
    if (!userCartExist && isNil(likedArray)) {
      openModalHandler();
    }
    navigate(ROUTES.LIKED);
  };

  const inCartSectionNavigate = () => {
    if (!userCartExist && isNil(cartArray)) {
      openModalHandler();
    }
    navigate(ROUTES.CART);
  };

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
