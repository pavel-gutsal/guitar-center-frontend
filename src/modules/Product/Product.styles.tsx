import styled from 'styled-components';
import { devices, theme } from '../../Theme';

export const SProduct = styled.div`
  width: 100%;
  padding: 0 ${theme.sizes.paddingLaptop};

  @media screen and ${devices.laptop} {
    padding: 0 20px;
  }

  @media screen and ${devices.netbookS} {
    padding: 0 10px;
  }

  @media screen and ${devices.mobileS} {
    padding: 0 5px;
  }
`;
