import { Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';
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
import { calculateDiscount, nameNormalize } from './utils';
import { CatalogItem } from '../../../types';
import { ButtonBuy } from '../../../assets/SVG/ButtonBuy';
import { CartButtonHeart } from '../../../assets/SVG/CartButtonHeart';
import { scrollToRouterTab } from '../../utils';

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
    name,
    shortSpecs,
  } = product;

  const navigate = useNavigate();

  const productNavigationHandler = () => {
    scrollToRouterTab({ block: 'end', inline: 'nearest' });
    navigate(`${model}`);
  };

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
      <SImageContainer type="button" onClick={productNavigationHandler}>
        <SImage src={mainPhoto} />
      </SImageContainer>
      <SRating>
        <Rating
          name="size-large"
          value={Number(rating)}
          precision={0.1}
          sx={SRatingSX}
          readOnly
        />
        <SRatingText>{rating}</SRatingText>
      </SRating>
      <STitle onClick={productNavigationHandler}>{nameNormalize(name)}</STitle>
      <SPrice>
        <SPriceCurrent>{`$${discountedPrice}`}</SPriceCurrent>
        {discountedPrice < totalPrice && (
          <SPriceDiscounted>{`$${totalPrice}`}</SPriceDiscounted>
        )}
      </SPrice>
      <SButtonContainer>
        <ButtonBuy text="Add to Cart" />
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
