import styled, { keyframes } from 'styled-components';
import { colors, devices } from '../../../Theme';

const appearBackground = keyframes`
 0% { opacity: 0;}
 100% { opacity: 1; }
`;

const disappearBackground = keyframes`
  0% { opacity: 1;}
  100% { opacity: 0; }
`;

const appearModal = keyframes`
 0% { opacity: 0; width: 0vw; height: 0vh; }
 100% { opacity: 1; width: 95vw; height: 95vh; }
`;

const dissappearModal = keyframes`
 0% { opacity: 1; width: 95vw; height: 95vh; }
 100% { opacity: 0; width: 0vw; height: 0vh; }
`;

const appearModalL = keyframes`
 0% { opacity: 0; width: 0vw; height: 0vh; }
 100% { opacity: 1; width: 1300px; height: 80vh; }
`;

const dissappearModalL = keyframes`
 0% { opacity: 1; width: 1300px; height: 80vh; }
 100% { opacity: 0; width: 0vw; height: 0vh; }
`;

const appearModalS = keyframes`
 0% { opacity: 0; width: 0vw; height: 0vh; }
 100% { opacity: 1; width: 100vw; height: 100vh; }
`;

const dissappearModalS = keyframes`
 0% { opacity: 1; width: 100vw; height: 100vh; }
 100% { opacity: 0; width: 0vw; height: 0vh; }
`;

export const SWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

interface FadeOutProps {
  fadeOut?: boolean;
}

export const SBackground = styled.div<FadeOutProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(55, 55, 55, 0.176);
  backdrop-filter: blur(10px);
  z-index: 1;
  animation-name: ${({ fadeOut }) =>
    fadeOut ? disappearBackground : appearBackground};
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
`;

interface SProps {
  fadeOut?: boolean;
}

export const SCheckoutModal = styled.div<SProps>`
  display: flex;
  flex-direction: column;
  width: 0;
  height: 0;
  background: white;
  z-index: 2;
  border-radius: 10px;
  animation-name: ${({ fadeOut }) =>
    fadeOut ? dissappearModalL : appearModalL};
  animation-duration: 0.4s;
  animation-fill-mode: forwards;

  @media screen and ${devices.default} {
    animation-name: ${({ fadeOut }) =>
      fadeOut ? dissappearModal : appearModal};
  }

  @media screen and ${devices.mobileL} {
    border-radius: 0;
    animation-name: ${({ fadeOut }) =>
      fadeOut ? dissappearModalS : appearModalS};
  }
`;

export const SHeader = styled.div`
  height: 40px;
  position: relative;
  border-bottom: 1px solid ${colors.skeletonWhite};
  padding: 0 30px;
  display: flex;
`;

export const SHeaderTitle = styled.h3`
  font-size: 14px;
  font-weight: 300;
  line-height: 40px;
  color: #989898;
`;

export const SContent = styled.div`
  flex: 1;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  height: calc(100% - 40px);
  padding: 30px;

  @media screen and ${devices.tablet} {
    padding: 20px;
  }

  @media screen and ${devices.tabletS} {
    display: flex;
    flex-direction: column-reverse;
    gap: 10px;
  }
`;

export const SPayment = styled.div`
  max-width: 500px;
`;

export const STotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-top: 40px;
  border-top: 2px solid #efefef;

  @media screen and ${devices.tabletS} {
    margin-top: 20px;
    padding: 10px 20px;
  }
`;

export const SText = styled.h3`
  font-size: 20px;
  font-weight: 400;
  color: #a4a4a4;
`;

export const STextPrice = styled.h3`
  font-size: 24px;
  font-weight: 500;
  color: #3d3d3d;
`;
