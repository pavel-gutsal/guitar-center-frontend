import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { devices } from '../../../Theme';

const moveUpAndDown = keyframes`
  0% {
    top: 0;
  }
  25% {
    top: 50px;
  }
  50% {
    top: 0;
  }
  75% {
    top: -50px;
  }
  100% {
    top: 0px;
  }
`;

const moveUpAndDownSmall = keyframes`
  0% {
    top: 0;
  }
  25% {
    top: 30px;
  }
  50% {
    top: 0;
  }
  75% {
    top: -30px;
  }
  100% {
    top: 0px;
  }
`;

export const SLandingSlider = styled.div`
  position: absolute;
  right: 18%;
  top: 20%;
  width: 800px;
  height: 700px;

  @media screen and ${devices.hd} {
    right: 12%;
    width: 600px;
    height: 600px;
  }

  @media screen and ${devices.default} {
    right: 15%;
    width: 500px;
    height: 500px;
  }

  @media screen and ${devices.laptop} {
    width: 450px;
    height: 450px;
  }

  @media screen and ${devices.laptopS} {
    width: 400px;
    height: 400px;
  }

  @media screen and ${devices.netbook} {
    right: 5%;
  }

  @media screen and ${devices.tablet} {
    top: 15%;
  }

  @media screen and ${devices.tabletS} {
    top: 300px;
  }

  @media screen and ${devices.mobileL} {
    top: 350px;
    width: 350px;
    height: 350px;
  }

  @media screen and ${devices.mobileM} {
    width: 280px;
    height: 280px;
    right: 10%;
  }
`;

export const SImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const SVerticalMovement = styled.div`
  position: relative;
  animation: ${moveUpAndDown} 5s linear infinite;

  @media screen and ${devices.mobileL} {
    animation: ${moveUpAndDownSmall} 5s linear infinite;
  }
`;

export const SImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: fit-content;
`;
