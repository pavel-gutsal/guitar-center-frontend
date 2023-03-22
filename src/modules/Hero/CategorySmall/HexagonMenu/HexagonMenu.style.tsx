import styled, { keyframes } from 'styled-components';
import { devices } from '../../../../Theme';

const appearHexagon = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const animateBefore = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const animateAfter = keyframes`
  0% {
    transform: rotate(-180deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

export const SHexagonMenu = styled.div`
  padding: 50px 0;

  @media screen and ${devices.mobileL} {
    padding: 30px 0;
  }
`;

export const SImage = styled.img`
  transform: scale(1);
  transition: all 0.3s ease-in-out;

  @media screen and ${devices.mobileL} {
    transform: scale(0.7);
  }
`;

export const SContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SGroupFirst = styled.div`
  display: flex;
`;

export const SGroupLast = styled(SGroupFirst)`
  transform: translateY(-30px);

  @media screen and ${devices.tabletS} {
    transform: translateY(-20px);
  }

  @media screen and ${devices.mobileL} {
    transform: translateY(-15px);
  }

  @media screen and (max-width: 390px) {
    transform: translateY(-10px);
  }
`;

export const SContent = styled.div`
  background: #f3f3f3;
  position: absolute;
  inset: 5px;
  z-index: 1;
  border-radius: 18px;
  clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s ease;

  @media screen and ${devices.tabletS} {
    inset: 3px;
  }
`;

interface InViewProp {
  inView: boolean;
  delay: number;
}

export const SHexagon = styled.button<InViewProp>`
  position: relative;
  width: 150px;
  height: 188px;
  margin: 0 10px;
  clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
  background: rgb(244, 254, 255);
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transform: scale(0.8);
  opacity: 0;
  animation-name: ${({ inView }) => inView && appearHexagon};
  animation-duration: 0.2s;
  animation-delay: ${({ delay }) => `${delay * 0.2}s`};
  animation-fill-mode: forwards;

  &::before {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background: conic-gradient(transparent, transparent, transparent, #2ac0fc);
    animation: ${animateBefore} 4s linear infinite;
    overflow: hidden;
  }

  &::after {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background: conic-gradient(transparent, transparent, transparent, #f929ee);
    animation: ${animateAfter} 4s linear infinite;
    overflow: hidden;
  }

  &:hover ${SContent} {
    background: rgb(244, 254, 255);
    cursor: pointer;
  }

  &:hover ${SImage} {
    transform: scale(1.1);

    @media screen and ${devices.mobileL} {
      transform: scale(0.9);
    }
  }

  @media screen and ${devices.tabletS} {
    width: 128px;
    height: 160px;
  }

  @media screen and ${devices.mobileL} {
    width: 100px;
    height: 125px;
  }

  @media screen and (max-width: 390px) {
    width: 80px;
    height: 100px;
  }
`;
