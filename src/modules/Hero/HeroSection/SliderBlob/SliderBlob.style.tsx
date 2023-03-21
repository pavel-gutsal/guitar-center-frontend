import styled from 'styled-components';
import { devices } from '../../../../Theme';

export const SSliderBlob = styled.div`
  position: absolute;
  top: -30%;
  left: -20%;
  width: 150%;
  height: 150%;
  isolation: isolate;
  z-index: 0;

  @media screen and ${devices.mobileL} {
    left: -15%;
    width: 140%;
    height: 140%;
  }
`;

export const SWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const SBlob = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  &:nth-child(2) {
    filter: blur(50px);
  }
`;
