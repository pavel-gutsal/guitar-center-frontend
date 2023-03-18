import { useState, useEffect, useMemo } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { isNil } from 'lodash';
import { CloseButton } from '../../../assets/SVG/CloseButton';
import { StripePayment } from '../StripePayment';
import {
  SWrapper,
  SBackground,
  SCheckoutModal,
  SHeader,
  SHeaderTitle,
  SContent,
  SPayment,
  STotalPrice,
  SText,
  STextPrice,
} from './CheckoutModal.style';
import { PaymentConfig, ShoppintCard } from '../../../types';
import { useStripeConfig } from '../../../hooks/useStripeConfig.hook';
import { OrderDescription } from './OrderDescription';

interface Props {
  setCheckoutModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  stripeConfig: PaymentConfig;
  normilizedList: ShoppintCard[];
}

export const CheckoutModal = ({
  setCheckoutModalOpen,
  stripeConfig,
  normilizedList,
}: Props) => {
  const [fadeOut, setFadeOut] = useState(false);
  const { cancelPayment, cancelLoading } = useStripeConfig();

  const totalPrice = useMemo(() => {
    return normilizedList.reduce((prev, curr) => {
      return curr.number * (curr.details?.discountedPrice || 0) + prev;
    }, 0);
  }, [normilizedList]);

  const closeModalHandler = () => {
    setFadeOut(true);
    document.body.style.overflowY = 'auto';
    setTimeout(() => {
      setCheckoutModalOpen(false);
      setFadeOut(false);
    }, 400);
  };

  const cancelPaymentIntent = async () => {
    if (!isNil(stripeConfig?.paymentID)) {
      await cancelPayment(stripeConfig.paymentID);
    }
  };

  const cancelCloseModalHandler = async () => {
    await cancelPaymentIntent();
    closeModalHandler();
  };

  const [stripePromise, setStripePromise] = useState<Stripe | null | undefined>(
    null
  );
  const [clientSecret] = useState<string | undefined>(
    stripeConfig.clientSecret
  );

  const asyncAwaitFoo = async () => {
    if (isNil(stripeConfig) || isNil(stripeConfig.publishableKey)) return;
    const response = await loadStripe(stripeConfig.publishableKey);
    if (!isNil(response)) setStripePromise(response);
  };

  useEffect(() => {
    asyncAwaitFoo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SWrapper>
      <SBackground onClick={cancelCloseModalHandler} fadeOut={fadeOut} />
      <SCheckoutModal fadeOut={fadeOut}>
        <SHeader>
          <SHeaderTitle>payment form</SHeaderTitle>
          <CloseButton onClick={cancelCloseModalHandler} />
        </SHeader>
        <SContent>
          <OrderDescription normilizedList={normilizedList} />
          <SPayment>
            {clientSecret && stripePromise && (
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <StripePayment
                  closeModalHandler={closeModalHandler}
                  cancelCloseModalHandler={cancelCloseModalHandler}
                  cancelLoading={cancelLoading}
                />
              </Elements>
            )}
            <STotalPrice>
              <SText>Total Price</SText>
              <STextPrice>{`${totalPrice} $`}</STextPrice>
            </STotalPrice>
          </SPayment>
        </SContent>
      </SCheckoutModal>
    </SWrapper>
  );
};
