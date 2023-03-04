import { ButtonBuy } from '../../../../../assets/SVG/ButtonBuy';
import { CartButtonHeart } from '../../../../../assets/SVG/CartButtonHeart';
import { CatalogItem } from '../../../../../types';
import { Price } from '../Price';
import { SPaymentBar } from './PaymentBar.styles';

interface Props {
  data: CatalogItem;
}

export const PaymentBar = ({ data }: Props) => {
  return (
    <SPaymentBar>
      <Price
        discountedPrice={data.discountedPrice}
        totalPrice={data.totalPrice}
      />
      <ButtonBuy text="Buy" theme="green" />
      <ButtonBuy text="Purchase in credit" theme="blue" />
      <CartButtonHeart theme="rounded" />
    </SPaymentBar>
  );
};
