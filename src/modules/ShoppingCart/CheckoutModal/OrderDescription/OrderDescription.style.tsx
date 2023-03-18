import styled from 'styled-components';
import { devices } from '../../../../Theme';

export const SDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  overflow: hidden;
`;

export const SDescriptionTitle = styled.h3`
  font-size: 18px;
  color: #2c2c2c;
  padding-bottom: 10px;

  @media screen and ${devices.tabletS} {
    font-size: 16px;
    color: #2c2c2c;
    padding-bottom: 10px;
  }
`;

export const SDescriptionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: calc(100% - 40px);
  overflow-y: scroll;
  color: #525252;

  @media screen and ${devices.tabletS} {
    max-height: 100%;
  }
`;

export const SCart = styled.div`
  display: flex;
  gap: 10px;
`;

export const SVerticalGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const STitle = styled.h3`
  font-size: 14px;
`;

export const SText = styled.h3`
  font-size: 14px;
  color: #6f6f6f;

  & span {
    color: #2c2c2c;
    padding-left: 10px;
  }
`;
