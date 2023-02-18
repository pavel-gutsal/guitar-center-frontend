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
  'border-radius': '0',
  'border-bottom': `3px solid ${colors.darkHeader}`,
  transition: 'all 0.3s ease-in-out',

  '&:hover, &:focus': {
    'border-bottom': `3px solid ${colors.blueHeighlight}`,
  },
};
