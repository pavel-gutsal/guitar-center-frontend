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

interface CompactProps {
  compact?: boolean;
}

export const SGroupCompact = styled.div<CompactProps>`
  display: ${({ compact }) => (compact ? 'flex' : 'none')};
  align-items: center;
  gap: 15px;
`;

export const SImageWrapper = styled.div<CompactProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  width: ${({ compact }) => (compact ? '150px' : 'auto')};
  height: ${({ compact }) => (compact ? 'auto' : '250px')};
`;

export const SImage = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
`;

export const SModelTitle = styled.h3<CompactProps>`
  color: #363636;
  font-size: ${({ compact }) => (compact ? '14px' : '18px')};
  padding-bottom: 10px;
  align-self: flex-start;
`;

export const SGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SCashBack = styled.div<CompactProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  transform: ${({ compact }) =>
    compact ? 'scale(0.7) translateX(-30px)' : 'scale(0.7) translateX(-60px)'};
`;

export const SText = styled.h3`
  font-size: 16px;
  color: gray;
`;

export const SButtonBuyWrapper = styled.div`
  height: 46px;
  width: 100%;
`;

export const SGroupCompactFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;
