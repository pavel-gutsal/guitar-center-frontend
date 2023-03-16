import { useNavigate } from 'react-router-dom';
import { ButtonBuy } from '../../../../../assets/SVG/ButtonBuy';
import { CartButtonHeart } from '../../../../../assets/SVG/CartButtonHeart';
import { CatalogItem } from '../../../../../types';
import { Price } from '../Price';
import { SPaymentBar } from './PaymentBar.styles';
import { ROUTES } from '../../../../../constants';
import { useBuyBotton } from '../../../../../hooks/useBuyBotton.hook';
import { useInCart } from '../../../../../hooks/useInCart.hook';

interface Props {
  data: CatalogItem;
}

export const PaymentBar = ({ data }: Props) => {
  const navigate = useNavigate();
  const { inCart, liked } = useInCart(data);

  const { onHeartClick, onBuyClick } = useBuyBotton();

  const buyClick = () => {
    if (inCart) {
      navigate(ROUTES.CART);
    } else {
      onBuyClick(data.model);
    }
  };

  return (
    <SPaymentBar>
      <Price
        discountedPrice={data.discountedPrice}
        totalPrice={data.totalPrice}
      />
      <ButtonBuy
        text={inCart ? 'In cart' : 'Buy'}
        theme="green"
        inCart={inCart}
        onClick={buyClick}
      />
      <ButtonBuy
        text="Purchase in credit"
        theme="blue"
        onClick={() => navigate(ROUTES.CART)}
      />
      <CartButtonHeart
        theme="rounded"
        onClick={() => onHeartClick(data.model)}
        liked={liked}
      />
    </SPaymentBar>
  );
};
