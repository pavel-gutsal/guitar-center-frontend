import styled from 'styled-components';

interface SCartContainerProps {
  cartsNumber: number;
}

export const SCartContainer = styled.div<SCartContainerProps>`
  width: ${270 * 4 + 10 * 3}px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: ${({ cartsNumber }) =>
    `repeat(${Math.ceil(cartsNumber / 4)}, 442px)`};
  gap: 10px;
`;
