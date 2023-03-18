import styled, { keyframes } from 'styled-components';

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

export const SFormWrapper = styled.div`
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

export const SForm = styled.form`
  /* background: white; */
  /* border: 1px solid #f6f9fc;
  border-radius: 7px;
  z-index: 2;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 0px 10px 0 rgba(59, 59, 59, 0.4); */
`;

export const SButton = styled.button`
  background: #635bff;
  border-radius: 5px;
  color: white;
  border: 0;
  padding: 12px 16px;
  margin-top: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: block;

  &:hover {
    filter: contrast(115%);
  }

  &:active {
    transform: translateY(0px) scale(0.98);
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.5;
    cursor: none;
  }
`;
