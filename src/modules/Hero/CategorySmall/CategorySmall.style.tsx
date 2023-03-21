import styled from 'styled-components';
import { devices } from '../../../Theme';

export const SCategorySmall = styled.div`
  display: none;

  @media screen and ${devices.netbookS} {
    margin-top: -50px;
    display: flex;
    justify-content: center;
  }

  @media screen and ${devices.tabletS} {
    margin-top: 0px;
    display: flex;
    justify-content: center;
  }
`;

export const SHorizontalGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: baseline;
  width: 280px;
  position: relative;
  left: 30%;

  @media screen and ${devices.mobileL} {
    left: 25%;
    width: 200px;
  }

  @media screen and (max-width: 390px) {
    left: 20%;
  }
`;

export const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const SText = styled.h3`
  font-size: 22px;
  color: #2d2d2d;

  @media screen and ${devices.tabletS} {
    font-size: 18px;
  }
`;
