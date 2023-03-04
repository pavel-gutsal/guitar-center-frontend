import { CashBack } from '../../../../../assets/SVG/CashBack';
import { CatalogItem } from '../../../../../types';
import { calculateDiscount } from '../../../../Block/Cart/utils';
import {
  SBottomBar,
  SDiscount,
  SDiscountTag,
  SSave,
  SSaveRed,
  SCashBack,
  SText,
} from './BottomBar.styles';

interface Props {
  data: CatalogItem;
}

export const BottomBar = ({ data }: Props) => {
  return (
    <SBottomBar>
      {data.discountedPrice < data.totalPrice && (
        <SDiscount>
          <SDiscountTag>{`-${calculateDiscount(
            data.discountedPrice,
            data.totalPrice
          )}%`}</SDiscountTag>
          <SSave>
            Save
            <SSaveRed>{`${data.totalPrice - data.discountedPrice}$`}</SSaveRed>
          </SSave>
        </SDiscount>
      )}
      <SCashBack>
        <CashBack />
        <SText>CashBack: 20$</SText>
      </SCashBack>
    </SBottomBar>
  );
};
