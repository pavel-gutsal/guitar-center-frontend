import styled from 'styled-components';
import { devices } from '../../../../Theme';

export const STextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: 20%;
  left: 5%;
  letter-spacing: 2px;

  @media screen and ${devices.default} {
    left: 5%;
  }

  @media screen and ${devices.laptopS} {
    top: 10%;
    left: 3%;
    gap: 0;
  }

`;

export const SText = styled.h3`
  display: flex;
  width: fit-content;
  color: #2e2e2e;
  position: relative;
  font-size: 72px;
  line-height: 72px;
  font-weight: 500;
  z-index: 2;

  @media screen and ${devices.default} {
    font-size: 56px;
  }

  @media screen and ${devices.laptopS} {
    font-size: 50px;
  }

  @media screen and ${devices.netbook} {
    line-height: 50px;
    font-size: 42px;
  }

  @media screen and ${devices.mobileL} {
    font-size: 42px;
  }

  @media screen and ${devices.mobileM} {
    font-size: 36px;
  }

  @media screen and ${devices.mobileS} {
    font-size: 32px;
  }
`;

export const STextSmall = styled.h3`
  display: flex;
  width: fit-content;
  color: #4e4e4e;
  position: relative;
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  padding-top: 70px;
  z-index: 2;

  @media screen and ${devices.default} {
    padding-top: 50px;
    font-size: 28px;
  }

  @media screen and ${devices.laptopS} {
    font-size: 26px;
  }

  @media screen and ${devices.netbook} {
    font-size: 22px;
    padding-top: 30px;
    font-weight: 400;
  }

  @media screen and ${devices.mobileL} {
    font-size: 18px;
  }

  @media screen and ${devices.mobileM} {
    font-size: 16px;
  }
`;
