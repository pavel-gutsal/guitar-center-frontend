import styled from 'styled-components';
import { devices } from '../../../Theme';

export const SWhiteCurve = styled.div`
  position: relative;
  top: -250px;
  width: 100%;

  @media screen and ${devices.default} {
    top: -200px;
  }

  @media screen and ${devices.netbook} {
    top: -150px;
  }

  @media screen and ${devices.netbookS} {
    top: -120px;
  }

  @media screen and ${devices.tabletS} {
    top: -100px;
  }

  @media screen and (max-width: 670px) {
    top: -70px;
  }

  @media screen and ${devices.mobileL} {
    top: -50px;
  }

  @media screen and ${devices.mobileS} {
    top: -35px;
  }
`;

export const SImage = styled.img`
  width: 100%;
`;
