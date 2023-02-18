import styled from 'styled-components';
import { colors, devices } from '../../../Theme';

export const StyledContentLeft = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  @media screen and ${devices.laptopS} {
    display: none;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
`;

export const StyledLi = styled.li`
  height: 100%;
`;

export const Styledh3 = styled.h3`
  color: ${colors.greyFont};
  line-height: 60px;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus {
    cursor: pointer;
    color: ${colors.blueHeighlight};
  }
`;

export const ButtonWideSX = {
  width: '120px',
  height: '60px',
  'line-height': '60px',
  'border-radius': '0',
  'border-bottom': `3px solid ${colors.darkHeader}`,
  transition: 'all 0.3s ease-in-out',
  color: `${colors.greyFont}`,

  '&:hover, &:focus': {
    'border-bottom': `3px solid ${colors.blueHeighlight}`,
    color: `${colors.blueHeighlight}`,
  },
};
