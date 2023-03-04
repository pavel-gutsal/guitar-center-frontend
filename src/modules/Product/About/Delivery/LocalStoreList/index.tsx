import { useState } from 'react';
import { DeliveryButtonRight } from '../../../../../assets/images/Delivery/arrowRight';
import { DeliveryButtonLeft } from '../../../../../assets/images/Delivery/DeliveryButtonLeft';
import { LocalStore } from '../LocalStore';
import { LOCAL_STORES as stores } from '../../../../../constants';
import {
  SLocalStoreContainer,
  SLocalStoreList,
  SLocalStoresWrapper,
} from './LocalStoreList.styles';

const totalLength = Math.floor(stores.length / 2 - 1);

export const LocalStoreList = () => {
  const [position, setPosition] = useState(0);

  const rightClick = () => {
    if (position >= totalLength) return;
    setPosition((prev) => prev + 1);
  };

  const leftClick = () => {
    if (position === 0) return;
    setPosition((prev) => prev - 1);
  };

  return (
    <SLocalStoresWrapper>
      <DeliveryButtonLeft onClick={leftClick} disabled={position === 0} />
      <SLocalStoreContainer>
        <SLocalStoreList position={position}>
          {stores.map((store) => {
            return <LocalStore store={store} key={store.street} />;
          })}
        </SLocalStoreList>
      </SLocalStoreContainer>
      <DeliveryButtonRight
        onClick={rightClick}
        disabled={position >= totalLength}
      />
    </SLocalStoresWrapper>
  );
};
