import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { isNil } from 'lodash';
import { useState, useEffect } from 'react';
import { CloseButton } from '../../../assets/SVG/CloseButton';
import { useStripe } from '../hooks/useStripe.hook';
import { StripePayment } from '../StripePayment';
import {
  SWrapper,
  SBackground,
  SCheckoutModal,
  SHeader,
  SHeaderTitle,
  SContent,
} from './CheckoutModal.style';

interface Props {
  setCheckoutModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CheckoutModal = ({ setCheckoutModalOpen }: Props) => {
  const [fadeOut, setFadeOut] = useState(false);

  const closeModalHandle = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCheckoutModalOpen(false);
      setFadeOut(false);
    }, 400);
  };

  const [stripePromise, setStripePromise] = useState<Stripe | null>(null);
  const [clientSecret, setClientSecret] = useState<string>('');
  const { fetchPaymentIntent } = useStripe();

  const createPaymentInstance = async () => {
    const response = await fetchPaymentIntent();

    if (
      isNil(response) ||
      isNil(response?.clientSecret) ||
      isNil(response?.publishableKey)
    )
      return;

    setStripePromise(await loadStripe(response.publishableKey));

    setClientSecret(response.clientSecret);
  };

  useEffect(() => {
    createPaymentInstance();
  }, []);

  console.log('rerender');

  return (
    <SWrapper>
      <SBackground onClick={closeModalHandle} fadeOut={fadeOut} />
      <SCheckoutModal fadeOut={fadeOut}>
        <SHeader>
          <SHeaderTitle>payment form</SHeaderTitle>
          <CloseButton onClick={closeModalHandle} />
        </SHeader>
        <SContent>
          {clientSecret && stripePromise && (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <StripePayment />
            </Elements>
          )}
        </SContent>
      </SCheckoutModal>
    </SWrapper>
  );
};
