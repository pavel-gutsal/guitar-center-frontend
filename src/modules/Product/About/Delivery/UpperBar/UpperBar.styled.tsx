import styled from 'styled-components';
import { colors, devices } from '../../../../../Theme';
import { Flex } from '../../Payment/UpperBar/UpperBar.styles';

export const SUpperBar = styled(Flex)`
  gap: 20px;
  justify-content: flex-start;
  padding-top: 10px;

  @media screen and ${devices.mobileL} {
    gap: 10px;
  }
`;

export const SText = styled.h3`
  font-size: 14px;
`;

export const SLocation = styled(Flex)`
  fill: ${colors.saladGreen};
  color: ${colors.saladGreen};
  font-size: 14px;
`;
