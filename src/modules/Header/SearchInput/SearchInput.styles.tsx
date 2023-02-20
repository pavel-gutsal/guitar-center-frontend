import styled from 'styled-components';
import { colors, devices } from '../../../Theme';

export const StyledContainer = styled.div`
  position: relative;
  margin: 0 20px;
`;

export const StyledInput = styled.input`
  min-width: 400px;
  height: 40px;
  border-radius: 20px;
  padding: 0 20px 0 40px;
  outline: none;
  border: 2px solid white;
  transition: all 0.3s ease-in-out;
  background: #f3f3f3;

  &:focus,
  &:active {
    border: 2px solid ${colors.blueHeighlight};
    background: white;
  }

  @media screen and ${devices.laptopS} {
    min-width: 350px;
  }
`;
