import CircularProgress from '@mui/material/CircularProgress';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../../app/hooks';
import { resetCart } from '../../../features/userCart/UserCartReducer';
import { useResetUserCart } from '../../../services/userCart.service';
import './Stripe.style.css';
import {
  SForm,
  SButton,
  SGroupHorizontal,
  SButtonCancel,
} from './StripePayment.style';

interface Props {
  closeModalHandler: () => void;
  cancelCloseModalHandler: () => Promise<void>;
  cancelLoading: boolean;
}

export const StripePayment = ({
  closeModalHandler,
  cancelCloseModalHandler,
  cancelLoading,
}: Props) => {
  const dispatch = useAppDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const { resetCartMutation } = useResetUserCart();

  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      if (!stripe || !elements) {
        return;
      }
      setIsProcessing(true);

      const confirmPayment = await stripe.confirmPayment({
        elements,
        confirmParams: {},
        redirect: 'if_required',
      });

      const { paymentIntent, error } = confirmPayment;

      if (paymentIntent && paymentIntent?.status === 'succeeded') {
        toast.success(`Payment successful !`, {
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: 'dark',
        });
        setIsProcessing(false);
        closeModalHandler();

        resetCartMutation();
        dispatch(resetCart());
      }

      if (error) {
        throw new Error(error?.message || 'payment unsuccesful');
      }
    } catch (err) {
      console.error(err);
      toast.error(`Payment failed!`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: 'dark',
      });
      setIsProcessing(false);
    }
  };

  return (
    <SForm id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <SGroupHorizontal>
        <SButton
          type="submit"
          disabled={isProcessing || !stripe || !elements}
          id="submit"
        >
          <span id="button-text">
            {isProcessing ? (
              <CircularProgress color="inherit" size={24} />
            ) : (
              'Pay now'
            )}
          </span>
        </SButton>
        <SButtonCancel
          type="button"
          disabled={cancelLoading}
          onClick={cancelCloseModalHandler}
        >
          {cancelLoading ? (
            <CircularProgress color="inherit" size={24} />
          ) : (
            'Cancel'
          )}
        </SButtonCancel>
      </SGroupHorizontal>
    </SForm>
  );
};
