import styled, { keyframes } from 'styled-components';
import { Tab } from '../../../constants';
import { colors, devices, theme } from '../../../Theme';

interface STabBarProps {
  shadow: boolean;
}

export const STabBar = styled.div<STabBarProps>`
  width: 100%;
  background: white;
  overflow: hidden;
  box-shadow: ${({ shadow }) => (shadow ? '0 0 7px 0 #9f9f9f' : 'none')};
  border-radius: ${({ shadow }) => (shadow ? '0' : '4px')};
  position: sticky;
  top: ${theme.sizes.header};
  margin-bottom: 20px;
  z-index: 1;
`;

interface SSegmentedProps {
  tab: Tab;
}

export const SSegemented = styled.div<SSegmentedProps>`
  width: 510px;
  height: 72px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: relative;

  &::after {
    content: '';
    width: 170px;
    height: 3px;
    position: absolute;
    bottom: 0;
    left: ${({ tab }) => {
      if (tab === Tab.ABOUT) return '0px';
      if (tab === Tab.SPECIFICATION) return '170px';
      return '340px';
    }};
    background: linear-gradient(52deg, rgba(241, 121, 0, 1) 0%, #ffbc1e 100%);
    transition: all 0.3s ease-in-out;
  }

  @media screen and ${devices.tabletS} {
    height: 48px;
    width: 100%;

    &::after {
      width: calc(100% / 3);
      left: ${({ tab }) => {
        if (tab === Tab.ABOUT) return '0px';
        if (tab === Tab.SPECIFICATION) return 'calc(100% / 3)';
        return 'calc(100% / 3 * 2)';
      }};
    }
  }
`;

const appear = keyframes`
 0% { background: #fff; height: 0; width: 0; opacity: 0.5; }
 100% { background: #c6c6c6; height: 200px; width: 200px; opacity: 0; }
`;

export const SButton = styled.button`
  width: 100%;
  height: 100%;
  font-size: 16px;
  text-transform: uppercase;
  background: white;
  outline: none;
  border: none;
  position: relative;
  color: ${colors.greyFont};
  font-weight: 400;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &::before {
    content: '';
    width: 1px;
    height: 50%;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background: ${colors.whitish};
  }

  &:first-child::before {
    content: none;
  }

  &::after {
    border-radius: 50%;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%);
  }

  &:hover,
  &:focus {
    background: ${colors.backgroundApp};
    color: #6e6e6e;
  }

  &:hover::after,
  &:focus::after {
    height: 500%;
    animation: ${appear};
    animation-duration: 0.7s;
  }

  @media screen and ${devices.mobileL} {
    font-size: 14px;
  }

  @media screen and ${devices.mobileM} {
    font-size: 13px;
  }

  @media screen and ${devices.mobileS} {
    font-size: 12px;
  }
`;
