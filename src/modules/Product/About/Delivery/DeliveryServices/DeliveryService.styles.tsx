import styled from 'styled-components';
import { colors } from '../../../../../Theme';

export const SDeliveryServecie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  width: 100px;
  height: fit-content;
  border-radius: 10px;
  gap: 5px;
  border: 1px solid ${colors.deliveryGray};
`;

export const SText = styled.h3`
  text-align: center;
  font-size: 13px;
  font-weight: 500;
`;

export const SImage = styled.img`
  height: 30px;
  max-width: 60px;
`;

export const SThinText = styled.p`
  font-size: 12px;
  color: ${colors.greyTextUnhighlighted};
`;

export const SPrice = styled.p`
  font-size: 13px;
  font-weight: 500;
`;