import { useEffect } from 'react';
import { IMAGES } from '../../../assets';
import { ROUTES } from '../../../constants';
import { SEmptyCart, SImage, SLinkCart, STitleCart } from './EmptyCart.styles';

export const EmptyCart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SEmptyCart>
      <SImage src={IMAGES.EMPTY_NOTFOUND.EMPTY_CART} alt="empty cart" />
      <STitleCart>Your cart is empty</STitleCart>
      <SLinkCart to={ROUTES.PHONES}>Back to products</SLinkCart>
    </SEmptyCart>
  );
};
