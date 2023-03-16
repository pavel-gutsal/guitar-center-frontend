import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { devices } from '../../../Theme';

const appear = keyframes`
  0% { opacity: 0; top: -150%}
  20% { top: 100px;}
  40% { top: -50px;}
  60% { top: 25px;}
  80% { top: -13px;}
  100% { opacity: 1; top: 0;}
`;

export const SEmptyWishList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 350px;
  margin: 10vh auto;
  padding: 30px;
  background: #fffbd7;
  border-radius: 30px;
  box-shadow: 0 0 10px 0 rgba(49, 49, 49, 0.4);
  opacity: 0;
  top: -150%;
  animation-delay: 0.5s;
  animation-name: ${appear};
  animation-duration: 1s;
  animation-fill-mode: forwards;

  @media screen and ${devices.mobileL} {
    box-shadow: 0 0 50px 50px #fffbd7;
    width: 300px;
    gap: 15px;
  }
`;

export const SImage = styled.img`
  width: 150px;
  height: auto;

  @media screen and ${devices.mobileL} {
    width: 120px;
  }
`;

export const SText = styled.h3`
  text-align: center;
  font-size: 24px;
  color: #ff4acf;
  font-family: 'Caveat', Arial, Helvetica, sans-serif;

  @media screen and ${devices.mobileL} {
    font-size: 18px;
  }
`;

export const SLink = styled(Link)`
  font-style: italic;
  color: #8ba8ff;
  font-size: 16px;

  @media screen and ${devices.mobileL} {
    font-size: 14px;
  }
`;
