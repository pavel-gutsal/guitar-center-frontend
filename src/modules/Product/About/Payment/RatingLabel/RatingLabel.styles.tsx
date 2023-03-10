import styled from 'styled-components';
import { devices } from '../../../../../Theme';
import { Flex } from '../UpperBar/UpperBar.styles';

export const SRating = styled(Flex)`
  gap: 5px;

  @media screen and ${devices.mobileL} {
    gap: 0;
  }
`;

export const SRatingText = styled.h3`
  font-size: 14px;
  font-weight: 300;
  color: #9c9c9c;
  transform: translateX(20px);
  padding-right: 20px;

  @media screen and ${devices.mobileL} {
    padding-right: 10px;
    transform: translateX(10px);
    font-size: 13px;
  }
`;
