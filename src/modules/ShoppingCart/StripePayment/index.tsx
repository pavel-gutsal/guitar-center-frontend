import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
import { toast } from 'react-toastify';
import './Stripe.style.css';
import { SForm, SButton } from './StripePayment.style';

export const StripePayment = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `http://localhost:5173/cart`,
      },
    });

    if (error) {
      toast.error('payment failed', {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'dark',
      });
    }

    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else {
      setMessage('An unexpected error occured.');
    }

    toast.success('payment proccessed successfully', {
      position: toast.POSITION.TOP_RIGHT,
      theme: 'dark',
    });
    setIsProcessing(false);
  };

  return (
    <SForm id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <SButton
        type="submit"
        disabled={isProcessing || !stripe || !elements}
        id="submit"
      >
        <span id="button-text">
          {isProcessing ? 'Processing ... ' : 'Pay now'}
        </span>
      </SButton>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </SForm>
  );
};
