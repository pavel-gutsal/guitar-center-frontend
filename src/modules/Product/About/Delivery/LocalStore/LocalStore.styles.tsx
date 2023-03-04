import styled from 'styled-components';
import { colors, devices } from '../../../../../Theme';
import { Flex } from '../../Payment/UpperBar/UpperBar.styles';

export const SShopWrapper = styled.div`
  padding: 12px;
  width: 100%;
  height: 105px;
  border: 1px solid #c4c4c4;
  border-radius: 10px;

  @media screen and ${devices.laptopS} {
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const SGroupUp = styled.div`
  display: flex;
  gap: 5px;

  @media screen and ${devices.laptopS} {
    gap: 0;
    flex-direction: column;
  }
`;

export const SCity = styled.p`
  color: #5d5d5d;
  font-size: 13px;
  font-weight: 500;
`;

export const SStreet = styled.span`
  color: #939393;
  font-size: 13px;
`;

export const SGridHorizontal = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media screen and ${devices.laptopS} {
    gap: 5px;
  }
`;

export const SBuilding = styled.h3`
  color: ${colors.saladGreen};
  font-size: 14px;
  display: flex;
  padding: 5px 0;

  @media screen and ${devices.laptopS} {
    display: none;
  }
`;

export const SGroupLeft = styled(Flex)`
  gap: 5px;

  @media screen and ${devices.laptopS} {
    gap: 0;
  }
`;

export const SImage = styled.img``;

export const SText = styled.h3`
  color: ${colors.saladGreen};
  line-break: auto;
  width: 60px;
  font-size: 13px;
  text-align: left;
`;

export const SGroupRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const STextSmall = styled.p`
  color: gray;
  font-size: 13px;
  font-weight: 300;
  text-align: justify;
`;
