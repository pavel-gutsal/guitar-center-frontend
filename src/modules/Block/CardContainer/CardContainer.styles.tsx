import styled from 'styled-components';
import { theme } from '../../../Theme';

interface SCartContainerProps {
  cartsNumber: number;
}

export const SCartContainer = styled.div<SCartContainerProps>`
  width: ${theme.sizes.blockWidthLaptop}px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: ${({ cartsNumber }) =>
    `repeat(${Math.ceil(cartsNumber / 4)}, 442px)`};
  gap: 10px;
  padding-bottom: 20px;
`;
