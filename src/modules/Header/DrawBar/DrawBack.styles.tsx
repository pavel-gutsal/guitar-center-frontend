import styled from 'styled-components';
import { colors, theme } from '../../../Theme';

interface SBackgroundProps {
  open: boolean;
}

export const SBackground = styled.div<SBackgroundProps>`
  opacity: ${({ open }) => (open ? 1 : 0)};
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? 0 : '100%')};
  width: 100vw;
  height: 100vh;
  background-color: rgba(80, 80, 80, 0.3);
  backdrop-filter: blur(10px);
  z-index: 11;
  transition: opacity 0.4s ease-in-out;
`;

interface SDrawBarProps {
  open: boolean;
}

export const SDrawBar = styled.div<SDrawBarProps>`
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? 0 : '-110%')};
  width: 400px;
  height: 100vh;
  background: ${colors.darkHeader};
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  align-items: flex-end;
  z-index: 12;
  transition: all 0.4s ease-in-out;

  @media screen and (max-width: ${theme.mobile}) {
    width: 100%;
  }
`;

export const SListContainer = styled.ul`
  padding-top: 10px;
  width: 100%;
`;

export const SListItem = styled.li`
  height: 50px;
  display: flex;
  align-items: center;
`;

export const SLinkSX = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 20px 0 40px',
  lineHeight: '50px',
  borderRadius: '0',
  borderBottom: `1px solid ${colors.greyFont}`,
  borderTop: `1px solid ${colors.darkHeader}`,
  transition: 'all 0.3s ease-in-out',
  color: `${colors.greyFont}`,

  '&:hover, &:focus': {
    borderBottom: `1px solid ${colors.blueHeighlight}`,
    borderTop: `1px solid ${colors.blueHeighlight}`,
    color: `${colors.blueHeighlight}`,
  },
};

export const SCloseButtonSX = {
  width: '60px',
  height: '60px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: '20px',
  borderRadius: '50%',
  border: `none`,
  transition: 'all 0.3s ease-in-out',
  color: `${colors.greyFont}`,

  '&:hover, &:focus': {
    color: `${colors.blueHeighlight}`,
  },
};
