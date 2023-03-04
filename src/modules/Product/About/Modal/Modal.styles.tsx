import styled, { keyframes } from 'styled-components';
import { devices } from '../../../../Theme';

const appearBackground = keyframes`
 0% { opacity: 0; }
 100% { opacity: 1; }
`;

const appearModal = keyframes`
 0% { opacity: 0; width: 0vw; height: 0vh; }
 100% { opacity: 1; width: 95vw; height: 90vh; }
`;

const dissapearBackground = keyframes`
   0% { opacity: 1; }
 100% { opacity: 0; }
`;

const dissappearModal = keyframes`
 0% { opacity: 1; width: 95vw; height: 95vh; }
 100% { opacity: 0; width: 0vw; height: 0vh; }
`;

interface SProps {
  visible: boolean;
  closeModalAnimation: boolean;
}

export const SModal = styled.div<SProps>`
  display: ${({ visible }) => (visible ? 'inherit' : 'none')};
  position: fixed;
  width: 95vw;
  height: 90vh;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 5;
  border-radius: 7px;
  background: white;
  animation-name: ${({ closeModalAnimation: close }) =>
    close ? dissappearModal : appearModal};
  animation-duration: 0.4s;

  @media screen and ${devices.netbookS} {
    display: none;
  }
`;

export const SBackground = styled.div<SProps>`
  display: ${({ visible }) => (visible ? 'inherit' : 'none')};
  background: rgba(51, 51, 51, 0.2);
  backdrop-filter: blur(10px);
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 4;
  animation-name: ${({ closeModalAnimation: close }) =>
    close ? dissapearBackground : appearBackground};
  animation-duration: 0.4s;
  transition: all 0.4s ease-in-out;

  @media screen and ${devices.netbookS} {
    display: none;
  }
`;

export const SModalContent = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;
