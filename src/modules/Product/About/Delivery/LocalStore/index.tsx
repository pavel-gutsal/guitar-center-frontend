import { IMAGES } from '../../../../../assets';
import { Store } from '../type';
import {
  SCity,
  SGroupLeft,
  SGroupRight,
  SGroupUp,
  SImage,
  SBuilding,
  SShopWrapper,
  SStreet,
  SText,
  SGridHorizontal,
  STextSmall,
} from './LocalStore.styles';

interface Props {
  store: Store;
}

export const LocalStore = ({ store }: Props) => {
  return (
    <SShopWrapper>
      <SGroupUp>
        <SCity>{store.city},</SCity>
        <SStreet>{store.street}</SStreet>
      </SGroupUp>
      <SBuilding>Shop</SBuilding>
      <SGridHorizontal>
        <SGroupLeft>
          <SImage src={IMAGES.DELIVERY.AVAILABLE} />
          <SText>Pick up Today</SText>
        </SGroupLeft>
        <SGroupRight>
          <STextSmall>{`from ${store.openHours.from}`}</STextSmall>
          <STextSmall>{`till  ${store.openHours.till}`}</STextSmall>
        </SGroupRight>
      </SGridHorizontal>
    </SShopWrapper>
  );
};
