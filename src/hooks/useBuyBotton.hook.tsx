import { isNil } from 'lodash';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { modalHandle } from '../features/Auth/AuthReducer';
import { toggleInCart, toggleLike } from '../features/userCart/UserCartReducer';
import { useUpdateUserCart } from '../services/userCart.service';
import { ModifyOption } from '../types';

export const useBuyBotton = () => {
  const dispatch = useAppDispatch();

  const { user, bearToken } = useAppSelector((state) => state.auth);

  const { updateUserCart, updateUserCartLoading, updateUserCartIsError } =
    useUpdateUserCart(user, bearToken);

  const openModalHandler = () => {
    dispatch(modalHandle(true));
    document.body.style.overflowY = ' hidden';
  };

  const onHeartClick = (model: string) => {
    if (isNil(user) || isNil(bearToken)) {
      openModalHandler();
    } else {
      dispatch(toggleLike(model));
      updateUserCart({ model, option: ModifyOption.ISLIKED });
    }
  };

  const onBuyClick = (model: string) => {
    if (isNil(user) || isNil(bearToken)) {
      openModalHandler();
    } else {
      dispatch(toggleInCart(model));
      updateUserCart({ model, option: ModifyOption.INCART });
    }
  };

  return { onHeartClick, onBuyClick, updateUserCartLoading };
};
