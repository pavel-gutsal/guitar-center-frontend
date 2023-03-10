import styled from 'styled-components';
import { devices } from '../../../../../Theme';

export const SPaymentBar = styled.div`
  display: grid;
  grid-template-columns: 100px 160px 250px 60px;
  gap: 20px;
  margin-top: 20px;

  @media screen and ${devices.laptop} {
    grid-template-columns: 100px 140px 220px 40px;
  }

  @media screen and ${devices.laptopS} {
    grid-template-columns: 100px 120px 200px 40px;
  }

  @media screen and ${devices.netbook} {
    grid-template-columns: 100px 110px 180px 40px;
    gap: 15px;
  }

  @media screen and ${devices.netbookS} {
    grid-template-columns: 100px 160px 250px 60px;
    gap: 20px;
  }

  @media screen and ${devices.tabletS} {
    grid-template-columns: 100px 1fr 1.6fr 40px;
    gap: 15px;
  }

  @media screen and ${devices.mobileL} {
    grid-template-columns: 1fr 1.5fr;
    gap: 15px;
  }
`;

export const SGroupHorizontal = styled.div`
  display: flex;
  gap: 10px;
`;
