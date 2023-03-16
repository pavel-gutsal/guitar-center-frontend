import { isNil } from 'lodash';
import { useMemo } from 'react';
import { useAppSelector } from '../app/hooks';
import { Cart, CatalogItem } from '../types';

const inCartHandler = (
  userCartExist: boolean,
  cartArray: Cart[] | null,
  data: CatalogItem
) => {
  if (!userCartExist || isNil(cartArray) || cartArray.length === 0) {
    return false;
  }

  return !!cartArray.find((cart: Cart) => data.model === cart.name);
};

const likedHandler = (
  userCartExist: boolean,
  likedArray: string[] | null,
  data: CatalogItem
) => {
  if (!userCartExist || isNil(likedArray) || likedArray.length === 0) {
    return false;
  }

  return !!likedArray.includes(data.model);
};

export const useInCart = (data: CatalogItem) => {
  const { userCartExist, cartArray, likedArray } = useAppSelector(
    (state) => state.userCart
  );

  const inCart = useMemo(
    () => inCartHandler(userCartExist, cartArray, data),
    [userCartExist, cartArray, data]
  );

  const liked = useMemo(
    () => likedHandler(userCartExist, likedArray, data),
    [userCartExist, likedArray, data]
  );

  return { inCart, liked };
};
