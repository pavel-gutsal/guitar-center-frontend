import styled from 'styled-components';
import { devices, theme } from '../../Theme';

export const SBlock = styled.div`
  width: ${theme.sizes.blockWidthLaptop}px;

  @media screen and ${devices.laptopS} {
    width: ${theme.sizes.blockWidthLaptopS}px;
  }

  @media screen and ${devices.netbook} {
    width: ${theme.sizes.blockWidthLaptopNetbook}px;
  }

  @media screen and ${devices.tablet} {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and ${devices.mobileM} {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
`;
