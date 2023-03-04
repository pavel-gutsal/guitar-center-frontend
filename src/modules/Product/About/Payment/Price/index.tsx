import { calculateDiscount } from '../../../../Block/Cart/utils';
import { SGroupHorizontal } from '../PaymentBar/PaymentBar.styles';
import {
  SBeforeDiscount,
  SDiscountTag,
  SPrice,
  STotalPrice,
} from './Price.styles';

interface Props {
  discountedPrice: number;
  totalPrice: number;
}

export const Price = ({ discountedPrice, totalPrice }: Props) => {
  return (
    <SPrice>
      <SGroupHorizontal>
        {discountedPrice < totalPrice && (
          <SBeforeDiscount>{totalPrice} $</SBeforeDiscount>
        )}
        {discountedPrice < totalPrice && (
          <SDiscountTag>{`-${calculateDiscount(
            discountedPrice,
            totalPrice
          )}%`}</SDiscountTag>
        )}
      </SGroupHorizontal>
      <STotalPrice>{discountedPrice}</STotalPrice>
    </SPrice>
  );
};
