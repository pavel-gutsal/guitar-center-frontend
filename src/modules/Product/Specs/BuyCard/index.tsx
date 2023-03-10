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
  SGroupCompact,
  SGroupCompactFlex,
} from './BuyCard.styles';
import { ButtonBuy } from '../../../../assets/SVG/ButtonBuy';
import { Price } from '../../About/Payment/Price';
import { CartButtonHeart } from '../../../../assets/SVG/CartButtonHeart';
import { CashBack } from '../../../../assets/SVG/CashBack';
import { IsAvailableLabel } from '../../About/Payment/IsAvailableLabel';
import { RatingLabel } from '../../About/Payment/RatingLabel';
import { DiscountLabel } from '../../About/Payment/DiscountLabel';

interface Props {
  briefData: CatalogItem;
  compact?: boolean;
}

export const BuyCard = ({ briefData, compact }: Props) => {
  return (
    <SBuyCard>
      {compact ? (
        <>
          <SGroupCompact compact={compact}>
            <SImageWrapper compact={compact}>
              <SImage src={briefData.mainPhoto} />
            </SImageWrapper>
            <SModelTitle compact={compact}>{briefData.name}</SModelTitle>
          </SGroupCompact>
          <SGroupCompactFlex>
            <IsAvailableLabel />
            <RatingLabel rating={briefData.rating} />
          </SGroupCompactFlex>
        </>
      ) : (
        <>
          <SImageWrapper>
            <SImage src={briefData.mainPhoto} />
          </SImageWrapper>
          <SModelTitle>{briefData.name}</SModelTitle>
        </>
      )}
      <SGroup>
        <Price
          discountedPrice={briefData.discountedPrice}
          totalPrice={briefData.totalPrice}
        />
        <CartButtonHeart theme="rounded" />
      </SGroup>
      <SButtonBuyWrapper>
        <ButtonBuy text="Buy" theme="green" />
      </SButtonBuyWrapper>
      <SGroupCompact compact={compact}>
        <SCashBack compact={compact}>
          <CashBack />
          <SText>CashBack: 20$</SText>
        </SCashBack>
        {briefData.discountedPrice > briefData.totalPrice && (
          <DiscountLabel
            compact={compact}
            discountedPrice={briefData.discountedPrice}
            totalPrice={briefData.totalPrice}
          />
        )}
      </SGroupCompact>
    </SBuyCard>
  );
};
