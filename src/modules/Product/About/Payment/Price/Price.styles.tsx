import styled from 'styled-components';
import { colors } from '../../../../../Theme';

export const SPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const STotalPrice = styled.h3`
  font-size: 32px;
  font-weight: 600;
  color: #292929;

  &::after {
    content: ' $';
    font-size: 24px;
  }
`;

export const SBeforeDiscount = styled.h3`
  font-size: 14px;
  color: #9c9c9c;
  text-decoration: line-through;
`;

export const SDiscountTag = styled.h3`
  font-size: 11px;
  color: white;
  display: flex;
  width: fit-content;
  height: fit-content;
  padding: 3px 5px;
  border-radius: 15px;
  border: none;
  background: ${colors.brigthRed};
`;
