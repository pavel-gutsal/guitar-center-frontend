import styled from 'styled-components';
import { devices } from '../../../../Theme';

export const STextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: 20%;
  left: 10%;
  letter-spacing: 2px;

  @media screen and ${devices.default} {
    left: 5%;
  }

  @media screen and ${devices.netbook} {
    top: inherit;
    bottom: calc(20% + 50px);
  }

  @media screen and ${devices.tabletS} {
    bottom: inherit;
    top: 90px;
    z-index: 1;
  }

  @media screen and ${devices.mobileL} {
    letter-spacing: 1.5px;
  }

  @media screen and ${devices.mobileM} {
    letter-spacing: inherit;
    gap: 0;
  }
`;

export const SText = styled.h3`
  display: flex;
  width: fit-content;
  color: white;
  position: relative;
  font-size: 72px;
  line-height: 72px;
  font-weight: 500;
  z-index: 2;

  &:before {
    content: '';
    position: absolute;
    width: 105%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) skewX(-10deg);
    height: 50%;
    background: rgba(255, 16, 56, 0.4);
    z-index: -1;
  }

  @media screen and ${devices.default} {
    font-size: 60px;
  }

  @media screen and ${devices.laptopS} {
    font-size: 50px;
  }

  @media screen and ${devices.netbook} {
    font-size: 46px;
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

export const STextClipped = styled.h3`
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 2px;
  font-size: 72px;
  font-weight: 600;
  color: white;

  @media screen and ${devices.default} {
    font-size: 60px;
  }

  @media screen and ${devices.laptopS} {
    font-size: 50px;
  }

  @media screen and ${devices.netbook} {
    font-size: 46px;
  }

  @media screen and ${devices.mobileL} {
    font-size: 42px;
  }

  @media screen and ${devices.mobileS} {
    font-size: 32px;
    -webkit-text-stroke-width: 1px;
  }
`;

export const SGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
`;
