import styled, { keyframes } from 'styled-components';
import { colors, devices } from '../../../Theme';

const appearCard = keyframes`
 0% { opacity: 0; left: -100px;}
 100% { opacity: 1; left: 0;}
`;

const disappearCard = keyframes`
  0% { opacity: 1; left: 0;}
  50% { opacity: 0; left: -100px; margin-bottom: 0;}
  100% { margin-bottom: -150px;}
`;

interface SCardProps {
  deleted: boolean;
}

export const SCard = styled.div<SCardProps>`
  position: relative;
  padding: 20px 60px 20px 20px;
  display: flex;
  width: 100%;
  gap: 10px;
  border: 1px solid ${colors.skeletonWhite};
  border-radius: 7px;
  background: white;
  height: 140px;
  left: -100px;
  opacity: 0;
  animation-name: ${({ deleted }) => (deleted ? disappearCard : appearCard)};
  animation-duration: 0.4s;
  animation-fill-mode: forwards;

  @media screen and ${devices.tabletS} {
    padding: 20px 40px 20px 10px;
  }

  @media screen and ${devices.mobileM} {
    padding: 15px 40px 15px 10px;
  }
`;

export const SImageContainer = styled.button`
  outline: none;
  border: none;
  background: white;
  height: 100px;
  max-width: 140px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and ${devices.mobileL} {
    max-width: 120px;
  }

  @media screen and ${devices.mobileM} {
    height: 100px;
    max-width: 80px;
  }
`;

export const SImage = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
`;

export const SVerticalGroup = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const SHorizontalGroup = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 100px;

  @media screen and ${devices.tablet} {
    gap: 80px;
  }

  @media screen and ${devices.mobileL} {
    gap: 40px;
  }

  @media screen and ${devices.mobileM} {
    gap: 30px;
  }
`;

export const STitle = styled.h3`
  font-size: 16px;
  color: #2f2f2f;
  max-width: 500px;

  @media screen and ${devices.mobileL} {
    font-size: 14px;
  }

  @media screen and ${devices.mobileM} {
    font-size: 13px;
  }
`;

export const SNumberGroup = styled.div`
  display: flex;
  gap: 5px;
`;

export const SButton = styled.button`
  background: none;
  border: none;
  outline: none;
  display: flex;
  justify-content: flex-start;
  text-align: justify;
  cursor: pointer;
`;

interface SButtonNumberProps {
  disabled?: boolean;
}

export const SButtonNumber = styled.button<SButtonNumberProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ disabled }) => (disabled ? '#f2f2f2 ' : '#f6f6f6')};
  outline: none;
  border: ${({ disabled }) => (disabled ? 'none' : '1px solid #eeeeee')};
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    background: ${({ disabled }) => (disabled ? '#f2f2f2 ' : '#dfdfdf')};
  }

  &:active {
    transform: ${({ disabled }) => !disabled && 'scale(1.05)'};
    background: ${({ disabled }) => (disabled ? '#f2f2f2 ' : '#bfbfbf')};
    border: ${({ disabled }) => (disabled ? 'none' : '1px solid #bfbfbf')};
  }
`;

export const SNumber = styled.h1`
  width: 24px;
  height: 24px;
  text-align: center;
  font-size: 14px;
  line-height: 24px;
  outline: none;
  border: 1px solid ${colors.skeletonWhite};
`;

export const SPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  @media screen and ${devices.mobileM} {
    gap: 2px;
  }
`;

export const SPriceCurrent = styled.h4`
  font-size: 13px;
  text-decoration: line-through;
  color: #a5a5a5;

  @media screen and ${devices.mobileM} {
    font-size: 12px;
  }
`;

export const SPriceDiscounted = styled.h3`
  color: #343434;
  font-size: 18px;

  @media screen and ${devices.mobileL} {
    font-size: 16px;
  }

  @media screen and ${devices.mobileM} {
    font-size: 14px;
  }
`;
