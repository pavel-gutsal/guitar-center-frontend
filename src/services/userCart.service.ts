import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { isNil } from 'lodash';
import { get, patch } from '../api/common';
import { useAppDispatch } from '../app/hooks';
import { PATH } from '../constants';
import { modifyCart } from '../features/userCart/UserCartReducer';
import { Cart, ModifyOption, UserCart } from '../types';

export const useGetUserCart = (name: string | null, token: string | null) => {
  const dispatch = useAppDispatch();

  const { data, isLoading, error, isError } = useQuery({
    queryKey: [name, 'userCart'],
    queryFn: () => get<UserCart>(PATH.USERCART, token),
    enabled: !isNil(name) && !isNil(token),
    onSuccess: (response: UserCart) => {
      if (!isNil(response?.cart) && !isNil(response?.liked)) {
        dispatch(
          modifyCart({
            exist: true,
            cart: response.cart,
            liked: response.liked,
          })
        );
      }
    },
  });

  return { data, isLoading, error, isError };
};

interface Props {
  model: string;
  option: ModifyOption;
}

export const useUpdateUserCart = (
  name: string | null,
  token: string | null
) => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  const {
    mutate: updateUserCart,
    isLoading: updateUserCartLoading,
    isError: updateUserCartIsError,
    error,
  } = useMutation({
    mutationFn: ({ model, option }: Props) =>
      patch<Props>(PATH.USERCART, { model, option }, token),
    onMutate: () => {
      const previousState: UserCart | undefined = queryClient.getQueryData([
        name,
        'userCart',
      ]);
      return { previousState };
    },
    onError: (_err, _, context) => {
      if (isNil(context) || isNil(context.previousState)) return;
      queryClient.setQueryData([name, 'userCart'], context.previousState);
      const { cart, liked } = context?.previousState || {};

      if (!isNil(cart) && !isNil(liked)) {
        dispatch(
          modifyCart({
            exist: true,
            cart,
            liked,
          })
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [name, 'userCart'] });
    },
  });

  return {
    updateUserCart,
    updateUserCartLoading,
    updateUserCartIsError,
    error,
  };
};

export const useUpdateFullyUserCart = (
  name: string | null,
  token: string | null
) => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  const {
    mutate: updateUserCartNumber,
    isLoading: updateUserCartNumberLoading,
    isError: updateUserCartNumberIsError,
    error,
  } = useMutation({
    mutationFn: (cart: Cart) =>
      patch<Cart>(PATH.UPDATE_CART_NUMBER, cart, token),
    onMutate: () => {
      const previousState: UserCart | undefined = queryClient.getQueryData([
        name,
        'userCart',
      ]);
      return { previousState };
    },
    onError: (_err, _, context) => {
      if (isNil(context) || isNil(context.previousState)) return;
      queryClient.setQueryData([name, 'userCart'], context.previousState);
      const { cart, liked } = context?.previousState || {};

      if (!isNil(cart) && !isNil(liked)) {
        dispatch(
          modifyCart({
            exist: true,
            cart,
            liked,
          })
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [name, 'userCart'] });
    },
  });

  return {
    updateUserCartNumber,
    updateUserCartNumberLoading,
    updateUserCartNumberIsError,
    error,
  };
};
