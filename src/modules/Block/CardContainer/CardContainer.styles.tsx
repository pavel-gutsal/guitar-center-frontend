import styled from 'styled-components';
import { devices, theme } from '../../../Theme';

interface SCartContainerProps {
  cartsNumber: number;
}

export const SCartContainer = styled.div<SCartContainerProps>`
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, ${theme.sizes.cardWidthLaptop}px);
  grid-template-rows: ${({ cartsNumber }) =>
    `repeat(${Math.ceil(cartsNumber / 4)}, 442px)`};
  gap: 10px;
  padding-bottom: 20px;

  @media screen and ${devices.laptopS} {
    grid-template-columns: repeat(4, ${theme.sizes.cardWidthLaptopS}px);
  }

  @media screen and ${devices.netbook} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: ${({ cartsNumber }) =>
      `repeat(${Math.ceil(cartsNumber / 3)}, 442px)`};
  }

  @media screen and ${devices.tabletS} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: ${({ cartsNumber }) =>
      `repeat(${Math.ceil(cartsNumber / 2)}, 442px)`};
  }

  @media screen and ${devices.mobileL} {
    grid-template-rows: ${({ cartsNumber }) =>
      `repeat(${Math.ceil(cartsNumber / 2)}, 368px)`};
  }

  @media screen and ${devices.mobileM} {
    grid-template-rows: ${({ cartsNumber }) =>
      `repeat(${Math.ceil(cartsNumber / 2)}, 283px)`};
  }

  @media screen and ${devices.mobileM} {
    grid-template-rows: ${({ cartsNumber }) =>
      `repeat(${Math.ceil(cartsNumber / 2)}, 273px)`};
    gap: 7px;
  }
`;
