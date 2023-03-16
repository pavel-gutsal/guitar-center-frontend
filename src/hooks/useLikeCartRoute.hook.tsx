import { isNil } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { ROUTES } from '../constants';
import { modalHandle } from '../features/Auth/AuthReducer';

export const useLikedCartRoute = () => {
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
    } else {
      navigate(ROUTES.LIKED);
    }
  };

  const inCartSectionNavigate = () => {
    if (!userCartExist && isNil(cartArray)) {
      openModalHandler();
    } else {
      navigate(ROUTES.CART);
    }
  };

  return { likedSectionNavigate, inCartSectionNavigate };
};
