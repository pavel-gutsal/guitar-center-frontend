import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DeleteButton } from '../../../assets/SVG/DeleteButton';
import { ShoppintCard } from '../../../types';
import {
  SButtonNumber,
  SCard,
  SHorizontalGroup,
  SImage,
  SImageContainer,
  SNumber,
  SNumberGroup,
  SPrice,
  SPriceCurrent,
  SPriceDiscounted,
  STitle,
  SVerticalGroup,
  SButton,
} from './Card.style';

interface Props {
  cart: ShoppintCard;
  deleteHandler: (model: string) => void;
  increaseNumberHandler: (cart: ShoppintCard) => void;
  decreaseNumberHandler: (cart: ShoppintCard) => void;
}

export const Card = ({
  cart,
  deleteHandler,
  increaseNumberHandler,
  decreaseNumberHandler,
}: Props) => {
  const [deleted, setDeleted] = useState(false);
  const navigate = useNavigate();

  const productNavigationHandler = () => {
    window.scrollTo(0, 0);
    if (!cart.details?.model) return;
    navigate(`${cart.details.model}`);
  };

  const deleteAnimationHandler = () => {
    setDeleted(true);
    setTimeout(() => {
      deleteHandler(cart.name);
    }, 400);
  };

  return (
    <SCard deleted={deleted}>
      <SImageContainer type="button" onClick={productNavigationHandler}>
        <SImage src={cart.details?.mainPhoto} />
      </SImageContainer>
      <SVerticalGroup>
        <SButton onClick={productNavigationHandler}>
          <STitle>{cart.details?.name}</STitle>
        </SButton>
        <SHorizontalGroup>
          <SNumberGroup>
            <SButtonNumber
              disabled={cart.number === 0}
              onClick={() => decreaseNumberHandler(cart)}
            >
              -
            </SButtonNumber>
            <SNumber>{cart.number}</SNumber>
            <SButtonNumber onClick={() => increaseNumberHandler(cart)}>
              +
            </SButtonNumber>
          </SNumberGroup>
          <SPrice>
            {cart &&
              cart.details?.totalPrice &&
              cart.details?.discountedPrice &&
              cart.details.totalPrice > cart.details.discountedPrice && (
                <SPriceCurrent>{`${cart.details?.totalPrice}$`}</SPriceCurrent>
              )}
            <SPriceDiscounted>{`${cart.details?.discountedPrice}$`}</SPriceDiscounted>
          </SPrice>
        </SHorizontalGroup>
      </SVerticalGroup>
      <DeleteButton onClick={deleteAnimationHandler} />
    </SCard>
  );
};
