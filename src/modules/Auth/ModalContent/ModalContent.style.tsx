import styled from 'styled-components';
import { colors, devices } from '../../../Theme';
import { SButton } from '../Auth.style';

interface ModalProps {
  signup?: boolean;
  fadeOut?: boolean;
}

export const SModalContent = styled.div<ModalProps>`
  padding: 15px 40px 40px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  opacity: ${({ fadeOut }) => (fadeOut ? 0 : 1)};
  height: ${({ signup }) => (signup ? '520px' : '365px')};
  min-height: 300px;
  transition: all 0.3s ease-in-out;

  @media screen and ${devices.mobileL} {
    padding: 15px 15px 15px 15px;
    width: 90vw;
    max-width: 370px;
  }
`;

export const STitle = styled.h1`
  font-size: 46px;
  font-weight: 500;
  text-align: center;
  padding-bottom: 20px;
  background: -webkit-linear-gradient(rgba(11, 0, 191), rgba(235, 0, 255));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const STextGroup = styled.div`
  padding-top: 40px;
  display: flex;
  gap: 10px;
  align-items: baseline;
  justify-content: center;
`;

export const SText = styled.p`
  font-size: 16px;
  color: #383838;

  @media screen and ${devices.mobileL} {
    font-size: 14px;
  }
`;

export const SMethodSwitch = styled(SButton)`
  font-size: 16px;
  color: ${colors.blueHeighlight};

  @media screen and ${devices.mobileL} {
    font-size: 14px;
  }
`;
