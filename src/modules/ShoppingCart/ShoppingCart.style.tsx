import styled from 'styled-components';
import { devices } from '../../Theme';

export const SShoppingCart = styled.div`
  display: flex;
  min-height: calc(100vh - 60px);
`;

export const SWrapper = styled.div`
  padding-top: 30px;
  display: grid;
  height: fit-content;
  grid-template-columns: 1fr 380px;
  gap: 10px;

  @media screen and ${devices.netbook} {
    grid-template-columns: 1fr 280px;
  }

  @media screen and ${devices.netbookS} {
    grid-template-columns: 1fr 260px;
  }

  @media screen and ${devices.tabletS} {
    grid-template-columns: 1fr;
  }
`;

export const SCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
