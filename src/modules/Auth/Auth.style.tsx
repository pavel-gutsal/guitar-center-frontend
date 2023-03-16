import styled, { keyframes } from 'styled-components';
import { colors, devices } from '../../Theme';

const appearBackground = keyframes`
 0% { opacity: 0;}
 100% { opacity: 1; }
`;

const disappearBackground = keyframes`
  0% { opacity: 1;}
  100% { opacity: 0; }
`;

const appearAuthModal = keyframes`
 0% { opacity: 0; transform: translateY(-100%) translateX(-50%);}
 35% { opacity: 1; transform: translateY(-40%) translateX(-50%);}
 65% { opacity: 1; transform: translateY(-57%) translateX(-50%);}
 95% { opacity: 1; transform: translateY(-48%) translateX(-50%);}
 100% { opacity: 1; transform: translateY(-50%) translateX(-50%);}
`;

const disAppearAuthModal = keyframes`
 0% { opacity: 1; transform: translateY(-50%) translateX(-50%);}
 100% { opacity: 0; transform: translateY(0%) translateX(-50%);}
`;

interface FadeOutProps {
  fadeOut: boolean;
}

export const SBackground = styled.div<FadeOutProps>`
  position: fixed;
  cursor: pointer;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(70, 70, 70, 0.3);
  backdrop-filter: blur(10px);
  z-index: 7;
  animation-name: ${({ fadeOut }) =>
    fadeOut ? disappearBackground : appearBackground};
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
`;

export const SAuthModal = styled.div<FadeOutProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  background: ${colors.backgroundApp};
  z-index: 8;
  border-radius: 15px;
  box-shadow: 0 0 10px 0 rgba(58, 58, 58, 0.4);
  animation-name: ${({ fadeOut }) =>
    fadeOut ? disAppearAuthModal : appearAuthModal};
  animation-duration: ${({ fadeOut }) => (fadeOut ? '0.4s' : '0.8s')};
  animation-fill-mode: forwards;
`;

export const SModalContainer = styled.div`
  border-radius: 15px;
  background: white;
  overflow: hidden;
`;

export const SButton = styled.button`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const SCloseModalButton = styled(SButton)`
  width: 40px;
  height: 40px;
  position: absolute;
`;

export const SModalHeader = styled.div`
  position: relative;
  padding: 0 25px;
  height: 40px;
  border-bottom: 1px solid #d8d8d8;
  display: flex;
  align-items: center;
`;

export const STitle = styled.h3`
  color: grey;
  font-size: 13px;
`;

const appearIphone = keyframes`
 0% { left:60px; top: 100px;}
 100% { left: -150px; top: 0px;}
`;

const appearSamsung = keyframes`
 0% { right:60px; top: 100px}
 100% { right: -150px; top: -10px;}
`;

const appearLeft = keyframes`
 0% { left:0; top: 100px; }
 100% { left: -240px; top: 220px; }
`;

const appearRight = keyframes`
 0% { right:0; top: 100px; }
 100% { right: -250px; top: 220px; }
`;

export const SImage = styled.img`
  position: absolute;
  width: auto;
  height: 300px;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  z-index: -1;

  @media screen and ${devices.tablet} {
    display: none;
  }
`;

export const SCrownIphone = styled(SImage)`
  top: 100px;
  left: 60px;
  transform: rotate(330deg);
  animation-name: ${appearIphone};
  animation-delay: 1s;
`;

export const SCrownSamsung = styled(SImage)`
  top: 100px;
  right: 60px;
  transform: rotate(30deg);
  animation-name: ${appearSamsung};
  animation-delay: 1.1s;
`;

export const SCrownLeft = styled(SImage)`
  top: 100px;
  left: 0;
  animation-name: ${appearLeft};
  animation-delay: 1.2s;
`;

export const SCrownRight = styled(SImage)`
  top: 100px;
  right: 0;
  animation-name: ${appearRight};
  animation-delay: 1.3s;
`;
