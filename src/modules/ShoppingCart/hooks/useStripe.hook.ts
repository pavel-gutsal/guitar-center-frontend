import { isNil } from 'lodash';
import { toast } from 'react-toastify';
import { post } from '../../../api/common';
import { useAppSelector } from '../../../app/hooks';
import { PATH } from '../../../constants';
import { PaymentConfig } from '../../../types';

export const useStripe = () => {
  const { user, bearToken } = useAppSelector((state) => state.auth);
  const { cartArray } = useAppSelector((state) => state.userCart);

  const fetchPaymentIntent = async () => {
    if (isNil(bearToken) || isNil(user)) return undefined;

    try {
      const response: PaymentConfig = await post(
        PATH.CHECKOUT,
        { list: cartArray },
        bearToken
      );

      const { clientSecret, publishableKey } = response;

      if (isNil(clientSecret) && isNil(publishableKey)) {
        throw new Error('failed to fetch client secret');
      }

      return response;
      // return clientSecret;
    } catch (err) {
      console.warn(err);
      toast.error('failed to proccess order', {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'dark',
      });
      return undefined;
    }
  };

  return { fetchPaymentIntent };
};
