import styled from 'styled-components';
import { colors, devices } from '../../../Theme';

export const SReviews = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 7px;
  height: auto;

  @media screen and ${devices.netbookS} {
    grid-template-columns: 1fr;
  }
`;

export const SBlock = styled.div`
  background: white;
  border-radius: 5px;
  width: 100%;

  @media screen and ${devices.tabletS} {
    background: ${colors.backgroundApp};
  }
`;

export const SReviewBody = styled(SBlock)`
  padding: 24px;

  @media screen and ${devices.tabletS} {
    padding: 10px 0;
  }
`;

export const SGroupHeader = styled(SBlock)`
  @media screen and ${devices.tabletS} {
    padding: 10px;
    padding-bottom: 20px;
    background: white;
  }
`;

export const SHorizontalGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const STitle = styled.h3`
  margin: 10px 0;
  color: #252525;
  font-size: 24px;

  & span {
    color: #252525;
    font-size: 26px;
    font-size: 500;
  }
`;

export const SGroupVertical = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 5px;
`;

export const STitleElement = styled.h3`
  color: #565656;
  font-size: 13px;
  font-size: 500;
  font-style: italic;
`;
