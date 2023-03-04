import styled from 'styled-components';
import { devices } from '../../../../Theme';
import { SBlock } from '../About.styles';

export const SPayment = styled(SBlock)`
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media screen and ${devices.tabletS} {
    gap: 10px;
  }
`;

export const STitle = styled.h3`
  font-size: 30px;
  color: #262626;
  font-weight: 500;

  @media screen and ${devices.netbookS} {
    display: none;
  }
`;

export const SUpperBarWrapper = styled.h3`
  @media screen and ${devices.netbookS} {
    display: none;
  }
`;
