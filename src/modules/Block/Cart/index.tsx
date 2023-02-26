import { Rating } from '@mui/material';
import {
  SCart,
  SImage,
  STitle,
  SRating,
  SRatingText,
  SButtonContainer,
  SPrice,
  SPriceCurrent,
  SPriceDiscounted,
  SRatingSX,
  SDiscountTag,
  SBestSellerTag,
  SCartTags,
  SSpecification,
  SSpecificationTitle,
  SSpecificationKey,
  SSpecificationValue,
  SSpecificationDiv,
  SImageContainer,
} from './Cart.styles';
import { CartButtonBuy } from './Buttons/CartButtonBuy';
import { CartButtonHeart } from './Buttons/CartButtonHeart';
import { nameNormalize } from './utils';
import { CatalogItem } from '../../../types';

const calculateDiscount = (discountedPrice, totalPrice) => {
  return Math.round(100 - (discountedPrice / totalPrice) * 100);
};

interface Props {
  product: CatalogItem;
}

export const Cart = ({ product }: Props) => {
  const {
    bestSeller,
    discountedPrice,
    totalPrice,
    mainPhoto,
    rating,
    model,
    shortSpecs,
  } = product;

  return (
    <SCart>
      <SCartTags>
        {bestSeller && <SBestSellerTag>Best Seller</SBestSellerTag>}
        {discountedPrice < totalPrice && (
          <SDiscountTag>{`-${calculateDiscount(
            discountedPrice,
            totalPrice
          )}%`}</SDiscountTag>
        )}
      </SCartTags>
      <SImageContainer>
        <SImage src={mainPhoto} />
      </SImageContainer>
      <SRating>
        <Rating
          name="size-large"
          value={rating}
          precision={0.1}
          sx={SRatingSX}
          readOnly
        />
        <SRatingText>{rating}</SRatingText>
      </SRating>
      <STitle>{nameNormalize(model)}</STitle>
      <SPrice>
        <SPriceCurrent>{`$${discountedPrice}`}</SPriceCurrent>
        {discountedPrice < totalPrice && (
          <SPriceDiscounted>{`$${totalPrice}`}</SPriceDiscounted>
        )}
      </SPrice>
      <SButtonContainer>
        <CartButtonBuy />
        <CartButtonHeart />
      </SButtonContainer>
      <SSpecification>
        <SSpecificationTitle>Specification</SSpecificationTitle>
        {shortSpecs.map((el) => {
          return (
            <SSpecificationDiv key={el[0]}>
              <SSpecificationKey>{`${el[0]}:`}</SSpecificationKey>
              <SSpecificationValue>{el[1]}</SSpecificationValue>
            </SSpecificationDiv>
          );
        })}
      </SSpecification>
    </SCart>
  );
};
