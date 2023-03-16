import { useMutation } from '@tanstack/react-query';
import { post } from '../api/common';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { PATH } from '../constants';
import { Cart } from '../types';

export const useCheckout = () => {
  const path = PATH.CHECKOUT;
  const dispatch = useAppDispatch();
  const { bearToken } = useAppSelector((state) => state.auth);

  const {
    mutate: checkout,
    isLoading,
    isError,
    error,
  } = useMutation((data: Cart[]) => post(path, { list: data }, bearToken), {
    onSuccess: (response: any) => {
      console.log(response.url);
    },
  });

  return { checkout };
};
