import { calculateDiscount } from '../../../../Block/Cart/utils';
import {
  SDiscount,
  SDiscountTag,
  SSave,
  SSaveRed,
} from './DiscountLabel.style';

interface Props {
  discountedPrice: number;
  totalPrice: number;
  compact?: boolean;
}

export const DiscountLabel = ({
  discountedPrice,
  totalPrice,
  compact,
}: Props) => {
  return (
    <SDiscount compact={compact}>
      <SDiscountTag compact={compact}>{`-${calculateDiscount(
        discountedPrice,
        totalPrice
      )}%`}</SDiscountTag>
      <SSave compact={compact}>
        Save
        <SSaveRed compact={compact}>{`${
          totalPrice - discountedPrice
        }$`}</SSaveRed>
      </SSave>
    </SDiscount>
  );
};
