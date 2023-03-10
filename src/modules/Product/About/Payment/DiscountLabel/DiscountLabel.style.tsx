import styled from 'styled-components';
import { colors, devices } from '../../../../../Theme';
import { Flex } from '../UpperBar/UpperBar.styles';

interface CompactProps {
  compact?: boolean;
}

export const SDiscount = styled.div<CompactProps>`
  display: grid;
  grid-template-columns: ${({ compact }) =>
    compact ? '30px 80px' : '40px 100px'};
  width: ${({ compact }) => (compact ? '110px' : '140px')};
  height: ${({ compact }) => (compact ? '20px' : '26px')};
  transform: ${({ compact }) =>
    compact ? 'translateX(40px)' : 'translateX(0)'};

  @media screen and ${devices.mobileM} {
    display: none;
  }
`;

export const SDiscountTag = styled(Flex)<CompactProps>`
  background: ${colors.brigthRed};
  color: white;
  font-size: ${({ compact }) => (compact ? '11px' : '14px')};
  font-weight: 500;
  border-radius: 15px 0 0 15px;
`;

export const SSave = styled(Flex)<CompactProps>`
  font-size: ${({ compact }) => (compact ? '12px' : '13px')};
  font-weight: 500;
  color: #363636;
  border: 1px solid #d1d1d1;
  border-left: none;
  border-radius: 0 15px 15px 0;
`;

export const SSaveRed = styled.h3<CompactProps>`
  font-size: ${({ compact }) => (compact ? '12px' : '13px')};
  font-weight: 500;
  color: ${colors.brigthRed};
  padding-left: 4px;
`;
