import { useState } from 'react';
import { isNil } from 'lodash';
import { toast } from 'react-toastify';
import { post } from '../api/common';
import { useAppSelector } from '../app/hooks';
import { PATH } from '../constants';
import { PaymentConfig } from '../types';

export const useStripeConfig = () => {
  const [loading, setLoading] = useState(false);
  const [cancelLoading, setCancelLoading] = useState(false);
  const { user, bearToken } = useAppSelector((state) => state.auth);
  const { cartArray } = useAppSelector((state) => state.userCart);

  const fetchPaymentIntent = async () => {
    if (isNil(bearToken) || isNil(user)) return undefined;

    try {
      setLoading(true);
      const response: PaymentConfig = await post(
        PATH.CHECKOUT_CREATE_INTENT,
        { list: cartArray },
        bearToken
      );

      const { clientSecret, publishableKey } = response;

      if (isNil(clientSecret) && isNil(publishableKey)) {
        throw new Error('failed to fetch client secret');
      }
      setLoading(false);
      return response;
      // return clientSecret;
    } catch (err) {
      console.warn(err);
      toast.error('failed to proccess order', {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'dark',
      });
      setLoading(false);
      return undefined;
    }
  };

  const cancelPayment = async (id: string) => {
    if (isNil(bearToken) || isNil(user)) return undefined;
    setCancelLoading(true);
    try {
      const response: string = await post(
        PATH.CHECKOUT_CANCEL_INTENT,
        { id },
        bearToken
      );

      if (response === 'canceled') {
        setCancelLoading(false);
        toast.info('order canceled', {
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: 'dark',
        });
      } else {
        throw new Error('failed to cancel order!');
      }
      return response;
    } catch (err) {
      console.warn(err);
      toast.error('failed to cancel order', {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: 'dark',
      });
      setCancelLoading(false);
      return undefined;
    }
  };

  return { fetchPaymentIntent, loading, cancelPayment, cancelLoading };
};
