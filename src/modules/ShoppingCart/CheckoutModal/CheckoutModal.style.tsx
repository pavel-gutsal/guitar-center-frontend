import styled, { keyframes } from 'styled-components';
import { colors } from '../../../Theme';

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
 100% { opacity: 1; width: 95vw; height: 90vh; }
`;

const dissappearModal = keyframes`
 0% { opacity: 1; width: 95vw; height: 90vh; }
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
  animation-name: ${({ fadeOut }) => (fadeOut ? dissappearModal : appearModal)};
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
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
  display: flex;
  flex: 1;
`;
