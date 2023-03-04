import styled from 'styled-components';
import { colors, devices } from '../../../../../Theme';
import { Flex } from '../../Payment/UpperBar/UpperBar.styles';

export const SAccardion = styled.div`
  border: 1px solid #d4d4d4;
  border-radius: 10px;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export const SButton = styled.button`
  background: none;
  border: none;
  width: 100%;
  height: auto;
  cursor: pointer;
`;

export const STitleContent = styled.div`
  padding: 10px 15px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 90px;

  @media screen and ${devices.mobileL} {
    grid-template-columns: 1fr 60px;
  }
`;

interface SOpenProps {
  open?: boolean;
  height?: string;
}

export const SImage = styled.img<SOpenProps>`
  transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: all 0.3s ease-in-out;
`;

export const SImageArrow = styled(SImage)`
  @media screen and ${devices.mobileL} {
    display: none;
  }
`;

export const SAvailableWrapper = styled(Flex)`
  font-size: 13px;
  gap: 10px;
  color: ${colors.saladGreen};
  background: #f8ffec;
  width: fit-content;
  padding: 0 8px;
  border-radius: 15px;

  @media screen and ${devices.mobileL} {
    display: none;
  }
`;

export const SSVGWrapper = styled(Flex)`
  justify-content: flex-start;
  font-size: 14px;
  gap: 8px;
`;

export const SBaldText = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: #313131;
`;

export const SGroup = styled(Flex)`
  justify-content: flex-end;
  gap: 10px;
`;

export const SChildrenContent = styled.div<SOpenProps>`
  padding: ${({ open }) => (open ? '10px 15px' : ' 0px 15px')};
  height: ${({ open, height }) => (open ? height || '140px' : '0px')};
  transition: all 0.3s ease-in-out;

  @media screen and ${devices.mobileL} {
    padding: 0;
    height: 0;
  }
`;

export const SGroupVertical = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #535353;
  text-align: justify;
`;

export const SHiddenText = styled.p`
  display: none;

  @media screen and ${devices.mobileL} {
    display: inherit;
    font-size: 13px;
    color: ${colors.saladGreen};
  }
`;
