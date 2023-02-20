import styled from 'styled-components';
import { devices } from '../../../Theme';

export const SBlockHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-top: 5px;

  @media screen and ${devices.netbook} {
    gap: 20px;
  }
`;

export const SBlockRouter = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: -10px;
`;

export const SBlockTitle = styled.h1`
  font-size: 24px;
  font-weight: 400;

  @media screen and ${devices.netbook} {
    font-size: 20px;
  }
`;
