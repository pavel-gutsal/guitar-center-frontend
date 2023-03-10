import styled from 'styled-components';
import { devices } from '../../../../../Theme';

export const SReviewBody = styled.div`
  padding: 24px;

  @media screen and ${devices.tabletS} {
    padding: 10px;
    padding-top: 20px;
  }
`;

export const SMainText = styled.p`
  font-size: 14px;
  color: #3a3a3a;
  padding-bottom: 20px;
`;

export const SProsAndCons = styled.div`
  display: grid;
  grid-template-columns: 40% 40%;
  gap: 10px 15px;
  padding: 10px;

  @media screen and ${devices.laptopS} {
    grid-template-columns: 1fr 1fr;
    gap: 5px 10px;
  }

  @media screen and ${devices.mobileL} {
    grid-template-columns: 1fr;
    gap: 5px 10px;
  }
`;

export const SGroupHorizontal = styled.div`
  display: flex;
  gap: 5px;
  width: 80%;
`;

export const SImage = styled.img`
  width: 24px;
  align-self: flex-start;
`;

export const SText = styled.p`
  font-size: 14px;
  color: #565656;
  padding-top: 3px;
`;