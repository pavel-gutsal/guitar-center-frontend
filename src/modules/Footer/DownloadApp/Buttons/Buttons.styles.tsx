import styled from 'styled-components';
import { devices } from '../../../../Theme';

export const SButton = styled.button`
  width: 120px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  outline: none;
  border: none;
  background: linear-gradient(
    52deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(236, 236, 236, 1) 100%
  );

  @media screen and ${devices.mobileL} {
    width: 100px;
    height: 30px;
    border: 1px solid #cccccc;
  }
`;

export const SLogoGoogle = styled.img`
  height: 24px;
  transform: translateX(-5px);

  @media screen and ${devices.mobileL} {
    height: 20px;
    transform: translateX(0);
  }
`;

export const SLogoApple = styled.img`
  height: 24px;
  transform: translateX(-10px);

  @media screen and ${devices.mobileL} {
    height: 20px;
    transform: translateX(-3px);
  }
`;

export const SText = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 11px;
  font-weight: 300;
  color: #535353;
  transform: translateX(-5px);

  @media screen and ${devices.mobileL} {
    font-size: 10px;
  }
`;

export const SApple = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 11px;
  font-weight: 300;
  color: #535353;
  transform: translateX(5px);

  @media screen and ${devices.mobileL} {
    font-size: 10px;
  }
`;

export const STitle = styled.span`
  font-size: 14px;
  font-weight: 500;

  @media screen and ${devices.mobileL} {
    font-size: 13px;
    font-weight: 400;
  }
`;
