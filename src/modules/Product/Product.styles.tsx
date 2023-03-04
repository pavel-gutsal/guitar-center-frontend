import styled from 'styled-components';
import { devices, theme } from '../../Theme';

export const SProduct = styled.div`
  width: 100%;
  padding: 0 ${theme.sizes.paddingLaptop};

  @media screen and ${devices.laptop} {
    padding: 0 20px;
  }
`;
