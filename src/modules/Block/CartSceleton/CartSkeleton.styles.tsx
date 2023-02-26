import styled from 'styled-components';
import { colors, devices } from '../../../Theme';

export const SCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  padding: 15px;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  position: relative;
  background: white;

  &:hover,
  &:focus {
    box-shadow: 0 0 10px 0 #00000040;
  }

  @media screen and ${devices.mobileM} {
    padding: 10px;
  }
`;

export const SImageContainer = styled.div`
  height: 250px;
  width: 100%;
  margin-bottom: 10px;

  @media screen and ${devices.mobileL} {
    height: 200px;
  }

  @media screen and ${devices.mobileM} {
    height: 130px;
  }
`;

export const STitle = styled.div`
  height: 40px;
  display: grid;
  grid-template-rows: repeat(2, 16px);
  gap: 5px;
  margin: 10px 0;

  @media screen and ${devices.mobileL} {
    grid-template-rows: repeat(2, 14px);
    margin: 5px 0;
  }

  @media screen and ${devices.mobileM} {
    grid-template-rows: repeat(2, 12px);
    margin: 3px 0;
    height: 30px;
  }
`;

export const SRating = styled.div`
  width: 50%;
  height: 16px;
`;

export const SButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 40px;
  gap: 10px;
  width: 100%;
  height: 40px;
  margin-top: 10px;

  @media screen and ${devices.mobileL} {
    height: 32px;
    grid-template-columns: 1fr 32px;
  }
`;

export const SPrice = styled.div`
  height: 24px;
  width: 50%;

  @media screen and ${devices.mobileL} {
    height: 19px;
  }

  @media screen and ${devices.mobileM} {
    height: 16px;
  }
`;

export const SkeletonSX = {
  backgroundColor: colors.skeletonWhite,
  height: '100%',
  borderRadius: '10px',
};

export const SkeletonSmallSX = {
  height: '100%',
  backgroundColor: colors.skeletonWhite,
  borderRadius: '10px',
  width: '75%',
};
