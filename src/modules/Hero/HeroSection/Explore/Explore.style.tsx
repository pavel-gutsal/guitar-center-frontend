import styled from 'styled-components';
import { devices } from '../../../../Theme';

export const SExplore = styled.div`
  position: absolute;
  bottom: calc(10% + 250px);
  left: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media screen and ${devices.default} {
    bottom: calc(10% + 150px);
  }

  @media screen and ${devices.netbook} {
    display: none;
  }
`;

export const SButton = styled.button`
  cursor: pointer;
  padding: 10px;
  background: none;
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const SText = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  height: 46px;
  width: 120px;
  border: 2px dotted white;
  border-radius: 15px;

  @media screen and ${devices.default} {
    height: 42px;
    width: 100px;
    font-size: 20px;
  }
`;

export const SArrowDown = styled.img`
  @media screen and ${devices.default} {
    transform: scale(0.7);
  }
`;
