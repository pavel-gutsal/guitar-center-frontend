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
import { ModifiedCatalogItem } from '../../../types';
import { ButtonBuy } from '../../../assets/SVG/ButtonBuy';
import { CartButtonHeart } from '../../../assets/SVG/CartButtonHeart';
import { scrollToView } from '../../utils';
import { SCROLL_ID } from '../../../constants';

interface Props {
  product: ModifiedCatalogItem;
  onHeartClick: (model: string) => void;
  onBuyClick: (model: string) => void;
  updateUserCartLoading: boolean;
}

export const Cart = ({
  product,
  onHeartClick,
  onBuyClick,
  updateUserCartLoading,
}: Props) => {
  const {
    bestSeller,
    discountedPrice,
    totalPrice,
    mainPhoto,
    rating,
    model,
    name,
    shortSpecs,
    inCart,
    liked,
  } = product;
  const navigate = useNavigate();

  const productNavigationHandler = () => {
    scrollToView(SCROLL_ID.PRODUCT_TAB, {
      block: 'end',
      inline: 'nearest',
    });
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
        <ButtonBuy
          text={inCart ? 'In the Cart' : 'Add to Cart'}
          onClick={() => onBuyClick(product.model)}
          inCart={inCart}
          disabled={updateUserCartLoading}
        />
        <CartButtonHeart
          onClick={() => onHeartClick(product.model)}
          liked={liked}
          disabled={updateUserCartLoading}
        />
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
