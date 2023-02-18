import styled from 'styled-components';
import { colors, devices, theme } from '../../Theme';

export const StyledHeader = styled.header`
  width: 100vw;
  height: ${theme.sizes.header};
  background: ${colors.darkHeader};
  padding: 0 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;

  @media screen and ${devices.mobileM} {
    padding: 0 20px;
  }
`;

export const StyledHeaderContent = styled.div`
  height: ${theme.sizes.header};
  display: flex;
  justify-content: space-between;
`;
