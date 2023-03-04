import { DeliveryServiceInfo } from '../type';
import {
  SDeliveryServecie,
  SImage,
  SPrice,
  SText,
  SThinText,
} from './DeliveryService.styles';

interface Props {
  content: DeliveryServiceInfo;
}

export const DeliveryService = ({ content }: Props) => {
  return (
    <SDeliveryServecie>
      <SText>{content.title}</SText>
      <SImage src={content.icon} />
      <SThinText>{content.when}</SThinText>
      <SPrice>{content.price}</SPrice>
    </SDeliveryServecie>
  );
};
