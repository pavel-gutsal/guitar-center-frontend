import styled, { keyframes } from 'styled-components';
import { devices } from '../../../Theme';

const animateText = keyframes`
  0% {
    opacity: 0; bottom: -100px;
    transform: scale(0.5);
  }
  50% {
    opacity: 1; bottom: 10px;
    transform: scale(1);
  }
  100% {
    opacity: 1; bottom: 0;
    transform: scale(1);
  }
`;

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

interface AnimateProps {
  animate: boolean;
}

export const SHorizontalGroup = styled.div<AnimateProps>`
  display: flex;
  gap: 10px;
  align-items: baseline;
  width: 280px;
  position: relative;
  left: 30%;
  opacity: 0;
  bottom: -100px;
  transform: scale(0.5);
  animation-name: ${({ animate }) => animate && animateText};
  animation-duration: 1s;
  animation-fill-mode: forwards;

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
  position: relative;
  font-size: 22px;
  color: #222222;

  @media screen and ${devices.tabletS} {
    font-size: 18px;
  }
`;
