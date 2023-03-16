import styled from 'styled-components';
import { colors } from '../../../Theme';

export const StyleIconBar = styled.div`
  display: flex;
  align-items: center;
  heigth: 60px;
`;

export const ButtonSX = {
  width: '60px',
  height: '60px',
  borderRadius: '0',
  borderBottom: `3px solid ${colors.darkHeader}`,
  transition: 'all 0.3s ease-in-out',
  position: 'relative',

  '&:hover, &:focus': {
    borderBottom: `3px solid ${colors.blueHeighlight}`,
  },
};

export const SLabel = styled.h3`
  font-size: 12px;
  line-height: 16px;
  padding: 0 3px;
  background: ${colors.brightOrange};
  color: white;
  position: absolute;
  top: 7px;
  right: 12px;
  border-radius: 5px;
`;
