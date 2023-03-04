import styled from 'styled-components';
import { devices } from '../../../../Theme';

export const SSpecsBriefIcon = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);

  @media screen and ${devices.netbook} {
    gap: 5px;
  }
`;

export const SGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  heigth: 100%;

  @media screen and ${devices.netbook} {
    gap: 5px;
  }
`;

export const SValue = styled.h3`
  color: #696969;
  font-size: 13px;

  @media screen and ${devices.netbookS} {
    font-size: 12px;
  }
`;

export const SDescription = styled.p`
  font-size: 13px;
  color: #929292;
  line-height: 19px;

  @media screen and ${devices.netbookS} {
    font-size: 12px;
  }
`;

export const SImage = styled.img``;

export const SVerticalGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
