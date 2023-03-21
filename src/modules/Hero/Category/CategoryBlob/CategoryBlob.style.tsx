import styled from 'styled-components';
import { devices } from '../../../../Theme';

export const SCategoryBlob = styled.div`
  position: absolute;
  top: -350px;
  left: -300px;
  width: 1100px;
  height: 1100px;
  isolation: isolate;

  @media screen and ${devices.default} {
    top: -220px;
    left: -200px;
    width: 800px;
    height: 800px;
  }

  @media screen and ${devices.laptop} {
    top: -200px;
    left: -150px;
    width: 700px;
    height: 700px;
  }

  @media screen and ${devices.laptopS} {
    top: -200px;
    left: -150px;
    width: 600px;
    height: 600px;
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
