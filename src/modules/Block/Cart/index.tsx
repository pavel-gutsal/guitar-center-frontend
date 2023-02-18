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
} from './Cart.styles';
import { CartButtonBuy } from './Buttons/CartButtonBuy';
import { CartButtonHeart } from './Buttons/CartButtonHeart';
import { CatalogItem } from '../../../db';
import { nameNormalize } from './utils';

interface Props {
  product: CatalogItem;
}

export const Cart = ({ product }: Props) => {
  const currentPriceHandler = () => {
    if (product.discount) {
      return product.totalPrice - product.totalPrice * product.discount;
    }
    return product.totalPrice;
  };

  return (
    <SCart>
      <SCartTags>
        {product.bestSeller && <SBestSellerTag>Best Seller</SBestSellerTag>}
        {product.discount && (
          <SDiscountTag>{`-${product.discount * 100}%`}</SDiscountTag>
        )}
      </SCartTags>
      <SImage image={product.mainPhoto} />
      <SRating>
        <Rating
          name="size-large"
          value={product.rating}
          precision={0.1}
          sx={SRatingSX}
          readOnly
        />
        <SRatingText>{product.rating}</SRatingText>
      </SRating>
      <STitle>{nameNormalize(product.model)}</STitle>
      <SPrice>
        <SPriceCurrent>{`$${currentPriceHandler()}`}</SPriceCurrent>
        {product.discount && (
          <SPriceDiscounted>{`$${product.totalPrice}`}</SPriceDiscounted>
        )}
      </SPrice>
      <SButtonContainer>
        <CartButtonBuy />
        <CartButtonHeart />
      </SButtonContainer>
      <SSpecification>
        <SSpecificationTitle>Specification</SSpecificationTitle>
        {product.ShortSpecs.map((el) => {
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
