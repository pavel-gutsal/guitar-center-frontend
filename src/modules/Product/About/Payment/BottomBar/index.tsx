import { CashBack } from '../../../../../assets/SVG/CashBack';
import { CatalogItem } from '../../../../../types';
import { DiscountLabel } from '../DiscountLabel';
import { SBottomBar, SCashBack, SText } from './BottomBar.styles';

interface Props {
  data: CatalogItem;
}

export const BottomBar = ({ data }: Props) => {
  return (
    <SBottomBar>
      {data.discountedPrice < data.totalPrice && (
        <DiscountLabel
          discountedPrice={data.discountedPrice}
          totalPrice={data.totalPrice}
        />
      )}
      <SCashBack>
        <CashBack />
        <SText>CashBack: 20$</SText>
      </SCashBack>
    </SBottomBar>
  );
};
