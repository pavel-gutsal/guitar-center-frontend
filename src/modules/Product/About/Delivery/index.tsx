import { Accordion } from './Accordion';
import { SDelivery, SDeliveryServiceContainer } from './Delivery.styles';
import { UpperBar } from './UpperBar';
import { LocalStoreList } from './LocalStoreList';
import { deliveryOption, deliveryServiceInfo } from '../../../../constants';
import { DeliveryService } from './DeliveryServices';

export const Delivery = () => {
  return (
    <SDelivery>
      <UpperBar />
      <Accordion content={deliveryOption[0]}>
        <LocalStoreList />
      </Accordion>
      <Accordion content={deliveryOption[1]} height="160px">
        <SDeliveryServiceContainer>
          <DeliveryService content={deliveryServiceInfo[0]} />
          <DeliveryService content={deliveryServiceInfo[1]} />
        </SDeliveryServiceContainer>
      </Accordion>
      <Accordion content={deliveryOption[2]}>
        <SDeliveryServiceContainer>
          <DeliveryService content={deliveryServiceInfo[2]} />
          <DeliveryService content={deliveryServiceInfo[3]} />
        </SDeliveryServiceContainer>
      </Accordion>
    </SDelivery>
  );
};
