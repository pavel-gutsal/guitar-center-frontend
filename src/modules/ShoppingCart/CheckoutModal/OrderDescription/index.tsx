import { ShoppintCard } from '../../../../types';
import { SImage, SImageContainer } from '../../Card/Card.style';
import {
  SCart,
  SDescription,
  SDescriptionList,
  SDescriptionTitle,
  SText,
  STitle,
  SVerticalGroup,
} from './OrderDescription.style';

interface Props {
  normilizedList: ShoppintCard[];
}

export const OrderDescription = ({ normilizedList }: Props) => {
  return (
    <SDescription>
      <SDescriptionTitle>Items in Shopping Cart</SDescriptionTitle>
      <SDescriptionList>
        {normilizedList.map((cart: ShoppintCard) => {
          return (
            <SCart key={cart.model}>
              <SImageContainer>
                <SImage src={cart.details?.mainPhoto} />
              </SImageContainer>
              <SVerticalGroup>
                <STitle>{cart.details?.name}</STitle>
                <SText>
                  quantity: <span>{cart.number}</span>
                </SText>
                <SText>
                  price total:
                  <span>
                    {cart.number * (cart.details?.discountedPrice || 0)} $
                  </span>
                </SText>
              </SVerticalGroup>
            </SCart>
          );
        })}
      </SDescriptionList>
    </SDescription>
  );
};
