import styled from 'styled-components';
import { colors, devices } from '../../../../../Theme';

export const SBottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const SDiscount = styled.div`
  display: grid;
  grid-template-columns: 40px 100px;
  width: 140px;
  height: 26px;

  @media screen and ${devices.mobileM} {
    display: none;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const SDiscountTag = styled(Flex)`
  background: ${colors.brigthRed};
  color: white;
  font-size: 14px;
  font-weight: 500;
  border-radius: 15px 0 0 15px;
`;

export const SSave = styled(Flex)`
  font-size: 13px;
  font-weight: 500;
  color: #363636;
  border: 1px solid #d1d1d1;
  border-left: none;
  border-radius: 0 15px 15px 0;
`;

export const SSaveRed = styled.h3`
  font-size: 13px;
  font-weight: 500;
  color: ${colors.brigthRed};
  padding-left: 4px;
`;

export const SCashBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const SText = styled.h3`
  font-size: 13px;
  color: gray;
`;
