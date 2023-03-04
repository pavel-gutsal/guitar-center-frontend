import { ButtonBuy } from '../../../../../assets/SVG/ButtonBuy';
import { CartButtonHeart } from '../../../../../assets/SVG/CartButtonHeart';
import { CatalogItem } from '../../../../../types';
import { calculateDiscount } from '../../../../Block/Cart/utils';
import {
  SBeforeDiscount,
  SDiscountTag,
  SGroupHorizontal,
  SGroupVertical,
  SPaymentBar,
  STotalPrice,
} from './PaymentBar.styles';

interface Props {
  data: CatalogItem;
}

export const PaymentBar = ({ data }: Props) => {
  return (
    <SPaymentBar>
      <SGroupVertical>
        <SGroupHorizontal>
          {data.discountedPrice < data.totalPrice && (
            <SBeforeDiscount>{data.totalPrice} $</SBeforeDiscount>
          )}
          {data.discountedPrice < data.totalPrice && (
            <SDiscountTag>{`-${calculateDiscount(
              data.discountedPrice,
              data.totalPrice
            )}%`}</SDiscountTag>
          )}
        </SGroupHorizontal>
        <STotalPrice>{data.discountedPrice}</STotalPrice>
      </SGroupVertical>
      <ButtonBuy text="Buy" theme="green" />
      <ButtonBuy text="Purchase in credit" theme="blue" />
      <CartButtonHeart theme="rounded" />
    </SPaymentBar>
  );
};
