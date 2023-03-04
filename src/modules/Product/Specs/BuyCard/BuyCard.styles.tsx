import styled from 'styled-components';
import { devices, theme } from '../../../../Theme';
import { SBlock } from '../Specs.styles';

export const SBuyCard = styled(SBlock)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: fit-content;
  padding: 24px;
  position: sticky;
  top: ${theme.sizes.stickyAfterTabBarLaptop};

  @media screen and ${devices.netbookS} {
    display: none;
  }
`;
export const SImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 255px;
`;

export const SImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
`;

export const SModelTitle = styled.h3`
  color: #363636;
  font-size: 18px;
  padding-bottom: 10px;
`;

export const SGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SCashBack = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  transform: scale(0.7) translateX(-60px);
`;

export const SText = styled.h3`
  font-size: 16px;
  color: gray;
`;

export const SButtonBuyWrapper = styled.div`
  height: 46px;
  width: 100%;
`;
