import { CatalogItem } from '../../../../types';
import {
  SBuyCard,
  SImageWrapper,
  SImage,
  SModelTitle,
  SButtonBuyWrapper,
  SGroup,
  SCashBack,
  SText,
} from './BuyCard.styles';
import { ButtonBuy } from '../../../../assets/SVG/ButtonBuy';
import { Price } from '../../About/Payment/Price';
import { CartButtonHeart } from '../../../../assets/SVG/CartButtonHeart';
import { CashBack } from '../../../../assets/SVG/CashBack';

interface Props {
  briefData: CatalogItem;
}

export const BuyCard = ({ briefData }: Props) => {
  return (
    <SBuyCard>
      <SImageWrapper>
        <SImage src={briefData.mainPhoto} />
      </SImageWrapper>
      <SModelTitle>{briefData.model}</SModelTitle>
      <SGroup>
        <Price
          discountedPrice={briefData.discountedPrice}
          totalPrice={briefData.totalPrice}
        />
        <CartButtonHeart theme="rounded" />
      </SGroup>
      <SCashBack>
        <CashBack />
        <SText>CashBack: 20$</SText>
      </SCashBack>
      <SButtonBuyWrapper>
        <ButtonBuy text="Buy" theme="green" />
      </SButtonBuyWrapper>
    </SBuyCard>
  );
};
