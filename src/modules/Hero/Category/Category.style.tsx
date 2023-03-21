import styled from 'styled-components';
import { devices } from '../../../Theme';

export const SCategory = styled.div`
  position: relative;
  width: 100%;
  margin-top: -250px;
  height: calc(100vh - 250px);

  @media screen and ${devices.default} {
    height: calc(100vh - 200px);
    margin-top: -200px;
  }

  @media screen and ${devices.netbook} {
    height: calc(100vh - 150px);
    margin-top: -150px;
  }
  @media screen and ${devices.netbookS} {
    display: none;
  }
`;

export const SWrapper = styled.div`
  position: absolute;
  top: 20%;
  left: 55%;
`;

export const SContainer = styled.div`
  position: relative;
  transform: scale(0.6);
  z-index: 2;

  @media screen and ${devices.default} {
    transform: scale(0.5);
  }

  @media screen and ${devices.laptop} {
    transform: scale(0.4);
    left: 50%;
  }

  @media screen and ${devices.laptopS} {
    transform: scale(0.35);
    left: 50%;
  }
`;

export const SButtonCategory = styled.div`
  position: absolute;
  cursor: pointer;
  border: none;
  background: none;
  transition: 0.3s;

  & span {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover span:nth-of-type(1) {
    transform: translateX(0px) translateY(0px) translateZ(0px);
    background-color: rgba(131, 133, 255, 0.5);
  }

  &:hover span:nth-of-type(2) {
    background-color: rgba(56, 255, 235, 0.5);
  }

  &:hover span:nth-of-type(3) {
    background-color: rgba(255, 252, 155, 0.5);
  }

  &:hover span:nth-of-type(4) {
    background-color: rgba(255, 230, 41, 0.5);
  }

  &:hover span:nth-of-type(5) {
    background-color: hsla(6, 100%, 67%, 0.5);
  }
`;

export const SButtonMobile = styled(SButtonCategory)`
  top: 200px;
  left: 100px;
  width: 200px;
  height: 400px;
  transform: perspective(1000px) rotateX(50deg) rotateY(-5deg) rotateZ(40deg)
    translateX(0px) translateY(0px) translateZ(0px) skewX(-6deg) skewY(5deg);

  & span {
    top: 0;
    left: 0;
    border-radius: 10px;
  }

  &:hover span:nth-of-type(2) {
    transform: translateX(-15px) translateY(-10px) translateZ(-20px);
  }

  &:hover span:nth-of-type(3) {
    transform: translateX(-30px) translateY(-20px) translateZ(-40px);
  }

  &:hover span:nth-of-type(4) {
    transform: translateX(-45px) translateY(-30px) translateZ(-60px);
  }

  &:hover span:nth-of-type(5) {
    transform: translateX(-60px) translateY(-40px) translateZ(-80px);
  }
`;

export const SImage = styled.img`
  width: 90%;
  max-height: 100%;
  object-fit: contain;
`;

export const SButtonTablet = styled(SButtonCategory)`
  top: 260px;
  left: 290px;
  width: 350px;
  height: 500px;
  transform: perspective(1000px) rotateX(50deg) rotateY(-5deg) rotateZ(-50deg)
    translateX(0px) translateY(0px) translateZ(0px) skewX(-6deg) skewY(-5deg);
  z-index: 2;

  & span {
    border-radius: 15px;
  }

  &:hover span:nth-of-type(2) {
    transform: translateX(15px) translateY(-20px) translateZ(-60px);
  }

  &:hover span:nth-of-type(3) {
    transform: translateX(30px) translateY(-40px) translateZ(-80px);
  }

  &:hover span:nth-of-type(4) {
    transform: translateX(45px) translateY(-60px) translateZ(-100px);
  }

  &:hover span:nth-of-type(5) {
    transform: translateX(60px) translateY(-80px) translateZ(-120px);
  }
`;

export const SButtonLaptop = styled(SButtonCategory)`
  top: 5px;
  left: 395px;
  width: 400px;
  height: 500px;
  transform: perspective(1000px) rotateX(50deg) rotateY(-5deg) rotateZ(-50deg)
    translateX(0px) translateY(0px) translateZ(0px) skewX(6deg) skewY(5deg);

  & span {
    border-radius: 20px;
  }

  & span img {
    object-fit: contain;
    height: 96%;
  }

  &:hover span:nth-of-type(2) {
    transform: translateX(15px) translateY(-20px);
  }

  &:hover span:nth-of-type(3) {
    transform: translateX(30px) translateY(-40px);
  }

  &:hover span:nth-of-type(4) {
    transform: translateX(45px) translateY(-60px);
  }

  &:hover span:nth-of-type(5) {
    transform: translateX(60px) translateY(-80px);
  }
`;
